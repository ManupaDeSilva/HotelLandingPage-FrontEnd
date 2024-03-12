import React from 'react';
import './Footer.css';

function Footer() {
    
  return (
  <>
  
 <div id='footer'>
    
    <div className='footer-container'>
        <div className='footerRow1'>
            
            <div className='footerCol1'>
                <div className='colheader'>News and Awards</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
            </div>
            <div className='footerCol2'>
                <div className='colheader'>News and Awards</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
            </div>
            <div className='footerCol3'>
                <div className='colheader'>Data Privacy & Security</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
            </div>
            
        </div>
        <div className='footerRow1'>
            
            <div className='footerCol1'>
                <div className='colheader'>News and Awards</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
            </div>
            <div className='footerCol2'>
                <div className='colheader'>News and Awards</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
            </div>
            <div className='footerCol3'>
                <div className='colheader'>Data Privacy & Security</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
                <div >xxxxxxxxxxxxxxxxxxxx</div>
            </div>
            
        </div>
    </div>

    <div className='follow'>
        <div className='followtext'>Follow Us on</div>
        <div className='socialicons'>
            <div className='sIcon1'> 
            <img className='icon1' src='./facebook-f@3x.png'/>
            </div>
            <div className='sIcon2'> 
            <img className='icon1' src='twitterx@3x.png'/>
            </div>
            <div className='sIcon3'> 
            <img className='icon1' src='linkedin-2@3x.png'/>
            </div>
            <div className='sIcon4'> 
            <img className='icon1' src='instagram@3x.png'/>
            </div>
            <div className='sIcon5'> 
            <img className='icon1' src='youtube-logo@3x.png'/>
            </div>
        </div>
    </div>


<div className='feedback'>
    <input className='feedbackInput' placeholder='Type your email and send us'>
    </input >
    <div className='vectorWrapper'>|</div>
    <div className='vectorWrapper'>
    <img className="vector" alt="" src='./VectorDownArrow.svg' />
    </div>
   
    </div>


    <img className='footerImg' src='footerimg.png'/>

 </div>
  </>
  )
}

export default Footer;