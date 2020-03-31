import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

const Formm = ({ status, errors, touched, getCity }) => {
  useEffect(() => {
    status && getCity(status);
  }, [status, getCity]);

  return (
    <div className="form-container">
      <Form>
        <label htmlFor="city">
          <Field type="text" placeholder="search city" id="city" name="value" />
        </label>
        <button type="submit">Search</button>
        {errors.value && touched.value && (
          <p className="empty-error">{errors.value}</p>
        )}
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    value: ""
  }),
  validationSchema: yup.object().shape({
    value: yup.string().required("please enter value")
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    setStatus(values);
    resetForm();
  }
})(Formm);
