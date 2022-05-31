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

    

    // This chunk of code creats a div that shows the color selected by a user
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = favoritecolor
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'

    // This chunk of code creates the color list items and appends the div to the list
    const colorItem = document.createElement('li')
    colorItem.textContent = 'Favorite Color: '
    colorItem.appendChild(colorDiv)
    
    // This chunk of code builds the actual list
    const list = document.createElement('ul')
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)

    // This chunk of code sticks the code on the page
    const users = document.querySelector('#users')
    users.appendChild(list)
    
    // This chunk of code resets the fieldss
    f.reset()
    f.userYame.focus()
    
}


form.addEventListener('submit', handleSubmit)