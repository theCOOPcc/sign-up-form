import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { candidatePath } from "../meta/fields";
import * as Inputs from "../meta/inputs";
import styled from "styled-components";
import { FormStyle } from '../meta/inputs'
import group122 from "./imgs/Group122.svg";
import RoleButtons from "./components/RoleButtons";

const validationSchema = Yup.object().shape(
	{
		role: Yup.object({
			label: Yup.string().oneOf(candidatePath.choices),
			value: Yup.string().oneOf(candidatePath.choices),
		}).required("Please choose from one of the selections"),
	},
	"Please choose from one of the selections"
);


const Button = styled.button`
background-color: #00C9B1;
color: #F6F6F6;
border: none;
width: 183px;
height: 50px;
`

const ChoosePath = (props) => {
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
						<div className="modal">
							<p className="role-text">
								We're constantly looking for new talent to join our efforts. Let
								us know what your interests are below, and we'll be in touch as
								soon as something comes up.
							</p>
							{/* <img alt="some fields are required" src={group122} /> */}
						</div>

						{/* //TODO: Turn these buttons into selecting role */}

						{/* <Inputs.SelectInputRequired
							options={roleOptions}
							key={candidatePath.name}
							label={candidatePath.name}
							name={candidatePath.value}
							onBlur={setFieldTouched}
							onChange={setFieldValue}
						/> */}

						<RoleButtons 
							currentForm={props.currentForm}
							setCurrentForm={props.setCurrentForm}
						/>
{/* 
						<Button style={{ marginTop: "5px" }} type="submit">
							Next
						</Button> */}
					</FormStyle>
				</Form>
			)}
		/>
	);
};


export default ChoosePath;
