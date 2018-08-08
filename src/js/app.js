const D = [6, 8, 10, 12, 16, 20, 24, 27, 33, 36, 42, 48];
const P = [1, 1.25, 1.5, 1.75, 2, 2.5, 3, 3, 3.5, 4, 4.5, 5];
const B = [5, 6.5, 8, 10, 13, 16, 19, 22, 24, 29, 34, 38];
const C = P;
const button = document.getElementById('button');
let inputDiameter = document.getElementById('diameter');
let inputHeight = document.getElementById('height');
let c = document.getElementById('c');
let p = document.getElementById('p')
let b = document.getElementById('b');
let a = document.getElementById('a');
let l = document.getElementById('l');

function isValid(element, number){
  if (number < 1 || Number.isNaN(number)) {
    element.classList.remove('error');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        element.classList.add('error')
      })
    });
    return false;
  }
  return true;
}

function calcStud() {
  let diameter = Number.parseInt(inputDiameter.value);
  let height = Number.parseInt(inputHeight.value);

  if (!isValid(inputDiameter, diameter) || !isValid(inputHeight, height)) {
    return;
  }

  const index = D.findIndex(number => number == diameter);

  if (index === -1) {
    [c, p, b, a, l].forEach(el => el.innerHTML = 'Диаметр не найден')
    return;
  }

  c.innerHTML = C[index] + ' мм';
  p.innerHTML = P[index] + ' мм';
  b.innerHTML = B[index] + ' мм';
  a.innerHTML = 1.5 * P[index] + ' мм';
  l.innerHTML = height + 2 * (C[index] + 1.5 * P[index] + B[index]) + ' мм';
  l.style.fontWeight = 'bold';
}

button.addEventListener('click', calcStud);