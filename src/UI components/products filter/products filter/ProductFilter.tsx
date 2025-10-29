import "./productsFilter.css";

import AllProductsIcon from "../all products icon/AllProductsIcon.tsx";
import FavoriteProductIcon from "../favorite product icon/FavoriteProductIcon.tsx";

import {useState, useEffect} from "react";

import {useStore} from "../../../store/store/store.ts";

export default function ProductFilter() {

    const {products, setCatalog} = useStore();

    const [catalogCategory, setCatalogCategory] = useState("all");

    useEffect(() => {
        if (catalogCategory === "all") {
            setCatalog(products);
        } else if (catalogCategory === "favorite") {
            const newCatalog = [];
            for (let a = 0; a < products.length; a++) {
                if (products[a].isFavorite) {
                    newCatalog.push(products[a]);
                }
            }
            console.log(newCatalog);
            setCatalog(newCatalog);
        }
    }, [catalogCategory]);

    return (
        <>
            <div className="productsFilter">
                <AllProductsIcon catalogCategory={catalogCategory} setCatalogCategory={setCatalogCategory}/>
                <p>|</p>
                <FavoriteProductIcon catalogCategory={catalogCategory} setCatalogCategory={setCatalogCategory}/>
            </div>
        </>
    )
}