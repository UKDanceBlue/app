import { Field, ID, Int, ObjectType } from "type-graphql";

import { Node, createNodeClasses } from "../relay.js";

import { TimestampedResource } from "./Resource.js";
@ObjectType({
  implements: [Node],
})
export class PointEntryNode extends TimestampedResource implements Node {
  @Field(() => ID)
  id!: string;
  @Field(() => String, { nullable: true })
  comment!: string | null;
  @Field(() => Int)
  points!: number;

  public getUniqueId(): string {
    return this.id;
  }

  public static init(init: Partial<PointEntryNode>) {
    return PointEntryNode.doInit(init);
  }
}

export const { PointEntryConnection, PointEntryEdge, PointEntryResult } =
  createNodeClasses(PointEntryNode, "PointEntry");
