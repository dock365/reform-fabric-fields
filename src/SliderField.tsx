import * as React from 'react';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from './ErrorHandlerHOC';

type propsOverride = {
  onChange: (value?: string | number) => void;
  value: number;
  className?: string;
  readOnly?: boolean;
  customProps: {
    min: number;
    max: number;
    step: number;
    showValue: boolean;
  }
};

const SliderField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <Slider
    disabled={props.readOnly}
    label={props.label}
    onChange={(value: any) => props.onChange && props.onChange(value)}
    min={props.customProps.min}
    max={props.customProps.max}
    step={props.customProps.step}
    value={props.value}
    showValue={props.customProps.showValue}
  />

);

export default ErrorHandlerHOC(SliderField);
