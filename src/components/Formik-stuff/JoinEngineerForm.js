import React from 'react'
import {useFormik} from 'formik'
// import MultiDropDown from '../MultiDropDown';
// import AvailabilitySelector from '../AvalabilityDropdowdSelector';

const interests = [
  {key:"Engineer" , value : "engineer"},
  {key:"Graph Database" , value : "graphData"},
  {key:"Machine Learning" , value : "machLearn"},
  {key:"React Libraries" , value : "reactLib"},
  {key:"Testing" , value : "testing"},
  {key:"CI/CD" , value : "cicd"},
  {key:"Mobile Development" , value : "mobDev"},
]

const comfortableWith = [
  {key:"React" , value : "react"},
  {key:"Node.js" , value : "nodejs"},
  {key:"Passport.js" , value : "passportjs"},
  {key:"SQL" , value : "sql"},
  {key:"Apollo" , value : "apollo"},
  {key:"Neo4j" , value : "neo4j"},
]


const JoinUsEngineer = () => {
  const formik = useFormik({
    initialValues: {
      skillSet: '',
      familiarTech: '',
      whyJoin: '',
    },
    onSubmit: values => {
      console.log(values)
      // alert(JSON.stringify(values, null, 2));
    },
  });

  
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="helpWith">My Skillset Includes: </label>
      <input 
        type="text" 
        name="skillSet"
        id='skillSet' 
        onChange={formik.handleChange}
        value={formik.values.skillSet} />
        {/* <MultiDropDown
        name='helpWith'
        id='helpWith' 
        value={formik.values.helpWith}
        onChange={formik.handleChange}
        /> */}
      
      <label htmlFor="availDates">I'm Comfortable with the following technologies : </label>
      <input 
        type="text" 
        name="familiarTech"
        id='familiarTech' 
        onChange={formik.handleChange}
        value={formik.values.familiarTech} />
        {/* <AvailabilitySelector 
          placeholder='Choose Availability'
        /> */}
      
      <label htmlFor="workProf">Tell us why you'd like to join theCOOP: </label>
      <input 
        type="text" 
        name="whyJoin"
        id='whyJoin' 
        onChange={formik.handleChange}
        value={formik.values.whyJoin} />

        <button type="submit">Submit</button>
      
    </form>
  )
}

export default JoinUsEngineer;