import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>

        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>

        <div className="about-right">
            <h3>ABOUT OUR CENTRE</h3>
            <h2>We are laying educational foundation for generations</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae magnam facilis 
                odit ipsum quas quibusdam cumque dolorum sequi. Minus placeat dicta 
                excepturi tempore ipsa mollitia officiis inventore, praesentium voluptates quaerat.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Nesciunt eos omnis similique culpa dolor minima natus sunt iure cum, 
                cumque possimus. Sed, est unde quae vitae consequuntur 
                deleniti saepe. Cumque!
            </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
                    elit. Quos laboriosam nulla sunt at sit fugit quisquam modi obcaecati. Ea cumque itaque doloribus veniam minima, 
                    incidunt animi recusandae aut natus libero?
            </p>
        </div>
      
    </div>
  )
}

export default About
