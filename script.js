// ==========================
// FETA Fashion Main Script
// ==========================


// Loading Screen

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.style.display="none";

},800);

}

});





// ==========================
// Cart System
// ==========================


let cart =
JSON.parse(localStorage.getItem("fetaCart")) || [];



function addToCart(product){


cart.push(product);


localStorage.setItem(
"fetaCart",
JSON.stringify(cart)
);


updateCartCount();


alert(product+" added to your cart 🛒");


}




function updateCartCount(){


let cartIcons=document.querySelectorAll(".cart-count");


cartIcons.forEach(icon=>{

icon.innerHTML=cart.length;

});


}



updateCartCount();







// ==========================
// Wishlist System
// ==========================


let wishlist =
JSON.parse(localStorage.getItem("fetaWishlist")) || [];




function addToWishlist(product){


wishlist.push(product);


localStorage.setItem(
"fetaWishlist",
JSON.stringify(wishlist)
);



updateWishlistCount();



alert(product+" added to wishlist ❤️");

}





function updateWishlistCount(){


let icons=document.querySelectorAll(".wishlist-count");


icons.forEach(icon=>{

icon.innerHTML=wishlist.length;

});


}



updateWishlistCount();






// ==========================
// Search
// ==========================


function openSearch(){


let search=
prompt("Search FETA Fashion Collection:");



if(search){


alert(
"We will search for: "+search
);


}


}






// ==========================
// Newsletter
// ==========================


let newsletterForm=
document.querySelector(".newsletter form");



if(newsletterForm){


newsletterForm.addEventListener(
"submit",
function(e){


e.preventDefault();



alert(
"Thank you for joining FETA Fashion ❤️"
);



}

);


}








// ==========================
// Contact Form
// ==========================


let contactForm=
document.querySelector(".contact-form form");



if(contactForm){


contactForm.addEventListener(
"submit",
function(e){


e.preventDefault();


alert(
"Thank you! FETA Fashion will contact you soon."
);



}

);


}







// ==========================
// Scroll Animation
// ==========================



const sections =
document.querySelectorAll(
"section"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";


entry.target.style.transform=
"translateY(0)";


}



});


},
{
threshold:.15
}

);




sections.forEach(section=>{


section.style.opacity="0";

section.style.transform=
"translateY(40px)";


section.style.transition=
"0.8s ease";



observer.observe(section);


});






console.log(
"FETA Fashion Website Loaded Successfully 🚀"
);
