import * as React from 'react';
import { Rating, RatingSize } from 'office-ui-fabric-react/lib/Rating';
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from './ErrorHandlerHOC';

type propsOverride = {
  value: number;
  customProps: {
    min: number;
    max: number;
    size: RatingSize;
  }
  className?: string;
  readOnly?: boolean;
};

const RatingField: React.SFC<IFieldRenderProps & propsOverride> = (props) => (
  <div>
    {props.label && <label htmlFor="" style={{ padding: "5px 0", display: "block" }}>{props.label}</label>}
    <Rating
      disabled={props.readOnly}
      rating={props.value}
      onChanged={(value) => {
        if (props.onChange)
          props.onChange(value);
        if (props.onBlur)
          props.onBlur(value);
      }}
      min={props.customProps && props.customProps.min || 0}
      max={props.customProps && props.customProps.max || 5}
      size={props.customProps && props.customProps.size || RatingSize.Large}
    />
  </div>

);

export default ErrorHandlerHOC(RatingField);
