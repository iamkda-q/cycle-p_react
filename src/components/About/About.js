import React from "react";
import aboutFigure from "../../assets/images/about.jpg";
import "./About.scss";
import Gallery from "../Gallery/Gallery";

function About({ anchorName }) {
    return (
        <section className="about" id={anchorName}>
            <div className="about__container">
                <div className="about__info">
                    <h2 className="about__title">О нас</h2>
                    <h3 className="about__subtitle">
                        ООО НПП «ЦИКЛ ПЛЮС» — это команда настоящих
                        специалистов, занимающихся разработкой и производством
                        промышленной преобразовательной техники различного
                        назначения.
                    </h3>
                    <h3 className="about__subtitle">
                        Предприятие «ЦИКЛ ПЛЮС» начало свою деятельность с 1991
                        года с разработки современных электроприводов для
                        горнодобывающей техники. В настоящее время мы имеем свое
                        проектно-конструкторское бюро и
                        лабораторно-испытательную базу, которые размещены на
                        собственных площадях в г. Москве. При разработке
                        оборудования используется передовая элементная база, а
                        также применяется современная процессорная техника, как
                        отечественного, так и импортного производителя.
                        Проектируем устройства на базе собственного программного
                        обеспечения, и за годы работ был решён ряд сложных
                        инженерных задач, поставленных перед нашим коллективом.
                        Высококвалифицированные специалисты выполняют все вид
                        работ – от разработки, ОКР, НИОКР до выпуска готовой
                        продукции – с высоким уровнем качества и в поставленные
                        сроки.
                    </h3>
                </div>
                <Gallery />
                {/* <div className="about__figures">
                    <img
                        src={aboutFigure}
                        alt="Our collective"
                        class="about__figure"
                    />
                    <img
                        src={aboutFigure}
                        alt="Our collective"
                        class="about__figure"
                    />
                </div> */}
            </div>
        </section>
    );
}

export default About;
