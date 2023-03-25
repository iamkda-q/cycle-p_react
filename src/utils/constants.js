import uniqid from "uniqid";

/* Набор фотографий для слайдшоу начальной страницы */

import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.jpg";
import bg4 from "../assets/images/bg4.jpg";
import bg5 from "../assets/images/bg5.jpg";

import belaz from "../assets/images/belaz.png";

const mainSlides = [bg1, bg2, bg3, bg4, bg5];
const mainBgs = [bg1, bg2, bg3, bg4, bg5];

/* Набор фотографий продукции */

/* Набор фотографий секции о нас */

const aboutFigures = mainSlides.map((figure) => {
    return { id: uniqid(), src: figure };
});

const timerBg = 6000; // время перехода в слайдщоу

/* Цвета для указателя меню */

const colors = [
    "deepskyblue",
    "orange",
    "firebrick",
    "gold",
    "magenta",
    "black",
    "darkblue",
];

/* Меню навигации (скелет страницы) */

const menu = [
    { text: "Главная", anchorName: "header" },
    { text: "Продукция", anchorName: "products" },
    { text: "О нас", anchorName: "about" },
    { text: "Партнеры", anchorName: "partners" },
    { text: "Контакты", anchorName: "contacts" },
].map((product) => {
    return { id: uniqid(), ...product };
});

/* Информация о предприятии */

const company = {
    name:
        document.documentElement.clientWidth > 500
            ? `Научно-производственное предприятие "Цикл\xa0Плюс"`
            : `НПП\xa0"Цикл\xa0Плюс"`,
    mission:
        "Наше предприятие занимается разработкой и производством преобразовательной техники.",
};

/* Информация о продукции */

const productsBase = [
    {
        name: (
            <>
                Автоматический регулятор дозировочного насоса (АРДН-<span className="numbers">3)</span>
            </>
        ),

        shortD: <>
        Серия преобразователей частоты для работы с плунжерным насосом мощностью <span className="numbers">0,25-3</span>кВт</>,

        fullD: `Серия преобразователей частоты (автоматический регулятор дозировочного насоса) 
        для работы с плунжерным насосом мощностью 0,25-3кВтСерия преобразователей частоты 
        (автоматический регулятор дозировочного насоса) для работы с плунжерным насосом мощностью
         0,25-3кВтСерия преобразователей частоты (автоматический регулятор дозировочного насоса)
          для работы с плунжерным насосом мощностью 0,25-3кВтСерия преобразователей частоты
           (автоматический регулятор дозировочного насоса) для работы с плунжерным насосом мощностью 0,25-3кВт`,

        img: belaz,
    },
    {
        name: "Provident placeat enim assumenda cum",

        shortD: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam, beatae? Eos laborum hic animi libero quod,
        cupiditate sapiente modi, provident placeat enim assumenda 
        cumque cum mollitia excepturi illo consequatur labor`,

        fullD: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam, beatae? Eos laborum hic animi libero quod,
        cupiditate sapiente modi, provident placeat enim assumenda 
        cumque cum mollitia excepturi illo consequatur labor Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam, beatae? Eos laborum hic animi libero quod,
        cupiditate sapiente modi, provident placeat enim assumenda 
        cumque cum mollitia excepturi illo consequatur labor`,

        img: belaz,
    },
    {
        name: "Voluptates eos, possimus at repellendus?",

        shortD: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam, beatae? Eos laborum hic animi libero quod,
        cupiditate sapiente modi, provident placeat enim assumenda 
        cumque cum mollitia excepturi illo consequatur labor`,

        fullD: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam, beatae? Eos laborum hic animi libero quod,
        cupiditate sapiente modi, provident placeat enim assumenda 
        cumque cum mollitia excepturi illo consequatur labor Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam, beatae? Eos laborum hic animi libero quod,
        cupiditate sapiente modi, provident placeat enim assumenda 
        cumque cum mollitia excepturi illo consequatur labor`,

        img: belaz,
    },
].map((product) => {
    return { id: uniqid(), ...product };
});

export {
    colors,
    mainSlides,
    timerBg,
    productsBase,
    menu,
    aboutFigures,
    mainBgs,
    company,
};
