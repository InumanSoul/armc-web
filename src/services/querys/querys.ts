import { gql } from '@apollo/client';

export const GET_USERS = gql`
	query GetUsers {
		usersPermissionsUsers {
			documentId
			username
			email
			joinedDate
			personalInfo {
				firstName
				lastName
				idNumber
				dateOfBirth
				bloodType
				address
				phone
				bio
			}
			emergencyContact {
				name
				phone
				relationship
			}
		}
	}
`;

export const GET_USER = gql`
	query GetUser($username: String!) {
		usersPermissionsUsers(filters:{ username: { eq: $username }}) {
			documentId
			username
			email
			joinedDate
			personalInfo {
				firstName
				lastName
				idNumber
				dateOfBirth
				bloodType
				address
				phone
				bio
			}
			motorcycles {
				documentId
				brand
				model
				color
				engineCapacity
				year
				vin
			}
		}
	}
`;

export const GET_EVENTS = gql`
	query GetEvents {
		events {
			documentId
			title
			description
			slug
			date
			image {
				previewUrl
			}
		}
	}
`;

export const GET_PRODUCTS = gql`
	query GetProducts {
		products {
			documentId
			name
			price
			slug
			description
			photos {
				url
			}
			categories {
				name
			}
		}
	}
`;

export const GET_SINGLE_PRODUCT = gql`
	query GetSingleProduct($id: ID!) {
		product(id: $id) {
			documentId
			name
			price
			slug
			description
			photos {
				url
			}
			categories {
				name
			}
		}
	}
`;

export const GET_MOTORCYCLES = gql`
	query GetMotorcycles {
		motorcycles {
			documentId
			brand
			model
			color
			engineCapacity
			year
			vin
			users_permissions_user {
				documentId
				personalInfo {
					firstName
				}
			}
		}
	}
`;

export const GET_SINGLE_MOTORCYCLE = gql`
	query GetMotorcycles($username: ID!) {
		motorcycles(filters: { users_permissions_user: { username: { eq: $username } } }) {
			documentId
			brand
			model
			color
			engineCapacity
			year
			vin
			users_permissions_user {
				documentId
				personalInfo {
					firstName
				}
			}
		}
	}
`;