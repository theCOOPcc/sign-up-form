import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { engineerSkills, engineerTech } from "./fields";
import * as Inputs from "./inputs";
import styled from "styled-components";
import "../../App.css";

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
						<Label htmlFor="whyJoin">Tell us why you'd like to join: </Label>
						<Inputs.TextInput id="whyJoin" name="why_join"></Inputs.TextInput>
						<button type="submit">Submit</button>
					</FormStyle>
				</Form>
			)}
		/>
	);
};

export default EngineerForm;

