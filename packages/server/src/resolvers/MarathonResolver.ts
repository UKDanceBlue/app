import {
  DetailedError,
  ErrorCode,
  FilteredListQueryArgs,
  MarathonResource,
} from "@ukdanceblue/common";
import { DateResolver, VoidResolver } from "graphql-scalars";
import {
  Arg,
  Args,
  ArgsType,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { Service } from "typedi";

import { MarathonRepository } from "../repositories/marathon/MarathonRepository.js";
import { marathonModelToResource } from "../repositories/marathon/marathonModelToResource.js";

import { AbstractGraphQLPaginatedResponse } from "./ApiResponse.js";

@ObjectType("ListMarathonsResponse", {
  implements: AbstractGraphQLPaginatedResponse<MarathonResource[]>,
})
class ListMarathonsResponse extends AbstractGraphQLPaginatedResponse<MarathonResource> {
  @Field(() => [MarathonResource])
  data!: MarathonResource[];
}

@InputType()
class CreateMarathonInput {
  @Field()
  year!: string;

  @Field(() => DateResolver)
  startDate!: Date;

  @Field(() => DateResolver)
  endDate!: Date;
}

@InputType()
class SetMarathonInput {
  @Field(() => String)
  year!: string;

  @Field(() => DateResolver)
  startDate!: Date;

  @Field(() => DateResolver)
  endDate!: Date;
}

@ArgsType()
class ListMarathonsArgs extends FilteredListQueryArgs<
  "year" | "startDate" | "endDate" | "createdAt" | "updatedAt",
  never,
  "year",
  never,
  "startDate" | "endDate" | "createdAt" | "updatedAt",
  never
>("MarathonResolver", {
  all: ["year", "startDate", "endDate", "createdAt", "updatedAt"],
  oneOf: ["year"],
  date: ["startDate", "endDate", "createdAt", "updatedAt"],
}) {}

@Resolver(() => MarathonResource)
@Service()
export class MarathonResolver {
  constructor(private readonly marathonRepository: MarathonRepository) {}

  @Query(() => MarathonResource)
  async marathon(@Arg("uuid") uuid: string) {
    const marathon = await this.marathonRepository.findMarathonByUnique({
      uuid,
    });
    if (marathon == null) {
      throw new DetailedError(ErrorCode.NotFound, "Marathon not found");
    }
    return marathonModelToResource(marathon);
  }

  @Query(() => MarathonResource)
  async marathonForYear(@Arg("year") year: string) {
    const marathon = await this.marathonRepository.findMarathonByUnique({
      year,
    });
    if (marathon == null) {
      throw new DetailedError(ErrorCode.NotFound, "Marathon not found");
    }
    return marathonModelToResource(marathon);
  }

  @Query(() => ListMarathonsResponse)
  async marathons(@Args() args: ListMarathonsArgs) {
    const marathons = await this.marathonRepository.listMarathons(args);
    const marathonCount = await this.marathonRepository.countMarathons(args);
    return ListMarathonsResponse.newPaginated({
      data: marathons.map(marathonModelToResource),
      total: marathonCount,
      page: args.page,
      pageSize: args.pageSize,
    });
  }

  @Query(() => MarathonResource, { nullable: true })
  async currentMarathon() {
    const marathon = await this.marathonRepository.findCurrentMarathon();
    if (marathon == null) {
      return null;
    }
    return marathonModelToResource(marathon);
  }

  @Query(() => MarathonResource, { nullable: true })
  async nextMarathon() {
    const marathon = await this.marathonRepository.findNextMarathon();
    if (marathon == null) {
      return null;
    }
    return marathonModelToResource(marathon);
  }

  @Mutation(() => MarathonResource)
  async createMarathon(@Arg("input") input: CreateMarathonInput) {
    const marathon = await this.marathonRepository.createMarathon(input);
    return marathonModelToResource(marathon);
  }

  @Mutation(() => MarathonResource)
  async setMarathon(
    @Arg("uuid") uuid: string,
    @Arg("input") input: SetMarathonInput
  ) {
    const marathon = await this.marathonRepository.updateMarathon(
      { uuid },
      input
    );
    if (marathon == null) {
      throw new DetailedError(ErrorCode.NotFound, "Marathon not found");
    }
    return marathonModelToResource(marathon);
  }

  @Mutation(() => VoidResolver)
  async deleteMarathon(@Arg("uuid") uuid: string) {
    const marathon = await this.marathonRepository.deleteMarathon({ uuid });
    if (marathon == null) {
      throw new DetailedError(ErrorCode.NotFound, "Marathon not found");
    }
  }
}
