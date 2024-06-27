import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { tuUpperCase } from "../helpers/tuUpperCase";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"

const ItemListContainer = () => {
    const { category } = useParams()
    const [data, setData] = useState(null)

    //hook para simular y renderizar la base de datos de forma asincronica segun cambie la categoria
    useEffect(() => {
        const fetchData = async () => {
            try {
                //el segundo argumento de la función collection es el nombre la colección de firebase
                const querySnapshot = await getDocs(collection(db, "BaseReact"))
                // Mapeo de los elementos obtenidos de los documentos de la colección
                const obtenerDocumentos = querySnapshot.docs.map(element => ({ id: element.id, ...element.data()}))
                setData(obtenerDocumentos)
            } catch(error) {
                console.log(error)
            }
        }

        fetchData()
    }, [category]);


    return (
        <div className="cont-productos">
            <h1>Productos disponibles:</h1>
            <div>
                {category &&
                    <h2>Filtrados por productos {tuUpperCase(category)}</h2>}
            </div>
            <div>
                <ItemList data={data} category={category} />
            </div>
        </div>
    )
}
export default ItemListContainer;