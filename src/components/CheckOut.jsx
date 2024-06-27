import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ConfirmacionCompra from './ConfirmacionCompra';
import FormularioCompra from './FormularioCompra';

const CheckOut = () => {
    //se traen datos del context
    const { carrito, totalPagar, limpiarCarrito } = useContext(CartContext);
    //useForm para manejar datos del formulario
    const { register, handleSubmit } = useForm();
    const [comprobante, setComprobante] = useState("");

    // Función que crea un objeto para procesar y enviar la compra a la base de datos 
    const comprar = async (info) => {
        const pedido = {
            cliente: info,
            productos: carrito,
            total: totalPagar()
        };
        //Agrega el nuevo documento para enviar a la base de datos "pedidos"
        try {
            const enviarPedido = collection(db, "pedidos");
            const docRef = await addDoc(enviarPedido, pedido);
            setComprobante(docRef.id);
            (carrito.map(actualizarStock));
            //Luego de enviar el pedido se ejecuta la funcion de limpiar el carrito para generar un array bacio
            limpiarCarrito();
        } catch (error) {
            alert("Error al procesar la compra: ", error);
        }
    };

    // Función para actualizar el stock de un producto, crea nuevo stock y actualiza la db
    const actualizarStock = async (producto) => {
        // Obtiene la referencia del documento del producto en Firestore
        const productoRef = doc(db, 'BaseReact', producto.id); 
        //Calcula el nuevo stock del producto
        const nuevoStock = producto.stock - producto.cantidad; 
        //Actualiza el stock en firebase.
        await updateDoc(productoRef, { stock: nuevoStock }); 
    };


    //renderizado condicional, si existe comprobante renderiza confirmacioncompra sino lo que sigue.
    if (comprobante) {
        return <ConfirmacionCompra comprobante={comprobante} />;
    }

    return (
        <div className='cont-checkout'>
            <h1>Complete los siguientes campos:</h1>
            <FormularioCompra onSubmit={handleSubmit(comprar)} register={register} />
        </div>
    );
};

export default CheckOut;