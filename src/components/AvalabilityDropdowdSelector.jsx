import React, {useState} from 'react';
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const availabilities = [
  'Monthly',
  'Weekly',
  'Bi-Weekly',
  'Daily',
  'Sporadically',
];


const AvailabilitySelector = () => {
  const [availability, setAvailability] = useState([]);

  const handleChange = event => {
    setAvailability(event.target.value)
  }

  return (
    <FormControl >
        <InputLabel>Make a Selection</InputLabel>
        <Select
          labelId=""
          id=""
          multiple
          value={availability}
          onChange={handleChange}
          input={<Input />}
          
        >
          {availabilities.map((availability) => (
            <MenuItem key={availability} value={availability}>
              {availability}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  )
} 

export default AvailabilitySelector