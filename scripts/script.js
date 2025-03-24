document.getElementById("menu").addEventListener("click", function() {
    document.getElementById("nav-menu").classList.toggle("active");
    
});

document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    window.location.href = "Confirmation.html"; // Redirige vers la page
});