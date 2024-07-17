import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"


const Hero = () => {
  return (
    <>
      <section className='hero'>
         <div className='container'> 
          <div className='row'> 
            <Heading subtitle='WELCOME TO FREE TUBE' title='Best Online Education Expertise'/> 
             <p>Free and Quality Education to shine the student's future</p>
            <div className='button'>
              <button>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
             
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div> 
        </div>
      </section> 
      
      
      <div className='margin'></div>
    </>
  )
}

export default Hero
