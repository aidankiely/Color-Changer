
var whiteSwatch = document.getElementById("white");
var yellowSwatch = document.getElementById("yellow");
var blueSwatch = document.getElementById("blue");
var redSwatch = document.getElementById("red");
var image = document.getElementById("product-photo");
var price = document.getElementById("price");

yellowSwatch.addEventListener("mouseover", function() {
console.log("Yellow");
  image.src = "img/chair-yellow@2x.jpg";
  price.innerHTML = "$275.00";
  price.style.color = "Black";
  price.innerHTML += " (Air Jordan Blue)";
});


blueSwatch.addEventListener("mouseover", function() {
  image.src = "img/chair-blue@2x.jpg";
  price.innerHTML = "$890.00";
  price.style.color = "black";
   price.innerHTML += " (Air Jordan Green)";
});



redSwatch.addEventListener("mouseover", function() {
  image.src = "img/chair-red@2x.jpg";
  price.innerHTML = "$159.99";
  price.style.color = "black";
  price.innerHTML += " (Air Jordan Red)";
  image.src = "img/chair-beige@2x.jpg";
  price.innerHTML = "$195.84";
  price.style.color = "black";
});

whiteSwatch.addEventListener("mouseover", function() {
  price.innerHTML += " (Air Jordan Black)";
});

