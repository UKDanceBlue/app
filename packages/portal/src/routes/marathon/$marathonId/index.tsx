import { MarathonViewer } from "@elements/viewers/marathon/MarathonViewer";
import { createFileRoute } from "@tanstack/react-router";
import { routerAuthCheck } from "@tools/routerAuthCheck";
import { AccessLevel } from "@ukdanceblue/common";
import { graphql } from "@ukdanceblue/common/graphql-client-portal";
import { useQuery } from "urql";

const marathonPageDocument = graphql(/* GraphQL */ `
  query MarathonPage($marathonUuid: GlobalId!) {
    marathon(uuid: $marathonUuid) {
      ...MarathonViewerFragment
    }
  }
`);

function ViewMarathonPage() {
  const { marathonId } = Route.useParams();

  const [result] = useQuery({
    query: marathonPageDocument,
    variables: { marathonUuid: marathonId },
  });

  return (
    <div>
      <MarathonViewer marathon={result.data?.marathon} />
    </div>
  );
}

export const Route = createFileRoute("/marathon/$marathonId/")({
  component: ViewMarathonPage,
  beforeLoad({ context }) {
    routerAuthCheck(Route, context);
  },
  staticData: {
    authorizationRules: [
      {
        accessLevel: AccessLevel.CommitteeChairOrCoordinator,
      },
    ],
  },
});
