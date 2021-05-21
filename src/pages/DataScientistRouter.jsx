import React from 'react'
import DataScienceForm from "../components/forms/DataScienceForm";
import InfoIntakeForm from "../components/forms/InfoIntakeForm";
import ContactForm from "../components/forms/ContactForm";

const DataScientistRouter = (props) => {
  return (
		<>
			{props.newForm.role === "Data Scientist" &&
			props.newForm.why_join.length === 0 ? (
				<DataScienceForm
					currentForm={props.currentForm}
					setCurrentForm={props.setCurrentForm}
				/>
			) : (
				<div></div>
			)}
			{props.newForm.role === "Data Scientist" &&
			props.newForm.why_join.length !== 0 &&
			props.newForm.bootcamps === undefined ? (
				<InfoIntakeForm
					currentForm={props.currentForm}
					setCurrentForm={props.setCurrentForm}
				/>
			) : (
				<div></div>
			)}
			{props.newForm.role === "Data Scientist" &&
			props.newForm.bootcamps !== undefined ? (
				<ContactForm
					currentForm={props.currentForm}
					setCurrentForm={props.setCurrentForm}
					setFormComplete={props.setFormComplete}
				/>
			) : (
				<div></div>
			)}
		</>
	);
}
 
export default DataScientistRouter;