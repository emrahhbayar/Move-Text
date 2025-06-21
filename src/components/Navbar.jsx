import { Link } from 'react-router'

function Navbar() {

    function closeMenuOnLinkClick() {

        setTimeout(() => {
            const navbarCollapse = document.getElementById("navbarNav");
            if (navbarCollapse) {
                navbarCollapse.classList.remove("show");
            }
        }, 300);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-container">
                <div className="container-fluid">
                    <Link className='nav-header ' to='/'>Move Text</Link>
                    <button className="navbar-toggler toggler-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link onClick={closeMenuOnLinkClick} className='link' to='/'>Create ID</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={closeMenuOnLinkClick} className='link' to='/getText'>Get Text</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar