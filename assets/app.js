document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const side = document.querySelector(".side");
  if (menu && side) menu.addEventListener("click", () => side.classList.toggle("open"));

  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav").forEach(a => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const input = document.querySelector("[data-search]");
  const cards = [...document.querySelectorAll("[data-search-item]")];
  if (input && cards.length) {
    const filter = () => {
      const q = input.value.trim().toLowerCase();
      cards.forEach(card => card.hidden = q && !card.textContent.toLowerCase().includes(q));
      const empty = document.querySelector("[data-empty]");
      if (empty) empty.hidden = cards.some(c => !c.hidden);
    };
    input.addEventListener("input", filter);
  }

  document.querySelectorAll("[data-filter]").forEach(select => {
    select.addEventListener("change", () => {
      const value = select.value;
      document.querySelectorAll("[data-filter-item]").forEach(item => {
        item.hidden = value !== "all" && item.dataset.filterItem !== value;
      });
    });
  });
});