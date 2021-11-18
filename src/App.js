import { FastField, Form, Formik } from "formik";
import "./App.css";

import * as Yup from "yup";
import InputField from "./custom-field/InputField";
import { AppProvider, Button, RadioButton } from "@shopify/polaris";
import SelectField from "./custom-field/SelectField";
import CheckboxField from "./custom-field/CheckboxField";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  color: Yup.string().required("Required"),
});

function App() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <AppProvider>
      <div className="App">
        <Formik
          enableReinitialize
          validationSchema={SignupSchema}
          initialValues={{
            email: "",
            password: "",
            color: "",
            gender: false,
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <FastField
                component={InputField}
                name="email"
                label="Email"
                autoFocus={true}
              />
              <FastField
                component={InputField}
                name="password"
                label="Password"
                type="password"
              />
              <FastField
                component={SelectField}
                name="color"
                options={options}
                label="Color"
              />
              <FastField component={CheckboxField} name="gender" label="male" />

              <RadioButton
                label="Accounts are disabled"
                helpText="Customers will only be able to check out as guests."
                checked={value === "disabled"}
                id="disabled"
                name="accounts"
              />
              <RadioButton
                label="Accounts are optional"
                helpText="Customers will be able to check out with a customer account or as a guest."
                id="optional"
                name="accounts"
              />

              <Button submit>Submit</Button>
            </Form>
          )}
        </Formik>
      </div>
    </AppProvider>
  );
}

export default App;
