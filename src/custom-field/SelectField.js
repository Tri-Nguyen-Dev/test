import { Select } from "@satel/formik-polaris";
import React from "react";

function SelectField(props) {
  const { field, label, options } = props;
  const { name } = field;
  return <Select {...field} name={name} options={options} label={label} />;
}

export default SelectField;
