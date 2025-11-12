export class Person {
  constructor(firstName, lastName, email, gender, picture, dni) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.picture = picture;
    this.dni = dni;
  }

  fullName() {
    return `${this.lastName}, ${this.firstName}`;
  }
}
