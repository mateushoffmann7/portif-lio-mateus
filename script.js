const skill = document.querySelector(".skills em");

function handleToggleSkills1() {
  if (skill.innerHTML === "Frontend Developer") {
    skill.innerHTML = "React | Typescript | NextJS | JavaScript";
    skill.style.transition = " all";
  }
}
setInterval(handleToggleSkills1, 3000);

function handleToggleSkills2() {
  if (skill.innerHTML === "React | Typescript | NextJS | JavaScript") {
    skill.innerHTML = "Frontend Developer";
    skill.style.transition = " all";
  }
}
setInterval(handleToggleSkills2, 6000);

const navBar = document.querySelector(".headerSite");

function handleScrollNav() {
  if (window.scrollY > 0) {
    navBar.classList.add("headerSiteColor");
  } else {
    navBar.classList.remove("headerSiteColor");
  }
}

window.addEventListener("scroll", handleScrollNav);
