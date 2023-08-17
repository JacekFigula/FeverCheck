import { useState } from 'react'
import '../App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <header className="header">
            <div className="header menu">
                <section>-</section>
                <section>-</section>
                <section>-</section>
            </div>
            <div className="header childName">
                <h2 className="childName__text">Stanisław</h2>
            </div>
            <div className="header childAvatar">
            </div>
        </header>
<main>
<section className="date_and_time">
        <div className="dateSetup">
            <img className="dateSetup__icon" src="" alt=""/>
            <span  className="dateSetup__text">17/08/2023</span>
        </div>
        <div className="timeSetup">
            <img className="timeSetup__icon" src="" alt=""/>
            <span  className="timeSetup__text">16:11</span>
        </div>
</section>
    <section className="addTemp">
        <h2 className="addTemp__hdl"></h2>
        <div className="addTemp__content">
            <img src="" alt="" className="addTemp__icon"/>
            <div className="addTemp__slidecontainer">
                <input type="range" min="1" max="100" value="50" className="addTemp__slider" id="myRange"/>
            </div>
        </div>
        <button className="addTemp__btn"></button>
    </section>
</main>
    </>
  )
}

export default App
