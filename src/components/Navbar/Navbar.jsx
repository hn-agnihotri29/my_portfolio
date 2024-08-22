import './Navbar.style.scss'

const Navbar = () => {
    return (
        <>
            <nav>
                <h2 className='logo'>Hna.dev</h2>
                <ul className='navLink'>
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