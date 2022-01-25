function startTime() {
    
    const res = new Date(2022, 1,2, 1, 1, 60).getTime() - new Date().getTime();

    let seconds = 1000;
    let minutes = seconds * 60;
    let hour = minutes * 60;
    let day = hour * 24;

    document.querySelector(".day").innerText = Math.floor(res / day);
    document.querySelector(".hour").innerText = Math.floor((res % day) / hour);
    document.querySelector(".minutes").innerText = Math.floor((res % hour) / minutes);
    document.querySelector(".seconds").innerText = Math.floor((res % minutes) / seconds);

}

setInterval(startTime, 1000);

const showModalForm = document.querySelector(".modal-form");
const buttonActionModal = document.querySelector(".section-footer-button");
const buttonSubmitCloseModal = document.querySelector(".submit-button");

buttonActionModal.addEventListener("click", showModal);
buttonSubmitCloseModal.addEventListener("click", closeModal);

function showModal() {
    showModalForm.style.visibility = "visible";
}

function closeModal() {
    showModalForm.style.visibility = "hidden";
}