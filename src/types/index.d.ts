export type User = {
  id: string;
  username: string;
  email: string;
  personalInfo: PersonalInfo;
  motorcycles: {
    model: string;
    model: string;
    year: number;
  }[];
}

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
}

type EmergencyContact = {
  name: string;
  phone: string;
  relationship: string;
}

export interface LoginParams {
	username: string;
	password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface LoginService {
	login(username: string, password: string): Promise<LoginResponse>;
}