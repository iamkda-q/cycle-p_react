import { productsBase, serialProducts } from "./constants";

export function getAllPostIds() {
    return Object.keys(productsBase).map((key) => {
        return {
            params: {
                id: key,
            },
        };
    });
}

export function getPostData(id) {
    return {
        id,
        ...productsBase[id],
    };
}

export function getSerialIds() {
    return Object.keys(serialProducts).map((key) => {
        return {
            params: {
                id: key,
            },
        };
    });
}

export function getSerialPostData(id) {
    return {
        id,
        ...serialProducts[id],
    };
}
