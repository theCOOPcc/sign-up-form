import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { pronouns } from "../meta/fields";
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

const validationSchema = Yup.object().shape({
	first_name: Yup.string().required("This field is required"),
	last_name: Yup.string().required("This field is required"),
	email: Yup.string().email("Invalid email").required("This field is required"),
	pronouns: Yup.object({
		label: Yup.string(),
		value: Yup.string(),
	}).required("Please fill out this section"),
});

const ContactForm = (props) => {
	const pronounOptions = [];
	pronouns.choices.forEach((element) => {
		let pronoun = { label: `${element}`, value: `${element}` };
		pronounOptions.push(pronoun);
	});
	return (
		<Formik
			initialValues={{
				first_name: "",
				last_name: "",
				email: "",
				pronouns: "",
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log("Submit Successful", values);
				props.setCurrentForm({
					...props.currentForm,
					first_name: values.first_name,
					last_name: values.last_name,
					email: values.email,
					pronouns: values.pronouns,
				});
				console.log("contact form", props.currentForm);
				props.addItem(props.newForm);
			}}
			render={({
				values,
				errors,
				touched,
				setFieldValue,
				setFieldTouched,
				isSubmitting,
			}) => (
				<>
					<Form>
						<FormStyle>
							<h2>CONTACT INFORMATION</h2>
							<img alt="some fields are required" src={group122} />
							<div className="container">
								<StyleDiv>
									<TextLabel htmlFor="firstName">First Name</TextLabel>
									<Inputs.TextInputRequired
										id="firstName"
										name="first_name"></Inputs.TextInputRequired>
								</StyleDiv>
								<StyleDiv>
									<TextLabel htmlFor="lastName">Last Name</TextLabel>
									<Inputs.TextInputRequired
										id="lastName"
										name="last_name"></Inputs.TextInputRequired>
								</StyleDiv>

								<Inputs.SelectInputRequired
									options={pronounOptions}
									key={pronouns.name}
									label={pronouns.name}
									name={pronouns.value}
									onBlur={setFieldTouched}
									onChange={setFieldValue}
								/>
								<StyleDiv>
									<TextLabel htmlFor="email">Email</TextLabel>
									<Inputs.TextInputRequired
										id="email"
										placeholder="you@youremail.com"
										name="email"
									/>
								</StyleDiv>
							</div>
							<div className="button-container">
								{props.currentForm.role.label === "Mentor" ? (
									<BackBtn
										type="button"
										onClick={() => {
											props.setCurrentForm({
												...props.currentForm,
												linkedin: "",
											});
											console.log("role should equal mentor");
										}}>
										&lt; Back
									</BackBtn>
								) : (
									<BackBtn
										type="button"
										onClick={() => {
											props.setCurrentForm({
												...props.currentForm,
												bootcamps: "",
											});
											console.log("role should not be mentor");
										}}>
										&lt; Back
									</BackBtn>
								)}
								<Button type="submit">Next</Button>
							</div>
						</FormStyle>
					</Form>
				</>
			)}
		/>
	);
};
export default ContactForm;
