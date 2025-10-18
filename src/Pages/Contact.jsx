import React from 'react'
import video from '../assets/small.mp4'
const Contact = () => {
  return (
    <>
    <div className='call'>
      
    <div className='contact'><h1 style={{ textAlign:'center'}}>Contact</h1></div>


   <div className='vid'> <video src={video} autoPlay loop controls muted ></video> </div>


   <div>
    <div style={{textAlign:'center'}}><h3>send message</h3>
          <form action="">
            <label htmlFor="">name</label> <br /><input type="text" /> <br />
            <label htmlFor="">email</label> <br /><input type="text" /> <br />
            <label htmlFor="">complaint/review</label><br /><input style={{height:'8vh'}} type="text" /> <br /> <br />
    <button style={{width:'10%',height:'4vh', backgroundColor:'orange'}}>send</button>
          </form>
    
    </div>
   </div>


   </div>
    </>
  )
}

export default Contact