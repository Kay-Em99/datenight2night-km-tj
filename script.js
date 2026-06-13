const correctAnswer = "eyes";

const gate = document.getElementById("gate");
const invite = document.getElementById("invite");
const input = document.getElementById("passwordInput");
const submitBtn = document.getElementById("submitBtn");
const error = document.getElementById("error");

function normalize(value) {
  return value.trim().toLowerCase().replace(/[^a-z]/g, "");
}

function unlock() {
  const answer = normalize(input.value);
  if (answer === correctAnswer) {
    sessionStorage.setItem("dateNightUnlocked", "yes");
    gate.classList.add("hidden");
    invite.classList.remove("hidden");
    error.textContent = "";
  } else {
    error.textContent = "Not quite. Hint: it is the answer Karsh would say instantly.";
    input.select();
  }
}

function lockAgain() {
  sessionStorage.removeItem("dateNightUnlocked");
  input.value = "";
  gate.classList.remove("hidden");
  invite.classList.add("hidden");
  setTimeout(() => input.focus(), 50);
}

submitBtn.addEventListener("click", unlock);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") unlock();
});

if (sessionStorage.getItem("dateNightUnlocked") === "yes") {
  gate.classList.add("hidden");
  invite.classList.remove("hidden");
} else {
  setTimeout(() => input.focus(), 50);
}
