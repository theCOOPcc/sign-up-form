import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { candidatePath } from "./meta/fields";
import * as Inputs from "./meta/inputs";
import styled from "styled-components";
import { FormStyle } from './meta/inputs'

const validationSchema = Yup.object().shape({
	role: Yup.object({
		label: Yup.string().oneOf(candidatePath.choices),
		value: Yup.string().oneOf(candidatePath.choices)
	}),
}, "Please choose from one of the selections")


const Button = styled.button`
background-color: #00C9B1;
color: #F6F6F6;
border: none;
border-radius: 3px;
width: 100px;
height:25px;
`

const ChoosePath = (props) => {
	const roleOptions = [];
	candidatePath.choices.forEach((element) => {
		let path = { label: `${element}`, value: `${element}` };
		roleOptions.push(path);
	});
	return (
		<Formik
			initialValues={{
				role: "",
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log("Submit Successful", values);
				props.setCurrentForm({ ...props.currentForm, role: values.role });
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
						<div>
							<h4>
								We're constantly looking for new talent to join our efforts. Let
								us know what your interests are below, and we'll be in touch as
								soon as something comes up.{" "}
							</h4>
						</div>

						<Inputs.SelectInput
							options={roleOptions}
							key={candidatePath.name}
							label={candidatePath.name}
							name={candidatePath.value}
							onBlur={setFieldTouched}
							onChange={setFieldValue}
						/> 

						<Button style={{ marginTop: "5px" }} type="submit">
							Submit
						</Button>
					</FormStyle>
				</Form>
			)}
		/>
	);
};


export default ChoosePath;
