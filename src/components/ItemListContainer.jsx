
import bd from "../../data/bd.json"
import Card from "./Card";


const ItemListContainer = () => {


    return (
        <section className="los-productos">{
                bd ?
                    <>{
                    bd.map((producto) => (
                        <Card 
                            key={producto.id}
                            nombre={producto.nombre}
                            descripcion={producto.descripcion}
                            precio={producto.precio}
                            imagen={producto.imagen}
                        />
                    ))
            }
        </>
        :
        <div>
            <h1>No hay data</h1>
        </div>
        }
        </section >
    )
}
export default ItemListContainer;