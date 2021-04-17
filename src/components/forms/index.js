import React from 'react'
// import ReactDom from 'react-dom'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import * as Fields from './fields'
import * as Inputs from './inputs'


const PageForm = () => {
  function formValues(){
    let arr = []
    Fields.firstFields.forEach(field => {
      const object = {}
      Object.defineProperty(object, `${field.name}`, {value:" ", writable: true})
      arr.push(
        object
      )
    })
    return arr
  }

  const initValues = formValues();

  const onSubmit = console.log('Form Data', initValues)

  return (
    <>
    <h1>Tell us a little about your interests</h1>
    <Formik
      initialValues={{
        helpWith: '',
        availDates: '',
        workProf: '',
        selectOption: "",
        bootcampAtt: '',
        gradDate: '',
        github: '',
        linkedin: '',
        skillSet: '',
        familiarTech: '',
        whyJoin: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less ')
          .required('Required'),
      })}
      onSubmit={onSubmit}
      >
        <Form>
          {/* This is causing the 'Each child in a list should have a unique key prop' warning */}
          { Fields.firstFields.map(f => (
        
            <Inputs.SelectInput key={f.name} label={f.name} name={f.value} >
              <option key=''></option>
              {f.choices.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </Inputs.SelectInput>
          ))}
  
            {/* <Inputs.TextInput></Inputs.TextInput> */}
          
          <label htmlFor="whyJoin">Tell us why you'd like to join: </label>
          <Field as='textarea' name="whyJoin" id='whyJoin'></Field>

          <button type='submit' onClick={onSubmit}>Submit</button>
        </Form>



      </Formik>

      <Formik>
        <Form>
      {/* {Fields.secondFields.map(f => (
        <Inputs.SelectInput label={f.name} name={f.value}>
          <option value=""></option>
          {f.choices.map(c => (
            <option value={c}>{c}</option>
          ))}
        </Inputs.SelectInput>
      ))} */}

      {/* <Inputs.TextInput></Inputs.TextInput> */}
        </Form>
      </Formik>
    </>
  )
}


export default PageForm;