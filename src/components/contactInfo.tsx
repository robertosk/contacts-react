import * as React from "react";
import { Fragment } from "react";
import {
  WithStyles,
  createStyles,
  Theme,
  Avatar,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  TextField,
  Button,
  withStyles,
  InputLabel,
  FormControl,
  Select
} from "@material-ui/core";
import { IContact } from "../interfaces/index";
import { indigo } from "@material-ui/core/colors";
import MoreIcon from "@material-ui/icons/MoreVert";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import CityIcon from "@material-ui/icons/LocationCity";
import LanguageIcon from "@material-ui/icons/Language";
import { groupsList } from "../strore/groups";

const classes = (theme: Theme) =>
  createStyles({
    card: {
      background: 0,
      padding: 0,
      borderRadius: 0,
      border: 0,
      color: "#c5cae9",
      width: "100%",
      height: "100%"
    },
    cardHeader: {
      color: "#c5cae9"
    },
    avatar: {
      width: 70,
      height: 70,
      backgroundColor: indigo[200]
    },
    title: {
      color: "inherit",
      fontSize: 24
    },
    subheader: {
      color: "inherit",
      fontSize: 18
    },
    listItem: {
      padding: "12px 0",
      color: "#c5cae9"
    },
    listItemIcon: {
      marginRight: 0,
      color: "inherit"
    },
    listItemText: {
      color: "inherit"
    },
    button: {
      margin: theme.spacing.unit
    },
    formInput: {
      color: "inherit",
      fontSize: 18,
      "&:after": {
        borderBottomColor: theme.palette.secondary[500]
      }
    },
    formLabelRoot: {
      "&$formLabelFocused": { color: theme.palette.secondary[500] }
    },
    formLabelFocused: {}
  });

export interface IProps extends WithStyles<typeof classes> {
  contact: IContact;
  onDeleteContact: (c: IContact) => void;
  saveContact: (c: IContact) => void;
}

export interface IState {
  contact: IContact;
  anchorEl: any;
  inEditState: boolean;
}

