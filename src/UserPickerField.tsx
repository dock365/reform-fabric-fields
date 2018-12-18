import * as React from "react";
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField';
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from "./ErrorHandlerHOC";
import { UserPicker, IUser } from "./UserPicker/UserPicker";

type propsOverride = {
  onChange: (value?: number) => void;
  onBlur: (value?: number) => void;
  value?: number;
};

const UserPickerField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <div>
    <label htmlFor="">{props.label}</label>
    <UserPicker
      value={props.value}
      onSelect={(user?: IUser) => {
        if (props.onChange)
          props.onChange(user && user.Id);
        if (props.onBlur)
          props.onBlur(user && user.Id);
      }}
      users={props.customProps.users}
      searchUsers={props.customProps.searchUsers}
      getUserById={props.customProps.getUserById}
    />
  </div>
);

export default ErrorHandlerHOC(UserPickerField);
