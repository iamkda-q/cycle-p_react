import uniqid from "uniqid";

/* Набор фотографий для слайдшоу начальной страницы */

import bgHeadSub from "../../public/subway/headerBg.jpg";
import bgHeadHeavy from "../../public/heavy/headerBg.jpg";
import bgHeadGen from "../../public/general/headerBg.jpg";
import bgHeadCity from "../../public/city/headerBg.jpg";
import bg5 from "../../public/bg5.jpg";

const headerSlides = [bgHeadGen, bgHeadSub, bgHeadHeavy, bgHeadCity, bg5];
// const mainBgs = [bgHeadGen, bgHeadSub, bgHeadHeavy, bgHeadCity, bg5];

/* Набор фотографий секции о нас */

const aboutFigures = headerSlides.map((figure) => {
    return { id: uniqid(), src: figure };
});

const timerBg = 6000; // время перехода в слайдшоу

/* Меню навигации (скелет страницы) */

const menu = [
    { text: "Главная", anchorName: "header" },
    { text: "Продукция", anchorName: "branches" },
    { text: "О нас", anchorName: "about" },
    { text: "Партнеры", anchorName: "partners" },
    { text: "Контакты", anchorName: "contacts" },
].map((product) => {
    return { id: uniqid(), ...product };
});

/* Информация о предприятии */

const company = {
    name: `Научно-производственное предприятие "Цикл\xa0Плюс"`,
    shortName: `НПП\xa0"Цикл\xa0Плюс"`,
    mission:
        "Наше предприятие занимается разработкой и производством преобразовательной техники.",
};

export {
    headerSlides,
    timerBg,
    menu,
    aboutFigures,
    // mainBgs,
    company,
};
