import React from 'react'
import {useFormik} from 'formik'
// import MultiDropDown from '../MultiDropDown';
// import AvailabilitySelector from '../AvalabilityDropdowdSelector';

// const interests = [
//   {key:"Engineer" , value : "engineer"},
//   {key:"Graph Database" , value : "graphData"},
//   {key:"Machine Learning" , value : "machLearn"},
//   {key:"React Libraries" , value : "reactLib"},
//   {key:"Testing" , value : "testing"},
//   {key:"CI/CD" , value : "cicd"},
//   {key:"Mobile Development" , value : "mobDev"},
// ]

// const comfortableWith = [
//   {key:"React" , value : "react"},
//   {key:"Node.js" , value : "nodejs"},
//   {key:"Passport.js" , value : "passportjs"},
//   {key:"SQL" , value : "sql"},
//   {key:"Apollo" , value : "apollo"},
//   {key:"Neo4j" , value : "neo4j"},
// ]


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
      <label htmlFor="skillSet">My Skillset Includes: </label>
      <select
        type="text" 
        name="skillSet"
        id='skillSet' 
        onChange={formik.handleChange}
        value={formik.values.skillSet} >
        <option value='engineer'>Engineer</option>
        <option value='graphData'>Graph Database</option>
        <option value='machLearn'>Machine Learning</option>
        <option value='reactLibs'>React Libraries</option>
        <option value='test'>Testing</option>
        <option value='cicd'>CI/CD</option>
        <option value='mobDev'>Mobile Dev</option>
        </select>
      
      <label htmlFor="familiarTech">I'm Comfortable with the following technologies : </label>
      <select
        type="text" 
        name="familiarTech"
        id='familiarTech' 
        onChange={formik.handleChange}
        value={formik.values.familiarTech} >
        <option value="react">React</option>
        <option value="node">Node</option>
        <option value="passport">Passport</option>
        <option value="sql">SQL</option>
        <option value="apollo">Apollo</option>
        <option value="neo4">NEO4</option>
        </select>
      
      <label htmlFor="whyJoin">Tell us why you'd like to join theCOOP: </label>
      <textarea
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