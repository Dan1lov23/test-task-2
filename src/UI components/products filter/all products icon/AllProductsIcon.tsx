import "./allProductIcon.css";

export default function AllProductsIcon({catalogCategory, setCatalogCategory}:{catalogCategory:string, setCatalogCategory: (category:string) => void}) {
    return (
        <>
            <div className="allProductsIcon">
                {catalogCategory === "all" ? (
                    <p onClick={() => setCatalogCategory("all")} className="current">All</p>
                ) : (
                    <p onClick={() => setCatalogCategory("all")} className="default">All</p>
                )}
            </div>
        </>
    )
}