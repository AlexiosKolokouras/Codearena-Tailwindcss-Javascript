// ---------------------------------------------------------------------------------------------------------------------
// Mobile Menu Burger Button
// ---------------------------------------------------------------------------------------------------------------------
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("hidden");

  // JavaScript Animation (not needed, just for example)
  mobileMenu.animate(
    [
      { transform: "translateX(-80%)" },
      { transform: "translateX(20%)" },
      { transform: "translateX(-10%)" },
      { transform: "translateX(5%)" },
      { transform: "translateX(0%)" },
    ],
    {
      duration: 500,
      fill: "forwards",
    }
  );
}

// ---------------------------------------------------------------------------------------------------------------------
// Menu Dropdown
// ---------------------------------------------------------------------------------------------------------------------
const menuItem = document.getElementById("menu-item");
const menuDropdown = document.getElementById("menu-dropdown");

menuItem.addEventListener("click", () => {
  menuDropdown.classList.toggle("hidden");
  menuDropdown.style.left = menuItem.offsetLeft + "px";
  menuDropdown.style.width = "calc(125px + " + menuItem.offsetWidth + "px)";
});

// ---------------------------------------------------------------------------------------------------------------------
// Carousel for desktop
// ---------------------------------------------------------------------------------------------------------------------
const scrollLeftButton = document.getElementById("prev");
const scrollRightButton = document.getElementById("next");

function scrollCarousel(direction) {
  const slider = document.getElementById("slider");
  const scrollAmount = slider.children[0].offsetWidth + 40;
  slider.scrollLeft += direction * scrollAmount;
}

scrollLeftButton.addEventListener("click", () => {
  scrollCarousel(-1);
});

scrollRightButton.addEventListener("click", () => {
  scrollCarousel(1);
});

// ---------------------------------------------------------------------------------------------------------------------
// Logo Roll
// ---------------------------------------------------------------------------------------------------------------------
const roll = document.getElementById("roll");

roll.addEventListener("click", () => {
  roll.animate(
    [
      { transform: "translateX(0%) rotate(0deg)" },
      { transform: "translateX(-100vw) rotate(-1800deg)" },
    ],
    {
      duration: 3000,
      fill: "forwards",
    }
  );
});

function rightBtn() {
  const textHide = document.getElementById("text-hide");
  const textShow = document.getElementById("text-show");

  textHide.classList.add("hidden");
  textShow.classList.remove("hidden");
}

function leftBtn() {
  const textHide = document.getElementById("text-hide");
  const textShow = document.getElementById("text-show");

  textHide.classList.remove("hidden");
  textShow.classList.add("hidden");
}
