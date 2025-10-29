import "./buttons.css";

import DeleteButton from "../../../../UI components/delete button/DeleteButton.tsx";
import FavoriteIcon from "../../../../UI components/favorite icon/FavoriteIcon.tsx";

import {useStore} from "../../../../store/store/store.ts";

export default function Buttons({productId}:{productId: string | number}) {
    
    const product = useStore(state => state.products.find(p => p.id === productId));

    if (!product) return null;

    return (
        <>
            <div className="buttons">
                <FavoriteIcon product={product}/>
                <DeleteButton product={product}/>
            </div>
        </>
    )
}
