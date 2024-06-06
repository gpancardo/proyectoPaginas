let imagenes=["churrosnav.jpg", "churrosnav1.jpg","churrosnav2.jpg","churrosnav3.jpg", "churrosnav4.jpg"];
let actual=0;
let ruta;

function subir(){
    actual=actual+1;
    if (actual!=5){
        ruta=("/media/"+imagenes[actual])
        document.getElementById("carousel").src=ruta;
    }
    else{
        actual=0;
        ruta=("/media/"+imagenes[actual])
        document.getElementById("carousel").src=ruta;
    }
}

function bajar(){
        actual=actual-1;
        if (actual==-1){
            actual=4;
            ruta=("/media/"+imagenes[actual]);
            document.getElementById("carousel").src=ruta;
        }
        else{
            ruta=("/media/"+imagenes[actual]);
            document.getElementById("carousel").src=ruta;
        }
}

