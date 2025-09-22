const skill = document.querySelector(".skills em");

function handleToggleSkills1() {
  if (skill.innerHTML === "Frontend Developer") {
    skill.innerHTML = "React | Typescript | NextJS | JavaScript";
  }
}
setInterval(handleToggleSkills1, 3000);

function handleToggleSkills2() {
  if (skill.innerHTML === "React | Typescript | NextJS | JavaScript") {
    skill.innerHTML = "Frontend Developer";
  }
}
setInterval(handleToggleSkills2, 6000);
