import '../ItemListContainer/ItemListContainer.css'
import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./data/productos.json')
            .then(response => response.json())
            .then(prods => {
                setProducts(prods)
            })
            .catch((error) => console.log(error))
    }, [])
    return (
        <div>
            <ItemList products={products} />
        </div>
    )
}
