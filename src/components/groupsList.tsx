import * as React from "react";
import { Group, IGroup } from "../interfaces";
import { Theme, createStyles, WithStyles, withStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GroupIcon from "@material-ui/icons/Group";

const classes = (theme: Theme) =>
  createStyles({
    a: {
      color: "#fff",
      backgroundColor: theme.palette.action.selected
    }
  });

export interface IProps extends WithStyles<typeof classes> {
  groups: IGroup[];
  onSelectGroup: (g?: IGroup) => void;
}

export interface IState {
  groups: IGroup[];
  selectedGroup: IGroup;
  allSelected: IGroup;
}

class GroupsList extends React.Component<IProps, IState> {
  state = {
    groups: this.props.groups,
    selectedGroup: new Group(),
    allSelected: new Group()
  };
  handleSelect = (g: IGroup) => {
    this.props.onSelectGroup(g);
    this.setState({ selectedGroup: g });
  };
  componentWillMount = () => {
    const allSelected: IGroup = new Group();
    allSelected.id = Math.random()
      .toString(36)
      .substring(2);
    allSelected.name = "All";
    allSelected.contacts = this.state.allSelected.contacts;
    this.setState({
      allSelected
    });
  };
  render() {
    const all: IGroup = this.state.allSelected;
    const { selectedGroup } = this.state;
    return (
      <div>
        <ListItem
          button
          key={all.id}
          selected={selectedGroup.id === all.id || selectedGroup.id === ""}
          onClick={() => this.handleSelect(all)}
        >
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary={all.name} />
        </ListItem>
        {this.state.groups.map(g => {
          return (
            <ListItem
              button
              key={g.id}
              selected={this.state.selectedGroup.id === g.id}
              onClick={() => this.handleSelect(g)}
            >
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary={g.name} />
            </ListItem>
          );
        })}
      </div>
    );
  }
}

export default withStyles(classes)(GroupsList);
