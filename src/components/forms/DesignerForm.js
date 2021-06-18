import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import * as Fields from "../meta/fields";
import * as Inputs from "../meta/inputs";
import styled from "styled-components";
import ReactSelect from "react-select";
import { FormStyle, TextLabel, StyleDiv } from "../meta/inputs";
import { designerTech, designerSkills, whyJoin } from "../meta/fields";
import group122 from "./imgs/Group122.svg";

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
	width: 183px;
	height: 50px;
`;

const Options = styled.option`
	color: white !important;
`;

const FullForm = styled.div`
	width: 100%;
	height: 100%;
`;

const validationSchema = Yup.object().shape({
	design_skillset: Yup.array()
		.min(1, "Please choose from one of the selections")
		.max(4, "Submit only up to four entries"),
	design_techs: Yup.array()
		.min(1, "Please choose from one of the selections")
		.max(4, "Submit only up to four entries"),
	why_join: Yup.array().min(1, "Please choose from one of the selections"),
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

	const whyJoinOptions = [];
	whyJoin.choices.forEach((element) => {
		let choice = { label: `${element}`, value: `${element}` };
		whyJoinOptions.push(choice);
	});

	return (
		<Formik
			initialValues={{
				design_techs: [],
				design_skillset: [],
				why_join: [],
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
				resetForm,
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
								placeholder="Select up to 4 skills"
							/>

							<Inputs.SelectField
								onBlur={setFieldTouched}
								onChange={setFieldValue}
								key={designerTech.name}
								label={designerTech.name}
								name={designerTech.value}
								options={designTechOptions}
								placeholder="Select up to 4 skills"
							/>
							<Inputs.SelectFieldRequired
								onBlur={setFieldTouched}
								onChange={setFieldValue}
								key={whyJoin.name}
								label={whyJoin.name}
								name={whyJoin.value}
								options={whyJoinOptions}
								placeholder="Select all that apply"
							/>
						</div>
						<div className="button-container">
							<BackBtn
								type="button"
								onClick={() => {
									props.setCurrentForm({ ...props.currentForm, role: "" });
								}}>
								{" "}
								&lt; Back{" "}
							</BackBtn>
							<Button type="submit">Next</Button>
						</div>
					</FormStyle>
				</Form>
			)}
		/>
	);
};

export default DesignerForm;
