import { Service } from "@freshgum/typedi";
import type { CrudResolver, GlobalId } from "@ukdanceblue/common";
import {
  CommitteeIdentifier,
  ListFundraisingEntriesArgs,
  ListFundraisingEntriesResponse,
  MarathonNode,
} from "@ukdanceblue/common";
import {
  AccessControlAuthorized,
  AuthSource,
  BulkTeamInput,
  GlobalIdScalar,
  MembershipNode,
  PointEntryNode,
  SolicitationCodeNode,
  TeamNode,
} from "@ukdanceblue/common";
import {
  CreateTeamInput,
  ListTeamsArgs,
  ListTeamsResponse,
  SetTeamInput,
} from "@ukdanceblue/common";
import { ConcreteResult, NotFoundError } from "@ukdanceblue/common/error";
import { AsyncResult, None, Ok, Option, Some } from "ts-results-es";
import {
  Arg,
  Args,
  Ctx,
  FieldResolver,
  Float,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";

import type { GraphQLContext } from "#auth/context.js";
import { WithAuditLogging } from "#lib/logging/auditLogging.js";
import {
  fundraisingEntryModelToNode,
  solicitationCodeModelToNode,
} from "#repositories/fundraising/fundraisingEntryModelToNode.js";
import { FundraisingEntryRepository } from "#repositories/fundraising/FundraisingRepository.js";
import { marathonModelToResource } from "#repositories/marathon/marathonModelToResource.js";
import { membershipModelToResource } from "#repositories/membership/membershipModelToResource.js";
import { pointEntryModelToResource } from "#repositories/pointEntry/pointEntryModelToResource.js";
import type { AsyncRepositoryResult } from "#repositories/shared.js";
import { teamModelToResource } from "#repositories/team/teamModelToResource.js";
import { TeamRepository } from "#repositories/team/TeamRepository.js";

@Resolver(() => TeamNode)
@Service([TeamRepository, FundraisingEntryRepository])
export class TeamResolver implements CrudResolver<TeamNode, "team"> {
  constructor(
    private teamRepository: TeamRepository,
    private fundraisingEntryRepository: FundraisingEntryRepository
  ) {}

  @AccessControlAuthorized("get", ["getId", "TeamNode", "id"])
  @Query(() => TeamNode, { name: "team" })
  async team(
    @Arg("id", () => GlobalIdScalar) { id }: GlobalId
  ): Promise<ConcreteResult<Option<TeamNode>>> {
    const row = await this.teamRepository.findTeamByUnique({ uuid: id });

    if (row == null) {
      return Ok(None);
    }

    return Ok(Some(teamModelToResource(row)));
  }

  @AccessControlAuthorized("list", ["every", "TeamNode"])
  @Query(() => ListTeamsResponse, { name: "teams" })
  teams(
    @Args(() => ListTeamsArgs) query: ListTeamsArgs,
    @Ctx() ctx: GraphQLContext
  ): AsyncRepositoryResult<ListTeamsResponse> {
    return this.teamRepository
      .findAndCount({
        filters: query.filters,
        sortBy: query.sortBy,
        offset: query.offset,
        limit: query.limit,
        search: query.search,

        onlyDemo: ctx.authSource === AuthSource.Demo,
      })
      .map(({ selectedRows, total }) => {
        return ListTeamsResponse.newPaginated({
          data: selectedRows.map((row) => teamModelToResource(row)),
          total,
        });
      });
  }

  @AccessControlAuthorized("create", ["every", "TeamNode"])
  @Mutation(() => TeamNode, { name: "createTeam" })
  @WithAuditLogging()
  async createTeam(
    @Arg("input") input: CreateTeamInput,
    @Arg("marathon", () => GlobalIdScalar) marathonUuid: GlobalId
  ): Promise<TeamNode> {
    const row = await this.teamRepository.createTeam(
      {
        name: input.name,
        type: input.type,
        legacyStatus: input.legacyStatus,
      },
      { uuid: marathonUuid.id }
    );

    return teamModelToResource(row);
  }

  @AccessControlAuthorized("update", ["getId", "TeamNode", "id"])
  @Mutation(() => TeamNode, { name: "setTeam" })
  @WithAuditLogging()
  async setTeam(
    @Arg("id", () => GlobalIdScalar) { id }: GlobalId,
    @Arg("input") input: SetTeamInput
  ): Promise<TeamNode> {
    const row = await this.teamRepository.updateTeam(
      { uuid: id },
      {
        uuid: id,
        name: input.name ?? undefined,
        type: input.type ?? undefined,
        legacyStatus: input.legacyStatus ?? undefined,
        persistentIdentifier: input.persistentIdentifier,
      }
    );

    if (row == null) {
      throw new NotFoundError("Team not found");
    }

    return teamModelToResource(row);
  }

  @AccessControlAuthorized("create", ["every", "TeamNode"])
  @Mutation(() => [TeamNode], { name: "createTeams" })
  @WithAuditLogging()
  async createTeams(
    @Arg("teams", () => [BulkTeamInput]) teams: BulkTeamInput[],
    @Arg("marathonId", () => GlobalIdScalar) marathonId: GlobalId
  ): Promise<ConcreteResult<TeamNode[]>> {
    const rows = await this.teamRepository.bulkLoadTeams(teams, {
      uuid: marathonId.id,
    });

    return rows.map((rows) => rows.map((row) => teamModelToResource(row)));
  }

  @AccessControlAuthorized("delete", ["getId", "TeamNode", "id"])
  @Mutation(() => TeamNode, { name: "deleteTeam" })
  @WithAuditLogging()
  async deleteTeam(
    @Arg("id", () => GlobalIdScalar) { id }: GlobalId
  ): Promise<TeamNode> {
    const row = await this.teamRepository.deleteTeam({ uuid: id });

    if (row == null) {
      throw new NotFoundError("Team not found");
    }

    return teamModelToResource(row);
  }

  @AccessControlAuthorized("get", ["getIdFromRoot", "TeamNode", "id"])
  @FieldResolver(() => [MembershipNode])
  async members(@Root() { id: { id } }: TeamNode): Promise<MembershipNode[]> {
    const memberships = await this.teamRepository.findMembersOfTeam({
      uuid: id,
    });

    return memberships.map((row) => membershipModelToResource(row));
  }

  // TODO: Replace with a field on membership, for now the mobile app relies on it
  @AccessControlAuthorized("get", ["every", "TeamNode"])
  @FieldResolver(() => [PointEntryNode])
  async pointEntries(
    @Root() { id: { id } }: TeamNode
  ): Promise<PointEntryNode[]> {
    const rows = await this.teamRepository.getTeamPointEntries({
      uuid: id,
    });

    return rows.map((row) => pointEntryModelToResource(row));
  }

  @AccessControlAuthorized(
    "get",
    ["getIdFromRoot", "TeamNode", "id"],
    ".fundraisingTotal"
  )
  @FieldResolver(() => Float, { nullable: true })
  async fundraisingTotalAmount(
    @Root() { id: { id } }: TeamNode
  ): Promise<ConcreteResult<Option<number>>> {
    return this.teamRepository.getTotalFundraisingAmount({
      uuid: id,
    });
  }

  @FieldResolver(() => Int)
  async totalPoints(@Root() { id: { id } }: TeamNode): Promise<number> {
    const result = await this.teamRepository.getTotalTeamPoints({
      uuid: id,
    });

    return result._sum.points ?? 0;
  }

  @FieldResolver(() => MarathonNode)
  async marathon(@Root() { id: { id } }: TeamNode): Promise<MarathonNode> {
    const result = await this.teamRepository.getMarathon({ uuid: id });

    if (result == null) {
      throw new NotFoundError("Marathon not found");
    }

    return marathonModelToResource(result);
  }

  @FieldResolver(() => CommitteeIdentifier, { nullable: true })
  async committeeIdentifier(
    @Root() { id: { id } }: TeamNode
  ): Promise<CommitteeIdentifier | null> {
    const result = await this.teamRepository.getTeamCommitteeIdentifier({
      uuid: id,
    });

    return result ?? null;
  }

  @AccessControlAuthorized(
    "list",
    ["getIdFromRoot", "TeamNode", "id"],
    ".fundraisingEntries"
  )
  @FieldResolver(() => ListFundraisingEntriesResponse)
  fundraisingEntries(
    @Root() { id: { id } }: TeamNode,
    @Args(() => ListFundraisingEntriesArgs) args: ListFundraisingEntriesArgs
  ): AsyncRepositoryResult<ListFundraisingEntriesResponse> {
    return this.fundraisingEntryRepository
      .findAndCount({
        filters: args.filters,
        limit: args.limit,
        offset: args.offset,
        search: args.search,
        sortBy: args.sortBy,

        // Extremely important for security
        forTeam: { uuid: id },
      })
      .map(({ selectedRows, total }) => ({
        data: selectedRows.map(fundraisingEntryModelToNode),
        total,
      }));
  }

  @AccessControlAuthorized(
    "get",
    ["getIdFromRoot", "TeamNode", "id"],
    ".solicitationCode"
  )
  @FieldResolver(() => SolicitationCodeNode, { nullable: true })
  async solicitationCode(
    @Root() { id: { id } }: TeamNode
  ): Promise<ConcreteResult<Option<SolicitationCodeNode>>> {
    return new AsyncResult(
      this.teamRepository.getSolicitationCodeForTeam({
        uuid: id,
      })
    ).map((row) => row.map(solicitationCodeModelToNode)).promise;
  }
}
