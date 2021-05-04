import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form} from "formik";
import * as Yup from "yup";
import * as Fields from "./fields";
import * as Inputs from "./inputs";
import styled from 'styled-components'

// Basic form styling for each page
const FormStyle = styled.div`
background-color: black;
color: #FEFEFE;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
height: 50vh;
width: 50vw;
`

const Options = styled.option`
color: white !important;
`

// 'Max' callreturn text field as if it were password field. --SOLVED 
const validationSchema= Yup.object().shape({
  design_skillset: Yup.mixed()
	.oneOf(Fields.designerSkills.choices, 'Please choose from one of the selections'),
	design_techs: Yup.mixed()
	.oneOf(Fields.designerTech.choices, 'Please choose from one of the selections'),
  why_join: Yup.string().required('This field is required').max(100)
})

const DesignerForm = () => {
  return (
    <Formik
    initialValues={{
      design_techs: "",
			design_skillset: "",
      why_join: ""
    }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log('Submit Successful', values)
    }}
    >
      <Form>
        <FormStyle>
      <h4>Tell us a little about your interests...</h4>
			
      {Fields.designFields.map(f => (
        <Inputs.SelectInput key={f.name} label={f.name} name={f.value}>

          <Options value={f.value} ></Options>
          {f.choices.map((c) => (
            <Options  name={c.value} key={c}>{c}</Options>
            ))}
        </Inputs.SelectInput>
      ))}

      <label htmlFor="whyJoin">Tell us why you'd like to join The COOP: </label>
      <Inputs.TextInput id="whyJoin" name="why_join"></Inputs.TextInput>

            <button type='submit'>Submit</button>
        </FormStyle>
      </Form>
    </Formik>
  )
}

export default DesignerForm;