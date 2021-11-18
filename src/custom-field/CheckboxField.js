import React from "react";
import { Checkbox } from "@satel/formik-polaris";

function CheckboxField(props) {
  const { field, label } = props;
  const { name } = field;
  return <Checkbox label={label} name={name} {...field} />;
}

export default CheckboxField;
