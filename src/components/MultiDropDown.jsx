import React, {useState} from 'react';
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const jobs = [
  '1:1 Mentoring',
  'Group Presentations',
  'Sprint Planning',
  'Lightning Talks(Presenter)',
  'Lightning Talks(Audience)',
  'Interview Prep',
];


const MultiDropDown = () => {
  const [job, setJob] = useState([]);

  const handleChange = event => {
    setJob(event.target.value)
  }

  return (
    <FormControl >
        <InputLabel>Make a Selection</InputLabel>
        <Select
          labelId=""
          id=""
          multiple
          value={job}
          onChange={handleChange}
          input={<Input />}
          
        >
          {jobs.map((job) => (
            <MenuItem key={job} value={job}>
              {job}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  )
} 

export default MultiDropDown