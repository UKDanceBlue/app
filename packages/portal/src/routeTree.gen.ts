/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as IndexImport } from "./routes/index";
import { Route as TeamsIndexImport } from "./routes/teams/index";
import { Route as PeopleIndexImport } from "./routes/people/index";
import { Route as NotificationsIndexImport } from "./routes/notifications/index";
import { Route as MarathonIndexImport } from "./routes/marathon/index";
import { Route as FeedIndexImport } from "./routes/feed/index";
import { Route as EventsIndexImport } from "./routes/events/index";
import { Route as DbfundsIndexImport } from "./routes/dbfunds/index";
import { Route as ConfigIndexImport } from "./routes/config/index";
import { Route as TeamsCreateImport } from "./routes/teams/create";
import { Route as TeamsBulkImport } from "./routes/teams/bulk";
import { Route as PeopleCreateImport } from "./routes/people/create";
import { Route as PeopleBulkImport } from "./routes/people/bulk";
import { Route as NotificationsCreateImport } from "./routes/notifications/create";
import { Route as MarathonCreateImport } from "./routes/marathon/create";
import { Route as ImagesSplatImport } from "./routes/images/$";
import { Route as FundraisingDbfundsImport } from "./routes/fundraising/dbfunds";
import { Route as EventsCreateImport } from "./routes/events/create";
import { Route as AdminLogsImport } from "./routes/admin/logs";
import { Route as PeoplePersonIdIndexImport } from "./routes/people/$personId/index";
import { Route as NotificationsNotificationIdIndexImport } from "./routes/notifications/$notificationId/index";
import { Route as MarathonMarathonIdIndexImport } from "./routes/marathon/$marathonId/index";
import { Route as EventsEventIdIndexImport } from "./routes/events/$eventId/index";
import { Route as TeamsTeamIdEditImport } from "./routes/teams/$teamId/edit";
import { Route as TeamsTeamIdLayoutImport } from "./routes/teams/$teamId/_layout";
import { Route as PeoplePersonIdEditImport } from "./routes/people/$personId/edit";
import { Route as NotificationsNotificationIdManageImport } from "./routes/notifications/$notificationId/manage";
import { Route as MarathonMarathonIdEditImport } from "./routes/marathon/$marathonId/edit";
import { Route as FundraisingDdnUploadImport } from "./routes/fundraising/ddn/upload";
import { Route as EventsEventIdEditImport } from "./routes/events/$eventId/edit";
import { Route as TeamsTeamIdLayoutIndexImport } from "./routes/teams/$teamId/_layout/index";
import { Route as TeamsTeamIdLayoutPointsImport } from "./routes/teams/$teamId/_layout/points";
import { Route as TeamsTeamIdLayoutFundraisingImport } from "./routes/teams/$teamId/_layout/fundraising";
import { Route as MarathonMarathonIdHoursAddImport } from "./routes/marathon/$marathonId/hours/add";
import { Route as MarathonMarathonIdHoursHourIdIndexImport } from "./routes/marathon/$marathonId/hours/$hourId/index";

// Create Virtual Routes

const TeamsTeamIdImport = createFileRoute("/teams/$teamId")();

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const TeamsTeamIdRoute = TeamsTeamIdImport.update({
  id: "/teams/$teamId",
  path: "/teams/$teamId",
  getParentRoute: () => rootRoute,
} as any);

const TeamsIndexRoute = TeamsIndexImport.update({
  id: "/teams/",
  path: "/teams/",
  getParentRoute: () => rootRoute,
} as any);

const PeopleIndexRoute = PeopleIndexImport.update({
  id: "/people/",
  path: "/people/",
  getParentRoute: () => rootRoute,
} as any);

const NotificationsIndexRoute = NotificationsIndexImport.update({
  id: "/notifications/",
  path: "/notifications/",
  getParentRoute: () => rootRoute,
} as any);

const MarathonIndexRoute = MarathonIndexImport.update({
  id: "/marathon/",
  path: "/marathon/",
  getParentRoute: () => rootRoute,
} as any);

const FeedIndexRoute = FeedIndexImport.update({
  id: "/feed/",
  path: "/feed/",
  getParentRoute: () => rootRoute,
} as any);

const EventsIndexRoute = EventsIndexImport.update({
  id: "/events/",
  path: "/events/",
  getParentRoute: () => rootRoute,
} as any);

const ConfigIndexRoute = ConfigIndexImport.update({
  id: "/config/",
  path: "/config/",
  getParentRoute: () => rootRoute,
} as any);

const TeamsCreateRoute = TeamsCreateImport.update({
  id: "/teams/create",
  path: "/teams/create",
  getParentRoute: () => rootRoute,
} as any);

const TeamsBulkRoute = TeamsBulkImport.update({
  id: "/teams/bulk",
  path: "/teams/bulk",
  getParentRoute: () => rootRoute,
} as any);

