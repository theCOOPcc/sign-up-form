import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { helpOptions, helpDates } from "../meta/fields";
import * as Inputs from "../meta/inputs";
import styled from "styled-components";
import { FormStyle, StyleDiv, TextLabel } from "../meta/inputs";
import group122 from "./imgs/Group122.svg";

const Button = styled.button`
	background-color: #00c9b1;
	color: #f6f6f6;
	border: none;
	width: 183px;
	height: 50px;
`;

const BackBtn = styled.button`
	background-color: #1f1216;
	color: #00c9b1;
	font-size: 16px;
	border: none;
	width: 183px;
	height: 50px;
`;

const validateSchema = Yup.object().shape({
	help_with: Yup.array().min(1, "Please choose from one of the selections.").ensure(),
	avail_dates: Yup.object().required("Please note your availability."),
	linkedin: Yup.string().required("Required"),
});

const MentorForm = (props) => {
	const helpOptionOptions = [];
	helpOptions.choices.forEach((element) => {
		let option = { label: `${element}`, value: `${element}` };
		helpOptionOptions.push(option);
	});

	const helpDatesOptions = [];
	helpDates.choices.forEach((element) => {
		let time = { label: `${element}`, value: `${element}` };
		helpDatesOptions.push(time);
	});

	return (
		<Formik
			initialValues={{
				help_with: [],
				avail_dates: "",
				linkedin: "",
			}}
			validationSchema={validateSchema}
			onSubmit={(values) => {
				console.log("Submit Successful", values);
				props.setCurrentForm({
					...props.currentForm,
					help_with: values.help_with,
					linkedin: values.linkedin,
					avail_dates: values.avail_dates,
					bootcamps: { label: "", value: "" },
				});
				console.log("mentor", props.currentForm);
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
						<h2>TELL US MORE ABOUT YOU</h2>
						<img alt="some fields are required" src={group122} />
						<div className="container">
							<Inputs.SelectFieldRequired
								onBlur={setFieldTouched}
								onChange={setFieldValue}
								key={helpOptions.name}
								label={helpOptions.name}
								name={helpOptions.value}
								options={helpOptionOptions}
								placeholder="Select all that apply"
							/>

							<Inputs.SelectInputRequired
								options={helpDatesOptions}
								key={helpDates.name}
								label={helpDates.name}
								name={helpDates.value}
								onBlur={setFieldTouched}
								onChange={setFieldValue}
								placeholder="Select"
							/>

							<StyleDiv>
								<TextLabel htmlFor="linkedin">Linkedin Profile: </TextLabel>
								<Inputs.TextInputRequired
									id="linkedin"
									placeholder="Paste your LinkedIn URL here"
									name="linkedin"
								/>
							</StyleDiv>
						</div>
						<div className="button-container">
							<BackBtn
								type="button"
								onClick={() => {
									props.setCurrentForm({ ...props.currentForm, role: "" });
									console.log("back");
								}}>
								&lt; Back
							</BackBtn>
							<Button type="submit">Next</Button>
						</div>
					</FormStyle>
				</Form>
			)}
		/>
	);
};

export default MentorForm;
