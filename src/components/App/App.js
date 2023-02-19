import "./App.scss"
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Projects from "../Projects/Projects";


function App() {
    return (
        <div className="app">
            <Header />
            <Slider />
            <Projects />
            <div style={{minHeight: "100vh", width: "100px"}}></div>


        </div>
    );
}

export default App;
