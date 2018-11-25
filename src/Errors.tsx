import * as React from "react";

const Errors: React.SFC<{ errors: string[] }> = ({ errors }) => (
  <div className="validation-errors" style={{
    color: "#a80000",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: 1.3,
  }}>
    {errors.map((error, index) => <div key={index} className="error-item">{error}</div>)}
  </div>
);

export default Errors;
