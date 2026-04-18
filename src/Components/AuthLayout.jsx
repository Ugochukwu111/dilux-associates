import { Link } from 'react-router-dom'

import logo from '../assets/logo-white.webp'
import './AuthLayout.css'

const businessName = import.meta.env.VITE_BUSINESS_NAME;


export default function AuthLayout({
  children, 
  heading, 
  tagline
}) {
  return (
    <div className=' h-screen flex  auth-layout-container'>
      <div className=' flex-1 flex flex-col justify-between left-container'> 
        <Link to="/" className='logo'>
          <img src={logo} alt={`${businessName} logo`} />
        </Link>

        <div>
          <h2 className='text-inverse'>{heading} {businessName}</h2>
          <p className='text-secondary tagline'>
            {tagline}
          </p>
          <br />
          <ul className='text-muted second-tagline'>
            <li>Join a community of professionals driving the future of real estate</li>
            <li>Your gateway to premium land investments and professional growth starts here.</li>
          </ul>
        </div>
      </div>

      <div className='flex items-center justify-center flex-1 bg-light right-container'>
        {children}
      </div>
    </div>
  )
}
