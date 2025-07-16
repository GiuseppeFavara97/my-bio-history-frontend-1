// Footer.tsx
import React from 'react';
import '../../globals.css';
const Footer: React.FC = () => {
  return (
    <footer className="footer w-full sticky bottom-0 text-white py-4">
      <div>
        <a href="index.html">
          <img
            src="/logoplaceholder.png"
            alt="logo"
            style={{ width: '50px', height: 'auto' }}
          />
        </a>
      </div>
      Prova Footer sito Pagina home.
    </footer>
  );
};

export default Footer;
