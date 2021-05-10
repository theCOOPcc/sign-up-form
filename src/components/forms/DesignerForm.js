import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import * as Fields from "../meta/fields";
import * as Inputs from "../meta/inputs";
import styled from "styled-components";
import ReactSelect from "react-select";
import { FormStyle, TextLabel, StyleDiv } from "../meta/inputs";
import { designerTech, designerSkills } from "../meta/fields";
import group122 from "./imgs/Group122.svg"

// export const FormStyles = {
//   container: (provided, state) => ({
//     ...provided,
//     width: 200,

//   }),
//   // input: (provided, state) => ({
//   //   display:
//   // }),
//   option: (provided, state) => ({
//     ...provided,
//     borderBottom: '1px solid #F25187',
//     color: 'white',
//     backgroundColor: '#562636',

//     padding: 5,
//     width: 200,

//   }),
//   valueContainer: (provided, state) => ({
//     ...provided,
//     backgroundColor:'black',
//     color: 'white'
//   }),
//   multiValue: (provided, state) => ({
//     ...provided,
//     backgroundColor: '#F25187',
//     color: 'white'
//   }),
//   singleValue: (provided, state)=> {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = 'opacity 300ms';

//     return {...provided, opacity, transition}
//   }
// }

// Basic form styling for each page

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
	width: 100px;
	height: 25px;
`;

const Options = styled.option`
	color: white !important;
`;

const FullForm = styled.div`
	width: 100%;
	height: 100%;
`;

const validationSchema = Yup.object().shape({
	design_skillset: Yup.array().min(
		1,
		"Please choose from one of the selections"
	),
	design_techs: Yup.array().min(1, "Please choose from one of the selections"),
	why_join: Yup.string().required("This field is required").max(100),
});

const DesignerForm = (props) => {
	const designSkillOptions = [];
	designerSkills.choices.forEach((element) => {
		let skill = { label: `${element}`, value: `${element}` };
		designSkillOptions.push(skill);
	});

	const designTechOptions = [];
	designerTech.choices.forEach((element) => {
		let tech = { label: `${element}`, value: `${element}` };
		designTechOptions.push(tech);
	});

	return (
		<Formik
			initialValues={{
				design_techs: [],
				design_skillset: [],
				why_join: "",
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log("Submit Successful", values);
				props.setCurrentForm({
					...props.currentForm,
					design_techs: values.design_techs,
					design_skillset: values.design_skillset,
					why_join: values.why_join,
				});
				console.log("design", props.currentForm);
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
						<h2>TELL US A LITTLE ABOUT YOUR INTERESTS...</h2>
						<img alt="some fields are required" src={group122} />
						<div className="container">
							<Inputs.SelectField
								onBlur={setFieldTouched}
								onChange={setFieldValue}
								key={designerSkills.name}
								label={designerSkills.name}
								name={designerSkills.value}
								options={designSkillOptions}
							/>

							<Inputs.SelectField
								onBlur={setFieldTouched}
								onChange={setFieldValue}
								key={designerTech.name}
								label={designerTech.name}
								name={designerTech.value}
								options={designTechOptions}
							/>
							<StyleDiv>
								<TextLabel htmlFor="whyJoin">
									Tell us why you'd like to join The COOP:{" "}
								</TextLabel>
								<Inputs.TextInput
									id="whyJoin"
									name="why_join"></Inputs.TextInput>
							</StyleDiv>
							<div style={{ display: "flex" }}>
								<BackBtn
									onClick={() =>
										props.setCurrentForm({ ...props.currentForm, role: "" })
									}>
									{" "}
									&lt; Back{" "}
								</BackBtn>
								<Button type="submit">Next</Button>
							</div>
						</div>
					</FormStyle>
				</Form>
			)}
		/>
	);
};

export default DesignerForm;
