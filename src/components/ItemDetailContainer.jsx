import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Loading from './Loading';
import { pedirDatos } from '../helpers/pedirDatos';
import ItemQuantitySelector from './ItemQuantitySelector';




const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    const [cantidad, setCantidad] = useState(1);

    const handleSumar = () => {
        cantidad < producto.stock && setCantidad(cantidad + 1);
    }
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }
    const handleAdd = () =>{
        console.log({...producto, cantidad});
    }


    useEffect(() => {
        pedirDatos()
            .then((respuesta) => {
                const p = respuesta.find(prod => prod.id == id);
                setProducto(p);
            })
            .catch((error) => {
                console.error("Error al obtener los datos:", error);
            });
    }, [id]);



    return (
        <div className='descr-gral'>
            {producto ?
                <div className='descr-conteiner'>
                    <div className='descr-cont-img'>
                        <img className='descr-img-producto' src={producto.imagen} alt={'foto de ' + producto.nombre} />
                    </div>
                    <div className='descr-detalle'>
                        <h3>{producto.nombre}</h3>
                        <p>{producto.descripcion}</p>
                        <p>Precio:${producto.precio}</p>
                    </div>
                    <div>
                        <ItemQuantitySelector cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} stock={producto.stock} handleAdd={handleAdd}/>
                    </div>

                </div>
                :
                <div><Loading /></div>
            }
        </div>
    );
};

export default ItemDetailContainer;