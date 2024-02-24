const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Game Dev Nav</h1>
            <div className="links">
                <a href="/">About Us</a>
                <a href="/">Schedule</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Game Showcase</a>
            </div>
        </nav>
    );
}

export default Navbar;
