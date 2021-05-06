import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup"
import Dropdown from "./ReactSelectFormik";

const options = [
	{ value: "terrier", label: "Terrier" },
	{ value: "hound", label: "Hound" },
	{ value: "corgi", label: "Corgi" },
];

const schema = Yup.object({
  dogBreed: Yup.array()
  .min(1, "Select  at least one field")
  .of(
    Yup.object()
    .shape({
      label: Yup.string(),
      value: Yup.string()
    })
  )
  .required("Required")
})

// const { error } = meta;

const DogForm = () => {
  return ( 
    <Formik
      initialValues={{
        dogBreed: [],
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values)
      }}
      >
      <Form>
        <Dropdown 
          label="What is your dogs breed?"
          name="dogBreed"
          options={options}
          iid="dogBreed"
        />
      <button type="submit">Submit</button>
      </Form>
    </Formik>
   );
}
 
export default DogForm;