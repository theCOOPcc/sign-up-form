import { Form, useField } from "formik";
import styled from "styled-components";
import ReactSelect from "react-select";
import * as Fields from "./fields";

 
const Input = styled.input`
  display: inline-block;
  padding: 0.75em;
  margin: 0.75em;

  cursor: pointer;
  background-color: black;
  border: 1px solid #f25187;
  /* text-decoration: underline; */
  color: #fefefe;
`;

const Label = styled.label`
  color: #fefefe;
`;

export const FormStyling = {
  container: (provided, state) => ({
    ...provided,
    width: 200,
    display: "inline-flex",
    flexDirection: "row",
  }),
  control: (provided, state) => ({
    ...provided,
    border: "none",
    borderRadius: 0,
    backgroundColor: "transparent",
    borderBottom: "1px solid #F25187",
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: "black",
    color: "white",
  }),
  // input: (provided, state) => ({
  //   display:
  // }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid #F25187",
    color: "white",
    backgroundColor: "#562636",
    padding: 5,
    width: 200,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    flexWrap: "nowrap",
    placeholder: "please select up to 4",
    backgroundColor: "black",
    color: "white",
    width: 200,
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "#F25187",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    color: "#F25187",
  }),
  input: (provided, state) => ({
    display: "inline",
  }),
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: "#F25187",
    color: "white",
  }),
  // singleValue: (provided, state) => ({
  //   ...provided,
  //   backgroundColor: '#F25187',
  //   color:'white',
  // }),
};

const StyleDiv = styled.div`
  display: flex;
	height: 100;
`;

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input
        placeholder="Type response here..."
        type="text"
        className="text-input"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export const EngineerSelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let bananas = [];
  function createSelectors() {
    Fields.firstFields.map((fields) => {
      fields.choices.map((choice) => {
        bananas.push({ value: `${choice}`, label: `${choice}` });
      });
    });
  }
  createSelectors();
  return (
    <StyleDiv>
      <div>
        <Label htmlFor={props.id || props.name}>{label}</Label>
      </div>
      {/* {console.log(designFields)} */}
      <div>
        <ReactSelect styles={FormStyling} options={bananas} isMulti>
          {/* <FormStyling
					placeholder="Select up to 4"
					key={props.name}
					{...field}
					{...props}
				/> */}
        </ReactSelect>
      </div>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </StyleDiv>
  );
};



export const DesignSelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let bananas = [];
  function createSelectors() {
    Fields.designFields.map((fields) => {
      fields.choices.map((choice) => {
        bananas.push({ value: `${choice}`, label: `${choice}` });
      });
    });
  }
  createSelectors();
  return (
    <StyleDiv>
      <div>
        <Label htmlFor={props.id || props.name}>{label}</Label>
      </div>
      {/* {console.log(designFields)} */}
      <div>
        <ReactSelect styles={FormStyling} options={bananas} isMulti>
          {/* <FormStyling
					placeholder="Select up to 4"
					key={props.name}
					{...field}
					{...props}
				/> */}
        </ReactSelect>
      </div>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </StyleDiv>
  );
};

export const DataScienceSelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let bananas = [];
  function createSelectors() {
    Fields.dataSciFields.map((fields) => {
      fields.choices.map((choice) => {
        bananas.push({ value: `${choice}`, label: `${choice}` });
      });
    });
  }
  createSelectors();
  return (
    <StyleDiv>
      <div>
        <Label htmlFor={props.id || props.name}>{label}</Label>
      </div>
      {/* {console.log(designFields)} */}
      <div>
        <ReactSelect styles={FormStyling} options={bananas} isMulti>
          {/* <FormStyling
					placeholder="Select up to 4"
					key={props.name}
					{...field}
					{...props}
				/> */}
        </ReactSelect>
      </div>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </StyleDiv>
  );
};


export const InfoIntakeSelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let bananas = [];
  function createSelectors() {
    Fields.secondFields.map((fields) => {
      fields.choices.map((choice) => {
        bananas.push({ value: `${choice}`, label: `${choice}` });
      });
    });
  }
  createSelectors();
  return (
    <StyleDiv>
      <div>
        <Label htmlFor={props.id || props.name}>{label}</Label>
      </div>
      {/* {console.log(designFields)} */}
      <div>
        <ReactSelect styles={FormStyling} options={bananas} isMulti>
          {/* <FormStyling
					placeholder="Select up to 4"
					key={props.name}
					{...field}
					{...props}
				/> */}
        </ReactSelect>
      </div>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </StyleDiv>
  );
};


export const MentorSelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let bananas = [];
  function createSelectors() {
    Fields.mentorFields.map((fields) => {
      fields.choices.map((choice) => {
        bananas.push({ value: `${choice}`, label: `${choice}` });
      });
    });
  }
  createSelectors();
  return (
    <StyleDiv>
      <div>
        <Label htmlFor={props.id || props.name}>{label}</Label>
      </div>
      {/* {console.log(designFields)} */}
      <div>
        <ReactSelect styles={FormStyling} options={bananas} isMulti>
          {/* <FormStyling
					placeholder="Select up to 4"
					key={props.name}
					{...field}
					{...props}
				/> */}
        </ReactSelect>
      </div>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </StyleDiv>
  );
};

export const ChoosePathSelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let bananas = [];
  function createSelectors() {
    Fields.paths.map((fields) => {
      fields.choices.map((choice) => {
        bananas.push({ value: `${choice}`, label: `${choice}` });
      });
    });
  }
  createSelectors();
  return (
    <StyleDiv>
      <div>
        <Label htmlFor={props.id || props.name}>{label}</Label>
      </div>
      {/* {console.log(designFields)} */}
      <div>
        <ReactSelect styles={FormStyling} options={bananas} isMulti>
          {/* <FormStyling
					placeholder="Select up to 4"
					key={props.name}
					{...field}
					{...props}
				/> */}
        </ReactSelect>
      </div>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </StyleDiv>
  );
};


export const ContactSelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let bananas = [];
  function createSelectors() {
    Fields.pronounField.map((fields) => {
      fields.choices.map((choice) => {
        bananas.push({ value: `${choice}`, label: `${choice}` });
      });
    });
  }
  createSelectors();
  return (
    <StyleDiv>
      <div>
        <Label htmlFor={props.id || props.name}>{label}</Label>
      </div>
      {/* {console.log(designFields)} */}
      <div>
        <ReactSelect styles={FormStyling} options={bananas} isMulti>
          {/* <FormStyling
					placeholder="Select up to 4"
					key={props.name}
					{...field}
					{...props}
				/> */}
        </ReactSelect>
      </div>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </StyleDiv>
  );
};
