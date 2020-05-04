import * as React from 'react';
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField';
import { IFieldRenderProps } from '@dock365/reform';
import ErrorHandlerHOC from "./ErrorHandlerHOC";
import { validationTypes } from '@dock365/validator';

type propsOverride = IFieldRenderProps & {
  value: string;
  className?: string;
  readOnly?: boolean;
  customProps: {
    decsription: string;
    rows: number;
  }
};
class MultilineTextField extends React.PureComponent<propsOverride, {}> {
  constructor(props: propsOverride) {
    super(props);
  }

  public render(): JSX.Element {
    const showLength = this.props.customProps && this.props.customProps.showLength;
    const description = this.props.customProps && this.props.customProps.description;
    const valueLength = this.props.value && this.props.value.length || 0;
    const maxLength = this.props.validationRules &&
      this.props.validationRules.type === validationTypes.String &&
      this.props.validationRules.maxLength || "";

    const lengthDescription = showLength ? `${valueLength}${maxLength && `/${maxLength}`}` : "";
    const calculatedDescription = showLength || description ?
      (
        description ?
          `${description}${lengthDescription && ` - ${lengthDescription}`}` :
          lengthDescription
      ) : "";

    return (
      <FabricTextField
        value={this.props.value || ""}
        label={this.props.label}
        placeholder={this.props.placeholder}
        readOnly={this.props.readOnly}
        multiline
        onChange={(e, value) => {
          if (this.props.onChange)
            this.props.onChange(
              this.props.validationRules &&
              this.props.validationRules.type === validationTypes.Number &&
              Number(value) || value,
            );
        }}
        onBlur={(e) => {
          const value = e.currentTarget.value;
          if (this.props.onBlur)
            this.props.onBlur(
              this.props.validationRules &&
              this.props.validationRules.type === validationTypes.Number &&
              Number(value) || value,
            );
        }}
        description={calculatedDescription}
        rows={this.props.customProps && this.props.customProps.rows || 4}
      />
    );
  }
}
export default ErrorHandlerHOC(MultilineTextField);
