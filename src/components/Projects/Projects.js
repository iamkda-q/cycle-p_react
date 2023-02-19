import React from "react";
import ProjectBg from "../ProjectBg/ProjectBg";
import bgProjectOne from "../../assets/images/bg1.jpg";
import bgProjectSec from "../../assets/images/bg2.jpg";


import "./Projects.scss";

function Projects() {
    return (
        <section className="projects">
            <ProjectBg bgImage={bgProjectOne}/>
            <div style={{minHeight: "20vh", width: "100px"}}></div>

            <ProjectBg bgImage={bgProjectSec}/>

        </section>
    );
}

export default Projects;
