
import { useEffect, useState } from "react"
import bd from "../../data/bd.json"
import Card from "./Card"
import Loading from "./Loading" 


const ItemListContainer = () => {
    const [data, setData] = useState(null)
    const [cargando, setCargando] = useState(true)
    useEffect(() => {
        const obtenerData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(bd)
            }, 2500)
        })
            .then((respuesta) => {
                setData(respuesta)
                setCargando(false)
            })
    })


    return (
        <div className="cont-productos">
            <h1>Productos disponibles:</h1>
            <div>
                {data ?
                    <section className="los-productos">{
                        data.map((producto) => (
                            <Card
                                key={producto.id}
                                nombre={producto.nombre}
                                descripcion={producto.descripcion}
                                precio={producto.precio}
                                imagen={producto.imagen}
                            />
                        ))
                    }
                    </section >
                    :
                    <div>
                        <Loading/>
                    </div>
                }
            </div>
        </div>
    )
}
export default ItemListContainer;