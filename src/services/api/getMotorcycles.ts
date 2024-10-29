import { Motorcycle, MotorcycleResponse } from '../../types';
import client from '../apolloClient';
import { queries } from '../querys';

function formatMotorcycle(motorcycle: MotorcycleResponse): Motorcycle {
  return {
    documentId: motorcycle.documentId,
    owner: {
      name: motorcycle.users_permissions_user.personalInfo.firstName,
      documentId: motorcycle.users_permissions_user.documentId,
    },
    brand: motorcycle.brand,
    model: motorcycle.model,
    engineCapacity: motorcycle.engineCapacity,
    color: motorcycle.color,
    year: motorcycle.year,
    vin: motorcycle.vin,
  };
}

export const getMotorcycles = async () => {
	try {
		const { data } = await client.query({
			query: queries.GET_MOTORCYCLES,
		});

		const formattedData: Motorcycle[] = [];
		data.motorcycles.forEach((motorcycle: MotorcycleResponse) => {
			formattedData.push(formatMotorcycle(motorcycle));
		});

		return formattedData;
	} catch (err) {
		throw new Error(`Error: ${err instanceof Error ? err.message : err}`);
	}
};

export const getMotorcycle = async (username: string) => {
  try {
    const { data } = await client.query({
      query: queries.GET_SINGLE_MOTORCYCLE,
      variables: {
        username,
      },
    });

    const formattedData: Motorcycle = formatMotorcycle(data.motorcycle);

    return formattedData;
  } catch (err) {
    throw new Error(`Error: ${err instanceof Error ? err.message : err}`);
  }
}