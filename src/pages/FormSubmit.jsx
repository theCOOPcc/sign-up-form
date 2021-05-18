import React from "react";

const FormSubmit = () => {
	return (
		<>
			<p>Thanks for your interest in theCOOP!</p>
			<p>Click submit to send us your info.</p>
			<div className="button-container">
				<BackBtn
					type="button"
					onClick={() => {
						props.setCurrentForm({
							...props.currentForm,
							first_name: "",
							last_name: "",
							pronouns: "",
							email: "",
						});
					}}>
					&lt; Back
				</BackBtn>
				<Button type="submit">Submit</Button>
			</div>
		</>
	);
};

export default FormSubmit;
