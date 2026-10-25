const amountButtons = document.querySelectorAll("[data-amount]");
const amountInput = document.querySelector("#custom-amount");
const donationForm = document.querySelector("#donation-form");
const total = document.querySelector("#donation-total");
const successMessage = document.querySelector("#success-message");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

amountButtons.forEach((button) => {
  button.addEventListener("click", () => {
    amountButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    amountInput.value = button.dataset.amount;
  });
});

donationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const donation = Number(amountInput.value);
  if (!donation || donation < 1) return;

  const currentTotal = Number(total.textContent.replace(/[^0-9]/g, ""));
  total.textContent = `₹ ${(currentTotal + donation).toLocaleString("en-IN")}`;
  successMessage.textContent = `Thank you for your offering of ₹${donation.toLocaleString("en-IN")}. Ganpati Bappa Morya!`;
  donationForm.reset();
  amountButtons.forEach((item) => item.classList.remove("active"));
});

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
