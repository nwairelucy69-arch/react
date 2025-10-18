import React from 'react'
import video from '../assets/medium.mp4'

const About = () => {
  return (
    <>


<h1 style={{textAlign:'center', paddingTop:'40px', fontStyle:'italic', fontFamily:'-moz-initial'}}>About us</h1> <br />
    <div className='egg'></div>

    <div>
      

    

      <h3 style={{textAlign:'center'}}>Welcome to where possibilities begin</h3> <br /> <br />

      <div style={{backgroundColor:'orange', height:'5vh'}}> </div>


     <div> <h1 style={{textAlign:'center'}}>Our misson is to be #1 online learning platform</h1> <br />

    <h2 style={{textAlign:'center'}}>Skills are the key potential to unlocking potential</h2> 
  <p style={{fontSize:'large', textAlign:'center', padding:'20px', textWrap:'wrap'}}> PraRoz Academy, it's easy to find the  right course, there are 3 courses available with minute update for other <br /> absent courses every week. 
  courses are thoroughly structured before uploaded and are <br /> made easy for learners, <br />at the end of evry course are certificate issued to each learner to help you nagivate your path after us.</p>
  </div>


</div>

<div className='study'> <video src={video} autoPlay loop controls muted></video></div>


<div style={{textAlign: 'center', backgroundColor:'orange', padding:'40px'}}>
<h1>creating impact around <br /> the world</h1> <br />
<p>with our global catalog spanning the lattest skills and topics, people and organizations everywhere are able to adapt to change and thhrive</p> <br /> <br />


<div style={{display:'flex',justifyContent:'space-evenly', }}>
  <span> <h1>81m</h1> <br /> leraners</span> 

  <span> <h1>85k</h1> <br />  instructors</span>
  
  <span> <h1>250k </h1><br />courses </span>

</div>


<div style={{display:'flex', justifyContent:'space-evenly'}}>
  <span> <h1>1.1b </h1><br />course enrollment</span>
  <span> <h1>77 </h1><br /> languages</span>
  <span> <h1>17k+ </h1> <br />enterprise customers</span>
</div>

</div>





<div style={{textAlign:'center', padding:'50px', fontSize:'large',}}>We help organizations of all types and sizes prepare <br /> for the path ahead — wherever it leads. <br />Our curated collection of business and technical courses <br /> help companies, governments, and nonprofits go further by <br /> placing learning at the center of their strategies. <br /> <br />

 <button className='pink'> <a href="" style={{ color:'white', textDecoration:'none', }}>Learn more</a></button>

</div>



   


<div className='varun'>
  <div style={{backgroundColor:'orange', borderRadius:'4px', padding:'10px', margin:'0px'}}>PraRoz fit us like a glove. Their team curates fresh, <br />up-to-date courses  <br />from their marketplace <br />
  and makes them <br />available to customers.

</div>

<div style={{backgroundColor:'orange', borderRadius:'4px', padding:'10px', margin:'0px'}} >In total, it was a big success, <br />I would get <br />emails about what a fantastic resource it was.</div>

<div style={{backgroundColor:'orange', borderRadius:'4px', padding:'10px', margin:'0px'}}>
  Udemy responds to the needs of the business <br />in an agile and global manner. <br />It's truly the best solution  <br />for our employees and their careers.
</div>
</div>


<div className='pie'>
  <span> <h4 style={{color:'orange'}}>Varun Patil</h4>
Senior Manager of HR Development</span>

<span> <h4 style={{color:'orange'}}>Alfred Helmerich</h4>
Executive Training Manager</span>


<span> <h4 style={{color:'orange'}}>Luz Santillana Romero</h4>
Development and Engagement Director</span>
</div>



    
    </>
  )
}

export default About