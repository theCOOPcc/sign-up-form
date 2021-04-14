import React from "react";
import { Formik, Form, Field } from "formik";
import "./MentorForm.css";
import * as Yup from "yup";

// const helpOptions =  [
//     {key: 'Selct an option', value: ''},
//     {key: '1:1 Mentoring', value: 'mentoring'},
//     {key: 'Group Presentations', value: 'groupPres'},
//     {key: 'Sprint Planning', value: 'sprintPlan'},
//     {key: 'Lightning talk (Pres.)', value: 'ltPres'},
//     {key: 'Lightning talk (Aud.)', value: 'ltAud'},
//     {key: 'Interview Prep', value: 'intPrep'},
// ];

const initialValues = {
	helpWith: "",
	availDates: "",
	workProfile: "",
};

const onSubmit = (values) => {
	console.log("form values", values);
};

const validationSchema = Yup.object({
	helpWith: Yup.string().required("Required"),
	availDates: Yup.string().required("Required"),
	workProf: Yup.string().required("Required"),
	selectOption: Yup.string().required("Required"),
});

export const MentorForm = () => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			<Form>
				<div className="form-control required">
					<label htmlFor="helpWith">I'd love to help with:</label>
					<Field id="helpWith" as="select" name="helpWith">
						<option value="one-on">1:1 Mentoring</option>
						<option value="group-pres">Group Presentations</option>
						<option value="des-review">Design Review</option>
						<option value="light-tlk-pres">Lightning Talk (Presenter)</option>
						<option value="light-tlk-aud">Lightning Talk (Audience)</option>
						<option value="int-prep">Interview Prep</option>
					</Field>
				</div>

				<div className="form-control required">
					<label htmlFor="availDates">I'm avalilable to help out: </label>
					<Field as="select" id="availDates" name="availDates">
						<option type="checkbox" value="monthly">
							Monthly
						</option>
						<option type="checkbox" value="weekly">
							Weekly
						</option>
						<option type="checkbox" value="daily">
							Daily
						</option>
						<option type="checkbox" value="on-call">
							On-Call
						</option>
					</Field>
				</div>

				<div className="form-control required">
					<label htmlFor="workProfile">Linkedin Profile: </label>
					<Field type="text" id="workProfile" name="workProfile" />
				</div>

				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
};
