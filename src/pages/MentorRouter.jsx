import React from 'react'
import MentorForm from '../components/forms/MentorForm'
import ContactForm from '../components/forms/ContactForm'

const MentorRouter = (props) => {
  return ( 
    <>
    	{props.newForm.role === "Mentor" && props.newForm.linkedin === "" ? (
				<MentorForm currentForm={props.currentForm} setCurrentForm={props.setCurrentForm} />
			) : (
				<div></div>
			)}
			{props.newForm.role === "Mentor" && props.newForm.linkedin !== "" ? (
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
 
export default MentorRouter;