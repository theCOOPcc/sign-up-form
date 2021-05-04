import { Form, useField } from "formik";
import styled from 'styled-components'
import ReactSelect from 'react-select';
import * as Fields from './fields'
import { designFields} from "../Form/fields";
const Input = styled.input`
display: inline-block;
padding: 0.75em;
margin: 0.75em;

cursor: pointer;
background-color: black;
border: 1px solid #F25187;
/* text-decoration: underline; */ 
color: #FEFEFE;

`

const Label = styled.label`
color: #FEFEFE;
`

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
    borderBottom: '1px solid #F25187',
    color: 'white',
    backgroundColor: '#562636',

    padding: 5,
    width: 200,
   
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    backgroundColor:'black',
    color: 'white'
  }),
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: '#F25187', 
    color: 'white'
  }),
  singleValue: (provided, state)=> {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    
    return {...provided, opacity, transition}
  }
}





export const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<Label htmlFor={props.id || props.name}>{label}</Label>
			<Input placeholder='Type response here...' type='text' className="text-input" {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

export const SelectInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	// console.log(field, meta)
	return (
		<div>
			<Label htmlFor={props.id || props.name}>{label}</Label>
			{console.log(designFields)}
			<ReactSelect>
			<FormStyling placeholder='Select up to 4' key={props.name} {...field} {...props}/>
			</ReactSelect>
          
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}

		</div>
	);
};