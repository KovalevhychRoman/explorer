let navigation = document.querySelector('.navigation')
let burger = document.querySelector('.burger')
let body = document.body
burger.addEventListener('click', function(){
    navigation.classList.toggle('open')
    body.classList.toggle('hidden')
})