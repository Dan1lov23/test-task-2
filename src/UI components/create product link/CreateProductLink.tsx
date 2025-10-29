import {Link} from "react-router-dom";

export default function CreateProductLink() {
    return (
        <>
            <div className="createProductTitle">
                <Link to="/createProduct" style={{ textDecoration: "none" }}>
                    <p style={{color: 'black'}}>Создать задачу</p>
                </Link>
            </div>
        </>
    )
}
