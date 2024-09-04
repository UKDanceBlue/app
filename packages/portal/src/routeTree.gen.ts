/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as IndexImport } from "./routes/index";
import { Route as TeamsIndexImport } from "./routes/teams/index";
import { Route as PeopleIndexImport } from "./routes/people/index";
import { Route as NotificationsIndexImport } from "./routes/notifications/index";
import { Route as MarathonIndexImport } from "./routes/marathon/index";
import { Route as ImagesIndexImport } from "./routes/images/index";
import { Route as FeedIndexImport } from "./routes/feed/index";
import { Route as EventsIndexImport } from "./routes/events/index";
import { Route as ConfigIndexImport } from "./routes/config/index";
import { Route as TeamsCreateImport } from "./routes/teams/create";
import { Route as PeopleCreateImport } from "./routes/people/create";
import { Route as NotificationsCreateImport } from "./routes/notifications/create";
import { Route as MarathonCreateImport } from "./routes/marathon/create";
import { Route as EventsCreateImport } from "./routes/events/create";
import { Route as TeamsTeamIdIndexImport } from "./routes/teams/$teamId/index";
import { Route as PeoplePersonIdIndexImport } from "./routes/people/$personId/index";
import { Route as NotificationsNotificationIdIndexImport } from "./routes/notifications/$notificationId/index";
import { Route as MarathonMarathonIdIndexImport } from "./routes/marathon/$marathonId/index";
import { Route as EventsEventIdIndexImport } from "./routes/events/$eventId/index";
import { Route as TeamsTeamIdPointsImport } from "./routes/teams/$teamId/points";
import { Route as TeamsTeamIdFundraisingImport } from "./routes/teams/$teamId/fundraising";
import { Route as TeamsTeamIdEditImport } from "./routes/teams/$teamId/edit";
import { Route as PeoplePersonIdEditImport } from "./routes/people/$personId/edit";
import { Route as NotificationsNotificationIdManageImport } from "./routes/notifications/$notificationId/manage";
import { Route as MarathonMarathonIdEditImport } from "./routes/marathon/$marathonId/edit";
import { Route as EventsEventIdEditImport } from "./routes/events/$eventId/edit";
import { Route as MarathonMarathonIdHoursAddImport } from "./routes/marathon/$marathonId/hours/add";
import { Route as MarathonMarathonIdHoursHourIdIndexImport } from "./routes/marathon/$marathonId/hours/$hourId/index";

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const TeamsIndexRoute = TeamsIndexImport.update({
  path: "/teams/",
  getParentRoute: () => rootRoute,
} as any);

const PeopleIndexRoute = PeopleIndexImport.update({
  path: "/people/",
  getParentRoute: () => rootRoute,
} as any);

const NotificationsIndexRoute = NotificationsIndexImport.update({
  path: "/notifications/",
  getParentRoute: () => rootRoute,
} as any);

const MarathonIndexRoute = MarathonIndexImport.update({
  path: "/marathon/",
  getParentRoute: () => rootRoute,
} as any);

const ImagesIndexRoute = ImagesIndexImport.update({
  path: "/images/",
  getParentRoute: () => rootRoute,
} as any);

const FeedIndexRoute = FeedIndexImport.update({
  path: "/feed/",
  getParentRoute: () => rootRoute,
} as any);

const EventsIndexRoute = EventsIndexImport.update({
  path: "/events/",
  getParentRoute: () => rootRoute,
} as any);

const ConfigIndexRoute = ConfigIndexImport.update({
  path: "/config/",
  getParentRoute: () => rootRoute,
} as any);

const TeamsCreateRoute = TeamsCreateImport.update({
  path: "/teams/create",
  getParentRoute: () => rootRoute,
} as any);

const PeopleCreateRoute = PeopleCreateImport.update({
  path: "/people/create",
  getParentRoute: () => rootRoute,
} as any);

const NotificationsCreateRoute = NotificationsCreateImport.update({
  path: "/notifications/create",
  getParentRoute: () => rootRoute,
} as any);

