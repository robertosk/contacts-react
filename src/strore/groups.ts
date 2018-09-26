import { Group, IGroup } from "../interfaces";
export const groupsList: IGroup[] = [];
let g: IGroup = new Group();
g.id = Math.random()
  .toString(36)
  .substring(2);
g.name = "Family";
groupsList.push(g);

g = new Group();
g.id = Math.random()
  .toString(36)
  .substring(2);
g.name = "Work";
groupsList.push(g);

g = new Group();
g.id = Math.random()
  .toString(36)
  .substring(2);
g.name = "Friends";
groupsList.push(g);
