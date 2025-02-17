const titulo = document.querySelector('h2')

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 65 * i)
    });
    console.log(textoArray)
}

typeWrite(titulo)