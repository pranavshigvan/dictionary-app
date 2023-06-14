import React from 'react'
import dark from '../asset/images/logo-dark.png'
import light from '../asset/images/logo-light.png'
import style from "./Header.module.css"
const Header = ({fonts,setFont,font}) => {
  return (
    <header>
        <img src={light} alt="" />
        <div className="right-header">
            <select name="font" id="font" value={font} onChange={(e)=>{setFont(e.target.value)}}>
                {fonts.map(font=><option value={font} key={Math.random()}>{font}</option>)}
            </select>
        </div>
    </header>
  )
}

export default Header