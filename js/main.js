let navbarToggler = document.querySelector('.navbar-toggler')
let siteHeaderNavLower = document.querySelector('.site-header__navbar_lower')
let searchContainerButton = document.querySelector('.search-container__search')
let searchContainerInput = document.querySelector('.search-container__input')

navbarToggler.addEventListener('click', function(){
    if (navbarToggler.classList.contains('open')){
        navbarToggler.classList.remove('open')
        siteHeaderNavLower.classList.remove('site-header__navbar_open')
    } else {
        navbarToggler.classList.add('open')
        siteHeaderNavLower.classList.add('site-header__navbar_open')
    }
})

searchContainerButton.addEventListener('click', function(){
    if (searchContainerButton.classList.contains('open')){
        searchContainerButton.classList.remove('open')
        searchContainerInput.classList.add('search-container__input_disable')
        searchContainerInput.style.transition = 'all 2s'
    } else {
        searchContainerButton.classList.add('open')
        searchContainerInput.classList.remove('search-container__input_disable')
        searchContainerInput.style.transition = 'all 2s'
    }
})