import { productsBase, branchesBase } from "./productsBase/productBase";

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
    return Object.keys(branchesBase).map((key) => {
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
        ...branchesBase[id],
    };
}
