const form = document.querySelector('#userForm')


const handleSubmit = function(ev) {
    // This chunk of code gets values out of the form
    ev.preventDefault()
    const f = ev.target
    const username = f.userYame.value
    const Age = f.age.value
    const favoritecolor = f.favoriteColor.value

    
    // This chunk of code creates list items
    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${username}`
    const ageItem = document.createElement('li')
    ageItem.textContent = `Age ${Age}`

    // This chunk of code builds the actual list
    const list = document.createElement('ul')
    list.appendChild(nameItem)
    list.appendChild(ageItem)

    // This chunk of code sticks the code on the page
    const users = document.querySelector('#users')
    users.appendChild(list)
    
    // This chunk of code resets the fieldss
    f.reset()
    f.userYame.focus()
    
}


form.addEventListener('submit', handleSubmit)