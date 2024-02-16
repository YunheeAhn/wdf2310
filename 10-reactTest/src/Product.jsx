import Item from "./Item"

function Product() {

    const productsArr = [
        { name : '상품1 : ', price : 1000},
        { name : '상품2 : ', price : 1500},
        { name : '상품3 : ', price : 2000},
        { name : '상품4 : ', price : 3000}
    ]


    return (
        <div>
            <h1>Product</h1>
            <ul>
                { productsArr.map((item, index) => (
                    <Item key = {index} item={item}/>
                ))}
                {/* <li>
                    <strong>{productsArr[0].name}</strong>
                    <span>{productsArr[0].price}</span>
                </li>
                <li>
                    <strong>{productsArr[1].name}</strong>
                    <span>{productsArr[1].price}</span>
                </li>
                <li>
                    <strong>{productsArr[2].name}</strong>
                    <span>{productsArr[2].price}</span>
                </li>
                <li>
                    <strong>{productsArr[3].name}</strong>
                    <span>{productsArr[3].price}</span>
                </li> */}
            </ul>
        </div>
    )
}

export default Product