import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
         <nav className="navbar shadow navbar-dark fixed-top navabar-expand-sm bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">CONTACT BOOK</Link>
                <div>
                    <Link className="btn btn-light ml-auto" to="/contacts/add">Create Contact</Link>
                </div>
            </div>

         </nav>   
        </>
    )
}

export default Navbar
