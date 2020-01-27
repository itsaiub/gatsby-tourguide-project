import React, { useState } from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"

import styles from "../css/navbar.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"

const NavBar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false)

  const toggleNav = () => {
    setIsOpenNav(isOpenNav => !isOpenNav)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to="/" className={styles.logo}>
            Tour<span style={{ color: "#3fd0d4" }}>Guide</span>
          </Link>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpenNav
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  activeStyle={{ color: "#3fd0d4", border: "2px solid" }}
                >
                  {item.text.toUpperCase()}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
