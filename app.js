export default function app() {
  const bodyElement = document.querySelector("body");
  const toggleDiv = document.querySelector("[data-toggle]");
  toggleDiv.addEventListener("click", () => {
    toggleDiv.classList.toggle("toggle-dark");
    bodyElement.classList.toggle("dark-mode");
    // console.log(toggleDiv);
  });
}

export function todayWeekday() {
  const date = new Date();
  const options = { weekday: "long" };
  const weekday = date.toLocaleDateString("en-US", options);
  // console.log(weekday);
  return weekday;
}

export function todaysDate() {
  const date = new Date();
  const localDate = date.toLocaleDateString();
  return localDate;
}
