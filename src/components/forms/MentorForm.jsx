import React from "react";
import { Formik, Form } from "formik";
import "./MentorForm.css";
import * as Yup from "yup";
import * as Fields from './fields'
import * as Inputs from './inputs'


// const helpOptions =  [
//     {key: 'Selct an option', value: ''},
//     {key: '1:1 Mentoring', value: 'mentoring'},
//     {key: 'Group Presentations', value: 'groupPres'},
//     {key: 'Sprint Planning', value: 'sprintPlan'},
//     {key: 'Lightning talk (Pres.)', value: 'ltPres'},
//     {key: 'Lightning talk (Aud.)', value: 'ltAud'},
//     {key: 'Interview Prep', value: 'intPrep'},
// ];


const validateSchema = Yup.object().shape({
	helpWith: Yup.mixed()
	.oneOf(Fields.helpOptions.choices, 'Please choose from one of the selections'),
	availDates: Yup.mixed()
	.oneOf(Fields.helpDates.choices, 'Please choose from one of the options'),
	workProfile: Yup.string().required("Required")
});

const MentorForm = () => {
	return (
		<>
		<h1>Mentor Form</h1>
		<Formik 
		initialValues={{
      helpWith: "",
      availDates: "''",
      workProfile:"",
    }}
		validationSchema={validateSchema}
		onSubmit={(values) => {
			console.log('Submit Successful', values)
		}}>
			<Form>
				{Fields.mentorFields.map((f) => (
					<Inputs.SelectInput key={f.name} label={f.name} name={f.value}>
						<option value={f.value}></option>
						{f.choices.map((c) => (
							<option name={c.value} key={c} value={c}>{c}</option>
						))}
					</Inputs.SelectInput>
				))}


			<label htmlFor='workProfile'>Linkedin Profile: </label>
			<Inputs.TextInput id='workProfile' name='workProfile' ></Inputs.TextInput>

			<button type='submit'>Submit</button>
			</Form>
			</Formik>
			</>
	)
	}
	
	export default MentorForm