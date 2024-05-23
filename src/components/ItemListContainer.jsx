
import bd from "../../data/bd.json"
import Card from "./Card";


const ItemListContainer = () => {


    return (
        <section className="los-productos">{
            bd.map((item) => (
                <Card
                    nombre={item.nombre}
                    descripcion={item.descripcion}
                    precio={item.precio}
                    imagen={item.imagen}
                />
            ))
        }
        </section>
    )
}
export default ItemListContainer;