import * as React from "react";
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from "./ErrorHandlerHOC";
import { validationTypes } from "@dock365/validator";
import OptionsPicker from "./OptionsPicker/OptionsPicker";
type propsOverride = {
  onChange: (value?: number) => void;
  onBlur: (value?: number) => void;
  value: number;
  className: string;
};

const TextField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <div className={props.className}>
    {props.label && <label htmlFor="" style={{ padding: "5px 0", display: "block" }}>{props.label}</label>}
    <OptionsPicker
      activeOption={props.value}
      onSelect={(value) => {
        if (props.onChange)
          props.onChange(value.id);

        if (props.onBlur)
          props.onBlur(value.id);
      }}
      onSaveChange={props.customProps && props.customProps.onSaveChange}
      editable={props.customProps && props.customProps.editable}
      colors={props.customProps && props.customProps.colors || {}}
      options={props.customProps && props.customProps.options}
    />
  </div>
);

export default ErrorHandlerHOC(TextField);
