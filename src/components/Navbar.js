import React from 'react'

function Navbar(props) {
  return (
    <div>
        <div className = "navbar">
            <div className = "brand-name">{props.title}</div>
            <ul>
                <li className = "navbar--items">Home</li>
                <li className = "navbar--items">About Us</li>
                <li className = "navbar--items">Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
