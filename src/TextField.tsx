import * as React from "react";

import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField';
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from "./ErrorHandlerHOC";

type propsOverride = {
  onChange: (value?: string) => void;
  value: string;
};

const TextField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <FabricTextField
    value={props.value}
    label={props.label}
    onChanged={(value) => props.onChange && props.onChange(Number(value) || value)}
  />
);

export default ErrorHandlerHOC(TextField);
