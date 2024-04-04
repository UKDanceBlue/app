import { useNetworkStatus } from "@common/customHooks";
import { Logger } from "@common/logger/Logger";
import { dateTimeFromSomething } from "@ukdanceblue/common";
import { graphql } from "@ukdanceblue/common/dist/graphql-client-public";
import { Button, Modal, Text } from "native-base";
import { useEffect, useMemo, useState } from "react";
import { TextInput } from "react-native";
import { useQuery } from "urql";

import { HourScreenComponent } from "./HourScreenComponent";
import { MarathonCountdownScreen } from "./MarathonCountdownScreen";

const marathonScreenDocument = graphql(/* GraphQL */ `
  query MarathonScreen {
    currentMarathonHour {
      ...HourScreenFragment
    }
    nextMarathon {
      startDate
      endDate
      hours {
        ...HourScreenFragment
      }
    }
  }
`);

export const MarathonScreen = () => {
  const [{ isInternetReachable }] = useNetworkStatus();

  const [{ fetching, data, error }, refresh] = useQuery({
    query: marathonScreenDocument,
  });
  const [lastGoodData, setLastGoodData] = useState(data);
  useEffect(() => {
    if (data) {
      setLastGoodData(data);
    }
  }, [data]);

  const [hourOverride, setHourOverride] = useState<number | undefined>(
    undefined
  );
  const [showSecretMenu, setShowSecretMenu] = useState(false);
  const [secretMenuText, setSecretMenuText] = useState("");

  useEffect(() => {
    // This is just a polling timer to refresh the data every minute
    // in case the server has updated the marathon hour
    const interval = setInterval(() => {
      if (isInternetReachable) refresh({ requestPolicy: "network-only" });
    }, 15_000);

    return () => {
      clearInterval(interval);
    };
  }, [isInternetReachable, refresh]);

  useEffect(() => {
    if (error) {
      Logger.error("A graphql error occurred", {
        error,
        source: "MarathonScreen",
        tags: ["graphql"],
      });
    }
  }, [error]);

  const component = useMemo(() => {
    if (isInternetReachable === false) {
      return (
        <Text width="full" height="full" textAlign="center">
          No Internet Connection, cannot load marathon information
        </Text>
      );
    } else if (lastGoodData?.nextMarathon && hourOverride != null) {
      if (hourOverride < 0) {
        return (
          <MarathonCountdownScreen
            marathonStart={dateTimeFromSomething(
              lastGoodData.nextMarathon.startDate
            )}
            marathonEnd={dateTimeFromSomething(
              lastGoodData.nextMarathon.endDate
            )}
            showSecretMenu={() => setShowSecretMenu(true)}
          />
        );
      } else {
        return (
          <HourScreenComponent
            hourScreenFragment={lastGoodData.nextMarathon.hours[hourOverride]}
            isLoading={fetching && !lastGoodData.nextMarathon}
            refresh={() => refresh({ requestPolicy: "network-only" })}
            showSecretMenu={() => setShowSecretMenu(true)}
          />
        );
      }
    } else if (lastGoodData?.currentMarathonHour) {
      return (
        <HourScreenComponent
          hourScreenFragment={lastGoodData.currentMarathonHour}
          isLoading={fetching && !lastGoodData.currentMarathonHour}
          refresh={() => refresh({ requestPolicy: "network-only" })}
          showSecretMenu={() => setShowSecretMenu(true)}
        />
      );
    } else if (lastGoodData?.nextMarathon) {
      return (
        <MarathonCountdownScreen
          marathonStart={dateTimeFromSomething(
            lastGoodData.nextMarathon.startDate
          )}
          marathonEnd={dateTimeFromSomething(lastGoodData.nextMarathon.endDate)}
          showSecretMenu={() => setShowSecretMenu(true)}
        />
      );
    } else if (error) {
      return (
        <Text width="full" height="full" textAlign="center">
          Something went Wrong!
        </Text>
      );
    } else {
      Logger.info("MarathonScreen has invalid data", {
        source: "MarathonScreen",
        context: {
          nextMarathon: lastGoodData?.nextMarathon,
          currentHour: lastGoodData?.currentMarathonHour,
        },
      });
      return (
        <Text width="full" height="full" textAlign="center">
          Invalid data received, please reach out to committee
        </Text>
      );
    }
  }, [
    error,
    fetching,
    hourOverride,
    isInternetReachable,
    lastGoodData?.currentMarathonHour,
    lastGoodData?.nextMarathon,
    refresh,
  ]);

  return (
    <>
      <Modal
        isOpen={showSecretMenu}
        onClose={() => setShowSecretMenu(false)}
        avoidKeyboard
        background={"#fff6"}
      >
        <Text>Override</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "black",
            borderWidth: 1,
            width: 80,
            backgroundColor: "white",
          }}
          value={secretMenuText || ""}
          onChangeText={setSecretMenuText}
        />
        <Button
          onPress={() => {
            const parsedText = Number.parseInt(secretMenuText, 10);
            if (
              (!Number.isNaN(parsedText) && parsedText === -1) ||
              (parsedText >= 0 &&
                data?.nextMarathon &&
                parsedText <= data.nextMarathon.hours.length)
            ) {
              setHourOverride(parsedText);
            } else {
              setHourOverride(undefined);
            }
            setShowSecretMenu(false);
          }}
        >
          Confirm
        </Button>
      </Modal>
      {component}
    </>
  );
};
