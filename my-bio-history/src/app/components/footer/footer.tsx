import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../globals.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer w-full sticky bottom-0 text-white py-4">
      <div>
        <Link href="index.html">
          <Image
            src="/logoplaceholder.png"
            alt="logo"
            style={{ width: '50px', height: 'auto' }}
          />
        </Link>
      </div>
      Prova Footer sito Pagina home.
    </footer>
  );
};

export default Footer;