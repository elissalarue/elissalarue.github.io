function signGuestbook() {
  const name = document.getElementById("nameInput").value.trim();
  const response = document.getElementById("guestResponse");

  if (name === "") {
    response.innerHTML = "The library does not recognize the nameless.";
  } else {
    const creepyMessages = [
      `${name}, you will not be forgotten...`,
      `The ink dries. ${name} is now part of the archive.`,
      `Welcome, ${name}. They are watching you.`,
      `${name}, your fate is sealed.`,
      `${name}, they already know you're here.`
    ];
    
    const randomMessage = creepyMessages[Math.floor(Math.random() * creepyMessages.length)];
    response.innerHTML = randomMessage;
  }
}