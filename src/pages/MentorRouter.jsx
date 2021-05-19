import React from 'react'
import MentorForm from '../components/forms/MentorForm'
import ContactForm from '../components/forms/ContactForm'
import FormSubmit from '../pages/FormSubmit'

const MentorRouter = (props) => {
  return (
		<>
			{props.newForm.role === "Mentor" && props.newForm.linkedin === "" ? (
				<MentorForm
					currentForm={props.currentForm}
					setCurrentForm={props.setCurrentForm}
				/>
			) : (
				<div></div>
			)}
			{props.newForm.role === "Mentor" && props.newForm.linkedin !== "" ? (
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
 
export default MentorRouter;