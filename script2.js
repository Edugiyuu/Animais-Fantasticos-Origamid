const img = document.querySelector('img');

function callback(e) {
    console.log(e);
}

img.addEventListener('click',callback)

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.type);
}

animaisLista.addEventListener('click', callbackLista)

const linkExterno = document.querySelector('a^[href^="http"]');

function handleLinkExterno(event) {
    event.preventDefault();
    console.log(this.getAttribute('href'));
    console.log(event.currentTarget);
}

linkExterno.addEventListener('click',handleLinkExterno)

const h1 = document.querySelector('h1')
function handleEvent(event) {
    console.log(event.type,event);
}

h1.addEventListener('click',handleEvent);
h1.addEventListener('mouseenter',handleEvent);
h1.addEventListener('mousemove',handleEvent);

window.addEventListener('scroll',handleEvent)

function handleKeyboard(event) {
    if (event.key === 'f') {
        document.body.classList.toggle('fullscreen')
    }
    
}