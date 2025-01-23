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

})




