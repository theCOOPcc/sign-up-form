import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { dataSciSkills } from "./meta/fields";
import * as Inputs from "./meta/inputs";
import styled from "styled-components";
import {FormStyle, StyleDiv, TextLabel} from './meta/inputs'


const FullForm = styled.div`
width: 100%;
height: 100%;
`


const Button = styled.button`
background-color: #00C9B1;
color: #F6F6F6;
border: none;
border-radius: 3px;
width: 100px;
height:25px;
`


const validationSchema = Yup.object().shape({
	data_sci_skillset: Yup.mixed().oneOf(
		dataSciSkills.choices,
		"Please choose from one of the selections"
	),
	why_join: Yup.string().required("This field is required"),
});

const DataScienceForm = (props) => {

  	const dataSciOptions = [];
		dataSciSkills.choices.forEach((element) => {
			let skill = { label: `${element}`, value: `${element}` };
			dataSciOptions.push(skill);
		});


	return (
		<Formik
			initialValues={{
				data_sci_skillset: "",
				why_join: "",
			}}
			// validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log("Submit Successful", values);
				props.setCurrentForm({
					...props.currentForm,
					data_sci_skillset: values.data_sci_skillset,
					why_join: values.why_join,
				});
				console.log('data science', props.currentForm);
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
							key={dataSciSkills.name}
							label={dataSciSkills.name}
							name={dataSciSkills.value}
							options={dataSciOptions}
						/>

            <StyleDiv>

						<TextLabel htmlFor="whyJoin">
							Tell us why you'd like to join The COOP:{" "}
						</TextLabel>
						<Inputs.TextInput id="whyJoin" name="why_join"></Inputs.TextInput>

            </StyleDiv>


						<Button type="submit">Submit</Button>
					</FormStyle>
				</Form>
			)}
		/>
	);
};


export default DataScienceForm;
