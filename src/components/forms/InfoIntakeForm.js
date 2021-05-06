import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form} from "formik";
import * as Yup from "yup";
import { bootcamps } from "./fields";
import * as Inputs from "./inputs";
import styled from 'styled-components'

const FormStyle = styled.div`
background-color: black;
color: #FEFEFE;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
height: 50vh;
width: 50vw;
`

const validationSchema = Yup.object().shape({
  bootcamp: Yup.mixed().oneOf(bootcamps.choices, 'Please choose from one of the selections'),
	linkedin: Yup.string().required('This field is required'),
	github: Yup.string().required('This field is required'),
	portfolio: Yup.string().required('This field is required'),
})


const InfoIntakeForm = (props) => {
	const bootcampOptions = [];
	bootcamps.choices.forEach((element) => {
		let camp = { label: `${element}`, value: `${element}` };
		bootcampOptions.push(camp);
	});
	return (
		<Formik
			initialValues={{
				bootcamp: "",
				linkedin: "",
				github: "",
				portfolio: "",
			}}
			// validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log("Submit Successful", values);
				props.setCurrentForm({
					...props.currentForm,
					bootcamp: values.bootcamp,
					linkedin: values.linkedin,
					github: values.github,
					portfolio: values.portfolio,
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
						<h1>Tell us more about you</h1>
						<Inputs.SelectInput
							options={bootcampOptions}
							key={bootcamps.name}
							label={bootcamps.name}
							name={bootcamps.value}
							onBlur={setFieldTouched}
							onChange={setFieldValue}
						/>

						<label htmlFor="github">Github: </label>
						<Inputs.TextInput id="github" name="github"></Inputs.TextInput>

						<label htmlFor="portfolio">Portfolio: </label>
						<Inputs.TextInput
							id="portfolio"
							name="portfolio"></Inputs.TextInput>

						<label htmlFor="linkedin">Linkedin: </label>
						<Inputs.TextInput id="linkedin" name="linkedin"></Inputs.TextInput>

						<button type="submit">Submit</button>
					</FormStyle>
				</Form>
			)}
		/>
	);
};

export default InfoIntakeForm;