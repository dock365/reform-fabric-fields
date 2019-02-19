import * as React from "react";
import { IFieldRenderProps } from "@dock365/reform";
import Errors from "./Errors";
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

const ErrorHandlerHOC = (FieldComponent: React.ComponentType<IFieldRenderProps & any>) => (
  (props: IFieldRenderProps & { className?: string; }) => (
    <div
      className={`${props.className} ${props.errors && props.errors.length > 0 ? "hasError" : ""}`}
      style={{
        position: "relative",
      }}
    >
      <FieldComponent {...props} />
      {props.fetching &&
        <Spinner
          size={SpinnerSize.small}
          style={{
            position: "absolute",
            top: "34px",
            right: "8px",
            padding: "3px",
            backgroundColor: "#fff",
          }}
        />}
      {props.errors ?
        <Errors errors={props.errors[0]} /> : null}
    </div>
  )
);

export default ErrorHandlerHOC;
