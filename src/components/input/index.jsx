import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  const inputClassName = !error ? "" : "error";
  const errorClassName = !error ? "" : "error-message";

  return (
    <div className="form-group">
      <label className="semi-bold" htmlFor={name}>
        {label}
      </label>

      <input
        {...rest}
        name={name}
        autoFocus={name === "fullName" && true}
        id={name}
        className={inputClassName}
      />
      {error && <div className={errorClassName}>{error}</div>}
    </div>
  );
};

export default Input;
