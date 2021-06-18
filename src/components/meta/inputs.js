import { Form, useField, FieldProps } from "formik";
import styled from "styled-components";
import ReactSelect, { ReactSelectProps } from "react-select";
import * as Fields from "./fields";
import { designFields } from "./fields";

const Input = styled.input`
	cursor: pointer;
	background-color: #1f1216;
	border: 1px solid #f25187;
	color: #fefefe;
`;

export const Label = styled.label`
	color: #fefefe;
	padding-right: 10px;
`;

export const TextLabel = styled(Label)`
	margin-bottom: 20px;
`;

export const FormStyle = styled.div`
	background-color: #1f1216;
	color: #fefefe;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 100%;
	width: 100%;
	line-height: 1;
	padding-top: 10px;
`;

export const FormStyling = {
	container: (provided, state) => ({
		...provided,
		width: 439,
		display: "inline-flex",
		flexDirection: "row",
	}),
	control: (provided, state) => ({
		...provided,
		display: "inline-flex",
		flexDirection: "row",
		flexWrap: "nowrap",
		border: "none",
		borderRadius: 0,
		backgroundColor: "transparent",
		borderBottom: "1px solid #F25187",
		width: 439,
	}),
	menu: (provided, state) => ({
		...provided,
		backgroundColor: "#1f1216",
		color: "#FFFFFF",
		width: 439,
		border: "1px solid #F25187",
		borderRadius: "none",
		margin: "none",
		padding: 0,
	}),
	option: (provided, state) => ({
		...provided,
		borderBottom: "1px solid #C4C4C4",
		color: "#FEFEFE",
		backgroundColor: "#562636",
		width: 439,
		textAlign: "left",
		paddingLeft: 36,
		paddingTop: 15,
		paddingBottom: 15,
		margin: 0,
	}),
	valueContainer: (provided, state) => ({
		...provided,
		display: "flex",
		flexWrap: "nowrap",
		placeholder: "Select up to 4",
		backgroundColor: "#1f1216",
		color: "#FFFFFF",
		width: 200,
	}),
	indicatorSeparator: (provided, state) => ({
		...provided,
		display: "none",
	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
		color: "#F25187",
	}),
	indicatorsContainer: (provided, state) => ({
		...provided,
		color: "#F25187",
		cursor: "pointer"
	}),
	input: (provided, state) => ({
		display: "inline",
	}),
	multiValue: (provided, state) => ({
		...provided,
		backgroundColor: "#F25187",
		color: "#FEFEFE",
	}),
	singleValue: (provided, state) => ({
		...provided,
		backgroundColor: "#F25187",
		color: "#FEFEFE",
		padding: "10px",
	}),
};

