import * as React from "react";
import { IFieldRenderProps } from "@dock365/reform";
import Errors from "./Errors";

const ErrorHandlerHOC = (FieldComponent: React.SFC<IFieldRenderProps & any>) => (
  (props: IFieldRenderProps) => (
    <div className={props.error && props.error.length > 0 ? "hasError" : ""}>
      <FieldComponent {...props} />
      {props.error ?
        <Errors error={props.error} /> : null}
    </div>
  )
);

export default ErrorHandlerHOC;
