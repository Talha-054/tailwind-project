//  Accessing DOM Elements

let hero_img = document.getElementById("hero-image");
let settings = document.getElementById("setting-icon");
let logo = document.getElementById("mahabis-logo");
let mobileOptions = document.getElementById("search-cart")
let body = document.getElementById("body");
let mobileSettings = document.getElementById("mobile-settings");
let closeButton = document.getElementById("cancel-button");
let heroText = document.getElementById("hero-text");
let pcOptions = document.getElementById("large-screen-options");
let cart = document.getElementById("cart");
let cart2 = document.getElementById("cart2");
let cartMenu = document.getElementById("cart-menu");
let closeCart = document.getElementById("close-cart");
let men = document.getElementById("men-dropdown");
let women = document.getElementById("women-dropdown");
let aboutUs = document.getElementById("about-dropdown");
let help = document.getElementById("help-dropdown");
let closeDropdown = document.getElementById("close-dropdown");
let dropdown = document.getElementById("dropdown");
let loginPage = document.getElementById("login-page");
let userButton = document.getElementById("user-icon");
let signUpButton = document.getElementById("sign-button");
let closeLogin = document.getElementById("close-login-page");
let searchPage = document.getElementById("search-page");
let closeSearch = document.getElementById("close-search-page");
let searchButton = document.getElementById("search");
let searchButton2 = document.getElementById("search2");

let screenWidth = window.innerWidth;
let x;
let y;





//  Flags for conditional rendering

let isCartActive;






//  Functions which will run on firt render

function navBar (){
    if(screenWidth <= 800){
        pcOptions.style.display = "none";
        settings.style.display = "";
        mobileOptions.style.display = "";
        
        console.log("reached")
    }else if (screenWidth > 800 ){
        settings.style.display = "none";
        mobileOptions.style.display = "none";
        pcOptions.style.display = "";
        console.log("reached")
    }
}



function heroImage (){

    if(screenWidth <= 1224){
        hero_img.attributes.src.nodeValue = "https://cdn.shopify.com/s/files/1/0238/5795/files/homepage_banners_mobile_11.jpg?v=1717412349";
    }else {
        hero_img.attributes.src.nodeValue = "https://cdn.shopify.com/s/files/1/0238/5795/files/homepage_desktop_banner_30_e4eafe8a-24ce-452a-8912-bbd39705c5e1.jpg?v=1717412349";
    }
}









// Event Listeners

settings.addEventListener("click", ()=>{
    body.style.visibility = "hidden";
    mobileSettings.classList.remove("hidden")
})


closeButton.addEventListener("click", ()=>{
    mobileSettings.classList.add("hidden");
    body.style.visibility = "visible";
})


cart.addEventListener("click", ()=>{
    isCartActive = true;
    console.log("cart active");
    cartMenu.classList.add("right-0");
})


cart2.addEventListener("click", ()=>{
    isCartActive = true;
    console.log("cart active");
    cartMenu.classList.add("right-0");
})


closeCart.addEventListener("click", ()=>{
    isCartActive = false;
    console.log("cart inactive");
    cartMenu.classList.remove("right-0")
})



// Navbar dropdowns 


men.addEventListener("click", (e)=>{
    x = e.clientX;
    y = e.clientY;
    dropdown.classList.remove("hidden");
    dropdown.style.top = (y+20) + 'px';
    dropdown.style.left = x + 'px';
    console.log(x,y)
})


women.addEventListener("click", (e)=>{
    x = e.clientX;
    y = e.clientY;
    dropdown.classList.remove("hidden");
    dropdown.style.top = (y+20) + 'px';
    dropdown.style.left = x + 'px';
    console.log(x,y)
})


help.addEventListener("click", (e)=>{
    x = e.clientX;
    y = e.clientY;
    dropdown.classList.remove("hidden");
    dropdown.style.top = (y+20) + 'px';
    dropdown.style.left = x + 'px';
    console.log(x,y)
})


aboutUs.addEventListener("click", (e)=>{
    x = e.clientX;
    y = e.clientY;
    dropdown.classList.remove("hidden");
    dropdown.style.top = (y+20) + 'px';
    dropdown.style.left = x + 'px';
    console.log(x,y)
})


closeDropdown.addEventListener("click", ()=>{
    dropdown.classList.add("hidden");
    dropdown.style.top = null;
    dropdown.style.left = null;
    x = 0;
    y = 0;
})




// login-page


userButton.addEventListener("click", ()=>{
    loginPage.classList.add("right-0")
})


signUpButton.addEventListener("click", ()=>{
    mobileSettings.classList.add("hidden");
    body.style.visibility = "visible";
    loginPage.classList.add("right-0");
})


closeLogin.addEventListener("click", ()=>{
    loginPage.classList.remove("right-0");
})




// search page

searchButton.addEventListener("click", ()=>{
    searchPage.classList.add("right-0")
})


searchButton2.addEventListener("click", ()=>{
    searchPage.classList.add("right-0")
})


closeSearch.addEventListener("click", ()=>{
    searchPage.classList.remove("right-0");
})









// adding listener for resize to adjust heroImage, navbar

window.addEventListener("resize", ()=>{
    screenWidth = window.innerWidth
    navBar();
    heroImage();
    console.log(screenWidth)
});








heroImage();
navBar();