import { pedirDatos, productosFiltrados } from "../helpers/pedirDatos";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import { tuUpperCase } from "../helpers/tuUpperCase";

const ItemListContainer = () => {
    const { category } = useParams()
    const [data, setData] = useState(null)

    // hook para simular y renderizar la base de datos de forma asincronica 
    useEffect(() => {
        pedirDatos()
            .then((respuesta) => {
                setData(respuesta)
            })
            .catch((error) => {
                console.error("Error al obtener los datos:", error);
            });
    }, [category]);


    return (
        <div className="cont-productos">
            <h1>Productos disponibles:</h1>
            <div>
                {category && 
                <h2>Filtrados por productos {tuUpperCase(category)}</h2>}
            </div>
            <div>
                {data ?
                    <section className="los-productos">{
                        productosFiltrados(data, category).map((producto) => (
                            <ItemList
                                key={producto.id}
                                id={producto.id}
                                nombre={producto.nombre}
                                descripcion={producto.descripcion}
                                precio={producto.precio}
                                imagen={producto.imagen}
                                category={producto.category}
                            />
                        ))
                    }
                    </section >
                    :
                    <div>
                        <Loading />
                    </div>
                }
            </div>
        </div>
    )
}
export default ItemListContainer;