//Function to Show Popup Menus in Account Section
const showPopup = (index, popupName) => {
  const popupMenus = document.querySelectorAll(".popupMenus")[index];
  const closePopups = document.querySelectorAll(".closePopup");
  const closePopupAlternates = document.querySelectorAll(".closePopupAlternate");
  const popupToShow = popupMenus.querySelector("." + popupName);

  popupMenus.classList.toggle("popupVisible");
  popupToShow.style.display = "block";

  closePopups.forEach((closePopup) => {
    closePopup.addEventListener("click", () => {
      popupMenus.classList.remove("popupVisible");
      popupToShow.style.display = "none";
    });
  });

  closePopupAlternates.forEach((closePopupAlternate) => {
    closePopupAlternate.addEventListener("click", () => {
      popupMenus.classList.remove("popupVisible");
      popupToShow.style.display = "none";
    });
  });

  window.addEventListener("keyup", (e) => {
    if(e.keyCode === 27) {
      popupMenus.classList.remove("popupVisible");
      popupToShow.style.display = "none";
    }
  });
};
//End Function

export default showPopup;