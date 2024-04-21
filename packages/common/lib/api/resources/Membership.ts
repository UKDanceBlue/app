import { Field, ID, ObjectType, registerEnumType } from "type-graphql";

import { Node, createNodeClasses } from "../relay.js";

import { TimestampedResource } from "./Resource.js";
export const MembershipPositionType = {
  Member: "Member",
  Captain: "Captain",
} as const;
export type MembershipPositionType =
  (typeof MembershipPositionType)[keyof typeof MembershipPositionType];

registerEnumType(MembershipPositionType, {
  name: "MembershipPositionType",
  description: "The position of a member on a team",
});

@ObjectType()
export class MembershipResource extends TimestampedResource implements Node {
  @Field(() => ID)
  id!: string;

  @Field(() => MembershipPositionType)
  position!: MembershipPositionType;

  public getUniqueId(): string {
    return this.id;
  }

  public static init(init: Partial<MembershipResource>) {
    return MembershipResource.doInit(init);
  }
}

export const { MembershipConnection, MembershipEdge, MembershipResult } =
  createNodeClasses(MembershipResource, "Membership");