const PeopleCreateRoute = PeopleCreateImport.update({
  id: "/people/create",
  path: "/people/create",
  getParentRoute: () => rootRoute,
} as any);

const PeopleBulkRoute = PeopleBulkImport.update({
  id: "/people/bulk",
  path: "/people/bulk",
  getParentRoute: () => rootRoute,
} as any);

const NotificationsCreateRoute = NotificationsCreateImport.update({
  id: "/notifications/create",
  path: "/notifications/create",
  getParentRoute: () => rootRoute,
} as any);

const MarathonCreateRoute = MarathonCreateImport.update({
  id: "/marathon/create",
  path: "/marathon/create",
  getParentRoute: () => rootRoute,
} as any);

const ImagesSplatRoute = ImagesSplatImport.update({
  id: "/images/$",
  path: "/images/$",
  getParentRoute: () => rootRoute,
} as any);

const FundraisingDbfundsRoute = FundraisingDbfundsImport.update({
  id: "/fundraising/dbfunds",
  path: "/fundraising/dbfunds",
  getParentRoute: () => rootRoute,
} as any);

const EventsCreateRoute = EventsCreateImport.update({
  id: "/events/create",
  path: "/events/create",
  getParentRoute: () => rootRoute,
} as any);

const AdminLogsRoute = AdminLogsImport.update({
  id: "/admin/logs",
  path: "/admin/logs",
  getParentRoute: () => rootRoute,
} as any);

const PeoplePersonIdIndexRoute = PeoplePersonIdIndexImport.update({
  id: "/people/$personId/",
  path: "/people/$personId/",
  getParentRoute: () => rootRoute,
} as any);

const NotificationsNotificationIdIndexRoute =
  NotificationsNotificationIdIndexImport.update({
    id: "/notifications/$notificationId/",
    path: "/notifications/$notificationId/",
    getParentRoute: () => rootRoute,
  } as any);

const MarathonMarathonIdIndexRoute = MarathonMarathonIdIndexImport.update({
  id: "/marathon/$marathonId/",
  path: "/marathon/$marathonId/",
  getParentRoute: () => rootRoute,
} as any);

const EventsEventIdIndexRoute = EventsEventIdIndexImport.update({
  id: "/events/$eventId/",
  path: "/events/$eventId/",
  getParentRoute: () => rootRoute,
} as any);

const TeamsTeamIdEditRoute = TeamsTeamIdEditImport.update({
  id: "/edit",
  path: "/edit",
  getParentRoute: () => TeamsTeamIdRoute,
} as any);

const TeamsTeamIdLayoutRoute = TeamsTeamIdLayoutImport.update({
  id: "/_layout",
  getParentRoute: () => TeamsTeamIdRoute,
} as any);

const PeoplePersonIdEditRoute = PeoplePersonIdEditImport.update({
  id: "/people/$personId/edit",
  path: "/people/$personId/edit",
  getParentRoute: () => rootRoute,
} as any);

const NotificationsNotificationIdManageRoute =
  NotificationsNotificationIdManageImport.update({
    id: "/notifications/$notificationId/manage",
    path: "/notifications/$notificationId/manage",
    getParentRoute: () => rootRoute,
  } as any);

const MarathonMarathonIdEditRoute = MarathonMarathonIdEditImport.update({
  id: "/marathon/$marathonId/edit",
  path: "/marathon/$marathonId/edit",
  getParentRoute: () => rootRoute,
} as any);

const FundraisingDdnUploadRoute = FundraisingDdnUploadImport.update({
  id: "/fundraising/ddn/upload",
  path: "/fundraising/ddn/upload",
  getParentRoute: () => rootRoute,
} as any);

const EventsEventIdEditRoute = EventsEventIdEditImport.update({
  id: "/events/$eventId/edit",
  path: "/events/$eventId/edit",
  getParentRoute: () => rootRoute,
} as any);

const TeamsTeamIdLayoutIndexRoute = TeamsTeamIdLayoutIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => TeamsTeamIdLayoutRoute,
} as any);

const TeamsTeamIdLayoutPointsRoute = TeamsTeamIdLayoutPointsImport.update({
  id: "/points",
  path: "/points",
  getParentRoute: () => TeamsTeamIdLayoutRoute,
} as any);

const TeamsTeamIdLayoutFundraisingRoute =
  TeamsTeamIdLayoutFundraisingImport.update({
    id: "/fundraising",
    path: "/fundraising",
    getParentRoute: () => TeamsTeamIdLayoutRoute,
  } as any);

const MarathonMarathonIdHoursAddRoute = MarathonMarathonIdHoursAddImport.update(
  {
    id: "/marathon/$marathonId/hours/add",
    path: "/marathon/$marathonId/hours/add",
    getParentRoute: () => rootRoute,
  } as any,
);

