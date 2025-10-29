export default function ProductDescription({description}:{description:string}) {
    return (
        <>
            <div style={{margin: '10px'}}>
                <p>{description}</p>
            </div>
        </>
    )
}