import React from "react";
import styled from "styled-components";

const Button = styled.button`
	border: 2px solid #f25187;
	box-sizing: border-box;
	border-radius: 2px;
	height: 50px;
	width: 250px;
	color: #f25187;
	background-color: #1f1216;
	margin-bottom: 13px;
`;

const RoleButtons = (props) => {
	return (
		<>
			<Button
				type="button"
				onClick={() =>
					props.setCurrentForm({
						...props.currentForm,
						role: { label: "Engineer", value: "Engineer" },
					})
				}>
				Engineer
			</Button>
			<Button
				type="button"
				onClick={() =>
					props.setCurrentForm({
						...props.currentForm,
						role: { label: "Designer", value: "Designer" },
					})
				}>
				Designer
			</Button>
			<Button
				type="button"
				onClick={() =>
					props.setCurrentForm({
						...props.currentForm,
						role: { label: "Data Scientist", value: "Data Scientist" },
					})
				}>
				Data Scientist
			</Button>
			<Button
				type="button"
				onClick={() =>
					props.setCurrentForm({
						...props.currentForm,
						role: { label: "Mentor", value: "Mentor" },
					})
				}>
				Mentor
			</Button>
		</>
	);
};

export default RoleButtons;
