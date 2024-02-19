import { useState, useEffect } from "react"
import '../Dolar/Dolar.css'

export const Dolar = () => {
    const [dolar, setDolar] = useState([])

    useEffect(() => {
        fetch('https://criptoya.com/api/dolar')
            .then((response) => response.json())
            .then((data) => {
                const molde =
                    <div className="dolar">
                        <h2>Cotizacion del dolar</h2>
                        <p>Dolar Mayorista: {data.mayorista.price}</p>
                        <p>Dolar Tarjeta: {data.tarjeta.price}</p>
                        <p>Dolar Oficial: {data.oficial.price}</p>
                    </div>

                setDolar(molde)
            })
            .catch(error => console.log)
    }, [])


    return (
        <>
            {dolar}
        </>
    )
}