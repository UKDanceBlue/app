import { Service } from "@freshgum/typedi";
import { PrismaClient } from "@prisma/client";

import { PrismaService } from "#lib/prisma.js";
import { RouterService } from "#routes/RouteService.js";

@Service([PrismaService])
export default class TestRouter extends RouterService {
  constructor(prisma: PrismaClient) {
    super("/test");

    this.addGetRoute("/error", async (_, __, next) => {
      try {
        await prisma.person.findUniqueOrThrow({
          where: {
            email: "doesn't.exist.ever@@@mail.@@@",
          },
        });
      } catch (error) {
        next(error);
      }
    });
  }
}
