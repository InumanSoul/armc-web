import client from "../apolloClient"
import { queries } from "../querys"

export const getEvents = async () => {
  try {
    const { data } = await client.query({
      query: queries.GET_EVENTS,
    })
    
    return data.events
  } catch (err) {
    throw new Error(`Error: ${err instanceof Error ? err.message : err}`)
  }
}