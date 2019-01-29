import * as React from 'react';
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from './ErrorHandlerHOC';

type propsOverride = {
  onChange: (value?: string | number) => void;
  onBlur: (value?: string | number) => void;
  value: string | number;
  className?: string;
  readOnly?: boolean;
};

const DropdownField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <Dropdown
    disabled={props.readOnly}
    label={props.label}
    selectedKey={props.value}
    placeHolder={props.placeholder}
    options={props.customProps && props.customProps.options || []}
    onChanged={(option?: IDropdownOption, index?: number) => {
      if (props.onChange)
        props.onChange(option && option.key);
      if (props.onBlur)
        props.onBlur(option && option.key);
    }}
  />
);

export default ErrorHandlerHOC(DropdownField);
