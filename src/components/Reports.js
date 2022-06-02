import React from 'react';
import agent from '../resources/agent.svg';
import area  from '../resources/area.svg';
import area2 from '../resources/area2.svg';
import rectangle1 from '../resources/rectangle1.svg';
import line1 from '../resources/line1.svg';
import line2 from '../resources/line2.svg';
import line3 from '../resources/line3.svg';
import line4 from '../resources/line4.svg';
import rectangle2 from '../resources/rectangle2.svg';
import line5 from '../resources/line5.svg';
import line6 from '../resources/line6.svg';
import line7 from '../resources/line7.svg';
import line8 from '../resources/line8.svg';
import rectangle3 from '../resources/rectangle3.svg';
import line9 from '../resources/line9.svg';
import line10 from '../resources/line10.svg';
import line11 from '../resources/line11.svg';
import line12 from '../resources/line12.svg';




const Reports = () =>{
   return (
    <section className='reports'>
       <div className='rightpane'>
          <a href='' className='overview-page2'>Overview</a>
          <a href='' className='policy-page2'>Policy</a>
          <a href='' className='report-page2'>Reports</a>
          <img src={agent} alt='agent-icon' className='agent'/>
          <img src={area} alt='area-icon' className='area'/>
          <img src={area2} alt='area2-icon' className='area2'/>
          <h1 className='reports-text'>20% Safe On Your First Account</h1>
          <button className='newbie-btn'>NEWBIE20</button>
          <h3 className='copy-code'>Copy Code</h3>
          <div className='disburse-value'>
          <img src={rectangle1} alt='rectangle1-icon' className='rectangle1'/>
          <h1 className='one-k'>1000</h1>
          <h2 className='dollar-sign1'>$</h2>
          <h4 className='total-value'>Total Value of Disbursement</h4>
          <h5 className='policy-text'>Policy</h5>
          <h5 className='policy-amount'>400</h5>
          <h6 className='policy-currency'>$</h6>
          <img src={line1} alt='line1' className='line1'/>
          <img src={line2} alt='line2' className='line2'/>
          <h5 className='claim-text'>Claim</h5>
          <h5 className='claim-amount'>800</h5>
          <h6 className='claim-currency'>$</h6>
          <img src={line3} alt='line3' className='line3'/>
          <img src={line4} alt='line4' className='line4'/>
          <img src={rectangle2} alt='rectangle2-icon' className='rectangle2'/>
          <h1 className='two-five1'>2500</h1>
          <h2 className='dollar-sign2'>$</h2>
          <h4 className='total-value2'>Total Value of Disbursement</h4>
          <h5 className='policy-text2'>Policy</h5>
          <h5 className='policy-amount2'>1100</h5>
          <h6 className='policy-currency2'>$</h6>
          <img src={line5} alt='line5' className='line5'/>
          <img src={line6} alt='line6' className='line6'/>
          <h5 className='claim-text2'>Claim</h5>
          <h5 className='claim-amount2'>1400</h5>
          <h6 className='claim-currency2'>$</h6>
          <img src={line7} alt='line7' className='line7'/>
          <img src={line8} alt='line8' className='line8'/>
          <img src={rectangle3} alt='rectangle3' className='rectangle3'/>
          <h1 className='two-five2'>2500</h1>
          <h2 className='dollar-sign3'>$</h2>
          <h4 className='total-value3'>Total Value of Disbursement</h4>
          <h5 className='policy-text3'>Policy</h5>
          <h5 className='policy-amount3'>1100</h5>
          <h6 className='policy-currency3'>$</h6>
          <img src={line9} alt='line9' className='line9'/>
          <img src={line10} alt='line10' className='line10'/>
          <h5 className='claim-text3'>Claim</h5>
          <h5 className='claim-amount3'>1400</h5>
          <h6 className='claim-currency3'>$</h6>
          <img src={line11} alt='line11' className='line11'/>
          <img src={line12} alt='line12' className='line12'/>
          

          </div>

          
       </div>

    </section>
 )

}


export default Reports;