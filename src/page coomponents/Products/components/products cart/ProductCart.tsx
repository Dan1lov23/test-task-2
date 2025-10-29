import "./productCart.css";

import type {Product} from "../../../../interfaces/Interfaces.tsx";

import Buttons from "../buttons/Buttons.tsx";
import ProductPrice from "../prodcut price/ProductPrice.tsx";
import ProductName from "../product name/ProductName.tsx";
import ProductDescription from "../product description/ProductDescription.tsx";

import {useStore} from "../../../../store/store/store.ts";

import {useNavigate} from "react-router-dom";

export default function ProductCart({product}:{product:Product}) {

    const navigate = useNavigate();

    const {setProductForTemplate} = useStore();

    const onTemplateFunction = () => {
        navigate(`/product${product.id}`);
        setProductForTemplate(product);
    }

    return (
        <>
            <div className="productCart" onClick={() => onTemplateFunction()}>
                <ProductName name={product.name}/>
                <ProductPrice price={product.price} />
                <ProductDescription description={product.description}/>
                <div onClick={(e) => e.stopPropagation()}>
                    <Buttons productId={product.id}/>
                </div>
            </div>
        </>
    )
}
