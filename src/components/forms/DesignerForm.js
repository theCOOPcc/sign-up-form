import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import * as Fields from "./fields";
import * as Inputs from "./inputs";
import styled from "styled-components";
import ReactSelect from "react-select";
import MySelect from "./SelectTests/select-re";

// export const FormStyles = {
//   container: (provided, state) => ({
//     ...provided,
//     width: 200,

//   }),
//   // input: (provided, state) => ({
//   //   display:
//   // }),
//   option: (provided, state) => ({
//     ...provided,
//     borderBottom: '1px solid #F25187',
//     color: 'white',
//     backgroundColor: '#562636',

//     padding: 5,
//     width: 200,

//   }),
//   valueContainer: (provided, state) => ({
//     ...provided,
//     backgroundColor:'black',
//     color: 'white'
//   }),
//   multiValue: (provided, state) => ({
//     ...provided,
//     backgroundColor: '#F25187',
//     color: 'white'
//   }),
//   singleValue: (provided, state)=> {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = 'opacity 300ms';

//     return {...provided, opacity, transition}
//   }
// }

// Basic form styling for each page
const FormStyle = styled.div`
  background-color: black;
  color: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  line-height: 1;
  padding: 10px;
`

const Options = styled.option`
  color: white !important;
`

const FullForm = styled.div`
width: 100%;
height: 100%;
`


// 'Max' callreturn text field as if it were password field. --SOLVED
const validationSchema = Yup.object().shape({
  design_skillset: Yup.mixed().oneOf(
    Fields.designerSkills.choices,
    "Please choose from one of the selections"
  ),
  design_techs: Yup.mixed().oneOf(
    Fields.designerTech.choices,
    "Please choose from one of the selections"
  ),
  why_join: Yup.string().required("This field is required").max(100),
});

const DesignerForm = () => {
  return (
    <FullForm>
    <Formik
    initialValues={{
      design_techs: "",
      design_skillset: "",
      why_join: "",
    }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log("Submit Successful", values);
      }}
      >
      <Form>
        <FormStyle>
          <h4>Tell us a little about your interests...</h4>
          <div>
            {Fields.designFields.map((f) => (
              <Inputs.DesignSelectInput key={f.name} label={f.name} name={f.value}>
                {/* <Options ></Options> */}
                {f.choices.map((c) => (
                  <Options value={f.value} name={c.value} key={c}>
                    {c}
                  </Options>
                ))}
              </Inputs.DesignSelectInput>
            ))}
          </div>


          <div>
            <label htmlFor="whyJoin">
              Tell us why you'd like to join The COOP:{" "}
            </label>
          </div>
          <Inputs.TextInput id="whyJoin" name="why_join"></Inputs.TextInput>

          <button type="submit">Submit</button>
        </FormStyle>
      </Form>
    </Formik>

    </FullForm>
  );
};

export default DesignerForm;
