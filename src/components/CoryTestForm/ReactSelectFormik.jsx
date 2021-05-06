import { useField, FieldProps } from "formik"
import Select, { Option, ReactSelectProps } from "react-select"
// import { Error Message, SelectField, FieldLabel } from

const Dropdown = ({label, ...props}) => {
  const [field, meta, helpers] = useField(props);

  const { options } = props;
  const { touched, error,value } = meta;
  const { setValue } = helpers;

  return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<Select
				isMulti
				options={options}
				name={field.name}
				onChange={(option) => setValue(option.value)}
				instanceId={props.iid}
			/>
			{error ? <p>{error}</p> : <p></p>}
		</>
	);
}
 
export default Dropdown;