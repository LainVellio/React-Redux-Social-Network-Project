import React from 'react';
import { Field } from 'redux-form';
import TextareaStyles from './Textarea.module.css';
import InputProfileInfoStyles from './InputProfileInfo.module.css';
import CheckboxStyles from './Checkbox.module.css';

export const FormControl = (Element, className) => ({
  input,
  meta: { touched, error },
  ...props
}) => {
  const hasError = touched && error;
  return (
    <div className={className.block}>
      <Element
        {...input}
        {...props}
        className={
          className.field + ' ' + (hasError ? className.errorField : '')
        }
      />
      {hasError && <div className={className.error}>{error}</div>}
    </div>
  );
};

export const Textarea = FormControl('textarea', TextareaStyles);
export const Input = FormControl('input', TextareaStyles);
export const Checkbox = FormControl('input', CheckboxStyles);
export const InputProfileInfo = FormControl('input', InputProfileInfoStyles);

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = '',
) => (
  <Field
    placeholder={placeholder}
    name={name}
    validate={validators}
    component={component}
    {...props}
  />
);
