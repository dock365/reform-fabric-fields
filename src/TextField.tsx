import * as React from "react";
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField';
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from "./ErrorHandlerHOC";
import { validationTypes } from "@dock365/validator";

type propsOverride = {
  onChange: (value?: string) => void;
  value: string;
  className?: string;
  readOnly?: boolean;
};

const TextField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <FabricTextField
    readOnly={props.readOnly}
    value={props.value}
    label={props.label}
    placeholder={props.placeholder}
    onChanged={(value) => props.onChange && props.onChange(
      props.validationRules &&
        props.validationRules.type === validationTypes.Number &&
        !isNaN(Number(value)) ?
        (value.length - value.lastIndexOf(".") === 1 ? value : Number(value))
        : value,
    )}
    onBlur={(e) => {
      const value = e.currentTarget.value;
      if (props.onBlur)
        props.onBlur(
          props.validationRules &&
            props.validationRules.type === validationTypes.Number &&
            !isNaN(Number(value)) ?
            Number(value)
            : value);
    }}
  />
);

export default ErrorHandlerHOC(TextField);
