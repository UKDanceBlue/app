import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useAuthorizationRequirement } from "@hooks/useLoginState";
import { Link, useNavigate } from "@tanstack/react-router";
import type { Authorization } from "@ukdanceblue/common";
import {
  AccessLevel,
  committeeNames,
  MembershipPositionType,
  stringifyDbRole,
} from "@ukdanceblue/common";
import type { FragmentType } from "@ukdanceblue/common/graphql-client-portal";
import {
  getFragmentData,
  graphql,
} from "@ukdanceblue/common/graphql-client-portal";
import { Button, Descriptions, Empty, Flex, Typography } from "antd";

import { usePersonDeletePopup } from "../../components/person/PersonDeletePopup";

export const PersonViewerFragment = graphql(/* GraphQL */ `
  fragment PersonViewerFragment on PersonNode {
    id
    name
    linkblue
    email
    dbRole
    teams {
      position
      team {
        marathon {
          year
        }
        id
        name
      }
    }
    committees {
      identifier
      role
    }
  }
`);

export function PersonViewer({
  personFragment: PersonFragment,
  authorization,
}: {
  personFragment?: FragmentType<typeof PersonViewerFragment> | undefined | null;
  authorization: Authorization | undefined;
}) {
  const personData = getFragmentData(PersonViewerFragment, PersonFragment);

  const navigate = useNavigate();
  const { PersonDeletePopup, showModal } = usePersonDeletePopup({
    uuid: personData?.id ?? "",
    onDelete: () => {
      navigate({ to: "/people" }).catch((error: unknown) =>
        console.error(error)
      );
    },
  });

  const canEditPerson = useAuthorizationRequirement(
    AccessLevel.CommitteeChairOrCoordinator
  );

  if (!personData) {
    return (
      <Empty description="Person not found" style={{ marginTop: "1em" }} />
    );
  }

  return (
    <Flex vertical gap="middle" align="center">
      <Typography.Title level={2}>
        {personData.name}
        {canEditPerson && (
          <>
            <Link
              to="/people/$personId/edit"
              params={{ personId: personData.id }}
              color="#efefef"
            >
              <EditOutlined style={{ marginLeft: "1em" }} />
            </Link>
            <Button
              style={{ display: "inline", marginLeft: "1em" }}
              onClick={showModal}
              icon={<DeleteOutlined />}
              danger
              shape="circle"
            />
          </>
        )}
      </Typography.Title>
      {PersonDeletePopup}
      <Descriptions
        column={1}
        layout="vertical"
        items={[
          {
            label: "Linkblue",
            children: personData.linkblue,
          },
          {
            label: "Email",
            children: personData.email,
          },
          {
            label: "Role",
            children: stringifyDbRole(personData.dbRole),
          },
          ...personData.committees.map((committee) => ({
            label: committeeNames[committee.identifier],
            children: stringifyDbRole(committee.role),
          })),
          {
            label: "Teams",
            children:
              personData.teams.length === 0 ? (
                "Not a member of any teams"
              ) : (
                <Descriptions
                  column={2}
                  bordered
                  size="small"
                  items={personData.teams.map((team) => {
                    let children;

                    if (
                      authorization &&
                      (authorization.accessLevel >= AccessLevel.Committee ||
                        team.position === MembershipPositionType.Captain)
                    ) {
                      children = (
                        <Link
                          to="/teams/$teamId/points"
                          params={{ teamId: team.team.id }}
                        >
                          {team.position}
                        </Link>
                      );
                    } else {
                      children = team.position;
                    }

                    return {
                      label: `${team.team.name} (${team.team.marathon.year})`,
                      key: team.team.id,
                      children,
                    };
                  })}
                />
              ),
          },
        ]}
      />
    </Flex>
  );
}
