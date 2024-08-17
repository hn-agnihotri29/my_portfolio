import './Navbar.style.scss'

const Navbar = () => {
    return (
        <>
            <nav className="navContainer">
                <span>Hna.dev</span>
                <div className='navLink'>
                    <span>Home</span>
                    <span>About</span>
                    <span>Experience</span>
                    <span>Projects</span>
                    <span>Contact</span>
                </div>
            </nav>
        </>
    )
}

export default Navbar;