import "./App.scss"
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Products from "../Products/Products";


function App() {
    return (
        <div className="app">
            <Header />
            <Slider anchorName="main"/>
            <Products anchorName="products" />
            <div id="about" style={{minHeight: "50vh", width: "100px", border: "1px solid black"}}>about</div>
            <div id="partners" style={{minHeight: "50vh", width: "100px", border: "1px solid black"}}>partners</div>
            <div id="contacts" style={{minHeight: "50vh", width: "100px"}}>contacts</div>
        </div>
    );
}

export default App;
