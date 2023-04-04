import React from "react";
import { numbers } from "./constants.module.scss";
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
    name: `Научно-производственное предприятие "Цикл\xa0Плюс"`,
    shortName: `НПП\xa0"Цикл\xa0Плюс"`,
    mission:
        "Наше предприятие занимается разработкой и производством преобразовательной техники.",
};

/* Информация о продукции */

const productsBase = {
    ardn3: {
        name: "Автоматический регулятор дозировочного насоса (АРДН-3)",
        shortD: "Серия преобразователей частоты для работы с плунжерным насосом мощностью 0,25-3кВт",
        //         name: (
        //     <>
        //         Автоматический регулятор дозировочного насоса (АРДН-
        //         <span className={numbers}>3</span>)
        //     </>
        // ),

        // shortD: (
        //     <>
        //         Серия преобразователей частоты для работы с плунжерным насосом
        //         мощностью <span className="numbers">0,25-3</span>кВт
        //     </>
        // ),

        fullD: `Серия преобразователей частоты (автоматический регулятор дозировочного насоса) 
        для работы с плунжерным насосом мощностью 0,25-3кВтСерия преобразователей частоты 
        (автоматический регулятор дозировочного насоса) для работы с плунжерным насосом мощностью
         0,25-3кВтСерия преобразователей частоты (автоматический регулятор дозировочного насоса)
          для работы с плунжерным насосом мощностью 0,25-3кВтСерия преобразователей частоты
           (автоматический регулятор дозировочного насоса) для работы с плунжерным насосом мощностью 0,25-3кВт`,

        img: belaz,
        documents: [
            { name: "Руководство по эксплуатации", path: "/ARDN-3.pdf" },
            { name: "РО с комментариями режиссёра", path: "/ARDN-3.pdf" },
        ],
    },
    provident5: {
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

        img: bg1,
    },
    voluptates: {
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

        img: bg2,
    },
};

function getAllPostIds() {
    return Object.keys(productsBase).map((key) => {
        return {
            params: {
                id: key,
            },
        };
    });
}

function getPostData(id) {
    return {
        id,
        ...productsBase[id],
    };
}

// export function convertNumberViewTNR(string) {
//     const a = string.split(" ").map((b) => {
//         if (/\d+/g.test(b)) {
//             return <span className={numbers}>{b}</span>;
//         } else {
//             return <>{b}</>;
//         }
//     });

//     let v = ``;

//     for(let i = 0; i < a.length; i++) {
//         v = `${v} ${a[i]} `
//     }

//     // const replacedNumbers = [...new Set(string.match(/\d+/g))];
//     // function a ({children}) {
//     //     return <>{children}</>
//     // }
//     // let newString = <a children={string}></a>;
//     // console.log(newString.props.children);

//     // for (let i = 0; i < replacedNumbers.length; i++) {
//     //     newString = newString.props.children.replaceAll(replacedNumbers[i], <span>3</span>);
//     // }
//     // return newString;
//     return v
//     console.log(v);
// }

export {
    colors,
    mainSlides,
    timerBg,
    productsBase,
    menu,
    aboutFigures,
    mainBgs,
    company,
    getAllPostIds,
    getPostData,
};
