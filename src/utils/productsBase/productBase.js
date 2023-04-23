import { productsBaseGeneral } from "./generalBase";
import { productsBaseSubway } from "./subwayBase";
import { productsBaseHeavy } from "./heavyBase";
import { productsBaseCity } from "./cityBase";

/* База продукции */

export const productsBase = {
    ...productsBaseGeneral,
    ...productsBaseSubway,
    ...productsBaseHeavy,
    ...productsBaseCity,
};

/* Отрасли работы */

import general from "../../../public/general/ardn3.jpg";
import generalBg from "../../../public/general/bg.jpg";
import subway from "../../../public/subway/subway.png";
import subwayBg from "../../../public/subway/bg.jpg";
import heavy from "../../../public/heavy/belaz.png";
import heavyBg from "../../../public/heavy/bg.jpg";
import city from "../../../public/city/city.png";
import cityBg from "../../../public/city/bg.jpg";

/* Фон хэдера */

import { headerSlides } from "../constants";

export const branchesBase = {
    general: {
        name: "Преобразовательная техника общепромышленного назначения",

        shortD: `Серия преобразователей частоты для управления асинхронными двигателями мощностью от 0.55 до 400 кВт, 
         электронные блоки и источники питания мощностью от 1.5 до 1600 кВт.`,

        img: {
            img: general,
            props: { transform: "scale(1.4)" },
        },

        bg: generalBg,

        headerBg: [headerSlides[0]],

        products: productsBaseGeneral,
    },
    subway: {
        name: "Преобразовательная техника для рельсового транспорта",

        shortD: `Преобразователи для питания собственных нужд, источники питания мотор-компрессоров и кондиционеров
             для вагонов метрополитена Москвы, Санкт-Петербурга и Софии (Болгария).`,

        img: {
            img: subway,
            props: { transform: "scale(1.6)" },
        },

        bg: subwayBg,

        headerBg: [headerSlides[1]],

        products: productsBaseSubway,
    },
    heavy: {
        name: "Преобразовательная техника для большегрузных карьерных самосвалов",

        shortD: "Комплект тягового электроборудования для карьерных самосвалов БЕЛАЗ 7558 грузоподъемностью до 90 тонн.",

        img: {
            img: heavy,
            props: { transform: "scale(1.2)" },
        },

        bg: heavyBg,

        headerBg: [headerSlides[2]],

        products: productsBaseHeavy,
    },
    city: {
        name: "Преобразовательная техника для городского наземного транспорта",

        shortD: `Моноблоки, тяговые инвертора, источники питания бортовой сети 
             и зарядные станции для электромобилей.`,

        img: {
            img: city,
            props: { transform: "scale(1.3)" },
        },

        bg: cityBg,

        headerBg: [headerSlides[3]],

        products: productsBaseCity,
    } /* 
    special: {
        name: "Инновационные разработки",

        shortD: `Не имеющий аналогов в мире комплектный вентильно-индукторный электропривод мощностью 630 кВт.`,

        img: belaz,

        products: productsBaseSpecial,
    }, */,
};
