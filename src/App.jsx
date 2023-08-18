import './main.scss'
import {createRoot} from "react-dom/client";
import Header from "./Header/Header.jsx";

// eslint-disable-next-line react-refresh/only-export-components
function App() {
    return (<>
        <Header/>
        <main>
            <section className="container date_and_time">
                <div className="dateSetup">
                    <img className="dateSetup__icon" src="" alt=""/>
                    <span className="dateSetup__text">17/08/2023</span>
                </div>
                <div className="timeSetup">
                    <img className="timeSetup__icon" src="" alt=""/>
                    <span className="timeSetup__text">16:11</span>
                </div>
            </section>
            <section className="container addTemp">
                <h2 className="addTemp__hdl">Add Body Temperature Data</h2>
                <div className="addTemp__content">
                    <img src="" alt="" className="addTemp__icon"/>
                    <div className="addTemp__slidecontainer">
                        <input type="range" min="1" max="100" value="50" className="addTemp__slider" id="myRange"/>
                    </div>
                </div>
                <button className="addTemp__btn">Add data</button>
            </section>
            <section className="container addMedicine">
                <h2 className="addMedicine__hdl">Add Antipyretic Medicine dose</h2>
                <div className="addMedicine__content">
                        <span className="addMedicine__type">
                            <img src="" alt="" className="addMedicine__icon"/>
                        </span>
                    <span className="addMedicine__product">Nurofen Forte</span>
                    <span className="addMedicine__amount"> 5 ml</span>
                </div>
                <button className="addMedicine__btn">Add dose</button>
            </section>
            <footer className="container footer">
                <p className="footer_text">copyrigth by JaFi studios</p>
            </footer>
        </main>
    </>)
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
