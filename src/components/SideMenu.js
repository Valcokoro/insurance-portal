import React from 'react';
import dot from '../resources/dot.png'
import logo from '../resources/logo.png';
import picture1 from '../resources/picture1.png';
import overview from '../resources/overview.svg';
import policy from '../resources/policy.svg';



const SideMenu = () => {
return (
    <section className='sidebar'>
      <div>
         <img src={dot} alt='dot' className='dot' />
         <img src={logo} alt='logo' className='logo' />
         <h4 className='company-name'>Insurance Portal</h4>
         <img src={picture1} alt='picture1' className='picture1' />
         <p className='greeting'><b>Hello ! Rusalba Ruiz</b></p>
         <p className='welcome'>Welcome Back To Your Insurance Portal</p>
         <p className='plan'>Your Plan&nbsp;: 
         <span className='freemode'>&nbsp;Free</span></p>
         <button className='ui button' 
             style={{width:"190px",
                     borderRadius:"10px",
                     marginLeft: "15px",
                     backgroundColor:"#713BDB",
                     color:"#FFFBFB"}}
        >Create New Plan&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;
         <i class="plus icon"></i></button>
       <div className='side-menu'>
         <img src={overview} alt='overview-icon' className='overview-icon'/>
         <a href='' className='overview-page'>Overview</a>
         <img src={policy} alt='policy-icon' className='policy-icon'/>
         <a href='' className='policy-page'>Policy</a>

        </div>
      </div>
    </section>
)
}




export default SideMenu;