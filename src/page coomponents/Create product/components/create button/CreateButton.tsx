import "./createButton.css";

import {useNavigate} from "react-router-dom";

import {useStore} from "../../../../store/store/store.ts";

import type {Product} from "../../../../interfaces/Interfaces.tsx";

export default function CreateButton() {

    const navigate = useNavigate();

    const {addProduct} = useStore();

    const addNewProductFunction = () => {

        const productName = document.getElementById("productName") as HTMLInputElement;
        const productPrice = document.getElementById("productPrice") as HTMLInputElement;
        const productDescription = document.getElementById("productDescription") as HTMLInputElement;
        const productKeyboardType = document.getElementById("keyboardType") as HTMLInputElement;
        const productKeyNum = document.getElementById("productKeyNum") as HTMLInputElement;
        const keyboardConnectionType = document.getElementById("keyboardConnectionType") as HTMLInputElement;

        if (
            !productName.value.trim() ||
            !productPrice.value.trim() ||
            !productDescription.value.trim() ||
            !productKeyboardType.value.trim() ||
            !productKeyNum.value.trim() ||
            !keyboardConnectionType.value.trim()
        ) {
            alert("Пожалуйста, заполните все поля");
            return;
        }

        const productId = Date.now();

        const newProduct: Product = {
            name: productName.value,
            price: Number(productPrice.value),
            description: productDescription.value,
            id: productId,
            isFavorite: false,
            color: "black",
            keyNum: Number(productKeyNum.value),
            type: productKeyboardType.value,
            connectionType: keyboardConnectionType.value,
        };

        addProduct(newProduct);
        navigate("/");
    }

    return (
        <>
            <div className="createButton">
                <button onClick={() => addNewProductFunction()}>
                    Создать
                </button>
            </div>
        </>
    )
}
