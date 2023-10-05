import { graphql } from "@ukdanceblue/common/graphql-client-public";

export const query = graphql(`
  query getPersonEmail($uuid: String!) {
    getPersonByUuid(uuid: $uuid) {
      ok
      clientActions
      data {
        email
      }
    }
  }
`);
