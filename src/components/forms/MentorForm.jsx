import React from "react";
import { Formik, Form } from "formik";
import "./MentorForm.css";
import * as Yup from "yup";
import * as Fields from './fields'
import * as Inputs from './inputs'
import styled from 'styled-components'

const FormStyle = styled.form`
background-color: black;

color: #F25187;
display:flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
height: 100%;
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
		<>
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
				<FormStyle>
			<h1>Mentor Form</h1>
				{Fields.mentorFields.map((f) => (
					<Inputs.SelectInput key={f.name} label={f.name} name={f.value}>
						<option value={f.value}></option>
						{f.choices.map((c) => (
							<option name={c.value} key={c} value={c}>{c}</option>
						))}
					</Inputs.SelectInput>
				))}
			<label htmlFor='linkedin'>Linkedin Profile: </label>
			<Inputs.TextInput id='linkedin' name='linkedin' ></Inputs.TextInput>

			<button type='submit'>Submit</button>

				</FormStyle>
			</Form>
			</Formik>
			</>
	)
	}
	
	export default MentorForm