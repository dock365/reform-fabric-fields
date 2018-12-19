import * as React from "react";
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField';
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from "./ErrorHandlerHOC";
import { UserPicker, IUser } from "./UserPicker/UserPicker";

type propsOverride = {
  onChange: (value?: number | null) => void;
  onBlur: (value?: number | null) => void;
  value?: number;
};

const UserPickerField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <div>
    {props.label && <label htmlFor="" style={{padding: "5px 0", display: "block"}}>{props.label}</label>}
    <UserPicker
      value={props.value}
      onSelect={(user?: IUser | null) => {
        if (props.onChange)
          props.onChange(user && user.Id);
        if (props.onBlur)
          props.onBlur(user && user.Id);
      }}
      users={props.customProps && props.customProps.users}
      searchUsers={props.customProps && props.customProps.searchUsers}
      getUserById={props.customProps && props.customProps.getUserById}
    />
  </div>
);

export default ErrorHandlerHOC(UserPickerField);
