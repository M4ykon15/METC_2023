$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});
$('#').on('shown.bs.modal', function () {
  $('#').trigger('focus')
})
$(".modal-backdrop").css("display","none");
const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))


function exibirRacas() {
  var especieSelecionada = document.getElementById("especie").value;
  var racaSelect = document.getElementById("raca");

  // Limpar as opções existentes
  racaSelect.innerHTML = "";

  // Adicionar as opções de raças de acordo com a espécie selecionada
  if (especieSelecionada === "cachorro") {
    var racasCachorro = ["Labrador Retriever",
      "Pastor Alemão",
     "Bulldog Francês",
      "Golden Retriever",
      "Beagle",
      "Poodle",
      "Boxer",
      "Rottweiler",
      "Yorkshire Terrier",
      "Dachshund (Teckel)",
      "Border Collie",
      "Schnauzer",
      "Chihuahua",
      "Bichon Frisé",
      "Husky Siberiano",
      "Doberman Pinscher",
      "Shih Tzu",
      "Cavalier King Charles Spaniel",
      "Bulldog Inglês",
      "Maltese",
      "Pug",
      "Staffordshire Bull Terrier",
      "Great Dane",
      "Cocker Spaniel",
      "Australian Shepherd",
      "Bernese Mountain Dog",
      "Boston Terrier",
      "West Highland White Terrier",
      "Scottish Terrier",
      "Newfoundland",
    "Outro" ]; // Exemplo de raças de cachorros

    for (var i = 0; i < racasCachorro.length; i++) {
      var option = document.createElement("option");
      option.text = racasCachorro[i];
      racaSelect.add(option);
    }
  } else if (especieSelecionada === "gato") {
    var racasGato = ["Siamês",
      "Persa",
      "Maine Coon",
      "Ragdoll",
      "Bengal",
      "British Shorthair",
      "Sphynx",
      "Exotic Shorthair",
      "Abissínio",
      "Scottish Fold (Dobra Escocesa)",
     " Siamese Oriental (Oriental de Pelo Curto)",
     " Birmanês",
     " Himalaio",
      "Devon Rex",
      "Azul Russo",
      "Savannah",
     " Tonquinês",
      "Maine Coon",
    "Outro"]; // Exemplo de raças de gatos

    for (var i = 0; i < racasGato.length; i++) {
      var option = document.createElement("option");
      option.text = racasGato[i];
      racaSelect.add(option);
    }
  }
}
