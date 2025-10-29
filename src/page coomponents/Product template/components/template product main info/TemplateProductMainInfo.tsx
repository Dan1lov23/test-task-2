import "./templateProductMainInfo.css";

import type {Product} from "../../../../interfaces/Interfaces.tsx";

export default function TemplateProductMainInfo({product}:{product:Product}) {
    return (
        <>
            <div className="templateProductMainInfo">
                <p className="price">{product.price} ₽</p>
                <p>{product.description}</p>
                {product.connectionType === "wired" ? (
                    <p>Тип подключния - проводной</p>
                ): (
                    <p>Тип подключения - безпроводной</p>
                )}
                <p>Количетсво клавиш - {product.keyNum}</p>
                {product.type === "mechanical" ? (
                    <p>Тип клавиатуры - механический</p>
                ) : (
                    <p>Тип клавиатуры - мембранный</p>
                )}
            </div>
        </>
    )
}