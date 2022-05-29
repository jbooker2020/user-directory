// This variable grabs the HTML Element with the h1 id  'userForm'
const form = document.querySelector('#userForm')

// This function changes the h1 element to whatever a user types in the input box
const handleSubmit = function(ev) {
    ev.preventDefault()
    const heading = document.querySelector('h1')
    const f = ev.target
    const username = f.userName.value
    heading.textContent = username
    
}

// This allows the user to submit their input and have the handleSubmit function to perform
form.addEventListener('submit', handleSubmit)