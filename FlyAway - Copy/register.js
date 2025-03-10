"use strict";
const getElement = (selector) => document.querySelector(selector);
const displayErrorMsgs = (msgs) => {
    const ul = document.createElement("ul");
    ul.classList.add("message");
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }
    const node = getElement("ul");
    if (node == null) {
        const form = getElement("form");
        if (form && form.parentNode) {
            form.parentNode.insertBefore(ul, form);
        }
    }
    else if (node.parentNode) {
        node.parentNode.replaceChild(ul, node);
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
    const ul = getElement("ul");
    if (ul !== null)
        ul.remove();
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
