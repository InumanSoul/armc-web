import { gql } from "@apollo/client";
import client from "../apolloClient";

const QUERY_USERS = gql`
  query GetUsers {
    getUsers {
      id
      username
      email
      personalInfo {
        firstName
        lastName
        dateOfBirth
        idNumber
        emergencyContact {
          name
          phone
          relationship
        }
        address
        phone
        joinedDate
        bio
      }
      motorcycles {
        brand
        model
        year
      }
  }
}
`;

export const getUsers = async () => {
  try {
    const { data } = await client.query({
      query: QUERY_USERS,
    });
    
    return data.getUsers;
  } catch (err) {
    throw new Error(`Error: ${err instanceof Error ? err.message : err}`);
  }
}