import * as React from "react";
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from "./ErrorHandlerHOC";

type propsOverride = {
  onChange: (checked: boolean) => void;
  value: boolean;
  className: string;
  readOnly?: boolean;
};

const ToggleField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <Toggle
    disabled={props.readOnly}
    label={props.label}
    checked={props.value || false}
    onChanged={(checked) => props.onChange && props.onChange(checked || false)}
    onText={props.customProps && props.customProps.onText}
    offText={props.customProps && props.customProps.offText}
  />
);

export default ErrorHandlerHOC(ToggleField);
