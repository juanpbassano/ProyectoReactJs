//funcion que filtra por categoria si es que se aplica un filtro
export const productosFiltrados = (data, category) => {
    if (category) {
        return data.filter((producto) => producto.category === category)
    } else {
        return data
    }
}
