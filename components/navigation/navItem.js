import Link  from "next/link";
import React from "react";
import styles from '../../styles/Nav.module.css'

const NavItem = ({href , text , active}) => {
    return (
       <Link href={href} className={`nav_link ${active ? "active" : ""}`}>    
            {text}
       </Link>
    )
}

export default NavItem;