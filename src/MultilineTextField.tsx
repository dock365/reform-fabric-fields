import * as React from 'react';
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField';
import { IFieldRenderProps } from '@dock365/reform';
import ErrorHandlerHOC from "./ErrorHandlerHOC";
import { validationTypes } from '@dock365/validator';

type propsOverride = IFieldRenderProps & {
  onChange: (value?: string) => void;
  value: string;
};
class MultilineTextField extends React.PureComponent<propsOverride, {}> {
  constructor(props: propsOverride) {
    super(props);
  }

  public render(): JSX.Element {
    const showLength = this.props.customProps && this.props.customProps.showLength;
    const description = this.props.customProps && this.props.customProps.description;
    const maxLength = this.props.validationRules &&
      this.props.validationRules.type === validationTypes.String &&
      this.props.validationRules.maxLength;

    const lengthDescription = showLength ? `${this.props.value.length}${maxLength && `/${maxLength}`}` : "";
    const calculatedDescription = showLength || description ?
      (
        description ?
          `${description}${lengthDescription && ` - ${lengthDescription}`}` :
          lengthDescription
      ) : "";

    return (
      <div >
        <FabricTextField
          value={this.props.value}
          label={this.props.label}
          placeholder={this.props.placeholder}
          multiline
          onChanged={(value) => {
            if (this.props.onChange)
              this.props.onChange(Number(value) || value);
          }}
          {...this.props.customProps}
          description={calculatedDescription}
          rows={this.props.customProps && this.props.customProps.rows || 4}
        />
      </div>
    );
  }
}
export default ErrorHandlerHOC(MultilineTextField);
