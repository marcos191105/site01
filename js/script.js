/*comentario em bloco */ // comentario linha

//constantes para referenciar os id das divs projetos
const queen = document.getElementById('queen');
const fred = document.getElementById('fred');
const rhapsody = document.getElementById('rhapsody');

// constantes para referenciar os id dos iframe
const videoQueen = document.querySelector('#videoQueen');
const videoFred = document.querySelector('#videoFred');
const videoRhapsody = document.querySelector('#videoRhapsody');

//evento do click
queen.addEventListener('click', () => {
    //para DIV
    queen.classList.toggle('active');
    //para iframe
    videoQueen.classList.toggle('active');
});

fred.addEventListener('click', () => {
    fred.classList.toggle('active');
    videoFred.classList.toggle('active');
});

rhapsody.addEventListener('click', () => {
    rhapsody.classList.toggle('active');
    videoRhapsody.classList.toggle('active');

});