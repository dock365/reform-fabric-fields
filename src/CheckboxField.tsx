import * as React from "react";
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from "./ErrorHandlerHOC";

type propsOverride = {
  value: boolean;
  className: string;
};

const CheckboxField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <Checkbox
    label={props.label}
    checked={props.value}
    onChange={(e, checked) => {
      if (props.onChange)
        props.onChange(checked || false);
      if (props.onBlur)
        props.onBlur(checked || false);
    }}
  />
);

export default ErrorHandlerHOC(CheckboxField);
