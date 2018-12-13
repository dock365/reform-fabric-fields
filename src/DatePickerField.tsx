import * as React from 'react';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from './ErrorHandlerHOC';

type propsOverride = {
  onChange: (value?: Date | null) => void;
  value: Date;
};

const DatePickerField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <DatePicker
    label={props.label}
    value={props.value}
    placeholder={props.placeholder}
    onSelectDate={(date) => props.onChange && props.onChange(date)}
    {...props.customProps}
  />
);

export default ErrorHandlerHOC(DatePickerField);