export const StyleDiv = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	padding: 10px 0px;
`;

export const TextInputRequired = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className="container">
			<StyleDiv>
				<Label htmlFor={props.id || props.name}>
					{label}
					<span className="star">*</span>
				</Label>
				<Input
					placeholder="Type response here..."
					type="text"
					className="text-input"
					{...field}
					{...props}
				/>
			</StyleDiv>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};

export const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className="container">
			<StyleDiv>
				<Label htmlFor={props.id || props.name}>{label}</Label>
				<Input
					placeholder="Type response here..."
					type="text"
					className="text-input"
					{...field}
					{...props}
				/>
			</StyleDiv>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};

export const SelectField = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	function handleChange(value) {
		const { onChange, name } = props;

		onChange(name, value);
	}

	function handleBlur() {
		const { onBlur, name } = props;

		onBlur(name, true);
	}

	const {
		id,
		name,
		// label,
		placeholder,
		options,
		value,
		isMulti,
		isDisabled,
		touched,
		error,
		isClearable,
		backspaceRemovesValue,
	} = props;
	return (
		<div className="input-field-wrapper">
			<StyleDiv>
				{label && (
					<Label className="input-label" htmlFor={name} error={error}>
						{label}
					</Label>
				)}
				<div className="container">
					<ReactSelect
						id={id}
						placeholder={placeholder}
						options={options}
						value={value}
						onChange={handleChange}
						onBlur={handleBlur}
						touched={touched}
						error={error}
						isMulti
						isDisabled={isDisabled}
						isClearable={isClearable}
						backspaceRemovesValue={backspaceRemovesValue}
						components={{ ClearIndicator: null }}
						styles={FormStyling}
						hideSelectedOptions={true}
						closeMenuOnSelect={false}
					/>
					{meta.touched && meta.error ? (
						<div className="error">{meta.error}</div>
					) : null}
					{touched && error ? <p className="error-text">{error}</p> : null}
				</div>
			</StyleDiv>
		</div>
	);
};

export const SelectFieldRequired = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	function handleChange(value) {
		const { onChange, name } = props;

		onChange(name, value);
	}

	function handleBlur() {
		const { onBlur, name } = props;

		onBlur(name, true);
	}

	const {
		id,
		name,
		// label,
		placeholder,
		options,
		value,
		isMulti,
		isDisabled,
		touched,
		error,
		isClearable,
		backspaceRemovesValue,
	} = props;
	return (
		<div className="input-field-wrapper">
			<StyleDiv>
				{label && (
					<Label className="input-label" htmlFor={name} error={error}>
						{label} <span className="star">*</span>
					</Label>
				)}
				<div className="container">
					<ReactSelect
						id={id}
						placeholder={placeholder}
						options={options}
						value={value}
						onChange={handleChange}
						onBlur={handleBlur}
						touched={touched}
						error={error}
						isMulti
						isDisabled={isDisabled}
						isClearable={isClearable}
						backspaceRemovesValue={backspaceRemovesValue}
						components={{ ClearIndicator: null }}
						styles={FormStyling}
						hideSelectedOptions={true}
						closeMenuOnSelect={false}
					/>
					{meta.touched && meta.error ? (
						<div className="error">{meta.error}</div>
					) : null}
					{touched && error ? <p className="error-text">{error}</p> : null}
				</div>
			</StyleDiv>
		</div>
	);
};

// TODO: There are several things in this component that are defined but never used, or commented out. For now, leave them in, so we can return to this component down the road to use for future select inputs and have the whole set of props available.
export const SelectInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	function handleChange(value) {
		const { onChange, name } = props;

		onChange(name, value);
	}

	function handleBlur() {
		const { onBlur, name } = props;

		onBlur(name, true);
	}
	const {
		id,
		name,
		// label,
		placeholder,
		options,
		value,
		isMulti,
		isDisabled,
		touched,
		error,
		isClearable,
		backspaceRemovesValue,
	} = props;
	return (
		<>
			<StyleDiv>
				<Label style={{ paddingBottom: "0" }} htmlFor={props.id || props.name}>
					{label}
				</Label>
				<div className="container">
					<ReactSelect
						id={id}
						placeholder={placeholder}
						options={options}
						value={value}
						onChange={handleChange}
						styles={FormStyling}
						onBlur={handleBlur}
						touched={touched}
						error={error}
						backspaceRemovesValue={backspaceRemovesValue}
						components={{ ClearIndicator: null }}></ReactSelect>
					{meta.touched && meta.error ? (
						<div className="error">{meta.error}</div>
					) : null}
					{touched && error ? <p className="error-text">{error}</p> : null}
				</div>
			</StyleDiv>
		</>
	);
};

export const SelectInputRequired = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	function handleChange(value) {
		const { onChange, name } = props;

		onChange(name, value);
	}

	function handleBlur() {
		const { onBlur, name } = props;

		onBlur(name, true);
	}
	const {
		id,
		name,
		// label,
		placeholder,
		options,
		value,
		isMulti,
		isDisabled,
		touched,
		error,
		isClearable,
		backspaceRemovesValue,
	} = props;
	return (
		<>
			<StyleDiv>
				<Label style={{ paddingBottom: "0" }} htmlFor={props.id || props.name}>
					{label} <span className="star">*</span>
				</Label>
				<div className="container">
					<ReactSelect
						id={id}
						placeholder={placeholder}
						options={options}
						value={value}
						onChange={handleChange}
						styles={FormStyling}
						onBlur={handleBlur}
						touched={touched}
						error={error}
						backspaceRemovesValue={backspaceRemovesValue}
						components={{ ClearIndicator: null }}></ReactSelect>
					{meta.touched && meta.error ? (
						<div className="error">{meta.error}</div>
					) : null}
					{touched && error ? <p className="error-text">{error}</p> : null}
				</div>
			</StyleDiv>
		</>
	);
};
