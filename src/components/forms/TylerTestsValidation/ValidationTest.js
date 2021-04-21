import React from 'react'
import {Formik, Form} from 'formik'
import TextField from './TextField'
import * as Yup from 'yup';


export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
    .max(15, 'must be 15 or less')
    .required('Required'),
    lastName: Yup.string()
    .max(20, 'must be 20 or less')
    .required('Required'),
    email: Yup.string()
    .email('Invalid Email')
    .required('Email is Required'),
    password: Yup.string()
    .min(6, 'must be 6 or more')
    .required('Password Required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
    >
      {formik => (
        <div>
          <h1>Sign Up</h1>
          {console.log(formik.values)}
          <Form>
            <TextField type='text' label='first name' name='firstName' />
            <TextField type='text' label='last name' name='lastName' />
            <TextField type='email' label='Email' name='email' />
            <TextField type='password' label='password' name='password' />
            <TextField type='password' label='confirm password' name='confirmPassword' />
            <button type="submit">Register</button>
            <button type="">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}