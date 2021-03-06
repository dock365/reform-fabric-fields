import * as React from "react";
import { TextField as FabricTextField } from "office-ui-fabric-react/lib/TextField";
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from "./ErrorHandlerHOC";
import { UserPicker, IUser } from "./UserPicker/UserPicker";

type propsOverride = {
  onChange: (value?: number | number[] | null) => void;
  onBlur: (value?: number | number[] | null) => void;
  value?: number | number[];
  className?: string;
  readOnly?: boolean;
  defaultValueIsUpdatable?: boolean;
  customProps?: {
    suggestionsHeaderText?: string;
    users?: any;
    searchUsers?: any;
    getUserById?: number;
    itemLimit?: number;
  }
};

const UserPickerField: React.SFC<IFieldRenderProps & propsOverride> = props => {
  return (
    <div>
      {props.label && (
        <label htmlFor="" style={{ padding: "5px 0", display: "block" }}>
          {props.label}
        </label>
      )}
      <UserPicker
        readOnly={props.readOnly}
        values={
          Array.isArray(props.value)
            ? props.value
            : props.value !== undefined
              ? [props.value]
              : undefined
        }
        onSelect={(users?: IUser[] | null) => {
          let ids: number | number[] =
            (users && users.length > 0 && users.map(user => user.Id)) || [];
          ids =
            props.customProps && props.customProps.itemLimit === 1
              ? ids[0]
              : ids;
          if (props.onChange) props.onChange(ids || null);
          if (props.onBlur) props.onBlur(ids || null);
        }}
        users={props.customProps && props.customProps.users}
        searchUsers={props.customProps && props.customProps.searchUsers}
        getUserById={props.customProps && props.customProps.getUserById}
        itemLimit={props.customProps && props.customProps.itemLimit}
        suggestionsHeaderText={props.customProps && props.customProps.suggestionsHeaderText}
      />
    </div>
  );
};

export default ErrorHandlerHOC(UserPickerField);
