import "./App.scss"
import Header from "../Header/Header";
import Slider from "../Slider/Slider";

function App() {

/*     function stickHead(e) {
        console.log(e.target, e.currentTarget)
    } */

    return (
        <div className="app">
            <Header />
            <Slider />


        </div>
    );
}

export default App;
