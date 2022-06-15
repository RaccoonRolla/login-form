import React from 'react';
import { useField, Field } from 'formik';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <div className="form-field">
      <label htmlFor={field.name}>{label}</label>
      {props.type === 'select' ? (
        <Field
          className="form-field__select"
          as="select"
          name="color"
          placeholder={props.placeholder}
          {...field}
          {...props}>
          <option value="" disabled selected hidden>
            Язык
          </option>
          <option value="russian">Русский</option>
          <option value="english">Английский</option>
          <option value="chinese">Китайский</option>
          <option value="spanish">Испанский</option>
        </Field>
      ) : (
        <input className="form-field__form-control" autoComplete="off" {...field} {...props} />
      )}
    </div>
  );
};

export default TextField;
