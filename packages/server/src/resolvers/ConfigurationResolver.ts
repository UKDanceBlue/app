import { ConfigurationResource, ErrorCode } from "@ukdanceblue/common";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";


import { ConfigurationIntermediate, ConfigurationModel } from "../models/Configuration.js";

import { GraphQLErrorResponse, defineGraphQLArrayOkResponse, defineGraphQlCreatedResponse, defineGraphQlOkResponse, withGraphQLErrorUnion } from "./ApiResponse.js";
import type { ResolverInterface } from "./ResolverInterface.js";

const GetConfigurationByUuidResponse = defineGraphQlOkResponse("GetConfigurationByUuidResponse", ConfigurationResource);
const GetAllConfigurationsResponse = defineGraphQLArrayOkResponse("GetAllConfigurationsResponse", ConfigurationResource);
const CreateConfigurationResponse = defineGraphQlCreatedResponse("CreateConfigurationResponse", ConfigurationResource);
const SetConfigurationResponse = defineGraphQlOkResponse("SetConfigurationResponse", ConfigurationResource);
const DeleteConfigurationResponse = defineGraphQlOkResponse("DeleteConfigurationResponse", Boolean);

@InputType()
class CreateConfigurationInput implements Partial<ConfigurationResource> {
  @Field()
  key!: string;
}

@InputType()
class SetConfigurationInput implements Partial<ConfigurationResource> {
  @Field()
  key?: string;
}

const GetByUuidResponseUnion = withGraphQLErrorUnion(GetConfigurationByUuidResponse, "GetConfigurationByUuidResponse");
const GetAllResponseUnion = withGraphQLErrorUnion(GetAllConfigurationsResponse, "GetAllConfigurationsResponse");
const CreateResponseUnion = withGraphQLErrorUnion(CreateConfigurationResponse, "CreateConfigurationResponse");
const SetResponseUnion = withGraphQLErrorUnion(SetConfigurationResponse, "SetConfigurationResponse");
const DeleteResponseUnion = withGraphQLErrorUnion(DeleteConfigurationResponse, "DeleteConfigurationResponse");

@Resolver(() => ConfigurationResource)
export class ConfigurationResolver implements ResolverInterface<ConfigurationResource> {
  @Query(() => GetByUuidResponseUnion, { name: "getConfigurationByUuid" })
  async getByUuid(@Arg("uuid") uuid: string): Promise<typeof GetByUuidResponseUnion> {
    const row = await ConfigurationModel.findOne({ where: { key: uuid } });

    if (row == null) {
      return GraphQLErrorResponse.from("Configuration not found", ErrorCode.NotFound);
    }
    return GetConfigurationByUuidResponse.newOk(new ConfigurationIntermediate(row).toResource());
  }

  @Query(() => GetAllResponseUnion, { name: "getAllConfigurations" })
  async getAll(): Promise<typeof GetAllResponseUnion> {
    const resources = await ConfigurationModel.findAll();

    return GetAllConfigurationsResponse.newOk(resources.map(r => new ConfigurationIntermediate(r).toResource()));
  }

  @Mutation(() => CreateResponseUnion, { name: "createConfiguration" })
  async create(@Arg("input") input: CreateConfigurationInput): Promise<typeof CreateResponseUnion> {
    const row = await ConfigurationModel.create(input);

    return CreateConfigurationResponse.newOk(new ConfigurationIntermediate(row).toResource());
  }

  @Mutation(() => SetResponseUnion, { name: "setConfiguration" })
  async set(@Arg("id") id: string, @Arg("input") input: SetConfigurationInput): Promise<typeof SetResponseUnion> {
    const row = await ConfigurationModel.findOne({ where: { key: id } });

    if (row == null) {
      return GraphQLErrorResponse.from("Configuration not found", ErrorCode.NotFound);
    }
    await row.update(input);

    return SetConfigurationResponse.newOk(new ConfigurationIntermediate(row).toResource());
  }

  @Mutation(() => DeleteResponseUnion, { name: "deleteConfiguration" })
  async delete(@Arg("id") id: string): Promise<typeof DeleteResponseUnion> {
    const row = await ConfigurationModel.findOne({ where: { key: id }, attributes: ["id"], include: [] });

    if (row == null) {
      return GraphQLErrorResponse.from("Configuration not found", ErrorCode.NotFound);
    }
    await row.destroy();

    return DeleteConfigurationResponse.newOk(true);
  }
}
