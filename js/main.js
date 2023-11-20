let navbarToggler = document.querySelector('.navbar-toggler')
let siteHeaderNavLower = document.querySelector('.site-header__navbar_lower')
let siteHeaderNavLstFirst = document.querySelector('.site-header__nav-list_first')
let siteHeaderNavSecnd = document.querySelector('.site-header__nav-second')
let searchContainerButton = document.querySelectorAll('.search-container__search')

let headerLogo = document.querySelector('.site-heaer__logo')
let headerLogoDiv = document.querySelectorAll('.site-header__logo div')

let navToggler = document.querySelector('.navbar-toggler')
let searchContainers = document.querySelectorAll('.search-container')

const screenWidth = document.documentElement.clientWidth
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
console.log(navToggler);

// Анимация Logo
headerLogoDiv.forEach((item, key) => {
    let itemNumb = "";

    setTimeout(() => {
        item.addEventListener('mouseover', () => {
            clearInterval(startLogoDef);
            if (key != 1) {
                item.style.width = '32px'
                itemNumb = key;
                headerLogoDiv.forEach((item, key) => {
                    if (key != itemNumb && key != 1) {
                        item.style.width = '17px'
                    }
                })
            }
        });
    }, 500);
    let startLogoDef = setInterval(logoDefault, 5000);
})

function logoDefault() {
    headerLogoDiv.forEach((item, key) => {
        if (key == 0 || key == 3) {
            item.style.width = '17px'
        } else if (key == 2) {
            item.style.width = '32px'
        }
    })
}

setInterval(() => {
    startLogoDef = setInterval(logoDefault, 5000);
}, 5000);

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
