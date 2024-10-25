import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
	mutation UpdateUser($id: ID!, $data: UserInput!) {
		updateUser(id: $id, data: $data) {
			documentId
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
