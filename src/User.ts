export class User {

  private name: string;
  private lastname: string;

  constructor(name: string, lastname: string) {
    this.name = name;
    this.lastname = lastname;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setLastName(lastname: string) {
    this.lastname = lastname;
  }

  public getName() {
    return this.name;
  }

  public getLastName() {
    return this.lastname;
  }

}