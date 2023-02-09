import React from 'react'
import { SideBar } from '../../components/SideBar'
import "./style.css"
export const HomePage = () => {
  return (
    <div className="homepage">
        <SideBar/>
        <div className="container">
            <div className="back" style={{backgroundColor: "blue", height: "100px"}}></div>
        </div>
    </div>
  )
}
