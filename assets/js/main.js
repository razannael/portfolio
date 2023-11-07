const navbar = document.querySelector('.navbar')
const headercontentspan = document.querySelector('.header-content span')
const loading = document.querySelector('.loading')
const scrolltotopbtn = document.querySelector('.scroll-to-top')
const aboutsection = document.querySelector('.about')
const navlinks = document.querySelectorAll('.nav-link')
window.addEventListener('scroll', function(){
    if(window.scrollY > headercontentspan.offsetTop) {
        navbar.style.backgroundColor = "#fff"
    }
    else{
        navbar.style.backgroundColor = "transparent"
    }
    if(window.scrollY > aboutsection.offsetTop) {
        scrolltotopbtn.classList.remove('opacity-0','invisible')
    }
    else{
        scrolltotopbtn.classList.add('opacity-0','invisible')
    }
})
window.addEventListener('load', function(){
    setTimeout(function(){
      loading.classList.add('opacity-0', 'invisible')
      document.body.overflow = 'auto'
    }, 2000)
})

scrolltotopbtn.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:"smooth"

    })
})
for(let i=0; i<=navlinks.length; i++){
    navlinks[i].addEventListener('click',function(e){
     e.preventDefault()
    for(let j=0; j<=navlinks.length; j++){
        navlinks[i].classList.remove('active')
    }
    navlinks[i].classList.add('active')
    let currentid = this.getAttribute('href')
    let targetSection = document.querySelector(currentid)
    window.scroll({
        top: targetSection.offsetTop,
        behavior: "smooth"
    })
    })
}