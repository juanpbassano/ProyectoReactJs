import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ConfirmacionCompra from './ConfirmacionCompra';
import FormularioCompra from './FormularioCompra';

const CheckOut = () => {
    const { carrito, totalPagar, limpiarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    const [comprobante, setComprobante] = useState("");

    // Función para procesar y enviar la compra a la base de datos
    const comprar = async (info) => {
        const pedido = {
            cliente: info,
            productos: carrito,
            total: totalPagar()
        };
        //agrega un nuevo documento para enviar a la base de datos
        try {
            const enviarPedido = collection(db, "pedidos");
            const docRef = await addDoc(enviarPedido, pedido);
            setComprobante(docRef.id);
            (carrito.map(actualizarStock));
            limpiarCarrito();
        } catch (error) {
            alert("Error al procesar la compra: ", error);
        }
    };

    // Función para actualizar el stock de un producto, crea nuevo stock y actualiza la db
    const actualizarStock = async (producto) => {
        const productoRef = doc(db, 'BaseReact', producto.id); 
        const nuevoStock = producto.stock - producto.cantidad; 
        await updateDoc(productoRef, { stock: nuevoStock }); 
    };


    //renderizado condicional 
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