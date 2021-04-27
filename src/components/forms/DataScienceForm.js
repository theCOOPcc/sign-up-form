import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form} from "formik";
import * as Yup from "yup";
import * as Fields from "./fields";
import * as Inputs from "./inputs";
import styled from 'styled-components'


const FormStyle = styled.form`
background-color: black;

color: #F25187;
display:flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`

const validationSchema = Yup.object().shape({
  data_sci_skillset: Yup.mixed().oneOf(Fields.dataSciSkills.choices, 'Please choose from one of the selections'),
  why_join: Yup.string()
	.required('This field is required'),
})

const DataScienceForm = () => {
  return (
    <Formik
    initialValues={{
      data_sci_skillset: '',
      why_join: "",
    }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log('Submit Successful', values)
    }}
    >
      <Form>
        <FormStyle>
          <div>
      <h1>Tell us a little about your interests</h1>
            
          </div>
					{Fields.dataSciFields.map(f => (
						<Inputs.SelectInput key={f.name} label={f.name} name={f.value}>
							<option value={f.value} ></option>
							{f.choices.map((c) => (
								<option name={c.value} key={c} >{c}</option>
							))}
						</Inputs.SelectInput>
					))}

					<label htmlFor="whyJoin">Tell us why you'd like to join: </label>
					<Inputs.TextInput id="whyJoin" name="why_join"></Inputs.TextInput>

					<button type='submit'>Submit</button>
        </FormStyle>

      </Form>
    </Formik>
  )
}

export default DataScienceForm;