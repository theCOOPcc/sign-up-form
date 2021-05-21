import React from "react";
import EngineerForm from "../components/forms/EngineerForm";
import InfoIntakeForm from "../components/forms/InfoIntakeForm";
import ContactForm from "../components/forms/ContactForm";

const EngineerRouter = (props) => {
	console.log("this is it", props.newForm.why_join);
	return (
		<>
			{props.newForm.why_join.length === 0 &&
			props.newForm.role === "Engineer" ? (
				<EngineerForm
					currentForm={props.currentForm}
					setCurrentForm={props.setCurrentForm}
				/>
			) : (
				<div></div>
			)}
			{props.newForm.role === "Engineer" &&
			props.newForm.why_join.length !== 0 &&
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
};

export default EngineerRouter;
