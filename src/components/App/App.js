import "./App.scss";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Products from "../Products/Products";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";

function App() {

    return (
        <div className="app">
            <Header />
            <Slider anchorName="main" />
            <Products anchorName="products" />
            <About anchorName="about"/>
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
            <Contacts anchorName="contacts"/>
            <Footer />
        </div>
    );
}

export default App;
