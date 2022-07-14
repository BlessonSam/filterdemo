import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectAthletes} from '../../features/athletes/athleteListSlice';

import {Athlete} from '../../features/athletes/athletes';

function TableView (){
  const result=useAppSelector(selectAthletes);
  
  return (
  <>
  <div className='h-full bg-gray-400'>TAbleview
  <div className='w-full'>
        {result.map((athlete:Athlete, index)=>(<div key={index}>{athlete.name}</div>))}
       </div>
  </div>
  
  </>);
}

export default TableView;