import React, {useEffect} from 'react'
import './popular.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'

import img2 from '../../Assets/image (2).jpg'
import img5 from '../../Assets/image (5).jpg'
import img9 from '../../Assets/image (2).jpg'
import img7 from '../../Assets/image (7).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'




const Data = [
 
  {
  id:1,
  imgSrc: img2,
  destTitle: 'Hotel 1',
  location: 'Sydney',
  grade: 'CULTURAL RELAX ',
  },

  {
  id:2,
  imgSrc: img5,
  destTitle: 'Hotel 2',
  location: 'Texas',
  grade: 'CULTURAL RELAX ',
  },

  {
  id:3,
  imgSrc: img7,
  destTitle: 'Hotel 3',
  location: 'Cali',
  grade: 'CULTURAL RELAX ',  
  },


  {
  id:4,
  imgSrc: img9,
  destTitle: 'Taj Mahal',
  location: 'India',
  grade: 'CULTURAL RELAX ',
  }

]

 
 const Popular = ({recentsearch}) => {
      useEffect(()=>{
        console.log(recentsearch)
        Aos.init({duration: 2000})
    }, [])
   return (
    <>
    {recentsearch &&
      
     <section className='popular section container'>
      <div className="secContainter">

        <div className="secHeader flex">

          <div data-aos="fade-right" data-aos-duration="1500" className="textDiv">
          <h2 className='secTitle'>
        Recents
          </h2>
          <p>
          Your Recent Destinations 
          </p>
          </div>

          <div data-aos="fade-left" data-aos-duration="1500" className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon"/>
            <BsArrowRightShort className="icon"/>
          </div>
        </div>

        <div className="mainContent grid">
          {/* Single Destination from the map Array */}

          {
            Data.map(({id, imgSrc, destTitle, location, grade })=>{
              return (
                <div data-aos="fade-up" className="singleDestination">
            <div className="destImage">

            <img src={imgSrc} alt="" />

            <div className="overlayInfo">
                <h3>
                  {destTitle}
                </h3>
                <p>
                  {location}
                </p>

                <BsArrowRightShort className='icon'/>
                
            </div>
            </div>

            <div className="destFooter">
            <div className="number">
                0{id}
             </div>

             <div className="destText flex">
               <h6>
                {location} 
               </h6>
               <span className='flex'>
                <span className="dot">
                <BsDot className='icon'/>
                </span>
                
               </span>
             </div>
            </div>

             

           </div>
              )
            })
          }
           
        </div>
      </div>
     </section>
 }
     </>
   )
 }
 
 export default Popular