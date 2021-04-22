import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form} from "formik";
import * as Yup from "yup";
import * as Fields from "./fields";
import * as Inputs from "./inputs";

const validationSchema = Yup.object().shape({
	role: Yup.mixed().oneOf(Fields.candidatePath.choices, 'Please choose from one of the selections'),
	engineer_skillset: Yup.mixed()
	.oneOf(Fields.engineerSkills.choices, 'Please choose from one of the selections'),
	engineer_techs: Yup.mixed()
	.oneOf(Fields.engineerTech.choices, 'Please choose from one of the selections'),
	design_skillset: Yup.mixed()
	.oneOf(Fields.designerSkills.choices, 'Please choose from one of the selections'),
	design_techs: Yup.mixed()
	.oneOf(Fields.designerTech.choices, 'Please choose from one of the selections'),
	data_sci_skillset: Yup.mixed().oneOf(Fields.dataSciSkills.choices, 'Please choose from one of the selections'),
	bootcamp: Yup.mixed().oneOf(Fields.bootcamps.choices, 'Please choose from one of the selections'),
	linkedin: Yup.string().required('This field is required'),
	github: Yup.string().required('This field is required'),
	portfolio: Yup.string().required('This field is required'),
	why_join: Yup.string()
	.required('This field is required'),
	first_name: Yup.string()
	.required('This field is required'),
	last_name: Yup.string()
	.required('This field is required'),
	email: Yup.string().email('Invalid email').required('This field is required')
	.required(),
})

const PageForm = () => {
	return (
		<>
			<h1>Tell us a little about your interests!</h1>
			<Formik
				initialValues={{
					role: '',
					first_name: "",
					last_name: "",
					email: "",
					pronouns: "",
					linkedin: "",
					github: "",
					portfolio: "",
					data_sci_skillset: '',
					design_techs: "",
					design_skillset: "",
					engineer_skillset: "",
					engineer_techs: "",
					why_join: "",
				}}
				// TODO: Dial in validation for form
				validationSchema={validationSchema}
				onSubmit={(values) => {
					console.log("Submit Successful", values);
				}}>
				<Form>
					<div>
					<h3>We're constantly looking for new talent to join our efforts. Let us know what your interests are below, and we'll be in touch as soon as something comes up. </h3>
						
					</div>
					{Fields.paths.map((f) => (
						<Inputs.SelectInput key={f.name} label={f.name} name={f.value}>
							<option value={f.value}></option>
							{f.choices.map((c) => (
								<option name={c.value} key={c} value={c}>{c}</option>
							))}
						</Inputs.SelectInput>
					))}

					<h3>Engineer</h3>
					{Fields.firstFields.map((f) => (
						<Inputs.SelectInput key={f.name} label={f.name} name={f.value}>
							<option  value={f.value}></option>
							{f.choices.map((c) => (
								<option name={c.value} key={c} value={c}>
									{c}
								</option>
							))}
						</Inputs.SelectInput>
					))}


					<label htmlFor="whyJoin">Tell us why you'd like to join: </label>
					<Inputs.TextInput id="whyJoin" name="why_join"></Inputs.TextInput>

					<button type="submit">Submit</button>
			
					<h1>Designer</h1>
			
					{Fields.designFields.map(f => (
						<Inputs.SelectInput key={f.name} label={f.name} name={f.value}>
							<option value={f.value} ></option>
							{f.choices.map((c) => (
								<option name={c.value} key={c}>{c}</option>
							))}
						</Inputs.SelectInput>
					))}

					<label htmlFor="whyJoin">Tell us why you'd like to join: </label>
					<Inputs.TextInput id="whyJoin" name="why_join"></Inputs.TextInput>
								<button type='submit'>Submit</button>
				
				<h1>Data Science</h1>
					{Fields.dataSciFields.map(f => (
						<Inputs.SelectInput key={f.name} label={f.name} name={f.value}>
							<option value={f.value} ></option>
							{f.choices.map((c) => (
								<option name={c.value} key={c} >{c}</option>
							))}
						</Inputs.SelectInput>
					))}

					<label htmlFor="whyJoin">Tell us why you'd like to join: </label>
					<Inputs.TextInput id="whyJoin" name="why_join"></Inputs.TextInput>

					<button type='submit'>Submit</button>



					<h1>Tell us EVEN MORE about you! </h1>

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
				</Form>
			</Formik>
		</>
	);
};

export default PageForm;