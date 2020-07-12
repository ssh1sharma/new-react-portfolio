import React from 'react';

const date = new Date();
const currentYear = date.getFullYear();

export const Footer = () => {
  return (
    <footer>
      <div className="container-fluid text-center footerColumn d-flex justify-content-center align-items-center">
        <p className="footerPara text-center text-muted"> &copy;{currentYear} Shiva Sharma • Cary • North Carolina &bull; 919-793-4494 </p>
      </div>
    </footer>
  )
}
