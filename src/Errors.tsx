import * as React from "react";

const Errors: React.SFC<{ error: string }> = ({ error }) => (
  <div className="validation-errors" style={{
    color: "#a80000",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: 1.3,
  }}>
    {error && <div className="error-item">{error}</div>}
  </div>
);

export default Errors;
