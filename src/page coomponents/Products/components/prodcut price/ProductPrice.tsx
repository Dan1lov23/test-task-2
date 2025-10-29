export default function ProductPrice({price}:{price:number}) {
    return (
        <>
            <div>
                <p style={{fontSize: "1.6rem"}}>{price} ₽</p>
            </div>
        </>
    )
}
