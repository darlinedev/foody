


var buttonModal = document.getElementById("fixed");
var openModal = document.getElementById("modalPrem");
var closeModal = document.getElementById("closeButton");
var overlay = document.getElementById("myOverlay");

buttonModal.addEventListener('click', showModal, false);


function showModal() {
    openModal.style.display = 'block';
    overlay.style.display = 'block';
};

closeModal.addEventListener('click', removeModal, false);

function removeModal() {
    openModal.style.display = 'none';
    overlay.style.display = 'none';
};

