const menulol = document.querySelectorAll("div.menu-item");

const montaditos = [];

menulol.forEach((value, index) => {
  if (index > 100) {
    return;
  }

  const obj = {};

  obj.name = value.querySelector(".item-description > p").innerText;
  obj.number = parseInt(
    value.querySelector("h5 a").innerText.split(".")[0],
    10
  );
  obj.price = value.querySelector(".menu-details p").innerText;

  const foodBadges = value
    .querySelector(".food-badges")
    .innerHTML.toLowerCase();

  obj.new = foodBadges.includes("nuevo");
  obj.brioche = foodBadges.includes("brioche");
  obj.cereal = foodBadges.includes("cereal");
  obj.chapata = foodBadges.includes("chapata");
  obj.vegetarian = foodBadges.includes("vegetariano");

  montaditos.push(obj);
});

JSON.stringify(montaditos);
