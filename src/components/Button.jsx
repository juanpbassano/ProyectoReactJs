
const nombre ="juan",
apellido = "Bassano";

const concaternarNombreUsuario = (nombre , apellido)=>`${nombre} ${apellido}`
console.log(concaternarNombreUsuario);
const Button = () =>{
    return (
        <div className="container">
            <div>
                <h1>
                    Hola mundo
                </h1>
            </div>
            <main>
                <section>
                    <h2>
                        Noticias de porogramacion
                    </h2>
                    <p>
                        {texto}
                    </p>
                    <button onClick={handleClick}>

                    </button>
                </section>
            </main>
        </div>
    )
}