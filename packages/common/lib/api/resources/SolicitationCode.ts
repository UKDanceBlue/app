import { NonNegativeIntResolver } from "graphql-scalars";
import { DateTime } from "luxon";
import { Field, ObjectType, registerEnumType } from "type-graphql";

import { Node } from "../relay.js";
import type { GlobalId } from "../scalars/GlobalId.js";
import { GlobalIdScalar } from "../scalars/GlobalId.js";
import { TimestampedResource } from "./Resource.js";

export const SolicitationCodeTag = {
  MiniMarathon: "MiniMarathon",
  DancerTeam: "DancerTeam",
  Active: "Active",
  General: "General",
} as const;
export type SolicitationCodeTag =
  (typeof SolicitationCodeTag)[keyof typeof SolicitationCodeTag];

export function stringifySolicitationCodeTag(tag: SolicitationCodeTag): string {
  switch (tag) {
    case SolicitationCodeTag.MiniMarathon: {
      return "Mini Marathons";
    }
    case SolicitationCodeTag.DancerTeam: {
      return "Dancer Team";
    }
    default: {
      return tag;
    }
  }
}

registerEnumType(SolicitationCodeTag, {
  name: "SolicitationCodeTag",
  description: "The tags for a solicitation code",
});

@ObjectType({
  implements: [Node],
})
export class SolicitationCodeNode extends TimestampedResource implements Node {
  @Field(() => GlobalIdScalar)
  id!: GlobalId;

  @Field(() => String)
  prefix!: string;

  @Field(() => NonNegativeIntResolver)
  code!: number;

  @Field(() => String, { nullable: true })
  name?: string | undefined | null;

  @Field(() => [SolicitationCodeTag])
  tags!: SolicitationCodeTag[];

  @Field(() => String)
  text(): string {
    if (!this.name) {
      return `${this.prefix}${this.code.toString().padStart(4, "0")}`;
    } else {
      return `${this.prefix}${this.code.toString().padStart(4, "0")} - ${
        this.name
      }`;
    }
  }

  public getUniqueId(): string {
    return this.id.id;
  }

  public static init(init: {
    id: string;
    prefix: string;
    code: number;
    name?: string | undefined | null;
    tags: SolicitationCodeTag[];
    createdAt: DateTime;
    updatedAt: DateTime;
  }) {
    return SolicitationCodeNode.createInstance().withValues(init);
  }
}
