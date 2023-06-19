document.getElementById('ajoutForm').addEventListener('submit', function(e) {
    // Écouteur d'événement sur la soumission du formulaire avec l'identifiant 'ajoutForm'
    e.preventDefault(); // Empêche le comportement par défaut du formulaire
  
    // Récupération des valeurs des champs du formulaire
    var entreprise = document.getElementById('entreprise').value;
    var date = document.getElementById('date').value;
    var description = document.getElementById('description').value;
  
    // Construction des données du client
    var clientData = '<h2>' + entreprise + '</h2>' +
                     '<p>Date de passage : ' + date + '</p>' +
                     '<p>Description : ' + description + '</p>';
  
    // Envoi des données à la page d'affichage via localStorage
    localStorage.setItem('clientData', clientData);
  
    // Redirection vers la page d'affichage
    window.location.href = 'affichage.html';
  });
  
