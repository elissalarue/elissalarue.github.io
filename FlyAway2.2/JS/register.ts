"use strict"

type UserEntry = {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  termsAccepted: boolean;
};

const getElement = (selector: string): HTMLElement | null => document.querySelector(selector);

const displayErrorMsgs = (msgs: string[]): void => {
  const existingErrorBox = getElement("#error-box");

  if (existingErrorBox) {
    existingErrorBox.remove();
  }

  const errorBox = document.createElement("div");
  errorBox.id = "error-box";
  errorBox.classList.add("error-box");


  const ul = document.createElement("ul");
  errorBox.classList.add("message");

  msgs.forEach((msg) => {
    const li = document.createElement("li");
    li.textContent = msg;
    ul.appendChild(li);
  });

  errorBox.appendChild(ul);

    const form= getElement("form");
    if (form && form.parentNode) {
      form.parentNode.insertBefore(errorBox, form);
    }
  

};

const getUserEntry = (): UserEntry | null => {

  const email = getElement("#email_address") as HTMLInputElement | null;
  const phone = getElement("#phone") as HTMLInputElement | null;
  const first = getElement("#first_name") as HTMLInputElement | null;
  const last = getElement("#last_name") as HTMLInputElement | null;
  const terms = getElement("#terms") as HTMLInputElement | null;

  if (!email || !phone || !first || !last || !terms) {
    return null;
  }

  return {
    email: email.value.trim(),
    phone: phone.value.trim(),
    firstName: first.value.trim(),
    lastName: last.value.trim(),
    termsAccepted: terms.checked,
  };
};

const processEntries = (): void => {
  const userEntry = getUserEntry();
  if (!userEntry) return;

  const msgs: string[] = [];

  if(userEntry.email === "") {
    msgs.push("Please enter an email address.");
  } else if (!userEntry.email.includes("@")) {
    msgs.push("Please add the @ symbol to your email.");
  } else if (!userEntry.email.includes(".")) {
    msgs.push("Please add the (.) symbol to your email.");
  }

  if (userEntry.phone === "") {
    msgs.push("Please enter a phone number.");
  }

  if (userEntry.firstName === "") {
    msgs.push("Please enter your first name.");
  }

  if (userEntry.lastName === "") {
    msgs.push("Please enter your last name.")
  }



  if (!userEntry.termsAccepted) {
    msgs.push("You must agree to the terms of service.");
  }

  if (msgs.length === 0) {
    const form = getElement("form") as HTMLFormElement | null;
    if(form) form.submit();
  } else {
    displayErrorMsgs(msgs);
  }

};

const resetForm = (): void=> {
 const form = getElement("form") as HTMLFormElement | null;
 if (form) form.reset();

  const errorBox = getElement("#error-box");
  if (errorBox) errorBox.remove();

  const email = getElement("#email_address") as HTMLInputElement | null;
  if(email) email.focus();
};

document.addEventListener("DOMContentLoaded", () => {
  const registerBtn = getElement("#register") as HTMLButtonElement | null;
  if(registerBtn) registerBtn.addEventListener("click", processEntries);

  const resetBtn = getElement("#reset_form") as HTMLButtonElement | null;
  if(resetBtn) resetBtn.addEventListener("click", resetForm);

  const email = getElement("#email_address") as HTMLInputElement | null;
  if (email) email.focus();
});