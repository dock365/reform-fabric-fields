import * as React from 'react';
import { Rating, RatingSize } from 'office-ui-fabric-react/lib/Rating';
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from './ErrorHandlerHOC';

type propsOverride = {
  onChange: (value?: string | number) => void;
  value: string | number;
  customProps: {
    min: number;
    max: number;
    size: RatingSize;
  }
};

const RatingField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <Rating
    rating={Number(props.value)}
    onChanged={(value) => {
      if (props.onChange)
        props.onChange(value);
      if (props.onBlur)
        props.onBlur(value);
    }}
    min={props.customProps.min}
    max={props.customProps.max}
    size={props.customProps.size || RatingSize.Large}
  />

);

export default ErrorHandlerHOC(RatingField);
