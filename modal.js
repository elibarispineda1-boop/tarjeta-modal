
const modal = document.querySelector('#modal_tarjeta');
const abrir = document.querySelector('#btn_abrir');
const cerrar = document.querySelector('#btn_cerrar');


abrir.addEventListener('click', () => {
    modal.showModal();
});


cerrar.addEventListener('click', () => {
    modal.close();
});