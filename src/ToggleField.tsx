import * as React from "react";

import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from "./ErrorHandlerHOC";

type propsOverride = {
  onChange: (checked: boolean) => void;
  value: boolean;
};

const ToggleField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <Toggle
    label={props.label}
    checked={props.value || false}
    onChanged={(checked) => props.onChange && props.onChange(checked || false)}
  />
);

export default ErrorHandlerHOC(ToggleField);
