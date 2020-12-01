const showNavbar = () => {
  const menuBtn = document.querySelector(".menuBtn i");
  const list = document.querySelector(".navbarTop ul");
  const links = document.querySelectorAll(".navbarTop ul li a");
  menuBtn.addEventListener("click", () => {
    list.classList.toggle("show");
    menuBtn.classList.toggle("show");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      list.classList.remove("show");
      menuBtn.classList.remove("show");
    });
  });
};

export default showNavbar;