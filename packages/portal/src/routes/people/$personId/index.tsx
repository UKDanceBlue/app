import { PersonViewer } from "@elements/viewers/person/PersonViewer";
import { useLoginState } from "@hooks/useLoginState";
import { useQueryStatusWatcher } from "@hooks/useQueryStatusWatcher";
import { createFileRoute } from "@tanstack/react-router";
import { useParams } from "@tanstack/react-router";
import { routerAuthCheck } from "@tools/routerAuthCheck";
import { AccessLevel } from "@ukdanceblue/common";
import { graphql } from "@ukdanceblue/common/graphql-client-portal";
import { useQuery } from "urql";

const viewPersonPageDocument = graphql(/* GraphQL */ `
  query ViewPersonPage($uuid: GlobalId!) {
    person(uuid: $uuid) {
      ...PersonViewerFragment
    }
  }
`);

function ViewPersonPage() {
  const { authorization } = useLoginState();
  const { personId } = useParams({ from: "/people/$personId/" });

  const [{ data, fetching, error }] = useQuery({
    query: viewPersonPageDocument,
    variables: { uuid: personId },
  });

  useQueryStatusWatcher({
    error,
    fetching,
    loadingMessage: "Loading person...",
  });

  return (
    <div>
      <PersonViewer
        personFragment={data?.person}
        authorization={authorization}
      />
    </div>
  );
}

export const Route = createFileRoute("/people/$personId/")({
  component: ViewPersonPage,
  beforeLoad({ context }) {
    routerAuthCheck(Route, context);
  },
  staticData: {
    authorizationRules: [
      {
        accessLevel: AccessLevel.Admin,
      },
    ],
  },
});
