// FETA Fashion JavaScript


// Header shadow on scroll

window.addEventListener("scroll", function(){

    const header = document.querySelector(".header");


    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.15)";

    }else{

        header.style.boxShadow =
        "0 2px 15px rgba(0,0,0,0.08)";

    }

});




// Simple cart message

function addToCart(product){

    let cart =
    JSON.parse(localStorage.getItem("fetaCart")) || [];


    cart.push(product);


    localStorage.setItem(
        "fetaCart",
        JSON.stringify(cart)
    );


    alert(product + " added to cart 🛒");

}




// Simple wishlist message

function addToWishlist(product){


    let wishlist =
    JSON.parse(localStorage.getItem("fetaWishlist")) || [];


    wishlist.push(product);


    localStorage.setItem(
        "fetaWishlist",
        JSON.stringify(wishlist)
    );


    alert(product + " added to wishlist ❤️");


}





// Newsletter/contact ready function

console.log(
"FETA Fashion website ready 🚀"
);
