import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { pronouns } from "./fields";
import * as Inputs from "./inputs";
import styled from "styled-components";
import { string } from "yup/lib/locale";

const FormStyle = styled.div`

background-color: black;
  color: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  line-height: 1;
  padding: 10px;
`


const Button = styled.button`
background-color: #00C9B1;
color: #F6F6F6;
border: none;
border-radius: 3px;
width: 100px;
height:25px;
`


const validationSchema = Yup.object().shape({
	first_name: Yup.string().required("This field is required"),
	last_name: Yup.string().required("This field is required"),
	email: Yup.string().email("Invalid email").required("This field is required"),
	pronouns: Yup.object({
		label: Yup.string(),
		value: Yup.string()
	}).required("This field is required")
});



const ContactForm = (props) => {
	const submitForm = () => props.addItem(props.newForm);
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

						<Button type="submit">Submit</Button>
					</FormStyle>
				</Form>
				<button onClick={submitForm}>Submit</button>
				</>
			)}
		/>
	);
};
export default ContactForm;

