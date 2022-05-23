const button = document.querySelector('button.greeting')

function changeText(ev) {
   ev.target.textContent = 'clickity click'
}

button.addEventListener('click', changeText)