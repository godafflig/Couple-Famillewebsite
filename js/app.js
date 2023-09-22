// GERE AFFICHAGE DU MENU RESPONSIVE
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("saveForm");
    const menuContainer = document.querySelector(".menu-container");

    menuButton.addEventListener("click", () => {

        menuContainer.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // ... (code précédent)

    // Gestion du deuxième modal
    let btnmediatrice = document.getElementById("myBtn1")
    let btn2 = document.getElementById("myBtn2");
    let modal2 = document.getElementById("myModal2");
    let modal3 = document.getElementById("myModal3");
    let span2 = document.getElementsByClassName("close")[1]; // Utilisez l'index 1 pour le deuxième modal
    let span3 = document.getElementsByClassName("close")[2];
    btn2.onclick = function () {
        modal2.style.display = "block";
    }
    btnmediatrice.onclick = function () {
        modal3.style.display = "block";
    }

    span2.onclick = function () {
        modal2.style.display = "none";
    }
    span3.onclick = function () {
        console.log('test')
        modal3.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
    }

});

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("saveForm");
    const menuContainer = document.querySelector(".nav_list");
    const imageElement = menuButton;

    menuButton.addEventListener("click", () => {
        menuContainer.classList.toggle("active");

        // Vérifiez l'attribut src actuel pour déterminer quelle image afficher
        if (imageElement.getAttribute("src") === "/Couple-Famillewebsite/Image/menu.png") {
            // Changez l'image au clic
            imageElement.setAttribute("src", "/Couple-Famillewebsite/Image/autre_image.png");
        } else {
            // Revert to the original image if it's already changed
            imageElement.setAttribute("src", "/Couple-Famillewebsite/Image/menu.png");
        }

    });
});
let btnmediatrice = document.getElementById("myBtn1")
let btnrdv = document.getElementById("Rdv")
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

