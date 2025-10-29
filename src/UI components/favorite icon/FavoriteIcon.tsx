import "./favoriteIcon.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

import {useStore} from "../../store/store/store.ts";

import {useStore} from "../../store/store/store.ts";

export default function FavoriteIcon({product}:{product:Product}) {

    const {toggleFavorite} = useStore();

    return (
        <>
            <div className="favoriteIcon">
                <p onClick={() => toggleFavorite(product.id)}>
                    {product.isFavorite === true ? (
                        <FontAwesomeIcon icon={faHeart} color="red"/>
                    ) : (
                        <FontAwesomeIcon icon={faHeart} color="black"/>
                    )}
                </p>
            </div>
        </>
    )
}
