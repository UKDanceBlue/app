/* eslint-disable */
import * as types from './graphql.js';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n      query ListEvents(\n        $page: Int\n        $pageSize: Int\n        $sortBy: [String!]\n        $sortDirection: [SortDirection!]\n        $dateFilters: [EventResolverKeyedDateFilterItem!]\n        $isNullFilters: [EventResolverKeyedIsNullFilterItem!]\n        $numericFilters: [EventResolverKeyedNumericFilterItem!]\n        $oneOfFilters: [EventResolverKeyedOneOfFilterItem!]\n        $stringFilters: [EventResolverKeyedStringFilterItem!]\n      ) {\n        listEvents(\n          page: $page\n          pageSize: $pageSize\n          sortBy: $sortBy\n          sortDirection: $sortDirection\n          dateFilters: $dateFilters\n          isNullFilters: $isNullFilters\n          numericFilters: $numericFilters\n          oneOfFilters: $oneOfFilters\n          stringFilters: $stringFilters\n        ) {\n          ok\n          data {\n            eventId\n            title\n            description\n            duration\n            occurrences\n            summary\n            images {\n              url\n              width\n              height\n              imageId\n            }\n          }\n          page\n          pageSize\n          total\n        }\n      }\n    ": types.ListEventsDocument,
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
export function graphql(source: "\n      query ListEvents(\n        $page: Int\n        $pageSize: Int\n        $sortBy: [String!]\n        $sortDirection: [SortDirection!]\n        $dateFilters: [EventResolverKeyedDateFilterItem!]\n        $isNullFilters: [EventResolverKeyedIsNullFilterItem!]\n        $numericFilters: [EventResolverKeyedNumericFilterItem!]\n        $oneOfFilters: [EventResolverKeyedOneOfFilterItem!]\n        $stringFilters: [EventResolverKeyedStringFilterItem!]\n      ) {\n        listEvents(\n          page: $page\n          pageSize: $pageSize\n          sortBy: $sortBy\n          sortDirection: $sortDirection\n          dateFilters: $dateFilters\n          isNullFilters: $isNullFilters\n          numericFilters: $numericFilters\n          oneOfFilters: $oneOfFilters\n          stringFilters: $stringFilters\n        ) {\n          ok\n          data {\n            eventId\n            title\n            description\n            duration\n            occurrences\n            summary\n            images {\n              url\n              width\n              height\n              imageId\n            }\n          }\n          page\n          pageSize\n          total\n        }\n      }\n    "): (typeof documents)["\n      query ListEvents(\n        $page: Int\n        $pageSize: Int\n        $sortBy: [String!]\n        $sortDirection: [SortDirection!]\n        $dateFilters: [EventResolverKeyedDateFilterItem!]\n        $isNullFilters: [EventResolverKeyedIsNullFilterItem!]\n        $numericFilters: [EventResolverKeyedNumericFilterItem!]\n        $oneOfFilters: [EventResolverKeyedOneOfFilterItem!]\n        $stringFilters: [EventResolverKeyedStringFilterItem!]\n      ) {\n        listEvents(\n          page: $page\n          pageSize: $pageSize\n          sortBy: $sortBy\n          sortDirection: $sortDirection\n          dateFilters: $dateFilters\n          isNullFilters: $isNullFilters\n          numericFilters: $numericFilters\n          oneOfFilters: $oneOfFilters\n          stringFilters: $stringFilters\n        ) {\n          ok\n          data {\n            eventId\n            title\n            description\n            duration\n            occurrences\n            summary\n            images {\n              url\n              width\n              height\n              imageId\n            }\n          }\n          page\n          pageSize\n          total\n        }\n      }\n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;