const form = document.querySelector('#userForm')
// This function creates a div name colorDiv that stores the color the use selected
const renderColor = function(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

// This function create the list items and uses a try catch statement to add elements that
// cause error when ran 
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

const renderList = function(data) {
    const list = document.createElement('ul')
    const labels = Object.keys(data)

    labels.forEach((label)=>{
        const item = renderListItem(label, data[label])
        list.appendChild(item)
      })

      return list
}

const handleSubmit = function(ev) {
    
    ev.preventDefault()
    const f = ev.target
    // This creates an object name 'user' with the keys and values of the username, age and favorite color
    const user = {
        username: f.userYame.value,
        Age: f.age.value,
        favoritecolor: renderColor(f.favoriteColor.value),
    }
    
        
    const users = document.querySelector('#users')
    users.appendChild(renderList(user))
    
    
    f.reset()
    f.userYame.focus()
    
}

form.addEventListener('submit', handleSubmit)

