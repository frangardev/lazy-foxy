const imgContainer = document.getElementById("images")
const createButton = document.getElementById("create")
const removeButton = document.getElementById("remove")
const accountantContainer =  document.getElementById("accountant")
let i = 0

createButton.onclick = () => crateRandomImage()
removeButton.onclick = () => removeImage()

 
const random = (minimum = 1, maximum = 123) => {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum
}


const crateRandomImage = () => {   
    let img = document.createElement('img')
    img.src = `https://randomfox.ca/images/${random()}.jpg`

    img.className ="img-random"

    imgContainer.appendChild(img)

    accountant(1)
}

const removeImage = () => {
    const imgToRemove = document.querySelectorAll("#images img")[0]
    if(imgToRemove !== undefined){
        imgContainer.removeChild(imgToRemove)
    }
    accountant(-1)
}


const accountant = (num) => {
    if(i >= 0){
        i += num
        console.log(i + num);
        
    }else{
        i = 0
    }
    accountantContainer.innerText = i
}