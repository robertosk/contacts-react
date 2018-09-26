import { IContact } from "./contact";

export interface IGroup {
  id: string;
  name: string;
  contacts: IContact[];
}
export class Group implements IGroup {
  public id: string;
  public name: string;
  public contacts: IContact[];
  constructor() {
    this.id = "";
    this.name = "";
    this.contacts = [];
  }
}
