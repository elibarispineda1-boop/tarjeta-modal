// Obtenemos los Elementos Html
const modal = document.querySelector('#modal_tarjeta');
const abrir = document.querySelector('#btn_abrir');
const cerrar = document.querySelector('#btn_cerrar');

// Creamos el evento para abrir el modal
abrir.addEventListener('click', () => {
    modal.showModal();
});

// Creamos el evento para cerrar el modal
cerrar.addEventListener('click', () => {
    modal.close();
});