import React,{useEffect} from 'react'

import {Box, Slider} from '@mui/material';

interface Props {
  onChange:any,
  defaultValue?:any
};

function WeightRangeFilter({onChange, defaultValue}:Props) {
    const [value, setValue] = React.useState<number[]>(defaultValue || [0,100]);

    const handleChange = (event: Event, newValue: number | number[]) => {
    
      setValue(newValue as number[]);
      
    };

    useEffect(() => {
      onChange({weight:value});      
    }, [value])
    

    
  return (
    <Box sx={{ width: 300 }} className="flex items-center space-x-5">
      <span>{value[0]}</span>
    <Slider
      getAriaLabel={() => 'Weight Range'}
      value={value}
      min={defaultValue?.[0]??0}
      step={1}
      max={defaultValue?.[1]??100}
      onChange={handleChange}
      valueLabelDisplay="auto"
      getAriaValueText={(value:number)=>`${value}lbs`}
    />
    <span>{value[1]}</span>
  </Box>
  )
}



export default WeightRangeFilter