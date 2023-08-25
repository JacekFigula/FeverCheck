import {useEffect, useState} from "react";
import NamesMenu from "./NamesMenu/NamesMenu.jsx";

const Header = ({userName}) => {
    const [warunek, setWarunek] = useState(false)
    const [activeChild, setActiveChild] = useState('Create profile for child')

    useEffect(()=>{
        let children= [];
        window.localStorage.setItem("children", JSON.stringify(children));
    },[])
    const showMenu = () => {
        setWarunek(true);
    }
    const hideMenu=()=>{
        setWarunek(false);
    }
    const activateChild=(name)=>{
        console.log("activateChild initialized")
        setActiveChild(name)
        hideMenu()
    }

    return <>
        <header className="header">
            <button className="hamburger hamburger--collapse is-active">
                   <span className="hamburger-box">
                         <span className="hamburger-inner"></span>
                   </span>
            </button>
            <div onClick={showMenu} className="header__childName">
                <h2 className="header__childText">{activeChild}</h2>
            </div>
            <div onClick={showMenu} className="header__childAvatar">
                <i className="fa-regular fa-circle-user"></i>
            </div>
            {warunek &&
                <NamesMenu activateChild={activateChild} hideMenu={hideMenu} userName={userName}/>
            }
        </header>

    </>
}

export default Header