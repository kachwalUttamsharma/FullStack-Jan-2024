const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const mainTicketContainer = document.querySelector(".main-ticket-cont");
const textArea = document.querySelector(".textarea-cont");
const allPriorityColor = document.querySelectorAll(".priority-color");

let addTaskFlag = false;
let modalPriorityColor = "black";
const cleanUpColorSelction = () => {
  allPriorityColor.forEach((currElem) => {
    currElem.classList.remove("active-status-color");
  });
};

addBtn.addEventListener("click", () => {
  addTaskFlag = !addTaskFlag;
  if (addTaskFlag === true) {
    cleanUpColorSelction();
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

allPriorityColor.forEach((colorElem) => {
  colorElem.addEventListener("click", (event) => {
    // clean up the exisiting selected option
    cleanUpColorSelction();
    modalPriorityColor = event.target.classList[0];
    colorElem.classList.add("active-status-color");
  });
});
modalCont.addEventListener("keydown", (event) => {
  if (event.key === "Alt") {
    createTicket(textArea.value);
    modalCont.style.display = "none";
    textArea.value = "";
    cleanUpColorSelction();
  }
});

const createTicket = (ticketInfo) => {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `<div class="${modalPriorityColor} ticket-color"></div>
  <div class="ticket-id">${shortid()}</div>
  <div class="task-area">
    ${ticketInfo}
  </div>
  <div class="lock">
    <i class="fa-solid fa-lock"></i>
  </div>`;
  mainTicketContainer.appendChild(ticketCont);
};
