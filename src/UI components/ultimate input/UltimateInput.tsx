import "./ultimateInput.css";

export default function UltimateInput({inputId, inputPlaceholder}:{inputId:string, inputPlaceholder:string}) {
    return (
        <>
            <div className="ultimateInput">
                <input placeholder={inputPlaceholder} id={inputId} maxLength={10}/>
            </div>
        </>
    )
}
