/* ========== SHOW SIDEBAR ========== */
const navMenu = document.getElementById('sidebar'),
 navToggle = document.getElementById('nav-toggle'),
 navClose = document.getElementById('nav-close')

/* ========== SIDEBAR SHOW ========== */
/* Validate If Constant Exists */
if(navToggle)
{
 navToggle.addEventListener("click", () =>
 {
   navMenu.classList.add('show-sidebar')
 })
}

/* ========== SIDEBAR HIDDEN ========== */
/* Validate If Constant Exists */
if(navClose)
{
 navClose.addEventListener("click", () =>
 {
   navMenu.classList.remove('show-sidebar')
 })
}


/* ========== SIDEBAR HIDDEN ========== */

/* ========== SKILL TABS ========== */
const tabs = document.querySelectorAll('[data-target]'),
 tabContent = document.querySelectorAll('[data-content]')
 tabs.forEach(tab => 
 {
   tab.addEventListener("click", () => 
   {
     const target = document.querySelector(tab.dataset.target)
     tabContent.forEach(tabContents => 
     {
       tabContents.classList.remove('skills-active')
      })
     target.classList.add('skills-active')

     tabs.forEach(tab => 
     {
       tab.classList.remove('skills-active')
      })
     tab.classList.add('skills-active')
    })
  })

/* ========== MIXIUP FILTER PORTFOLIO ========== */
let mixerPortfolio = mixitup('.work-container', 
{
 selectors: 
 {
   target: '.work-card'
  },
 animation: 
 {
   duration: 300
  }
});

/* Link Active Work */
const linkWork = document.querySelectorAll('.work-item')
function activeWork()
{
 linkWork.forEach(L => L.classList.remove('.active-work'))
 this.classList.add('.active-work')
}
linkWork.forEach(L => L.addEventListener("click", activeWork))

/* Work Popup */ 
document.addEventListener("click", (e) => 
{
 if(e.target.classList.contains("work-button"))
 {
   toggleportfoliopopup();
   portfolioitemdetail(e.target.parentElement);
 }
})
function toggleportfoliopopup()
{
 document.querySelector(".portfolio-popup").classList.toggle("open");
}
document.querySelector(".portfolio-popup-close").addEventListener("click", toggleportfoliopopup)
function portfolioitemdetail(portfolioitem)
{
 document.querySelector(".pp-thumbnail img").src = portfolioitem.querySelector(".work-img").src;
 document.querySelector(".portfolio-popup-subtitle span").innerHTML = portfolioitem.querySelector(".work-title").innerHTML;
 document.querySelector(".portfolio-popup-body").innerHTML = portfolioitem.querySelector(".portfolio-item-detail").innerHTML;
}

/* ========== SERVICES MODAL ========== */
const modalViews = document.querySelectorAll('.service-modal'),
 modelBtns  = document.querySelectorAll('.service-button'),
 modalCloses = document.querySelectorAll('.service-modal-close')

let modal = function(modalClick)
{
 modalViews[modalClick].classList.add('active-modal')
}
modelBtns.forEach((modelBtn, i) => 
{
 modelBtn.addEventListener('click', () => 
 {
   modal(i)
 })
})
modalCloses.forEach((modalClose) =>
{
 modalClose.addEventListener("click", () =>
 {
   modalViews.forEach((modalView) =>
   {
     modalView.classList.remove('active-modal')
   })
 })
})

/* ========== SWIPER TESTIMONIAL ========== */
let swiper = new Swiper(".testi-container", 
{
 spaceBetween: 24,
 loop: true,
 grabCursor: true,
 pagination: 
 {
   el: ".swiper-pagination",
   clickable: true,
  },

 breakpoints: 
 {
   576: 
   {
     slidesPerView: 2,
    },
   768:  
   {
     slidesPerView: 2,
     spaceBetween: 48,
    },
  },
});

/* ========== INPUT ANIMATION ========== */
const inputs = document.querySelectorAll(".input");
function focusFunc()
{
 let parent = this.parentNode;
 parent.classList.add("focus");
}
function blurFunc()
{
 let parent = this.parentNode;
 if(this.value == "")
 {
   parent.classList.remove("focus");
 }
}
inputs.forEach((input) =>
{
 input.addEventListener("focus", focusFunc);
 input.addEventListener("blur", blurFunc);
})

/* ========== SCROLL SECTION ACTIVE LINK ========== */
// get all sectionsthat have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener  listening for scroll
window.addEventListener("scroll", navHighlighter);
function navHighlighter()
{
  // get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => 
  {
   const sectionHeight =  current.offsetHeight;
   const sectionTop = current.offsetTop - 50,
   sectionId = current.getAttribute("id");
   /* - If our current scroll position enters the space where current section on screen is, add .active class to
   corresponding navigation link ,else remove it
   - To know which link needs an active class, we use sectionId variable we are getting while Looping through
   section as an selector */
   if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
   {
     document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
   }
   else
   {
     document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
   }
  })
}

/* ========== SHOW SCROLL UP ========== */
