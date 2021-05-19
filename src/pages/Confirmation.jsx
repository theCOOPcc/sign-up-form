import React, { useState } from "react";
import styled from "styled-components";
import { FormStyle } from "../components/meta/inputs";

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

const Confirmation = (props) => {
	const [finished, setFinished] = useState(false);
	return (
		<>
			{finished === false ? (
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
								props.setFormComplete(false);
							}}>
							&lt; Back
						</BackBtn>
						<Button
							onClick={() => {
								props.submitForm();
								setFinished(true);
								console.log("submitting");
							}}>
							Submit
						</Button>
					</div>
				</FormStyle>
			) : (
				<FormStyle>
					<div className="modal">
						<p style={{ color: "#F6F6F6" }}>
							Your submission is in! Due to the high volume of responses, we’ll
							follow up with you as opportunities arise, we promise! We look
							forward to working together.
						</p>
						<p style={{ color: "#F6F6F6" }}>- theCOOP team</p>
						<a style={{ color: "#00C9B1" }} href="http://thecoop.cc">
							Return to theCoop homepage
						</a>
					</div>
				</FormStyle>
			)}
		</>
	);
};

export default Confirmation;
