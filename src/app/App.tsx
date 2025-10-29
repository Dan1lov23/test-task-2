import "./app.css";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Products from "../page coomponents/Products/page/Products.tsx";
import ProductTemplate from "../page coomponents/Product template/page/ProductTemplate.tsx";
import CreateProduct from "../page coomponents/Create product/page/CreateProduct.tsx";

import {useStore} from "../store/store/store.ts";

export default function App() {

    const {productForTemplate} = useStore();

    return (
        <>
            <div className="app">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Products/>}/>
                        <Route path={`/product${productForTemplate.id}`} element={<ProductTemplate/>}/>
                        <Route path="/createProduct" element={<CreateProduct/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}
