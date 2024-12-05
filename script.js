
const projectLinks = document.querySelectorAll(".links a");

projectLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.color = "red";
    link.style.fontSize = "1.2em";
  });

  link.addEventListener("mouseout", () => {
    link.style.color = "";
    link.style.fontSize = "";
  });
});

console.log("Welcome to my CIS 302 Portfolio!");
