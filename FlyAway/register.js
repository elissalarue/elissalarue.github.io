"use strict"

const getElement = selector => document.querySelector(selector);

const displayErrorMsgs = msgs => {
  const ul = document.createElement("ul");
  ul.classList.add("message");

    for(let msg of msgs) {
      const li = document.createElement("li");
      const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
      }

      const node = getElement("ul");
      if (node == null) {
        const form = getElement("form");

        form.parentNode.insertBefore(ul, form);
      } else {
        node.parentNode.replaceChild(ul, node);
      }

}

const processEntries = () => {

  const email = getElement("#email_address");
  const phone = getElement("#phone");
  const first = getElement("#first_name");
  const last = getElement("#last_name");

  const msgs =[];

  if(email.value === "") {
    msgs.push("Please enter an email address.");
  } else if (!email.value.includes("@")) {
    msgs.push("Please add the @ symbol to your email.");
  } else if (!email.value.includes(".")) {
    msgs.push("Please add the (.) symbol to your email.");
  }

  if (phone.value === "") {
    msgs.push("Please enter a phone number.");
  }

  if (first.value === "") {
    msgs.push("Please enter your first name.");
  }

  if (last.value === "") {
    msgs.push("Please enter your last name.")
  }

  if (!terms.checked) {
    msgs.push("You must agree to the terms of service.");
  }

  if (msgs.length === 0) {
    getElement("form").submit();
  } else {
    displayErrorMsgs(msgs);
  }

};

const resetForm = () => {
  getElement("form").reset();

  const ul = getElement("ul");
  if (ul !== null) ul.remove();

  getElement("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
  getElement("#register").addEventListener("click", processEntries);
  getElement("#reset_form").addEventListener("click", resetForm);
  getElement("#email_address").focus();
});