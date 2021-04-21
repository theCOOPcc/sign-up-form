import { useField } from "formik";

export const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input type='text' className="text-input" {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

export const SelectInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	console.log(field, meta)
	return (
		<div>
			<label htmlFor={props.id || props.name}>{label}</label>
			<select key={props.name} {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};

// export const TextAreaInput = ({label, ...props}) => {
//   const [field, meta] = useField(props);
//   return (
//     <div>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <Field as='textarea' {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className='error'>{meta.error}</div>
//       ) : null}
//     </div>
//   )
// }
