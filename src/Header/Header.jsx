
const Header = ()=> {
return<>
    <header className="header">
        <button className="hamburger hamburger--collapse is-active">
                   <span className="hamburger-box">
                         <span className="hamburger-inner"></span>
                   </span>
        </button>
        <div className="header__childName">
            <h2 className="header__childText">Stanisław</h2>
        </div>
        <div className="header__childAvatar">
            <i className="fa-regular fa-circle-user"></i>
        </div>
    </header>
</>
}

export default Header