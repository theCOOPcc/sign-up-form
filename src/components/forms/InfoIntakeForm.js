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
  bootcamp: Yup.mixed().oneOf(Fields.bootcamps.choices, 'Please choose from one of the selections'),
	linkedin: Yup.string().required('This field is required'),
	github: Yup.string().required('This field is required'),
	portfolio: Yup.string().required('This field is required'),
})


const InfoIntakeForm = () => {
  return (
    <Formik
    initialValues={{
      bootcamp: '',
      linkedin: '',
      github: '',
      portfolio: ''
    }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log('Submit successful', values)
    }}
    >
      <Form>
        <FormStyle>

      <h1>Tell us more about you</h1>
      {Fields.secondFields.map(f => (
						<Inputs.SelectInput key={f.name} label={f.name} name={f.value}>
							<option value={f.value} ></option>
							{f.choices.map((c) => (
								<option name={c.value} key={c} >{c}</option>
							))}
						</Inputs.SelectInput>
					))}

					<label htmlFor="github">Github: </label>
					<Inputs.TextInput id="github" name="github"></Inputs.TextInput>

					<label htmlFor="portfolio">Portfolio: </label>
					<Inputs.TextInput id="portfolio" name="portfolio"></Inputs.TextInput>

					<label htmlFor="linkedin">Linkedin: </label>
					<Inputs.TextInput id="linkedin" name="linkedin"></Inputs.TextInput>

								<button type="submit">Submit</button>
        </FormStyle>

      </Form>
    </Formik>
  )
}

export default InfoIntakeForm;