import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="form-containerr">
        <p className="title">Signup Page</p>
        <form className="form">
          <input type="email" className="input" placeholder="Enter your email" />
          <input type="password" className="input" placeholder="Password" />
          <input type="password" className="input" placeholder="Confirm Password" />
          <input type="text" className="input" placeholder="Enter restaurant name" />
          <input type="text" className="input" placeholder="Enter city" />
          <input type="text" className="input" placeholder="Enter Full Address" />
          <input type="number" className="input" placeholder="Enter contact Number" />
          <button className="form-btn">SignUp</button>
        </form>


      </div>
    </>
  )
}

export default Signup