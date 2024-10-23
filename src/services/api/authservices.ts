import { gql } from "@apollo/client";
import client from "../apolloClient";

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const login = async (username: string, password: string) => {
  try {
    const { data } = await client.mutate({
      mutation: LOGIN_MUTATION,
      variables: { username, password },
    });
    
    return data.login;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
}