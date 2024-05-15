const Card = ({ img, name, descripcion = "Personaje" }) => {

    return (
        <div className="card">
            <div className="container-img">
                <img src={img} alt={name} />
            </div>
            <h2>
                {name}
            </h2>
            <h3>
                Tipo: { descripcion }
            </h3>
        </div>
    )
}
export default Card;