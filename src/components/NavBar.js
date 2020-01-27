import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact/">Contact</Link>
      <Link to="/tours/">Tours</Link>
      <Link to="/blog/">Blog</Link>
    </div>
  )
}

export default NavBar
