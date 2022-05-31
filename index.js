const form = document.querySelector('#userForm')

const renderColor = function(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

const renderListItem = function(label, value) {
    const item = document.createElement('li')
    item.textContent = `${label}: `
    try {
    item.appendChild(value)
    } catch(e) {
        item.textContent += value
    }
    return item
}

const handleSubmit = function(ev) {
    // This chunk of code gets values out of the form
    ev.preventDefault()
    const f = ev.target
    const username = f.userYame.value
    const Age = f.age.value
    const favoritecolor = f.favoriteColor.value    

    const list = document.createElement('ul')
    list.appendChild(renderListItem('Name', username))
    list.appendChild(renderListItem('Age', Age))
    list.appendChild(renderListItem('Favorite Color', renderColor(favoritecolor)))
    
    

    // This chunk of code sticks the code on the page
    const users = document.querySelector('#users')
    users.appendChild(list)
    
    // This chunk of code resets the fieldss
    f.reset()
    f.userYame.focus()
    
}

form.addEventListener('submit', handleSubmit)