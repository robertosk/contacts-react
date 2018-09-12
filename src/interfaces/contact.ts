export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
}
export class Contact implements IContact {
  public id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: number;
  constructor() {
    this.id = Math.random()
      .toString(36)
      .substring(2);
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.phoneNumber = 0;
  }
}
