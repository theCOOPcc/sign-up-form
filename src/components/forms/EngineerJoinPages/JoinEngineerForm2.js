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


const JoinUsEngineerTwo = () => {
  const formik = useFormik({
    initialValues: {
      bootcampAtt: '',
      gradDate: '',
      github: '',
      linkedin: ''
    },
    onSubmit: values => {
      console.log(values)
      // alert(JSON.stringify(values, null, 2));
    },
  });

  
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Engineer 2</h1>
      <label htmlFor="bootcampAtt">Which Bootcamp Did You Attend?: </label>
      <select
        type="text" 
        name="bootcampAtt"
        id='bootcampAtt' 
        onChange={formik.handleChange}
        value={formik.values.bootcampAtt}
        >
        <option value='appAcad'>App Academy</option>
        <option value='careerFound'>Career Foundery</option>
        <option value='flatiron'>Flatiron School</option>
        <option value='genAssem'>General Assembly</option>
        <option value='hackReac'>Hack Reactor</option>
        <option value='ironHa'>Iron Hack</option>
        <option value='kenzi'>Kenzie Academy</option>
        <option value='lambda'>Lambda School</option>
        <option value='micro'>Microverse</option>
        <option value='nucamp'>Nucamp</option>
        <option value='springbrd'>Springboard</option>
        <option value='otherrr'>Other</option>
        </select>
      
      <label htmlFor="gradDate">Graduation Date : </label>
      <input
        type="date" 
        name="gradDate"
        id='gradDate' 
        onChange={formik.handleChange}
        value={formik.values.gradDate} 

        >
        {/* <option value="react">React</option>
        <option value="node">Node</option>
        <option value="passport">Passport</option>
        <option value="sql">SQL</option>
        <option value="apollo">Apollo</option>
        <option value="neo4">NEO4</option> */}
        </input>
      
      <label htmlFor="github">GitHub: </label>
      <input
        type="text" 
        name="github"
        id='github' 
        onChange={formik.handleChange}
        value={formik.values.github}></input>


      <label htmlFor="linkedin">Linkedin: </label>
      <input
        type="text" 
        name="linkedin"
        id='linkedin' 
        onChange={formik.handleChange}
        value={formik.values.linkedin}></input>

      <label htmlFor="portfolio">Portfolio: </label>
      <input
        type="text" 
        name="portfolio"
        id='portfolio' 
        onChange={formik.handleChange}
        value={formik.values.portfolio}></input>

        <button type="submit">Submit</button>
      
    </form>
  )
}

export default JoinUsEngineerTwo;