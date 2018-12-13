import * as React from "react";
import { IFieldRenderProps } from "@dock365/reform";
import Errors from "./Errors";

const ErrorHandlerHOC = (FieldComponent: React.ComponentType<IFieldRenderProps & any>) => (
  (props: IFieldRenderProps) => (
    <div className={props.errors && props.errors.length > 0 ? "hasError" : ""}>
      <FieldComponent {...props} />
      {props.errors ?
        <Errors errors={props.errors[0]} /> : null}
    </div>
  )
);

export default ErrorHandlerHOC;
