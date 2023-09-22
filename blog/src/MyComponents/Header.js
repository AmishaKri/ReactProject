import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <nav className='header'>
        <div className='logo'>Blog Page</div>
        <div className='Link'>
          <Link to="#" className='Link-item'>Home</Link>
          <Link to="#" className='Link-item'>Courses</Link>
          <Link to="#" className='Link-item'>Blog</Link>
          <Link to="#" className='Link-item'>About</Link>
          <Link to="#" className='Link-item'>Contact</Link>
        </div>
        <div className='btn'>
          <button className='btn-item'>Login</button>
          <button className='btn-item'>SignUp</button>
        </div>
      </nav>
      <div className='course'>

        <div className='lang'>
          <div className="course-item">
            <Link to="/Html" className='course-list'>HTML</Link>
            <Link to="#" className='course-list'>CSS</Link>
            <Link to="#" className='course-list'>Javascript</Link>
            <Link to="#" className='course-list'>C++</Link>
            <Link to="#" className='course-list'>Java</Link>
            <Link to="#" className='course-list'>Python</Link>
            <Link to="#" className='course-list'>React JS</Link>
            <Link to="#" className='course-list'>ML</Link>
          </div>

          <div className='input'>
            <input type="text" placeholder='search here' ></input>
          </div>

        </div>

      </div>
      <div className="About">
        <div className="content">
          <h1>Welcome to CodeWithSanju</h1>
          <h4>Learn Java</h4>
          <p className='para'>Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</p>
          <button className='btn-it'>Free Courses</button>
          <button className='btn-it'>Explore Blog</button>
        </div>
        <div className='homePage'>
          <img src="homePage.jpg" width="550"></img>
        </div>
      </div>
      <div className='tutorial'>
      <h2>Recommended Courses</h2>
      
      <div className='tutorial-container'>
        <div className='tutorial-list'>
          <div className='tutorial-img'>
            <img src="https://source.unsplash.com/1600x1000/?React Js" width="350px" ></img>
          </div>
          <div className='tutorial-content'>
            <h3> FREE COURSE</h3>
            <h3>React Tutorial- 100 Days of code</h3>
            <p>React is a JavaScript library for building user interfaces.

              React is used to build single-page applications.

              React allows us to create reusable UI components</p>
            <button className='btn-it'>Start Reading</button>
          </div>

        </div>
        <div className='tutorial-list'>
          <div className='tutorial-img'>
            <img src="https://source.unsplash.com/1600x1000/?dosa" width="350px" ></img>
          </div>
          <div className='tutorial-content'>
            <h3> FREE COURSE</h3>
            <h3>React Tutorial- 100 Days of code</h3>
            <p>React is a JavaScript library for building user interfaces.

              React is used to build single-page applications.

              React allows us to create reusable UI components</p>
            <button className='btn-it'>Start Reading</button>
          </div>

        </div>
        <div className='tutorial-list'>
          <div className='tutorial-img'>
            <img src="https://source.unsplash.com/1600x1000/?burger" width="350px" ></img>
          </div>
          <div className='tutorial-content'>
            <h3> FREE COURSE</h3>
            <h3>React Tutorial- 100 Days of code</h3>
            <p>React is a JavaScript library for building user interfaces.

              React is used to build single-page applications.

              React allows us to create reusable UI components</p>
            <button className='btn-it'>Start Reading</button>
          </div>

        </div>
        </div>
      </div>
    </div>

  )
}

export default Header
