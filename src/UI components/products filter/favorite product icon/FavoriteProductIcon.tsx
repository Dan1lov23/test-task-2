import "./favoriteProductIcon.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

export default function FavoriteProductIcon({catalogCategory, setCatalogCategory}:{catalogCategory:string, setCatalogCategory: (category:string) => void}) {
    return (
        <>
            <div className="favoriteProductIcon">
                {catalogCategory === "favorite" ? (
                    <p className="current" onClick={() => setCatalogCategory("favorite")}>
                        <FontAwesomeIcon icon={faHeart}/>
                    </p>
                ) : (
                    <p className="default" onClick={() => setCatalogCategory("favorite")}>
                        <FontAwesomeIcon icon={faHeart}/>
                    </p>
                )}
            </div>
        </>
    )
}