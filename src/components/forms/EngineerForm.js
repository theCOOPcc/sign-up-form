import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { engineerSkills, engineerTech } from "../meta/fields";
import * as Inputs from "../meta/inputs";
import styled from "styled-components";
import "../../App.css";
import { FormStyle, StyleDiv, TextLabel } from "../meta/inputs";

const Button = styled.button`
	background-color: #00c9b1;
	color: #f6f6f6;
	border: none;
	border-radius: 3px;
	width: 100px;
	height: 25px;
`;

const BackBtn = styled.button`
	background-color: black;
	color: #00c9b1;
	font-size: 16px;
	border: none;
	width: 100px;
	height: 25px;
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
						<h2>Tell us a little about your interests...</h2>
						<div className="container">

						<Inputs.SelectField
							onBlur={setFieldTouched}
							onChange={setFieldValue}
							key={engineerSkills.name}
							label={engineerSkills.name}
							name={engineerSkills.value}
							options={engineerSkillsOptions}
							/>

						<Inputs.SelectField
							onBlur={setFieldTouched}
							onChange={setFieldValue}
							key={engineerTech.name}
							label={engineerTech.name}
							name={engineerTech.value}
							options={engineerTechOptions}
							/>
						<StyleDiv>
							<TextLabel htmlFor="whyJoin">
								Tell us why you'd like to join:{" "}
							</TextLabel>
							<Inputs.TextInput id="whyJoin" name="why_join"></Inputs.TextInput>
						</StyleDiv>
						<div style={{ display: "flex" }}>
							<BackBtn
								onClick={() =>
									props.setCurrentForm({ ...props.currentForm, role: "" })
								}>
								{" "}
								&lt; Back{" "}
							</BackBtn>
							<Button type="submit">Submit</Button>
						</div>
									</div>
					</FormStyle>
				</Form>
			)}
		/>
	);
};

export default EngineerForm;
