import { gql } from "@apollo/client";
import client from "../apolloClient";

const LOGIN_MUTATION = gql`
  mutation Login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        username
        email
      }
    }
  }
`;

export const login = async (identifier: string, password: string) => {
  try {
    const { data } = await client.mutate({
      mutation: LOGIN_MUTATION,
      variables: { identifier, password },
    });
    
    return data.login;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
}