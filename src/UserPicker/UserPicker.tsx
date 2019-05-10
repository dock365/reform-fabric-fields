/* tslint:disable */
import * as React from "react";
/* tslint:enable */

import {
  IPersonaSharedProps,
  IPersonaProps,
} from "office-ui-fabric-react/lib/Persona";
import {
  IBasePickerSuggestionsProps,
  NormalPeoplePicker,
} from "office-ui-fabric-react/lib/Pickers";
import { IUserPickerProps } from "./IUserPickerProps";
import { IUserPickerState } from "./IUserPickerState";
import { number } from "prop-types";
// import { IUser, spSearchUsers, getUserById } from '../../../spAPIs/users';

export interface IUser {
  Title: string;
  Id: number;
  Email?: string;
  LoginName?: string;
  Designation?: string;
}

export class UserPicker extends React.Component<
  IUserPickerProps,
  IUserPickerState
  > {
  constructor(props: IUserPickerProps) {
    super(props);

    this.state = {
      selectedUsers: [],
    };
    // this._onSelected = this._onSelected.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  public componentDidMount() {
    if (this.props.values) {
      this._setSelectedUser(this.props.values);
    }
  }

  public componentDidUpdate(
    prevProps: IUserPickerProps,
    prevState: IUserPickerState,
  ) {
    // if (
    //   (prevProps.values === undefined &&
    //     this.props.values &&
    //     this.props.values.length > 0 &&
    //     this.state.selectedUsers.length === 0) ||
    //   (prevProps.values !== this.props.values &&
    //     !(
    //       prevProps.values &&
    //       this.props.values &&
    //       prevProps.values.length === this.props.values.length &&
    //       this.state.selectedUsers.every(
    //         (user: IPersonaProps & { Id?: number }) =>
    //           value.some(id => id === user["Id"])
    //       )
    //     ))
    // ) {
    //   this._setSelectedUser(this.props.values, true);
    // }
    const values = this.props.values || [];
    const prevValues = prevProps.values || [];

    const usersNotChanged =
      prevValues.length === values.length &&
      this.state.selectedUsers.every((user: IPersonaProps & { Id?: number }) =>
        values.some(id => id === user["Id"]),
      );

    if (!usersNotChanged) {
      this._setSelectedUser(values);
    }

    // if (this.props.values)
    //   if (
    //     this.props.defaultValueIsUpdatable &&
    //     this.props.defaultValue !== prevProps.defaultValue
    //   ) {
    //     this._setSelectedUser(this.props.defaultValue, true);
    //   }
  }

  public render(): JSX.Element {
    const suggestionProps: IBasePickerSuggestionsProps = {
      suggestionsHeaderText: this.props.suggestionsHeaderText || "Suggested People",
      mostRecentlyUsedHeaderText: "Suggested Contacts",
      noResultsFoundText: "No results found",
      loadingText: "Loading",
      showRemoveButtons: false,
      suggestionsAvailableAlertText: "People Picker Suggestions available",
      suggestionsContainerAriaLabel: "Suggested contacts",
    };

    return (
      <NormalPeoplePicker
        disabled={this.props.readOnly}
        onResolveSuggestions={this._onFilterChanged}
        onChange={this._onChange}
        pickerSuggestionsProps={suggestionProps}
        selectedItems={this.state.selectedUsers}
        itemLimit={this.props.itemLimit}
        resolveDelay={500}
      />
    );
  }

  private async _setSelectedUser(userIds?: number[]) {
    if (userIds) {
      if (this.props.users && this.props.users.length > 0) {
        const selectedUsers: any[] = [];
        for (const id of userIds) {
          const user =
            this.props.users && this.props.users.find(user => user.Id === id);
          if (user && selectedUsers.every(_user => _user.Id !== user.Id))
            selectedUsers.push(this._transformToPersona(user));
        }

        this.setState({ selectedUsers });
      } else if (this.props.getUserById) {
        const selectedUsers: any[] = [];

        for (const id of userIds) {
          const user = await this.props.getUserById(id);
          if (user && selectedUsers.every(_user => _user.Id !== user.Id))
            selectedUsers.push(this._transformToPersona(user));
        }
        this.setState({ selectedUsers });
      }
    } else {
      this.setState({ selectedUsers: [] });
    }
  }

  // private _onSelected(persona?: IPersonaSharedProps): any {
  //   // this.props.onSelect(person, this.props.field, this.props.taskId);
  //   this._setSelectedUser([this._transformFromPersona(persona)]);

  //   return persona;
  // }

  private _onChange(personas?: IPersonaSharedProps[]) {
    // const prevUser = this.state.selectedUser.length > 0 ? { ...this.state.selectedUser[0] } : {};
    if (this.props.readOnly) return;
    if (personas && personas.length > 0) {
      const users = personas.map(persona =>
        this._transformFromPersona(persona),
      );
      // this._setSelectedUser(users);

      this.props.onSelect(users);
    } else {
      // this._setSelectedUser();
      this.props.onSelect([]);
    }
    this.setState({
      selectedUsers: personas || [],
    });
  }

  private _onFilterChanged = (
    filterText: string,
  ): IPersonaSharedProps[] | Promise<IPersonaSharedProps[]> => {
    if (filterText) {
      //WARNING: Using ajax promise. didnt find any way to use redux.
      return new Promise((resolve, reject) => {
        if (this.props.users && this.props.users.length >= 0) {
          resolve(
            this.props.users
              .filter(
                user =>
                  user.Title.toLowerCase()
                    .indexOf(filterText.toLowerCase()) >=
                  0 &&
                  this.state.selectedUsers.every(
                    (persona?: IPersonaSharedProps & { Id: number } & any) =>
                      persona.Id !== user.Id,
                  ),
              )
              .map(user => this._transformToPersona(user)),
          );
        } else if (this.props.searchUsers) {
          this.props
            .searchUsers(filterText)
            .then((users: IUser[]) => {
              resolve(
                users
                  .filter(user =>
                    this.state.selectedUsers.every(
                      (persona?: IPersonaSharedProps & { Id: number } & any) =>
                        persona.Id !== user.Id,
                    ),
                  )
                  .map(user => this._transformToPersona(user)),
              );
            })
            .catch((err: any) => {
              reject(err);
            });
        }
      });
    } else {
      return [];
    }
  }

  private _transformToPersona(
    user: IUser,
  ): IPersonaSharedProps & { Id: number } & any {
    return {
      text: user.Title,
      Id: user.Id,
      ...user,
    };
  }

  private _transformFromPersona(
    user: IPersonaSharedProps & { Id: number } & any,
  ): IUser {
    return {
      Id: user.Id,
      Designation: user.Designation,
      Email: user.Email,
      LoginName: user.LoginName,
      Title: user.Title,
    };
  }
}
