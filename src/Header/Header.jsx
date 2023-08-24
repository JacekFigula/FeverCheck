import {useEffect, useState} from "react";
import NamesMenu from "./NamesMenu/NamesMenu.jsx";

const Header = () => {
    const [warunek, setWarunek] = useState(false)
    const showMenu = () => {
        setWarunek(true);
    }
    const hideMenu=()=>{
        setWarunek(false);
    }
    useEffect(()=>{
        let children= [];
        window.localStorage.setItem("children", JSON.stringify(children));
    },[])

    return <>
        <header className="header">
            <button className="hamburger hamburger--collapse is-active">
                   <span className="hamburger-box">
                         <span className="hamburger-inner"></span>
                   </span>
            </button>
            <div className="header__childName">
                <h2 className="header__childText">Stanisław</h2>
            </div>
            <div onClick={showMenu} className="header__childAvatar">
                <i className="fa-regular fa-circle-user"></i>
            </div>
            {warunek &&
                <NamesMenu hideMenu={hideMenu}/>
            }
        </header>

    </>
}

export default Header