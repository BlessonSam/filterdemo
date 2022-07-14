import React,{FC, useEffect, useState} from 'react'
import{ ListSubheader, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import HeightRangeFilter from '../filters/HeightRangeFilter';
import WeightRangeFilter from '../filters/WeightRangeFilter';
import LocationFilter from '../filters/LocationFilter';

import {  useAppDispatch } from '../../app/hooks';
import {filterAthletes} from '../../features/athletes/athleteListSlice';



interface State {
 [key:string]: boolean | any;
};

const nestedListData = [
  {
   key:'group1',
   label:"Common Filters",
   
   groupName:'common',
   children:[
       {
           key:'child1',
           name:"location",
           component:LocationFilter,
       }
   ]
  },
  {
   label:"Physical Attributes",
   key:'group2',
   groupName:'physical_attributes',
   children:[
       {
           key:'child1',
           name:"height",
           component:HeightRangeFilter,
       },
       {
          key:'child2',
          name:"weight",
           component:WeightRangeFilter,
       }
   ]
  }
];

export interface FilterValues{
[key:string]:any;
};

  const defaultValues :FilterValues={
  location:"",
  height:[4.1,7.11],
  weight:[70,200]
};

function FilterPanel () {

 

    const [state, changeState] = useState<State>({
        common:true,
        physical_attributes:true,
    });
    
    const dispatch = useAppDispatch();

    const toggleExpansion = (section: string | number)=>changeState((prevState)=>({...prevState, [section]:!prevState[section]}));

    interface ComponentData{
      key:"string";
      component: FC;
      defaultValue:string| number[];
    };

    interface ListData{
     key:string;
     label:string;
     groupName:string;
     children: ComponentData [];
    };
    
    const [filters, changeFilters] = useState<State>(defaultValues);

    useEffect(()=>{
      console.log(filters)
    },[filters]);

    function applyFilters(){
      dispatch(filterAthletes(filters));

    };

    function clearFilters(){
       changeFilters(defaultValues);
       dispatch(filterAthletes({}));
    };
    

    return (
        <div className='h-full bg-gray-300'>
          <List
          component="nav"
          className='divide-y divide-black'
         
        >
          {nestedListData.map(({ key, label, groupName=null, children=[] }) => {
            
              const open = (groupName && state[groupName]) || false;
            return (
              <div key={key}>
                <ListItemButton  onClick={()=>groupName?.length && toggleExpansion(groupName)}>
                  
                  <ListItemText primary={label} className={groupName ? 'font-bold text-black':''} />
                  {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding className='divide-y divide-gray-400'>
                    {children.filter(({component=null})=>!!component).map(({ key: childKey, component, name }) => (
                      <ListItem key={childKey} className="">
                         
                        { React.createElement(component,{defaultValue:defaultValues[name],onChange:(value:any)=>{changeFilters({...filters,...value})}})}
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </div>
            );
          })}
        </List>

      


        <div className='bg-white flex items-center space-x-3 mt-auto bottom-0 divide-x'>
          <button className='w-1/2 p-3' onClick={clearFilters}>Clear All</button>
          <button className='w-1/2 p-3' onClick={applyFilters}>Apply</button>
        </div>
          
        </div>
      );
}

export default FilterPanel;