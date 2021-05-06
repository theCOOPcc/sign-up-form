import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { pronouns } from "./fields";
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

const validationSchema = Yup.object().shape({
	first_name: Yup.string().required("This field is required"),
	last_name: Yup.string().required("This field is required"),
	email: Yup.string().email("Invalid email").required("This field is required"),
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
			// validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log("Submit Successful", values);
				props.setCurrentForm({
					...props.currentForm,
					first_name: values.first_name,
					last_name: values.last_name,
					email: values.email,
					pronouns: values.pronouns,
				});
				console.log(props.currentForm);
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
						<h1>CONTACT INFO</h1>

						<label htmlFor="firstName">First Name: </label>
						<Inputs.TextInput
							id="firstName"
							name="first_name"></Inputs.TextInput>

						<label htmlFor="lastName">Last Name: </label>
						<Inputs.TextInput id="lastName" name="last_name"></Inputs.TextInput>

						<label htmlFor="email">Email: </label>
						<Inputs.TextInput id="email" name="email"></Inputs.TextInput>

						<Inputs.SelectInput
							options={pronounOptions}
							key={pronouns.name}
							label={pronouns.name}
							name={pronouns.value}
							onBlur={setFieldTouched}
							onChange={setFieldValue}
						/>

						<button type="submit">Submit</button>
					</FormStyle>
				</Form>
			)}
		/>
	);
};
export default ContactForm;
