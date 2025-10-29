import {useStore} from "../../../store/store/store.ts";

import BackPageButton from "../../../UI components/back page button/BackPageButton.tsx";
import TemplateProductName from "../components/template product name/TemplateProductName.tsx";
import TemplateProductMainInfo from "../components/template product main info/TemplateProductMainInfo.tsx";


export default function ProductTemplate() {

    const {productForTemplate} = useStore();

    return (
        <>
            <div className="productTemplate">
                <BackPageButton />
                <TemplateProductName productName={productForTemplate.name}/>
                <TemplateProductMainInfo product={productForTemplate}/>
            </div>
        </>
    )
}