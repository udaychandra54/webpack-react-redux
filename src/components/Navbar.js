import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
       
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/home">Home</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/add">Add Contact</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/list">List of Contacts</Link>
        </li>
        
       
      </ul>
     
    </div>
  </div>
</nav>
       
    )
}

export default Navbar
