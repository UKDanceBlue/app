// Import third-party dependencies
import { FontAwesome5 } from "@expo/vector-icons";
import type { Audio } from "expo-av";
import { canOpenURL, openURL } from "expo-linking";
import { useEffect, useRef, useState } from "react";

import { Box } from "@/components/ui/box";
import { Button, ButtonIcon } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Link } from "@/components/ui/link";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@/components/ui/slider";
import { Spinner } from "@/components/ui/spinner";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

import { universalCatch } from "../logging";
import { showMessage } from "../util/alertUtils";

/**
 * A row-based component showing a target name, their rank (if applicable), and their points
 */
const AudioPlayer = ({
  sound,
  loading,
  title,
  titleLink,
}: {
  sound?: Audio.Sound;
  loading?: boolean;
  title?: string;
  titleLink?: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number | undefined>();
  const [currentTime, setCurrentTime] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const seeking = useRef(false);

  function seekTo(value: number) {
    if (!seeking.current) {
      seeking.current = true;
    }
    setSeekTime(value);
  }

  function applySeek(value: number) {
    setSeekTime(value);
    if (sound) {
      sound
        .setPositionAsync(value, {
          toleranceMillisAfter: 300,
          toleranceMillisBefore: 300,
        })
        .then(() => {
          seeking.current = false;
        })
        .catch(showMessage);
    }
  }

  useEffect(() => {
    if (sound) {
      sound.setProgressUpdateIntervalAsync(300).catch(universalCatch);
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setDuration(status.durationMillis);
          setCurrentTime(status.positionMillis);
          if (!seeking.current) {
            setSeekTime(status.positionMillis);
          }
        }
      });
    }
    return sound ? () => sound.setOnPlaybackStatusUpdate(null) : undefined;
  }, [sound]);

  useEffect(() => {
    if (sound) {
      if (isPlaying) {
        sound.playAsync().catch(universalCatch);
      } else {
        sound.pauseAsync().catch(universalCatch);
      }
    }
  }, [isPlaying, sound]);

  let currentTimeString;
  if (duration != null) {
    if (duration >= 60_000) {
      currentTimeString = `${Math.floor(
        (seeking.current ? seekTime : currentTime) / 60_000
      )
        .toString()
        .padStart(2, "0")}:${Math.floor(
        ((seeking.current ? seekTime : currentTime) % 60_000) / 1000
      )
        .toString()
        .padStart(2, "0")}`;
    } else {
      currentTimeString = Math.floor(
        (seeking.current ? seekTime : currentTime) / 1000
      )
        .toString()
        .padStart(2, "0");
    }
  } else {
    currentTimeString = "--:--";
  }
  let durationString;
  if (duration != null) {
    if (duration >= 60_000) {
      durationString = `${Math.floor(duration / 60_000)
        .toString()
        .padStart(2, "0")}:${Math.floor((duration % 60_000) / 1000)
        .toString()
        .padStart(2, "0")}`;
    } else {
      durationString = Math.floor(duration / 1000)
        .toString()
        .padStart(2, "0");
    }
  } else {
    durationString = "--:--";
  }

  return (
    <VStack className="mx-2 my-1 flex-1 rounded bg-gray-300 p-2 shadow-md dark:bg-gray-700">
      {title &&
        (titleLink == null ? (
          <Text className="flex-2 mx-1 my-1 text-center">{title}</Text>
        ) : (
          <Link
            className="flex-2 mx-1 my-1 text-center"
            onPress={() => {
              canOpenURL(titleLink)
                .then((canOpen) => canOpen && openURL(titleLink))
                .then((openedSuccessfully) => {
                  if (!openedSuccessfully) {
                    showMessage("Could not open link");
                  }
                })
                .catch(showMessage);
            }}
          >
            {title}
          </Link>
        ))}
      <HStack className="flex-3 mx-1 my-1 items-center justify-between rounded bg-gray-300 p-1 shadow-md dark:bg-gray-700">
        <Box className="w-1/10 mr-1%">
          {loading ? (
            <Spinner />
          ) : (
            <Button
              className="p-1"
              onPress={() => setIsPlaying(!isPlaying)}
              disabled={duration == null}
            >
              <ButtonIcon>
                <FontAwesome5 name={isPlaying ? "pause" : "play"} size={15} />
              </ButtonIcon>
            </Button>
          )}
        </Box>
        <Slider
          defaultValue={0}
          value={seekTime}
          minValue={0}
          maxValue={duration ?? 0}
          accessibilityLabel="Progress of the podcast"
          step={300}
          onChange={seekTo}
          onChangeEnd={applySeek}
          isDisabled={duration == null}
          size="sm"
          className="w-8/10"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Text className="w-1/10 ml-1%" numberOfLines={1}>
          {currentTimeString} / {durationString}
        </Text>
      </HStack>
    </VStack>
  );
};

export default AudioPlayer;
