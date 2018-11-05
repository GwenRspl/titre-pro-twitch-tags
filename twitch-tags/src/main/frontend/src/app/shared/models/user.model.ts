export class User {
  id: number;
	username: string;
	email: string;
	password: string;
	role: string;


  constructor(pseudo: string, email: string, password: string) {
    this.username = pseudo;
    this.email = email;
    this.password = password;
    this.role = "STANDARD_USER";
  }
}
