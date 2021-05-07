import React from "react";
import { Formik, Form } from "formik";
import "./MentorForm.css";
import * as Yup from "yup";
import { helpOptions, helpDates } from "./fields";
import * as Inputs from "./inputs";
import styled from "styled-components";
import {FormStyle, StyleDiv, TextLabel} from './inputs'

const Button = styled.button`
background-color: #00C9B1;
color: #F6F6F6;
border: none;
border-radius: 3px;
width: 100px;
height:25px;
`


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
		const helpOptionOptions = [];
		helpOptions.choices.forEach((element) => {
			let option = { label: `${element}`, value: `${element}` };
			helpOptionOptions.push(option);
		});
		
	return (

		<Formik
			initialValues={{
				help_with: "",
				avail_dates: "",
				linkedin: "",
			}}
			// validationSchema={validateSchema}
			onSubmit={(values) => {
				console.log("Submit Successful", values);
				props.setCurrentForm({
					...props.currentForm,
					help_with: values.help_with,
					linkedin: values.linkedin,
				});
				console.log('mentor', props.currentForm);
			}}
			render={({
				values,
				errors,
				touched,
				setFieldValue,
				setFieldTouched,
				isSubmitting,
			}) => (
				<Form>
					<FormStyle>
						<h3>Tell us more about You</h3>
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

						<Inputs.SelectField
							onBlur={setFieldTouched}
							onChange={setFieldValue}
							key={helpOptions.name}
							label={helpOptions.name}
							name={helpOptions.value}
							options={helpOptionOptions}
						/>

							<StyleDiv>
						<TextLabel htmlFor="linkedin">Linkedin Profile: </TextLabel>
						<Inputs.TextInput id="linkedin" name="linkedin"></Inputs.TextInput>

							</StyleDiv>
						<Button type="submit">Submit</Button>
					</FormStyle>
				</Form>
			)}
		/>
	);
};


export default MentorForm;

