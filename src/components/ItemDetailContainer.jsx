import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Loading from './Loading';
import { pedirDatos } from '../helpers/pedirDatos';
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    
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
            {producto ? <ItemDetail producto={producto}/>:<Loading />}
        </div>
    );
};

export default ItemDetailContainer;

