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

  // Effacer les données du localStorage après les avoir affichées
  localStorage.removeItem("clientData");

  // Supprimer les données lorsque le bouton est cliqué
  var supprimerButton = document.getElementById("supprimer");
  supprimerButton.addEventListener("click", function () {
    document.getElementById("affichage").innerHTML = "";
    // Efface le contenu de l'élément avec l'ID 'affichage'
  });

  // Modifier les données lorsque le bouton de modification est cliqué
  var modifierButton = document.getElementById("modifier");
  modifierButton.addEventListener("click", function () {
    var newClientData = prompt(
      "Veuillez entrer les nouvelles données du client :"
    );
    if (newClientData) {
      document.getElementById("affichage").innerHTML = newClientData;
      localStorage.setItem("clientData", newClientData);
      // Demande à l'utilisateur de saisir de nouvelles données client,
      // les affiche et les enregistre dans le localStorage
    }
  });
});
