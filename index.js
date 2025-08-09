const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');
menu.addEventListener("click", function (e) {
  e.stopPropagation(); 
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});


close.addEventListener("click", function (e) {
  e.stopPropagation();
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});


document.addEventListener("click", function (e) {
  
  if (
    sideBar.classList.contains("open-sidebar") &&
    !sideBar.contains(e.target) &&
    e.target !== menu
  ) {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
  }
});

const sidebarLinks = sideBar.querySelectorAll("a");

sidebarLinks.forEach(link => {
  link.addEventListener("click", function () {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
  });
});



//Project-section
function navigateToProject(e) {
    e.preventDefault();
    console.log("button clicked");
    const link = e.target.closest('button').getAttribute('data-link');
    // window.open(link, "_blank");
    window.location.href = link;
  }