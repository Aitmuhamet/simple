let navbarToggler = document.querySelector('.navbar-toggler')
let siteHeaderNavLower = document.querySelector('.site-header__navbar_lower')
let siteHeaderNavLstFirst = document.querySelector('.site-header__nav-list_first')
let siteHeaderNavSecnd = document.querySelector('.site-header__nav-second')
let searchContainerButton = document.querySelectorAll('.search-container__search')
let siteHeaderNavPosition = document.querySelector('.site-header__nav-position')

let headerLogos = document.querySelectorAll('.site-heaer__logo')
let headerLogoDiv = document.querySelectorAll('.site-header__logo div')

let navToggler = document.querySelector('.navbar-toggler')
let searchContainers = document.querySelectorAll('.search-container')

const screenWidth = document.documentElement.clientWidth;

// всплытие меню при скроле наверх при ширине экрана менее 992px
let pagePosition = window.scrollY;
window.addEventListener('scroll', function(){
    if (pagePosition > window.scrollY) {
        siteHeaderNavPosition.classList.add('site-header__nav-position-fixed')
        siteHeaderNavPosition.style.transition = 'top 400ms'
        siteHeaderNavPosition.style.top = '51px'
    } else {
        siteHeaderNavPosition.classList.remove('site-header__nav-position-fixed')
        siteHeaderNavPosition.style.transition = 'top 400ms'
        siteHeaderNavPosition.style.top = '0px'
    }
    pagePosition = window.scrollY;
})

// Раскрывающееся меню
navToggler.addEventListener('click', function () {
    if (screenWidth < 976) {
        if (navToggler.classList.contains('open')) {
            navToggler.classList.remove('open')
            siteHeaderNavLower.classList.remove('site-header__navbar_open')
            searchContainers.forEach((item) => {
                if (item.getAttribute('data-numb-container') == '2') {
                    console.log(item.getAttribute('data-numb-container'));
                    item.classList.add('d-flex', 'd-sm-none')
                    item.classList.remove('d-none')
                }
            })
            siteHeaderNavLower.style.position = 'static'
        } else {
            navToggler.classList.add('open')
            siteHeaderNavLower.classList.add('site-header__navbar_open')
            searchContainers.forEach((item) => {
                console.log(item.getAttribute('data-numb-container'));
                if (item.getAttribute('data-numb-container') == '2') {
                    item.classList.remove('d-flex', 'd-sm-none')
                    item.classList.add('d-none')
                }
            })
            siteHeaderNavLower.style.position = 'fixed'
            siteHeaderNavLower.style.top = '50px'
        }
    }
})

// Анимация Logo
class SiteLogo {
    constructor(el) {
        this.logo = el.logo
        this.numbLogo = el.numbLogo
        this.logoElems = this.logo.querySelectorAll('.logo-element')
        let elemNumb = "";

        this.logoElems.forEach((elem, key) => {
            setTimeout(() => {
                elem.addEventListener('mouseover', () => {
                    clearInterval(startLogoDef);
                    if (key != 1) {
                        elem.style.width = '32px'
                        elemNumb = key;
                        this.logoElems.forEach((elem, key) => {
                            if (key != elemNumb && key != 1) {
                                elem.style.width = '17px'
                            }
                        })
                    }
                });
            }, 500);
        })

        this.logoElems.forEach((elem) => {
            elem.addEventListener('mouseout', () => {
                startLogoDef = setInterval(() =>{
                    this.logoElems.forEach((elem, key) => {
                        if (key == 0 || key == 3) {
                            elem.style.width = '17px';
                        } else if (key == 2) {
                            elem.style.width = '32px';
                        }
                    })
                }, 5000);
            })
        })
        
        let startLogoDef = setInterval(() =>{
            this.logoElems.forEach((elem, key) => {
                if (key == 0 || key == 3) {
                    elem.style.width = '17px';
                } else if (key == 2) {
                    elem.style.width = '32px';
                }
            })
        }, 5000);
    }
}

const siteLogos = document.querySelectorAll('.site-logo')
siteLogos.forEach((item, key) => {
    const numberLogo = item.getAttribute('data-numb-logo')
    new SiteLogo({
        logo: item,
        numbLogo: numberLogo, 
    })
})



// Навигационная панель
class SiteHeaderNav {
    constructor(el) {
        this.headerNav = el.nav

        let buttonSearch = this.headerNav.querySelector('.search-container__search')
        let input = this.headerNav.querySelector('.search-container__input')
        let buttonCross = this.headerNav.querySelector('.search-container__cross')
        let navList = this.headerNav.querySelector('.site-header__nav-list')

        let logIn = this.headerNav.querySelector('.log-in')
        let searchContainer = this.headerNav.querySelector('.search-container')

        buttonSearch.addEventListener('click', function () {
            const screenWidth = document.documentElement.clientWidth
            if (screenWidth > 991) {
                if (buttonSearch.classList.contains('open')) {
                    closeSearchInput(buttonSearch, input, buttonCross);
                    siteHeaderNavLstFirst.style.display = 'flex'
                } else {
                    openSearchInput(buttonSearch, input, buttonCross);
                    siteHeaderNavLstFirst.style.display = 'none'
                }
            } else if (screenWidth < 575) {
                if (buttonSearch.classList.contains('open')) {
                    closeSearchInput(buttonSearch, input, buttonCross);
                    navList.classList.add('d-flex')
                    navList.classList.remove('d-none')
                    navToggler.classList.add('d-flex')
                    navToggler.classList.remove('d-none')
                    logIn.classList.add('d-flex')
                    logIn.classList.remove('d-none')
                    searchContainer.classList.remove('me-auto', 'ms-auto')
                } else {
                    openSearchInput(buttonSearch, input, buttonCross);
                    navList.classList.add('d-none')
                    navList.classList.remove('d-flex')
                    navToggler.classList.add('d-none')
                    navToggler.classList.remove('d-flex')
                    logIn.classList.add('d-none')
                    logIn.classList.remove('d-flex')
                    searchContainer.classList.add('me-auto', 'ms-auto')
                }
            } else {
                if (buttonSearch.classList.contains('open')) {
                    closeSearchInput(buttonSearch, input, buttonCross);
                } else {
                    openSearchInput(buttonSearch, input, buttonCross);
                }
            }
        })

        // document.addEventListener('click', function(e) {
        //     const target = e.target;
        //     const its_serchContainer = target == searchContainer || searchContainer.contains(target);
        //     const its_buttonSearch = target == buttonSearch;
        //     const button_is_active = buttonSearch.classList.contains('open');

        //     if (its_serchContainer && its_buttonSearch && button_is_active) {
        //         console.log('La-la-ley');
        //     }
        // })

        if (navToggler) {

        }
    }
}

const siteHeaderNavs = document.querySelectorAll('.site-header__nav')
siteHeaderNavs.forEach((item, key) => {
    new SiteHeaderNav({
        nav: item,
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
        siteHeaderNavLstFirst.style.display = 'none'
    } else {
        siteHeaderNavLstFirst.style.display = 'flex'
    }

    if (screenWidth > 991.9) {
        navbarToggler.classList.remove('d-flex')
    }
}
window.addEventListener('resize', onResize)
