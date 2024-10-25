export type User = {
	documentId: string;
	username: string;
	email: string;
	joinedDate: string;
	personalInfo: {
		firstName: string;
		lastName: string;
		idNumber: string;
		dateOfBirth: string;
		bio: string;
	};
	emergencyContact:{
		name: string;
		phone: string;
		relationship: string;
	};
	motorcycles: {
		documentId: string;
		brand: string;
    model: string;
		color: string;
		engineCapacity: number;
		year: string;
		vin: string;
	}[];
};

export type PersonalInfo = {
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	idNumber: string;
	emergencyContact: EmergencyContact;
	address: string;
	phone: string;
	joinedDate: string;
	bio: string;
};

type EmergencyContact = {
	name: string;
	phone: string;
	relationship: string;
};

export interface LoginParams {
	identifier: string;
	password: string;
}

export interface LoginResponse {
	jwt: string;
	user: {
		username: string;
		email: string;
		documentId: string;
	};
}

export type Categories = {
  name: string;
}

export type Product = {
  documentId: string;
  name: string;
	description: string;
	photos: {
		previewUrl: string;
	}
  price: number;
  slug: string;
  categories: Categories[];
}

export type EventProp = {
	documentId: string;
	title: string;
	description: string;
	slug: string;
	date: string;
	image: {
		previewUrl: string;
	}

}

export interface LoginService {
	login(identifier: string, password: string): Promise<LoginResponse>;
}
