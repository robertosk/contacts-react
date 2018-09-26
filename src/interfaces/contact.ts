export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  photo: string;
  adress: string;
  city: string;
  state: string;
  country: string;
  group: string;
}
export class Contact implements IContact {
  public id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: number;
  public photo: string;
  public adress: string;
  public city: string;
  public state: string;
  public country: string;
  public group: string;
  constructor() {
    this.id = "";
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.phoneNumber = 0;
    this.photo = "";
    this.adress = "";
    this.city = "";
    this.state = "";
    this.country = "";
    this.group = "";
  }
}
