const counterEl = document.querySelector('[data-find="counterValue"]');
const counterBtn = document.querySelector ('#btn__plus');
const resetBtn = document.querySelector('#resetBtn');

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterEl.innerText = counter;


counterBtn.addEventListener('click', function() {	
	counter = counter + 1;
	counterEl.innerText = counter;
});

resetBtn.addEventListener('click', function() {
	counter = COUNTER_INITIAL_VALUE;
	counterEl.innerText = counter;
});

