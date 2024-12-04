import { PlusOutlined } from "@ant-design/icons";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AccessLevel, CommitteeIdentifier } from "@ukdanceblue/common";
import { Button, Flex } from "antd";

import { SolicitationCodeTable } from "#elements/tables/fundraising/SolicitationCodeTable";
import { routerAuthCheck } from "#tools/routerAuthCheck";

export const Route = createFileRoute("/fundraising/solicitation-code/")({
  component: RouteComponent,
  beforeLoad({ context }) {
    routerAuthCheck(Route, context);
  },
  staticData: {
    authorizationRules: [
      {
        accessLevel: AccessLevel.Admin,
      },
      {
        accessLevel: AccessLevel.CommitteeChairOrCoordinator,
        committeeIdentifier: CommitteeIdentifier.fundraisingCommittee,
      },
    ],
  },
});

function RouteComponent() {
  return (
    <>
      <Flex justify="space-between" align="center">
        <h1>Solicitation Codes</h1>
        <Flex gap={16}>
          <Link to="/fundraising/solicitation-code/create">
            <Button icon={<PlusOutlined />} size="large">
              Create Solicitation Code
            </Button>
          </Link>
        </Flex>
      </Flex>
      <SolicitationCodeTable />
    </>
  );
}
