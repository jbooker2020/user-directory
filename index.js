const button = document.querySelector('button.greeting')

function changeText(ev) {
   ev.target.textContent = 'clickity click'
}

button.addEventListener('click', changeText)


const second_button = document.querySelector('#heady')

function changeheader() {
    const header = document.querySelector('h1')
    header.textContent = 'I do the dash and I pull off'
}

second_button.addEventListener('click', changeheader)

const third_button = document.querySelector('button#lasty')

function change2ndHeader() {
    const header2 = document.querySelector('h1#mortal')
    header2.textContent = 'hello Drake'
}

third_button.addEventListener('click', change2ndHeader)