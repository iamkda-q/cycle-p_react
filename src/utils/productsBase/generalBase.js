/* Общепромышленные преобразователи */

import ardn3 from "../../../public/general/ardn3.jpg";
import sgu from "../../../public/general/sgu.jpg";
import { headerSlides } from "../constants";

export const productsBaseGeneral = {
    ardn3: {
        name: "Автоматический регулятор дозировочного насоса (АРДН-3)",

        shortD: "Преобразователь частоты для работы с плунжерным насосом мощностью до 3.7 кВт",

        fullD: [
            `Настоящая модификация блоков АРДН является отрезком серии автоматических регуляторов приводов 
        переменного тока «Универсал», выпускаемых на мощности двигателей от 0.25 до 3.7 кВт (ТУ3415-004-02699613-98).
        АРДН предназначен для приведения в движение дозировочного насоса, управления им от местного, удалённого
        пульта управления или АСУ, его пуска и останова, установки и поддержания требуемой подачи путем регулирования 
        частоты вращения электродвигателя в разомкнутой или замкнутой системе автоматического управления, 
        отключения насоса при аварийной ситуации с одновременной сигнализацией и отображением типа аварии.`,
            `Блоки АРДН могут применяются как универсальные преобразователи частоты (ПЧ) для приведения в
        движение и регулирования скорости вращения асинхронных короткозамкнутых двигателей серий 4А, 
        АИР и других мощностью до 3.7 кВт без какой-либо конструктивной доработки двигателей. АРДН используется в насосах и
        выполнен в соответствии с требованиями Публикации МЭК204-1 и ГОСТ27487, предъявляемыми к электрооборудованию производственных машин.`,
        ],

        img: {
            img: ardn3,
            props: { transform: "scale(-1.4, 1.4)" },
        },

        headerBg: [headerSlides[0]],

        documents: [
            { name: "Руководство по эксплуатации", path: "/ARDN-3.pdf" },
            { name: "РО с комментариями режиссёра", path: "/ARDN-3.pdf" },
        ],

        parameters: [
            { name: "Мощность, кВт", value: "3,5" },
            { name: "Входное напряжение (трёхфазное), В", value: "380" },
            { name: "Мощность, кВт", value: "НЕ Имеется в наличии" },
            { name: "Входное напряжение (трёхфазное), В", value: "Имеется в наличии" },
            { name: "Мощность, кВт", value: "3,5" },
            { name: "Входное напряжение (трёхфазное), В", value: "380" },
            { name: "Мощность, кВт", value: "3,5" },
            { name: "Входное напряжение (трёхфазное), В", value: "380" },
        ]
    },
    sgu: {
        name: "Станция группового управления СГУ",

        shortD: `Предназначена для управления от одного до шести двигателей`,

        fullD: [
            `Энергосберегающее комплектное оборудование в составе блоков «Универсал» и
             станции группового управления от одного (СУ1) до шести двигателей (СГУ6), 
             управляемых от одного блока «Универсал»`,
        ],

        img: {
            img: sgu,
            props: { transform: "scale(1.3)" },
        },

        headerBg: [headerSlides[0]],
    },
    voluptates: {
        name: "Voluptates eos, possimus at repellendus?",

        shortD: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam, beatae? Eos laborum hic animi libero quod,
        cupiditate sapiente modi, provident placeat enim assumenda 
        cumque cum mollitia excepturi illo consequatur labor`,

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
            img: sgu,
            props: { transform: "scale(1.3)" },
        },

        headerBg: [headerSlides[0]],
    },
};
