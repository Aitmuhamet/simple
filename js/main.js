let navbarToggler = document.querySelector('.navbar-toggler')
let siteHeaderNavLower = document.querySelector('.site-header__navbar_lower')
let siteHeaderNavLstFirst = document.querySelector('.site-header__nav-list_first')
let siteHeaderNavSecnd = document.querySelector('.site-header__nav-second')
let searchContainerButton = document.querySelectorAll('.search-container__search')

navbarToggler.addEventListener('click', function(){
    if (navbarToggler.classList.contains('open')){
        navbarToggler.classList.remove('open')
        siteHeaderNavLower.classList.remove('site-header__navbar_open')
    } else {
        navbarToggler.classList.add('open')
        siteHeaderNavLower.classList.add('site-header__navbar_open')
    }
})

class SearchContainer {
    constructor(el){
        // super();
        this.srchContainerMain = el.searchC

        let buttonSearch = this.srchContainerMain.querySelector('.search-container__search')
        let input = this.srchContainerMain.querySelector('.search-container__input')
        let buttonCross = this.srchContainerMain.querySelector('.search-container__cross')
        
        buttonSearch.addEventListener('click', function(){
            
            const screenWidth = document.documentElement.clientWidth
            if (screenWidth > 991) {
                if (buttonSearch.classList.contains('open')){
                    closeSearchInput(buttonSearch, input, buttonCross);
                    siteHeaderNavSecnd.style.display = 'none'
                    siteHeaderNavLstFirst.style.display = 'flex'
                } else {
                    openSearchInput(buttonSearch, input, buttonCross);
                    siteHeaderNavSecnd.style.display = 'flex'
                    siteHeaderNavLstFirst.style.display = 'none'
                }
            } else {
                if (buttonSearch.classList.contains('open')){
                    closeSearchInput(buttonSearch, input, buttonCross);
                } else {
                    openSearchInput(buttonSearch, input, buttonCross);
                    console.log(buttonSearch);
                }
            }
        })
    }

    
}

const searchContainers = document.querySelectorAll('.search-container')
searchContainers.forEach((item, key) => {
    const numb = item.getAttribute('data-numb-container')
    new SearchContainer({
        searchC: item,
        numbContr: numb
    })
})



function openSearchInput(buttonS, input, buttonCr) {
    buttonS.classList.add('open')
    buttonCr.classList.remove('search-container__cross_disable')
    input.classList.remove('search-container__input_disable')
    input.style.transition = 'all 2s'
}
function closeSearchInput(buttonS, input, buttonCr) {
    buttonS.classList.remove('open')
    buttonCr.classList.add('search-container__cross_disable')
    input.classList.add('search-container__input_disable')
    input.style.transition = 'all 2s'
}
function onResize() {
    const screenWidth = document.documentElement.clientWidth
    let buttonSearchContainer = searchContainerButton[0]
    
    if (screenWidth < 991 || (screenWidth > 991 && buttonSearchContainer.classList.contains('open'))) {
        siteHeaderNavSecnd.style.display = 'flex'
        siteHeaderNavLstFirst.style.display = 'none'
    } else {
        siteHeaderNavSecnd.style.display = 'none'
        siteHeaderNavLstFirst.style.display = 'flex'
    }
}
window.addEventListener('resize', onResize)