import { Form, useField, FieldProps } from "formik";
import styled from "styled-components";
import ReactSelect, { ReactSelectProps } from "react-select";
import * as Fields from "./fields";
import { designFields } from "../Form/fields";
// import Select from "react-select/src/Select";
// import Select from "react-select/src/Select";

const Input = styled.input`
	display: inline-block;
	padding: 0.75em;
	margin: 0.75em;

	cursor: pointer;
	background-color: black;
	border: 1px solid #f25187;
	/* text-decoration: underline; */
	color: #fefefe;
`;

const Label = styled.label`
	color: #fefefe;
`;

// export const SelectInputStyle = styled.select`
// --webkit-appearance: none;
// --moz-appearance: none;
// border:none;
// border-bottom: 1px solid #F25187;
// background-color: transparent;
// text-decoration: none;
// color:  #F25187;
// `

export const FormStyling = {
	container: (provided, state) => ({
		...provided,
		width: 200,
	}),
	// input: (provided, state) => ({
	//   display:
	// }),
	option: (provided, state) => ({
		...provided,
		borderBottom: "1px solid #F25187",
		color: "white",
		backgroundColor: "#562636",

		padding: 5,
		width: 200,
	}),
	valueContainer: (provided, state) => ({
		...provided,
		backgroundColor: "black",
		color: "white",
	}),
	multiValue: (provided, state) => ({
		...provided,
		backgroundColor: "#F25187",
		color: "white",
	}),
	singleValue: (provided, state) => {
		const opacity = state.isDisabled ? 0.5 : 1;
		const transition = "opacity 300ms";

		return { ...provided, opacity, transition };
	},
};

export const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<Label htmlFor={props.id || props.name}>{label}</Label>
			<Input
				placeholder="Type response here..."
				type="text"
				className="text-input"
				{...field}
				{...props}
			/>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

export const Dropdown = ({ label, ...props }) => {
	const [field, meta, helpers] = useField(props);

	const { options } = props;
	const { touched, error, value } = meta;
	const { setValue } = helpers;

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<ReactSelect
				options={options}
				name={field.name}
				onChange={(option) => setValue(option.value)}
				instanceId={props.iid}
			/>
		</>
	);
};

export const SelectField = ({ label, ...props }) => {
	const colorStyles = {
		container: (provided, state) => ({
			...provided,
			width: 200,
		}),
		// input: (provided, state) => ({
		//   display:
		// }),
		option: (provided, state) => ({
			...provided,
			borderBottom: "1px solid #F25187",
			color: "white",
			backgroundColor: "#562636",

			padding: 5,
			width: 200,
		}),
		valueContainer: (provided, state) => ({
			...provided,
			backgroundColor: "black",
			color: "white",
		}),
		multiValue: (provided, state) => ({
			...provided,
			backgroundColor: "#F25187",
			color: "white",
		}),
		singleValue: (provided, state) => {
			const opacity = state.isDisabled ? 0.5 : 1;
			const transition = "opacity 300ms";

			return { ...provided, opacity, transition };
		},
	};
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
			{label && (
				<h3 className="input-label" htmlFor={name} error={error}>
					{label}
				</h3>
			)}

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
				// styles={colorStyles}
			/>

			{touched && error ? <p className="error-text">{error}</p> : null}
		</div>
	);
};

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
		<div>
			<Label htmlFor={props.id || props.name}>{label}</Label>
			{/* {console.log(designFields)} */}
			<ReactSelect
				// options={options}
				id={id}
				placeholder={placeholder}
				options={options}
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
				touched={touched}
				error={error}
				backspaceRemovesValue={backspaceRemovesValue}
				components={{ ClearIndicator: null }}>
				{/* <FormStyling
					placeholder="Select up to 4"
					key={props.name}
					{...field}
					{...props}
				/> */}
			</ReactSelect>

			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};
