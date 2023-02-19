import "./App.scss"
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Project from "../Project/Project";

function App() {

/*     function stickHead(e) {
        console.log(e.target, e.currentTarget)
    } */

    return (
        <div className="app">
            <Header />
            <Slider />
            <Project />
            <Project />
            <Project />
            <div style={{minHeight: "100vh", width: "100px"}}></div>


        </div>
    );
}

export default App;
