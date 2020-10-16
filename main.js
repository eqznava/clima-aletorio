const randomButtom = document.querySelector('.randomWeather');
const titleChoose = document.querySelector('.title');
const txtReview = document.querySelector('.text');

function randomValue(array){
  const random = Math.floor(Math.random()*array.length)
  return array[random];
}

let titleWeather = ['Soleado ☀', 'Lluvioso 🌧', 'Nevado ❄', 'Niebla 🌁'];

randomButtom.addEventListener('click', showWeather);

function showWeather(){
  let valueOne = randomValue(titleWeather);

  titleChoose.textContent = valueOne;

  switch (valueOne) {
    case 'Soleado ☀':txtReview.textContent = 'El día esta agradable y soleado hoy. ¡Use pantalones cortos! Ve a la playa o al parque y come un helado 😁😎.';
      break;
    case 'Lluvioso 🌧':txtReview.textContent = 'Está lloviendo, tome un abrigo para la lluvia y un paraguas, y no se quede fuera mucho tiempo 🌧🌩☔.';
      break;
    case 'Nevado ❄':txtReview.textContent = 'Está nevando - ¡está congelando! Lo mejor es quedarse en casa con una taza caliente de chocolate, o hacer un muñeco de nieve ❄☃🥶.';
      break;
    case 'Niebla 🌁':txtReview.textContent = 'No está lloviendo, pero el cielo está gri y nublado; podría llover en cualquier momento, así que lleve un saco solo por si acaso 🌫☂🧣.';
      break;
    default:'No se porque no deberia de funcionar 🤨'
  }

}
