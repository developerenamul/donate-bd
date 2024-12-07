const showSectionById = (id) => {
  document.getElementById(id).classList.remove("hidden");
};

const hideSectionById = (id) => {
  document.getElementById(id).classList.add("hidden");
};

const getInputValueById = (id) => {
  const inputField = document.getElementById(id);
  const value = parseFloat(inputField.value);
  if (isNaN(value)) {
    alert("wrong entry!! please input right amount");
    return 0;
  }

  const currentBal = getInnerTextValueById("total-balance");

  inputField.value = "";
  if (currentBal > value) {
    my_modal_1.showModal();
    return value;
  } else {
    alert("not enough balance");
    return 0;
  }
};

const getInnerTextValueById = (id) => {
  const innerTextValue = document.getElementById(id);
  const amount = parseFloat(innerTextValue.innerText);
  return amount;
};

const donateAndUpdateValue = (inputField, innerTextField, title) => {
  const totalDonation = getInputValueById(inputField);
  const bal = getInnerTextValueById(innerTextField);
  const totalBal = totalDonation + bal;

  document.getElementById(innerTextField).innerText = totalBal;

  const accountBal = getInnerTextValueById("total-balance");
  document.getElementById("total-balance").innerText =
    accountBal - totalDonation;

  if (totalDonation > 0) {
    historyUpdate(totalDonation, title);
  }
};

function historyUpdate(money, title) {
  const amount = money;
  const div = document.createElement("div");
  div.setAttribute("class", "bg-gray-400 border border-gray-500 p-2 my-3");
  const newtitle = document.getElementById(title).innerText;

  const time = new Date();
  div.innerHTML = `
  <p>${amount} ${newtitle}</p>
  <p>time : ${time}</p>
  `;
  const container = document.getElementById("history-container");
  container.appendChild(div);
}
