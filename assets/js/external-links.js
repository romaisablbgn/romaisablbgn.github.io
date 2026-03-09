// external-links.js
document.addEventListener("DOMContentLoaded", function() {
  // Select all links starting with "http" that are NOT on your domain
  const links = document.querySelectorAll("a[href^='http']:not([href*='" + window.location.hostname + "'])");
  links.forEach(link => {
    link.setAttribute("target", "_blank");  // open in new tab
    link.setAttribute("rel", "noopener noreferrer");  // security best practice
  });
});