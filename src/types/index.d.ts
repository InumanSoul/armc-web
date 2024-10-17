export type User = {
  id: string;
  username: string;
  email: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    age: number;
  };
  motorcycles: {
    make: string;
    model: string;
    year: number;
  }[];
}