/* eslint-disable @typescript-eslint/no-invalid-void-type, @typescript-eslint/consistent-indexed-object-style, @typescript-eslint/consistent-type-definitions, @typescript-eslint/array-type, unicorn/prefer-export-from */
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import type { AuthSource } from "@ukdanceblue/common";
import type { AccessLevel } from "@ukdanceblue/common";
import type { DbRole } from "@ukdanceblue/common";
import type { CommitteeRole } from "@ukdanceblue/common";
import type { CommitteeIdentifier } from "@ukdanceblue/common";
import type { MembershipPositionType } from "@ukdanceblue/common";
import type { TeamLegacyStatus } from "@ukdanceblue/common";
import type { TeamType } from "@ukdanceblue/common";
import type { SortDirection } from "@ukdanceblue/common";
import type { NumericComparator } from "@ukdanceblue/common";
import type { StringComparator } from "@ukdanceblue/common";
import type { BatchType } from "@ukdanceblue/common";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: Date | string; output: Date | string };
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: string; output: string };
  /** GlobalId custom scalar type */
  GlobalId: { input: string; output: string };
  /** A local date string (i.e., with no associated timezone) in `YYYY-MM-DD` format, e.g. `2020-01-01`. */
  LocalDate: { input: string; output: string };
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: { input: number; output: number };
  /** Integers that will have a value greater than 0. */
  PositiveInt: { input: number; output: number };
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: URL | string; output: URL | string };
  /** Represents NULL values */
  Void: { input: void; output: void };
};

export { AccessLevel };

export type AssignEntryToPersonInput = {
  amount: Scalars["Float"]["input"];
};

export { AuthSource };

export { BatchType };

export type BulkPersonInput = {
  committee?: InputMaybe<CommitteeIdentifier>;
  email: Scalars["EmailAddress"]["input"];
  linkblue: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  role?: InputMaybe<CommitteeRole>;
};

export type BulkTeamInput = {
  captainLinkblues?: InputMaybe<Array<Scalars["String"]["input"]>>;
  legacyStatus: TeamLegacyStatus;
  memberLinkblues?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name: Scalars["String"]["input"];
  type: TeamType;
};

export { CommitteeIdentifier };

export { CommitteeRole };

export type CreateConfigurationInput = {
  key: Scalars["String"]["input"];
  validAfter?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  validUntil?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  value: Scalars["String"]["input"];
};

export type CreateEventInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  occurrences: Array<CreateEventOccurrenceInput>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type CreateEventOccurrenceInput = {
  fullDay: Scalars["Boolean"]["input"];
  interval: IntervalIsoInput;
};

export type CreateFeedInput = {
  imageUuid?: InputMaybe<Scalars["String"]["input"]>;
  textContent?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type CreateImageInput = {
  alt?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["URL"]["input"]>;
};

export type CreateMarathonHourInput = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  durationInfo: Scalars["String"]["input"];
  shownStartingAt: Scalars["DateTimeISO"]["input"];
  title: Scalars["String"]["input"];
};

export type CreateMarathonInput = {
  endDate?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  startDate?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  year: Scalars["String"]["input"];
};

export type CreatePersonInput = {
  captainOf?: Array<MemberOf>;
  /** @deprecated DBRole can no longer be set directly */
  dbRole?: InputMaybe<DbRole>;
  email: Scalars["EmailAddress"]["input"];
  linkblue?: InputMaybe<Scalars["String"]["input"]>;
  memberOf?: Array<MemberOf>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreatePointEntryInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  opportunityUuid?: InputMaybe<Scalars["GlobalId"]["input"]>;
  personFromUuid?: InputMaybe<Scalars["GlobalId"]["input"]>;
  points: Scalars["Int"]["input"];
  teamUuid: Scalars["GlobalId"]["input"];
};

export type CreatePointOpportunityInput = {
  eventUuid?: InputMaybe<Scalars["GlobalId"]["input"]>;
  marathonUuid: Scalars["GlobalId"]["input"];
  name: Scalars["String"]["input"];
  opportunityDate?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  type: TeamType;
};

export type CreateTeamInput = {
  legacyStatus: TeamLegacyStatus;
  name: Scalars["String"]["input"];
  type: TeamType;
};

export type DailyDepartmentNotificationInput = {
  accountName: Scalars["String"]["input"];
  accountNumber: Scalars["String"]["input"];
  batchId: Scalars["String"]["input"];
  behalfHonorMemorial?: InputMaybe<Scalars["String"]["input"]>;
  combinedAmount: Scalars["Float"]["input"];
  combinedDonorName: Scalars["String"]["input"];
  combinedDonorSalutation: Scalars["String"]["input"];
  combinedDonorSort?: InputMaybe<Scalars["String"]["input"]>;
  comment?: InputMaybe<Scalars["String"]["input"]>;
  department?: InputMaybe<Scalars["String"]["input"]>;
  divFirstGift: Scalars["Boolean"]["input"];
  division?: InputMaybe<Scalars["String"]["input"]>;
  donor1Amount?: InputMaybe<Scalars["Float"]["input"]>;
  donor2Amount?: InputMaybe<Scalars["Float"]["input"]>;
  effectiveDate?: InputMaybe<Scalars["LocalDate"]["input"]>;
  endDate?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  gikDescription?: InputMaybe<Scalars["String"]["input"]>;
  gikType?: InputMaybe<Scalars["String"]["input"]>;
  holdingDestination?: InputMaybe<Scalars["String"]["input"]>;
  idSorter: Scalars["String"]["input"];
  matchingGift?: InputMaybe<Scalars["String"]["input"]>;
  onlineGift: Scalars["Boolean"]["input"];
  pledgedAmount: Scalars["Float"]["input"];
  pledgedDate?: InputMaybe<Scalars["LocalDate"]["input"]>;
  processDate?: InputMaybe<Scalars["LocalDate"]["input"]>;
  secShares?: InputMaybe<Scalars["String"]["input"]>;
  secType?: InputMaybe<Scalars["String"]["input"]>;
  solicitation?: InputMaybe<Scalars["String"]["input"]>;
  solicitationCode?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  transactionDate?: InputMaybe<Scalars["LocalDate"]["input"]>;
  transactionType: Scalars["String"]["input"];
  ukFirstGift: Scalars["Boolean"]["input"];
};

export { DbRole };

export const DeviceResolverAllKeys = {
  CreatedAt: "createdAt",
  ExpoPushToken: "expoPushToken",
  LastSeen: "lastSeen",
  UpdatedAt: "updatedAt",
} as const;

export type DeviceResolverAllKeys =
  (typeof DeviceResolverAllKeys)[keyof typeof DeviceResolverAllKeys];