const MarathonCreateRoute = MarathonCreateImport.update({
  path: "/marathon/create",
  getParentRoute: () => rootRoute,
} as any);

const EventsCreateRoute = EventsCreateImport.update({
  path: "/events/create",
  getParentRoute: () => rootRoute,
} as any);

const TeamsTeamIdIndexRoute = TeamsTeamIdIndexImport.update({
  path: "/teams/$teamId/",
  getParentRoute: () => rootRoute,
} as any);

const PeoplePersonIdIndexRoute = PeoplePersonIdIndexImport.update({
  path: "/people/$personId/",
  getParentRoute: () => rootRoute,
} as any);

const NotificationsNotificationIdIndexRoute =
  NotificationsNotificationIdIndexImport.update({
    path: "/notifications/$notificationId/",
    getParentRoute: () => rootRoute,
  } as any);

const MarathonMarathonIdIndexRoute = MarathonMarathonIdIndexImport.update({
  path: "/marathon/$marathonId/",
  getParentRoute: () => rootRoute,
} as any);

const EventsEventIdIndexRoute = EventsEventIdIndexImport.update({
  path: "/events/$eventId/",
  getParentRoute: () => rootRoute,
} as any);

const TeamsTeamIdPointsRoute = TeamsTeamIdPointsImport.update({
  path: "/teams/$teamId/points",
  getParentRoute: () => rootRoute,
} as any);

const TeamsTeamIdFundraisingRoute = TeamsTeamIdFundraisingImport.update({
  path: "/teams/$teamId/fundraising",
  getParentRoute: () => rootRoute,
} as any);

const TeamsTeamIdEditRoute = TeamsTeamIdEditImport.update({
  path: "/teams/$teamId/edit",
  getParentRoute: () => rootRoute,
} as any);

const PeoplePersonIdEditRoute = PeoplePersonIdEditImport.update({
  path: "/people/$personId/edit",
  getParentRoute: () => rootRoute,
} as any);

const NotificationsNotificationIdManageRoute =
  NotificationsNotificationIdManageImport.update({
    path: "/notifications/$notificationId/manage",
    getParentRoute: () => rootRoute,
  } as any);

const MarathonMarathonIdEditRoute = MarathonMarathonIdEditImport.update({
  path: "/marathon/$marathonId/edit",
  getParentRoute: () => rootRoute,
} as any);

const EventsEventIdEditRoute = EventsEventIdEditImport.update({
  path: "/events/$eventId/edit",
  getParentRoute: () => rootRoute,
} as any);

const MarathonMarathonIdHoursAddRoute = MarathonMarathonIdHoursAddImport.update(
  {
    path: "/marathon/$marathonId/hours/add",
    getParentRoute: () => rootRoute,
  } as any
);

