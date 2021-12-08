const isIntersecting = (entry) =>{
    return entry.isIntersecting
}

const action = (entry) =>{
    const nodo = entry.target
    console.log("Toy visible uwu");

    observer.unobserve(nodo)
}

const observer = new IntersectionObserver((entries) =>{
    entries.filter(isIntersecting).forEach(action)
})

const registerImage = (img) => {
    observer.observe(img)
}

export default registerImage