import React from 'react'
import EngineerForm from '../components/forms/EngineerForm';
import InfoIntakeForm from '../components/forms/InfoIntakeForm';
import ContactForm from '../components/forms/ContactForm'

const EngineerRouter = (props) => {
  return (
		<>
			{props.newForm.role === "Engineer" && props.newForm.why_join === "" ? (
				<EngineerForm
					currentForm={props.currentForm}
					setCurrentForm={props.setCurrentForm}
				/>
			) : (
				<div></div>
			)}
			{props.newForm.role === "Engineer" &&
			props.newForm.why_join !== "" &&
			props.newForm.bootcamps === undefined ? (
				<InfoIntakeForm
					currentForm={props.currentForm}
					setCurrentForm={props.setCurrentForm}
				/>
			) : (
				<div></div>
			)}
			{props.newForm.role === "Engineer" &&
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
 
export default EngineerRouter;