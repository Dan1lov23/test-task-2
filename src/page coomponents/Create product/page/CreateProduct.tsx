import "./createProduct.css";

import CreateProductContainer from "../components/create product container/CreateProductContainer.tsx";
import BackPageButton from "../../../UI components/back page button/BackPageButton.tsx";

export default function CreateProduct() {
    return (
        <>
            <div className="createProduct">
                <BackPageButton/>
                <CreateProductContainer/>
            </div>
        </>
    )
}
