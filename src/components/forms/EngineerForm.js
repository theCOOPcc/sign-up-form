import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { engineerSkills, engineerTech } from "../meta/fields";
import * as Inputs from "../meta/inputs";
import styled from "styled-components";
import "../../App.css";
import {FormStyle, StyleDiv, TextLabel} from '../meta/inputs'


const Button = styled.button`
background-color: #00C9B1;
color: #F6F6F6;
border: none;
border-radius: 3px;
width: 100px;
height:25px;
`

const Label = styled.label`
color: #FEFEFE;
`

const FullForm = styled.div`
width: 100%;
height: 100%;
`

const validationSchema = Yup.object().shape({
	engineer_skillset: Yup.mixed().oneOf(
		engineerSkills.choices,
		"Please choose from one of the selections"
	),
	engineer_techs: Yup.mixed().oneOf(
		engineerTech.choices,
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
				engineer_skillset: "",
				engineer_techs: "",
				why_join: "",
			}}
			// validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log("Submit Successful", values);
				props.setCurrentForm({
					...props.currentForm,
					engineer_skillset: values.engineer_skillset,
					engineer_techs: values.engineer_techs,
          why_join: values.why_join
				});
				console.log('engineer', props.currentForm);
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
						<h4>Tell us a little about your interests...</h4>
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

						<TextLabel htmlFor="whyJoin">Tell us why you'd like to join: </TextLabel>
						<Inputs.TextInput id="whyJoin" name="why_join"></Inputs.TextInput>
						</StyleDiv>
						<Button type="submit">Submit</Button>
					</FormStyle>
				</Form>
			)}
		/>
	);
};

export default EngineerForm;

