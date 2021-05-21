import React from 'react'
import DesignerForm from '../components/forms/DesignerForm'
import InfoIntakeForm from '../components/forms/InfoIntakeForm'
import ContactForm from '../components/forms/ContactForm'

const DesignerRouter = (props) => {
  return (
		<>
			{props.newForm.role === "Designer" && props.newForm.why_join.length === 0 ? (
				<DesignerForm
					currentForm={props.currentForm}
					setCurrentForm={props.setCurrentForm}
				/>
			) : (
				<div></div>
			)}
			{props.newForm.role === "Designer" &&
			props.newForm.why_join.length !== 0 &&
			props.newForm.bootcamps === undefined ? (
				<InfoIntakeForm
					currentForm={props.currentForm}
					setCurrentForm={props.setCurrentForm}
				/>
			) : (
				<div></div>
			)}
			{props.newForm.role === "Designer" &&
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
 
export default DesignerRouter;