export const DeviceResolverDateFilterKeys = {
  CreatedAt: "createdAt",
  LastSeen: "lastSeen",
  UpdatedAt: "updatedAt",
} as const;

export type DeviceResolverDateFilterKeys =
  (typeof DeviceResolverDateFilterKeys)[keyof typeof DeviceResolverDateFilterKeys];
export type DeviceResolverKeyedDateFilterItem = {
  /** The comparator to use for the filter */
  comparison: NumericComparator;
  /** The field to filter on */
  field: DeviceResolverDateFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["DateTimeISO"]["input"];
};

export type DeviceResolverKeyedIsNullFilterItem = {
  /** The field to filter on */
  field: DeviceResolverAllKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DeviceResolverKeyedOneOfFilterItem = {
  /** The field to filter on */
  field: Scalars["Void"]["input"];
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Array<Scalars["String"]["input"]>;
};

export type DeviceResolverKeyedStringFilterItem = {
  /** The comparator to use for the filter */
  comparison: StringComparator;
  /** The field to filter on */
  field: DeviceResolverStringFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["String"]["input"];
};

export const DeviceResolverStringFilterKeys = {
  ExpoPushToken: "expoPushToken",
} as const;

export type DeviceResolverStringFilterKeys =
  (typeof DeviceResolverStringFilterKeys)[keyof typeof DeviceResolverStringFilterKeys];
export const EventResolverAllKeys = {
  CreatedAt: "createdAt",
  Description: "description",
  Location: "location",
  Occurrence: "occurrence",
  OccurrenceEnd: "occurrenceEnd",
  OccurrenceStart: "occurrenceStart",
  Summary: "summary",
  Title: "title",
  UpdatedAt: "updatedAt",
} as const;

export type EventResolverAllKeys =
  (typeof EventResolverAllKeys)[keyof typeof EventResolverAllKeys];
export const EventResolverDateFilterKeys = {
  CreatedAt: "createdAt",
  Occurrence: "occurrence",
  OccurrenceEnd: "occurrenceEnd",
  OccurrenceStart: "occurrenceStart",
  UpdatedAt: "updatedAt",
} as const;

export type EventResolverDateFilterKeys =
  (typeof EventResolverDateFilterKeys)[keyof typeof EventResolverDateFilterKeys];
export type EventResolverKeyedDateFilterItem = {
  /** The comparator to use for the filter */
  comparison: NumericComparator;
  /** The field to filter on */
  field: EventResolverDateFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["DateTimeISO"]["input"];
};

export type EventResolverKeyedIsNullFilterItem = {
  /** The field to filter on */
  field: EventResolverAllKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type EventResolverKeyedOneOfFilterItem = {
  /** The field to filter on */
  field: Scalars["Void"]["input"];
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Array<Scalars["String"]["input"]>;
};

export type EventResolverKeyedStringFilterItem = {
  /** The comparator to use for the filter */
  comparison: StringComparator;
  /** The field to filter on */
  field: EventResolverStringFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["String"]["input"];
};

export const EventResolverStringFilterKeys = {
  Description: "description",
  Location: "location",
  Summary: "summary",
  Title: "title",
} as const;

export type EventResolverStringFilterKeys =
  (typeof EventResolverStringFilterKeys)[keyof typeof EventResolverStringFilterKeys];
export const FundraisingEntryResolverAllKeys = {
  Amount: "amount",
  AmountUnassigned: "amountUnassigned",
  CreatedAt: "createdAt",
  DonatedBy: "donatedBy",
  DonatedOn: "donatedOn",
  DonatedTo: "donatedTo",
  TeamId: "teamId",
  UpdatedAt: "updatedAt",
} as const;

export type FundraisingEntryResolverAllKeys =
  (typeof FundraisingEntryResolverAllKeys)[keyof typeof FundraisingEntryResolverAllKeys];
export const FundraisingEntryResolverDateFilterKeys = {
  CreatedAt: "createdAt",
  DonatedOn: "donatedOn",
  UpdatedAt: "updatedAt",
} as const;

export type FundraisingEntryResolverDateFilterKeys =
  (typeof FundraisingEntryResolverDateFilterKeys)[keyof typeof FundraisingEntryResolverDateFilterKeys];
export type FundraisingEntryResolverKeyedDateFilterItem = {
  /** The comparator to use for the filter */
  comparison: NumericComparator;
  /** The field to filter on */
  field: FundraisingEntryResolverDateFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["DateTimeISO"]["input"];
};

export type FundraisingEntryResolverKeyedIsNullFilterItem = {
  /** The field to filter on */
  field: FundraisingEntryResolverAllKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FundraisingEntryResolverKeyedNumericFilterItem = {
  /** The comparator to use for the filter */
  comparison: NumericComparator;
  /** The field to filter on */
  field: FundraisingEntryResolverNumericFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["Float"]["input"];
};

export type FundraisingEntryResolverKeyedOneOfFilterItem = {
  /** The field to filter on */
  field: FundraisingEntryResolverOneOfFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Array<Scalars["String"]["input"]>;
};

export type FundraisingEntryResolverKeyedStringFilterItem = {
  /** The comparator to use for the filter */
  comparison: StringComparator;
  /** The field to filter on */
  field: FundraisingEntryResolverStringFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["String"]["input"];
};

export const FundraisingEntryResolverNumericFilterKeys = {
  Amount: "amount",
  AmountUnassigned: "amountUnassigned",
} as const;

export type FundraisingEntryResolverNumericFilterKeys =
  (typeof FundraisingEntryResolverNumericFilterKeys)[keyof typeof FundraisingEntryResolverNumericFilterKeys];
export const FundraisingEntryResolverOneOfFilterKeys = {
  TeamId: "teamId",
} as const;

export type FundraisingEntryResolverOneOfFilterKeys =
  (typeof FundraisingEntryResolverOneOfFilterKeys)[keyof typeof FundraisingEntryResolverOneOfFilterKeys];
export const FundraisingEntryResolverStringFilterKeys = {
  DonatedBy: "donatedBy",
  DonatedTo: "donatedTo",
} as const;

export type FundraisingEntryResolverStringFilterKeys =
  (typeof FundraisingEntryResolverStringFilterKeys)[keyof typeof FundraisingEntryResolverStringFilterKeys];
export const ImageResolverAllKeys = {
  Alt: "alt",
  CreatedAt: "createdAt",
  Height: "height",
  UpdatedAt: "updatedAt",
  Width: "width",
} as const;

export type ImageResolverAllKeys =
  (typeof ImageResolverAllKeys)[keyof typeof ImageResolverAllKeys];
export const ImageResolverDateFilterKeys = {
  CreatedAt: "createdAt",
  UpdatedAt: "updatedAt",
} as const;

export type ImageResolverDateFilterKeys =
  (typeof ImageResolverDateFilterKeys)[keyof typeof ImageResolverDateFilterKeys];
export type ImageResolverKeyedDateFilterItem = {
  /** The comparator to use for the filter */
  comparison: NumericComparator;
  /** The field to filter on */
  field: ImageResolverDateFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["DateTimeISO"]["input"];
};

export type ImageResolverKeyedIsNullFilterItem = {
  /** The field to filter on */
  field: ImageResolverAllKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImageResolverKeyedNumericFilterItem = {
  /** The comparator to use for the filter */
  comparison: NumericComparator;
  /** The field to filter on */
  field: ImageResolverNumericFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["Float"]["input"];
};

export type ImageResolverKeyedOneOfFilterItem = {
  /** The field to filter on */
  field: Scalars["Void"]["input"];
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Array<Scalars["String"]["input"]>;
};

export type ImageResolverKeyedStringFilterItem = {
  /** The comparator to use for the filter */
  comparison: StringComparator;
  /** The field to filter on */
  field: ImageResolverStringFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["String"]["input"];
};

export const ImageResolverNumericFilterKeys = {
  Height: "height",
  Width: "width",
} as const;

export type ImageResolverNumericFilterKeys =
  (typeof ImageResolverNumericFilterKeys)[keyof typeof ImageResolverNumericFilterKeys];
export const ImageResolverStringFilterKeys = {
  Alt: "alt",
} as const;

export type ImageResolverStringFilterKeys =
  (typeof ImageResolverStringFilterKeys)[keyof typeof ImageResolverStringFilterKeys];
export type IntervalIsoInput = {
  end: Scalars["DateTimeISO"]["input"];
  start: Scalars["DateTimeISO"]["input"];
};

export const MarathonHourResolverAllKeys = {
  CreatedAt: "createdAt",
  Details: "details",
  DurationInfo: "durationInfo",
  MarathonYear: "marathonYear",
  ShownStartingAt: "shownStartingAt",
  Title: "title",
  UpdatedAt: "updatedAt",
} as const;

export type MarathonHourResolverAllKeys =
  (typeof MarathonHourResolverAllKeys)[keyof typeof MarathonHourResolverAllKeys];
export const MarathonHourResolverDateFilterKeys = {
  CreatedAt: "createdAt",
  ShownStartingAt: "shownStartingAt",
  UpdatedAt: "updatedAt",
} as const;

export type MarathonHourResolverDateFilterKeys =
  (typeof MarathonHourResolverDateFilterKeys)[keyof typeof MarathonHourResolverDateFilterKeys];
export type MarathonHourResolverKeyedDateFilterItem = {
  /** The comparator to use for the filter */
  comparison: NumericComparator;
  /** The field to filter on */
  field: MarathonHourResolverDateFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["DateTimeISO"]["input"];
};

export type MarathonHourResolverKeyedIsNullFilterItem = {
  /** The field to filter on */
  field: MarathonHourResolverAllKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MarathonHourResolverKeyedOneOfFilterItem = {
  /** The field to filter on */
  field: MarathonHourResolverOneOfFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Array<Scalars["String"]["input"]>;
};

export type MarathonHourResolverKeyedStringFilterItem = {
  /** The comparator to use for the filter */
  comparison: StringComparator;
  /** The field to filter on */
  field: MarathonHourResolverStringFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["String"]["input"];
};

export const MarathonHourResolverOneOfFilterKeys = {
  MarathonYear: "marathonYear",
} as const;

export type MarathonHourResolverOneOfFilterKeys =
  (typeof MarathonHourResolverOneOfFilterKeys)[keyof typeof MarathonHourResolverOneOfFilterKeys];
export const MarathonHourResolverStringFilterKeys = {
  Details: "details",
  DurationInfo: "durationInfo",
  Title: "title",
} as const;

export type MarathonHourResolverStringFilterKeys =
  (typeof MarathonHourResolverStringFilterKeys)[keyof typeof MarathonHourResolverStringFilterKeys];
export const MarathonResolverAllKeys = {
  CreatedAt: "createdAt",
  EndDate: "endDate",
  StartDate: "startDate",
  UpdatedAt: "updatedAt",
  Year: "year",
} as const;

export type MarathonResolverAllKeys =
  (typeof MarathonResolverAllKeys)[keyof typeof MarathonResolverAllKeys];
export const MarathonResolverDateFilterKeys = {
  CreatedAt: "createdAt",
  EndDate: "endDate",
  StartDate: "startDate",
  UpdatedAt: "updatedAt",
} as const;

export type MarathonResolverDateFilterKeys =
  (typeof MarathonResolverDateFilterKeys)[keyof typeof MarathonResolverDateFilterKeys];
export type MarathonResolverKeyedDateFilterItem = {
  /** The comparator to use for the filter */
  comparison: NumericComparator;
  /** The field to filter on */
  field: MarathonResolverDateFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["DateTimeISO"]["input"];
};

export type MarathonResolverKeyedIsNullFilterItem = {
  /** The field to filter on */
  field: MarathonResolverAllKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MemberOf = {
  committeeRole?: InputMaybe<CommitteeRole>;
  id: Scalars["GlobalId"]["input"];
};

export { MembershipPositionType };

export type NotificationAudienceInput = {
  all?: InputMaybe<Scalars["Boolean"]["input"]>;
  memberOfTeamType?: InputMaybe<TeamType>;
  memberOfTeams?: InputMaybe<Array<Scalars["GlobalId"]["input"]>>;
  users?: InputMaybe<Array<Scalars["GlobalId"]["input"]>>;
};

export const NotificationDeliveryResolverAllKeys = {
  CreatedAt: "createdAt",
  DeliveryError: "deliveryError",
  ReceiptCheckedAt: "receiptCheckedAt",
  SentAt: "sentAt",
  UpdatedAt: "updatedAt",
} as const;

export type NotificationDeliveryResolverAllKeys =
  (typeof NotificationDeliveryResolverAllKeys)[keyof typeof NotificationDeliveryResolverAllKeys];
export const NotificationDeliveryResolverDateFilterKeys = {
  CreatedAt: "createdAt",
  ReceiptCheckedAt: "receiptCheckedAt",
  SentAt: "sentAt",
  UpdatedAt: "updatedAt",
} as const;

export type NotificationDeliveryResolverDateFilterKeys =
  (typeof NotificationDeliveryResolverDateFilterKeys)[keyof typeof NotificationDeliveryResolverDateFilterKeys];
export type NotificationDeliveryResolverKeyedDateFilterItem = {
  /** The comparator to use for the filter */
  comparison: NumericComparator;
  /** The field to filter on */
  field: NotificationDeliveryResolverDateFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["DateTimeISO"]["input"];
};

export type NotificationDeliveryResolverKeyedIsNullFilterItem = {
  /** The field to filter on */
  field: NotificationDeliveryResolverAllKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export const NotificationResolverAllKeys = {
  Body: "body",
  CreatedAt: "createdAt",
  DeliveryIssue: "deliveryIssue",
  SendAt: "sendAt",
  StartedSendingAt: "startedSendingAt",
  Title: "title",
  UpdatedAt: "updatedAt",
} as const;

export type NotificationResolverAllKeys =
  (typeof NotificationResolverAllKeys)[keyof typeof NotificationResolverAllKeys];
export const NotificationResolverDateFilterKeys = {
  CreatedAt: "createdAt",
  SendAt: "sendAt",
  StartedSendingAt: "startedSendingAt",
  UpdatedAt: "updatedAt",
} as const;

export type NotificationResolverDateFilterKeys =
  (typeof NotificationResolverDateFilterKeys)[keyof typeof NotificationResolverDateFilterKeys];
export type NotificationResolverKeyedDateFilterItem = {
  /** The comparator to use for the filter */
  comparison: NumericComparator;
  /** The field to filter on */
  field: NotificationResolverDateFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["DateTimeISO"]["input"];
};

export type NotificationResolverKeyedIsNullFilterItem = {
  /** The field to filter on */
  field: NotificationResolverAllKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type NotificationResolverKeyedOneOfFilterItem = {
  /** The field to filter on */
  field: NotificationResolverOneOfFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Array<Scalars["String"]["input"]>;
};

export type NotificationResolverKeyedStringFilterItem = {
  /** The comparator to use for the filter */
  comparison: StringComparator;
  /** The field to filter on */
  field: NotificationResolverStringFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["String"]["input"];
};

export const NotificationResolverOneOfFilterKeys = {
  DeliveryIssue: "deliveryIssue",
} as const;

export type NotificationResolverOneOfFilterKeys =
  (typeof NotificationResolverOneOfFilterKeys)[keyof typeof NotificationResolverOneOfFilterKeys];
export const NotificationResolverStringFilterKeys = {
  Body: "body",
  Title: "title",
} as const;

export type NotificationResolverStringFilterKeys =
  (typeof NotificationResolverStringFilterKeys)[keyof typeof NotificationResolverStringFilterKeys];
export { NumericComparator };

export const PersonResolverAllKeys = {
  CommitteeName: "committeeName",
  CommitteeRole: "committeeRole",
  DbRole: "dbRole",
  Email: "email",
  Linkblue: "linkblue",
  Name: "name",
} as const;

export type PersonResolverAllKeys =
  (typeof PersonResolverAllKeys)[keyof typeof PersonResolverAllKeys];
export type PersonResolverKeyedIsNullFilterItem = {
  /** The field to filter on */
  field: PersonResolverAllKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonResolverKeyedOneOfFilterItem = {
  /** The field to filter on */
  field: PersonResolverOneOfFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Array<Scalars["String"]["input"]>;
};

export type PersonResolverKeyedStringFilterItem = {
  /** The comparator to use for the filter */
  comparison: StringComparator;
  /** The field to filter on */
  field: PersonResolverStringFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["String"]["input"];
};

export const PersonResolverOneOfFilterKeys = {
  CommitteeName: "committeeName",
  CommitteeRole: "committeeRole",
  DbRole: "dbRole",
} as const;

export type PersonResolverOneOfFilterKeys =
  (typeof PersonResolverOneOfFilterKeys)[keyof typeof PersonResolverOneOfFilterKeys];
export const PersonResolverStringFilterKeys = {
  Email: "email",
  Linkblue: "linkblue",
  Name: "name",
} as const;

export type PersonResolverStringFilterKeys =
  (typeof PersonResolverStringFilterKeys)[keyof typeof PersonResolverStringFilterKeys];
export const PointEntryResolverAllKeys = {
  CreatedAt: "createdAt",
  UpdatedAt: "updatedAt",
} as const;

export type PointEntryResolverAllKeys =
  (typeof PointEntryResolverAllKeys)[keyof typeof PointEntryResolverAllKeys];
export const PointEntryResolverDateFilterKeys = {
  CreatedAt: "createdAt",
  UpdatedAt: "updatedAt",
} as const;

export type PointEntryResolverDateFilterKeys =
  (typeof PointEntryResolverDateFilterKeys)[keyof typeof PointEntryResolverDateFilterKeys];
export type PointEntryResolverKeyedDateFilterItem = {
  /** The comparator to use for the filter */
  comparison: NumericComparator;
  /** The field to filter on */
  field: PointEntryResolverDateFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["DateTimeISO"]["input"];
};

export type PointEntryResolverKeyedIsNullFilterItem = {
  /** The field to filter on */
  field: PointEntryResolverAllKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export const PointOpportunityResolverAllKeys = {
  CreatedAt: "createdAt",
  MarathonUuid: "marathonUuid",
  Name: "name",
  OpportunityDate: "opportunityDate",
  Type: "type",
  UpdatedAt: "updatedAt",
} as const;

export type PointOpportunityResolverAllKeys =
  (typeof PointOpportunityResolverAllKeys)[keyof typeof PointOpportunityResolverAllKeys];
export const PointOpportunityResolverDateFilterKeys = {
  CreatedAt: "createdAt",
  OpportunityDate: "opportunityDate",
  UpdatedAt: "updatedAt",
} as const;

export type PointOpportunityResolverDateFilterKeys =
  (typeof PointOpportunityResolverDateFilterKeys)[keyof typeof PointOpportunityResolverDateFilterKeys];
export type PointOpportunityResolverKeyedDateFilterItem = {
  /** The comparator to use for the filter */
  comparison: NumericComparator;
  /** The field to filter on */
  field: PointOpportunityResolverDateFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["DateTimeISO"]["input"];
};

export type PointOpportunityResolverKeyedIsNullFilterItem = {
  /** The field to filter on */
  field: PointOpportunityResolverAllKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PointOpportunityResolverKeyedOneOfFilterItem = {
  /** The field to filter on */
  field: PointOpportunityResolverOneOfFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Array<Scalars["String"]["input"]>;
};

export type PointOpportunityResolverKeyedStringFilterItem = {
  /** The comparator to use for the filter */
  comparison: StringComparator;
  /** The field to filter on */
  field: PointOpportunityResolverStringFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["String"]["input"];
};

export const PointOpportunityResolverOneOfFilterKeys = {
  MarathonUuid: "marathonUuid",
  Type: "type",
} as const;

export type PointOpportunityResolverOneOfFilterKeys =
  (typeof PointOpportunityResolverOneOfFilterKeys)[keyof typeof PointOpportunityResolverOneOfFilterKeys];
export const PointOpportunityResolverStringFilterKeys = {
  Name: "name",
} as const;

export type PointOpportunityResolverStringFilterKeys =
  (typeof PointOpportunityResolverStringFilterKeys)[keyof typeof PointOpportunityResolverStringFilterKeys];
export type RegisterDeviceInput = {
  /** For legacy reasons, this can be a GlobalId or a raw UUID */
  deviceId: Scalars["String"]["input"];
  /** The Expo push token of the device */
  expoPushToken?: InputMaybe<Scalars["String"]["input"]>;
  /** The ID of the last user to log in on this device */
  lastUserId?: InputMaybe<Scalars["GlobalId"]["input"]>;
  /** base64 encoded SHA-256 hash of a secret known to the device */
  verifier: Scalars["String"]["input"];
};

export type SetEventInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  occurrences: Array<SetEventOccurrenceInput>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type SetEventOccurrenceInput = {
  fullDay: Scalars["Boolean"]["input"];
  interval: IntervalIsoInput;
  /** If updating an existing occurrence, the UUID of the occurrence to update */
  uuid?: InputMaybe<Scalars["GlobalId"]["input"]>;
};

export type SetFeedInput = {
  textContent?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type SetMarathonHourInput = {
  details?: InputMaybe<Scalars["String"]["input"]>;
  durationInfo: Scalars["String"]["input"];
  shownStartingAt: Scalars["DateTimeISO"]["input"];
  title: Scalars["String"]["input"];
};

export type SetMarathonInput = {
  endDate?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  startDate?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  year: Scalars["String"]["input"];
};

export type SetPersonInput = {
  captainOf?: InputMaybe<Array<MemberOf>>;
  email?: InputMaybe<Scalars["EmailAddress"]["input"]>;
  linkblue?: InputMaybe<Scalars["String"]["input"]>;
  memberOf?: InputMaybe<Array<MemberOf>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type SetPointOpportunityInput = {
  eventUuid?: InputMaybe<Scalars["GlobalId"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  opportunityDate?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  type?: InputMaybe<TeamType>;
};

export type SetTeamInput = {
  legacyStatus?: InputMaybe<TeamLegacyStatus>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  persistentIdentifier?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<TeamType>;
};

export { SortDirection };

export { StringComparator };

export { TeamLegacyStatus };

export const TeamResolverAllKeys = {
  LegacyStatus: "legacyStatus",
  MarathonId: "marathonId",
  Name: "name",
  Type: "type",
} as const;

export type TeamResolverAllKeys =
  (typeof TeamResolverAllKeys)[keyof typeof TeamResolverAllKeys];
export type TeamResolverKeyedIsNullFilterItem = {
  /** The field to filter on */
  field: TeamResolverAllKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TeamResolverKeyedOneOfFilterItem = {
  /** The field to filter on */
  field: TeamResolverOneOfFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Array<Scalars["String"]["input"]>;
};

export type TeamResolverKeyedStringFilterItem = {
  /** The comparator to use for the filter */
  comparison: StringComparator;
  /** The field to filter on */
  field: TeamResolverStringFilterKeys;
  /** Should the comparator be negated? WARNING: This will throw if used on a comparator that does not support negation. */
  negate?: InputMaybe<Scalars["Boolean"]["input"]>;
  value: Scalars["String"]["input"];
};

export const TeamResolverOneOfFilterKeys = {
  LegacyStatus: "legacyStatus",
  MarathonId: "marathonId",
  Type: "type",
} as const;

export type TeamResolverOneOfFilterKeys =
  (typeof TeamResolverOneOfFilterKeys)[keyof typeof TeamResolverOneOfFilterKeys];
export const TeamResolverStringFilterKeys = {
  Name: "name",
} as const;

export type TeamResolverStringFilterKeys =
  (typeof TeamResolverStringFilterKeys)[keyof typeof TeamResolverStringFilterKeys];
export { TeamType };

export type UpdateFundraisingAssignmentInput = {
  amount: Scalars["Float"]["input"];
};

export type ImageViewFragmentFragment = {
  __typename?: "ImageNode";
  id: string;
  url?: URL | string | null;
  thumbHash?: string | null;
  alt?: string | null;
  width: number;
  height: number;
  mimeType: string;
} & { " $fragmentName"?: "ImageViewFragmentFragment" };

export type SimpleConfigFragment = {
  __typename?: "ConfigurationNode";
  id: string;
  key: string;
  value: string;
} & { " $fragmentName"?: "SimpleConfigFragment" };

export type FullConfigFragment = ({
  __typename?: "ConfigurationNode";
  validAfter?: Date | string | null;
  validUntil?: Date | string | null;
  createdAt?: Date | string | null;
} & { " $fragmentRefs"?: { SimpleConfigFragment: SimpleConfigFragment } }) & {
  " $fragmentName"?: "FullConfigFragment";
};

export type NotificationFragmentFragment = {
  __typename?: "NotificationNode";
  id: string;
  title: string;
  body: string;
  url?: URL | string | null;
} & { " $fragmentName"?: "NotificationFragmentFragment" };

export type NotificationDeliveryFragmentFragment = {
  __typename?: "NotificationDeliveryNode";
  id: string;
  sentAt?: Date | string | null;
  notification: { __typename?: "NotificationNode" } & {
    " $fragmentRefs"?: {
      NotificationFragmentFragment: NotificationFragmentFragment;
    };
  };
} & { " $fragmentName"?: "NotificationDeliveryFragmentFragment" };

export type UseAllowedLoginTypesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type UseAllowedLoginTypesQuery = {
  __typename?: "Query";
  activeConfiguration: {
    __typename?: "GetConfigurationByUuidResponse";
    data: { __typename?: "ConfigurationNode" } & {
      " $fragmentRefs"?: { SimpleConfigFragment: SimpleConfigFragment };
    };
  };
};

export type MarathonTimeQueryVariables = Exact<{ [key: string]: never }>;

export type MarathonTimeQuery = {
  __typename?: "Query";
  latestMarathon?: {
    __typename?: "MarathonNode";
    startDate?: Date | string | null;
    endDate?: Date | string | null;
  } | null;
};

export type UseTabBarConfigQueryVariables = Exact<{ [key: string]: never }>;

export type UseTabBarConfigQuery = {
  __typename?: "Query";
  activeConfiguration: {
    __typename?: "GetConfigurationByUuidResponse";
    data: { __typename?: "ConfigurationNode" } & {
      " $fragmentRefs"?: { SimpleConfigFragment: SimpleConfigFragment };
    };
  };
  me?: { __typename?: "PersonNode"; linkblue?: string | null } | null;
};

export type TriviaCrackQueryVariables = Exact<{ [key: string]: never }>;

export type TriviaCrackQuery = {
  __typename?: "Query";
  activeConfiguration: {
    __typename?: "GetConfigurationByUuidResponse";
    data: { __typename?: "ConfigurationNode" } & {
      " $fragmentRefs"?: { SimpleConfigFragment: SimpleConfigFragment };
    };
  };
  me?: {
    __typename?: "PersonNode";
    teams: Array<{
      __typename?: "MembershipNode";
      team: { __typename?: "TeamNode"; type: TeamType; name: string };
    }>;
  } | null;
};

export type AuthStateQueryVariables = Exact<{ [key: string]: never }>;

export type AuthStateQuery = {
  __typename?: "Query";
  me?: { __typename?: "PersonNode"; id: string; email: string } | null;
  loginState: {
    __typename?: "LoginState";
    dbRole: DbRole;
    loggedIn: boolean;
    authSource: AuthSource;
  };
};

export type SetDeviceMutationVariables = Exact<{
  input: RegisterDeviceInput;
}>;

export type SetDeviceMutation = {
  __typename?: "Mutation";
  registerDevice: { __typename?: "RegisterDeviceResponse"; ok: boolean };
};

export type EventScreenFragmentFragment = {
  __typename?: "EventNode";
  id: string;
  title: string;
  summary?: string | null;
  description?: string | null;
  location?: string | null;
  occurrences: Array<{
    __typename?: "EventOccurrenceNode";
    id: string;
    fullDay: boolean;
    interval: {
      __typename?: "IntervalISO";
      start: Date | string;
      end: Date | string;
    };
  }>;
  images: Array<{
    __typename?: "ImageNode";
    thumbHash?: string | null;
    url?: URL | string | null;
    height: number;
    width: number;
    alt?: string | null;
    mimeType: string;
  }>;
} & { " $fragmentName"?: "EventScreenFragmentFragment" };

export type DeviceNotificationsQueryVariables = Exact<{
  deviceUuid: Scalars["String"]["input"];
  page?: InputMaybe<Scalars["Int"]["input"]>;
  pageSize?: InputMaybe<Scalars["Int"]["input"]>;
  verifier: Scalars["String"]["input"];
}>;

export type DeviceNotificationsQuery = {
  __typename?: "Query";
  device: {
    __typename?: "GetDeviceByUuidResponse";
    data: {
      __typename?: "DeviceNode";
      notificationDeliveries: Array<
        { __typename?: "NotificationDeliveryNode" } & {
          " $fragmentRefs"?: {
            NotificationDeliveryFragmentFragment: NotificationDeliveryFragmentFragment;
          };
        }
      >;
    };
  };
};

export type ProfileScreenAuthFragmentFragment = {
  __typename?: "LoginState";
  dbRole: DbRole;
  authSource: AuthSource;
} & { " $fragmentName"?: "ProfileScreenAuthFragmentFragment" };

export type ProfileScreenUserFragmentFragment = {
  __typename?: "PersonNode";
  name?: string | null;
  linkblue?: string | null;
  teams: Array<{
    __typename?: "MembershipNode";
    position: MembershipPositionType;
    team: { __typename?: "TeamNode"; name: string };
  }>;
  primaryCommittee?: {
    __typename?: "CommitteeMembershipNode";
    identifier: CommitteeIdentifier;
    role: CommitteeRole;
  } | null;
} & { " $fragmentName"?: "ProfileScreenUserFragmentFragment" };

export type RootScreenDocumentQueryVariables = Exact<{ [key: string]: never }>;

export type RootScreenDocumentQuery = {
  __typename?: "Query";
  loginState: { __typename?: "LoginState" } & {
    " $fragmentRefs"?: {
      ProfileScreenAuthFragmentFragment: ProfileScreenAuthFragmentFragment;
      RootScreenAuthFragmentFragment: RootScreenAuthFragmentFragment;
    };
  };
  me?:
    | ({ __typename?: "PersonNode" } & {
        " $fragmentRefs"?: {
          ProfileScreenUserFragmentFragment: ProfileScreenUserFragmentFragment;
        };
      })
    | null;
};

export type RootScreenAuthFragmentFragment = {
  __typename?: "LoginState";
  dbRole: DbRole;
} & { " $fragmentName"?: "RootScreenAuthFragmentFragment" };

export type EventsQueryVariables = Exact<{
  earliestTimestamp: Scalars["DateTimeISO"]["input"];
  lastTimestamp: Scalars["DateTimeISO"]["input"];
}>;

export type EventsQuery = {
  __typename?: "Query";
  events: {
    __typename?: "ListEventsResponse";
    data: Array<
      { __typename?: "EventNode" } & {
        " $fragmentRefs"?: {
          EventScreenFragmentFragment: EventScreenFragmentFragment;
        };
      }
    >;
  };
};

export type ServerFeedQueryVariables = Exact<{ [key: string]: never }>;

export type ServerFeedQuery = {
  __typename?: "Query";
  feed: Array<{
    __typename?: "FeedNode";
    id: string;
    title: string;
    createdAt?: Date | string | null;
    textContent?: string | null;
    image?: {
      __typename?: "ImageNode";
      url?: URL | string | null;
      alt?: string | null;
      width: number;
      height: number;
      thumbHash?: string | null;
    } | null;
  }>;
};

export type HourScreenFragmentFragment = {
  __typename?: "MarathonHourNode";
  id: string;
  title: string;
  details?: string | null;
  durationInfo: string;
  mapImages: Array<
    { __typename?: "ImageNode" } & {
      " $fragmentRefs"?: {
        ImageViewFragmentFragment: ImageViewFragmentFragment;
      };
    }
  >;
} & { " $fragmentName"?: "HourScreenFragmentFragment" };

export type MarathonScreenQueryVariables = Exact<{ [key: string]: never }>;

export type MarathonScreenQuery = {
  __typename?: "Query";
  currentMarathonHour?:
    | ({ __typename?: "MarathonHourNode" } & {
        " $fragmentRefs"?: {
          HourScreenFragmentFragment: HourScreenFragmentFragment;
        };
      })
    | null;
  latestMarathon?: {
    __typename?: "MarathonNode";
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    hours: Array<
      { __typename?: "MarathonHourNode" } & {
        " $fragmentRefs"?: {
          HourScreenFragmentFragment: HourScreenFragmentFragment;
        };
      }
    >;
  } | null;
};

export type ScoreBoardFragmentFragment = {
  __typename?: "TeamNode";
  id: string;
  name: string;
  totalPoints: number;
  legacyStatus: TeamLegacyStatus;
  type: TeamType;
} & { " $fragmentName"?: "ScoreBoardFragmentFragment" };

export type HighlightedTeamFragmentFragment = {
  __typename?: "TeamNode";
  id: string;
  name: string;
  legacyStatus: TeamLegacyStatus;
  type: TeamType;
} & { " $fragmentName"?: "HighlightedTeamFragmentFragment" };

export type ScoreBoardDocumentQueryVariables = Exact<{
  type: TeamType;
  marathonId: Scalars["GlobalId"]["input"];
}>;

export type ScoreBoardDocumentQuery = {
  __typename?: "Query";
  me?:
    | ({
        __typename?: "PersonNode";
        id: string;
        primaryTeam?: {
          __typename?: "MembershipNode";
          team: { __typename?: "TeamNode" } & {
            " $fragmentRefs"?: {
              HighlightedTeamFragmentFragment: HighlightedTeamFragmentFragment;
              MyTeamFragmentFragment: MyTeamFragmentFragment;
            };
          };
        } | null;
      } & {
        " $fragmentRefs"?: {
          MyFundraisingFragmentFragment: MyFundraisingFragmentFragment;
        };
      })
    | null;
  teams: {
    __typename?: "ListTeamsResponse";
    data: Array<
      { __typename?: "TeamNode" } & {
        " $fragmentRefs"?: {
          ScoreBoardFragmentFragment: ScoreBoardFragmentFragment;
        };
      }
    >;
  };
};

export type ActiveMarathonDocumentQueryVariables = Exact<{
  [key: string]: never;
}>;

export type ActiveMarathonDocumentQuery = {
  __typename?: "Query";
  currentMarathon?: { __typename?: "MarathonNode"; id: string } | null;
  latestMarathon?: { __typename?: "MarathonNode"; id: string } | null;
};

export type MyTeamFragmentFragment = {
  __typename?: "TeamNode";
  id: string;
  name: string;
  totalPoints: number;
  fundraisingTotalAmount?: number | null;
  pointEntries: Array<{
    __typename?: "PointEntryNode";
    points: number;
    personFrom?: {
      __typename?: "PersonNode";
      id: string;
      name?: string | null;
      linkblue?: string | null;
    } | null;
  }>;
  members: Array<{
    __typename?: "MembershipNode";
    position: MembershipPositionType;
    person: {
      __typename?: "PersonNode";
      linkblue?: string | null;
      name?: string | null;
    };
  }>;
} & { " $fragmentName"?: "MyTeamFragmentFragment" };

export type MyFundraisingFragmentFragment = {
  __typename?: "PersonNode";
  fundraisingTotalAmount?: number | null;
  fundraisingAssignments: Array<{
    __typename?: "FundraisingAssignmentNode";
    amount: number;
    entry: {
      __typename?: "FundraisingEntryNode";
      donatedToText?: string | null;
      donatedByText?: string | null;
      donatedOn: Date | string;
    };
  }>;
} & { " $fragmentName"?: "MyFundraisingFragmentFragment" };

export const SimpleConfigFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SimpleConfig" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ConfigurationNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SimpleConfigFragment, unknown>;
export const FullConfigFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FullConfig" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ConfigurationNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "SimpleConfig" },
          },
          { kind: "Field", name: { kind: "Name", value: "validAfter" } },
          { kind: "Field", name: { kind: "Name", value: "validUntil" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SimpleConfig" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ConfigurationNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FullConfigFragment, unknown>;
export const NotificationFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NotificationFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NotificationNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "body" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NotificationFragmentFragment, unknown>;
export const NotificationDeliveryFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NotificationDeliveryFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NotificationDeliveryNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sentAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "notification" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "NotificationFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NotificationFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NotificationNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "body" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NotificationDeliveryFragmentFragment, unknown>;
export const EventScreenFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventScreenFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "EventNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "location" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "occurrences" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "interval" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "start" } },
                      { kind: "Field", name: { kind: "Name", value: "end" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "fullDay" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "thumbHash" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "alt" } },
                { kind: "Field", name: { kind: "Name", value: "mimeType" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventScreenFragmentFragment, unknown>;
export const ProfileScreenAuthFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProfileScreenAuthFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "LoginState" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "dbRole" } },
          { kind: "Field", name: { kind: "Name", value: "authSource" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProfileScreenAuthFragmentFragment, unknown>;
export const ProfileScreenUserFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProfileScreenUserFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PersonNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "linkblue" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "teams" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "position" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "team" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "primaryCommittee" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "identifier" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProfileScreenUserFragmentFragment, unknown>;
export const RootScreenAuthFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "RootScreenAuthFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "LoginState" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "dbRole" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RootScreenAuthFragmentFragment, unknown>;
export const ImageViewFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageViewFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ImageNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "thumbHash" } },
          { kind: "Field", name: { kind: "Name", value: "alt" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "mimeType" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageViewFragmentFragment, unknown>;
export const HourScreenFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HourScreenFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "MarathonHourNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "details" } },
          { kind: "Field", name: { kind: "Name", value: "durationInfo" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "mapImages" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ImageViewFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageViewFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ImageNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "thumbHash" } },
          { kind: "Field", name: { kind: "Name", value: "alt" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "mimeType" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HourScreenFragmentFragment, unknown>;
export const ScoreBoardFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ScoreBoardFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeamNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "totalPoints" } },
          { kind: "Field", name: { kind: "Name", value: "legacyStatus" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ScoreBoardFragmentFragment, unknown>;
export const HighlightedTeamFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HighlightedTeamFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeamNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "legacyStatus" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HighlightedTeamFragmentFragment, unknown>;
export const MyTeamFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MyTeamFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeamNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "totalPoints" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "fundraisingTotalAmount" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pointEntries" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "personFrom" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "linkblue" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "points" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "members" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "position" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "person" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "linkblue" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyTeamFragmentFragment, unknown>;
export const MyFundraisingFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MyFundraisingFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PersonNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "fundraisingTotalAmount" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "fundraisingAssignments" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "entry" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "donatedToText" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "donatedByText" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "donatedOn" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyFundraisingFragmentFragment, unknown>;
export const UseAllowedLoginTypesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "useAllowedLoginTypes" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "activeConfiguration" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "key" },
                value: {
                  kind: "StringValue",
                  value: "ALLOWED_LOGIN_TYPES",
                  block: false,
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "SimpleConfig" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SimpleConfig" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ConfigurationNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UseAllowedLoginTypesQuery,
  UseAllowedLoginTypesQueryVariables
>;
export const MarathonTimeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "MarathonTime" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "latestMarathon" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "startDate" } },
                { kind: "Field", name: { kind: "Name", value: "endDate" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MarathonTimeQuery, MarathonTimeQueryVariables>;
export const UseTabBarConfigDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "useTabBarConfig" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "activeConfiguration" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "key" },
                value: {
                  kind: "StringValue",
                  value: "TAB_BAR_CONFIG",
                  block: false,
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "SimpleConfig" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "linkblue" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SimpleConfig" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ConfigurationNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UseTabBarConfigQuery,
  UseTabBarConfigQueryVariables
>;
export const TriviaCrackDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "TriviaCrack" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "activeConfiguration" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "key" },
                value: {
                  kind: "StringValue",
                  value: "TRIVIA_CRACK",
                  block: false,
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "SimpleConfig" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teams" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "team" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "type" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SimpleConfig" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ConfigurationNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "key" } },
          { kind: "Field", name: { kind: "Name", value: "value" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TriviaCrackQuery, TriviaCrackQueryVariables>;
export const AuthStateDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AuthState" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "loginState" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "dbRole" } },
                { kind: "Field", name: { kind: "Name", value: "loggedIn" } },
                { kind: "Field", name: { kind: "Name", value: "authSource" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AuthStateQuery, AuthStateQueryVariables>;
export const SetDeviceDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "SetDevice" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "RegisterDeviceInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "registerDevice" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "ok" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SetDeviceMutation, SetDeviceMutationVariables>;
export const DeviceNotificationsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "DeviceNotifications" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "deviceUuid" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pageSize" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "verifier" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "device" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "uuid" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "deviceUuid" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "notificationDeliveries" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "pageSize" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "pageSize" },
                            },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "page" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "page" },
                            },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "verifier" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "verifier" },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "NotificationDeliveryFragment",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NotificationFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NotificationNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "body" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NotificationDeliveryFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NotificationDeliveryNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "sentAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "notification" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "NotificationFragment" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeviceNotificationsQuery,
  DeviceNotificationsQueryVariables
>;
export const RootScreenDocumentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "RootScreenDocument" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "loginState" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ProfileScreenAuthFragment" },
                },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "RootScreenAuthFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ProfileScreenUserFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProfileScreenAuthFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "LoginState" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "dbRole" } },
          { kind: "Field", name: { kind: "Name", value: "authSource" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "RootScreenAuthFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "LoginState" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "dbRole" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProfileScreenUserFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PersonNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "linkblue" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "teams" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "position" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "team" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "primaryCommittee" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "identifier" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RootScreenDocumentQuery,
  RootScreenDocumentQueryVariables
>;
export const EventsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Events" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "earliestTimestamp" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "DateTimeISO" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "lastTimestamp" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "DateTimeISO" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "events" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "dateFilters" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "comparison" },
                          value: {
                            kind: "EnumValue",
                            value: "GREATER_THAN_OR_EQUAL_TO",
                          },
                        },
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "field" },
                          value: {
                            kind: "EnumValue",
                            value: "occurrenceStart",
                          },
                        },
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "value" },
                          value: {
                            kind: "Variable",
                            name: { kind: "Name", value: "earliestTimestamp" },
                          },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "comparison" },
                          value: {
                            kind: "EnumValue",
                            value: "LESS_THAN_OR_EQUAL_TO",
                          },
                        },
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "field" },
                          value: {
                            kind: "EnumValue",
                            value: "occurrenceStart",
                          },
                        },
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "value" },
                          value: {
                            kind: "Variable",
                            name: { kind: "Name", value: "lastTimestamp" },
                          },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sortDirection" },
                value: { kind: "EnumValue", value: "asc" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sortBy" },
                value: {
                  kind: "StringValue",
                  value: "occurrence",
                  block: false,
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "EventScreenFragment" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventScreenFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "EventNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "location" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "occurrences" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "interval" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "start" } },
                      { kind: "Field", name: { kind: "Name", value: "end" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "fullDay" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "thumbHash" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "alt" } },
                { kind: "Field", name: { kind: "Name", value: "mimeType" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventsQuery, EventsQueryVariables>;
export const ServerFeedDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ServerFeed" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "feed" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "20" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "textContent" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "image" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "height" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "thumbHash" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ServerFeedQuery, ServerFeedQueryVariables>;
export const MarathonScreenDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "MarathonScreen" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "currentMarathonHour" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "HourScreenFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "latestMarathon" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "startDate" } },
                { kind: "Field", name: { kind: "Name", value: "endDate" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "hours" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "HourScreenFragment" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageViewFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ImageNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "url" } },
          { kind: "Field", name: { kind: "Name", value: "thumbHash" } },
          { kind: "Field", name: { kind: "Name", value: "alt" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "mimeType" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HourScreenFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "MarathonHourNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "details" } },
          { kind: "Field", name: { kind: "Name", value: "durationInfo" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "mapImages" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ImageViewFragment" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MarathonScreenQuery, MarathonScreenQueryVariables>;
export const ScoreBoardDocumentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ScoreBoardDocument" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "type" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "TeamType" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "marathonId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "GlobalId" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "primaryTeam" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "teamType" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "type" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "team" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "HighlightedTeamFragment",
                              },
                            },
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "MyTeamFragment" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "MyFundraisingFragment" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "teams" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sendAll" },
                value: { kind: "BooleanValue", value: true },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sortBy" },
                value: {
                  kind: "ListValue",
                  values: [
                    { kind: "StringValue", value: "totalPoints", block: false },
                    { kind: "StringValue", value: "name", block: false },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sortDirection" },
                value: {
                  kind: "ListValue",
                  values: [
                    { kind: "EnumValue", value: "desc" },
                    { kind: "EnumValue", value: "asc" },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "type" },
                value: {
                  kind: "ListValue",
                  values: [
                    { kind: "Variable", name: { kind: "Name", value: "type" } },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "marathonId" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "Variable",
                      name: { kind: "Name", value: "marathonId" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ScoreBoardFragment" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "HighlightedTeamFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeamNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "legacyStatus" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MyTeamFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeamNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "totalPoints" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "fundraisingTotalAmount" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pointEntries" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "personFrom" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "linkblue" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "points" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "members" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "position" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "person" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "linkblue" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MyFundraisingFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "PersonNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "fundraisingTotalAmount" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "fundraisingAssignments" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "entry" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "donatedToText" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "donatedByText" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "donatedOn" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ScoreBoardFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TeamNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "totalPoints" } },
          { kind: "Field", name: { kind: "Name", value: "legacyStatus" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ScoreBoardDocumentQuery,
  ScoreBoardDocumentQueryVariables
>;
export const ActiveMarathonDocumentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ActiveMarathonDocument" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "currentMarathon" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "latestMarathon" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ActiveMarathonDocumentQuery,
  ActiveMarathonDocumentQueryVariables
>;
