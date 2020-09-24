import React from 'react';
import { useField } from 'formik';

const Input = ({label, ...props}) => {
  const [field, meta] = useField(props);
  let inputElement = null;

  switch(props.type) {
    case 'select':
      inputElement = (
        <select {...field} {...props}>
        {
          props.options.map((optionVal) => {
            return <option id={optionVal} key={optionVal}>{optionVal}</option>
          })
        }
        </select>
        )
      break;
    case 'textarea':
      inputElement = <textarea {...field} {...props} />
      break;
    default:
      inputElement = <input {...field} {...props} />
  }

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      {inputElement}
      {meta.touched && meta.error
        ? <section className="error">{meta.error}</section>
        : null}
    </div>
   );
 };

export default Input;