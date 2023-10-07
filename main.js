const productos = document.querySelectorAll('.producto');
const carrito = document.querySelector('.carrito');

// Agrega eventos de arrastrar y soltar a los productos
productos.forEach(producto => {
    producto.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', producto.id);
    });
});

carrito.addEventListener('dragover', (e) => {
    e.preventDefault();
});

carrito.addEventListener('drop', (e) => {
    e.preventDefault();
    const productoId = e.dataTransfer.getData('text/plain');
    const productoArrastrado = document.getElementById(productoId);

    // Agrega el producto al carrito de compras
    carrito.appendChild(productoArrastrado);
});
