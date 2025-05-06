import React from 'react';

   const Footer = () => {
     return (
       <footer style={footerStyle}>
         <p> Edwin Cabrera &copy; 2025</p>
       </footer>
     );
   };

   const footerStyle = {
     backgroundColor: '#2b77e7',
     color: '#fff',
     textAlign: 'center',
     padding: '13px 0',
     position: 'fixed',
     bottom: 0,
     width: '100%',
     fontFamily: 'Poppins, sans-serif',
     fontSize: '14px',
   };

   export default Footer;