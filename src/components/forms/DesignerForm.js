import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import * as Fields from "./fields";
import * as Inputs from "./inputs";
import styled from "styled-components";
import ReactSelect from "react-select";
import MySelect from "./SelectTests/select-re";
import { designerTech, designerSkills } from "./fields";

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
const FormStyle = styled.div`
	background-color: black;
	color: #fefefe;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 50vh;
	width: 50vw;
`;

const Options = styled.option`
	color: white !important;
`;

const validationSchema = Yup.object().shape({
	design_skillset: Yup.mixed().oneOf(
		Fields.designerSkills.choices,
		"Please choose from one of the selections"
	),
	design_techs: Yup.mixed().oneOf(
		Fields.designerTech.choices,
		"Please choose from one of the selections"
	),
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
				design_techs: "",
				design_skillset: "",
				why_join: "",
			}}
			// TODO: Reconfigure validation!!!!
			// validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log("Submit Successful", values);
				props.setCurrentForm({
					...props.currentForm,
					design_techs: values.design_techs,
					design_skillset: values.design_skillset,
					why_join: values.why_join,
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

						<label htmlFor="whyJoin">
							Tell us why you'd like to join The COOP:{" "}
						</label>
						<Inputs.TextInput id="whyJoin" name="why_join"></Inputs.TextInput>

						<button type="submit">Submit</button>
					</FormStyle>
				</Form>
			)}
		/>
	);
};

export default DesignerForm;
