import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form} from "formik";
import * as Yup from "yup";
import * as Fields from "./fields";
import * as Inputs from "./inputs";

const validationSchema = Yup.object().shape({
	skillSet: Yup.mixed()
	.oneOf(Fields.engineerSkills.choices, 'Please choose from one of the selections'),
	techs: Yup.mixed()
	.oneOf(Fields.engineerTech.choices, 'Please choose from one of the selections')
	.required(),
	whyJoin: Yup.string()
	.required('This field is required'),
})

const PageForm = () => {
	return (
		<>
			<h1>Tell us a little about your interests!</h1>
			<Formik
				initialValues={{
					// helpWith: "",
					// availDates: "",
					// workProf: "",
					// selectOption: "",
					// bootcampAtt: "",
					// github: "",
					// linkedin: "",
					skillSet: "",
					techs: "",
					whyJoin: "",
				}}
				// TODO: Dial in validation for form
				validationSchema={validationSchema}
				onSubmit={(values) => {
					console.log("Submit Successful", values);
				}}>
				<Form>
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
