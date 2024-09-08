const header= document.querySelector('header')
const backArrow=document.querySelector('#right-arrow')
const nav= document.querySelector('#nav-2')
const button= document.querySelector('#button')

// hamburgerMenu.addEventListener('click',()=>{
//     header.classList.toggle('open-menu')
// })

button.addEventListener('click',()=>{
 header.classList.add('open-menu')
})
button.addEventListener('click',(e)=>{
    e.stopPropagation()
 nav.classList.remove('translate-x-[200px]');
})
backArrow.addEventListener('click',()=>{
    nav.classList.add('translate-x-[200px]');
})
backArrow.addEventListener('click',()=>{
    header.classList.remove('open-menu');
})
window.addEventListener('click',()=>{
    nav.classList.add('translate-x-[200px]')
    header.classList.remove('open-menu')
})
