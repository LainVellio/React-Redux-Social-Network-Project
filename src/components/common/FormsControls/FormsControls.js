import React from 'react';
import cl from './FormsControls.module.css';

export const FormControl = (Element) => ({
  input,
  meta: { touched, error },
  ...props
}) => {
  const hasError = touched && error;
  return (
    <div className={cl.formControl + ' ' + (hasError ? cl.error : '')}>
      <Element {...input} {...props} />
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = FormControl('textarea');

export const Input = FormControl('input');
