import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail'
import Loading from './Loading';
import { doc, getDoc } from "firebase/firestore";
import NoEncontrado from './NoEncontrado';
import { db } from "../firebaseConfig"


const ItemDetailContainer = () => {
    //obtiene el parametro id de la la URL utilizando useParams
    const { id } = useParams();
    //estado para almacenar la info del producto
    const [producto, setProducto] = useState(null);
    //estado para manejo de error y poder mostrar no encontrado
    const [error, setError] = useState(false)

    //hook para obtener los detalles del producto desde la base de datos de Firebase cada vez que cambia el id de la url
    //y setea el producto en el estado producto.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, "BaseReact", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProducto({ id: docSnap.id, ...docSnap.data() });
                    //si no existe, el estado error se actualiza y se renderiza no encontrado
                } else {
                    setError(true);
                }
            } catch (error) {
                setError(true);
            }
        }
        fetchData();
    }, [id]);

    return (
        <div className='descr-gral'>
            {producto ? (
                <ItemDetail producto={producto} />
            ) : error ? (
                <NoEncontrado />
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default ItemDetailContainer;

