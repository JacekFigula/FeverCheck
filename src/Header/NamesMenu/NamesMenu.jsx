import {useEffect, useState} from "react";
/* eslint-disable react/prop-types */
const NamesMenu = ({activateChild , hideMenu , userName}) => {
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [weight, setWeight] = useState('');
    const [childs, setChilds] = useState([]);

    useEffect(() => {
        setChilds(JSON.parse(window.localStorage.getItem("children")));
    }, [])

    const clearChildren = () => {
        let children = [];
        window.localStorage.setItem("children", JSON.stringify(children));
        setChilds(children)
    }
    const onSend = (e) => {
        e.preventDefault();
        if (name.trim() !== '') {
            const existingNames = childs.map(child => child.name.toLowerCase());

            if (!existingNames.includes(name.toLowerCase())) {
                const child = {
                    name: name,
                    birthday: birthday,
                    weight: weight
                };

                const children = [...childs, child];
                window.localStorage.setItem("children", JSON.stringify(children));
                setChilds(children);
            } else {
                alert("A child with this name already exists.");
            }
        } else {
            alert("Child needs to have a name");
        }
    }
    const changeName = (ind) => {
        const changedName = prompt("write new name");

        if (changedName.trim() !== '') {
            const existingNames = childs.map(child => child.name.toLowerCase());
            if (!existingNames.includes(changedName.toLowerCase())) {
                let children = JSON.parse(window.localStorage.getItem("children"));
                children[ind].name = changedName
                window.localStorage.setItem("children", JSON.stringify(children));
                setChilds(children);
            } else {
                alert("A child with this name already exists. Names needs to be unique");
            }
        } else {
            alert("Name cannot be empty")
        }
    }
    const changeBth = (ind) => {
        const changedBth = prompt("write new birthday");
        let children = JSON.parse(window.localStorage.getItem("children"));
        children[ind].birthday = changedBth
        window.localStorage.setItem("children", JSON.stringify(children));
        setChilds(children);
    }
    const changeWeight = (ind) => {
        const changedWeight = prompt("write new weigth");
        let children = JSON.parse(window.localStorage.getItem("children"));
        children[ind].weight = changedWeight
        window.localStorage.setItem("children", JSON.stringify(children));
        setChilds(children);
    }
    const deleteChild = (ind) => {
        let children = JSON.parse(window.localStorage.getItem("children"));
        const updatedItems = [...children];
        updatedItems.splice(ind, 1);
        window.localStorage.setItem("children", JSON.stringify(updatedItems));
        setChilds(updatedItems);
    }

    return <>
        <nav className="header__namesMenu">
            <div onClick={hideMenu} className="header__namesAvatar">
                <h1>{userName}</h1>
                <i className="fa-regular fa-circle-xmark"></i>
            </div>
            {childs.map((it, ind) =>
                <div key={ind} className="box header__child">
                    <div className="header__childItem">
                        <h3>{it.name}</h3>
                        <button onClick={() => changeName(ind)}>
                            Edit Name
                        </button>
                    </div>
                    <div className="header__childItem">
                        <p>{it.birthday}</p>
                        <button onClick={() => changeBth(ind)}>Edit birthday</button>
                    </div>
                    <div className="header__childItem">
                        <p>{it.weight}</p>
                        <button onClick={() => changeWeight(ind)}>
                            Edit weight
                        </button>
                    </div>
                    <div className="header__namesBtns">
                        <button className="header__namesBtn" onClick={() => activateChild(childs[ind].name)}>Pick child</button>
                        <button className="header__namesBtn" onClick={() => deleteChild(ind)}>Delete child</button>
                    </div>
                </div>
            )}
            <div className="header__addChild">
                <form onSubmit={onSend}>
                    <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="birtdhday" value={birthday}
                           onChange={(e) => setBirthday(e.target.value)}/>
                    <input type="text" placeholder="weight" value={weight} onChange={(e) => setWeight(e.target.value)}/>
                    <button type="submit" className={"box"} style={{border: "none"}}>Add a child</button>
                </form>
            </div>
            <button onClick={clearChildren} className="box">Clear all people</button>
        </nav>
    </>
}

export default NamesMenu