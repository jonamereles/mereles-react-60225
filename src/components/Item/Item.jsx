import '../Item/Item.css'
import { Link } from "react-router-dom"
export const Item = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`}>
        <div className=" max-w-xs mx-auto bg-gray-200 p-3 rounded-md red">
            <img src={`${product.img}`} alt={`Imagen de ${product.title}`} />
            <h2 className="text-lg font-semibold font-bold mb-2">{product.title} {product.brand} </h2>
            <p className="text-gray-700 mb-2 font-semibold">{product.description}</p>
            <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold">${product.price}</span>
                <button className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                Agregar al carrito
                </button>
            </div>
        </div>
        </Link>
    )
}

