export class User {
  private username = '';
  private password = '';
  private id = '';

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
  getUserName() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }

  setId(id: string) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
}
