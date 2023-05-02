let counterBtn = document.querySelector ('#btn__plus');
let counterText = document.querySelector ('.counter__text');
let resetBtn = document.querySelector ('#btn__reset');

let counter = 0;

counterBtn.addEventListener('click', function() {	
	counter = counter + 1;
	counterText.innerText = counter;
});

resetBtn.addEventListener('click', function() {
	counter = 0;
	counterText.innerText = counter;
});


