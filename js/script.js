// Order Sample Alert
function orderSample() {
    alert("🎉 Thank you for ordering a free sample! We'll get in touch soon.");
  }
  
  // Mobile Menu Toggle
  document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
  
    if (menuBtn && menu) {
      menuBtn.addEventListener("click", () => {
        const icon = menuBtn.querySelector("i");
  
        if (menu.classList.contains("hidden")) {
          // Show with animation
          menu.classList.remove("hidden");
          setTimeout(() => {
            menu.classList.remove("opacity-0", "-translate-y-5");
          }, 10);
        } else {
          // Hide with animation
          menu.classList.add("opacity-0", "-translate-y-5");
          menu.addEventListener(
            "transitionend",
            () => {
              menu.classList.add("hidden");
            },
            { once: true }
          );
        }
  
        // Toggle icon (bars ↔ x)
        if (icon) {
          icon.classList.toggle("fa-bars");
          icon.classList.toggle("fa-xmark");
        }
      });
    }
  });
  