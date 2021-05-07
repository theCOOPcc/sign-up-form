import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { candidatePath } from "./fields";
import * as Inputs from "./inputs";
import styled from "styled-components";

// Basic form styling for each file--probably can do this differently and more cleanly
const FormStyle = styled.div`

background-color: black;
  color: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;git
  width: 100%;
  line-height: 1;
  padding: 10px;
`
const validationSchema = Yup.object().shape({
	role: Yup.mixed().oneOf(
		candidatePath.choices,
		"Please choose from one of the selections"
	),
});

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
			// validationSchema={validationSchema}
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


						<button style={{ marginTop: "5px" }} type="submit">
							Submit
						</button>
					</FormStyle>
				</Form>
			)}
		/>
	);
};


export default ChoosePath;
