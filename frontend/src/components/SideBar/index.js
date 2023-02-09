import React from 'react'
import "./style.css"
export const SideBar = () => {
    const menuItems= ["Home", "Services", "News", "Bolgs", "Contact"];


  return (
    <div className="sidebar">
        <ul className="menuItems">
            {menuItems.map((item, index) => (
                <li className="item" key= {index}>
                        <a href='!#'>{item}</a>
                </li> 
            ))}
        </ul>
    </div>
  )
}
