import { buildSchema } from "type-graphql";

import { ConfigurationResolver } from "../resolvers/ConfigurationResolver.js";
import { DeviceResolver } from "../resolvers/DeviceResolver.js";
import { EventResolver } from "../resolvers/EventResolver.js";
import { ImageResolver } from "../resolvers/ImageResolver.js";
import { MembershipResolver } from "../resolvers/MembershipResolver.js";
import { NotificationResolver } from "../resolvers/NotificationResolver.js";
import { PersonResolver } from "../resolvers/PersonResolver.js";
import { TeamResolver } from "../resolvers/TeamResolver.js";
import { customAuthChecker } from "../resolvers/authChecker.js";

export default await buildSchema({
  resolvers: [
    ConfigurationResolver,
    DeviceResolver,
    EventResolver,
    ImageResolver,
    PersonResolver,
    MembershipResolver,
    NotificationResolver,
    TeamResolver,
  ],
  emitSchemaFile: true,
  authChecker: customAuthChecker,
  authMode: "error",
});
