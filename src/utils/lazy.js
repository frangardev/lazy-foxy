const downloadAccountant = document.getElementById("download")
let iDownload = 0

const isIntersecting = (entry) =>{
    return entry.isIntersecting
}

const action = (entry) =>{
    const nodeImage = entry.target
    const url = nodeImage.dataset.src
    nodeImage.src = url
    observer.unobserve(nodeImage)

    iDownload += 1
    downloadAccountant.innerText = iDownload
}

const observer = new IntersectionObserver((entries) =>{
    entries.filter(isIntersecting).forEach(action)
})

const registerImage = (img) => {
    observer.observe(img)
}

export default registerImage
