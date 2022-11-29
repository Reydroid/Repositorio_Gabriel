const modal = document.querySelector(".modal");

const button = document.querySelector(".button");

const close_ = document.querySelector(".close");

function openModal() {
button.addEventListener("click", (e) => {
    modal.style.display = "flex"
    closeModal()
})
}

openModal()

function closeModal() {
    close_.addEventListener("click", (e) => {
        modal.style.display = "none"
    })
}