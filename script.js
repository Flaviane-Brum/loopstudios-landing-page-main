const btn = document.querySelector(".btn-menu");
function handleClick(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Open menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Close menu");
  }
}
btn.addEventListener("click", handleClick);
btn.addEventListener("touchstart", handleClick);
