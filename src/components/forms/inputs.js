import { useField } from "formik";
import styled from 'styled-components'


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

export const SelectInputStyle = styled.select`
border:none;
border-bottom: 1px solid #F25187;
background-color: transparent;
text-decoration: none;
color:  #F25187;
`

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
			<SelectInputStyle placeholder='Select up to 4' key={props.name} {...field} {...props}/>
          
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}

		</div>
	);
};