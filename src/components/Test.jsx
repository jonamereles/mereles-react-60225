import { useState } from "react"
import './Test.css'
export const Test = ({ mensaje }) => {
    //Valor - Forma de modificarlo - Valor inicial
    const [numero, setNumero] = useState(0)

    return (
        <div className="botonDeCompra">
            <button onClick={() => setNumero(numero + 1)}>Sumar boton</button>
            <p>{numero}</p>
            <p>{mensaje}</p>
        </div>
    )
}