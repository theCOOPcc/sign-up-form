import React from 'react';
import ReactSelect from 'react-select';
import styled from 'styled-components';

// const MultiSelect = styled(ReactSelect)`
// background:black;
// width: 200px;
// text-decoration: none;
// color: #FEFEFE;

// &.Select--multi {
//   .Select-value {
//     display: inline-flex;
//     align-items: center
//   }
// }
// &.Select-placeholder {
//   font-size:smaller;
// }

// `

// const mainColor = '#FEFEFE'

export const choices = [
  {value: 'Book1', label: 'Book 1'},
  {value: 'Book2', label: 'Book 2'},
  {value: 'Book3', label: 'Book 3'},
  {value: 'Book4', label: 'Book 4'}
]

export const colorStyles = {
  container: (provided, state) => ({
    ...provided,
    width: 200,
  }),
  // input: (provided, state) => ({
  //   display: 
  // }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #F25187',
    color: 'white',
    backgroundColor: '#562636',

    padding: 5,
    width: 200,
   
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    backgroundColor:'black',
    color: 'white'
  }),
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: '#F25187', 
    color: 'white'
  }),
  singleValue: (provided, state)=> {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    
    return {...provided, opacity, transition}
  }
}



export const MySelect =() => (
  // <MultiSelect>
  
  // </MultiSelect>
<ReactSelect 
    name='choices' 
    isMulti 
    width='200px' 
    options={choices} 
    styles={colorStyles} 
    menuColor='#F25187'
    closeMenuOnSelect={false}
    />
)


// export default (props) => <MultiSelect multi {...props} />;
export default MySelect;