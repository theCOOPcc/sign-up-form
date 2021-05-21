import React from "react";
import styled from "styled-components";
import { FormStyle } from "../components/meta/inputs";

const FormSubmit = (props) => {
	const Button = styled.button`
		background-color: #00c9b1;
		color: #f6f6f6;
		border: none;
		width: 183px;
		height: 50px;
	`;

	const BackBtn = styled.button`
		background-color: #1f1216;
		color: #00c9b1;
		font-size: 16px;
		border: none;
		width: 183px;
		height: 50px;
	`;

	return (
		<FormStyle>
			<div className="form-submit">
					<p>Thanks for your interest in theCOOP!</p>
					<p>Click submit to send us your info.</p>
			</div>
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
            props.setFormComplete(false)
					}}>
					&lt; Back
				</BackBtn>
				<Button onClick={() => {
          props.submitForm();
          console.log('submitting')
          }}>Submit</Button>
			</div>
		</FormStyle>
	);
};

export default FormSubmit;
