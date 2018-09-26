import { Contact, IContact } from "../interfaces/contact";
import { groupsList } from "./groups";

export const contactsList: IContact[] = [];
let c: IContact = new Contact();
c.id = Math.random()
  .toString(36)
  .substring(2);
c.firstName = "Jason";
c.lastName = "Statham";
c.email = "transportir@faster.guru";
c.phoneNumber = 380979797963;
c.group = groupsList[1].name;
contactsList.push(c);

c = new Contact();
c.id = Math.random()
  .toString(36)
  .substring(2);
c.firstName = "Dart";
c.lastName = "Wader";
c.email = "star@wars.js";
c.phoneNumber = 380979797963;
c.group = groupsList[0].name;
contactsList.push(c);

c = new Contact();
c.id = Math.random()
  .toString(36)
  .substring(2);
c.firstName = "Jack";
c.lastName = "Sparrow";
c.email = "vere@prat.com";
c.phoneNumber = 380979797963;
c.group = groupsList[1].name;
contactsList.push(c);

c = new Contact();
c.id = Math.random()
  .toString(36)
  .substring(2);
c.firstName = "John";
c.lastName = "Travolta";
c.email = "badass@es.js";
c.phoneNumber = 380979797963;
c.group = groupsList[2].name;
contactsList.push(c);

c = new Contact();
c.id = Math.random()
  .toString(36)
  .substring(2);
c.firstName = "Dominik";
c.lastName = "Torrento";
c.email = "faster@than.konnor";
c.photo = "/imgs/vin.jpg";
c.country = "USA";
c.city = "California";
c.adress = "722 East Kensington Road";
c.state = "LA";
c.phoneNumber = 380979797963;
contactsList.push(c);

c = new Contact();
c.id = Math.random()
  .toString(36)
  .substring(2);
c.firstName = "Jack";
c.lastName = "Sparrow";
c.email = "vere@prat.com";
c.phoneNumber = 380979797963;
c.group = groupsList[1].name;
c.country = "Caribbean isles";
contactsList.push(c);

c = new Contact();
c.id = Math.random()
  .toString(36)
  .substring(2);
c.firstName = "Cap";
c.lastName = "Amerikos";
c.email = "smallBoy@cap.cop";
c.phoneNumber = 380979797963;
c.photo = "/imgs/man.png";
c.group = groupsList[2].name;
contactsList.push(c);

c = new Contact();
c.id = Math.random()
  .toString(36)
  .substring(2);
c.firstName = "Dominik";
c.lastName = "Torrento";
c.email = "faster@than.konnor";
c.phoneNumber = 380979797963;
contactsList.push(c);
