import {
  AuthSource,
  CommitteeIdentifier,
  committeeNames,
  CommitteeRole,
  DbRole,
} from "@ukdanceblue/common";
import { openURL } from "expo-linking";
import { useMemo } from "react";
import React from "react";
import { View } from "react-native";

import { useLogin } from "@/common/auth";
import JumbotronGeometric from "@/common/components/JumbotronGeometric";
import { useThemeFonts } from "@/common/customHooks";
import { universalCatch } from "@/common/logging";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Spinner } from "@/components/ui/spinner";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import type { FragmentOf } from "@/graphql/index";
import { graphql, readFragment } from "@/graphql/index";

import { ProfileFooter } from "./ProfileFooter";

export const ProfileScreenAuthFragment = graphql(/* GraphQL */ `
  fragment ProfileScreenAuthFragment on LoginState {
    dbRole
    authSource
  }
`);

export const ProfileScreenUserFragment = graphql(/* GraphQL */ `
  fragment ProfileScreenUserFragment on PersonNode {
    name
    linkblue
    teams {
      position
      team {
        name
      }
    }
    primaryCommittee {
      identifier
      role
    }
  }
`);

/**
 * Component for "Profile" screen in main navigation
 */
const ProfileScreen = ({
  profileScreenAuthFragment,
  profileScreenUserFragment,
}: {
  profileScreenAuthFragment: FragmentOf<
    typeof ProfileScreenAuthFragment
  > | null;
  profileScreenUserFragment: FragmentOf<
    typeof ProfileScreenUserFragment
  > | null;
}) => {
  const authData = readFragment(
    ProfileScreenAuthFragment,
    profileScreenAuthFragment
  );
  const userData = readFragment(
    ProfileScreenUserFragment,
    profileScreenUserFragment
  );

  const { body, mono } = useThemeFonts();

  const [loading, trigger] = useLogin();

  function jumboText() {
    let welcomeString = "Welcome to DanceBlue!";
    if (userData?.name) {
      welcomeString = `Hey ${userData.name}!`;
    }

    return welcomeString;
  }

  function nameString() {
    return userData?.name ?? "Anonymous";
  }

  const committeeString = useMemo(() => {
    if (userData?.primaryCommittee) {
      if (
        // TODO: Add a way to query committee info
        userData.primaryCommittee.identifier ===
          CommitteeIdentifier.overallCommittee &&
        userData.primaryCommittee.role === CommitteeRole.Chair
      ) {
        return "✨ Overall Chair ✨";
      }
      return `Committee: ${
        committeeNames[userData.primaryCommittee.identifier]
      } ${userData.primaryCommittee.role}`;
    } else {
      return null;
    }
  }, [userData?.primaryCommittee]);

  if (loading) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  } else if (authData?.dbRole !== DbRole.None) {
    return (
      <>
        <JumbotronGeometric title={jumboText()} />
        <VStack flex={0.95} justifyContent="space-between" display="flex">
          <View maxWidth="full">
            <Text
              width="full"
              textAlign="center"
              // fontSize={theme.fontSizes["2xl"]}
            >
              You&apos;re currently logged in as:
            </Text>
            <Text
              width="full"
              textAlign="center"
              // fontSize={theme.fontSizes["2xl"]}
              fontFamily={body}
              color="primary.600"
            >
              {nameString()}
            </Text>
            {committeeString && (
              <Text
                width="full"
                italic
                textAlign="center"
                color="primary.600"
                // fontSize={theme.fontSizes.lg}
                fontFamily={mono}
              >
                {committeeString}
              </Text>
            )}
            <Box alignItems="center" width="full">
              <Button
                onPress={() =>
                  openURL(
                    "https://drive.google.com/drive/u/1/folders/1m2Gxyjw05aF8yHYuiwa8L9S2modK-8e-"
                  ).catch(universalCatch)
                }
              >
                Dancer Resources
              </Button>
            </Box>
          </View>
          {/* TODO: Implement server-side support for individual totals */}
          {/* {userData.teams.length > 0 &&
            userData.linkblue &&
            firstCommittee.individualTotals && (
              <Container maxWidth="full">
                <Text
                  width="full"
                  textAlign="center"
                  fontSize={theme.fontSizes["2xl"]}
                >
                  Spirit Point Count:
                </Text>
                <Text
                  width="full"
                  textAlign="center"
                  fontFamily={headingBold}
                  color="primary.600"
                  fontSize={theme.fontSizes["2xl"]}
                >
                  {userData.team.individualTotals[userData.linkblue]} points
                </Text>
              </Container>
            )} */}
          <View maxWidth="full" alignItems="center">
            <ProfileFooter
              profileScreenAuthFragment={profileScreenAuthFragment}
            />
          </View>
        </VStack>
      </>
    );
  } else {
    // This one doesn't really need to look as nice since it SHOULD be impossible to get here without the modal popping up
    return (
      <Center>
        <VStack>
          <Text>You are not logged in.</Text>
          <Button
            onPress={() => {
              trigger(AuthSource.LinkBlue);
            }}
            style={{ marginTop: 10 }}
          >
            Login with linkblue
          </Button>
          <Button
            onPress={() => {
              trigger(AuthSource.Anonymous);
            }}
          >
            Login anonymously
          </Button>
        </VStack>
      </Center>
    );
  }
};

export default ProfileScreen;
