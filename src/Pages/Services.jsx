import React from 'react'
import rah from "../assets/mutiu.jpg"
import { Link } from 'react-router-dom'

const Services = () => {
  return ( 
    <>
    


    
   
<div className="on"> 

           <div> <br /> <br />
            <h1 style={{ textAlign: 'center' }} >Pra Roz</h1> <br />

            <h1 style= {{textAlign: 'center'}} >
                Want to start your tech journey? 
            </h1> 
            <h3 style= {{textAlign: 'center'}} >here's how</h3> <br/> 

            <div className="getty"> 
            <img  src={rah} alt="" style={{width:'90%'}} /> 
            </div>
            
          </div>

              <div className="leap">
                
               <button className="part1"> <span className="bee1">1</span> Take COURSE for beginners</button> <br/>

               <button  className="part2"><span className="bee2">2</span> Register DESIRED Course </button> <br/>

               <button  className="part3"> <span  className="bee3">3</span> Learn. Examine. Act</button> <br/>

                <button  className="part4"> <span  className="bee4">4</span> You are READY</button> 
                </div>
            
         <div>
       <h3 style={{ textAlign: 'center', padding:'20px', paddingLeft: '10px'}} > Join <span style= {{ color: 'orange', }}>3,000+ techies</span> <br/>who already registered for the guide </h3>
      </div>


        </div> 



        <div className="bitch">

        <div className="pic1" >
        <h1 style={{paddingTop:'20px'}}>Web Design</h1> <span> web design is about creating ,building and structuring a webpage for clients in need of the service. <br /> <br /> <Link to='/register'>Register</Link></span> 
        </div>
        

       <div className="pic2">   <h1 style={{paddingTop:'20px'}} >Data Analysis</h1> <span>Data Analysis is the major driving tool for every tech savy and brainy individual ready to start a journey <br/> <br/><Link to='/register'>Register</Link> </span> 
        </div>
    
        <div class="pic3">  <h1 style={{paddingTop:'20px'}}>Fullstack</h1> <span> check out list of available courses on frontend and backend available at the moment at your disposal.
         <br/> <br/> <Link to='/register'>Register</Link> </span>
        </div>
   
    </div>
  



  
    
   <div class="large">
    
    
    <div>contact: 08129083274 08139282406  </div>
   <div> email:sarahmarcel38@gmail.com</div>


   <div></div>
    </div>

    
     </>
  )
}

export default Services