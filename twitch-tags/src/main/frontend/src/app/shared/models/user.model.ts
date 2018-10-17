export class User {
  id: number;
	username: string;
	email: string;
	password: string;
	admin: string;


  constructor(pseudo: string, email: string, password: string) {
    this.username = pseudo;
    this.email = email;
    this.password = password;
    this.admin = "STANDARD_USER";
  }
}
