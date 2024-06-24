import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail'
import Loading from './Loading';
import {doc, getDoc} from "firebase/firestore";
import NoEncontrado from './NoEncontrado';
import { db } from "../firebaseConfig"
//tratar de mostrar NoEncontrado si no existe la ruta. 


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, "BaseReact", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProducto({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setError(true);
                }
            } catch (error) {
                console.log(error);
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

