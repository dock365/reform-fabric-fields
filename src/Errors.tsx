import * as React from "react";

const Errorss: React.SFC<{ errors: string }> = ({ errors }) => (
  <div className="validation-errors" style={{
    color: "#a80000",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: 1.3,
  }}>
    {errors && <div className="error-item">{errors}</div>}
  </div>
);

export default Errorss;
