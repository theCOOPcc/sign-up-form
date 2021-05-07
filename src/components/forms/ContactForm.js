import React from "react";
// import ReactDom from 'react-dom'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { pronouns } from "./fields";
import * as Inputs from "./inputs";
import styled from "styled-components";
import { FormStyle, StyleDiv, TextLabel } from "./inputs";

const Button = styled.button`
  background-color: #00c9b1;
  color: #f6f6f6;
  border: none;
  border-radius: 3px;
  width: 100px;
  height: 25px;
`;

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("This field is required"),
  last_name: Yup.string().required("This field is required"),
  email: Yup.string().email("Invalid email").required("This field is required"),
});

const ContactForm = (props) => {
  const pronounOptions = [];
  pronouns.choices.forEach((element) => {
    let pronoun = { label: `${element}`, value: `${element}` };
    pronounOptions.push(pronoun);
  });
  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        pronouns: "",
      }}
      // validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Submit Successful", values);
        props.setCurrentForm({
          ...props.currentForm,
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          pronouns: values.pronouns,
        });
        console.log("contact form", props.currentForm);
        props.addItem(props.newForm);
      }}
      render={({
        values,
        errors,
        touched,
        setFieldValue,
        setFieldTouched,
        isSubmitting,
      }) => (
        <Form>
          <FormStyle>
            <h3>CONTACT INFO</h3>
            <StyleDiv>
              <TextLabel htmlFor="firstName">First Name: </TextLabel>
              <Inputs.TextInput
                id="firstName"
                name="first_name"
              ></Inputs.TextInput>
            </StyleDiv>
            <StyleDiv>
              <TextLabel htmlFor="lastName">Last Name: </TextLabel>
              <Inputs.TextInput
                id="lastName"
                name="last_name"
              ></Inputs.TextInput>
            </StyleDiv>

            <StyleDiv>
              <TextLabel htmlFor="email">Email: </TextLabel>
              <Inputs.TextInput id="email" name="email"></Inputs.TextInput>
            </StyleDiv>

            <Inputs.SelectInput
              options={pronounOptions}
              key={pronouns.name}
              label={pronouns.name}
              name={pronouns.value}
              onBlur={setFieldTouched}
              onChange={setFieldValue}
            />

            <Button type="submit">Submit</Button>
          </FormStyle>
        </Form>
      )}
    />
  );
};
export default ContactForm;
