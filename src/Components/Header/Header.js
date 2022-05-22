import { useState } from "react"
import { Link } from "react-router-dom"
import { Combined, GroupIcon, Menu, VideoLive, YoutubeLogo } from "../../Assets/Images/Icons/Icons"
import useAuth from "../../Hooks/useAuth"
import UserImg from "../../Assets/Images/userimg.png"
import "./header.scss"
import useNav from "../../Hooks/useNav"
import { DarkLogo, WhiteMenu } from "../../Assets/Images/Icons/Icons"
import darkLogoimg from "../../Assets/Images/darklogo.svg"
import useLogo from "../../Hooks/useLogo"
import useImage from "../../Hooks/useImage"

const Header = () => {

    const [token] = useAuth()
    const [open, setOpen] = useNav()
    const [logo] = useLogo()
    
console.log(token);
    return (
        <div className="header">
            <div className="header__left">
                <button onClick={() => setOpen(prev => !prev)} className="header__menu">{logo ? <Menu /> : <WhiteMenu/>}</button>
                <Link id="siteLogo" className="header__link" to='/'> {logo ? <YoutubeLogo /> : <DarkLogo/>} </Link>
                {
                    logo ? (
                        <input className="header__input" autoComplete="off" type="search" name="search" placeholder="Search" />
                    ):(
                        <input className="header__input--dark" autoComplete="off" type="search" name="search" placeholder="Search" />
                    )
                }
            </div>
            <div className="header__right">
                <VideoLive />
                <Combined />
                <GroupIcon />
                <img className="header__user-img" src={token.image.img} alt="user image" />
            </div>
        </div>
    )
}

export default Header;