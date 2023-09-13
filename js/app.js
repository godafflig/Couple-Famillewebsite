document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("saveForm");
    const menuContainer = document.querySelector(".menu-container");

    menuButton.addEventListener("click", () => {
        
        menuContainer.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("saveForm");
    const menuContainer = document.querySelector(".nav_list");
    const imageElement = menuButton;

    menuButton.addEventListener("click", () => {
        menuContainer.classList.toggle("active");

        // Vérifiez l'attribut src actuel pour déterminer quelle image afficher
        if (imageElement.getAttribute("src") === "/Image/menu.png") {
            // Changez l'image au clic
            imageElement.setAttribute("src", "/Image/autre_image.png");
        } else {
            // Revert to the original image if it's already changed
            imageElement.setAttribute("src", "/Image/menu.png");
        }
       
    });
});