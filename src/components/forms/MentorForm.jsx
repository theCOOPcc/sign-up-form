import React from 'react';
import {Formik, Form, Field} from 'formik'
import './MentorForm.css'

// const helpOptions =  {
//   '1:1 Mentoring'
//   'Group Presentations'
//   'Spring Planning',
//   'Design Review',
//   'Lightning Talks(Presenter)',
//   'Lightning Talks(Audience)',
//   'Interview Prep',
//   'Portfolio Development'
// };

// const initialValues = {
//   helpWith: '',
//   availDates: '',
//   workProfile: ''
// }

// const onSubmit = values => {
//   console.log('form values', values)
// }

// const validate = values


export const MentorForm = () => {
  return (
  <Formik
    // initialValues={initialValues}
    // validationSchema={validationSchema}
    // onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control required">
          <label htmlFor="helpWith">I'd love to help with:</label>
            <Field id='helpWith' as='select' name='helpWith'>
              <option value="one-on">1:1 Mentoring</option>
              <option value="group-pres">Group Presentations</option>
              <option value="des-review">Design Review</option>
              <option value="light-tlk-pres">Lightning Talk (Presenter)</option>
              <option value="light-tlk-aud">Lightning Talk (Audience)</option>
              <option value="int-prep">Interview Prep</option>
            </Field>
        </div>

        <div className="form-control required">
          <label htmlFor="availDates">I'm avalilable to help out: </label>
          <Field as='select' id='availDates' name='availDates'>
            <option type='checkbox' value="">Monthly</option>
            <option type='checkbox' value="">Weekly</option>
            <option type='checkbox' value="">Daily</option>
            <option type='checkbox' value="">On-Call</option>
          </Field>
            
        </div>

        <div className="form-control required">
          <label htmlFor="workProfile">Linkedin Profile: </label>
          <Field 
            type='text'
            id='workProfile'
            name='workProfile'
          />
        </div>
      </Form>

    </Formik>
)}