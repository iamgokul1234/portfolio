const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");
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

sidebarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
  });
});

//Project-section
function navigateToProject(e) {
  e.preventDefault();
  console.log("button clicked");
  const link = e.target.closest("button").getAttribute("data-link");
  // window.open(link, "_blank");
  window.location.href = link;
}

emailjs.init("JOuzpuyVK89r3uJP8");

document
  .querySelector(".contact-buttonContainer button")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const fullName = document
      .querySelector('input[placeholder="Your Full Name"]')
      .value.trim();
    const email = document
      .querySelector('input[placeholder="Your Email"]')
      .value.trim();
    const message = document.querySelector(".mess").value.trim();
    const button = e.target;

    if (!fullName || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    button.disabled = true;
    button.textContent = "Sending...";

    emailjs
      .send("service_zh5ekmp", "template_h1o1e3h", {
        title: "Website Contact Form",
        from_name: fullName,
        from_email: email,
        message: message,
      })
      .then(
        function () {
          alert("✅ Message sent successfully!");
          document.querySelector('input[placeholder="Your Full Name"]').value =
            "";
          document.querySelector('input[placeholder="Your Email"]').value = "";
          document.querySelector(".mess").value = "";
          button.disabled = false;
          button.textContent = "Send";
        },
        function (error) {
          alert("❌ Failed to send message. Please try again.");
          console.error("FAILED", error);
          button.disabled = false;
          button.textContent = "Send";
        }
      );
  });
