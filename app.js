 
var amigos = [];

function agregarAmigo() {
     var nombre = document.getElementById('amigo').value;
    
     if (nombre == '') {
        alert('Escribe un nombre por favor');
        return;
    }
    
    amigos.push(nombre);
    
    document.getElementById('amigo').value = '';
    
     mostrarAmigos();
}

function mostrarAmigos() {
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';  
    
     for (var i = 0; i < amigos.length; i++) {
        var nuevoItem = document.createElement('li');
        nuevoItem.textContent = amigos[i];
        nuevoItem.className = 'name-item';
        lista.appendChild(nuevoItem);
    }
}

function sortearAmigo() {
     if (amigos.length == 0) {
        alert('Agrega nombres primero');
        return;
    }
    
     var numeroRandom = Math.random();
    var indice = Math.floor(numeroRandom * amigos.length);
    var amigoGanador = amigos[indice];
    
     var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    var itemResultado = document.createElement('li');
    itemResultado.textContent = ' Amigo secreto: ' + amigoGanador;
    itemResultado.className = 'result-item';
    resultado.appendChild(itemResultado);
}