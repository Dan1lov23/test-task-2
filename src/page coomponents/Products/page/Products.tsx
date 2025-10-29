import ProductsList from "../components/products list/ProductsList.tsx";
import CreateProductLink from "../../../UI components/create product link/CreateProductLink.tsx";
import ProductFilter from "../../../UI components/products filter/products filter/ProductFilter.tsx";
import SearchInput from "../../../UI components/search input/SearchInput.tsx";

export default function Products() {
    return (
        <>
            <div className="products">
                <ProductFilter/>
                <CreateProductLink/>
                <SearchInput/>
                <ProductsList/>
            </div>
        </>
    )
}