import React from 'react';
import agent from '../resources/agent.svg';
import area  from '../resources/area.svg';
import area2 from '../resources/area2.svg';



const Reports = () =>{
   return (
    <section className='reports'>
       <div className='rightpane'>
          <img src={agent} alt='agent-icon' className='agent'/>
          <img src={area} alt='area-icon' className='area'/>
          <img src={area2} alt='area2-icon' className='area2'/>
         
          <h1 className='reports-text'>20% Safe On Your First Account</h1>
          <button className='newbie-btn'>NEWBIE20</button>
          <h3 className='copy-code'>Copy Code</h3>
          
          
       </div>

    </section>
 )

}


export default Reports;