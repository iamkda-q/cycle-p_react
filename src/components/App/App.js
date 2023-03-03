import "./App.scss";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Products from "../Products/Products";
import About from "../About/About";

function App() {

    return (
        <div className="app">
            <Header />
            <Slider anchorName="main" />
            <Products anchorName="products" />
            <About anchorName="about"/>
            <div
                style={{
                    minHeight: "50vh",
                    width: "100px",
                    border: "1px solid black",
                    boxSizing: "content-box",
                }}
            >
                partners
            </div>
            <div
                id="partners"
                style={{
                    minHeight: "50vh",
                    width: "100px",
                    border: "1px solid black",
                    boxSizing: "content-box",
                }}
            >
                partners
            </div>
            <div id="contacts" style={{ minHeight: "50vh", width: "100px" }}>
                contacts
            </div>
        </div>
    );
}

export default App;
