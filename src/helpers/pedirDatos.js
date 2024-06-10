import bd from "../../data/bd.json"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(bd)
        }, 1500)
    })
};

//funcion que filtra por categoria si es que se aplica un filtro
export const productosFiltrados = (data, category, filtro) => {
    if (category) {
        return data.filter((producto) => producto.category === filtro)
    } else {
        return data
    }
}