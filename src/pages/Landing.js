import React from 'react'
import {Logo} from '../components'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
        <nav>
        <Logo/>
        </nav>
       <div className='container page'>
        <div className='info'>
            <h1>job<span>tracking</span>app</h1>
            <p>Get the job you deserve. We help you find the best job offers on the market.</p>
            <Link to='/register' className='btn btn-hero'>Get started</Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img'></img>
       </div>

    </Wrapper>
  );
}

export default Landing
