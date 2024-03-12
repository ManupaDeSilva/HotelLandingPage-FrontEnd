import React from 'react';
import './Navbar.css'
import Slider1 from './ImageSlider'

const Navbar = () => {

  return (
  <nav>
    <div className='navbar'>
        <div className='logo-container'>
          <img src='./logo.jpg' alt="" />
        </div>
        <div className='navbar-up-texts'>
          <img className='login-icon' src='./person@2x.png' alt="" />
          <a href="">Sign In</a>
          <div>|</div>
          <a href="">Join Now</a>
          <div>|</div>
          <img className="reserve-icon" src='./search-for-love@2x.png' alt="" />
          <a href="">Find Reservation</a>
          <div>|</div>
          <img className='lan-icon'src='./earth-globe@2x.png' alt="" />
          <a href="">En</a>
          <div>|</div>
          <a href="">USD</a>
          <div>|</div>
          <img className='mob-icon'src='./mobile@3x.png' alt="" />
        </div>
      </div>

      <div className='navbar-bottom'>
      <div className='about-container'>
            <button >
              <div className="nav-text" >About</div>
              <img className="arrowdown" alt="" src='./vector-2.svg' />
            </button>
      </div>
      <div className='rooms-container'>
            <button >
              <div className="nav-text">Rooms & Suites</div>
              <img className="arrowdown" alt="" src='./vector-2.svg' />
            </button>
      </div>
      <div className='dining-container'>
            <button >
              <div className="nav-text">Dining</div>
              <img className="arrowdown" alt="" src='./vector-2.svg' />
            </button>
      </div>
      <div className='exp-container'>
            <button >
              <div className="nav-text">Experience</div>
              <img className="arrowdown" alt="" src='./vector-2.svg' />
            </button>
      </div>
      
      <div className='event-container'>
            <button >
              <div className="nav-text" >Events</div>
              <img className="arrowdown" alt="" src='./vector-2.svg' />
            </button>
      </div>
      
      <div className='gallery-container'>
            <button >
              <div className="nav-text" >Gallery</div>
              <img className="arrowdown" alt="" src='./vector-2.svg' />
            </button>
      </div>
      
      <div className='offers-container'>
            <button >
              <div className="nav-text" >Offers</div>
              <img className="arrowdown" alt="" src='./vector-2.svg' />
            </button>
      </div>
      
      <div className='more-container'>
            <button >
              <div className="nav-text">More</div>
              <img className="arrowdown" alt="" src='./vector-2.svg' />
            </button>
      </div>
      
      <button className='findHotel-container'>
         
              <div className="nav-text">Find a Hotel</div>
          
      </button>

    </div>

    <Slider1/>


{/* *********  Search Bar  ************** */}

<div className="searchbar">
          <div className="box1-container">
         
            <input
              className="box1-input1"
              placeholder="Jan 20, 2024"
              type="text"
            />
            <input
              className="box1-input2"
              placeholder="1 night    Jan 21, 2024"
              type="text"
            />
          </div>


          <div className="box2-container">
            <input
              className="box2-input"
              placeholder="1 Room, 1 Adult , 0 Children"
              type="text"
            />
          </div>


          <div className="box3-container">
            <input
              className="box3-input"
              placeholder="Special Code"
              type="number"
            />
          </div>

          <div className="search-container">
            <button className="search">Search</button>
          </div>


</div>
        <img className="scheduleIcon" alt="" src='./schedule@2x.png' />
        <img className="tagIcon" alt="" src='./price-tag@2x.png'/>
        <img className="personIcon" alt="" src='./person@2x.png' />
       

{/* ********** About Section *********** */}


  </nav>
  
  )
}

export default Navbar;