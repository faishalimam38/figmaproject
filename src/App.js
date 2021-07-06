import React from 'react'
import Bubble from "./images/Bubble.png";
import Bubble1 from "./images/Bubble1.png"
import Bubble2 from "./images/Yellow Bubble.png"
import Bubble3 from "./images/Login.png"

const App = () => {
  return (
    <>
      <div className="container">
      {/* Right part */}
        <div className="right">
          <img src={Bubble} alt="blank" />

          <h1>DOOF</h1>


          <div className="login">
            <h2> Login</h2>
            <label for="email"><b>Email</b> </label> <br />
            <input type="text" placeholder="Enter Email" name="email" required /><br />
            <label for="psw"><b>Password</b></label> <br />
            <input type="password" placeholder="Enter Password" name="psw" required />
            <a href = "#">Forget Password</a>
            <button className="btn"> Login</button>
            <h5> Don't have an account yet? <span> Signup</span></h5>
          </div>

          <footer className="h-image">
            <img src={Bubble1} alt="alter" />
          </footer>
          <div className="link">
            <a className="p" href="#">Term of Service</a>
            <a className="k" href="#">Privacy Policy</a>
          </div>
         


        </div>
        {/* Left Part */}
        <div className = "left">
        <img src = {Bubble2} alt = "blank" />
        <button className= "btnn"> Test</button>
        <h1>Unlock your stuck revenue.</h1>
        <p> We help you unlock the true potential connect with your customers<br /> to
         understand the rights and wrongs with your product.</p>
        <img className = "system" src = {Bubble3} alt ="blank" />

        </div>

      </div>
    </>
  )
}

export default App
