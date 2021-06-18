import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { bootcamps } from "../meta/fields";
import * as Inputs from "../meta/inputs";
import styled from "styled-components";
import { FormStyle, StyleDiv, TextLabel } from "../meta/inputs";
import group122 from "./imgs/Group122.svg";

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

const validationSchema = Yup.object().shape({
	bootcamp: Yup.mixed().oneOf(
		bootcamps.choices,
		"Please choose from one of the selections"
	),
	linkedin: Yup.string().required("Please enter your LinkedIn profile"),
	github: Yup.string(),
	portfolio: Yup.string(),
});

const InfoIntakeForm = (props) => {
	const bootcampOptions = [];
	bootcamps.choices.forEach((element) => {
		let camp = { label: `${element}`, value: `${element}` };
		bootcampOptions.push(camp);
	});
	return (
		<Formik
			initialValues={{
				bootcamps: "",
				linkedin: "",
				github: "",
				portfolio: "",
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log("Submit Successful", values);
				props.setCurrentForm({
					...props.currentForm,
					bootcamps: values.bootcamps,
					linkedin: values.linkedin,
					github: values.github,
					portfolio: values.portfolio,
				});
				console.log("info intake", props.currentForm);
			}}
			render={({
				values,
				errors,
				touched,
				setFieldValue,
				setFieldTouched,
				isSubmitting,
				resetForm,
			}) => (
				<Form>
					<FormStyle>
						<h2>TELL US MORE ABOUT YOU</h2>
						<img alt="some fields are required" src={group122} />
						<div className="container">
							<Inputs.SelectInputRequired
								options={bootcampOptions}
								key={bootcamps.name}
								label={bootcamps.name}
								name={bootcamps.value}
								onBlur={setFieldTouched}
								onChange={setFieldValue}
							/>
							<StyleDiv>
								<TextLabel htmlFor="github">Github:</TextLabel>
								<Inputs.TextInput
									id="github"
									name="github"
									placeholder="Paste your Github URL here"
								/>
							</StyleDiv>

							<StyleDiv>
								<TextLabel htmlFor="portfolio">Portfolio:</TextLabel>
								<Inputs.TextInput
									id="portfolio"
									name="portfolio"
									placeholder="Paste your portfolio URL here"
								/>
							</StyleDiv>

							<StyleDiv>
								<TextLabel htmlFor="linkedin">Linkedin: </TextLabel>
								<Inputs.TextInputRequired
									id="linkedin"
									name="linkedin"
									placeholder="Paste your LinkedIn URL here"
								/>
							</StyleDiv>
						</div>
						<div className="button-container">
							<BackBtn
								onClick={() =>
									props.setCurrentForm({
										...props.currentForm,
										design_techs: [],
										design_skillset: [],
										why_join: [],
										engineer_skillset: [],
										engineer_techs: [],
										data_sci_skillset: [],
									})
								}>
								&lt; Back
							</BackBtn>
							<Button type="submit">Next</Button>
						</div>
					</FormStyle>
				</Form>
			)}
		/>
	);
};

export default InfoIntakeForm;
