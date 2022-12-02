const trafficLightEl = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightE2.removeEventListener('click', makeGreen);
    trafficLightE3.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeYellow);
    trafficLightE3.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);


function makeYellow() {
    trafficLightEl.style.background = ('black');
    trafficLightE2.style.background = ('yellow');
    trafficLightE3.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE3.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
    trafficLightE2.addEventListener('click', makeRed);
    trafficLightE3.addEventListener('click', makeRed);
}

trafficLightE2.addEventListener('click', makeYellow);


function makeRed() {
    trafficLightEl.style.background = ('black');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightE2.removeEventListener('click', makeRed);
    trafficLightE3.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
    trafficLightE2.addEventListener('click', makeGreen);
    trafficLightE3.addEventListener('click', makeGreen);
}

trafficLightE3.addEventListener('click', makeRed);
