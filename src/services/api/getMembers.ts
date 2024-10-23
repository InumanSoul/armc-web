import client from "../apolloClient";
import { GET_USERS, GET_USER } from "../querys";

export const getUsers = async () => {
  try {
    const { data } = await client.query({
      query: GET_USERS,
    });
    
    return data.getUsers;
  } catch (err) {
    throw new Error(`Error: ${err instanceof Error ? err.message : err}`);
  }
}

export const getUser = async (id: string) => {
  try {
    const { data } = await client.query({
      query:GET_USER,
      variables: { id },
    });

    return data.getUser;
  } catch (err) {
    throw new Error(`Error: ${err instanceof Error ? err.message : err}`);
  }
}