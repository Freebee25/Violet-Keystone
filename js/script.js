// Order Sample Alert
function orderSample() {
    alert("🎉 Thank you for ordering a free sample! We'll get in touch soon.");
  }
  
  // Mobile Menu Toggle
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");

  // Toggle icon (bars ↔ x)
  const icon = menuBtn.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

  