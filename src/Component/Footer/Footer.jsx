import React from 'react';
import './Footer.scss';

const Footer = () => {
  {/* Footer Component */}

  {/* get current year for display in copyright */}
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
        <div>All rights reserved by : <a href='#'><span className='author'>Rich Sandeep</span></a></div>
        <div>&copy; copyright year - {currentYear}</div>
    </div>
  )
}

export default Footer