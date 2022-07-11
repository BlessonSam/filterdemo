import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import FilterPanel from './components/layout/FilterPanel';
import TableView from './components/layout/TableView';

function App() {
  return (
    <div className="App min-h-screen">
      <header className="App-header">
        <span className="text-white container mx-auto"> Recruitment Dashboard</span>
      </header>
      <div className='absolute h-full w-full'>

      
      <div className='container mx-auto flex-auto h-full flex flex-row divide-x'>
       <div className='basis-1/4'>
        <FilterPanel />
       </div>
       <div className='basis-3/4'>
        <TableView />
       </div>

      </div>
      </div>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
