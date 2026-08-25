/*
===========================================================
    BIOROOT - script.js

    Author: Luvuyo Cetywayo

    Description:
    Main JavaScript file for the BIOROOT website.

    This file provides:
    ✔ Animated statistics counter
    ✔ Smooth scrolling
    ✔ Active navigation highlighting
    ✔ Login form validation
    ✔ Welcome message
    ✔ Scroll-to-top button
    ✔ Future reusable functions

===========================================================
*/


/*=========================================================
    WELCOME MESSAGE
    Runs once the webpage has finished loading.
=========================================================*/

window.addEventListener("load", function () {

    console.log("Welcome to BIOROOT!");

});


/*=========================================================
    SMOOTH SCROLLING
    Smoothly scrolls to sections on the page.
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


/*=========================================================
    ACTIVE NAVIGATION LINK
    Highlights the current page in the navigation bar.
=========================================================*/

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    const fileName = link.getAttribute("href");

    if (fileName === currentPage) {

        link.classList.add("active");

    }

});


/*=========================================================
    ANIMATED IMPACT COUNTERS
    Used on Homepage.

    Counts numbers upwards until they reach
    their target value.
=========================================================*/

const counters = document.querySelectorAll(".stat h3");

counters.forEach(counter => {

    const originalText = counter.innerText;

    const target = parseInt(originalText.replace(/\D/g, ""));

    if (!target) return;

    let current = 0;

    const increment = Math.ceil(target / 100);

    function updateCounter() {

        current += increment;

        if (current >= target) {

            counter.innerText = originalText;

        }

        else {

            if (originalText.includes("+")) {

                counter.innerText = current + "+";

            }

            else {

                counter.innerText = current;

            }

            requestAnimationFrame(updateCounter);

        }

    }

    updateCounter();

});


/*=========================================================
    LOGIN FORM VALIDATION

    Checks:

    • Email is entered
    • Password is entered
    • Password length

=========================================================*/

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value.trim();

        if (email === "") {

            alert("Please enter your email address.");

            return;

        }

        if (password === "") {

            alert("Please enter your password.");

            return;

        }

        if (password.length < 6) {

            alert("Password must contain at least 6 characters.");

            return;

        }

        alert("Login Successful!");

        loginForm.reset();

    });

}


/*=========================================================
    SCROLL TO TOP BUTTON
=========================================================*/

const scrollButton = document.createElement("button");

scrollButton.innerHTML = "↑";

scrollButton.id = "topButton";

document.body.appendChild(scrollButton);


/*=========================================================
    BUTTON STYLING
=========================================================*/

scrollButton.style.position = "fixed";
scrollButton.style.bottom = "25px";
scrollButton.style.right = "25px";
scrollButton.style.width = "50px";
scrollButton.style.height = "50px";
scrollButton.style.borderRadius = "50%";
scrollButton.style.border = "none";
scrollButton.style.background = "#2E8B57";
scrollButton.style.color = "white";
scrollButton.style.fontSize = "22px";
scrollButton.style.cursor = "pointer";
scrollButton.style.display = "none";
scrollButton.style.boxShadow = "0 5px 15px rgba(0,0,0,0.25)";
scrollButton.style.zIndex = "999";


/*=========================================================
    SHOW BUTTON WHEN USER SCROLLS
=========================================================*/

window.addEventListener("scroll", function () {

    if (window.scrollY > 250) {

        scrollButton.style.display = "block";

    }

    else {

        scrollButton.style.display = "none";

    }

});


/*=========================================================
    SCROLL BACK TO TOP
=========================================================*/

scrollButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================================
    BUTTON HOVER EFFECTS
=========================================================*/

scrollButton.addEventListener("mouseenter", function () {

    scrollButton.style.background = "#256d45";

});

scrollButton.addEventListener("mouseleave", function () {

    scrollButton.style.background = "#2E8B57";

});


/*=========================================================
    IMAGE HOVER ANIMATION

    Adds a slight zoom effect to all images.
=========================================================*/

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("mouseenter", function () {

        image.style.transition = "0.3s";

        image.style.transform = "scale(1.03)";

    });

    image.addEventListener("mouseleave", function () {

        image.style.transform = "scale(1)";

    });

});


/*=========================================================
    CARD HOVER SHADOW

    Adds a stronger shadow when hovering over cards.
=========================================================*/

const cards = document.querySelectorAll(".card, .category, .product");

cards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        card.style.boxShadow = "0 15px 35px rgba(0,0,0,0.20)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.10)";

    });

});


/*=========================================================
    FUTURE FEATURES

    Placeholder functions that can be expanded later.
=========================================================*/

// Donation System
function donate() {

    alert("Donation system coming soon!");

}

// Shopping Cart
function addToCart(itemName) {

    alert(itemName + " added to cart!");

}

// Newsletter
function subscribeNewsletter() {

    alert("Thank you for subscribing to BIOROOT!");

}

// Charity Search
function searchCharity() {

    console.log("Search feature coming soon.");

}


/*=========================================================
    END OF FILE

    Total Features Included:

    ✔ Smooth scrolling
    ✔ Animated counters
    ✔ Active navigation
    ✔ Login validation
    ✔ Image animations
    ✔ Card animations
    ✔ Scroll-to-top button
    ✔ Placeholder shopping cart
    ✔ Donation placeholder
    ✔ Newsletter placeholder

=========================================================*/