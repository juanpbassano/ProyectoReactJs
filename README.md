Proyecto de E-commerce en React + Vite para coderhouse.
Este proyecto simula un mini-market virtual. implementa un carrito de compras utilizando React y Firebase como base de datos. 
React nos permite renderizar solo los componentes que fueron actualizados dinamicamente sin recargar la pagina. 

Funcionalidad:
Al iniciar la App se cargan todos los productos disponibles en la base de datos, cada uno carga el nombre, la imagen y el precio, al clickear un producto se navega hacia el detalle del mismo donde se encuentra un componente con los botones para poder seleccionar las unidades y agregarlo al carrito. Al mismo tiempo se actualiza el numero del carrito en la barra de navegacion y hace un chequeo de stock con la base de datos. 
Al finalizar la compra se renderiza un componente con un breve formulario para ingresar los datos personales para luego cargarlos en la base de datos de firebase. Una vez enviado el formulario se renderiza un comprobante con el numero ID del pedido. 

A continuación se detallan los componentes principales utilizados.

1. NavBar
NavBar: La barra de navegacion es el componenete fijo para todos. ya que este no se actualiza nunca salvo el valor del carrito. 
Siempre va a estar presente durante toda la experiencia en la app para lograr una buena navegabilidad. 

2. CartProvider y CartContext (Context fundamental para intercambiar informacion entre componentes)
CartProvider: Proveedor de contexto que gestiona el estado del carrito de compras y otras funciones secundarias para toda la app.
CartContext: Contexto que proporciona acceso al estado del carrito y las funciones para agregar, eliminar y calcular el total de productos.

3. ItemListContainer
Componente que muestra una lista de todos los productos o solo los filtrados por categoría traidos desde Firebase.

4. Item e ItemList
Item: Componente que muestra la información de un producto individual.
ItemList: Componente que muestra una lista de productos filtrados.

5. ItemDetail
Componente que muestra los detalles de un producto seleccionado, permitiendo agregarlo al carrito con una cantidad seleccionada.

6. ItemQuantitySelector
Componente que permite seleccionar la cantidad de un producto y agregarlo al carrito.

7. CheckOut
Componente para finalizar la compra, enviar el pedido a Firebase y actualizar el stock de los productos.

8. ConfirmacionCompra
Componente que muestra el comprobante de compra una vez completada.

9. Contacto
Formulario de contacto para enviar consultas o comentarios.

10. FormularioCompra
Formulario para ingresar los datos del comprador antes de confirmar la compra.

11. Loading y NoEncontrado
Loading: Componente que muestra una animación de carga.
NoEncontrado: Componente que indica que no se encontraron resultados.
