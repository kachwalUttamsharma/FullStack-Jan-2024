const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const mainTicketContainer = document.querySelector(".main-ticket-cont");
const textArea = document.querySelector(".textarea-cont");
const allPriorityColor = document.querySelectorAll(".priority-color");
const removeBtn = document.querySelector(".remove-btn");
const toolBoxColors = document.querySelectorAll(".color");

let ticketArr = [];
console.log(ticketArr);

// get the ticket based on ticketId
const getTicket = (ticketId) => {
  let ticket = {};
  for (let i = 0; i < ticketArr.length; i++) {
    if ((ticketArr[i].ticketId = ticketId)) {
      ticket = ticketArr[i];
      break;
    }
  }
  return ticket;
};
const handleRemove = (ticket, ticketId) => {
  ticket.addEventListener("click", () => {
    if (removeTaskFlag === true) {
      ticket.remove();
      const ticketObj = getTicket(ticketId);
      ticketArr.splice(ticketObj, 1);
      localStorage.setItem("tasks", JSON.stringify(ticketArr));
      console.log("after deleting from arr", ticketArr);
    }
  });
};

let lockTicket = "fa-lock";
let unLockTicket = "fa-lock-open";

const handleLock = (ticket, ticketId) => {
  const ticketLockElem = ticket.querySelector(".lock");
  const ticketLockIcon = ticketLockElem.children[0];
  const ticketTaskArea = ticket.querySelector(".task-area");

  ticketLockIcon.addEventListener("click", () => {
    if (ticketLockIcon.classList.contains("fa-lock")) {
      ticketLockIcon.classList.remove("fa-lock");
      ticketLockIcon.classList.add("fa-lock-open");
      ticketTaskArea.setAttribute("contenteditable", "true");
    } else {
      ticketLockIcon.classList.remove("fa-lock-open");
      ticketLockIcon.classList.add("fa-lock");
      ticketTaskArea.setAttribute("contenteditable", "false");
      const taskToBeUpdated = ticketArr.findIndex(
        (t) => t.ticketId === ticketId
      );
      ticketArr[taskToBeUpdated].ticketInfo = ticketTaskArea.innerText;
      localStorage.setItem("tasks", JSON.stringify(ticketArr));
    }
  });
};

// Colors Array
const colors = ["lightpink", "lightgreen", "lightblue", "black"];

const handleColor = (ticket, ticketId) => {
  let colorBand = ticket.querySelector(".ticket-color");
  colorBand.addEventListener("click", () => {
    // we have find color of the band and then index of that color
    // from colors array and then we need to update color of the band
    // with next index of color
    let currentColor = "";
    for (let idx = 0; idx < colorBand.classList.length; idx++) {
      if (colorBand.classList[idx] !== "ticket-color") {
        currentColor = colorBand.classList[idx];
      }
    }
    const currentColorIndex = colors.indexOf(currentColor);
    const newColor = colors[(currentColorIndex + 1) % colors.length];
    colorBand.classList.remove(currentColor);
    colorBand.classList.add(newColor);
    const taskToBeUpdated = ticketArr.findIndex((t) => t.ticketId === ticketId);
    ticketArr[taskToBeUpdated].ticketColor = newColor;
  });
};

const createTicket = (ticketColor, ticketInfo, ticketUniqueId) => {
  const ticketId = ticketUniqueId || shortid();
  const ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `<div class="${ticketColor} ticket-color"></div>
  <div class="ticket-id">${ticketId}</div>
  <div class="task-area">
    ${ticketInfo}
  </div>
  <div class="lock">
    <i class="fa-solid fa-lock"></i>
  </div>`;
  mainTicketContainer.appendChild(ticketCont);
  if (ticketUniqueId.length <= 0) {
    ticketArr.push({ ticketId, ticketInfo, ticketColor });
    localStorage.setItem("tasks", JSON.stringify(ticketArr));
  }
  // if you want to add listener to each ticket and remove it
  handleRemove(ticketCont, ticketId);
  handleLock(ticketCont, ticketId);
  handleColor(ticketCont, ticketId);
};

if (localStorage.getItem("tasks")) {
  ticketArr = JSON.parse(localStorage.getItem("tasks"));
  ticketArr.forEach((ticket) =>
    createTicket(ticket.ticketColor, ticket.ticketInfo, ticket.ticketId)
  );
}

for (let i = 0; i < toolBoxColors.length; i++) {
  toolBoxColors[i].addEventListener("click", () => {
    // get the selected color from the filter
    const selectedToolBoxColor = toolBoxColors[i].classList[0];

    // filter the tickets based on the selected color
    const filteredTickets = ticketArr.filter((ticket) => {
      return selectedToolBoxColor === ticket.ticketColor;
    });

    // remove all the selected those are created
    const allTicket = document.querySelectorAll(".ticket-cont");
    for (let i = 0; i < allTicket.length; i++) {
      allTicket[i].remove();
    }

    // re-create the filtered tickets
    filteredTickets.forEach((ticket) =>
      createTicket(ticket.ticketColor, ticket.ticketInfo, ticket.ticketId)
    );
  });

  toolBoxColors[i].addEventListener("dblclick", () => {
    // remove all the selected those are created
    const allTicket = document.querySelectorAll(".ticket-cont");
    for (let i = 0; i < allTicket.length; i++) {
      allTicket[i].remove();
    }
    ticketArr.forEach((ticket) =>
      createTicket(ticket.ticketColor, ticket.ticketInfo, ticket.ticketId)
    );
  });
}
let addTaskFlag = false;
let removeTaskFlag = false;
let modalPriorityColor = "black";
const cleanUpColorSelction = () => {
  allPriorityColor.forEach((currElem) => {
    currElem.classList.remove("active-status-color");
  });
};

removeBtn.addEventListener("click", () => {
  removeTaskFlag = !removeTaskFlag;
  if (removeTaskFlag == true) {
    window.alert("Delete Button Has Been Activated");
    removeBtn.style.color = "red";
  } else {
    window.alert("Delete Button Has Been Deactivated");
    removeBtn.style.color = "white";
  }
});

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
    createTicket(modalPriorityColor, textArea.value, "");
    modalCont.style.display = "none";
    textArea.value = "";
    modalPriorityColor = "black";
    cleanUpColorSelction();
    addTaskFlag = false;
  }
});
