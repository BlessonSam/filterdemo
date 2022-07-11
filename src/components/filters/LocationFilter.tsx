import React,{useEffect, useState} from 'react'
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const locations=[
  "NewYork","SanFrancisco","Mumbai","Chennai","London","Delhi"
];


function LocationFilter({onChange}:any) {
  const [values, setValues] = useState<string[]>([]);

  useEffect(()=>{
    onChange(values)
  },[values]);

  return (
    <Stack spacing={3} className="w-full">
      <Autocomplete
        multiple
        id="tags-standard"
        options={locations}
        value={values}
        onChange={(e,newValue)=>setValues(newValue)}
        
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
           
            placeholder="Location"
          />
        )}
      />
      </Stack>
  )
}

export default LocationFilter