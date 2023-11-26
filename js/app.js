let box1 = document.querySelector(".box-1");
let userP = document.querySelector(".user");
let box2 = document.querySelector(".box-2");
let productP = document.querySelector(".product");

axios.get("http://localhost:3000/users").then((res) => {
  let users = res.data.length;
  userP.innerHTML = users;
  box1.append(userP);
});

axios.get("http://localhost:3000/products").then((res) => {
  let products = res.data.length;
  productP.innerHTML = products;
  box2.append(productP);
});
