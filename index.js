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
    item.textContent = `${label}: ${value}`
    return item
}

const handleSubmit = function(ev) {
    // This chunk of code gets values out of the form
    ev.preventDefault()
    const f = ev.target
    const username = f.userYame.value
    const Age = f.age.value
    const favoritecolor = f.favoriteColor.value    

    // This chunk of code creates the color list items and appends the div to the list
    const colorItem = document.createElement('li')
    colorItem.textContent = 'Favorite Color: '
    colorItem.appendChild(renderColor(favoritecolor))
    
    // This chunk of code builds the actual list
    const renderList = function() {
        const list = document.createElement('ul')
        return list
   
    }

    list = renderList()

    list.appendChild(renderListItem('Name', username))
    list.appendChild(renderListItem('Age', Age))
    list.appendChild(colorItem)
    
    

    // This chunk of code sticks the code on the page
    const users = document.querySelector('#users')
    users.appendChild(list)
    
    // This chunk of code resets the fieldss
    f.reset()
    f.userYame.focus()
    
}

form.addEventListener('submit', handleSubmit)