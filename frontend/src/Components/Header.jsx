import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../Images/logo.png"
import {BiSolidUser} from "react-icons/bi"

const Header = () => {
  return (
    <ReactNavbar 
        
     navColor1="White"
     navColor2="black"
     burgerColor="grey"
     burgerColorHover="lightGrey"
     logo={logo}
     logoWidth="250px"
     logoHoverColor="grey"
     nav2justifyContent="space-around"
     nav3justifyContent="space-around"
     link1Text="Home"
     link2Text="About"
     link3Text="Projects"
     link4Text="Contact"
     link1Url=""
     link2Url="/about"
     link3Url="/projects"
     link4Url="/contact"
     link1Color="White"
     link1ColorHover="grey"
     link1Size="1.5rem"
     link1Padding="3vmax"
     profileIcon={true}
     ProfileIconElement={BiSolidUser}
     profileIconColor="white"
     profileIconColorHover="grey"


    />
  )
}

export default Header


