import { gql } from '@apollo/client';

export const GET_USERS = gql`
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

export const GET_USER = gql`
	query GetUser($id: ID!) {
		getUser(id: $id) {
			id
			username
			email
			personalInfo {
				firstName
				lastName
				dateOfBirth
        idNumber
				bio
        emergencyContact {
          name
          phone
          relationship
        }
			}
			motorcycles {
				brand
				model
				year
			}
		}
	}
`;