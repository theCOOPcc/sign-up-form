import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form} from "formik";
import * as Yup from "yup";
import * as Fields from "./fields";
import * as Inputs from "./inputs";

const validationSchema = Yup.object().shape({
	engineerSkillset: Yup.mixed()
	.oneOf(Fields.engineerSkills.choices, 'Please choose from one of the selections'),
	engineerTechs: Yup.mixed()
	.oneOf(Fields.engineerTech.choices, 'Please choose from one of the selections'),
	designSkillset: Yup.mixed()
	.oneOf(Fields.designerSkills.choices, 'Please choose from one of the selections'),
	designTechs: Yup.mixed()
	.oneOf(Fields.designerTech.choices, 'Please choose from one of the selections'),
	dataSciSkillset: Yup.mixed().oneOf(Fields.dataSciSkills.choices, 'Please choose from one of the selections'),
	bootcamp: Yup.mixed().oneOf(Fields.bootcamps.choices, 'Please choose from one of the selections'),
	linkedin: Yup.string().required('This field is required'),
	github: Yup.string().required('This field is required'),
	portfolio: Yup.string().required('This field is required'),
	whyJoin: Yup.string()
	.required('This field is required'),
	firstName: Yup.string()
	.required('This field is required'),
	lastName: Yup.string()
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
					firstName: "",
					lastName: "",
					email: "",
					pronouns: "",
					linkedin: "",
					github: "",
					portfolio: "",
					dataSciSkillset: '',
					designTechs: "",
					designSkillset: "",
					engineerSkillset: "",
					engineerTechs: "",
					whyJoin: "",
				}}
				// TODO: Dial in validation for form
				validationSchema={validationSchema}
				onSubmit={(values) => {
					console.log("Submit Successful", values);
				}}>
				<Form>
					<h1>Engineer</h1>
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
					<Inputs.TextInput id="whyJoin" name="whyJoin"></Inputs.TextInput>

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
					<Inputs.TextInput id="whyJoin" name="whyJoin"></Inputs.TextInput>
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
					<Inputs.TextInput id="whyJoin" name="whyJoin"></Inputs.TextInput>

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
					<Inputs.TextInput id="firstName" name="firstName"></Inputs.TextInput>

								<label htmlFor="lastName">Last Name: </label>
					<Inputs.TextInput id="lastName" name="lastName"></Inputs.TextInput>

					
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

			{/* <Formik>
        <Form>
      {/* {Fields.secondFields.map(f => (
        <Inputs.SelectInput label={f.name} name={f.value}>
          <option value=""></option>
          {f.choices.map(c => (
            <option value={c}>{c}</option>
          ))}
        </Inputs.SelectInput>
      ))} */}

			{/* <Inputs.TextInput></Inputs.TextInput> */}
			{/* </Form> */}
		</>
	);
};

export default PageForm;
