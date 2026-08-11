const menuButton = document.getElementById("mobile-menu");
const sidebar = document.getElementById("sidebar");

if (menuButton && sidebar) {
  menuButton.addEventListener("click", () => {
    const open = sidebar.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
}

const searchForm = document.getElementById("site-search");
const searchInput = document.getElementById("search-input");
const main = document.querySelector(".site-main");

if (searchForm && searchInput && main) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    document.querySelectorAll(".search-hit").forEach(el => {
      el.classList.remove("search-hit");
    });

    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
    let node;

    while ((node = walker.nextNode())) {
      if (node.parentElement && !["SCRIPT","STYLE"].includes(node.parentElement.tagName)) {
        if (node.nodeValue.toLowerCase().includes(query)) {
          node.parentElement.classList.add("search-hit");
          node.parentElement.scrollIntoView({behavior:"smooth", block:"center"});
          break;
        }
      }
    }
  });
}
