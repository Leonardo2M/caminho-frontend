function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio') {
        elemento.play();
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const som = tecla.classList[1];
    tecla.onclick = function () { 
        tocaSom(`#som_${som}`);
    }

    tecla.onkeydown = function (event) {
        if(event.code === 'Space' || event.code == 'Enter') {
            tecla.classList.add('ativa');
        }
        
    } 

    tecla.onkeyup = function (event) {
        if(event.code === 'Space' || event.code == 'Enter') {
            tecla.classList.remove('ativa');
        }
        
    } 
    
}