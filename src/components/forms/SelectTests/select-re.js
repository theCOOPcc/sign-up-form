import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

// const MultiSelect = styled(Select)`
// background:black;
// width: 200px;
// text-decoration: none;
// color: #FEFEFE;
// `

// const mainColor = '#FEFEFE'

export const choices = [
  {value: 'Book1', label: 'Book 1'},
  {value: 'Book2', label: 'Book 2'},
  {value: 'Book3', label: 'Book 3'},
  {value: 'Book4', label: 'Book 4'}
]

export const colorStyles = {
  option: (provided, state) => ({
    ...provided,
    width:state.selectProps.width ,
    borderBottom: '2px solid #F25187',
    color: state.selectProps.menuColor,
    backgroundColor: 'black',
    padding: 5
  }),
  control: () => ({
    width: 200,
  }),
  singleValue: (provided, state)=> {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {...provided, opacity, transition}
  }
}



const MySelect =() => (

    <Select width='200px' options={choices} styles={colorStyles} menuColor='#F25187' />
  // <MultiSelect>

  // </MultiSelect>
)


// export default (props) => <MultiSelect multi {...props} />;
export default MySelect;