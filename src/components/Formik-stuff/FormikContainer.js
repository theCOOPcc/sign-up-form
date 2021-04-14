import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup';
// import FormikControl from './FormikControl';
import Input from './Input'
import Select from './Select'

export const FormikContainer = () => {
  const helpwithOptions = [
    {key: 'Selct an option', value: ''},
    {key: '1:1 Mentoring', value: 'mentoring'},
    {key: 'Group Presentations', value: 'groupPres'},
    {key: 'Sprint Planning', value: 'sprintPlan'},
    {key: 'Lightning talk (Pres.)', value: 'ltPres'},
    {key: 'Lightning talk (Aud.)', value: 'ltAud'},
    {key: 'Interview Prep', value: 'intPrep'},
  ]

  const helpAvailability = [
    {key: 'Select availability', value: ''},
    {key: 'Monthly', value: 'monthly'},
    {key: 'Weekly', value: 'weekly'},
    {key: 'Bi-Weekly', value: 'bi-weekly'},
    {key: 'Daily', value: 'daily'},
    {key: 'Sporadically', value: 'sporadically'},
  ]
  
  const initialValues = {
    helpWith: '',
    availDates: '',
    workProf: '',
    selectOption: ''
  }
  // May need to be asynchronus
  const validationSchema = Yup.object({
    helpWith: Yup.string().required('Required'),
    availDates: Yup.string().required('Required'),
    workProf:  Yup.string().required('Required'),
    selectOption:  Yup.string().required('Required'),
  })

  const banana = (values, submitProps) => {
    console.log('Form Data', values)

  }

  
  return (
    <>
    <h1>TELL US MORE ABOUT YOU</h1>
    <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema} 
      onSubmit={banana}
      > 
      
        <Form >
          <Select
          control='select'
          label='Id like to help with: '
          name='selectOption'
          options={helpwithOptions}
          
          />
          <Select 
          control='select'
          label='I can help out: '
          name='selectOptions'
          options={helpAvailability}
          
          />
          <Input
            control='input'
            label='Linkedin Profile: '
            name='workProf' 
            placeholder='Paste your Linkedin URL here'
            />
          <button type='submit'> Submit</button> 
          </Form>
            
    </Formik>
    </>
  )
}