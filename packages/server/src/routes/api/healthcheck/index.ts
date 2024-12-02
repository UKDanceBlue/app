import { Service } from "@freshgum/typedi";
import { PrismaClient } from "@prisma/client";

import { prismaToken } from "#lib/typediTokens.js";
import { RouterService } from "#routes/RouteService.js";

@Service([prismaToken])
export default class HealthCheckRouter extends RouterService {
  constructor(prisma: PrismaClient) {
    super("/healthcheck");

    this.addGetRoute("/", async (_, res) => {
      try {
        await prisma.$connect();
      } catch {
        res.type("text/plain");
        res.status(500);
        res.send("Database connection error");
        return;
      }

      res.type("text/plain");
      res.status(200);
      res.send("OK");
    });
  }
}
