
let filters = document.querySelectorAll("ul li input");

filters.forEach(  filter =>{
    filter.addEventListener('input', function(){
        img.style.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px)
            hue-rotate(${hue-rotate.value}deg)
        `
    })
}  )
