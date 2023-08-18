import './main.scss'
import {createRoot} from "react-dom/client";
import Header from "./Header/Header.jsx";
import DateSet from "./DateSet/DateSet.jsx";

// eslint-disable-next-line react-refresh/only-export-components
function App() {
    return (<>
        <Header/>

            <DateSet/>
            <section className="box container addTemp">
                <h2 className="addTemp__hdl">Add Body Temperature Data</h2>
                <div className="addTemp__content">
                    <i className="fa-solid fa-temperature-three-quarters"></i>                    <div className="addTemp__slidecontainer">
                        <input type="range" min="1" max="100" value="50" className="addTemp__slider" id="myRange"/>
                    </div>
                </div>
                <button className="addTemp__btn">Add data</button>
            </section>
            <section className="box container addMedicine">
                <h2 className="addMedicine__hdl">Add Antipyretic Medicine dose</h2>
                <div className="addMedicine__content">
                        <span className="addMedicine__type">
                            <i className="fa-solid fa-bottle-droplet"></i>
                        </span>
                    <span className="addMedicine__product">Nurofen Forte</span>
                    <span className="addMedicine__amount"> 5 ml</span>
                </div>
                <button className="addMedicine__btn">Add dose</button>
            </section>
            <footer className="container footer">
                <p style={{textAlign: "center"}} className="footer_text">copyrigth by JaFi studios</p>
            </footer>

    </>)
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
