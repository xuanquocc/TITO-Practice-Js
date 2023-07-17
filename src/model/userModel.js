import getRandomId from "../helper/uuid";

class User {
  constructor(
    { id = getRandomId(), name, age, location, phone, gpa, check } = {
      check: false,
    },
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.location = location;
    this.phone = phone;
    this.gpa = gpa;
    this.check = check;
  }
}

export default User;
