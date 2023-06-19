window.addEventListener("DOMContentLoaded", function () {
  // Événement DOMContentLoaded pour s'assurer que le contenu de la page est chargé

  var clientData = localStorage.getItem("clientData");

  if (clientData) {
    // Vérifie si des données client sont présentes dans le localStorage

    var clientDiv = document.createElement("div");
    clientDiv.innerHTML = clientData;

    document.getElementById("affichage").appendChild(clientDiv);
    // Crée un élément div et ajoute les données client à l'intérieur
  }

  // Supprimer les données lorsque le bouton est cliqué
  var supprimerButton = document.getElementById("supprimer");
  supprimerButton.addEventListener("click", function () {
    document.getElementById("affichage").innerHTML = "";
    // Efface le contenu de l'élément avec l'ID 'affichage'
    localStorage.removeItem("clientData");
    // Supprime les données du localStorage
  });

  // Modifier les données lorsque le bouton de modification est cliqué
  var modifierButton = document.getElementById("modifier");
  modifierButton.addEventListener("click", function () {
    var entreprise = prompt("Veuillez entrer le nouveau nom de l'entreprise :");
    var date = prompt("Veuillez entrer la nouvelle date :");
    var description = prompt("Veuillez entrer la nouvelle description :");

    var clientData = 
    
                      '<h2>' + entreprise + '</h2>' +
                     '<p>Date de passage : ' + date + '</p>' +
                     '<p>Description : ' + description + '</p>';

    if (entreprise || date || description) {
      document.getElementById("affichage").innerHTML = clientData;
      localStorage.setItem("clientData", clientData);
      // Met à jour les données dans l'affichage et dans le localStorage
    }
  });
});
