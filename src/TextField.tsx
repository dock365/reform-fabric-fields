import * as React from "react";
import { TextField as FabricTextField } from "office-ui-fabric-react/lib/TextField";
import { IFieldRenderProps } from "@dock365/reform";
import ErrorHandlerHOC from "./ErrorHandlerHOC";
import { validationTypes } from "@dock365/validator";

type propsOverride = {
  onChange: (value?: string) => void;
  value: string;
  className?: string;
  readOnly?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  customProps?: {
    localeString?: boolean;
    maxLength?: number;
  };
  componentRef?: any;
};

const TextField: React.SFC<IFieldRenderProps & propsOverride> = props => (
  <FabricTextField
    readOnly={props.readOnly}
    value={
      (props.customProps &&
        props.customProps.localeString &&
        (props.value || "").toLocaleString()) ||
      props.value ||
      ""
    }
    componentRef={props.componentRef}
    label={props.label}
    onClick={props.onClick}
    placeholder={props.placeholder}
    maxLength={props.customProps && props.customProps.maxLength}
    onChanged={value => {
      const _value =
        (props.customProps &&
          props.customProps.localeString &&
          localStringToNumber(value)) ||
        value;
      // tslint:disable-next-line:no-unused-expression
      props.onChange &&
        props.onChange(
          props.validationRules &&
            props.validationRules.type === validationTypes.Number &&
            !isNaN(Number(_value))
            ? _value.length - _value.lastIndexOf(".") === 1 ||
              (_value.length - _value.lastIndexOf("0") === 1 && _value.lastIndexOf(".") > 0)
              ? _value
              : Number(_value)
            : _value,
        );
    }}
    // onChanged={value =>
    //   props.onChange &&
    //   props.onChange(
    //     props.validationRules &&
    //       props.validationRules.type === validationTypes.Number &&
    //       !isNaN(Number(value))
    //       ? value.length - value.lastIndexOf(".") === 1
    //         ? value
    //         : Number(
    //             (props.customProps &&
    //               props.customProps.localeString &&
    //               localStringToNumber(value)) ||
    //               value
    //           )
    //       : value
    //   )
    // }
    onBlur={e => {
      const value =
        (props.customProps &&
          props.customProps.localeString &&
          localStringToNumber(e.currentTarget.value)) ||
        e.currentTarget.value;
      if (props.onBlur)
        props.onBlur(
          props.validationRules &&
            props.validationRules.type === validationTypes.Number &&
            !isNaN(Number(value))
            ? Number(value)
            : value,
        );
    }}
  />
);

const localStringToNumber = (value: string): string | null => {
  const parts = (1234.5).toLocaleString()
    .match(/(\D+)/g);

  const unformatted =
    parts &&
    value
      .split(parts[0])
      .join("")
      .split(parts[1])
      .join(".");

  return unformatted;
};

export default ErrorHandlerHOC(TextField);
