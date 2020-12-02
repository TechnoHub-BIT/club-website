const showNavbar = () => {
  const navList = document.querySelector(".navList");
  const links = document.querySelectorAll(".navList li a");

  document.querySelector(".hamburger").addEventListener("click", () => {
    navList.classList.toggle("open");
      links.forEach(link => {
        link.addEventListener("click", () => {
          navList.classList.remove("open");
        });
      });
  });
};

export default showNavbar;