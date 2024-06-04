import { useEffect, useState } from "react"
import bd from "../../data/bd.json"
import Card from "./Card"
import Loading from "./Loading"
import { useParams, useNavigate } from "react-router-dom"


const ItemListContainer = () => {
    const { categoria } = useParams()
    const [data, setData] = useState(null)
    const [filtro, setFiltro] = useState(null)

    useEffect(() => {
        const obtenerData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(bd)
            }, 1500)
        })
            .then((respuesta) => {
                setData(respuesta)
            })
            .catch((error) => {
                console.error("Error al obtener los datos:", error);
            });
    }, []);

    const [vista, setVista] = useState("todos");

    const handleClickA = () => {
        setVista("filtrado");
        setFiltro("frescos");
    };

    const handleClickB = () => {
        setVista("filtrado");
        setFiltro("almacen");
    };

    const productosFiltrados =
        vista === "filtrado" && data && filtro ? data.filter((producto) => producto.categoria === filtro) : data;


        return (
            <div className="cont-productos">
                <h1>Productos disponibles:</h1>
                <button onClick={handleClickA}>filtro a</button>
                <button onClick={handleClickB}>filtro b</button>
                <div>
                    {data ?
                        <section className="los-productos">{
                            data.map((producto) => (
                                <Card
                                    key={producto.id}
                                    id={producto.id}
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