import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form} from "formik";
import * as Yup from "yup";
import * as Fields from "./fields";
import * as Inputs from "./inputs";
import styled from 'styled-components'

const FormStyle = styled.div`
background-color: black;
color: #FEFEFE;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
height: 50vh;
width: 50vw;
`

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('This field is required'),
  last_name: Yup.string().required('This field is required'),
  email : Yup.string().email('Invalid email').required('This field is required')
})

const ContactForm = () => {
  return (
    <Formik
    initialValues={{
      first_name: '',
      last_name: '',
      email: '',
      pronouns: ''
     }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log('Submit Successful', values)
    }}>

        
      <Form>
        <FormStyle>
      <h1>CONTACT INFO</h1>

        <label htmlFor="firstName">First Name: </label>
        <Inputs.TextInput id="firstName" name="first_name"></Inputs.TextInput>

        <label htmlFor="lastName">Last Name: </label>
        <Inputs.TextInput id="lastName" name="last_name"></Inputs.TextInput>


        {Fields.pronounField.map(f => (
          <Inputs.SelectInput key={f.value} label={f.name} name={f.value}>
            <option value={f.value} ></option>
            {f.choices.map((c) => (
              <option name={c.value} key={c}>{c}</option>
            ))}
          </Inputs.SelectInput>
        ))}


        <label htmlFor="email">Email: </label>
        <Inputs.TextInput id="email" name="email"></Inputs.TextInput>

        <button type="submit">Submit</button>

        </FormStyle>

      </Form>
        
    </Formik>
  )
}

export default ContactForm;