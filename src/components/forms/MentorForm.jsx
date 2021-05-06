import React from "react";
import { Formik, Form } from "formik";
import "./MentorForm.css";
import * as Yup from "yup";
import * as Fields from './fields'
import * as Inputs from './inputs'
import styled from 'styled-components'

const FormStyle = styled.div`
background-color: black;
  color: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  line-height: 1;
  padding: 10px;
`


const validateSchema = Yup.object().shape({
	help_with: Yup.mixed()
	.oneOf(Fields.helpOptions.choices, 'Please choose from one of the selections'),
	avail_dates: Yup.mixed()
	.oneOf(Fields.helpDates.choices, 'Please choose from one of the options'),
	linkedin: Yup.string().required("Required")
});

const MentorForm = () => {
	return (
		
		<FormStyle>
		<Formik 
		initialValues={{
			help_with: "",
      avail_dates: "",
      linkedin:"",
    }}
		validationSchema={validateSchema}
		onSubmit={(values) => {
			console.log('Submit Successful', values)
		}}>
			<Form>
			<h1>Tell us more about You</h1>
				{Fields.mentorFields.map((f) => (
					<Inputs.MentorSelectInput key={f.name} label={f.name} name={f.value}>
						<option value={f.value}></option>
						{f.choices.map((c) => (
							<option name={c.value} key={c} value={c}>{c}</option>
						))}
					</Inputs.MentorSelectInput>
				))}
			<label htmlFor='linkedin'>Linkedin Profile: </label>
			<Inputs.TextInput id='linkedin' name='linkedin' ></Inputs.TextInput>

			<button type='submit'>Submit</button>

			</Form>
			</Formik>
				</FormStyle>
			
	)
	}
	
	export default MentorForm