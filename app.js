document.addEventListener("DOMContentLoaded", () => {
    let amigos = [];

    function agregarNombreAmigos(){
        let nombreAmigo = document.getElementById('amigo').value;
        if (nombreAmigo !== ""){
            amigos.push(nombreAmigo);
            console.log(amigos);
            document.getElementById('amigo').value ='';
            mostrarLista();
        } else {
            alert("Debes ingresar un nombre");
            
        }
        
    }

    function mostrarLista(){
        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = '';
        amigos.forEach(amigo => {
            let item = document.createElement('li');
            item.textContent = amigo;
            listaAmigos.appendChild(item);
        });
    }

    let botonAgregar = document.getElementById('agregarNombre');
botonAgregar.addEventListener('click', agregarNombreAmigos);

function sortearAmigos(){

    if (amigos.length === 0) {
        alert("No hay amigos agregados para sortear");
        return; 
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    amigos.splice(indiceAleatorio, 1);
    
    let resultadoAmigoSorteado = document.getElementById('resultado');
    resultadoAmigoSorteado.textContent = `El amigo elegido es: ${amigoSorteado}`;
    console.log(amigoSorteado);
}

let botonSortear = document.getElementById('sorteo');
botonSortear.addEventListener('click', sortearAmigos);
})
    
    
