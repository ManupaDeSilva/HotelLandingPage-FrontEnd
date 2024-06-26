import './LandingPage.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';


function LandingPage() {  
  return (
    <div className="LandingPag">
      <Navbar/>

{/* About Section */}
<>
    <div className='about-header'>
        About Us
    </div>

    <div className='aboutus-container'>

    <div className='about-col1'>
        <p>
            A personal tropical sanctuary that is perfect for escaping the city, Shangri-La Colombo overlooks the Indian Ocean in the heart of the business district with direct access to the most extensive international shopping mall in Sri Lanka, Shangri-La’s own One Galle Face Mall. The hotel offers the finest accommodation in Colombo, an exciting new dining and social scene and the largest and extensive hotel conference and event facilities.
            </p> 
            <ul>
              <li>541 rooms, suites and apartments</li>
              <li>Signature dining venues with an exciting array of seasonal events</li>
              <li>The city's most extensive and versatile event spaces </li>
            </ul> 
    </div>

    <div className='about-col2'>
        <img className='aboutImg' src='./aboutImg.png'/>
    </div>
  </div>
</>


{/* Our Destination Section */}

<div id='destinationSection'>
<div className='destination-header'>
<h1 >Our Destination</h1>
</div>
  
<Menu/>

<div className='unawatunaHeader'>Beach Hotel Hikkaduwa</div>
<img className='hotel-unawatunaImg' src='./image-2@2x.png' />
<div className="Unawatuna-textBox">
        <b className="UnawatunaName">Beach Hotel Unawatuna</b>
        <p className="UnawatunaAbout">
          Unique Vistas of thee Southern coast from all accommodation options.
          Being the first star-class and five-star hotel in Unawatuna, the
          property is composed of a wide array of exclusive accommodation
          options, bars, restaurants, boutiques, and entertainment hubs making
          it an idyllic destination to experience pure tropical bliss!
        </p>
        <button className="logbutton">
          <div className="see-more">See more</div>
        </button>
      </div>

</div>


{/* Experience Section */}

<div id='experienceSection'>
<div className='experienceHeader'>Experience Something New</div>
<div className='expDiscription'>Across the world, Hotel de Ceylon is there for you with memorial offers and experiences. Check out what’s you got</div>

<div className='expBoxes'>

<div className='expRow1'>
    <button className="expBox">
          <img className="expBox-img" alt="" src="/image-3@2x.png" />
          <div className="img-film" />
            <b className="box1Text">
              PURCHASE DISCOUNT <br></br> SAVE UP TO 15%
            </b>
          
    </button>

    <button className="expBox">
          <img className="expBox-img" alt="" src="/image-8@2x.png" />
          <div className="img-film" />
            <b className="box2Text">
              EXPERIENCE THE STAY
            </b>
          
    </button>

    <button className="expBox">
          <img className="expBox-img" alt="" src="/image-4@2x.png" />
          <div className="img-film" />
            <b className="box3Text">
              PARK AND STAY
            </b>
          
    </button>
</div>
<div className='expRow2'>
    <button className="expBox">
          <img className="expBox-img" alt="" src="/image-7@2x.png" />
          <div className="img-film" />
            <b className="box4Text">
              MULTIPLY YOUR POINTS
            </b>
          
    </button>

    <button className="expBox">
          <img className="expBox-img" alt="" src="/image-6@2x.png" />
          <div className="img-film" />
            <b className="box5Text">
             FREE BONUS POINTS AT NEW <br></br> HOTELS
            </b>
          
    </button>

    <button className="expBox">
          <img className="expBox-img" alt="" src="/image-5@2x.png" />
          <div className="img-film" />
            <b className="box6Text">
              3 NIGHTS UNDER $300
            </b>
          
    </button>
</div>
</div>
</div>


{/* offers Section */}
<div id='offers'>

<div className='offersHeader'>Offers</div>

<div className="offerDiscription">
        Choose from our exclusive offers, and get more from your next stay.
</div>


<div className='offers-container2'>
<div className='offerbox1'>
  <div className='img-wrapper'>
    <img className='offerimg' src='mu110971080x675-2@2x.png'/>
  </div>
  <div className='offerbox1-text'>
    <div className='offerbox-1line'>Rooms & Suits</div>
    <div>xxxxxxxxxxxxxxxxxxx</div>
    <div>xxxxxxxxxxxxxxxxxxx</div>
    <div>xxxxxxxxxxxxxxxxx</div>
    <div>xxxxxxxxxxxxxxxxx</div>
    <div className='linelast'>xxxxxxxxxxxxxxxxx</div>
    <div className='morebutton'>
    <div className="see-more1">See more</div>
    </div>
  
  </div>
</div>
<div className='offerbox1'>
  <div className='img-wrapper'>
    <img className='offerimg' src='mu110971080x675-2@2x.png'/>
  </div>
    <div className='offerbox1-text'>
        <div className='offerbox-1line'>Rooms & Suits</div>
        <div>xxxxxxxxxxxxxxxxxxx</div>
        <div>xxxxxxxxxxxxxxxxxxx</div>
        <div>xxxxxxxxxxxxxxxxx</div>
        <div>xxxxxxxxxxxxxxxxx</div>
        <div className='linelast'>xxxxxxxxxxxxxxxxx</div>

        <div className='morebutton'>
        <div className="see-more1">See more</div>
    </div>
  </div>
</div>
<div className='offerbox1'>
  <div className='img-wrapper'>
    <img className='offerimg' src='mu110971080x675-2@2x.png'/>
  </div>
        <div className='offerbox1-text'>
          <div className='offerbox-1line'>Rooms & Suits</div>
          <div>xxxxxxxxxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxxxxxxx</div>
          <div>xxxxxxxxxxxxxxxxx</div>
          <div className='linelast'>xxxxxxxxxxxxxxxxx</div>
          <div className='morebutton'>
          <div className="see-more1">See more</div>
          </div>
            
      </div>
    </div>
  </div>
</div>


<Footer/>










    </div>
  );
}

export default LandingPage;
