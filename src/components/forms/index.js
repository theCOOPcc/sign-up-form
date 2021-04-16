import React from 'react'
import ReactDom from 'react-dom'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import * as Fields from './fields'
import * as Inputs from './inputs'


const PageForm = () => {
  function formValues(){
    let arr = []
    Fields.allFields.forEach(field => {
      const object = {}
      Object.defineProperty(object, `${field.name}`, {value:" ", writable: true})
      arr.push(
        object
      )
    })
    return arr
  }

  const initValues = formValues();

  return (
    <>
    <h1>Tell us about yourself</h1>
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
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false)
        }, 400)
      }}
      >
        <Form>
          {/* <Inputs.SeclectInput label='My Skillset Includes' name='skillSet' />  */}

          { Fields.allFields.map(f => (
            <Inputs.SeclectInput label={f.name} name={f.value}>
              <option value=''></option>
              {f.choices.map(c => (
                <option value={c}>{c}</option>
              ))}
            </Inputs.SeclectInput>
          ))}

        </Form>


      </Formik>
    </>
  )
}


export default PageForm;