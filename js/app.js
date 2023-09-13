let open = document.querySelector('.open')
let close = document.querySelector('.close')
let nav = document.querySelector('.nav')


open.addEventListener('click' , function(){
    nav.style.display = 'block'
    close.style.display = 'block'
    open.style.display = 'none'
})

close.addEventListener('click' , function(){
    nav.style.display = 'none'
    close.style.display = 'none'
    open.style.display = 'block'
})