import React, { useEffect, useState, useRef } from "react";
import bgProjectOne from "../../assets/images/bg1.jpg";

import "./Project.scss";

function Project() {
  const projectViewRef = useRef();
  const projectViewHeight = "400px";
  const projectBgRef = useRef();
  const [imgTopOffset, setImgTopOffset] = useState(0);

  useEffect(() => {
    function bgScroll() {
        const projectViewPosition = projectViewRef.current.getBoundingClientRect().top;
        const projectBgRefHeight = projectBgRef.current.getBoundingClientRect().height;
        const clientHeight = document.documentElement.clientHeight;
        if (projectViewPosition < clientHeight) {
            const relativeMove = (clientHeight - projectViewPosition)/(clientHeight + parseInt(projectViewHeight))
            setImgTopOffset(relativeMove*(parseInt(projectViewHeight) - projectBgRefHeight))
            console.log(relativeMove, (parseInt(projectViewHeight) - projectBgRefHeight));
            
        }
    }

    window.addEventListener("scroll", bgScroll);

    return () => {
      window.removeEventListener("scroll", bgScroll);
    };
  });

  return (
    <section className="projects" /* style={{}} */>
      <div className="project" ref={projectViewRef} style={{height: projectViewHeight}}>
        <img src={bgProjectOne} className="project__background" ref={projectBgRef} style={{marginTop: imgTopOffset}}/>
      </div>
    </section>
  );
}

export default Project;
