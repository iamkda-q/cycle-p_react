import React, { useEffect, useState, useRef } from "react";
import "./ProjectBg.scss";

function ProjectBg({bgImage}) {
    const projectViewRef = useRef();
    const projectViewHeight = "200px";
    const projectBgRef = useRef();
    
    const [imgTopOffset, setImgTopOffset] = useState(0);

    useEffect(() => {
        function bgScroll() {
            const projectViewPosition =
                projectViewRef.current.getBoundingClientRect().top;
            const projectBgRefHeight =
                projectBgRef.current.getBoundingClientRect().height;
            const clientHeight = document.documentElement.clientHeight;
            if (projectViewPosition < clientHeight) {
                const relativeMove =
                    (clientHeight - projectViewPosition) /
                    (clientHeight + parseInt(projectViewHeight));
                setImgTopOffset(
                    relativeMove *
                        (parseInt(projectViewHeight) - projectBgRefHeight)
                );
            }
        }

        window.addEventListener("scroll", bgScroll);

        return () => {
            window.removeEventListener("scroll", bgScroll);
        };
    });

    return (
        <div
            className="projectBg"
            ref={projectViewRef}
            style={{ height: projectViewHeight }}
        >
            <img
                src={bgImage}
                className="projectBg__background"
                ref={projectBgRef}
                style={{ bottom: imgTopOffset }}
                alt="Фоновое фото 1"
            />
        </div>
    );
}

export default ProjectBg;
