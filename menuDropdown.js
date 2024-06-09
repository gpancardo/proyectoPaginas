function visibilidadMenu(elemento) {
    var element = document.getElementById(elemento);
    if (element.style.visibility === 'visible') {
        element.style.visibility = 'hidden';
    } else {
        element.style.visibility = 'visible';
    }
}
