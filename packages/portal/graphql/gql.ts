/* eslint-disable */
import * as types from "./graphql.js";
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
  "\n  query ActiveMarathon {\n    latestMarathon {\n      id\n      year\n      startDate\n      endDate\n    }\n  }\n":
    types.ActiveMarathonDocument,
  "\n  query AllMarathons {\n    marathons(sendAll: true) {\n      data {\n        id\n        year\n      }\n    }\n  }\n":
    types.AllMarathonsDocument,
  "\n  query SelectedMarathon($marathonId: GlobalId!) {\n    marathon(uuid: $marathonId) {\n      id\n      year\n      startDate\n      endDate\n    }\n  }\n":
    types.SelectedMarathonDocument,
  "\n  fragment FundraisingEntryEditorFragment on FundraisingEntryNode {\n    id\n    donatedOn\n    amount\n    notes\n    solicitationCode {\n      id\n      text\n    }\n    solicitationCodeOverride {\n      id\n      text\n    }\n    amountUnassigned\n    batchType\n    donatedByText\n    donatedToText\n    dailyDepartmentNotification {\n      id\n    }\n  }\n":
    types.FundraisingEntryEditorFragmentFragmentDoc,
  "\n  mutation FundraisingEntryEditor(\n    $uuid: GlobalId!\n    $input: SetFundraisingEntryInput!\n  ) {\n    setFundraisingEntry(id: $uuid, input: $input) {\n      ...FundraisingEntryEditorFragment\n    }\n  }\n":
    types.FundraisingEntryEditorDocument,
  "\n  mutation CreateNotification(\n    $title: NonEmptyString!\n    $body: NonEmptyString!\n    $audience: NotificationAudienceInput!\n    $url: URL\n  ) {\n    stageNotification(\n      title: $title\n      body: $body\n      audience: $audience\n      url: $url\n    ) {\n      uuid\n    }\n  }\n":
    types.CreateNotificationDocument,
  "\n  mutation CancelNotificationSchedule($uuid: GlobalId!) {\n    abortScheduledNotification(uuid: $uuid) {\n      ok\n    }\n  }\n":
    types.CancelNotificationScheduleDocument,
  "\n  mutation DeleteNotification($uuid: GlobalId!, $force: Boolean) {\n    deleteNotification(uuid: $uuid, force: $force) {\n      ok\n    }\n  }\n":
    types.DeleteNotificationDocument,
  "\n  mutation SendNotification($uuid: GlobalId!) {\n    sendNotification(uuid: $uuid) {\n      ok\n    }\n  }\n":
    types.SendNotificationDocument,
  "\n  mutation ScheduleNotification($uuid: GlobalId!, $sendAt: DateTimeISO!) {\n    scheduleNotification(uuid: $uuid, sendAt: $sendAt) {\n      ok\n    }\n  }\n":
    types.ScheduleNotificationDocument,
  "\n  fragment SingleNotificationFragment on NotificationNode {\n    id\n    title\n    body\n    deliveryIssue\n    deliveryIssueAcknowledgedAt\n    sendAt\n    startedSendingAt\n    createdAt\n    deliveryCount\n    deliveryIssueCount {\n      DeviceNotRegistered\n      InvalidCredentials\n      MessageRateExceeded\n      MessageTooBig\n      MismatchSenderId\n      Unknown\n    }\n  }\n":
    types.SingleNotificationFragmentFragmentDoc,
  "\n  mutation PersonCreator($input: CreatePersonInput!) {\n    createPerson(input: $input) {\n      id\n    }\n  }\n":
    types.PersonCreatorDocument,
  "\n  fragment PersonEditorFragment on PersonNode {\n    id\n    name\n    linkblue\n    email\n    teams {\n      position\n      committeeRole\n      team {\n        id\n        name\n        committeeIdentifier\n        marathon {\n          year\n        }\n      }\n    }\n  }\n":
    types.PersonEditorFragmentFragmentDoc,
  "\n  mutation PersonEditor($uuid: GlobalId!, $input: SetPersonInput!) {\n    setPerson(uuid: $uuid, input: $input) {\n      id\n    }\n  }\n":
    types.PersonEditorDocument,
  "\n  fragment TeamNameFragment on TeamNode {\n    id\n    name\n    committeeIdentifier\n    marathon {\n      year\n    }\n  }\n":
    types.TeamNameFragmentFragmentDoc,
  "\n  fragment PointEntryCreatorFragment on TeamNode {\n    id\n    members {\n      person {\n        id\n      }\n    }\n  }\n":
    types.PointEntryCreatorFragmentFragmentDoc,
  "\n  mutation CreatePointEntry($input: CreatePointEntryInput!) {\n    createPointEntry(input: $input) {\n      data {\n        id\n      }\n    }\n  }\n":
    types.CreatePointEntryDocument,
  "\n  mutation CreatePointEntryAndAssign(\n    $input: CreatePointEntryInput!\n    $person: GlobalId!\n    $team: GlobalId!\n  ) {\n    addPersonToTeam(personUuid: $person, teamUuid: $team) {\n      id\n    }\n    createPointEntry(input: $input) {\n      data {\n        id\n      }\n    }\n  }\n":
    types.CreatePointEntryAndAssignDocument,
  "\n  query GetPersonByUuid($uuid: GlobalId!) {\n    person(uuid: $uuid) {\n      id\n      name\n      linkblue\n      teams {\n        team {\n          id\n        }\n      }\n    }\n  }\n":
    types.GetPersonByUuidDocument,
  "\n  query GetPersonByLinkBlue($linkBlue: String!) {\n    personByLinkBlue(linkBlueId: $linkBlue) {\n      id\n      name\n    }\n  }\n":
    types.GetPersonByLinkBlueDocument,
  "\n  query SearchPersonByName($name: String!) {\n    searchPeopleByName(name: $name) {\n      id\n      name\n    }\n  }\n":
    types.SearchPersonByNameDocument,
  "\n  mutation CreatePersonByLinkBlue(\n    $linkBlue: NonEmptyString!\n    $email: EmailAddress!\n  ) {\n    createPerson(input: { email: $email, linkblue: $linkBlue }) {\n      id\n    }\n  }\n":
    types.CreatePersonByLinkBlueDocument,
  "\n  fragment SolicitationCodeText on SolicitationCodeNode {\n    id\n    text\n  }\n":
    types.SolicitationCodeTextFragmentDoc,
  "\n  query ViewTeamPage($teamUuid: GlobalId!) {\n    team(uuid: $teamUuid) {\n      data {\n        ...PointEntryCreatorFragment\n        ...TeamViewerFragment\n        pointEntries {\n          ...PointEntryTableFragment\n        }\n      }\n    }\n  }\n":
    types.ViewTeamPageDocument,
  "\n  mutation TeamCreator($input: CreateTeamInput!, $marathonUuid: GlobalId!) {\n    createTeam(input: $input, marathon: $marathonUuid) {\n      ok\n      uuid\n    }\n  }\n":
    types.TeamCreatorDocument,
  "\n  fragment TeamEditorFragment on TeamNode {\n    id\n    name\n    marathon {\n      id\n      year\n    }\n    legacyStatus\n    type\n  }\n":
    types.TeamEditorFragmentFragmentDoc,
  "\n  mutation TeamEditor($uuid: GlobalId!, $input: SetTeamInput!) {\n    setTeam(uuid: $uuid, input: $input) {\n      ok\n    }\n  }\n":
    types.TeamEditorDocument,
  "\n  fragment TeamSelect on TeamNode {\n    id\n    name\n    type\n  }\n":
    types.TeamSelectFragmentDoc,
  "\n  fragment PaginationFragment on AbstractGraphQLPaginatedResponse {\n    page\n    pageSize\n    total\n  }\n":
    types.PaginationFragmentFragmentDoc,
  "\n  mutation DeleteEvent($uuid: GlobalId!) {\n    deleteEvent(uuid: $uuid) {\n      ok\n    }\n  }\n":
    types.DeleteEventDocument,
  "\n  query FundraisingReportDialog(\n    $report: NonEmptyString!\n    $from: DateTimeISO\n    $to: DateTimeISO\n  ) {\n    report(report: $report, from: $from, to: $to) {\n      pages {\n        title\n        header\n        rows\n      }\n    }\n  }\n":
    types.FundraisingReportDialogDocument,
  "\n  mutation CreateImage($input: CreateImageInput!) {\n    createImage(input: $input) {\n      id\n    }\n  }\n":
    types.CreateImageDocument,
  "\n  query ImagePicker($stringFilters: [ImageResolverKeyedStringFilterItem!]) {\n    images(stringFilters: $stringFilters, pageSize: 9) {\n      data {\n        id\n        alt\n        url\n      }\n    }\n  }\n":
    types.ImagePickerDocument,
  "\n  mutation DeletePerson($uuid: GlobalId!) {\n    deletePerson(uuid: $uuid) {\n      id\n    }\n  }\n":
    types.DeletePersonDocument,
  "\n  query PersonSearch($search: String!) {\n    searchPeopleByName(name: $search) {\n      id\n      name\n      linkblue\n    }\n    personByLinkBlue(linkBlueId: $search) {\n      id\n      name\n      linkblue\n    }\n  }\n":
    types.PersonSearchDocument,
  "\n  mutation DeletePointEntry($uuid: GlobalId!) {\n    deletePointEntry(uuid: $uuid) {\n      ok\n    }\n  }\n":
    types.DeletePointEntryDocument,
  "\n  mutation DeleteTeam($uuid: GlobalId!) {\n    deleteTeam(uuid: $uuid) {\n      ok\n    }\n  }\n":
    types.DeleteTeamDocument,
  "\n  query TeamSelect($search: String!) {\n    teams(\n      stringFilters: { comparison: SUBSTRING, value: $search, field: name }\n      sendAll: true\n    ) {\n      data {\n        ...TeamSelect\n      }\n    }\n  }\n":
    types.TeamSelectDocument,
  "\n  mutation CommitConfigChanges($changes: [CreateConfigurationInput!]!) {\n    createConfigurations(input: $changes) {\n      ok\n    }\n  }\n":
    types.CommitConfigChangesDocument,
  "\n  fragment ConfigFragment on ConfigurationNode {\n    id\n    key\n    value\n    validAfter\n    validUntil\n    createdAt\n  }\n":
    types.ConfigFragmentFragmentDoc,
  "\n      query ConfigQuery {\n        allConfigurations {\n          data {\n            ...ConfigFragment\n          }\n        }\n      }\n    ":
    types.ConfigQueryDocument,
  "\n  mutation UploadDdnDocument($ddnData: [DailyDepartmentNotificationInput!]!) {\n    batchUploadDailyDepartmentNotifications(input: $ddnData) {\n      id\n    }\n  }\n":
    types.UploadDdnDocumentDocument,
  "\n  mutation CreateEvent($input: CreateEventInput!) {\n    createEvent(input: $input) {\n      data {\n        id\n      }\n    }\n  }\n":
    types.CreateEventDocument,
  "\n  fragment EventEditorFragment on EventNode {\n    id\n    title\n    summary\n    description\n    location\n    occurrences {\n      id\n      interval {\n        start\n        end\n      }\n      fullDay\n    }\n    images {\n      url\n      width\n      height\n      thumbHash\n      alt\n    }\n  }\n":
    types.EventEditorFragmentFragmentDoc,
  "\n  mutation SaveEvent($uuid: GlobalId!, $input: SetEventInput!) {\n    setEvent(uuid: $uuid, input: $input) {\n      data {\n        ...EventEditorFragment\n      }\n    }\n  }\n":
    types.SaveEventDocument,
  "\n      mutation CreateMarathon($input: CreateMarathonInput!) {\n        createMarathon(input: $input) {\n          id\n        }\n      }\n    ":
    types.CreateMarathonDocument,
  "\n        mutation EditMarathon(\n          $input: SetMarathonInput!\n          $marathonId: GlobalId!\n        ) {\n          setMarathon(input: $input, uuid: $marathonId) {\n            id\n          }\n        }\n      ":
    types.EditMarathonDocument,
  "\n      query GetMarathon($marathonId: GlobalId!) {\n        marathon(uuid: $marathonId) {\n          year\n          startDate\n          endDate\n        }\n      }\n    ":
    types.GetMarathonDocument,
  "\n  mutation PersonBulkCreator(\n    $input: [BulkPersonInput!]!\n    $marathonId: GlobalId!\n  ) {\n    bulkLoadPeople(people: $input, marathonId: $marathonId) {\n      id\n    }\n  }\n":
    types.PersonBulkCreatorDocument,
  "\n  query PointEntryOpportunityLookup($name: String!, $marathonUuid: String!) {\n    pointOpportunities(\n      stringFilters: { field: name, comparison: SUBSTRING, value: $name }\n      oneOfFilters: { field: marathonUuid, value: [$marathonUuid] }\n      sendAll: true\n    ) {\n      data {\n        name\n        id\n      }\n    }\n  }\n":
    types.PointEntryOpportunityLookupDocument,
  "\n  mutation CreatePointOpportunity($input: CreatePointOpportunityInput!) {\n    createPointOpportunity(input: $input) {\n      uuid\n    }\n  }\n":
    types.CreatePointOpportunityDocument,
  "\n  mutation TeamBulkCreator($input: [BulkTeamInput!]!, $marathonId: GlobalId!) {\n    bulkLoadTeams(teams: $input, marathonId: $marathonId) {\n      id\n    }\n  }\n":
    types.TeamBulkCreatorDocument,
  "\n      query MasqueradeSelector($search: String!) {\n        searchPeopleByName(name: $search) {\n          id\n          name\n        }\n      }\n    ":
    types.MasqueradeSelectorDocument,
  "\n  fragment EventsTableFragment on EventNode {\n    id\n    title\n    description\n    occurrences {\n      id\n      interval {\n        start\n        end\n      }\n      fullDay\n    }\n    summary\n  }\n":
    types.EventsTableFragmentFragmentDoc,
  "\n  query EventsTable(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [EventResolverKeyedDateFilterItem!]\n    $isNullFilters: [EventResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [EventResolverKeyedOneOfFilterItem!]\n    $stringFilters: [EventResolverKeyedStringFilterItem!]\n  ) {\n    events(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      dateFilters: $dateFilters\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...EventsTableFragment\n      }\n    }\n  }\n":
    types.EventsTableDocument,
  "\n  fragment ImagesTableFragment on ImageNode {\n    id\n    url\n    thumbHash\n    height\n    width\n    alt\n    mimeType\n    createdAt\n  }\n":
    types.ImagesTableFragmentFragmentDoc,
  "\n  query ImagesTable(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [ImageResolverKeyedDateFilterItem!]\n    $isNullFilters: [ImageResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [ImageResolverKeyedOneOfFilterItem!]\n    $stringFilters: [ImageResolverKeyedStringFilterItem!]\n    $numericFilters: [ImageResolverKeyedNumericFilterItem!]\n  ) {\n    images(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      dateFilters: $dateFilters\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n      numericFilters: $numericFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...ImagesTableFragment\n      }\n    }\n  }\n":
    types.ImagesTableDocument,
  "\n  fragment PeopleTableFragment on PersonNode {\n    id\n    name\n    linkblue\n    email\n    dbRole\n    primaryCommittee {\n      identifier\n      role\n    }\n  }\n":
    types.PeopleTableFragmentFragmentDoc,
  "\n  query PeopleTable(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $isNullFilters: [PersonResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [PersonResolverKeyedOneOfFilterItem!]\n    $stringFilters: [PersonResolverKeyedStringFilterItem!]\n  ) {\n    listPeople(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...PeopleTableFragment\n      }\n    }\n  }\n":
    types.PeopleTableDocument,
  "\n  fragment TeamsTableFragment on TeamNode {\n    id\n    type\n    name\n    legacyStatus\n    totalPoints\n  }\n":
    types.TeamsTableFragmentFragmentDoc,
  "\n  fragment DDNsTableFragment on DailyDepartmentNotificationNode {\n    id\n    combinedDonorName\n    comment\n    combinedAmount\n    solicitationCode {\n      prefix\n      code\n      name\n    }\n    batch {\n      id\n      batchType\n      batchNumber\n    }\n  }\n":
    types.DdNsTableFragmentFragmentDoc,
  "\n  query DdnsTable(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $isNullFilters: [DailyDepartmentNotificationResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [DailyDepartmentNotificationResolverKeyedOneOfFilterItem!]\n    $stringFilters: [DailyDepartmentNotificationResolverKeyedStringFilterItem!]\n    $numericFilters: [DailyDepartmentNotificationResolverKeyedNumericFilterItem!]\n  ) {\n    dailyDepartmentNotifications(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n      numericFilters: $numericFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...DDNsTableFragment\n      }\n    }\n  }\n":
    types.DdnsTableDocument,
  "\n  mutation AddFundraisingAssignment(\n    $entryId: GlobalId!\n    $personId: GlobalId!\n    $amount: Float!\n  ) {\n    assignEntryToPerson(\n      entryId: $entryId\n      personId: $personId\n      input: { amount: $amount }\n    ) {\n      id\n    }\n  }\n":
    types.AddFundraisingAssignmentDocument,
  "\n  mutation UpdateFundraisingAssignment($id: GlobalId!, $amount: Float!) {\n    updateFundraisingAssignment(id: $id, input: { amount: $amount }) {\n      id\n      amount\n      person {\n        name\n      }\n    }\n  }\n":
    types.UpdateFundraisingAssignmentDocument,
  "\n  mutation DeleteFundraisingAssignment($id: GlobalId!) {\n    deleteFundraisingAssignment(id: $id) {\n      id\n    }\n  }\n":
    types.DeleteFundraisingAssignmentDocument,
  "\n  fragment FundraisingEntryTableFragment on ListFundraisingEntriesResponse {\n    data {\n      id\n      amount\n      amountUnassigned\n      donatedByText\n      donatedToText\n      donatedOn\n      batchType\n      solicitationCode {\n        id\n        text\n      }\n      assignments {\n        id\n        amount\n        person {\n          id\n          name\n          linkblue\n        }\n      }\n    }\n    page\n    pageSize\n    total\n  }\n":
    types.FundraisingEntryTableFragmentFragmentDoc,
  "\n  query SolicitationCodeTable($marathonId: GlobalId!) {\n    solicitationCodes {\n      ...SolicitationCodeTableFragment\n    }\n  }\n":
    types.SolicitationCodeTableDocument,
  "\n  fragment SolicitationCodeTableFragment on SolicitationCodeNode {\n    id\n    text\n    teams(marathonId: $marathonId) {\n      name\n    }\n  }\n":
    types.SolicitationCodeTableFragmentFragmentDoc,
  "\n  fragment MarathonTableFragment on MarathonNode {\n    id\n    year\n    startDate\n    endDate\n  }\n":
    types.MarathonTableFragmentFragmentDoc,
  "\n  fragment NotificationDeliveriesTableFragment on NotificationDeliveryNode {\n    id\n    deliveryError\n    receiptCheckedAt\n    sentAt\n  }\n":
    types.NotificationDeliveriesTableFragmentFragmentDoc,
  "\n  query NotificationDeliveriesTableQuery(\n    $notificationId: GlobalId!\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [NotificationDeliveryResolverKeyedDateFilterItem!]\n    $isNullFilters: [NotificationDeliveryResolverKeyedIsNullFilterItem!]\n  ) {\n    notificationDeliveries(\n      notificationUuid: $notificationId\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      dateFilters: $dateFilters\n      isNullFilters: $isNullFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...NotificationDeliveriesTableFragment\n      }\n    }\n  }\n":
    types.NotificationDeliveriesTableQueryDocument,
  "\n  fragment NotificationsTableFragment on NotificationNode {\n    id\n    title\n    body\n    deliveryIssue\n    deliveryIssueAcknowledgedAt\n    sendAt\n    startedSendingAt\n  }\n":
    types.NotificationsTableFragmentFragmentDoc,
  "\n  query NotificationsTableQuery(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [NotificationResolverKeyedDateFilterItem!]\n    $isNullFilters: [NotificationResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [NotificationResolverKeyedOneOfFilterItem!]\n    $stringFilters: [NotificationResolverKeyedStringFilterItem!]\n  ) {\n    notifications(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      dateFilters: $dateFilters\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...NotificationsTableFragment\n      }\n    }\n  }\n":
    types.NotificationsTableQueryDocument,
  "\n  fragment PointEntryTableFragment on PointEntryNode {\n    id\n    personFrom {\n      name\n      linkblue\n    }\n    points\n    pointOpportunity {\n      name\n      opportunityDate\n    }\n    comment\n  }\n":
    types.PointEntryTableFragmentFragmentDoc,
  "\n  fragment EventViewerFragment on EventNode {\n    id\n    title\n    summary\n    description\n    location\n    occurrences {\n      interval {\n        start\n        end\n      }\n      fullDay\n    }\n    images {\n      url\n      width\n      height\n      thumbHash\n      alt\n    }\n    createdAt\n    updatedAt\n  }\n":
    types.EventViewerFragmentFragmentDoc,
  "\n  fragment MarathonViewerFragment on MarathonNode {\n    id\n    year\n    startDate\n    endDate\n    hours {\n      id\n      shownStartingAt\n      title\n    }\n  }\n":
    types.MarathonViewerFragmentFragmentDoc,
  "\n  fragment PersonViewerFragment on PersonNode {\n    id\n    name\n    linkblue\n    email\n    dbRole\n    primarySpiritTeam: primaryTeam(teamType: Spirit) {\n      team {\n        id\n      }\n    }\n    primaryMoraleTeam: primaryTeam(teamType: Morale) {\n      team {\n        id\n      }\n    }\n    teams {\n      position\n      team {\n        marathon {\n          year\n        }\n        id\n        name\n        committeeIdentifier\n      }\n      committeeRole\n    }\n  }\n":
    types.PersonViewerFragmentFragmentDoc,
  "\n  fragment TeamViewerFragment on TeamNode {\n    id\n    name\n    marathon {\n      id\n      year\n    }\n    legacyStatus\n    totalPoints\n    type\n    members {\n      person {\n        id\n        name\n        linkblue\n      }\n      position\n    }\n  }\n":
    types.TeamViewerFragmentFragmentDoc,
  "\n  mutation AssignToTeam(\n    $person: GlobalId!\n    $team: GlobalId!\n    $position: MembershipPositionType\n  ) {\n    addPersonToTeam(personUuid: $person, teamUuid: $team, position: $position) {\n      id\n    }\n  }\n":
    types.AssignToTeamDocument,
  "\n  mutation RemoveFromTeam($person: GlobalId!, $team: GlobalId!) {\n    removePersonFromTeam(personUuid: $person, teamUuid: $team) {\n      id\n    }\n  }\n":
    types.RemoveFromTeamDocument,
  "\n  query LoginState {\n    loginState {\n      loggedIn\n      dbRole\n      effectiveCommitteeRoles {\n        role\n        identifier\n      }\n    }\n    me {\n      name\n      linkblue\n      email\n    }\n  }\n":
    types.LoginStateDocument,
  "\n  query LogsPage {\n    auditLog\n  }\n": types.LogsPageDocument,
  "\n  query EditEventPage($uuid: GlobalId!) {\n    event(uuid: $uuid) {\n      data {\n        ...EventEditorFragment\n      }\n    }\n  }\n":
    types.EditEventPageDocument,
  "\n  query ViewEventPage($uuid: GlobalId!) {\n    event(uuid: $uuid) {\n      data {\n        ...EventViewerFragment\n      }\n    }\n  }\n":
    types.ViewEventPageDocument,
  "\n  query FeedPage {\n    feed(limit: null) {\n      id\n      title\n      createdAt\n      textContent\n      image {\n        url\n        alt\n      }\n    }\n  }\n":
    types.FeedPageDocument,
  "\n  mutation CreateFeedItem($input: CreateFeedInput!) {\n    createFeedItem(input: $input) {\n      id\n    }\n  }\n":
    types.CreateFeedItemDocument,
  "\n  mutation DeleteFeedItem($uuid: GlobalId!) {\n    deleteFeedItem(feedItemUuid: $uuid)\n  }\n":
    types.DeleteFeedItemDocument,
  "\n  query DbFundsEntryViewer($year: String!, $dbNum: Int!) {\n    rawFundraisingEntries(marathonYear: $year, identifier: $dbNum)\n  }\n":
    types.DbFundsEntryViewerDocument,
  "\n      query DbFundsViewer($year: String!) {\n        rawFundraisingTotals(marathonYear: $year)\n      }\n    ":
    types.DbFundsViewerDocument,
  "\n  fragment ViewDdnFragment on DailyDepartmentNotificationNode {\n    accountName\n    accountNumber\n    advFeeAmtPhil\n    advFeeAmtUnit\n    advFeeCcPhil\n    advFeeCcUnit\n    advFeeStatus\n    batch {\n      id\n      batchNumber\n      batchType\n    }\n    behalfHonorMemorial\n    combinedAmount\n    combinedDonorName\n    combinedDonorSalutation\n    combinedDonorSort\n    comment\n    department\n    divFirstGift\n    division\n    donor1Amount\n    donor1Constituency\n    donor1Deceased\n    donor1Degrees\n    donor1GiftKey\n    donor1Id\n    donor1Name\n    donor1Pm\n    donor1Relation\n    donor1TitleBar\n    donor2Amount\n    donor2Constituency\n    donor2Deceased\n    donor2Degrees\n    donor2GiftKey\n    donor2Id\n    donor2Name\n    donor2Pm\n    donor2Relation\n    donor2TitleBar\n    effectiveDate\n    gikDescription\n    gikType\n    hcUnit\n    holdingDestination\n    id\n    idSorter\n    jvDocDate\n    jvDocNum\n    matchingGift\n    onlineGift\n    pledgedAmount\n    pledgedDate\n    processDate\n    sapDocDate\n    sapDocNum\n    secShares\n    secType\n    solicitation\n    solicitationCode {\n      id\n      prefix\n      code\n      name\n    }\n    transactionDate\n    transactionType\n    transmittalSn\n    ukFirstGift\n  }\n":
    types.ViewDdnFragmentFragmentDoc,
  "\n  query viewDdnDocument($id: GlobalId!) {\n    dailyDepartmentNotification(id: $id) {\n      ...ViewDdnFragment\n    }\n  }\n":
    types.ViewDdnDocumentDocument,
  "\n  query ViewFundraisingEntriesDocument(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [FundraisingEntryResolverKeyedDateFilterItem!]\n    $oneOfFilters: [FundraisingEntryResolverKeyedOneOfFilterItem!]\n    $stringFilters: [FundraisingEntryResolverKeyedStringFilterItem!]\n    $numericFilters: [FundraisingEntryResolverKeyedNumericFilterItem!]\n  ) {\n    fundraisingEntries(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      dateFilters: $dateFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n      numericFilters: $numericFilters\n    ) {\n      ...FundraisingEntryTableFragment\n    }\n  }\n":
    types.ViewFundraisingEntriesDocumentDocument,
  "\n  query SolicitationCodeDocument(\n    $solicitationCodeId: GlobalId!\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [FundraisingEntryResolverKeyedDateFilterItem!]\n    $oneOfFilters: [FundraisingEntryResolverKeyedOneOfFilterItem!]\n    $stringFilters: [FundraisingEntryResolverKeyedStringFilterItem!]\n    $numericFilters: [FundraisingEntryResolverKeyedNumericFilterItem!]\n  ) {\n    solicitationCode(id: $solicitationCodeId) {\n      prefix\n      code\n      name\n      text\n      teams {\n        ...TeamsTableFragment\n      }\n      entries(\n        page: $page\n        pageSize: $pageSize\n        sortBy: $sortBy\n        sortDirection: $sortDirection\n        dateFilters: $dateFilters\n        oneOfFilters: $oneOfFilters\n        stringFilters: $stringFilters\n        numericFilters: $numericFilters\n      ) {\n        ...FundraisingEntryTableFragment\n      }\n    }\n  }\n":
    types.SolicitationCodeDocumentDocument,
  "\n  mutation AssignTeamToSolicitationCodeDocument(\n    $teamId: GlobalId!\n    $solicitationCodeId: GlobalId!\n  ) {\n    assignSolicitationCodeToTeam(\n      teamId: $teamId\n      solicitationCode: $solicitationCodeId\n    )\n  }\n":
    types.AssignTeamToSolicitationCodeDocumentDocument,
  "\n  mutation UnassignTeamFromSolicitationCodeDocument($teamId: GlobalId!) {\n    removeSolicitationCodeFromTeam(teamId: $teamId)\n  }\n":
    types.UnassignTeamFromSolicitationCodeDocumentDocument,
  "\n  query HomePage {\n    me {\n      ...PersonViewerFragment\n    }\n  }\n":
    types.HomePageDocument,
  "\n  query EditMarathonHourData($marathonHourUuid: GlobalId!) {\n    marathonHour(uuid: $marathonHourUuid) {\n      details\n      durationInfo\n      shownStartingAt\n      title\n    }\n  }\n":
    types.EditMarathonHourDataDocument,
  "\n  mutation EditMarathonHour($input: SetMarathonHourInput!, $uuid: GlobalId!) {\n    setMarathonHour(input: $input, uuid: $uuid) {\n      id\n    }\n  }\n":
    types.EditMarathonHourDocument,
  "\n      mutation AddMarathonHour(\n        $input: CreateMarathonHourInput!\n        $marathonUuid: GlobalId!\n      ) {\n        createMarathonHour(input: $input, marathonUuid: $marathonUuid) {\n          id\n        }\n      }\n    ":
    types.AddMarathonHourDocument,
  "\n  query MarathonPage($marathonUuid: GlobalId!) {\n    marathon(uuid: $marathonUuid) {\n      ...MarathonViewerFragment\n    }\n  }\n":
    types.MarathonPageDocument,
  "\n  query MarathonOverviewPage {\n    latestMarathon {\n      ...MarathonViewerFragment\n    }\n    marathons(sendAll: true) {\n      data {\n        ...MarathonTableFragment\n      }\n    }\n  }\n":
    types.MarathonOverviewPageDocument,
  "\n  query NotificationViewer($uuid: GlobalId!) {\n    notification(uuid: $uuid) {\n      data {\n        ...SingleNotificationFragment\n      }\n    }\n  }\n":
    types.NotificationViewerDocument,
  "\n  query NotificationManager($uuid: GlobalId!) {\n    notification(uuid: $uuid) {\n      data {\n        ...SingleNotificationFragment\n      }\n    }\n  }\n":
    types.NotificationManagerDocument,
  '\n  query EditPersonPage($uuid: GlobalId!) {\n    person(uuid: $uuid) {\n      ...PersonEditorFragment\n    }\n    teams(sendAll: true, sortBy: ["name"], sortDirection: [asc]) {\n      data {\n        ...TeamNameFragment\n      }\n    }\n  }\n':
    types.EditPersonPageDocument,
  "\n  query ViewPersonPage($uuid: GlobalId!) {\n    person(uuid: $uuid) {\n      ...PersonViewerFragment\n    }\n  }\n":
    types.ViewPersonPageDocument,
  "\n  query ViewTeamFundraisingDocument(\n    $teamUuid: GlobalId!\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [FundraisingEntryResolverKeyedDateFilterItem!]\n    $oneOfFilters: [FundraisingEntryResolverKeyedOneOfFilterItem!]\n    $stringFilters: [FundraisingEntryResolverKeyedStringFilterItem!]\n    $numericFilters: [FundraisingEntryResolverKeyedNumericFilterItem!]\n  ) {\n    team(uuid: $teamUuid) {\n      data {\n        solicitationCode {\n          id\n          name\n          prefix\n          code\n        }\n        members {\n          person {\n            id\n            name\n            linkblue\n          }\n        }\n        fundraisingEntries(\n          page: $page\n          pageSize: $pageSize\n          sortBy: $sortBy\n          sortDirection: $sortDirection\n          dateFilters: $dateFilters\n          oneOfFilters: $oneOfFilters\n          stringFilters: $stringFilters\n          numericFilters: $numericFilters\n        ) {\n          ...FundraisingEntryTableFragment\n        }\n      }\n    }\n  }\n":
    types.ViewTeamFundraisingDocumentDocument,
  "\n  query SolicitationCodes {\n    solicitationCodes {\n      id\n      prefix\n      code\n      name\n    }\n  }\n":
    types.SolicitationCodesDocument,
  "\n  mutation SetTeamSolicitationCode(\n    $teamUuid: GlobalId!\n    $solCodeId: GlobalId!\n  ) {\n    assignSolicitationCodeToTeam(\n      teamId: $teamUuid\n      solicitationCode: $solCodeId\n    )\n  }\n":
    types.SetTeamSolicitationCodeDocument,
  "\n  mutation ClearTeamSolicitationCode($teamUuid: GlobalId!) {\n    removeSolicitationCodeFromTeam(teamId: $teamUuid)\n  }\n":
    types.ClearTeamSolicitationCodeDocument,
  "\n  query EditTeamPage($uuid: GlobalId!) {\n    team(uuid: $uuid) {\n      data {\n        ...TeamEditorFragment\n      }\n    }\n  }\n":
    types.EditTeamPageDocument,
  "\n  query TeamsTable(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $isNullFilters: [TeamResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [TeamResolverKeyedOneOfFilterItem!]\n    $stringFilters: [TeamResolverKeyedStringFilterItem!]\n  ) {\n    teams(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n    ) {\n      ...PaginationFragment\n      data {\n        ...TeamsTableFragment\n      }\n    }\n  }\n":
    types.TeamsTableDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query ActiveMarathon {\n    latestMarathon {\n      id\n      year\n      startDate\n      endDate\n    }\n  }\n"
): (typeof documents)["\n  query ActiveMarathon {\n    latestMarathon {\n      id\n      year\n      startDate\n      endDate\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query AllMarathons {\n    marathons(sendAll: true) {\n      data {\n        id\n        year\n      }\n    }\n  }\n"
): (typeof documents)["\n  query AllMarathons {\n    marathons(sendAll: true) {\n      data {\n        id\n        year\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query SelectedMarathon($marathonId: GlobalId!) {\n    marathon(uuid: $marathonId) {\n      id\n      year\n      startDate\n      endDate\n    }\n  }\n"
): (typeof documents)["\n  query SelectedMarathon($marathonId: GlobalId!) {\n    marathon(uuid: $marathonId) {\n      id\n      year\n      startDate\n      endDate\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment FundraisingEntryEditorFragment on FundraisingEntryNode {\n    id\n    donatedOn\n    amount\n    notes\n    solicitationCode {\n      id\n      text\n    }\n    solicitationCodeOverride {\n      id\n      text\n    }\n    amountUnassigned\n    batchType\n    donatedByText\n    donatedToText\n    dailyDepartmentNotification {\n      id\n    }\n  }\n"
): (typeof documents)["\n  fragment FundraisingEntryEditorFragment on FundraisingEntryNode {\n    id\n    donatedOn\n    amount\n    notes\n    solicitationCode {\n      id\n      text\n    }\n    solicitationCodeOverride {\n      id\n      text\n    }\n    amountUnassigned\n    batchType\n    donatedByText\n    donatedToText\n    dailyDepartmentNotification {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation FundraisingEntryEditor(\n    $uuid: GlobalId!\n    $input: SetFundraisingEntryInput!\n  ) {\n    setFundraisingEntry(id: $uuid, input: $input) {\n      ...FundraisingEntryEditorFragment\n    }\n  }\n"
): (typeof documents)["\n  mutation FundraisingEntryEditor(\n    $uuid: GlobalId!\n    $input: SetFundraisingEntryInput!\n  ) {\n    setFundraisingEntry(id: $uuid, input: $input) {\n      ...FundraisingEntryEditorFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreateNotification(\n    $title: NonEmptyString!\n    $body: NonEmptyString!\n    $audience: NotificationAudienceInput!\n    $url: URL\n  ) {\n    stageNotification(\n      title: $title\n      body: $body\n      audience: $audience\n      url: $url\n    ) {\n      uuid\n    }\n  }\n"
): (typeof documents)["\n  mutation CreateNotification(\n    $title: NonEmptyString!\n    $body: NonEmptyString!\n    $audience: NotificationAudienceInput!\n    $url: URL\n  ) {\n    stageNotification(\n      title: $title\n      body: $body\n      audience: $audience\n      url: $url\n    ) {\n      uuid\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CancelNotificationSchedule($uuid: GlobalId!) {\n    abortScheduledNotification(uuid: $uuid) {\n      ok\n    }\n  }\n"
): (typeof documents)["\n  mutation CancelNotificationSchedule($uuid: GlobalId!) {\n    abortScheduledNotification(uuid: $uuid) {\n      ok\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteNotification($uuid: GlobalId!, $force: Boolean) {\n    deleteNotification(uuid: $uuid, force: $force) {\n      ok\n    }\n  }\n"
): (typeof documents)["\n  mutation DeleteNotification($uuid: GlobalId!, $force: Boolean) {\n    deleteNotification(uuid: $uuid, force: $force) {\n      ok\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation SendNotification($uuid: GlobalId!) {\n    sendNotification(uuid: $uuid) {\n      ok\n    }\n  }\n"
): (typeof documents)["\n  mutation SendNotification($uuid: GlobalId!) {\n    sendNotification(uuid: $uuid) {\n      ok\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation ScheduleNotification($uuid: GlobalId!, $sendAt: DateTimeISO!) {\n    scheduleNotification(uuid: $uuid, sendAt: $sendAt) {\n      ok\n    }\n  }\n"
): (typeof documents)["\n  mutation ScheduleNotification($uuid: GlobalId!, $sendAt: DateTimeISO!) {\n    scheduleNotification(uuid: $uuid, sendAt: $sendAt) {\n      ok\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment SingleNotificationFragment on NotificationNode {\n    id\n    title\n    body\n    deliveryIssue\n    deliveryIssueAcknowledgedAt\n    sendAt\n    startedSendingAt\n    createdAt\n    deliveryCount\n    deliveryIssueCount {\n      DeviceNotRegistered\n      InvalidCredentials\n      MessageRateExceeded\n      MessageTooBig\n      MismatchSenderId\n      Unknown\n    }\n  }\n"
): (typeof documents)["\n  fragment SingleNotificationFragment on NotificationNode {\n    id\n    title\n    body\n    deliveryIssue\n    deliveryIssueAcknowledgedAt\n    sendAt\n    startedSendingAt\n    createdAt\n    deliveryCount\n    deliveryIssueCount {\n      DeviceNotRegistered\n      InvalidCredentials\n      MessageRateExceeded\n      MessageTooBig\n      MismatchSenderId\n      Unknown\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation PersonCreator($input: CreatePersonInput!) {\n    createPerson(input: $input) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation PersonCreator($input: CreatePersonInput!) {\n    createPerson(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment PersonEditorFragment on PersonNode {\n    id\n    name\n    linkblue\n    email\n    teams {\n      position\n      committeeRole\n      team {\n        id\n        name\n        committeeIdentifier\n        marathon {\n          year\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  fragment PersonEditorFragment on PersonNode {\n    id\n    name\n    linkblue\n    email\n    teams {\n      position\n      committeeRole\n      team {\n        id\n        name\n        committeeIdentifier\n        marathon {\n          year\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation PersonEditor($uuid: GlobalId!, $input: SetPersonInput!) {\n    setPerson(uuid: $uuid, input: $input) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation PersonEditor($uuid: GlobalId!, $input: SetPersonInput!) {\n    setPerson(uuid: $uuid, input: $input) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TeamNameFragment on TeamNode {\n    id\n    name\n    committeeIdentifier\n    marathon {\n      year\n    }\n  }\n"
): (typeof documents)["\n  fragment TeamNameFragment on TeamNode {\n    id\n    name\n    committeeIdentifier\n    marathon {\n      year\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment PointEntryCreatorFragment on TeamNode {\n    id\n    members {\n      person {\n        id\n      }\n    }\n  }\n"
): (typeof documents)["\n  fragment PointEntryCreatorFragment on TeamNode {\n    id\n    members {\n      person {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreatePointEntry($input: CreatePointEntryInput!) {\n    createPointEntry(input: $input) {\n      data {\n        id\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation CreatePointEntry($input: CreatePointEntryInput!) {\n    createPointEntry(input: $input) {\n      data {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreatePointEntryAndAssign(\n    $input: CreatePointEntryInput!\n    $person: GlobalId!\n    $team: GlobalId!\n  ) {\n    addPersonToTeam(personUuid: $person, teamUuid: $team) {\n      id\n    }\n    createPointEntry(input: $input) {\n      data {\n        id\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation CreatePointEntryAndAssign(\n    $input: CreatePointEntryInput!\n    $person: GlobalId!\n    $team: GlobalId!\n  ) {\n    addPersonToTeam(personUuid: $person, teamUuid: $team) {\n      id\n    }\n    createPointEntry(input: $input) {\n      data {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetPersonByUuid($uuid: GlobalId!) {\n    person(uuid: $uuid) {\n      id\n      name\n      linkblue\n      teams {\n        team {\n          id\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetPersonByUuid($uuid: GlobalId!) {\n    person(uuid: $uuid) {\n      id\n      name\n      linkblue\n      teams {\n        team {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetPersonByLinkBlue($linkBlue: String!) {\n    personByLinkBlue(linkBlueId: $linkBlue) {\n      id\n      name\n    }\n  }\n"
): (typeof documents)["\n  query GetPersonByLinkBlue($linkBlue: String!) {\n    personByLinkBlue(linkBlueId: $linkBlue) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query SearchPersonByName($name: String!) {\n    searchPeopleByName(name: $name) {\n      id\n      name\n    }\n  }\n"
): (typeof documents)["\n  query SearchPersonByName($name: String!) {\n    searchPeopleByName(name: $name) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreatePersonByLinkBlue(\n    $linkBlue: NonEmptyString!\n    $email: EmailAddress!\n  ) {\n    createPerson(input: { email: $email, linkblue: $linkBlue }) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation CreatePersonByLinkBlue(\n    $linkBlue: NonEmptyString!\n    $email: EmailAddress!\n  ) {\n    createPerson(input: { email: $email, linkblue: $linkBlue }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment SolicitationCodeText on SolicitationCodeNode {\n    id\n    text\n  }\n"
): (typeof documents)["\n  fragment SolicitationCodeText on SolicitationCodeNode {\n    id\n    text\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query ViewTeamPage($teamUuid: GlobalId!) {\n    team(uuid: $teamUuid) {\n      data {\n        ...PointEntryCreatorFragment\n        ...TeamViewerFragment\n        pointEntries {\n          ...PointEntryTableFragment\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query ViewTeamPage($teamUuid: GlobalId!) {\n    team(uuid: $teamUuid) {\n      data {\n        ...PointEntryCreatorFragment\n        ...TeamViewerFragment\n        pointEntries {\n          ...PointEntryTableFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation TeamCreator($input: CreateTeamInput!, $marathonUuid: GlobalId!) {\n    createTeam(input: $input, marathon: $marathonUuid) {\n      ok\n      uuid\n    }\n  }\n"
): (typeof documents)["\n  mutation TeamCreator($input: CreateTeamInput!, $marathonUuid: GlobalId!) {\n    createTeam(input: $input, marathon: $marathonUuid) {\n      ok\n      uuid\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TeamEditorFragment on TeamNode {\n    id\n    name\n    marathon {\n      id\n      year\n    }\n    legacyStatus\n    type\n  }\n"
): (typeof documents)["\n  fragment TeamEditorFragment on TeamNode {\n    id\n    name\n    marathon {\n      id\n      year\n    }\n    legacyStatus\n    type\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation TeamEditor($uuid: GlobalId!, $input: SetTeamInput!) {\n    setTeam(uuid: $uuid, input: $input) {\n      ok\n    }\n  }\n"
): (typeof documents)["\n  mutation TeamEditor($uuid: GlobalId!, $input: SetTeamInput!) {\n    setTeam(uuid: $uuid, input: $input) {\n      ok\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TeamSelect on TeamNode {\n    id\n    name\n    type\n  }\n"
): (typeof documents)["\n  fragment TeamSelect on TeamNode {\n    id\n    name\n    type\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment PaginationFragment on AbstractGraphQLPaginatedResponse {\n    page\n    pageSize\n    total\n  }\n"
): (typeof documents)["\n  fragment PaginationFragment on AbstractGraphQLPaginatedResponse {\n    page\n    pageSize\n    total\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteEvent($uuid: GlobalId!) {\n    deleteEvent(uuid: $uuid) {\n      ok\n    }\n  }\n"
): (typeof documents)["\n  mutation DeleteEvent($uuid: GlobalId!) {\n    deleteEvent(uuid: $uuid) {\n      ok\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query FundraisingReportDialog(\n    $report: NonEmptyString!\n    $from: DateTimeISO\n    $to: DateTimeISO\n  ) {\n    report(report: $report, from: $from, to: $to) {\n      pages {\n        title\n        header\n        rows\n      }\n    }\n  }\n"
): (typeof documents)["\n  query FundraisingReportDialog(\n    $report: NonEmptyString!\n    $from: DateTimeISO\n    $to: DateTimeISO\n  ) {\n    report(report: $report, from: $from, to: $to) {\n      pages {\n        title\n        header\n        rows\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreateImage($input: CreateImageInput!) {\n    createImage(input: $input) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation CreateImage($input: CreateImageInput!) {\n    createImage(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query ImagePicker($stringFilters: [ImageResolverKeyedStringFilterItem!]) {\n    images(stringFilters: $stringFilters, pageSize: 9) {\n      data {\n        id\n        alt\n        url\n      }\n    }\n  }\n"
): (typeof documents)["\n  query ImagePicker($stringFilters: [ImageResolverKeyedStringFilterItem!]) {\n    images(stringFilters: $stringFilters, pageSize: 9) {\n      data {\n        id\n        alt\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeletePerson($uuid: GlobalId!) {\n    deletePerson(uuid: $uuid) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation DeletePerson($uuid: GlobalId!) {\n    deletePerson(uuid: $uuid) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query PersonSearch($search: String!) {\n    searchPeopleByName(name: $search) {\n      id\n      name\n      linkblue\n    }\n    personByLinkBlue(linkBlueId: $search) {\n      id\n      name\n      linkblue\n    }\n  }\n"
): (typeof documents)["\n  query PersonSearch($search: String!) {\n    searchPeopleByName(name: $search) {\n      id\n      name\n      linkblue\n    }\n    personByLinkBlue(linkBlueId: $search) {\n      id\n      name\n      linkblue\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeletePointEntry($uuid: GlobalId!) {\n    deletePointEntry(uuid: $uuid) {\n      ok\n    }\n  }\n"
): (typeof documents)["\n  mutation DeletePointEntry($uuid: GlobalId!) {\n    deletePointEntry(uuid: $uuid) {\n      ok\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteTeam($uuid: GlobalId!) {\n    deleteTeam(uuid: $uuid) {\n      ok\n    }\n  }\n"
): (typeof documents)["\n  mutation DeleteTeam($uuid: GlobalId!) {\n    deleteTeam(uuid: $uuid) {\n      ok\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query TeamSelect($search: String!) {\n    teams(\n      stringFilters: { comparison: SUBSTRING, value: $search, field: name }\n      sendAll: true\n    ) {\n      data {\n        ...TeamSelect\n      }\n    }\n  }\n"
): (typeof documents)["\n  query TeamSelect($search: String!) {\n    teams(\n      stringFilters: { comparison: SUBSTRING, value: $search, field: name }\n      sendAll: true\n    ) {\n      data {\n        ...TeamSelect\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CommitConfigChanges($changes: [CreateConfigurationInput!]!) {\n    createConfigurations(input: $changes) {\n      ok\n    }\n  }\n"
): (typeof documents)["\n  mutation CommitConfigChanges($changes: [CreateConfigurationInput!]!) {\n    createConfigurations(input: $changes) {\n      ok\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment ConfigFragment on ConfigurationNode {\n    id\n    key\n    value\n    validAfter\n    validUntil\n    createdAt\n  }\n"
): (typeof documents)["\n  fragment ConfigFragment on ConfigurationNode {\n    id\n    key\n    value\n    validAfter\n    validUntil\n    createdAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n      query ConfigQuery {\n        allConfigurations {\n          data {\n            ...ConfigFragment\n          }\n        }\n      }\n    "
): (typeof documents)["\n      query ConfigQuery {\n        allConfigurations {\n          data {\n            ...ConfigFragment\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UploadDdnDocument($ddnData: [DailyDepartmentNotificationInput!]!) {\n    batchUploadDailyDepartmentNotifications(input: $ddnData) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation UploadDdnDocument($ddnData: [DailyDepartmentNotificationInput!]!) {\n    batchUploadDailyDepartmentNotifications(input: $ddnData) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreateEvent($input: CreateEventInput!) {\n    createEvent(input: $input) {\n      data {\n        id\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation CreateEvent($input: CreateEventInput!) {\n    createEvent(input: $input) {\n      data {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment EventEditorFragment on EventNode {\n    id\n    title\n    summary\n    description\n    location\n    occurrences {\n      id\n      interval {\n        start\n        end\n      }\n      fullDay\n    }\n    images {\n      url\n      width\n      height\n      thumbHash\n      alt\n    }\n  }\n"
): (typeof documents)["\n  fragment EventEditorFragment on EventNode {\n    id\n    title\n    summary\n    description\n    location\n    occurrences {\n      id\n      interval {\n        start\n        end\n      }\n      fullDay\n    }\n    images {\n      url\n      width\n      height\n      thumbHash\n      alt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation SaveEvent($uuid: GlobalId!, $input: SetEventInput!) {\n    setEvent(uuid: $uuid, input: $input) {\n      data {\n        ...EventEditorFragment\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation SaveEvent($uuid: GlobalId!, $input: SetEventInput!) {\n    setEvent(uuid: $uuid, input: $input) {\n      data {\n        ...EventEditorFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n      mutation CreateMarathon($input: CreateMarathonInput!) {\n        createMarathon(input: $input) {\n          id\n        }\n      }\n    "
): (typeof documents)["\n      mutation CreateMarathon($input: CreateMarathonInput!) {\n        createMarathon(input: $input) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n        mutation EditMarathon(\n          $input: SetMarathonInput!\n          $marathonId: GlobalId!\n        ) {\n          setMarathon(input: $input, uuid: $marathonId) {\n            id\n          }\n        }\n      "
): (typeof documents)["\n        mutation EditMarathon(\n          $input: SetMarathonInput!\n          $marathonId: GlobalId!\n        ) {\n          setMarathon(input: $input, uuid: $marathonId) {\n            id\n          }\n        }\n      "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n      query GetMarathon($marathonId: GlobalId!) {\n        marathon(uuid: $marathonId) {\n          year\n          startDate\n          endDate\n        }\n      }\n    "
): (typeof documents)["\n      query GetMarathon($marathonId: GlobalId!) {\n        marathon(uuid: $marathonId) {\n          year\n          startDate\n          endDate\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation PersonBulkCreator(\n    $input: [BulkPersonInput!]!\n    $marathonId: GlobalId!\n  ) {\n    bulkLoadPeople(people: $input, marathonId: $marathonId) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation PersonBulkCreator(\n    $input: [BulkPersonInput!]!\n    $marathonId: GlobalId!\n  ) {\n    bulkLoadPeople(people: $input, marathonId: $marathonId) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query PointEntryOpportunityLookup($name: String!, $marathonUuid: String!) {\n    pointOpportunities(\n      stringFilters: { field: name, comparison: SUBSTRING, value: $name }\n      oneOfFilters: { field: marathonUuid, value: [$marathonUuid] }\n      sendAll: true\n    ) {\n      data {\n        name\n        id\n      }\n    }\n  }\n"
): (typeof documents)["\n  query PointEntryOpportunityLookup($name: String!, $marathonUuid: String!) {\n    pointOpportunities(\n      stringFilters: { field: name, comparison: SUBSTRING, value: $name }\n      oneOfFilters: { field: marathonUuid, value: [$marathonUuid] }\n      sendAll: true\n    ) {\n      data {\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreatePointOpportunity($input: CreatePointOpportunityInput!) {\n    createPointOpportunity(input: $input) {\n      uuid\n    }\n  }\n"
): (typeof documents)["\n  mutation CreatePointOpportunity($input: CreatePointOpportunityInput!) {\n    createPointOpportunity(input: $input) {\n      uuid\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation TeamBulkCreator($input: [BulkTeamInput!]!, $marathonId: GlobalId!) {\n    bulkLoadTeams(teams: $input, marathonId: $marathonId) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation TeamBulkCreator($input: [BulkTeamInput!]!, $marathonId: GlobalId!) {\n    bulkLoadTeams(teams: $input, marathonId: $marathonId) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n      query MasqueradeSelector($search: String!) {\n        searchPeopleByName(name: $search) {\n          id\n          name\n        }\n      }\n    "
): (typeof documents)["\n      query MasqueradeSelector($search: String!) {\n        searchPeopleByName(name: $search) {\n          id\n          name\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment EventsTableFragment on EventNode {\n    id\n    title\n    description\n    occurrences {\n      id\n      interval {\n        start\n        end\n      }\n      fullDay\n    }\n    summary\n  }\n"
): (typeof documents)["\n  fragment EventsTableFragment on EventNode {\n    id\n    title\n    description\n    occurrences {\n      id\n      interval {\n        start\n        end\n      }\n      fullDay\n    }\n    summary\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query EventsTable(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [EventResolverKeyedDateFilterItem!]\n    $isNullFilters: [EventResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [EventResolverKeyedOneOfFilterItem!]\n    $stringFilters: [EventResolverKeyedStringFilterItem!]\n  ) {\n    events(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      dateFilters: $dateFilters\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...EventsTableFragment\n      }\n    }\n  }\n"
): (typeof documents)["\n  query EventsTable(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [EventResolverKeyedDateFilterItem!]\n    $isNullFilters: [EventResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [EventResolverKeyedOneOfFilterItem!]\n    $stringFilters: [EventResolverKeyedStringFilterItem!]\n  ) {\n    events(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      dateFilters: $dateFilters\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...EventsTableFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment ImagesTableFragment on ImageNode {\n    id\n    url\n    thumbHash\n    height\n    width\n    alt\n    mimeType\n    createdAt\n  }\n"
): (typeof documents)["\n  fragment ImagesTableFragment on ImageNode {\n    id\n    url\n    thumbHash\n    height\n    width\n    alt\n    mimeType\n    createdAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query ImagesTable(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [ImageResolverKeyedDateFilterItem!]\n    $isNullFilters: [ImageResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [ImageResolverKeyedOneOfFilterItem!]\n    $stringFilters: [ImageResolverKeyedStringFilterItem!]\n    $numericFilters: [ImageResolverKeyedNumericFilterItem!]\n  ) {\n    images(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      dateFilters: $dateFilters\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n      numericFilters: $numericFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...ImagesTableFragment\n      }\n    }\n  }\n"
): (typeof documents)["\n  query ImagesTable(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [ImageResolverKeyedDateFilterItem!]\n    $isNullFilters: [ImageResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [ImageResolverKeyedOneOfFilterItem!]\n    $stringFilters: [ImageResolverKeyedStringFilterItem!]\n    $numericFilters: [ImageResolverKeyedNumericFilterItem!]\n  ) {\n    images(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      dateFilters: $dateFilters\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n      numericFilters: $numericFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...ImagesTableFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment PeopleTableFragment on PersonNode {\n    id\n    name\n    linkblue\n    email\n    dbRole\n    primaryCommittee {\n      identifier\n      role\n    }\n  }\n"
): (typeof documents)["\n  fragment PeopleTableFragment on PersonNode {\n    id\n    name\n    linkblue\n    email\n    dbRole\n    primaryCommittee {\n      identifier\n      role\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query PeopleTable(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $isNullFilters: [PersonResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [PersonResolverKeyedOneOfFilterItem!]\n    $stringFilters: [PersonResolverKeyedStringFilterItem!]\n  ) {\n    listPeople(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...PeopleTableFragment\n      }\n    }\n  }\n"
): (typeof documents)["\n  query PeopleTable(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $isNullFilters: [PersonResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [PersonResolverKeyedOneOfFilterItem!]\n    $stringFilters: [PersonResolverKeyedStringFilterItem!]\n  ) {\n    listPeople(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...PeopleTableFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TeamsTableFragment on TeamNode {\n    id\n    type\n    name\n    legacyStatus\n    totalPoints\n  }\n"
): (typeof documents)["\n  fragment TeamsTableFragment on TeamNode {\n    id\n    type\n    name\n    legacyStatus\n    totalPoints\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment DDNsTableFragment on DailyDepartmentNotificationNode {\n    id\n    combinedDonorName\n    comment\n    combinedAmount\n    solicitationCode {\n      prefix\n      code\n      name\n    }\n    batch {\n      id\n      batchType\n      batchNumber\n    }\n  }\n"
): (typeof documents)["\n  fragment DDNsTableFragment on DailyDepartmentNotificationNode {\n    id\n    combinedDonorName\n    comment\n    combinedAmount\n    solicitationCode {\n      prefix\n      code\n      name\n    }\n    batch {\n      id\n      batchType\n      batchNumber\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query DdnsTable(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $isNullFilters: [DailyDepartmentNotificationResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [DailyDepartmentNotificationResolverKeyedOneOfFilterItem!]\n    $stringFilters: [DailyDepartmentNotificationResolverKeyedStringFilterItem!]\n    $numericFilters: [DailyDepartmentNotificationResolverKeyedNumericFilterItem!]\n  ) {\n    dailyDepartmentNotifications(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n      numericFilters: $numericFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...DDNsTableFragment\n      }\n    }\n  }\n"
): (typeof documents)["\n  query DdnsTable(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $isNullFilters: [DailyDepartmentNotificationResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [DailyDepartmentNotificationResolverKeyedOneOfFilterItem!]\n    $stringFilters: [DailyDepartmentNotificationResolverKeyedStringFilterItem!]\n    $numericFilters: [DailyDepartmentNotificationResolverKeyedNumericFilterItem!]\n  ) {\n    dailyDepartmentNotifications(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n      numericFilters: $numericFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...DDNsTableFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation AddFundraisingAssignment(\n    $entryId: GlobalId!\n    $personId: GlobalId!\n    $amount: Float!\n  ) {\n    assignEntryToPerson(\n      entryId: $entryId\n      personId: $personId\n      input: { amount: $amount }\n    ) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation AddFundraisingAssignment(\n    $entryId: GlobalId!\n    $personId: GlobalId!\n    $amount: Float!\n  ) {\n    assignEntryToPerson(\n      entryId: $entryId\n      personId: $personId\n      input: { amount: $amount }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateFundraisingAssignment($id: GlobalId!, $amount: Float!) {\n    updateFundraisingAssignment(id: $id, input: { amount: $amount }) {\n      id\n      amount\n      person {\n        name\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation UpdateFundraisingAssignment($id: GlobalId!, $amount: Float!) {\n    updateFundraisingAssignment(id: $id, input: { amount: $amount }) {\n      id\n      amount\n      person {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteFundraisingAssignment($id: GlobalId!) {\n    deleteFundraisingAssignment(id: $id) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation DeleteFundraisingAssignment($id: GlobalId!) {\n    deleteFundraisingAssignment(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment FundraisingEntryTableFragment on ListFundraisingEntriesResponse {\n    data {\n      id\n      amount\n      amountUnassigned\n      donatedByText\n      donatedToText\n      donatedOn\n      batchType\n      solicitationCode {\n        id\n        text\n      }\n      assignments {\n        id\n        amount\n        person {\n          id\n          name\n          linkblue\n        }\n      }\n    }\n    page\n    pageSize\n    total\n  }\n"
): (typeof documents)["\n  fragment FundraisingEntryTableFragment on ListFundraisingEntriesResponse {\n    data {\n      id\n      amount\n      amountUnassigned\n      donatedByText\n      donatedToText\n      donatedOn\n      batchType\n      solicitationCode {\n        id\n        text\n      }\n      assignments {\n        id\n        amount\n        person {\n          id\n          name\n          linkblue\n        }\n      }\n    }\n    page\n    pageSize\n    total\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query SolicitationCodeTable($marathonId: GlobalId!) {\n    solicitationCodes {\n      ...SolicitationCodeTableFragment\n    }\n  }\n"
): (typeof documents)["\n  query SolicitationCodeTable($marathonId: GlobalId!) {\n    solicitationCodes {\n      ...SolicitationCodeTableFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment SolicitationCodeTableFragment on SolicitationCodeNode {\n    id\n    text\n    teams(marathonId: $marathonId) {\n      name\n    }\n  }\n"
): (typeof documents)["\n  fragment SolicitationCodeTableFragment on SolicitationCodeNode {\n    id\n    text\n    teams(marathonId: $marathonId) {\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment MarathonTableFragment on MarathonNode {\n    id\n    year\n    startDate\n    endDate\n  }\n"
): (typeof documents)["\n  fragment MarathonTableFragment on MarathonNode {\n    id\n    year\n    startDate\n    endDate\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment NotificationDeliveriesTableFragment on NotificationDeliveryNode {\n    id\n    deliveryError\n    receiptCheckedAt\n    sentAt\n  }\n"
): (typeof documents)["\n  fragment NotificationDeliveriesTableFragment on NotificationDeliveryNode {\n    id\n    deliveryError\n    receiptCheckedAt\n    sentAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query NotificationDeliveriesTableQuery(\n    $notificationId: GlobalId!\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [NotificationDeliveryResolverKeyedDateFilterItem!]\n    $isNullFilters: [NotificationDeliveryResolverKeyedIsNullFilterItem!]\n  ) {\n    notificationDeliveries(\n      notificationUuid: $notificationId\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      dateFilters: $dateFilters\n      isNullFilters: $isNullFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...NotificationDeliveriesTableFragment\n      }\n    }\n  }\n"
): (typeof documents)["\n  query NotificationDeliveriesTableQuery(\n    $notificationId: GlobalId!\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [NotificationDeliveryResolverKeyedDateFilterItem!]\n    $isNullFilters: [NotificationDeliveryResolverKeyedIsNullFilterItem!]\n  ) {\n    notificationDeliveries(\n      notificationUuid: $notificationId\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      dateFilters: $dateFilters\n      isNullFilters: $isNullFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...NotificationDeliveriesTableFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment NotificationsTableFragment on NotificationNode {\n    id\n    title\n    body\n    deliveryIssue\n    deliveryIssueAcknowledgedAt\n    sendAt\n    startedSendingAt\n  }\n"
): (typeof documents)["\n  fragment NotificationsTableFragment on NotificationNode {\n    id\n    title\n    body\n    deliveryIssue\n    deliveryIssueAcknowledgedAt\n    sendAt\n    startedSendingAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query NotificationsTableQuery(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [NotificationResolverKeyedDateFilterItem!]\n    $isNullFilters: [NotificationResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [NotificationResolverKeyedOneOfFilterItem!]\n    $stringFilters: [NotificationResolverKeyedStringFilterItem!]\n  ) {\n    notifications(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      dateFilters: $dateFilters\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...NotificationsTableFragment\n      }\n    }\n  }\n"
): (typeof documents)["\n  query NotificationsTableQuery(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [NotificationResolverKeyedDateFilterItem!]\n    $isNullFilters: [NotificationResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [NotificationResolverKeyedOneOfFilterItem!]\n    $stringFilters: [NotificationResolverKeyedStringFilterItem!]\n  ) {\n    notifications(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      dateFilters: $dateFilters\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n    ) {\n      page\n      pageSize\n      total\n      data {\n        ...NotificationsTableFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment PointEntryTableFragment on PointEntryNode {\n    id\n    personFrom {\n      name\n      linkblue\n    }\n    points\n    pointOpportunity {\n      name\n      opportunityDate\n    }\n    comment\n  }\n"
): (typeof documents)["\n  fragment PointEntryTableFragment on PointEntryNode {\n    id\n    personFrom {\n      name\n      linkblue\n    }\n    points\n    pointOpportunity {\n      name\n      opportunityDate\n    }\n    comment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment EventViewerFragment on EventNode {\n    id\n    title\n    summary\n    description\n    location\n    occurrences {\n      interval {\n        start\n        end\n      }\n      fullDay\n    }\n    images {\n      url\n      width\n      height\n      thumbHash\n      alt\n    }\n    createdAt\n    updatedAt\n  }\n"
): (typeof documents)["\n  fragment EventViewerFragment on EventNode {\n    id\n    title\n    summary\n    description\n    location\n    occurrences {\n      interval {\n        start\n        end\n      }\n      fullDay\n    }\n    images {\n      url\n      width\n      height\n      thumbHash\n      alt\n    }\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment MarathonViewerFragment on MarathonNode {\n    id\n    year\n    startDate\n    endDate\n    hours {\n      id\n      shownStartingAt\n      title\n    }\n  }\n"
): (typeof documents)["\n  fragment MarathonViewerFragment on MarathonNode {\n    id\n    year\n    startDate\n    endDate\n    hours {\n      id\n      shownStartingAt\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment PersonViewerFragment on PersonNode {\n    id\n    name\n    linkblue\n    email\n    dbRole\n    primarySpiritTeam: primaryTeam(teamType: Spirit) {\n      team {\n        id\n      }\n    }\n    primaryMoraleTeam: primaryTeam(teamType: Morale) {\n      team {\n        id\n      }\n    }\n    teams {\n      position\n      team {\n        marathon {\n          year\n        }\n        id\n        name\n        committeeIdentifier\n      }\n      committeeRole\n    }\n  }\n"
): (typeof documents)["\n  fragment PersonViewerFragment on PersonNode {\n    id\n    name\n    linkblue\n    email\n    dbRole\n    primarySpiritTeam: primaryTeam(teamType: Spirit) {\n      team {\n        id\n      }\n    }\n    primaryMoraleTeam: primaryTeam(teamType: Morale) {\n      team {\n        id\n      }\n    }\n    teams {\n      position\n      team {\n        marathon {\n          year\n        }\n        id\n        name\n        committeeIdentifier\n      }\n      committeeRole\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TeamViewerFragment on TeamNode {\n    id\n    name\n    marathon {\n      id\n      year\n    }\n    legacyStatus\n    totalPoints\n    type\n    members {\n      person {\n        id\n        name\n        linkblue\n      }\n      position\n    }\n  }\n"
): (typeof documents)["\n  fragment TeamViewerFragment on TeamNode {\n    id\n    name\n    marathon {\n      id\n      year\n    }\n    legacyStatus\n    totalPoints\n    type\n    members {\n      person {\n        id\n        name\n        linkblue\n      }\n      position\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation AssignToTeam(\n    $person: GlobalId!\n    $team: GlobalId!\n    $position: MembershipPositionType\n  ) {\n    addPersonToTeam(personUuid: $person, teamUuid: $team, position: $position) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation AssignToTeam(\n    $person: GlobalId!\n    $team: GlobalId!\n    $position: MembershipPositionType\n  ) {\n    addPersonToTeam(personUuid: $person, teamUuid: $team, position: $position) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation RemoveFromTeam($person: GlobalId!, $team: GlobalId!) {\n    removePersonFromTeam(personUuid: $person, teamUuid: $team) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation RemoveFromTeam($person: GlobalId!, $team: GlobalId!) {\n    removePersonFromTeam(personUuid: $person, teamUuid: $team) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query LoginState {\n    loginState {\n      loggedIn\n      dbRole\n      effectiveCommitteeRoles {\n        role\n        identifier\n      }\n    }\n    me {\n      name\n      linkblue\n      email\n    }\n  }\n"
): (typeof documents)["\n  query LoginState {\n    loginState {\n      loggedIn\n      dbRole\n      effectiveCommitteeRoles {\n        role\n        identifier\n      }\n    }\n    me {\n      name\n      linkblue\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query LogsPage {\n    auditLog\n  }\n"
): (typeof documents)["\n  query LogsPage {\n    auditLog\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query EditEventPage($uuid: GlobalId!) {\n    event(uuid: $uuid) {\n      data {\n        ...EventEditorFragment\n      }\n    }\n  }\n"
): (typeof documents)["\n  query EditEventPage($uuid: GlobalId!) {\n    event(uuid: $uuid) {\n      data {\n        ...EventEditorFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query ViewEventPage($uuid: GlobalId!) {\n    event(uuid: $uuid) {\n      data {\n        ...EventViewerFragment\n      }\n    }\n  }\n"
): (typeof documents)["\n  query ViewEventPage($uuid: GlobalId!) {\n    event(uuid: $uuid) {\n      data {\n        ...EventViewerFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query FeedPage {\n    feed(limit: null) {\n      id\n      title\n      createdAt\n      textContent\n      image {\n        url\n        alt\n      }\n    }\n  }\n"
): (typeof documents)["\n  query FeedPage {\n    feed(limit: null) {\n      id\n      title\n      createdAt\n      textContent\n      image {\n        url\n        alt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation CreateFeedItem($input: CreateFeedInput!) {\n    createFeedItem(input: $input) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation CreateFeedItem($input: CreateFeedInput!) {\n    createFeedItem(input: $input) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteFeedItem($uuid: GlobalId!) {\n    deleteFeedItem(feedItemUuid: $uuid)\n  }\n"
): (typeof documents)["\n  mutation DeleteFeedItem($uuid: GlobalId!) {\n    deleteFeedItem(feedItemUuid: $uuid)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query DbFundsEntryViewer($year: String!, $dbNum: Int!) {\n    rawFundraisingEntries(marathonYear: $year, identifier: $dbNum)\n  }\n"
): (typeof documents)["\n  query DbFundsEntryViewer($year: String!, $dbNum: Int!) {\n    rawFundraisingEntries(marathonYear: $year, identifier: $dbNum)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n      query DbFundsViewer($year: String!) {\n        rawFundraisingTotals(marathonYear: $year)\n      }\n    "
): (typeof documents)["\n      query DbFundsViewer($year: String!) {\n        rawFundraisingTotals(marathonYear: $year)\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment ViewDdnFragment on DailyDepartmentNotificationNode {\n    accountName\n    accountNumber\n    advFeeAmtPhil\n    advFeeAmtUnit\n    advFeeCcPhil\n    advFeeCcUnit\n    advFeeStatus\n    batch {\n      id\n      batchNumber\n      batchType\n    }\n    behalfHonorMemorial\n    combinedAmount\n    combinedDonorName\n    combinedDonorSalutation\n    combinedDonorSort\n    comment\n    department\n    divFirstGift\n    division\n    donor1Amount\n    donor1Constituency\n    donor1Deceased\n    donor1Degrees\n    donor1GiftKey\n    donor1Id\n    donor1Name\n    donor1Pm\n    donor1Relation\n    donor1TitleBar\n    donor2Amount\n    donor2Constituency\n    donor2Deceased\n    donor2Degrees\n    donor2GiftKey\n    donor2Id\n    donor2Name\n    donor2Pm\n    donor2Relation\n    donor2TitleBar\n    effectiveDate\n    gikDescription\n    gikType\n    hcUnit\n    holdingDestination\n    id\n    idSorter\n    jvDocDate\n    jvDocNum\n    matchingGift\n    onlineGift\n    pledgedAmount\n    pledgedDate\n    processDate\n    sapDocDate\n    sapDocNum\n    secShares\n    secType\n    solicitation\n    solicitationCode {\n      id\n      prefix\n      code\n      name\n    }\n    transactionDate\n    transactionType\n    transmittalSn\n    ukFirstGift\n  }\n"
): (typeof documents)["\n  fragment ViewDdnFragment on DailyDepartmentNotificationNode {\n    accountName\n    accountNumber\n    advFeeAmtPhil\n    advFeeAmtUnit\n    advFeeCcPhil\n    advFeeCcUnit\n    advFeeStatus\n    batch {\n      id\n      batchNumber\n      batchType\n    }\n    behalfHonorMemorial\n    combinedAmount\n    combinedDonorName\n    combinedDonorSalutation\n    combinedDonorSort\n    comment\n    department\n    divFirstGift\n    division\n    donor1Amount\n    donor1Constituency\n    donor1Deceased\n    donor1Degrees\n    donor1GiftKey\n    donor1Id\n    donor1Name\n    donor1Pm\n    donor1Relation\n    donor1TitleBar\n    donor2Amount\n    donor2Constituency\n    donor2Deceased\n    donor2Degrees\n    donor2GiftKey\n    donor2Id\n    donor2Name\n    donor2Pm\n    donor2Relation\n    donor2TitleBar\n    effectiveDate\n    gikDescription\n    gikType\n    hcUnit\n    holdingDestination\n    id\n    idSorter\n    jvDocDate\n    jvDocNum\n    matchingGift\n    onlineGift\n    pledgedAmount\n    pledgedDate\n    processDate\n    sapDocDate\n    sapDocNum\n    secShares\n    secType\n    solicitation\n    solicitationCode {\n      id\n      prefix\n      code\n      name\n    }\n    transactionDate\n    transactionType\n    transmittalSn\n    ukFirstGift\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query viewDdnDocument($id: GlobalId!) {\n    dailyDepartmentNotification(id: $id) {\n      ...ViewDdnFragment\n    }\n  }\n"
): (typeof documents)["\n  query viewDdnDocument($id: GlobalId!) {\n    dailyDepartmentNotification(id: $id) {\n      ...ViewDdnFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query ViewFundraisingEntriesDocument(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [FundraisingEntryResolverKeyedDateFilterItem!]\n    $oneOfFilters: [FundraisingEntryResolverKeyedOneOfFilterItem!]\n    $stringFilters: [FundraisingEntryResolverKeyedStringFilterItem!]\n    $numericFilters: [FundraisingEntryResolverKeyedNumericFilterItem!]\n  ) {\n    fundraisingEntries(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      dateFilters: $dateFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n      numericFilters: $numericFilters\n    ) {\n      ...FundraisingEntryTableFragment\n    }\n  }\n"
): (typeof documents)["\n  query ViewFundraisingEntriesDocument(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [FundraisingEntryResolverKeyedDateFilterItem!]\n    $oneOfFilters: [FundraisingEntryResolverKeyedOneOfFilterItem!]\n    $stringFilters: [FundraisingEntryResolverKeyedStringFilterItem!]\n    $numericFilters: [FundraisingEntryResolverKeyedNumericFilterItem!]\n  ) {\n    fundraisingEntries(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      dateFilters: $dateFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n      numericFilters: $numericFilters\n    ) {\n      ...FundraisingEntryTableFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query SolicitationCodeDocument(\n    $solicitationCodeId: GlobalId!\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [FundraisingEntryResolverKeyedDateFilterItem!]\n    $oneOfFilters: [FundraisingEntryResolverKeyedOneOfFilterItem!]\n    $stringFilters: [FundraisingEntryResolverKeyedStringFilterItem!]\n    $numericFilters: [FundraisingEntryResolverKeyedNumericFilterItem!]\n  ) {\n    solicitationCode(id: $solicitationCodeId) {\n      prefix\n      code\n      name\n      text\n      teams {\n        ...TeamsTableFragment\n      }\n      entries(\n        page: $page\n        pageSize: $pageSize\n        sortBy: $sortBy\n        sortDirection: $sortDirection\n        dateFilters: $dateFilters\n        oneOfFilters: $oneOfFilters\n        stringFilters: $stringFilters\n        numericFilters: $numericFilters\n      ) {\n        ...FundraisingEntryTableFragment\n      }\n    }\n  }\n"
): (typeof documents)["\n  query SolicitationCodeDocument(\n    $solicitationCodeId: GlobalId!\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [FundraisingEntryResolverKeyedDateFilterItem!]\n    $oneOfFilters: [FundraisingEntryResolverKeyedOneOfFilterItem!]\n    $stringFilters: [FundraisingEntryResolverKeyedStringFilterItem!]\n    $numericFilters: [FundraisingEntryResolverKeyedNumericFilterItem!]\n  ) {\n    solicitationCode(id: $solicitationCodeId) {\n      prefix\n      code\n      name\n      text\n      teams {\n        ...TeamsTableFragment\n      }\n      entries(\n        page: $page\n        pageSize: $pageSize\n        sortBy: $sortBy\n        sortDirection: $sortDirection\n        dateFilters: $dateFilters\n        oneOfFilters: $oneOfFilters\n        stringFilters: $stringFilters\n        numericFilters: $numericFilters\n      ) {\n        ...FundraisingEntryTableFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation AssignTeamToSolicitationCodeDocument(\n    $teamId: GlobalId!\n    $solicitationCodeId: GlobalId!\n  ) {\n    assignSolicitationCodeToTeam(\n      teamId: $teamId\n      solicitationCode: $solicitationCodeId\n    )\n  }\n"
): (typeof documents)["\n  mutation AssignTeamToSolicitationCodeDocument(\n    $teamId: GlobalId!\n    $solicitationCodeId: GlobalId!\n  ) {\n    assignSolicitationCodeToTeam(\n      teamId: $teamId\n      solicitationCode: $solicitationCodeId\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UnassignTeamFromSolicitationCodeDocument($teamId: GlobalId!) {\n    removeSolicitationCodeFromTeam(teamId: $teamId)\n  }\n"
): (typeof documents)["\n  mutation UnassignTeamFromSolicitationCodeDocument($teamId: GlobalId!) {\n    removeSolicitationCodeFromTeam(teamId: $teamId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query HomePage {\n    me {\n      ...PersonViewerFragment\n    }\n  }\n"
): (typeof documents)["\n  query HomePage {\n    me {\n      ...PersonViewerFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query EditMarathonHourData($marathonHourUuid: GlobalId!) {\n    marathonHour(uuid: $marathonHourUuid) {\n      details\n      durationInfo\n      shownStartingAt\n      title\n    }\n  }\n"
): (typeof documents)["\n  query EditMarathonHourData($marathonHourUuid: GlobalId!) {\n    marathonHour(uuid: $marathonHourUuid) {\n      details\n      durationInfo\n      shownStartingAt\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation EditMarathonHour($input: SetMarathonHourInput!, $uuid: GlobalId!) {\n    setMarathonHour(input: $input, uuid: $uuid) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation EditMarathonHour($input: SetMarathonHourInput!, $uuid: GlobalId!) {\n    setMarathonHour(input: $input, uuid: $uuid) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n      mutation AddMarathonHour(\n        $input: CreateMarathonHourInput!\n        $marathonUuid: GlobalId!\n      ) {\n        createMarathonHour(input: $input, marathonUuid: $marathonUuid) {\n          id\n        }\n      }\n    "
): (typeof documents)["\n      mutation AddMarathonHour(\n        $input: CreateMarathonHourInput!\n        $marathonUuid: GlobalId!\n      ) {\n        createMarathonHour(input: $input, marathonUuid: $marathonUuid) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query MarathonPage($marathonUuid: GlobalId!) {\n    marathon(uuid: $marathonUuid) {\n      ...MarathonViewerFragment\n    }\n  }\n"
): (typeof documents)["\n  query MarathonPage($marathonUuid: GlobalId!) {\n    marathon(uuid: $marathonUuid) {\n      ...MarathonViewerFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query MarathonOverviewPage {\n    latestMarathon {\n      ...MarathonViewerFragment\n    }\n    marathons(sendAll: true) {\n      data {\n        ...MarathonTableFragment\n      }\n    }\n  }\n"
): (typeof documents)["\n  query MarathonOverviewPage {\n    latestMarathon {\n      ...MarathonViewerFragment\n    }\n    marathons(sendAll: true) {\n      data {\n        ...MarathonTableFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query NotificationViewer($uuid: GlobalId!) {\n    notification(uuid: $uuid) {\n      data {\n        ...SingleNotificationFragment\n      }\n    }\n  }\n"
): (typeof documents)["\n  query NotificationViewer($uuid: GlobalId!) {\n    notification(uuid: $uuid) {\n      data {\n        ...SingleNotificationFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query NotificationManager($uuid: GlobalId!) {\n    notification(uuid: $uuid) {\n      data {\n        ...SingleNotificationFragment\n      }\n    }\n  }\n"
): (typeof documents)["\n  query NotificationManager($uuid: GlobalId!) {\n    notification(uuid: $uuid) {\n      data {\n        ...SingleNotificationFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query EditPersonPage($uuid: GlobalId!) {\n    person(uuid: $uuid) {\n      ...PersonEditorFragment\n    }\n    teams(sendAll: true, sortBy: ["name"], sortDirection: [asc]) {\n      data {\n        ...TeamNameFragment\n      }\n    }\n  }\n'
): (typeof documents)['\n  query EditPersonPage($uuid: GlobalId!) {\n    person(uuid: $uuid) {\n      ...PersonEditorFragment\n    }\n    teams(sendAll: true, sortBy: ["name"], sortDirection: [asc]) {\n      data {\n        ...TeamNameFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query ViewPersonPage($uuid: GlobalId!) {\n    person(uuid: $uuid) {\n      ...PersonViewerFragment\n    }\n  }\n"
): (typeof documents)["\n  query ViewPersonPage($uuid: GlobalId!) {\n    person(uuid: $uuid) {\n      ...PersonViewerFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query ViewTeamFundraisingDocument(\n    $teamUuid: GlobalId!\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [FundraisingEntryResolverKeyedDateFilterItem!]\n    $oneOfFilters: [FundraisingEntryResolverKeyedOneOfFilterItem!]\n    $stringFilters: [FundraisingEntryResolverKeyedStringFilterItem!]\n    $numericFilters: [FundraisingEntryResolverKeyedNumericFilterItem!]\n  ) {\n    team(uuid: $teamUuid) {\n      data {\n        solicitationCode {\n          id\n          name\n          prefix\n          code\n        }\n        members {\n          person {\n            id\n            name\n            linkblue\n          }\n        }\n        fundraisingEntries(\n          page: $page\n          pageSize: $pageSize\n          sortBy: $sortBy\n          sortDirection: $sortDirection\n          dateFilters: $dateFilters\n          oneOfFilters: $oneOfFilters\n          stringFilters: $stringFilters\n          numericFilters: $numericFilters\n        ) {\n          ...FundraisingEntryTableFragment\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query ViewTeamFundraisingDocument(\n    $teamUuid: GlobalId!\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $dateFilters: [FundraisingEntryResolverKeyedDateFilterItem!]\n    $oneOfFilters: [FundraisingEntryResolverKeyedOneOfFilterItem!]\n    $stringFilters: [FundraisingEntryResolverKeyedStringFilterItem!]\n    $numericFilters: [FundraisingEntryResolverKeyedNumericFilterItem!]\n  ) {\n    team(uuid: $teamUuid) {\n      data {\n        solicitationCode {\n          id\n          name\n          prefix\n          code\n        }\n        members {\n          person {\n            id\n            name\n            linkblue\n          }\n        }\n        fundraisingEntries(\n          page: $page\n          pageSize: $pageSize\n          sortBy: $sortBy\n          sortDirection: $sortDirection\n          dateFilters: $dateFilters\n          oneOfFilters: $oneOfFilters\n          stringFilters: $stringFilters\n          numericFilters: $numericFilters\n        ) {\n          ...FundraisingEntryTableFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query SolicitationCodes {\n    solicitationCodes {\n      id\n      prefix\n      code\n      name\n    }\n  }\n"
): (typeof documents)["\n  query SolicitationCodes {\n    solicitationCodes {\n      id\n      prefix\n      code\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation SetTeamSolicitationCode(\n    $teamUuid: GlobalId!\n    $solCodeId: GlobalId!\n  ) {\n    assignSolicitationCodeToTeam(\n      teamId: $teamUuid\n      solicitationCode: $solCodeId\n    )\n  }\n"
): (typeof documents)["\n  mutation SetTeamSolicitationCode(\n    $teamUuid: GlobalId!\n    $solCodeId: GlobalId!\n  ) {\n    assignSolicitationCodeToTeam(\n      teamId: $teamUuid\n      solicitationCode: $solCodeId\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation ClearTeamSolicitationCode($teamUuid: GlobalId!) {\n    removeSolicitationCodeFromTeam(teamId: $teamUuid)\n  }\n"
): (typeof documents)["\n  mutation ClearTeamSolicitationCode($teamUuid: GlobalId!) {\n    removeSolicitationCodeFromTeam(teamId: $teamUuid)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query EditTeamPage($uuid: GlobalId!) {\n    team(uuid: $uuid) {\n      data {\n        ...TeamEditorFragment\n      }\n    }\n  }\n"
): (typeof documents)["\n  query EditTeamPage($uuid: GlobalId!) {\n    team(uuid: $uuid) {\n      data {\n        ...TeamEditorFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query TeamsTable(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $isNullFilters: [TeamResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [TeamResolverKeyedOneOfFilterItem!]\n    $stringFilters: [TeamResolverKeyedStringFilterItem!]\n  ) {\n    teams(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n    ) {\n      ...PaginationFragment\n      data {\n        ...TeamsTableFragment\n      }\n    }\n  }\n"
): (typeof documents)["\n  query TeamsTable(\n    $page: Int\n    $pageSize: Int\n    $sortBy: [String!]\n    $sortDirection: [SortDirection!]\n    $isNullFilters: [TeamResolverKeyedIsNullFilterItem!]\n    $oneOfFilters: [TeamResolverKeyedOneOfFilterItem!]\n    $stringFilters: [TeamResolverKeyedStringFilterItem!]\n  ) {\n    teams(\n      page: $page\n      pageSize: $pageSize\n      sortBy: $sortBy\n      sortDirection: $sortDirection\n      isNullFilters: $isNullFilters\n      oneOfFilters: $oneOfFilters\n      stringFilters: $stringFilters\n    ) {\n      ...PaginationFragment\n      data {\n        ...TeamsTableFragment\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
