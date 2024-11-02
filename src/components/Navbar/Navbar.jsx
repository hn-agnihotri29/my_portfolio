import './Navbar.style.scss'
import { useState } from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close mobile menu after clicking
        }
    };

    return (
        <>
            <nav>
                <h2 className='logo'>Hna.dev</h2>
                <div className='menu-icon' onClick={toggleMenu}>
                    {isOpen ? '✖' : '☰'}
                </div>
                <ul className={`navLink ${isOpen ? 'active' : ''}`}>
                    <li onClick={() => scrollToSection('home')}>Home</li>
                    <li onClick={() => scrollToSection('about')}>About</li>
                    <li onClick={() => scrollToSection('experience')}>Experience</li>
                    <li onClick={() => scrollToSection('projects')}>Projects</li>
                    <li onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;