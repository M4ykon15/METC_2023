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

 // Função para aplicar os filtros
 function applyFilters() {
  const species = document.getElementById('species-filter').value;
  const gender = document.getElementById('gender-filter').value;
  const size = document.getElementById('size-filter').value;
  const breed = document.getElementById('breed-filter').value;

  const animals = document.getElementsByClassName('animal');

  for (let i = 0; i < animals.length; i++) {
      const animal = animals[i];

      const speciesMatch = !species || animal.getAttribute('data-species') === species;
      const genderMatch = !gender || animal.getAttribute('data-gender') === gender;
      const sizeMatch = !size || animal.getAttribute('data-size') === size;
      const breedMatch = !breed || animal.getAttribute('data-breed') === breed;

      if (speciesMatch && genderMatch && sizeMatch && breedMatch) {
          animal.style.display = 'block';
      } else {
          animal.style.display = 'none';
      }
  }
}

// Event listeners para acionar a função applyFilters() quando os filtros são alterados
document.getElementById('species-filter').addEventListener('change', applyFilters);
document.getElementById('gender-filter').addEventListener('change', applyFilters);
document.getElementById('size-filter').addEventListener('change', applyFilters);
document.getElementById('breed-filter').addEventListener('change', applyFilters);
