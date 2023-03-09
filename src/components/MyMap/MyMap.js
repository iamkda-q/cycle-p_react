import React, { useEffect, useRef, useState } from "react";
import { useYMaps } from "@pbe/react-yandex-maps";
// import * as ymaps3 from 'ymaps3';

import "./MyMap.scss";

const MyMap = () => {
    const [myMap, setMyMap] = useState(null);
    const cycleCoord = [55.745963, 37.825234];

    const mapRef = useRef(null);
    const ymaps = useYMaps([
        "Map",
        "Placemark",
        "geoObject.addon.balloon",
        "control.ZoomControl",
        "control.FullscreenControl",
        "control.RulerControl",
        "control.TypeSelector",
        "control.RoutePanel",
        // "control.GeolocationControl",
    ]);

    function enableBehaviors() {
        myMap.behaviors.enable([
            "drag",
            "scrollZoom",
            "dblClickZoom",
            "rightMouseButtonMagnifier",
        ]);
    }

    function disableBehaviors(e) {
        myMap.panTo(cycleCoord);
        myMap.behaviors.disable([
            "drag",
            "scrollZoom",
            "dblClickZoom",
            "rightMouseButtonMagnifier",
        ]);
    }

    useEffect(() => {
        if (!ymaps || !mapRef.current) {
            return;
        }

        const myMap = new ymaps.Map(mapRef.current, {
            center: cycleCoord,
            zoom: 16,
            controls: [
                "zoomControl",
                "fullscreenControl",
                "rulerControl",
                "typeSelector",
            ],
        });

        myMap.behaviors.disable([
            "drag",
            "scrollZoom",
            "dblClickZoom",
            "rightMouseButtonMagnifier",
        ]);

        // myMap.controls.add('routePanelControl');

        const myPlacemark = new ymaps.Placemark(
            cycleCoord,
            {
                balloonContentBody: [
                    "<address>",
                    '<strong>"ООО НПП Цикл Плюс"</strong>',
                    "<br/>",
                    "Москва, ул. Фрязевская д.4 стр.3",
                    "<br/>",
                    "</address>",
                ].join(""),
                iconCaption: '"ООО НПП Цикл Плюс"',
            },
            {
                preset: "islands#blueFactoryIcon",
            }
        );

        myMap.geoObjects.add(myPlacemark);
        myMap.container.fitToViewport();
        setMyMap(myMap);
        // myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier'])
    }, [ymaps]);

    return (
        <div
            className="map"
            ref={mapRef}
            onClick={enableBehaviors}
            onMouseLeave={disableBehaviors}
        />
    );
};

export default MyMap;
