import React from 'react';
import SideMenu from './components/SideMenu';
import Reports from './components/Reports';
//import Container from '@mui/material/Container';


function App() {
  return (
    <div className="grid-container">
      <div className='grid-item'>
        <div className='grid-item1'>
       <SideMenu />
        </div>
        <div className='grid-item2'>
       <Reports />
       </div>
     </div>
    </div>
  );
}

export default App;
