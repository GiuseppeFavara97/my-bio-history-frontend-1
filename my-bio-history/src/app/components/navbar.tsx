import './navbar.css'; // Importa il foglio di stile (opzionale)
import Link from 'next/link';

const Navbar = () => {
 return (
   <nav className="navbar">
     <div className="navbar-brand">           {/* Logo o nome del sito */}
       <Link href="/">Nome del Sito</Link>
     </div>
     <ul className="navbar-links">
       <li><Link href="/">Home</Link></li>
       <li><Link href="/about">About</Link></li>
       <li><Link href="/contact">Contact</Link></li>
     </ul>
   </nav>
 );
};

export default Navbar;