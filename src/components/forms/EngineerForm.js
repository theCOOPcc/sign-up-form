import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form} from "formik";
import * as Yup from "yup";
import * as Fields from "./fields";
import * as Inputs from "./inputs";
import styled from 'styled-components'
import '../../App.css'


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

const Label = styled.label`
color: #FEFEFE;
`

const FullForm = styled.div`
width: 100%;
height: 100%;
`


const validationSchema = Yup.object().shape({
  engineer_skillset: Yup.mixed()
	.oneOf(Fields.engineerSkills.choices, 'Please choose from one of the selections'),
	engineer_techs: Yup.mixed()
	.oneOf(Fields.engineerTech.choices, 'Please choose from one of the selections'),
  why_join: Yup.string()
	.required('This field is required'),
})

const EngineerForm = () => {
  return (
    <FullForm>

    <Formik
    initialValues={{
      engineer_skillset: "",
			engineer_techs: "",
      why_join: ""
    }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log('Submit Successful', values)
    }}
    >
      <Form>
      <FormStyle>

      <h3>Tell us a little about your interests...</h3>

      {Fields.firstFields.map((f) => (
        <Inputs.EngineerSelectInput key={f.name} label={f.name} name={f.value}>
          <option  value={f.value}></option>
          {f.choices.map((c) => (
            <option name={c.value} key={c} value={c}>
              {c}
            </option>
          ))}
        </Inputs.EngineerSelectInput>
      ))}
        


<Label htmlFor="whyJoin">Tell us why you'd like to join: </Label>
					<Inputs.TextInput id="whyJoin" name="why_join"></Inputs.TextInput>

<button type="submit">Submit</button>
</FormStyle>
      </Form>
      </Formik>
    </FullForm>

    

    
  )
}

export default EngineerForm;