import { useParams } from 'react-router-dom';
import bd from '../../data/bd.json';
import { useEffect, useState } from "react"
import Loading from './Loading';

const Descripcion = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const obtenerData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(bd)
            }, 500)
        })
            .then((respuesta) => {
                const p = respuesta.find(prod => prod.id == id);
                setProducto(p);
            })
    }, []);


    const [cantidad, setCantidad] = useState(0);
    const sumar = () => {
        setCantidad(cantidad + 1)
    }
    const restar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1)
        }
    }


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
                    <div className='descr-botones'>
                        <span className="tit-cant">Seleccione la cantidad</span>
                        <div className="botones-stock">
                            <button onClick={restar} className="btn-restar">-</button>
                            <span className="cantidad">{cantidad}</span>
                            <button onClick={sumar} className="btn-sumar">+</button>
                        </div>
                        <div className="cont-btn-add">
                            <button className="btn-add-cart">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
                :
                <div><Loading /></div>
            }
        </div>
    );
};

export default Descripcion;