import Random from "./Random.js"
import registerImage from "./lazy.js"


class Images{
    constructor({ imgContainer, accountantContainer}){
        this.i = 0 
        this.imgContainer = imgContainer
        this.accountantContainer = accountantContainer
    }

    removeImage = () => {
        const imgToRemove = document.querySelectorAll("#images img")[0]
        if(imgToRemove !== undefined){
            this.imgContainer.removeChild(imgToRemove)
        }
        this.accountant(-1)
    }

    crateRandomImage = () => { 
        let numImg = Random(1, 123)  
        let img = document.createElement('img')
        img.dataset.src = `https://randomfox.ca/images/${numImg}.jpg`
        img.className ="img-random"
    
        this.imgContainer.appendChild(img)

        registerImage(img)
    
        this.accountant(1)
    }

    accountant = (num) => {
        if(this.i >= 0){
            this.i += num
        }else{
            this.i = 0
        }
        this.accountantContainer.innerText = this.i
    }
}

export default Images