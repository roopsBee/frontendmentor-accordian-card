const items = document.querySelectorAll(".accordian-item");

items.forEach((item) => {
  item.onclick = () => {
    item.classList.toggle("selected");
  };
});

console.log(items);
