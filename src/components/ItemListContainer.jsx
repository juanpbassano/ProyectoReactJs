import { useEffect, useState } from "react"
import bd from "../../data/bd.json"
import Card from "./Card"
import Loading from "./Loading"
import { useParams, useNavigate } from "react-router-dom"


const ItemListContainer = () => {
    const { category } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState(null)
    const [filtro, setFiltro] = useState(null)

    // hook para simular y renderizar la base de datos de forma asincronica 
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

    //eventos de los botones para filtar
    const handleClickA = () => {
        setFiltro("frescos");
        {filtro && navigate(`/itemlistcontainer/${filtro}`)}
    };

    const handleClickB = () => {
        setFiltro("almacen");
        {filtro && navigate(`/itemlistcontainer/${filtro}`)}
    };

    //funcion que filtra por categoria si es que se aplica un filtro
    const productosFiltrados =( data )=>{
        if (category){ 
            return data.filter((producto) => producto.category === filtro)
        }else{
                return data
        }
    }


    return (
        <div className="cont-productos">
            <h1>Productos disponibles:</h1>
            <h4>Filtrar por categoria</h4>
            <button onClick={handleClickA}>Productos Frescos</button>
            <button onClick={handleClickB}>Productos de Almacen </button>
            <div>
                {data ?
                    <section className="los-productos">{
                        productosFiltrados(data).map((producto) => (
                            <Card
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