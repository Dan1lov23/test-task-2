import "./productsList.css";

import {useStore} from "../../../../store/store/store.ts";
import ProductCart from "../products cart/ProductCart.tsx";

export default function ProductsList() {

    const {catalog} = useStore();

    return (
        <>
            <div className="productsList">
                {catalog.map((product, index:number) => (
                    <div key={index}>
                        <ProductCart product={product} />
                    </div>
                ))}
            </div>
        </>
    )
}