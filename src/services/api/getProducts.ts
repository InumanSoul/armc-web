import client from "../apolloClient";
import { queries } from "../querys"

export const getProducts = async () => {
  try {
    const { data } = await client.query({
      query: queries.GET_PRODUCTS,
    });

    return data.products;
  } catch (err) {
    throw new Error(`Error: ${err instanceof Error ? err.message : err}`);
  }
}