import React,{FC} from 'react'
import{ ListSubheader, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import HeightRangeFilter from '../filters/HeightRangeFilter';
import WeightRangeFilter from '../filters/WeightRangeFilter';
import LocationFilter from '../filters/LocationFilter';

interface State {
 [key:string]: boolean | any;
};

function FilterPanel () {
    const [state, changeState] = React.useState<State>({
        common:true,
        physical_attributes:true,
    });


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

    interface DefaultValues{
    [key:string]:any;
    };

    const defaultValues :DefaultValues={
      location:"",
      height:[4.1,7.11],
      weight:[70,200]
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
                         
                        { React.createElement(component,{defaultValue:defaultValues[name],onChange:(value:any)=>{console.log(value)}})}
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </div>
            );
          })}
        </List>
          
        </div>
      );
}

export default FilterPanel;