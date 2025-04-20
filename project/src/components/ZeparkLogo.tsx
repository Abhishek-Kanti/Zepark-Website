import React from 'react';

interface ZeparkLogoProps {
  className?: string;
}

const ZeparkLogo: React.FC<ZeparkLogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <img 
      src="https://i.ibb.co/XZZX9ZCd/c42f28b2-6827-462c-9fe3-21216464ea2b-removebg-preview.png" 
      alt="Zepark Logo" 
      className={className} 
    />
  );
};

export default ZeparkLogo;