import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// import "./styles.css";

import SelectField from "./ResearchDropdown";

const options = [
	{
		label: "Option 1",
		value: "option-1",
	},
	{
		label: "Option 2",
		value: "option-2",
	},
	{
		label: "Option 3",
		value: "option-3",
	},
];

const schemaValidation = Yup.object().shape({
	fieldOfResearch: Yup.array()
		.min(1, "Select at least one field")
		.of(
			Yup.object()
				.shape({
					label: Yup.string(),
					value: Yup.string(),
				})
				.nullable()
		),
	disclosureStatus: Yup.object()
		.shape({
			label: Yup.string(),
			value: Yup.string(),
		})
		.nullable()
		.required("Status is required"),
});

class ResearchForm extends Component {
	state = {
		values: {
			fieldOfResearch: [],
			disclosureStatus: [],
		},
	};

	handleSubmit = (values, { resetForm, setSubmitting }) => {
		console.log("handleSubmit values", values);

		resetForm();
		setSubmitting(false);
	};

	render() {
		return (
			<Formik
				initialValues={this.state.values}
				onSubmit={(values, props) => this.handleSubmit(values, props)}
				validationSchema={() => schemaValidation}
				render={({
					values,
					errors,
					touched,
					setFieldValue,
					setFieldTouched,
					isSubmitting,
				}) => (
					<Form>
						<SelectField
							id="fieldOfResearch"
							name="fieldOfResearch"
							label="Field of Research"
							placeholder="Select fields"
							options={options}
							value={values.fieldOfResearch}
							isMulti={true}
							onChange={setFieldValue}
							onBlur={setFieldTouched}
							touched={touched.fieldOfResearch}
							error={errors.fieldOfResearch}
							isClearable={true}
							backspaceRemovesValue={true}
						/>
						<SelectField
							id="disclosureStatus"
							name="disclosureStatus"
							label="Disclosure Status"
							placeholder="Select status"
							options={options}
							value={values.disclosureStatus}
							isMulti={false}
							onChange={setFieldValue}
							onBlur={setFieldTouched}
							touched={touched.disclosureStatus}
							error={errors.disclosureStatus}
							isClearable={true}
							backspaceRemovesValue={true}
						/>

						<button type="submit" disabled={isSubmitting}>
							<h3>Submit</h3>
						</button>
					</Form>
				)}
			/>
		);
	}
}

 
export default ResearchForm;