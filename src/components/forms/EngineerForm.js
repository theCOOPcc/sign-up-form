import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { engineerSkills, engineerTech } from "../meta/fields";
import * as Inputs from "../meta/inputs";
import styled from "styled-components";
import "../../App.css";
import { FormStyle, StyleDiv, TextLabel } from "../meta/inputs";
import group122 from "./imgs/Group122.svg"

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

const Label = styled.label`
	color: #fefefe;
`;

const FullForm = styled.div`
	width: 100%;
	height: 100%;
`;

const validationSchema = Yup.object().shape({
	engineer_skillset: Yup.array().min(
		1,
		"Please choose from one of the selections"
	),
	engineer_techs: Yup.array().min(
		1,
		"Please choose from one of the selections"
	),
	why_join: Yup.string().required("This field is required"),
});

const EngineerForm = (props) => {
	const engineerSkillsOptions = [];
	engineerSkills.choices.forEach((element) => {
		let skill = { label: `${element}`, value: `${element}` };
		engineerSkillsOptions.push(skill);
	});

	const engineerTechOptions = [];
	engineerTech.choices.forEach((element) => {
		let tech = { label: `${element}`, value: `${element}` };
		engineerTechOptions.push(tech);
	});
	return (
		<Formik
			initialValues={{
				engineer_skillset: [],
				engineer_techs: [],
				why_join: "",
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log("Submit Successful", values);
				props.setCurrentForm({
					...props.currentForm,
					engineer_skillset: values.engineer_skillset,
					engineer_techs: values.engineer_techs,
					why_join: values.why_join,
				});
				console.log("engineer", props.currentForm);
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
							<Inputs.SelectFieldRequired
								onBlur={setFieldTouched}
								onChange={setFieldValue}
								key={engineerSkills.name}
								label={engineerSkills.name}
								name={engineerSkills.value}
								options={engineerSkillsOptions}
								placeholder="Select up to 4 skills"
							/>

							<Inputs.SelectFieldRequired
								onBlur={setFieldTouched}
								onChange={setFieldValue}
								key={engineerTech.name}
								label={engineerTech.name}
								name={engineerTech.value}
								options={engineerTechOptions}
								placeholder="Select up to 4 technologies"
							/>
							<StyleDiv>
								<TextLabel htmlFor="whyJoin">
									Tell us why you'd like to join
								</TextLabel>
								<Inputs.TextInputRequired
									id="whyJoin"
									name="why_join"
									// TODO: Fix this for selector
									// placeholder="Select one"
									/>
							</StyleDiv>
						</div>
							<div className="button-container">
								<BackBtn
									onClick={() =>
										props.setCurrentForm({ ...props.currentForm, role: "" })
									}>
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

export default EngineerForm;
