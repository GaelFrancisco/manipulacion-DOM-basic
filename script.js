const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues) //agrega un escuchador de eventos

function sumarInputValues(event) {
    // console.log({event})
    event.preventDefault()
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}

// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// h1.innerHTML = 'GaelFco <br> Hola'; //convierte todo a codigo html
// h1.innerText = 'GaelFco <br> Hola'; //convierte a codigo lo que es texto nada mas
// //console.log(h1.getAttribute('pantalla')) //ayuda a leer los atributos que tengan nuestro elemento
// //h1.setAttribute('class', 'rojo')

// h1.classList.add('rojo'); //es mejor trabajar estas con clases
// h1.classList.remove('verde');
// // h1.classList.toggle('verde'); depende si tiene la clases o no se la quitemos y pongamos cada vez que se ejecuta
// // h1.classList.contains('verde'); devuelve true or false dependiendo si el elemento tiene la clase que estemos preguntando

// input.value = '234553'

// const img = document.createElement('img')
// img.setAttribute('src', 'https://media4.giphy.com/media/QTgtxjlUxeLJ0vwdhB/giphy.gif?cid=6c09b9527g1ylotclsnm14nrkdwn8qtl5on5h0qpz594v104&ep=v1_stickers_related&rid=giphy.gif&ct=s')
// console.log(img)

// pid.innerHTML = ""

// pid.appendChild(img);