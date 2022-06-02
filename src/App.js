import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Reports from './components/Reports';
//import Container from '@mui/material/Container';


function App() {
  return (
    <BrowserRouter>
     <Switch>
    <div className="grid-container">
      <div className='grid-item'>
        <div className='grid-item1'>
        <Route path='/'  component={SideMenu}/>
        </div>
        <div className='grid-item2'>
        <Reports/>
       </div>
     </div>
    </div>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
