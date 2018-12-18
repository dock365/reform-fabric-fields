import * as React from 'react';
import { Rating } from 'office-ui-fabric-react/lib/Rating';
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from './ErrorHandlerHOC';

type propsOverride = {
  onChange: (value?: string | number) => void;
  value: string | number;
  customProps: {
    min: number;
    max: number;
  }
};

const RatingField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <Rating
    label={props.label}
    rating={Number(props.value) | props.customProps.min}
    onChanged={(value) => {
      if (props.onChange)
        props.onChange(value);
      if (props.onBlur)
        props.onBlur(value);
    }}
    min={props.customProps.min}
    max={props.customProps.max}
  />

);

export default ErrorHandlerHOC(RatingField);
