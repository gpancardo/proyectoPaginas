function visibilidadMenu(elemento) {
    let element = document.getElementById(elemento);
    if (element.style.display === 'none' || window.getComputedStyle(element).display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}