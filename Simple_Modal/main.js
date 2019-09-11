// get the modal elements
let modal = document.getElementById("simpleModal");
let modalContent = document.querySelector(".modal-content");
let modalBtn = document.getElementById("modalBtn");
let closeBtn = document.getElementsByClassName("close-btn")[0];

// listen for open click
modalBtn.addEventListener("click", openModal);
function openModal() {
    modal.style.display = "block";
}

// listen for close click
closeBtn.addEventListener("click", closeModal);
function closeModal() {
    modal.style.display = "none";
}

// listen for outside click
window.addEventListener('click', clickOutside);
function clickOutside(e) {
    if (e.target == modal) {
        
        modal.style.display = "none";
    }
    
}
