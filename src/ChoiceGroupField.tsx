import * as React from "react";
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from "./ErrorHandlerHOC";

type propsOverride = {
  onChange: (value?: string | number) => void;
  onBlur: (value?: string | number) => void;
  value: string | number;
  className: string;
  readOnly?: boolean;
  customProps: {
    options: IChoiceGroupOption[];
  }
};

const ChoiceGroupField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <ChoiceGroup
    disabled={props.readOnly}
    label={props.label}
    selectedKey={props.value}
    className={props.className}
    options={props.customProps && props.customProps.options}
    onChange={(e, option) => {
      if (props.onChange)
        props.onChange(option && option.key);
      if (props.onBlur)
        props.onBlur(option && option.key);
    }}
  />
);

export default ErrorHandlerHOC(ChoiceGroupField);
