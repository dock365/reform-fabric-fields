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
    maxLength?: number;
  };
  componentRef?: any;
};

class TextField extends React.Component<IFieldRenderProps & propsOverride, {}> {
  static defaultProps = {
    customProps: {},
    value: "",
    validationRules: {}
  }

  public render() {
    return (
      <FabricTextField
        readOnly={this.props.readOnly}
        value={this.props.value}
        componentRef={this.props.componentRef}
        label={this.props.label}
        onClick={this.props.onClick}
        placeholder={this.props.placeholder}
        maxLength={this.props.customProps.maxLength} // For number validation also
        onChange={this._onChange}
        onBlur={this._onBlur}
      />
    )
  }

  private _onChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // const inputValue = event.currentTarget.value;

    // const value = this.props.localeString ? inputValue.toLocaleString() : inputValue;
    if (this.props.onChange) {
      this.props.onChange(event.currentTarget.value);
    }

    // const value: any =
    //   (
    //     this.props.customProps.localeString &&
    //     this._localStringToNumber(event.currentTarget.value)) ||
    //   event.currentTarget.value;
    // // tslint:disable-next-line:no-unused-expression
    // if (this.props.onChange) {
    //   const isNumber = this.props.validationRules && this.props.validationRules.type === validationTypes.Number && !isNaN(Number(value));
    //   this.props.onChange(
    //     isNumber
    //       ?
    //       // _value.length - _value.lastIndexOf(".") === 1 ||
    //       //   (_value.length - _value.lastIndexOf("0") === 1 && _value.lastIndexOf(".") > 0) ||
    //       (Number(value) == value && Number(value) !== value) &&
    //         !isNaN(Number(value))
    //         ? value
    //         : Number(value)
    //       : value,
    //   );
    // }
  }

  private _onBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // const inputValue = event.currentTarget.value;

    // const value = this.props.localeString ? inputValue.toLocaleString() : inputValue;
    if (this.props.onChange) {
      this.props.onChange(event.currentTarget.value);
    }
    // const value: any =
    //   (
    //     this.props.customProps.localeString &&
    //     this._localStringToNumber(e.currentTarget.value)) ||
    //   e.currentTarget.value;
    // if (this.props.onBlur) {
    //   const isNumber = this.props.validationRules && this.props.validationRules.type === validationTypes.Number && !isNaN(Number(value));

    //   // this.props.onBlur(value)
    //   this.props.onBlur(
    //     isNumber
    //       ? (Number(value) == value) ? value : Number(value)
    //       : value,
    //   );
    // }
  }
}

export default ErrorHandlerHOC(TextField);
