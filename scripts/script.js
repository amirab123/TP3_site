document.getElementById("menu").addEventListener("click", function() {
    document.getElementById("nav-menu").classList.toggle("active");
    
});

document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    window.location.href = "confirmation.html"; 

});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('Form');
    const inputs = form.querySelectorAll('input, select, textarea');
  
    form.addEventListener('submit', function(event) {
      let formulaireValide = true;
  
      inputs.forEach(function(input) {
        // On ignore les boutons et les checkboxes
        if (input.type === 'checkbox' || input.type === 'submit') return;
  
        if (input.hasAttribute('required')) {
          if (input.value.trim() === '') {
            input.style.borderColor = 'red';
            formulaireValide = false;
          } else {
            input.style.borderColor = 'green';
          }
        }
      });
  
      if (!formulaireValide) {
        event.preventDefault(); // Empêche l'envoi du formulaire si invalide
        alert('Veuillez remplir tous les champs obligatoires.');
      }
    });
  
    // Bonus : mettre à jour la couleur en direct quand l'utilisateur tape
    inputs.forEach(function(input) {
      input.addEventListener('input', function() {
        if (input.hasAttribute('required')) {
          if (input.value.trim() === '') {
            input.style.borderColor = 'red';
          } else {
            input.style.borderColor = 'green';
          }
        }
      });
    });
  });