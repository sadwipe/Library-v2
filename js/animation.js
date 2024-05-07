const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".add-book");
const closeModalBtn = document.querySelector(".btn-close");
const readStatus = document.querySelectorAll(".read-status")

const openModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal)

openModalBtn.addEventListener("click", openModal);

export { closeModal };