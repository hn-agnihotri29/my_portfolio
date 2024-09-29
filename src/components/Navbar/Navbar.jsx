import './Navbar.style.scss'
import { useState } from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav>
                <h2 className='logo'>Hna.dev</h2>
                <div className='menu-icon' onClick={toggleMenu}>
                    {isOpen ? '✖' : '☰'}
                </div>
                <ul className={`navLink ${isOpen ? 'active' : ''}`}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;