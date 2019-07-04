import React from 'react'

import {Link } from 'react-router-dom'

const Navbar = () => {
return(
    <div>
<Link exact to="/"> Home </Link>
<Link to="/page2"> Page2</Link>
    </div>


) 

}

export default Navbar;