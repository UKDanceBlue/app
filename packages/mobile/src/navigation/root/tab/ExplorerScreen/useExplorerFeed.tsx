import { universalCatch } from "@common/logging";
import { useLoading } from "@context/loading";
import { useCallback, useEffect, useState } from "react";
import type { FeedItem } from "react-native-rss-parser";
import { parse } from "react-native-rss-parser";

// A react hook works kinda like a controller in MVC
export function useExplorerFeed(): {
  blogPosts: FeedItem[] | undefined;
  podcasts: FeedItem[] | undefined;
  loading: boolean;
} {
  const [loading, setLoading] = useLoading();
  const [blogPosts, setBlogPosts] = useState<FeedItem[] | undefined>();
  const [podcasts, setPodcasts] = useState<FeedItem[] | undefined>();
  // const [instagramPosts, setInstagramPosts] = useState();
  // const [tiktokPosts, setTikTokPosts] = useState();
  // const [youtubePosts, setYoutubePosts] = useState();

  // useCallback is a react hook that returns a memoized callback
  // This means that the function will only be recreated if one of the dependencies changes
  const loadFeed = useCallback(async () => {
    try {
      const dbWebsiteRSS = await fetch("https://danceblue.org/feed");
      const dbWebsiteXML = await dbWebsiteRSS.text();
      const dbWebsiteParsed = await parse(dbWebsiteXML);

      const blogPosts = dbWebsiteParsed.items.filter((item) =>
        item.categories.some((category) => category?.name !== "Podcast")
      );

      setBlogPosts(blogPosts);

      const podcastPosts = dbWebsiteParsed.items
        .filter((item) =>
          item.categories.some((category) => category?.name === "Podcast")
        )
        .filter((item) =>
          item.enclosures.some(
            (enclosure) => enclosure.mimeType === "audio/mpeg"
          )
        );

      setPodcasts(podcastPosts);
    } catch (error) {
      console.error(error);
    }

    // TODO: Implement Instagram, TikTok, YouTube RSS if possible

    // The empty array at the end of the useCallback hook means that the function will only be recreated if the parent component is recreated
    // If there were any dependencies in the array, the function would be recreated if any of the dependencies changed. i.e. if you had some
    // state value that you wanted to use in the function, you would put it in the array so that the function would be recreated if that state
    // value changed
  }, []);

  /*
        TO SORT FeedItem[]      (blog posts and podcasts)

            .map((item) => ({
                ...item,
                dateTimePublished: DateTime.fromRFC2822(item.published),
            }))
            .sort((a,b) =>
                a.dateTimePublished > b.dateTimePublished
                ? -1
                : a.dateTimePublished > b.dateTimePublished
                ? 1
                : 0
            );
    */

  useEffect(() => {
    setLoading(true);
    loadFeed()
      .catch(universalCatch)
      .finally(() => setLoading(false));

    // useEffect on the other hand is a react hook that runs the function whenever the dependencies change
    // An empty array would mean that the function would only run once, when the component is first created
    // But since we have a dependency, the function will run whenever the dependency changes
  }, [loadFeed, setLoading]);

  return { blogPosts, podcasts, loading };
}

// I would suggest splitting this file into one for each type of feed item instead of having them all in one file
