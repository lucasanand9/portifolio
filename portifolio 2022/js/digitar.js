
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) =>{
       setTimeout(() =>{ elemento.innerHTML += letra}, 40 * i) });
}

const carta = document.querySelector('h4')
typeWriter(carta);