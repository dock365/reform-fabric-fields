import * as React from 'react';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from './ErrorHandlerHOC';

type propsOverride = {
  onChange: (value?: Date | null) => void;
  onBlur: (value?: Date | null) => void;
  value: Date;
};

const DatePickerField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <div>
    <DatePicker
      label={props.label}
      value={props.value}
      placeholder={props.placeholder}
      onSelectDate={(date) => {
        if (props.onChange)
          props.onChange(date);
        if (props.onBlur)
          props.onBlur(date);
      }}
      allowTextInput={props.customProps && props.customProps.allowTextInput}
      disableAutoFocus={props.customProps && props.customProps.disableAutoFocus}
    />
    {
      props.customProps.showClearBtn &&
      <div style={{ textAlign: "right" }}>
        <span
          style={{
            fontSize: "13px",
            padding: "2px 5px",
            cursor: "pointer",
            color: "blue",
          }}
          onClick={() => props.onChange(null)}
        >Clear</span>
      </div>
    }
  </div>
);

export default ErrorHandlerHOC(DatePickerField);
