import type { DateTime } from "luxon";

export const Comparator = {
  EQUALS: "eq",
  GREATER_THAN: "gt",
  LESS_THAN: "lt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  LESS_THAN_OR_EQUAL_TO: "lte",
  INCLUDES: "incl",
  LIKE: "like",
  REGEX: "regex",
  STARTS_WITH: "sw",
  ENDS_WITH: "ew",
} as const;
export type Comparator = (typeof Comparator)[keyof typeof Comparator];

export const StringComparator = {
  EQUALS: "eq",
  INCLUDES: "incl",
  LIKE: "like",
  REGEX: "regex",
  STARTS_WITH: "sw",
  ENDS_WITH: "ew",
} as const;
export type StringComparator =
  (typeof StringComparator)[keyof typeof StringComparator];

export const NumericComparator = {
  EQUALS: "eq",
  GREATER_THAN: "gt",
  LESS_THAN: "lt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  LESS_THAN_OR_EQUAL_TO: "lte",
} as const;
export type NumericComparator =
  (typeof NumericComparator)[keyof typeof NumericComparator];

export const EqualityComparator = {
  EQUALS: "eq",
} as const;
export type EqualityComparator =
  (typeof EqualityComparator)[keyof typeof EqualityComparator];

() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const stringComparator: Comparator = "" as StringComparator;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const numericComparator: Comparator = "" as NumericComparator;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const equalityComparator: Comparator = "" as EqualityComparator;

  throw new Error("This function should never be exported");
};

/**
 * Date fields should be sent as ISO 8601 strings.
 */
export interface FilterItem<
  Resource extends object,
  Key extends keyof Resource & string = keyof Resource & string,
  ValueType extends Resource[Key] = Resource[Key],
> {
  /**
   * The value to filter on.
   * If this is an array, the field will be filtered on any of the values.
   */
  value: ValueType extends DateTime
    ? string // DateTime uses ISO 8601 strings
    : ValueType;
  /**
   * The operator to use for the filter.
   */
  comparison: ValueType extends DateTime
    ? NumericComparator // DateTime uses NumericComparators
    : ValueType extends string
    ? StringComparator // String uses StringComparators
    : ValueType extends number
    ? NumericComparator // Number uses NumericComparators
    : EqualityComparator; // Default to Comparator.EQUALS
}

// type StringFilter<
//   FilterType extends FilterItem<Record<string, Primitive>, string>
// > =
//   `filter[${FilterType["field"]}][]=${FilterType["comparison"]}:${FilterType["value"]}`;

export interface PaginationOptions {
  /**
   * The page number to return.
   */
  page: number;
  /**
   * The number of items to return per page.
   */
  pageSize: number;
}

export const SortDirection = {
  ASCENDING: "asc",
  DESCENDING: "desc",
} as const;

export type SortDirection = (typeof SortDirection)[keyof typeof SortDirection];

export interface SortingOptions {
  /**
   * The field to sort by.
   */
  sortBy: string[];
  /**
   * The direction to sort by.
   * Default depends on the field type, for example a numeric
   * field would be ascending by default, while a date field
   * would be descending by default.
   */
  sortDirection?: SortDirection[];
}

export interface FilterOptions<Resource extends object> {
  /**
   * A list of filters to apply to the request, this will search
   * the database for only the resources that match the filters.
   */
  filter?: Partial<
    Record<
      keyof Resource & string,
      FilterItem<Resource, keyof Resource & string>[]
    >
  >;
}

export type ListQueryType<Resource extends object> = FilterOptions<Resource> &
  PaginationOptions &
  SortingOptions;
