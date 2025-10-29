import {Link} from "react-router-dom";

export default function BackPageButton() {
    return (
        <>
            <div className="backPageButton">
                <Link to="/">
                    <p style={{color: "black", fontSize: "2rem", textDecoration: "none"}} >
                        Назад
                    </p>
                </Link>
            </div>
        </>
    )
}