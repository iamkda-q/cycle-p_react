/* Преобразователи рельсового транспорта */

import { headerSlides } from "../constants";

import ipp6 from "../../../public/subway/ipp6.jpg";
import psn765 from "../../../public/subway/psn765.jpg";

export const productsBaseSubway = {
    ipp6: {
        name: "Интеллектуальный аппарат ИПП-6",

        shortD: "Аппарат, предназначеный для преобразования напряжения контактной сети постоянного тока 750В",

        fullD: [
            `Интеллектуальный аппарат ИПП-6 предназначен для преобразования напряжения контактной сети постоянного тока 750В
             в постоянное стабилизированное напряжение 80В и применяется для обеспечения питанием бортовой сети, системы отопления и вентиляции салона,
             управления освещением салона головных и промежуточных вагонов метрополитена типа 81-740/741 «Русич»`,
            `Обладает развитым интерфейсом, позволяющим сохранять в памяти нештатные ситуации.`,
        ],

        img: {
            img: ipp6,
            props: {},
        },

        headerBg: [headerSlides[1]],


        documents: [
            { name: "Руководство по эксплуатации", path: "/ARDN-3.pdf" },
            { name: "РО с комментариями режиссёра", path: "/ARDN-3.pdf" },
        ],
    },
    psn765: {
        name: "Преобразователь собственных нужд ПСН-765",

        shortD: `Преобразователь собственных нужд ПСН-765 применяется на вагонах, 
        работающих в тоннелях на действующих линиях метрополитена и на на открытых участках пути, 
        электрифицированных напряжением 750 В постоянного тока`,

        fullD: [
            `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam, beatae? Eos laborum hic animi libero quod,
        cupiditate sapiente modi, provident placeat enim assumenda 
        cumque cum mollitia excepturi illo consequatur labor Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam, beatae? Eos laborum hic animi libero quod,
        cupiditate sapiente modi, provident placeat enim assumenda 
        cumque cum mollitia excepturi illo consequatur labor`,
        ],

        img: {
            img: psn765,
            props: {},
        },

        headerBg: [headerSlides[1]],

    },
};