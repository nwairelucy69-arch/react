import React from 'react'
import { Link } from 'react-router-dom';




const Home = () => {
  return (
    <>
    
      
      <div className="reason">

        
        



     
    <div className="Web">
        
    <h2 className="h2">Web Design &</h2>
    <h1 className="h1">Development</h1>
    <h1 className="course">Course</h1>
    
   <div className="write"> Web design is a specialisation of the design stream. they also use html, <br/> CSS, WYS/WYG editing software, mark up vallidations etc.... <br/>to create design elements.</div>
     <br/><br/>

  <button className="join"> <a href=""> Join Us</a> </button>
    </div>
   



    <div className="login">
        <button className="here">Login Here</button> <br/> <br/>

         <div className="item">
            
            <input  type="text" placeholder="Enter email"/> <br/> <br/>
        <input type="text" placeholder= "Password"  /> <br/> <br/>
    </div>

            
        <button className="hi"><a href="" style={{textDecoration: 'none'}}>Login </a></button> <br/><br/>

       <div className="account"> 
        <span style={{color: 'white'}}><p>Don't have an account?</p> </span> 
            <Link to='/signup' className="a"> Sign up </Link> <span style={{color: 'white'}}>Here</span>  </div> <br/>
            
            
            Log in with
            
            <div style={{padding: '10px'}} >

                <a href=""> <i class="fa-brands fa-facebook" style={{color: 'white'}}> </i> </a>

                <a href=""> <i class="fa-brands fa-google" style={{color: 'white'}}> </i> </a>

                 <a href=""><i class="fa-brands fa-twitter" style={{color: 'white'}}></i></a>

                 <a href=""> <i class="fa-brands fa-square-instagram" style={{color: 'white'}}></i></a>

                <a href=""><i class="fa-brands fa-skype" style={{color: 'white'}}></i></a>
            </div>
    </div>

   

    <div className="marquee">
         <marquee behavior="" direction="">full stack || web design || coding || data analysis || web publishing || videography</marquee>
    </div>

    <div className="footer">
  
    </div>

    </div>


 



    </>
 





       
  ); 
}

export default Home