class ContactInfo extends React.Component<IProps, IState> {
  state = {
    contact: this.props.contact,
    anchorEl: null,
    inEditState: false
  };
  componentWillReceiveProps = (newProps: IProps) => {
    this.setState({ contact: newProps.contact });
  };
  handleContactMenuClick = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleCloseContactMenuClick = () => {
    this.setState({ anchorEl: null });
  };
  handleRemoveContactMenuClick = () => {
    this.props.onDeleteContact(this.state.contact);
    this.setState({ anchorEl: null });
  };
  handleEditContactMenuClick = () => {
    this.setState({
      inEditState: true,
      anchorEl: null
    });
  };
  handleCloseEditContactMenuClick = () => {
    this.setState({ inEditState: false });
  };
  handleChange = (e: any) => {
    const contact: IContact = this.state.contact;
    const field: string = e.target.name;
    contact[field] = e.target.value;
    this.setState({ contact });
  };
  handleSubmit = () => {
    this.setState({ inEditState: false });
    this.props.saveContact(this.state.contact);
  };
  render() {
    const { contact, anchorEl } = this.state;
    return (
      <Fragment>
        {this.props.contact.id !== "" ? (
          <Card className={this.props.classes.card}>
            <CardHeader
              classes={{
                title: this.props.classes.title,
                subheader: this.props.classes.subheader
              }}
              avatar={
                contact.photo !== "" ? (
                  <Avatar
                    aria-label={this.contactFullName()}
                    src={contact.photo}
                    className={this.props.classes.avatar}
                  />
                ) : (
                  <Avatar
                    aria-label={this.contactFullName()}
                    className={this.props.classes.avatar}
                  >
                    {this.contactInitials()}
                  </Avatar>
                )
              }
              action={
                <Fragment>
                  <IconButton
                    aria-owns={anchorEl ? "contact-menu" : ""}
                    aria-haspopup="true"
                    onClick={this.handleContactMenuClick}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                  <Menu
                    id="contact-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleCloseContactMenuClick}
                  >
                    <MenuItem onClick={this.handleEditContactMenuClick}>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={this.handleRemoveContactMenuClick}>
                      Remove
                    </MenuItem>
                  </Menu>
                </Fragment>
              }
              title={this.contactFullName()}
              subheader={contact.email}
            />
            <CardContent>
              {!this.state.inEditState ? (
                <Fragment>
                  <Typography variant="subheading" color="inherit">
                    Contact info
                  </Typography>
                  <List>
                    {contact.phoneNumber !== 0 ? (
                      <ListItem className={this.props.classes.listItem}>
                        <ListItemIcon
                          className={this.props.classes.listItemIcon}
                        >
                          <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText
                          className={this.props.classes.listItemText}
                        >
                          <Typography variant="title" color="inherit">
                            {contact.phoneNumber}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ) : null}
                    {contact.email !== "" ? (
                      <ListItem className={this.props.classes.listItem}>
                        <ListItemIcon
                          className={this.props.classes.listItemIcon}
                        >
                          <EmailIcon />
                        </ListItemIcon>
                        <ListItemText
                          className={this.props.classes.listItemText}
                        >
                          <Typography variant="title" color="inherit">
                            {contact.email}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ) : null}
                    {contact.country !== "" ? (
                      <ListItem className={this.props.classes.listItem}>
                        <ListItemIcon
                          className={this.props.classes.listItemIcon}
                        >
                          <LanguageIcon />
                        </ListItemIcon>
                        <ListItemText
                          className={this.props.classes.listItemText}
                        >
                          <Typography variant="title" color="inherit">
                            {contact.country}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ) : null}
                    {contact.city !== "" ? (
                      <ListItem className={this.props.classes.listItem}>
                        <ListItemIcon
                          className={this.props.classes.listItemIcon}
                        >
                          <CityIcon />
                        </ListItemIcon>
                        <ListItemText
                          className={this.props.classes.listItemText}
                        >
                          <Typography variant="title" color="inherit">
                            {contact.city}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ) : null}
                    {contact.state !== "" ? (
                      <ListItem className={this.props.classes.listItem}>
                        <ListItemIcon
                          className={this.props.classes.listItemIcon}
                        >
                          <CityIcon />
                        </ListItemIcon>
                        <ListItemText
                          className={this.props.classes.listItemText}
                        >
                          <Typography variant="title" color="inherit">
                            {contact.state}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ) : null}
                    {contact.adress !== "" ? (
                      <ListItem className={this.props.classes.listItem}>
                        <ListItemIcon
                          className={this.props.classes.listItemIcon}
                        >
                          <CityIcon />
                        </ListItemIcon>
                        <ListItemText
                          className={this.props.classes.listItemText}
                        >
                          <Typography variant="title" color="inherit">
                            {contact.adress}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ) : null}
                  </List>
                </Fragment>
              ) : (
                <Fragment>
                  <Typography variant="subheading" color="inherit">
                    Edit contact's info
                  </Typography>
                  <TextField
                    type="text"
                    name="firstName"
                    // margin="dense"
                    label="First name"
                    value={this.state.contact.firstName}
                    InputProps={{ className: this.props.classes.formInput }}
                    InputLabelProps={{
                      FormLabelClasses: {
                        root: this.props.classes.formLabelRoot,
                        focused: this.props.classes.formLabelFocused
                      }
                    }}
                    onChange={e => this.handleChange(e)}
                  />
                  <TextField
                    type="text"
                    name="lastName"
                    margin="dense"
                    label="Last name"
                    value={this.state.contact.lastName}
                    InputProps={{ className: this.props.classes.formInput }}
                    InputLabelProps={{
                      FormLabelClasses: {
                        root: this.props.classes.formLabelRoot,
                        focused: this.props.classes.formLabelFocused
                      }
                    }}
                    onChange={e => this.handleChange(e)}
                  />
                  <TextField
                    type="email"
                    name="email"
                    fullWidth={true}
                    margin="dense"
                    label="Email"
                    value={this.state.contact.email}
                    InputProps={{ className: this.props.classes.formInput }}
                    InputLabelProps={{
                      FormLabelClasses: {
                        root: this.props.classes.formLabelRoot,
                        focused: this.props.classes.formLabelFocused
                      }
                    }}
                    onChange={e => this.handleChange(e)}
                  />
                  <TextField
                    type="text"
                    name="phoneNumber"
                    fullWidth={true}
                    margin="dense"
                    label="Phone number"
                    value={this.state.contact.phoneNumber}
                    InputProps={{ className: this.props.classes.formInput }}
                    InputLabelProps={{
                      FormLabelClasses: {
                        root: this.props.classes.formLabelRoot,
                        focused: this.props.classes.formLabelFocused
                      }
                    }}
                    onChange={e => this.handleChange(e)}
                  />

                  <FormControl fullWidth>
                    <InputLabel htmlFor="group-select">Group</InputLabel>
                    <Select
                      className={this.props.classes.formInput}
                      value={this.state.contact.group}
                      onChange={this.handleChange}
                      inputProps={{
                        name: "group",
                        id: "group-select"
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {groupsList.map(g => {
                        return (
                          <MenuItem key={g.id} value={g.name}>
                            {g.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  <Button
                    className={this.props.classes.button}
                    variant="contained"
                    onClick={this.handleCloseEditContactMenuClick}
                  >
                    Close
                  </Button>
                  <Button
                    className={this.props.classes.button}
                    variant="contained"
                    color="secondary"
                    onClick={this.handleSubmit}
                  >
                    Save
                  </Button>
                </Fragment>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card className={this.props.classes.card}>
            <CardContent>
              <Typography variant="display1" color="inherit">
                Welcome!
              </Typography>
              <Typography variant="subheading" color="inherit">
                Please select contact to view info.
              </Typography>
            </CardContent>
          </Card>
        )}
      </Fragment>
    );
  }
  contactFullName = (): string => {
    return `${this.state.contact.firstName}  ${this.state.contact.lastName}`;
  };
  contactInitials = (): string => {
    return `${this.state.contact.firstName.slice(
      0,
      1
    )}${this.state.contact.lastName.slice(0, 1)}`;
  };
}

export default withStyles(classes)(ContactInfo);
