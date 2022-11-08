// adaptive 
const headerIcons = document.querySelector(".header__icons")
const navList = document.querySelector(".nav__list")
const headerNumber = document.querySelector(".header__number")
const navContacts = document.querySelector(".nav__contacts")
const bannerBgBtn = document.querySelector(".banner-bg__btn")
const bannerBgContent = document.querySelector(".banner-bg__content")


function adaptiveChange768 () {
    try {
        if (window.innerWidth <= 768) {
            navList.prepend(headerIcons)
            navContacts.append(headerNumber)
            bannerBgContent.appendChild(bannerBgBtn)
        }
    } catch(e) {
        console.log(e);
    }
}

adaptiveChange768()


//burger
const menu = document.querySelector(".header__nav")
const burger = document.querySelector(".burger")
const closeMenuBtn = document.querySelector(".close")

function showMenu () {
    burger.addEventListener("click", () => {
        menu.classList.toggle("show-menu")
    })
}

showMenu()

function closeMenu () {
    closeMenuBtn.addEventListener("click", () => {
        menu.classList.remove("show-menu")
    })
}

closeMenu()


// kits slider

const kitsPaginationTitles = ["TREASURE", "Новый мир", "Здоровье тела", "Detox"]


const kitsSwiper = new Swiper(".kits__slider", {
    loop: true,
    pagination: {
        el: ".kits__slider-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (kitsPaginationTitles[index]) + '</span>';
        }
    },
    navigation: {
        nextEl: '.kits__slider-button-next',
      },
});


const bestSwiper = new Swiper(".best__slider", {
    loop: true,
    pagination: {
        el: ".best__slider-pagination",
        clickable: true,
        type: "fraction",
    },
    navigation: {
        nextEl: '.best__slider-button-next',
      },
});

//reviews slider
const reviewsSwiper = new Swiper(".reviews__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".reviews__slider-pagunation",
      clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    }
  });

  //dropdown

  function showDropdown() {
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-dropdown")) {
            e.target.nextElementSibling.classList.toggle("show-dropdown")
        } else {
            document.querySelectorAll(".show-dropdown").forEach((item) => {
                item.classList.remove("show-dropdown")
            })
        }
    })
  }

  showDropdown()

  //dropdown content

  const dropdownList = document.querySelectorAll(".dropdown__list")

  function dropdownValue () {
     dropdownList.forEach((item) => {
        item.addEventListener("click", (e) => {
            item.closest(".dropdown").firstElementChild.innerHTML = e.target.innerHTML;
        })
     })
  }

  dropdownValue()


  //more products

  const products = document.querySelectorAll(".catalog-card")
  const btnMoreProducts = document.querySelector(".btn-more")
  let limit = 6
  let total = 1; 

  function totalProducts () {
    products.forEach((item) => {
        if (total  <= limit) {
            if (!item.classList.contains("show-card")) {
                item.classList.add("show-card")
                total += 1
            }        
        }
    })
    return total
  }

  totalProducts()


  function moreProducts () {
    try {
        btnMoreProducts.addEventListener("click", (e) => {
            if (products.length < totalProducts()) {
                e.stopPropagation()
            } else {
                limit += 3
            }
        })
    } catch (e) {
        console.log(e);
    }
  }

  moreProducts()


  //accordion

  const btnsAccordion = document.querySelectorAll(".accordion")
  
  function showItemAccordion() {
    btnsAccordion.forEach((item) => {
        item.addEventListener("click", (e) => {
            console.log(e);
            e.target.closest(".accordion__item").classList.toggle("active-accordion")
            e.target.classList.toggle("active-accordion__btn")
        })
    })
  }

  showItemAccordion()