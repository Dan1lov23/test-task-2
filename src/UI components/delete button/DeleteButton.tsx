import "./deleteButton.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

import {useStore} from "../../store/store/store.ts";

import type {Product} from "../../interfaces/Interfaces.tsx";

export default function DeleteButton({product}:{product:Product}) {

    const {removeProduct} = useStore();

    const deleteProductFunction = () => {
        removeProduct(product.id);
    }

    return (
        <>
            <div className="deleteButton">
                <p onClick={() => deleteProductFunction()}>
                    <FontAwesomeIcon icon={faTrash}/>
                </p>
            </div>
        </>
    )
}