const MarathonMarathonIdHoursHourIdIndexRoute =
  MarathonMarathonIdHoursHourIdIndexImport.update({
    id: "/marathon/$marathonId/hours/$hourId/",
    path: "/marathon/$marathonId/hours/$hourId/",
    getParentRoute: () => rootRoute,
  } as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/admin/logs": {
      id: "/admin/logs";
      path: "/admin/logs";
      fullPath: "/admin/logs";
      preLoaderRoute: typeof AdminLogsImport;
      parentRoute: typeof rootRoute;
    };
    "/events/create": {
      id: "/events/create";
      path: "/events/create";
      fullPath: "/events/create";
      preLoaderRoute: typeof EventsCreateImport;
      parentRoute: typeof rootRoute;
    };
    "/fundraising/dbfunds": {
      id: "/fundraising/dbfunds";
      path: "/fundraising/dbfunds";
      fullPath: "/fundraising/dbfunds";
      preLoaderRoute: typeof FundraisingDbfundsImport;
      parentRoute: typeof rootRoute;
    };
    "/images/$": {
      id: "/images/$";
      path: "/images/$";
      fullPath: "/images/$";
      preLoaderRoute: typeof ImagesSplatImport;
      parentRoute: typeof rootRoute;
    };
    "/marathon/create": {
      id: "/marathon/create";
      path: "/marathon/create";
      fullPath: "/marathon/create";
      preLoaderRoute: typeof MarathonCreateImport;
      parentRoute: typeof rootRoute;
    };
    "/notifications/create": {
      id: "/notifications/create";
      path: "/notifications/create";
      fullPath: "/notifications/create";
      preLoaderRoute: typeof NotificationsCreateImport;
      parentRoute: typeof rootRoute;
    };
    "/people/bulk": {
      id: "/people/bulk";
      path: "/people/bulk";
      fullPath: "/people/bulk";
      preLoaderRoute: typeof PeopleBulkImport;
      parentRoute: typeof rootRoute;
    };
    "/people/create": {
      id: "/people/create";
      path: "/people/create";
      fullPath: "/people/create";
      preLoaderRoute: typeof PeopleCreateImport;
      parentRoute: typeof rootRoute;
    };
    "/teams/bulk": {
      id: "/teams/bulk";
      path: "/teams/bulk";
      fullPath: "/teams/bulk";
      preLoaderRoute: typeof TeamsBulkImport;
      parentRoute: typeof rootRoute;
    };
    "/teams/create": {
      id: "/teams/create";
      path: "/teams/create";
      fullPath: "/teams/create";
      preLoaderRoute: typeof TeamsCreateImport;
      parentRoute: typeof rootRoute;
    };
    "/config/": {
      id: "/config/";
      path: "/config";
      fullPath: "/config";
      preLoaderRoute: typeof ConfigIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/events/": {
      id: "/events/";
      path: "/events";
      fullPath: "/events";
      preLoaderRoute: typeof EventsIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/feed/": {
      id: "/feed/";
      path: "/feed";
      fullPath: "/feed";
      preLoaderRoute: typeof FeedIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/marathon/": {
      id: "/marathon/";
      path: "/marathon";
      fullPath: "/marathon";
      preLoaderRoute: typeof MarathonIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/notifications/": {
      id: "/notifications/";
      path: "/notifications";
      fullPath: "/notifications";
      preLoaderRoute: typeof NotificationsIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/people/": {
      id: "/people/";
      path: "/people";
      fullPath: "/people";
      preLoaderRoute: typeof PeopleIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/teams/": {
      id: "/teams/";
      path: "/teams";
      fullPath: "/teams";
      preLoaderRoute: typeof TeamsIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/events/$eventId/edit": {
      id: "/events/$eventId/edit";
      path: "/events/$eventId/edit";
      fullPath: "/events/$eventId/edit";
      preLoaderRoute: typeof EventsEventIdEditImport;
      parentRoute: typeof rootRoute;
    };
    "/fundraising/ddn/upload": {
      id: "/fundraising/ddn/upload";
      path: "/fundraising/ddn/upload";
      fullPath: "/fundraising/ddn/upload";
      preLoaderRoute: typeof FundraisingDdnUploadImport;
      parentRoute: typeof rootRoute;
    };
    "/marathon/$marathonId/edit": {
      id: "/marathon/$marathonId/edit";
      path: "/marathon/$marathonId/edit";
      fullPath: "/marathon/$marathonId/edit";
      preLoaderRoute: typeof MarathonMarathonIdEditImport;
      parentRoute: typeof rootRoute;
    };
    "/notifications/$notificationId/manage": {
      id: "/notifications/$notificationId/manage";
      path: "/notifications/$notificationId/manage";
      fullPath: "/notifications/$notificationId/manage";
      preLoaderRoute: typeof NotificationsNotificationIdManageImport;
      parentRoute: typeof rootRoute;
    };
    "/people/$personId/edit": {
      id: "/people/$personId/edit";
      path: "/people/$personId/edit";
      fullPath: "/people/$personId/edit";
      preLoaderRoute: typeof PeoplePersonIdEditImport;
      parentRoute: typeof rootRoute;
    };
    "/teams/$teamId": {
      id: "/teams/$teamId";
      path: "/teams/$teamId";
      fullPath: "/teams/$teamId";
      preLoaderRoute: typeof TeamsTeamIdImport;
      parentRoute: typeof rootRoute;
    };
    "/teams/$teamId/_layout": {
      id: "/teams/$teamId/_layout";
      path: "/teams/$teamId";
      fullPath: "/teams/$teamId";
      preLoaderRoute: typeof TeamsTeamIdLayoutImport;
      parentRoute: typeof TeamsTeamIdRoute;
    };
    "/teams/$teamId/edit": {
      id: "/teams/$teamId/edit";
      path: "/edit";
      fullPath: "/teams/$teamId/edit";
      preLoaderRoute: typeof TeamsTeamIdEditImport;
      parentRoute: typeof TeamsTeamIdImport;
    };
    "/events/$eventId/": {
      id: "/events/$eventId/";
      path: "/events/$eventId";
      fullPath: "/events/$eventId";
      preLoaderRoute: typeof EventsEventIdIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/marathon/$marathonId/": {
      id: "/marathon/$marathonId/";
      path: "/marathon/$marathonId";
      fullPath: "/marathon/$marathonId";
      preLoaderRoute: typeof MarathonMarathonIdIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/notifications/$notificationId/": {
      id: "/notifications/$notificationId/";
      path: "/notifications/$notificationId";
      fullPath: "/notifications/$notificationId";
      preLoaderRoute: typeof NotificationsNotificationIdIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/people/$personId/": {
      id: "/people/$personId/";
      path: "/people/$personId";
      fullPath: "/people/$personId";
      preLoaderRoute: typeof PeoplePersonIdIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/marathon/$marathonId/hours/add": {
      id: "/marathon/$marathonId/hours/add";
      path: "/marathon/$marathonId/hours/add";
      fullPath: "/marathon/$marathonId/hours/add";
      preLoaderRoute: typeof MarathonMarathonIdHoursAddImport;
      parentRoute: typeof rootRoute;
    };
    "/teams/$teamId/_layout/fundraising": {
      id: "/teams/$teamId/_layout/fundraising";
      path: "/fundraising";
      fullPath: "/teams/$teamId/fundraising";
      preLoaderRoute: typeof TeamsTeamIdLayoutFundraisingImport;
      parentRoute: typeof TeamsTeamIdLayoutImport;
    };
    "/teams/$teamId/_layout/points": {
      id: "/teams/$teamId/_layout/points";
      path: "/points";
      fullPath: "/teams/$teamId/points";
      preLoaderRoute: typeof TeamsTeamIdLayoutPointsImport;
      parentRoute: typeof TeamsTeamIdLayoutImport;
    };
    "/teams/$teamId/_layout/": {
      id: "/teams/$teamId/_layout/";
      path: "/";
      fullPath: "/teams/$teamId/";
      preLoaderRoute: typeof TeamsTeamIdLayoutIndexImport;
      parentRoute: typeof TeamsTeamIdLayoutImport;
    };
    "/marathon/$marathonId/hours/$hourId/": {
      id: "/marathon/$marathonId/hours/$hourId/";
      path: "/marathon/$marathonId/hours/$hourId";
      fullPath: "/marathon/$marathonId/hours/$hourId";
      preLoaderRoute: typeof MarathonMarathonIdHoursHourIdIndexImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

interface TeamsTeamIdLayoutRouteChildren {
  TeamsTeamIdLayoutFundraisingRoute: typeof TeamsTeamIdLayoutFundraisingRoute;
  TeamsTeamIdLayoutPointsRoute: typeof TeamsTeamIdLayoutPointsRoute;
  TeamsTeamIdLayoutIndexRoute: typeof TeamsTeamIdLayoutIndexRoute;
}

const TeamsTeamIdLayoutRouteChildren: TeamsTeamIdLayoutRouteChildren = {
  TeamsTeamIdLayoutFundraisingRoute: TeamsTeamIdLayoutFundraisingRoute,
  TeamsTeamIdLayoutPointsRoute: TeamsTeamIdLayoutPointsRoute,
  TeamsTeamIdLayoutIndexRoute: TeamsTeamIdLayoutIndexRoute,
};

const TeamsTeamIdLayoutRouteWithChildren =
  TeamsTeamIdLayoutRoute._addFileChildren(TeamsTeamIdLayoutRouteChildren);

interface TeamsTeamIdRouteChildren {
  TeamsTeamIdLayoutRoute: typeof TeamsTeamIdLayoutRouteWithChildren;
  TeamsTeamIdEditRoute: typeof TeamsTeamIdEditRoute;
}

const TeamsTeamIdRouteChildren: TeamsTeamIdRouteChildren = {
  TeamsTeamIdLayoutRoute: TeamsTeamIdLayoutRouteWithChildren,
  TeamsTeamIdEditRoute: TeamsTeamIdEditRoute,
};

const TeamsTeamIdRouteWithChildren = TeamsTeamIdRoute._addFileChildren(
  TeamsTeamIdRouteChildren,
);

export interface FileRoutesByFullPath {
  "/": typeof IndexRoute;
  "/admin/logs": typeof AdminLogsRoute;
  "/events/create": typeof EventsCreateRoute;
  "/fundraising/dbfunds": typeof FundraisingDbfundsRoute;
  "/images/$": typeof ImagesSplatRoute;
  "/marathon/create": typeof MarathonCreateRoute;
  "/notifications/create": typeof NotificationsCreateRoute;
  "/people/bulk": typeof PeopleBulkRoute;
  "/people/create": typeof PeopleCreateRoute;
  "/teams/bulk": typeof TeamsBulkRoute;
  "/teams/create": typeof TeamsCreateRoute;
  "/config": typeof ConfigIndexRoute;
  "/events": typeof EventsIndexRoute;
  "/feed": typeof FeedIndexRoute;
  "/marathon": typeof MarathonIndexRoute;
  "/notifications": typeof NotificationsIndexRoute;
  "/people": typeof PeopleIndexRoute;
  "/teams": typeof TeamsIndexRoute;
  "/events/$eventId/edit": typeof EventsEventIdEditRoute;
  "/fundraising/ddn/upload": typeof FundraisingDdnUploadRoute;
  "/marathon/$marathonId/edit": typeof MarathonMarathonIdEditRoute;
  "/notifications/$notificationId/manage": typeof NotificationsNotificationIdManageRoute;
  "/people/$personId/edit": typeof PeoplePersonIdEditRoute;
  "/teams/$teamId": typeof TeamsTeamIdLayoutRouteWithChildren;
  "/teams/$teamId/edit": typeof TeamsTeamIdEditRoute;
  "/events/$eventId": typeof EventsEventIdIndexRoute;
  "/marathon/$marathonId": typeof MarathonMarathonIdIndexRoute;
  "/notifications/$notificationId": typeof NotificationsNotificationIdIndexRoute;
  "/people/$personId": typeof PeoplePersonIdIndexRoute;
  "/marathon/$marathonId/hours/add": typeof MarathonMarathonIdHoursAddRoute;
  "/teams/$teamId/fundraising": typeof TeamsTeamIdLayoutFundraisingRoute;
  "/teams/$teamId/points": typeof TeamsTeamIdLayoutPointsRoute;
  "/teams/$teamId/": typeof TeamsTeamIdLayoutIndexRoute;
  "/marathon/$marathonId/hours/$hourId": typeof MarathonMarathonIdHoursHourIdIndexRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexRoute;
  "/admin/logs": typeof AdminLogsRoute;
  "/events/create": typeof EventsCreateRoute;
  "/fundraising/dbfunds": typeof FundraisingDbfundsRoute;
  "/images/$": typeof ImagesSplatRoute;
  "/marathon/create": typeof MarathonCreateRoute;
  "/notifications/create": typeof NotificationsCreateRoute;
  "/people/bulk": typeof PeopleBulkRoute;
  "/people/create": typeof PeopleCreateRoute;
  "/teams/bulk": typeof TeamsBulkRoute;
  "/teams/create": typeof TeamsCreateRoute;
  "/config": typeof ConfigIndexRoute;
  "/events": typeof EventsIndexRoute;
  "/feed": typeof FeedIndexRoute;
  "/marathon": typeof MarathonIndexRoute;
  "/notifications": typeof NotificationsIndexRoute;
  "/people": typeof PeopleIndexRoute;
  "/teams": typeof TeamsIndexRoute;
  "/events/$eventId/edit": typeof EventsEventIdEditRoute;
  "/fundraising/ddn/upload": typeof FundraisingDdnUploadRoute;
  "/marathon/$marathonId/edit": typeof MarathonMarathonIdEditRoute;
  "/notifications/$notificationId/manage": typeof NotificationsNotificationIdManageRoute;
  "/people/$personId/edit": typeof PeoplePersonIdEditRoute;
  "/teams/$teamId": typeof TeamsTeamIdLayoutIndexRoute;
  "/teams/$teamId/edit": typeof TeamsTeamIdEditRoute;
  "/events/$eventId": typeof EventsEventIdIndexRoute;
  "/marathon/$marathonId": typeof MarathonMarathonIdIndexRoute;
  "/notifications/$notificationId": typeof NotificationsNotificationIdIndexRoute;
  "/people/$personId": typeof PeoplePersonIdIndexRoute;
  "/marathon/$marathonId/hours/add": typeof MarathonMarathonIdHoursAddRoute;
  "/teams/$teamId/fundraising": typeof TeamsTeamIdLayoutFundraisingRoute;
  "/teams/$teamId/points": typeof TeamsTeamIdLayoutPointsRoute;
  "/marathon/$marathonId/hours/$hourId": typeof MarathonMarathonIdHoursHourIdIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRoute;
  "/admin/logs": typeof AdminLogsRoute;
  "/events/create": typeof EventsCreateRoute;
  "/fundraising/dbfunds": typeof FundraisingDbfundsRoute;
  "/images/$": typeof ImagesSplatRoute;
  "/marathon/create": typeof MarathonCreateRoute;
  "/notifications/create": typeof NotificationsCreateRoute;
  "/people/bulk": typeof PeopleBulkRoute;
  "/people/create": typeof PeopleCreateRoute;
  "/teams/bulk": typeof TeamsBulkRoute;
  "/teams/create": typeof TeamsCreateRoute;
  "/config/": typeof ConfigIndexRoute;
  "/events/": typeof EventsIndexRoute;
  "/feed/": typeof FeedIndexRoute;
  "/marathon/": typeof MarathonIndexRoute;
  "/notifications/": typeof NotificationsIndexRoute;
  "/people/": typeof PeopleIndexRoute;
  "/teams/": typeof TeamsIndexRoute;
  "/events/$eventId/edit": typeof EventsEventIdEditRoute;
  "/fundraising/ddn/upload": typeof FundraisingDdnUploadRoute;
  "/marathon/$marathonId/edit": typeof MarathonMarathonIdEditRoute;
  "/notifications/$notificationId/manage": typeof NotificationsNotificationIdManageRoute;
  "/people/$personId/edit": typeof PeoplePersonIdEditRoute;
  "/teams/$teamId": typeof TeamsTeamIdRouteWithChildren;
  "/teams/$teamId/_layout": typeof TeamsTeamIdLayoutRouteWithChildren;
  "/teams/$teamId/edit": typeof TeamsTeamIdEditRoute;
  "/events/$eventId/": typeof EventsEventIdIndexRoute;
  "/marathon/$marathonId/": typeof MarathonMarathonIdIndexRoute;
  "/notifications/$notificationId/": typeof NotificationsNotificationIdIndexRoute;
  "/people/$personId/": typeof PeoplePersonIdIndexRoute;
  "/marathon/$marathonId/hours/add": typeof MarathonMarathonIdHoursAddRoute;
  "/teams/$teamId/_layout/fundraising": typeof TeamsTeamIdLayoutFundraisingRoute;
  "/teams/$teamId/_layout/points": typeof TeamsTeamIdLayoutPointsRoute;
  "/teams/$teamId/_layout/": typeof TeamsTeamIdLayoutIndexRoute;
  "/marathon/$marathonId/hours/$hourId/": typeof MarathonMarathonIdHoursHourIdIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | "/"
    | "/admin/logs"
    | "/events/create"
    | "/fundraising/dbfunds"
    | "/images/$"
    | "/marathon/create"
    | "/notifications/create"
    | "/people/bulk"
    | "/people/create"
    | "/teams/bulk"
    | "/teams/create"
    | "/config"
    | "/events"
    | "/feed"
    | "/marathon"
    | "/notifications"
    | "/people"
    | "/teams"
    | "/events/$eventId/edit"
    | "/fundraising/ddn/upload"
    | "/marathon/$marathonId/edit"
    | "/notifications/$notificationId/manage"
    | "/people/$personId/edit"
    | "/teams/$teamId"
    | "/teams/$teamId/edit"
    | "/events/$eventId"
    | "/marathon/$marathonId"
    | "/notifications/$notificationId"
    | "/people/$personId"
    | "/marathon/$marathonId/hours/add"
    | "/teams/$teamId/fundraising"
    | "/teams/$teamId/points"
    | "/teams/$teamId/"
    | "/marathon/$marathonId/hours/$hourId";
  fileRoutesByTo: FileRoutesByTo;
  to:
    | "/"
    | "/admin/logs"
    | "/events/create"
    | "/fundraising/dbfunds"
    | "/images/$"
    | "/marathon/create"
    | "/notifications/create"
    | "/people/bulk"
    | "/people/create"
    | "/teams/bulk"
    | "/teams/create"
    | "/config"
    | "/events"
    | "/feed"
    | "/marathon"
    | "/notifications"
    | "/people"
    | "/teams"
    | "/events/$eventId/edit"
    | "/fundraising/ddn/upload"
    | "/marathon/$marathonId/edit"
    | "/notifications/$notificationId/manage"
    | "/people/$personId/edit"
    | "/teams/$teamId"
    | "/teams/$teamId/edit"
    | "/events/$eventId"
    | "/marathon/$marathonId"
    | "/notifications/$notificationId"
    | "/people/$personId"
    | "/marathon/$marathonId/hours/add"
    | "/teams/$teamId/fundraising"
    | "/teams/$teamId/points"
    | "/marathon/$marathonId/hours/$hourId";
  id:
    | "__root__"
    | "/"
    | "/admin/logs"
    | "/events/create"
    | "/fundraising/dbfunds"
    | "/images/$"
    | "/marathon/create"
    | "/notifications/create"
    | "/people/bulk"
    | "/people/create"
    | "/teams/bulk"
    | "/teams/create"
    | "/config/"
    | "/events/"
    | "/feed/"
    | "/marathon/"
    | "/notifications/"
    | "/people/"
    | "/teams/"
    | "/events/$eventId/edit"
    | "/fundraising/ddn/upload"
    | "/marathon/$marathonId/edit"
    | "/notifications/$notificationId/manage"
    | "/people/$personId/edit"
    | "/teams/$teamId"
    | "/teams/$teamId/_layout"
    | "/teams/$teamId/edit"
    | "/events/$eventId/"
    | "/marathon/$marathonId/"
    | "/notifications/$notificationId/"
    | "/people/$personId/"
    | "/marathon/$marathonId/hours/add"
    | "/teams/$teamId/_layout/fundraising"
    | "/teams/$teamId/_layout/points"
    | "/teams/$teamId/_layout/"
    | "/marathon/$marathonId/hours/$hourId/";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  AdminLogsRoute: typeof AdminLogsRoute;
  EventsCreateRoute: typeof EventsCreateRoute;
  FundraisingDbfundsRoute: typeof FundraisingDbfundsRoute;
  ImagesSplatRoute: typeof ImagesSplatRoute;
  MarathonCreateRoute: typeof MarathonCreateRoute;
  NotificationsCreateRoute: typeof NotificationsCreateRoute;
  PeopleBulkRoute: typeof PeopleBulkRoute;
  PeopleCreateRoute: typeof PeopleCreateRoute;
  TeamsBulkRoute: typeof TeamsBulkRoute;
  TeamsCreateRoute: typeof TeamsCreateRoute;
  ConfigIndexRoute: typeof ConfigIndexRoute;
  EventsIndexRoute: typeof EventsIndexRoute;
  FeedIndexRoute: typeof FeedIndexRoute;
  MarathonIndexRoute: typeof MarathonIndexRoute;
  NotificationsIndexRoute: typeof NotificationsIndexRoute;
  PeopleIndexRoute: typeof PeopleIndexRoute;
  TeamsIndexRoute: typeof TeamsIndexRoute;
  EventsEventIdEditRoute: typeof EventsEventIdEditRoute;
  FundraisingDdnUploadRoute: typeof FundraisingDdnUploadRoute;
  MarathonMarathonIdEditRoute: typeof MarathonMarathonIdEditRoute;
  NotificationsNotificationIdManageRoute: typeof NotificationsNotificationIdManageRoute;
  PeoplePersonIdEditRoute: typeof PeoplePersonIdEditRoute;
  TeamsTeamIdRoute: typeof TeamsTeamIdRouteWithChildren;
  EventsEventIdIndexRoute: typeof EventsEventIdIndexRoute;
  MarathonMarathonIdIndexRoute: typeof MarathonMarathonIdIndexRoute;
  NotificationsNotificationIdIndexRoute: typeof NotificationsNotificationIdIndexRoute;
  PeoplePersonIdIndexRoute: typeof PeoplePersonIdIndexRoute;
  MarathonMarathonIdHoursAddRoute: typeof MarathonMarathonIdHoursAddRoute;
  MarathonMarathonIdHoursHourIdIndexRoute: typeof MarathonMarathonIdHoursHourIdIndexRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AdminLogsRoute: AdminLogsRoute,
  EventsCreateRoute: EventsCreateRoute,
  FundraisingDbfundsRoute: FundraisingDbfundsRoute,
  ImagesSplatRoute: ImagesSplatRoute,
  MarathonCreateRoute: MarathonCreateRoute,
  NotificationsCreateRoute: NotificationsCreateRoute,
  PeopleBulkRoute: PeopleBulkRoute,
  PeopleCreateRoute: PeopleCreateRoute,
  TeamsBulkRoute: TeamsBulkRoute,
  TeamsCreateRoute: TeamsCreateRoute,
  ConfigIndexRoute: ConfigIndexRoute,
  EventsIndexRoute: EventsIndexRoute,
  FeedIndexRoute: FeedIndexRoute,
  MarathonIndexRoute: MarathonIndexRoute,
  NotificationsIndexRoute: NotificationsIndexRoute,
  PeopleIndexRoute: PeopleIndexRoute,
  TeamsIndexRoute: TeamsIndexRoute,
  EventsEventIdEditRoute: EventsEventIdEditRoute,
  FundraisingDdnUploadRoute: FundraisingDdnUploadRoute,
  MarathonMarathonIdEditRoute: MarathonMarathonIdEditRoute,
  NotificationsNotificationIdManageRoute:
    NotificationsNotificationIdManageRoute,
  PeoplePersonIdEditRoute: PeoplePersonIdEditRoute,
  TeamsTeamIdRoute: TeamsTeamIdRouteWithChildren,
  EventsEventIdIndexRoute: EventsEventIdIndexRoute,
  MarathonMarathonIdIndexRoute: MarathonMarathonIdIndexRoute,
  NotificationsNotificationIdIndexRoute: NotificationsNotificationIdIndexRoute,
  PeoplePersonIdIndexRoute: PeoplePersonIdIndexRoute,
  MarathonMarathonIdHoursAddRoute: MarathonMarathonIdHoursAddRoute,
  MarathonMarathonIdHoursHourIdIndexRoute:
    MarathonMarathonIdHoursHourIdIndexRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/admin/logs",
        "/events/create",
        "/fundraising/dbfunds",
        "/images/$",
        "/marathon/create",
        "/notifications/create",
        "/people/bulk",
        "/people/create",
        "/teams/bulk",
        "/teams/create",
        "/config/",
        "/events/",
        "/feed/",
        "/marathon/",
        "/notifications/",
        "/people/",
        "/teams/",
        "/events/$eventId/edit",
        "/fundraising/ddn/upload",
        "/marathon/$marathonId/edit",
        "/notifications/$notificationId/manage",
        "/people/$personId/edit",
        "/teams/$teamId",
        "/events/$eventId/",
        "/marathon/$marathonId/",
        "/notifications/$notificationId/",
        "/people/$personId/",
        "/marathon/$marathonId/hours/add",
        "/marathon/$marathonId/hours/$hourId/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/admin/logs": {
      "filePath": "admin/logs.tsx"
    },
    "/events/create": {
      "filePath": "events/create.tsx"
    },
    "/fundraising/dbfunds": {
      "filePath": "fundraising/dbfunds.tsx"
    },
    "/images/$": {
      "filePath": "images/$.tsx"
    },
    "/marathon/create": {
      "filePath": "marathon/create.tsx"
    },
    "/notifications/create": {
      "filePath": "notifications/create.tsx"
    },
    "/people/bulk": {
      "filePath": "people/bulk.tsx"
    },
    "/people/create": {
      "filePath": "people/create.tsx"
    },
    "/teams/bulk": {
      "filePath": "teams/bulk.tsx"
    },
    "/teams/create": {
      "filePath": "teams/create.tsx"
    },
    "/config/": {
      "filePath": "config/index.tsx"
    },
    "/events/": {
      "filePath": "events/index.tsx"
    },
    "/feed/": {
      "filePath": "feed/index.tsx"
    },
    "/marathon/": {
      "filePath": "marathon/index.tsx"
    },
    "/notifications/": {
      "filePath": "notifications/index.tsx"
    },
    "/people/": {
      "filePath": "people/index.tsx"
    },
    "/teams/": {
      "filePath": "teams/index.tsx"
    },
    "/events/$eventId/edit": {
      "filePath": "events/$eventId/edit.tsx"
    },
    "/fundraising/ddn/upload": {
      "filePath": "fundraising/ddn/upload.tsx"
    },
    "/marathon/$marathonId/edit": {
      "filePath": "marathon/$marathonId/edit.tsx"
    },
    "/notifications/$notificationId/manage": {
      "filePath": "notifications/$notificationId/manage.tsx"
    },
    "/people/$personId/edit": {
      "filePath": "people/$personId/edit.tsx"
    },
    "/teams/$teamId": {
      "filePath": "teams/$teamId",
      "children": [
        "/teams/$teamId/_layout",
        "/teams/$teamId/edit"
      ]
    },
    "/teams/$teamId/_layout": {
      "filePath": "teams/$teamId/_layout.tsx",
      "parent": "/teams/$teamId",
      "children": [
        "/teams/$teamId/_layout/fundraising",
        "/teams/$teamId/_layout/points",
        "/teams/$teamId/_layout/"
      ]
    },
    "/teams/$teamId/edit": {
      "filePath": "teams/$teamId/edit.tsx",
      "parent": "/teams/$teamId"
    },
    "/events/$eventId/": {
      "filePath": "events/$eventId/index.tsx"
    },
    "/marathon/$marathonId/": {
      "filePath": "marathon/$marathonId/index.tsx"
    },
    "/notifications/$notificationId/": {
      "filePath": "notifications/$notificationId/index.tsx"
    },
    "/people/$personId/": {
      "filePath": "people/$personId/index.tsx"
    },
    "/marathon/$marathonId/hours/add": {
      "filePath": "marathon/$marathonId/hours/add.tsx"
    },
    "/teams/$teamId/_layout/fundraising": {
      "filePath": "teams/$teamId/_layout/fundraising.tsx",
      "parent": "/teams/$teamId/_layout"
    },
    "/teams/$teamId/_layout/points": {
      "filePath": "teams/$teamId/_layout/points.tsx",
      "parent": "/teams/$teamId/_layout"
    },
    "/teams/$teamId/_layout/": {
      "filePath": "teams/$teamId/_layout/index.tsx",
      "parent": "/teams/$teamId/_layout"
    },
    "/marathon/$marathonId/hours/$hourId/": {
      "filePath": "marathon/$marathonId/hours/$hourId/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
