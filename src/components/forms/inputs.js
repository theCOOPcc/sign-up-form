import { useField } from "formik";
import styled from 'styled-components'


const Input = styled.input`
display: block;
padding: 0.75em;
margin: 0.75em;
border: none;
cursor: pointer;
background-color: transparent;
border: 1px solid #F25187
`
const Label = styled.label`
color: #FEFEFE;
`

const SelectInputStyle = styled.select`
border: 1px solid #F25187;
background-color: transparent;
`


export const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<Label htmlFor={props.id || props.name}>{label}</Label>
			<Input type='text' className="text-input" {...field} {...props} />
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
			<SelectInputStyle key={props.name} {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};

