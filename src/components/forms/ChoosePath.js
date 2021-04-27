import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form} from "formik";
import * as Yup from "yup";
import * as Fields from "./fields";
import * as Inputs from "./inputs";

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
      <div>
      <h3>We're constantly looking for new talent to join our efforts. Let us know what your interests are below, and we'll be in touch as soon as something comes up. </h3>

      </div>
      {Fields.paths.map((f) => (
        <Inputs.SelectInput key={f.name} label={f.name} name={f.value}>
          <option value={f.value}></option>
          {f.choices.map((c) => (
            <option name={c.value} key={c} value={c}>{c}</option>
          ))}
        </Inputs.SelectInput>
      ))}

<button type="submit">Submit</button>
</Form>
</Formik>
  )
}

export default ChoosePath
