// This variable grabs the HTML Element with the h1 id  'userForm'
const form = document.querySelector('#userForm')

// This function changes the h1 element to whatever a user types in the input box
const handleSubmit = function(ev) {
    // Prevents the page from refreshing after names are inputted
    ev.preventDefault()
    // Grabs the div element with the id of 'users'
    const users = document.querySelector('#users')
    // creates a variable named f that stores the event target which is the form
    const f = ev.target
    // Gets the value of the forms input value and stores it in a variable
    // This only works if the input in the html has a name attribute (Ex:userYame) if it doesnt input will be undefined
    const username = f.userYame.value
    const Age = f.age.value
    // Use string interpolation to make code cleaner and more neats
    users.innerHTML += `<p>${username}, ${Age}`
    // Resets the input box to blank after a name has been entered
    f.reset()
    // Makes the cursor go to the first input box for the username
    f.userYame.focus()
    
}

// This allows the user to submit their input and have the handleSubmit function to perform
form.addEventListener('submit', handleSubmit)