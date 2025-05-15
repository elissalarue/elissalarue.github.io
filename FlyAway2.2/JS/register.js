"use strict";
const getElement = (selector) => document.querySelector(selector);
const displayErrorMsgs = (msgs) => {
    const errorBox = document.createElement("div");
    errorBox.classList.add("error-box");
    const ul = document.createElement("ul");
    errorBox.classList.add("message");
    msgs.forEach((msg) => {
        const li = document.createElement("li");
        li.textContent = msg;
        ul.appendChild(li);
    });
    errorBox.appendChild(ul);
    const existingErrorBox = getElement("#error-box");
    if (existingErrorBox && existingErrorBox.parentNode) {
        existingErrorBox.parentNode.replaceChild(errorBox, existingErrorBox);
    }
    else {
        const form = getElement("form");
        if (form && form.parentNode) {
            form.parentNode.insertBefore(errorBox, form);
        }
    }
};
const getUserEntry = () => {
    const email = getElement("#email_address");
    const phone = getElement("#phone");
    const first = getElement("#first_name");
    const last = getElement("#last_name");
    const terms = getElement("#terms");
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
const processEntries = () => {
    const userEntry = getUserEntry();
    if (!userEntry)
        return;
    const msgs = [];
    if (userEntry.email === "") {
        msgs.push("Please enter an email address.");
    }
    else if (!userEntry.email.includes("@")) {
        msgs.push("Please add the @ symbol to your email.");
    }
    else if (!userEntry.email.includes(".")) {
        msgs.push("Please add the (.) symbol to your email.");
    }
    if (userEntry.phone === "") {
        msgs.push("Please enter a phone number.");
    }
    if (userEntry.firstName === "") {
        msgs.push("Please enter your first name.");
    }
    if (userEntry.lastName === "") {
        msgs.push("Please enter your last name.");
    }
    if (!userEntry.termsAccepted) {
        msgs.push("You must agree to the terms of service.");
    }
    if (msgs.length === 0) {
        const form = getElement("form");
        if (form)
            form.submit();
    }
    else {
        displayErrorMsgs(msgs);
    }
};
const resetForm = () => {
    const form = getElement("form");
    if (form)
        form.reset();
    const errorBox = getElement("#error-box");
    if (errorBox)
        errorBox.remove();
    const email = getElement("#email_address");
    if (email)
        email.focus();
};
document.addEventListener("DOMContentLoaded", () => {
    const registerBtn = getElement("#register");
    if (registerBtn)
        registerBtn.addEventListener("click", processEntries);
    const resetBtn = getElement("#reset_form");
    if (resetBtn)
        resetBtn.addEventListener("click", resetForm);
    const email = getElement("#email_address");
    if (email)
        email.focus();
});
