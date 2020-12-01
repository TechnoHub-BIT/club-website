const showNavbar = () => {
  const menuBtn = document.querySelector(".menuBtn i");
  const navbarTop = document.querySelector(".navbarTop");
  const links = document.querySelectorAll(".navbarTop ul li a");
  menuBtn.addEventListener("click", () => {
    navbarTop.classList.toggle("show");
    menuBtn.classList.toggle("show");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      navbarTop.classList.remove("show");
      menuBtn.classList.remove("show");
    });
  });
};

export default showNavbar;