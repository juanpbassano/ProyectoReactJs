import React from 'react'
import { useForm } from 'react-hook-form';
import { collection, addDoc} from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Swal from "sweetalert2";

const Contacto = () => {
    //hooks de useForm
    const { register, handleSubmit, reset } = useForm();
    //previene la actualizacion de la pag al enviar.

    const onSubmit = async (data) => {
        try {
            //creo una collection para enviar a contactos
            await addDoc(collection(db, 'Contactos'), {
                Nombre: data.name,
                Apellido: data.surname,
                Email: data.email,
                Comentario: data.textarea
            });
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Consulta enviada, en la brevedad seras contactado",
                showConfirmButton: false,
                timer: 1100
            });
            reset();
        } catch (error) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: ("Error al procesar la informacion"),
                showConfirmButton: false,
                timer: 800
            });
        }
    };

    return (
        <div className='cont-checkout'>
            <form action="/" method="POST" className='cont-form' onSubmit={handleSubmit(onSubmit)} >
                <h2>Contacto</h2>
                <input className="inp-form" type="text" name="name" placeholder="Nombres" {...register('name')} /><br />
                <input className="inp-form" type="text" name="surname" placeholder="Apellido" {...register('surname')} /><br />
                <input className="inp-form" type="email" name="email" placeholder="Correo electrónico" {...register('email')} /><br />
                <input className="inp-form" type="text" name="textarea"
                    placeholder="Comenta como podemos ayudarte" maxlength="300" {...register('textarea')}></input>
                <div className='contBtn'>
                    <button className="btn-vaciar" type="reset">Limpiar</button>
                    <button className="btn-pagar" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Contacto;