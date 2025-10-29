import UltimateInput from "../../../../UI components/ultimate input/UltimateInput.tsx";

export default function InputsList() {

    const arrayForInputs = [
        {inputId: "productName", inputPlaceholder: "введите название продукта"},
        {inputId: "productPrice", inputPlaceholder: "введите цену продукта"},
        {inputId: "productDescription", inputPlaceholder: "введите описание продукта"},
        {inputId: "keyboardType", inputPlaceholder: "введите тип клавиатуры"},
        {inputId: "keyboardConnectionType", inputPlaceholder: "введите тип подключеия"},
        {inputId: "productKeyNum", inputPlaceholder: "введите кол-во клавиш"},
    ]

    return (
        <>
            <div className="inputsList">
                {arrayForInputs.map((arrayParam, index ) => (
                    <div key={index}>
                        <UltimateInput inputId={arrayParam.inputId} inputPlaceholder={arrayParam.inputPlaceholder} />
                    </div>
                ))}
            </div>
        </>
    )
}
