import "./createProductContainer.css";

import InputsList from "../inputs list/InputsList.tsx";
import CreateProductTitle from "../create product title/CreateProductTitle.tsx";
import CreateButton from "../create button/CreateButton.tsx";

export default function CreateProductContainer() {
    return (
        <>
            <div className="createProductContainer">
                <CreateProductTitle/>
                <InputsList/>
                <CreateButton/>
            </div>
        </>
    )
}