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


const JoinUsDesigner = () => {
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
      <h1>Designer 1 </h1>
      <label htmlFor="skillSet">My Skillset Includes: </label>
      <select
        type="text" 
        name="skillSet"
        id='skillSet' 
        onChange={formik.handleChange}
        value={formik.values.skillSet}
        multiple
        >
        <option value='engineer'>Clickable Prototypes</option>
        <option value='graphData'>Interactive Prototypes</option>
        <option value='machLearn'>Lean Methodology</option>
        <option value='reactLibs'>Sketch / Paper Prototyping</option>
        <option value='test'>HTML/CSS</option>
        <option value='cicd'>Usability Testing</option>
        <option value='mobDev'>User Flows</option>
        <option value='authentication'>Synthesizing and insights</option>
        <option value='other'>Other</option>
        </select>
      
      <label htmlFor="familiarTech">I'd like to focus on : </label>
      <select
        type="text" 
        name="familiarTech"
        id='familiarTech' 
        onChange={formik.handleChange}
        value={formik.values.familiarTech} 
        multiple
        >
        <option value="react">User Research</option>
        <option value="node">Interaction Design</option>
        <option value="passport">Design Systems</option>
        <option value="sql">Information Architecture</option>
        <option value="apollo">Apollo</option>
        <option value="neo4">UI / Visual Design</option>
        <option value="nextjs">UX Stragegy</option>
        <option value="otherr">Other</option>
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

export default JoinUsDesigner;