// Toggle Navbar menu icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Active nav-links on scrolling
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky NavBar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  let scrollup = document.querySelector("aside");
  scrollup.classList.toggle("show", window.scrollY > 400);

  //Remove menu icon navbar on selecting option
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Scroll Reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 1000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .project-detail-box, .contact-box, .skills-logos, .contact-details p",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1, .aboutme-img", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .aboutme-content", {
  origin: "right",
});

// Typed js- Multiple text animation
const typed = new Typed(".multiple-text", {
  strings: ["Senior Software Engineer", "Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// About Section- Tabs
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//Read more in projects section

const projdetails = document.querySelectorAll(".p-details");
projdetails.forEach((pd) => {
  pd.addEventListener("click", (event) => {
    const current = event.target;
    const isReadMoreBtn = current.className.includes("read-more-btn");
    if (!isReadMoreBtn) return;
    const currentText =
      event.target.parentNode.querySelector(".read-more-text");
    currentText.classList.toggle("read-more-text--show");
    current.textContent = current.textContent.includes("Read More")
      ? "Read Less..."
      : "Read More...";
  });
});
