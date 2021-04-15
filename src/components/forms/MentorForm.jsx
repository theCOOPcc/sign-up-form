import React from "react";
import { Formik, Form, Field, useFormik } from "formik";
import "./MentorForm.css";
import * as Yup from "yup";


const helpOptions =  [
    {key: 'Selct an option', value: ''},
    {key: '1:1 Mentoring', value: 'mentoring'},
    {key: 'Group Presentations', value: 'groupPres'},
    {key: 'Sprint Planning', value: 'sprintPlan'},
    {key: 'Lightning talk (Pres.)', value: 'ltPres'},
    {key: 'Lightning talk (Aud.)', value: 'ltAud'},
    {key: 'Interview Prep', value: 'intPrep'},
];


const validationSchema = Yup.object({
	helpWith: Yup.string().required("Required"),
	availDates: Yup.string().required("Required"),
	workProf: Yup.string().required("Required"),
	selectOption: Yup.string().required("Required"),
});

export const MentorForm = () => {
  const formik = useFormik({
    initialValues: {
      helpWith: '',
      availDates: '',
      workProfile:'',
    },
    onSubmit: values => {
      console.log(values)
    },
  });


	return (
		<form onSubmit={formik.handleSubmit}>
				<div className="required">
					<label htmlFor="helpWith">I'd love to help with:</label>
					<select 
            id="helpWith" 
            name="helpWith"
            type='text'
            onChange={formik.handleChange}
            value={formik.values.helpWith}
            >
						<option value="one-on">1:1 Mentoring</option>
						<option value="group-pres">Group Presentations</option>
						<option value="des-review">Design Review</option>
						<option value="light-tlk-pres">Lightning Talk (Presenter)</option>
						<option value="light-tlk-aud">Lightning Talk (Audience)</option>
						<option value="int-prep">Interview Prep</option>
					</select>
				</div>

				<div className="required">
					<label htmlFor="availDates">I'm avalilable to help out: </label>
					<select 
           id="availDates" 
           name="availDates"
           onChange={formik.handleChange}
           value={formik.values.availDates}
           >
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
					</select>
				</div>

				<div className="form-control required">
					<label htmlFor="workProfile">Linkedin Profile: </label>
					<input 
          type="text" 
          id="workProfile" 
          name="workProfile" 
          onChange={formik.handleChange}
          value={formik.values.workProfile}
          />
				</div>

				<button type="submit">Submit</button>
		</form>
	);
};
