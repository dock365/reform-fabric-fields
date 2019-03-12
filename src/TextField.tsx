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
    event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  customProps?: {
    localeString?: boolean;
  };
};

const TextField: React.SFC<IFieldRenderProps & propsOverride> = props => (
  <FabricTextField
    readOnly={props.readOnly}
    value={
      (props.customProps &&
        props.customProps.localeString &&
        (props.value || "").toLocaleString()) ||
      props.value
    }
    label={props.label}
    onClick={props.onClick}
    placeholder={props.placeholder}
    onChange={({currentTarget: {value}}) => props.onChange &&
      props.onChange(
        props.validationRules &&
          props.validationRules.type === validationTypes.Number &&
          !isNaN(Number(value))
          ? value.length - value.lastIndexOf(".") === 1
            ? value
            : Number(
                (props.customProps &&
                  props.customProps.localeString &&
                  localStringToNumber(value)) ||
                  value
              )
          : value
      )}
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
      const value = e.currentTarget.value;
      if (props.onBlur)
        props.onBlur(
          props.validationRules &&
            props.validationRules.type === validationTypes.Number &&
            !isNaN(Number(value))
            ? Number(
                (props.customProps &&
                  props.customProps.localeString &&
                  localStringToNumber(value)) ||
                  value
              )
            : value
        );
    }}
  />
);

const localStringToNumber = (value: string): number => {
  const parts = (1234.5).toLocaleString().match(/(\D+)/g);

  const unformatted =
    parts &&
    value
      .split(parts[0])
      .join("")
      .split(parts[1])
      .join(".");

  return Number(unformatted);
};

export default ErrorHandlerHOC(TextField);
