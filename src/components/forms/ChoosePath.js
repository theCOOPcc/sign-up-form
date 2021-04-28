import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form} from "formik";
import * as Yup from "yup";
import * as Fields from "./fields";
import * as Inputs from "./inputs";
import styled from 'styled-components'

// Basic form styling for each file--probably can do this differently and more cleanly
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

const validationSchema = Yup.object().shape({
  role: Yup.mixed().oneOf(Fields.candidatePath.choices, 'Please choose from one of the selections')
})

const ChoosePath = () => {

  return (
    <Formik
    initialValues={{
      role: ''
    }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log('Submit Successful', values)
    }}
    >
<Form>
  <FormStyle>
      <div>
      <h4>We're constantly looking for new talent to join our efforts. Let us know what your interests are below, and we'll be in touch as soon as something comes up. </h4>
      </div>

      {Fields.paths.map((f) => (
        <Inputs.SelectInput key={f.name} label={f.name} name={f.value}>
          <option value={f.value}></option>
          {f.choices.map((c) => (
            <option name={c.value} key={c} value={c}>{c}</option>
          ))}
        </Inputs.SelectInput>
      ))}

<button style={{marginTop: '5px'}} type="submit">Submit</button>
  </FormStyle>

</Form>
</Formik>
  )
}

export default ChoosePath
