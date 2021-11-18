import React from "react";
import { TextField } from "@satel/formik-polaris";

function InputField(props) {
  const { field, type, label, placeholder, autoFocus } = props;
  const { name } = field;
  return (
    <TextField
      label={label}
      name={name}
      placeholder={placeholder}
      {...field}
      type={type}
      autoFocus={autoFocus}
    />
  );
}

export default InputField;
