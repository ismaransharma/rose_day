const changeRoseButton = document.getElementById("changeRose");
const container = document.querySelector(".hero");

changeRoseButton.addEventListener("click", () => {
  const leaf = document.createElement("div");
  leaf.classList.add("rose-leaf");
  const randomX = Math.random() * container.offsetWidth;
  leaf.style.left = `${randomX}px`;
  container.appendChild(leaf);
  setTimeout(() => {
    leaf.remove();
  }, 5000);
});