const MarathonMarathonIdHoursHourIdIndexRoute =
  MarathonMarathonIdHoursHourIdIndexImport.update({
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
    "/events/create": {
      id: "/events/create";
      path: "/events/create";
      fullPath: "/events/create";
      preLoaderRoute: typeof EventsCreateImport;
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
    "/people/create": {
      id: "/people/create";
      path: "/people/create";
      fullPath: "/people/create";
      preLoaderRoute: typeof PeopleCreateImport;
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
    "/images/": {
      id: "/images/";
      path: "/images";
      fullPath: "/images";
      preLoaderRoute: typeof ImagesIndexImport;
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
    "/teams/$teamId/edit": {
      id: "/teams/$teamId/edit";
      path: "/teams/$teamId/edit";
      fullPath: "/teams/$teamId/edit";
      preLoaderRoute: typeof TeamsTeamIdEditImport;
      parentRoute: typeof rootRoute;
    };
    "/teams/$teamId/fundraising": {
      id: "/teams/$teamId/fundraising";
      path: "/teams/$teamId/fundraising";
      fullPath: "/teams/$teamId/fundraising";
      preLoaderRoute: typeof TeamsTeamIdFundraisingImport;
      parentRoute: typeof rootRoute;
    };
    "/teams/$teamId/points": {
      id: "/teams/$teamId/points";
      path: "/teams/$teamId/points";
      fullPath: "/teams/$teamId/points";
      preLoaderRoute: typeof TeamsTeamIdPointsImport;
      parentRoute: typeof rootRoute;
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
    "/teams/$teamId/": {
      id: "/teams/$teamId/";
      path: "/teams/$teamId";
      fullPath: "/teams/$teamId";
      preLoaderRoute: typeof TeamsTeamIdIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/marathon/$marathonId/hours/add": {
      id: "/marathon/$marathonId/hours/add";
      path: "/marathon/$marathonId/hours/add";
      fullPath: "/marathon/$marathonId/hours/add";
      preLoaderRoute: typeof MarathonMarathonIdHoursAddImport;
      parentRoute: typeof rootRoute;
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

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  EventsCreateRoute,
  MarathonCreateRoute,
  NotificationsCreateRoute,
  PeopleCreateRoute,
  TeamsCreateRoute,
  ConfigIndexRoute,
  EventsIndexRoute,
  FeedIndexRoute,
  ImagesIndexRoute,
  MarathonIndexRoute,
  NotificationsIndexRoute,
  PeopleIndexRoute,
  TeamsIndexRoute,
  EventsEventIdEditRoute,
  MarathonMarathonIdEditRoute,
  NotificationsNotificationIdManageRoute,
  PeoplePersonIdEditRoute,
  TeamsTeamIdEditRoute,
  TeamsTeamIdFundraisingRoute,
  TeamsTeamIdPointsRoute,
  EventsEventIdIndexRoute,
  MarathonMarathonIdIndexRoute,
  NotificationsNotificationIdIndexRoute,
  PeoplePersonIdIndexRoute,
  TeamsTeamIdIndexRoute,
  MarathonMarathonIdHoursAddRoute,
  MarathonMarathonIdHoursHourIdIndexRoute,
});

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/events/create",
        "/marathon/create",
        "/notifications/create",
        "/people/create",
        "/teams/create",
        "/config/",
        "/events/",
        "/feed/",
        "/images/",
        "/marathon/",
        "/notifications/",
        "/people/",
        "/teams/",
        "/events/$eventId/edit",
        "/marathon/$marathonId/edit",
        "/notifications/$notificationId/manage",
        "/people/$personId/edit",
        "/teams/$teamId/edit",
        "/teams/$teamId/fundraising",
        "/teams/$teamId/points",
        "/events/$eventId/",
        "/marathon/$marathonId/",
        "/notifications/$notificationId/",
        "/people/$personId/",
        "/teams/$teamId/",
        "/marathon/$marathonId/hours/add",
        "/marathon/$marathonId/hours/$hourId/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/events/create": {
      "filePath": "events/create.tsx"
    },
    "/marathon/create": {
      "filePath": "marathon/create.tsx"
    },
    "/notifications/create": {
      "filePath": "notifications/create.tsx"
    },
    "/people/create": {
      "filePath": "people/create.tsx"
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
    "/images/": {
      "filePath": "images/index.tsx"
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
    "/marathon/$marathonId/edit": {
      "filePath": "marathon/$marathonId/edit.tsx"
    },
    "/notifications/$notificationId/manage": {
      "filePath": "notifications/$notificationId/manage.tsx"
    },
    "/people/$personId/edit": {
      "filePath": "people/$personId/edit.tsx"
    },
    "/teams/$teamId/edit": {
      "filePath": "teams/$teamId/edit.tsx"
    },
    "/teams/$teamId/fundraising": {
      "filePath": "teams/$teamId/fundraising.tsx"
    },
    "/teams/$teamId/points": {
      "filePath": "teams/$teamId/points.tsx"
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
    "/teams/$teamId/": {
      "filePath": "teams/$teamId/index.tsx"
    },
    "/marathon/$marathonId/hours/add": {
      "filePath": "marathon/$marathonId/hours/add.tsx"
    },
    "/marathon/$marathonId/hours/$hourId/": {
      "filePath": "marathon/$marathonId/hours/$hourId/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
