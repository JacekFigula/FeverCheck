import {useState} from "react";
/* eslint-disable react/prop-types */
const NamesMenu = ({hideMenu}) => {
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [weight, setWeight] = useState('');
    const [childs, setChilds] = useState([]);

    const clearChildren = () => {
        let children = [];
        window.localStorage.setItem("children", JSON.stringify(children));
    }
    const onSend = (e) => {
        e.preventDefault();
        if (name.trim() !== '') {
            let child = {
                name: name,
                birthday: birthday,
                weight: weight
            };
            let children = JSON.parse(window.localStorage.getItem("children"));
            children.push(child);
            window.localStorage.setItem("children", JSON.stringify(children));
            setChilds(children);
        } else {
            alert("Child needs to have a name");
        }
    }
const changeName=(ind)=>{
       const changedName = prompt("write new name");
    let children = JSON.parse(window.localStorage.getItem("children"));
    children[ind].name = changedName
    window.localStorage.setItem("children", JSON.stringify(children));
}
const changeBth=(ind)=>{
    const changedBth = prompt("write new birthday");
    let children = JSON.parse(window.localStorage.getItem("children"));
    children[ind].birthday = changedBth
    window.localStorage.setItem("children", JSON.stringify(children));
}
const changeWeight=(ind)=>{
    const changedWeight = prompt("write new weigth");
    let children = JSON.parse(window.localStorage.getItem("children"));
    children[ind].weight = changedWeight
    window.localStorage.setItem("children", JSON.stringify(children));
}
    // const ChildCards = ({childs}) => {
    //     return <>
    //
    //     </>
    // }

    return <>
        <nav className="header__namesMenu">
            <div onClick={hideMenu} className="header__namesAvatar">
                <i className="fa-regular fa-circle-xmark"></i>
            </div>
            {childs.map((it, ind) =>
                <div key={ind} className="box header__child">
                    <div className="header__childItem">
                    <h3>{it.name}</h3>
                    <button onClick={()=>changeName(ind)}>
                        Edit Name
                    </button>
                    </div>
                    <div className="header__childItem">
                        <p>{it.birthday}</p>
                        <button onClick={()=>changeBth(ind)}>
                            Edit birthday
                        </button>
                    </div>
                    <div className="header__childItem">
                        <p>{it.weight}</p>
                        <button onClick={()=>changeWeight(ind)}>
                            Edit weight
                        </button>
                    </div>
                </div>
            )}
            {/*<div className="box">*/}
            {/*    <h3>Stanisław</h3>*/}
            {/*    <p>24.06.2022</p>*/}
            {/*    <p>16kg</p>*/}
            {/*</div>*/}
            {/*<div className="box">*/}
            {/*    <h3>Radziuś</h3>*/}
            {/*    <p>10.03.2021</p>*/}
            {/*    <p>20kg</p>*/}
            {/*</div>*/}
            <div className="header__addChild">
                <form onSubmit={onSend}>
                    <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="birtdhday" value={birthday}
                           onChange={(e) => setBirthday(e.target.value)}/>
                    <input type="text" placeholder="weight" value={weight} onChange={(e) => setWeight(e.target.value)}/>
                    <button type="submit" className={"box"} style={{border: "none"}}>Dodaj dziecko</button>
                </form>
            </div>
            <button onClick={clearChildren} className="box">Usuń dzieci</button>

        </nav>
    </>
}

export default NamesMenu