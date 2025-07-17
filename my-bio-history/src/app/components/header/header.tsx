import React from 'react';
import Link from 'next/link';


const header: React.FC = () => {
    return (
        <header style ={{ padding: '20px', backgroundColor: '#282c34', color: 'white' }}>
            <h1>My Bio History</h1>
            <nav>
                <a href="#about" style={{ color: 'white', marginRight: '15px' }}>Chi Siamo</a>
                <a href="#contact" style={{ color: 'white', marginRight: '15px' }}>Contatti</a>
                <a href="#hero" style={{ color: 'white' }}>Home</a>
            <Link href="/Login" style={{ color: 'white', marginLeft: '15px' }}>Login</Link>
            </nav>
            </header>
    
    );
};

export default header;