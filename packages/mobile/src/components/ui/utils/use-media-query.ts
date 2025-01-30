import { useWindowDimensions } from "react-native";

type QueryKeys =
  | "maxWidth"
  | "minWidth"
  | "maxHeight"
  | "minHeight"
  | "orientation";

type SubQuery = Partial<Record<QueryKeys, number | string>>;
type Query = SubQuery[];

export function useMediaQuery(query: SubQuery | Query) {
  const dims = useWindowDimensions();
  const { height } = dims;
  const { width } = dims;

  return iterateQuery(query, height, width);
}

function queryResolver(query: any, width?: number, height?: number) {
  for (const queryKey in query) {
    if (!calculateQuery(queryKey, query[queryKey], height, width)) {
      return false;
    }
  }
  return true;
}

function iterateQuery(
  query: SubQuery | Query,
  height?: number,
  width?: number
) {
  const queryResults = [];
  if (Array.isArray(query)) {
    query.forEach((subQuery: SubQuery) => {
      queryResults.push(queryResolver(subQuery, width, height));
    });
  } else {
    queryResults.push(queryResolver(query, width, height));
  }
  return queryResults;
}

function calculateQuery(
  key: string,
  val?: number | string,
  height?: number,
  width?: number
) {
  let retval;
  switch (key) {
    case "maxWidth": {
      retval = typeof val === "number" && width ? width <= val : undefined;
      break;
    }
    case "minWidth": {
      retval = typeof val === "number" && width ? width >= val : undefined;
      break;
    }
    case "maxHeight": {
      retval = typeof val === "number" && height ? height <= val : undefined;
      break;
    }
    case "minHeight": {
      retval = typeof val === "number" && height ? height >= val : undefined;
      break;
    }
    case "orientation": {
      if (val) {
        retval =
          width && height && width > height
            ? typeof val === "string" && val === "landscape"
            : typeof val === "string" && val === "portrait";
      }
      break;
    }
    default: {
      break;
    }
  }
  return retval;
}
