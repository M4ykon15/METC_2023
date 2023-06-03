const editButtons = document.querySelectorAll('.edit-btn');
const deleteButtons = document.querySelectorAll('.delete-btn');

const pets = [
  {
    COD_PET: "001",
    COD_ADOT: "1001",
    SEXO: "Macho",
    ESPECIE: "Cachorro",
    RACA: "Poodle",
    IDADE: "3 anos",
    PORTE: "Pequeno",
    NOME_PET: "Max",
    CARACTERISTICAS: "Docíl, Vive bem em apartamento",
    ENDERECO: "Rua A, 123"
  },
  {
    COD_PET: "002",
    COD_ADOT: "1002",
    SEXO: "Fêmea",
    ESPECIE: "Gato",
    RACA: "Siamês",
    IDADE: "2 anos",
    PORTE: "Pequeno",
    NOME_PET: "Luna",
    CARACTERISTICAS: "Brincalhão, Sociável",
    ENDERECO: "Rua B, 456"
  },
  {
    COD_PET: "003",
    COD_ADOT: "1003",
    SEXO: "Macho",
    ESPECIE: "Cachorro",
    RACA: "Labrador",
    IDADE: "1 ano",
    PORTE: "Grande",
    NOME_PET: "Bobby",
    CARACTERISTICAS: "Calmo, Gosta de crianças",
    ENDERECO: "Rua C, 789"
  }
];

// Função para criar as linhas da tabela com os dados dos pets
function createPetRows() {
  const tableBody = document.createElement("tbody");
  pets.forEach((pet, index) => {
    const row = document.createElement("tr");
    
    Object.keys(pet).forEach(key => {
      const cell = document.createElement("td");
      cell.textContent = pet[key];
      row.appendChild(cell);
    });

    const editCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.classList.add("edit-btn");
    editButton.addEventListener("click", () => {
      editPet(index);
    });
    editCell.appendChild(editButton);
    row.appendChild(editCell);

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
      deletePet(index);
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    tableBody.appendChild(row);
  });

  const petTable = document.getElementById("pet-table");
  petTable.appendChild(tableBody);
}

// Função para editar um pet


// Função para excluir um pet
function deletePet(index) {
  // Lógica para excluir um pet
  console.log("Excluir pet de índice:", index);
}

// Chamada da função para criar as linhas da tabela
createPetRows();
// Adicione o código para lidar com a edição e exclusão aqui

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Função para realizar o logout
function logout() {
  // Aqui você pode adicionar o código para realizar o logout, como redirecionar para a página de login, limpar os dados de autenticação, etc.
  alert("Logout realizado com sucesso!");
}

// Definindo a aba "perfil" como a aba inicialmente ativa
document.getElementById("perfil").style.display = "block";

function logout() {
  // Código para realizar o logout
  alert("Logout realizado com sucesso!");
}