import { Form, useField, FieldProps } from "formik";
import styled from "styled-components";
import ReactSelect, { ReactSelectProps } from "react-select";
import * as Fields from "./fields";
import { designFields } from "./fields";

const Input = styled.input`
	padding: 0.75em;
	margin: 0.75em;
	cursor: pointer;
	background-color: black;
	border: 1px solid #f25187;
	color: #fefefe;
`;

export const Label = styled.label`
	color: #fefefe;
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
	padding: 10px;
`;

export const FormStyling = {
	container: (provided, state) => ({
		...provided,
		width: 439,
		display: "inline-flex",
		flexDirection: "row",
		// align-items: "right"
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
		backgroundColor: "black",
		color: "white",
		width: 439,
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
		width: 439,
		textAlign: "left",
		paddingLeft: 36,
		paddingTop: 15,
		paddingBottom: 15,
	}),
	valueContainer: (provided, state) => ({
		...provided,
		display: "flex",
		flexWrap: "nowrap",
		placeholder: "please select up to 4",
		backgroundColor: "black",
		color: "white",
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
	}),
	input: (provided, state) => ({
		display: "inline",
	}),
	multiValue: (provided, state) => ({
		...provided,
		backgroundColor: "#F25187",
		color: "white",
	}),
	singleValue: (provided, state) => ({
		...provided,
		backgroundColor: "#F25187",
		color: "white",
		padding: "10px",
	}),
};

export const StyleDiv = styled.div`
	display: flex;
	padding: 10px;
	align-items: center;
	margin-bottom: 20px;
`;

export const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<StyleDiv>
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
		</StyleDiv>
	);
};

export const Dropdown = ({ label, ...props }) => {
	const [field, meta, helpers] = useField(props);

	const { options } = props;
	const { touched, error, value } = meta;
	const { setValue } = helpers;

	return (
		<FormStyle>
			<div>
				<Label htmlFor={props.id || props.name}>{label}</Label>
			</div>
			<div>
				<ReactSelect
					options={options}
					name={field.name}
					onChange={(option) => setValue(option.value)}
					instanceId={props.iid}
				/>
			</div>
		</FormStyle>
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
			</StyleDiv>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
			{touched && error ? <p className="error-text">{error}</p> : null}
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

				{/* {console.log(designFields)} */}
				<ReactSelect
					// options={options}
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
					components={{ ClearIndicator: null }}>
					{/* <FormStyling
						placeholder="Select up to 4"
						key={props.name}
						{...field}
						{...props}
					/> */}
				</ReactSelect>
			</StyleDiv>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
			{touched && error ? <p className="error-text">{error}</p> : null}
		</>
	);
};
