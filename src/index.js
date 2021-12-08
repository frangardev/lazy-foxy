import Images from "./utils/images-create"

const imgContainer = document.getElementById("images")
const createButton = document.getElementById("create")
const removeButton = document.getElementById("remove")
const accountantContainer =  document.getElementById("accountant")


const img = new Images({ imgContainer, accountantContainer })

createButton.onclick = () => img.crateRandomImage()
removeButton.onclick = () => img.removeImage()
