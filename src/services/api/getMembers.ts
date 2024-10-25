import { User } from "../../types";
import client from "../apolloClient";
import { queries } from "../querys";

export const getUsers = async () => {
  try {
    const { data } = await client.query({
      query: queries.GET_USERS,
    });
    
    return data.usersPermissionsUsers;
  } catch (err) {
    throw new Error(`Error: ${err instanceof Error ? err.message : err}`);
  }
}

export const getUser = async (username: string) => {
  try {
    const { data } = await client.query({
      query: queries.GET_USER,
      variables: { username },
    });

    return data.usersPermissionsUsers[0];
  } catch (err) {
    throw new Error(`Error: ${err instanceof Error ? err.message : err}`);
  }
}

export const updateUser = async (id: string, userData: User) => {
  try {
    const { data } = await client.mutate({
      mutation: queries.UPDATE_USER,
      variables: { id, userData },
    })

    return data.updateUser;
  } catch (err) {
    throw new Error(`Error: ${err instanceof Error ? err.message : err}`);
  }
}