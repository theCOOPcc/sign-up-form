import { Form, useField, FieldProps } from "formik";
import styled from "styled-components";
import ReactSelect, { ReactSelectProps } from "react-select";
import * as Fields from "./fields";
import { designFields } from "../Form/fields";

const Input = styled.input`
  display: flex;
	flex-direction:row;
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

const FormStyle = styled.div`
background-color: black;
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
`

export const FormStyling = {
  container: (provided, state) => ({
    ...provided,
    width: 200,
    display: "inline-flex",
    flexDirection: "row",
  }),
  control: (provided, state) => ({
    ...provided,
		display:'inline-flex',
		flexDirection: 'row',
		flexWrap:'nowrap',
    border: "none",
    borderRadius: 0,
    backgroundColor: "transparent",
    borderBottom: "1px solid #F25187",
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: "black",
    color: "white",
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
  // singleValue: (provided, state) => ({
  //   ...provided,
  //   backgroundColor: '#F25187',
  //   color:'white',
  // }),
};

const StyleDiv = styled.div`
  display: flex;
	height: 100;
`;

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

// export const EngineerSelectInput = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   let bananas = [];
//   function createSelectors() {
//     Fields.firstFields.map((fields) => {
//       fields.choices.map((choice) => {
//         bananas.push({ value: `${choice}`, label: `${choice}` });
//       });
//     });
//   }
//   createSelectors();
//   return (
//     <StyleDiv>
//       <div>
//         <Label htmlFor={props.id || props.name}>{label}</Label>
//       </div>
//       {/* {console.log(designFields)} */}
//       <div>
//         <ReactSelect styles={FormStyling} options={bananas} isMulti>
//           {/* <FormStyling
// 					placeholder="Select up to 4"
// 					key={props.name}
// 					{...field}
// 					{...props}
// 				/> */}
//         </ReactSelect>
//       </div>

//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </StyleDiv>
//   );
// };


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
	// const colorStyles = {
	// 	container: (provided, state) => ({
	// 		...provided,
	// 		width: 200,
	// 	}),
	// 	// input: (provided, state) => ({
	// 	//   display:
	// 	// }),
	// 	option: (provided, state) => ({
	// 		...provided,
	// 		borderBottom: "1px solid #F25187",
	// 		color: "white",
	// 		backgroundColor: "#562636",

	// 		padding: 5,
	// 		width: 200,
	// 	}),
	// 	valueContainer: (provided, state) => ({
	// 		...provided,
	// 		backgroundColor: "black",
	// 		color: "white",
	// 	}),
	// 	multiValue: (provided, state) => ({
	// 		...provided,
	// 		backgroundColor: "#F25187",
	// 		color: "white",
	// 	}),
	// 	singleValue: (provided, state) => {
	// 		const opacity = state.isDisabled ? 0.5 : 1;
	// 		const transition = "opacity 300ms";

	// 		return { ...provided, opacity, transition };
	// 	},
	// };
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
		<div className="input-field-wrapper" style={{alignItems:'center'}}>
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
				styles={FormStyling}
				hideSelectedOptions={true}
				closeMenuOnSelect={false}
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
		<>
	
			<Label htmlFor={props.id || props.name}>{label}</Label>
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
			
				{meta.touched && meta.error ? (
					<div className="error">{meta.error}</div>
				) : null}
      </>
  );
};
