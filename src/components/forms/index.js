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
      Object.defineProperty(object, `${field.name}`, {value: `${field.value}`, writable: true})
      arr.push(
        object
      )
    })
    return arr
  }

  const initValues = formValues();
  // const onSubmit = () => console.log('form valies : ', initValues)
  

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
      onSubmit={(values, {setSubmitting }) => {
        console.log('Submitting')
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400)
      }}
      >
        <Form>
          {/* This is causing the 'Each child in a list should have a unique key prop' warning  SOLVED */}
          { Fields.firstFields.map(f => (
        
            <Inputs.SelectInput key={f.name} label={f.name} name={f.value}>
              <option value={f.value} ></option>
              {f.choices.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </Inputs.SelectInput>
          ))}
          <label htmlFor="whyJoin">Tell us why you'd like to join: </label>
            <Inputs.TextInput id='whyJoin' name='whyJoin'></Inputs.TextInput>

          <button type='submit'>Submit</button>
        </Form>
      </Formik>

      {/* <Formik>
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
        {/* </Form> */} 
    </>
  )
}


export default PageForm;