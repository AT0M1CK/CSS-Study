var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNo = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");

// selecting all the buttons inside the plan class

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

backdrop.addEventListener("click", closeModal);

modalNo.addEventListener("click", closeModal);

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}
