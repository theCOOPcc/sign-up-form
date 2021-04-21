import React from 'react'
import { useField, ErrorMessage } from 'formik'

const TextField = ({label, ...props}) => {
  const [field, meta] = useField(props);
  console.log(field, meta)
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input 
        className={`${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete='off'
      />
      <ErrorMessage  name={field.name} />
    </div>
  )
}

export default TextField;