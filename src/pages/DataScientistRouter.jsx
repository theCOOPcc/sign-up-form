import React from 'react'
import DataScienceForm from "../components/forms/DataScienceForm";
import InfoIntakeForm from "../components/forms/InfoIntakeForm";
import ContactForm from "../components/forms/ContactForm";

const DataScientistRouter = (props) => {
  return (
		<>
			{props.newForm.role === "Data Scientist" && props.newForm.why_join === "" ? (
				<DataScienceForm
					currentForm={props.currentForm}
					setCurrentForm={props.setCurrentForm}
				/>
			) : (
				<div></div>
			)}
			{props.newForm.role === "Data Scientist" &&
			props.newForm.why_join !== "" &&
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
					addItem={props.addItem}
					newForm={props.newForm}
				/>
			) : (
				<div></div>
			)}
		</>
	);
}
 
export default DataScientistRouter;