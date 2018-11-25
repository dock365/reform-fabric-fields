import * as React from "react";

const Errors: React.SFC<{ errors: string[] }> = ({ errors }) => (
  <div className="validation-errors">
    {errors.map((error, index) => <div key={index} className="error-item">{error}</div>)}
  </div>
);

export default Errors;
