import "./templateProductName.css";

export default function TemplateProductName({productName}:{productName:string}) {
    return (
        <>
            <div className="templateProductName">
                <p>{productName}</p>
            </div>
        </>
    )
}