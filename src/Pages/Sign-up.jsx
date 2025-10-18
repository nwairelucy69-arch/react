import React from 'react'


const signup = () => {
  return (


    
    <div className='signup' > 
    

    <form className='asia'> <br />
      
      <h2 style={{fontFamily:'fantasy', color:'orange'}}>Create PraRoz Account</h2> <br />
     <input type="text" placeholder='First name'/> <br /> <br />
    <input type="text"placeholder='Last name' /> <br /> <br/>
      <input type="Email"placeholder='Email' /><br /> <br />
      <input type=""placeholder='birth date' /> <br /> <br />
      <input type="text"placeholder='phone number' /> <br /> <br />
      <input type="password"placeholder='Password'/> <br />  <br />
      <input type="password"placeholder=' Confrim password'/> <br /> <br />
     
      
     
    <button style={{width:'20%', height:'4vh', backgroundColor:'orange', border:'none'}}> Sign up</button>  <br /> <br />
    <span style={{color:'white'}}>already have an account? <a href="" style={{textDecoration:'none', color:'orange'}}>sign in</a></span>

    <div className="remember"> 
     <span style={{textDecoration:'underline', color:'white'}}> or</span> <br /> 

      <button style={{width:'20%', height: '4vh', color:'black', backgroundColor:'orange'}}>sign up with google</button>

    </div> <br />

<a href="" style={{textDecoration:'none', color:'orange'}}>forget password?</a> <br />  <br />
    </form>


    

    </div>
    


  )
}

export default signup