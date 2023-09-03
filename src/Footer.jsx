import React from 'react';

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <>
      <footer className="w-100 bg-light text-center">
        <p>© {year} PR Supports. All Rights Reserved | Terms & Conditions</p>
      </footer>
    </>
  )
}

export default Footer;
