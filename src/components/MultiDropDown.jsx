import React, {useState} from 'react';
import Input from '@material-ui/core/Input'
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//     maxWidth: 300,
//   },
//   chips: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   chip: {
//     margin: 2,
//   },
//   noLabel: {
//     marginTop: theme.spacing(3),
//   },
// }));

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

const jobs = [
  '1:1 Mentoring',
  'Group Presentations',
  'Sprint Planning',
  'Lightning Talks(Presenter)',
  'Lightning Talks(Audience)',
  'Interview Prep',
];

// const getStyles = ()


const MultiDropDown = () => {
  const [job, setJob] = useState([]);

  const handleChange = event => {
    setJob(event.target.value)
  }

  return (
    <FormControl >
        <InputLabel>Set Availability</InputLabel>
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