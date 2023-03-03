import uniqid from 'uniqid';

/* Набор фотографий для слайдшоу начальной страницы */

import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.jpg";
import bg4 from "../assets/images/bg4.jpg";
import bg5 from "../assets/images/bg5.jpg";

const backgrounds = [bg1, bg2, bg3, bg4, bg5];

/* Набор фотографий продукции */


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
    { text: "Главная", anchorName: "main" },
    { text: "Продукция", anchorName: "products" },
    { text: "О нас", anchorName: "about" },
    { text: "Партнеры", anchorName: "partners" },
    { text: "Контакты", anchorName: "contacts" },
].map(product => {
    return {id: uniqid(), ...product}
});

/* Информация о продукции */

const productsBase = [
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

        img: bg1,
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

        img: bg1,
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

        img: bg1,
    }

].map(product => {
    return {id: uniqid(), ...product}
});

export { colors, backgrounds, timerBg, productsBase, menu};
