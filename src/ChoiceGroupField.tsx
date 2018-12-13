import * as React from "react";

import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from "./ErrorHandlerHOC";

type propsOverride = {
  onChange: (checked?: string | number) => void;
  value: string | number;
  options: IChoiceGroupOption[];
};

const ChoiceGroupField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <ChoiceGroup
    className="defaultChoiceGroup"
    selectedKey={props.value}
    options={props.options}
    onChange={(e, option) => props.onChange && props.onChange(option && option.key)}
    label={props.label}
    {...props.customProps}

  />
);

export default ErrorHandlerHOC(ChoiceGroupField);
