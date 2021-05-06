import React from "react";
import { Formik, Form } from "formik";
import "./MentorForm.css";
import * as Yup from "yup";
import { helpOptions, helpDates } from "./fields";
import * as Inputs from "./inputs";
import styled from "styled-components";

const FormStyle = styled.div`
	background-color: black;
	color: #fefefe;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 50vh;
	width: 50vw;
`;

const validateSchema = Yup.object().shape({
	help_with: Yup.mixed().oneOf(
		helpOptions.choices,
		"Please choose from one of the selections"
	),
	avail_dates: Yup.mixed().oneOf(
		helpDates.choices,
		"Please choose from one of the options"
	),
	linkedin: Yup.string().required("Required"),
});

const MentorForm = (props) => {
	return (
		<>
			<Formik
				initialValues={{
					help_with: "",
					avail_dates: "",
					linkedin: "",
				}}
				// validationSchema={validateSchema}
				onSubmit={(values) => {
					console.log("Submit Successful", values);
					props.setCurrentForm({ ...props.currentForm, role: values.role });
					console.log(props.currentForm);
				}}>
				<Form>
					<FormStyle>
						<h1>Tell us more about You</h1>
						{/* {Fields.mentorFields.map((f) => (
							<Inputs.SelectInput key={f.name} label={f.name} name={f.value}>
								<option value={f.value}></option>
								{f.choices.map((c) => (
									<option name={c.value} key={c} value={c}>
										{c}
									</option>
								))}
							</Inputs.SelectInput>
						))} */}
						<label htmlFor="linkedin">Linkedin Profile: </label>
						<Inputs.TextInput id="linkedin" name="linkedin"></Inputs.TextInput>

						<button type="submit">Submit</button>
					</FormStyle>
				</Form>
			</Formik>
		</>
	);
};

export default MentorForm;
