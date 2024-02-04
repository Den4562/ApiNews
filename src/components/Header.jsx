import React from 'react'
import { NavLink } from "react-router-dom";
import s from "../style/header.module.css"
const Header = () => {
  return (
   <div>
    <h1>Maxvel</h1>
        <nav className={s.navigation}>
            <NavLink className={s.nav_link} to="news">News</NavLink>
            <NavLink className={s.nav_link} to="weather">Weather</NavLink>
            <NavLink className={s.nav_link} to="blog">Blog</NavLink>
        </nav>
    </div>
    )
}

export default Header