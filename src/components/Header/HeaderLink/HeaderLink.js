import React, { useRef, useState, useEffect } from "react";

function HeaderLink({
    text,
    title,
    anchorName,
    active, // флаг запрета на изменение позиции указателя для других ссылок при клике и автоматическом скролле до якоря (useState родителя)
    setActive,
    stickyHeader,
    handleMouse,
    isExtreme,
    isFontLoad,
}) {
    const [anchorTarget, setAnchorTarget] = useState(null);
    const [isClick, setClick] = useState(false);
    const headerLinkRef = useRef(null);

    /* Расчёт длины и позиции и установка указателя меню */
    function setPointer() {
        const rect = headerLinkRef.current.getBoundingClientRect();
        handleMouse({
            width: rect.width,
            left: rect.left,
            top:
                rect.top +
                rect.height -
                stickyHeader.current.getBoundingClientRect().top,
        });
    }
    /* Получение координат якоря и расчёт верхней границы документа*/
    function getCoordinates() {
        const { top: topAnchor, bottom: bottomAnchor } = anchorTarget
            ? anchorTarget.getBoundingClientRect()
            : document.getElementById(anchorName).getBoundingClientRect();
        const topY = stickyHeader.current.classList.contains("header_sticky")
            ? stickyHeader.current.getBoundingClientRect().height
            : 0;
        return [topAnchor, bottomAnchor, topY];
    }

    /* Подстройка ПОСЛЕ прогрузки шрифта*/
    // useEffect(() => {
    //     if (isFontLoad && isExtreme === "first") setPointer();
    // }, [isFontLoad]);

    useEffect(() => {
        setAnchorTarget(document.getElementById(anchorName));
    }, [anchorName]);

    /* Движение указателя меню при прокрутке страницы при достижении соответствующего якоря */
    // useEffect(() => {
    //     function handleScroll() {
    //         const [topAnchor, bottomAnchor, topY] = getCoordinates();

    //         if (
    //             (isExtreme === "first" &&
    //                 -1 <= window.scrollY &&
    //                 window.scrollY <= +1 &&
    //                 isClick) ||
    //             (!isExtreme &&
    //                 (topY - 5 <= topAnchor &&
    //                     topAnchor <= topY + 5) &&
    //                 isClick) ||
    //             document.documentElement.clientHeight + window.scrollY ===
    //                 document.documentElement.scrollHeight
    //         ) {
    //             setClick(false);
    //             console.log(topY, topAnchor);
    //             setActive(false);
    //         }
    //         /* Условие для запрета перемещения указателя после клика во время перемещения к другому якорю */
    //         if (
    //             !active &&
    //             ((bottomAnchor >
    //                 stickyHeader.current.getBoundingClientRect().height &&
    //                 topAnchor <=
    //                     stickyHeader.current.getBoundingClientRect().height) ||
    //                 (isExtreme === "last" &&
    //                     document.documentElement.clientHeight +
    //                         window.scrollY ===
    //                         document.documentElement.scrollHeight))
    //         ) {
    //             setPointer();
    //             console.log(headerLinkRef.current)
    //         }
    //     }

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, [active]);

    const handleClick = async (e) => {
        e.preventDefault();
        const [topAnchor, topY] = getCoordinates();
        /* Условие для игнорирования повторного нажатия на якорную ссылку при "нулевой" позиции якоря*/
        if (
            !(
                isExtreme === "first" &&
                -1 <= window.scrollY &&
                window.scrollY <= +1
            ) &&
            !(
                /* !isExtreme &&  */ (
                    topY - 1 <= topAnchor && topAnchor <= topY + 1
                )
            )
        ) {
            await Promise.all([setActive(true), setClick(true)/* , setPointer() */]);
            window.scrollBy({
                top:
                    topAnchor -
                    (stickyHeader
                        ? stickyHeader.current.getBoundingClientRect().height
                        : 0),
                behavior: "smooth",
            });
        }
    };

    /*     function handleMouseOver(e) {
        setPrevCoordinates(currentCoordinates);
        const rect = e.target.getBoundingClientRect();
        handleMouse({
            width: rect.width,
            left: rect.left,
            topAnchor:
                rect.topAnchor +
                rect.height -
                stickyHeader.current.getBoundingClientRect().topAnchor,
            borderColor: colors[Math.floor(Math.random() * colors.length)],
        });
    }

    function handleMouseOut(e) {
        if (e.target.classList.contains("header__link_active")) {
            e.target.classList.remove("header__link_active");
            return;
        }
        const { topAnchor, bottomAnchor } = anchorTarget.getBoundingClientRect();
        if (
            bottomAnchor > stickyHeader.current.getBoundingClientRect().height &&
            topAnchor <= stickyHeader.current.getBoundingClientRect().height
        ) {
            const rect = e.target.getBoundingClientRect();
            handleMouse({
                width: rect.width,
                left: rect.left,
                topAnchor:
                    rect.topAnchor +
                    rect.height -
                    stickyHeader.current.getBoundingClientRect().topAnchor,
                borderColor: colors[Math.floor(Math.random() * colors.length)],
            });
        } else {
            handleMouse(prevCoordinates);
        }
    } */

    return (
        <a
            ref={headerLinkRef}
            href={`#${anchorName}`}
            title={title}
            className={`header__link`}
            onClick={handleClick}
            // onMouseOver={handleMouseOver}
            // onMouseOut={handleMouseOut}
        >
            {text}
        </a>
    );
}

export default React.memo(HeaderLink);
