let productsList = document.querySelector("#productslist");

axios.get(" http://localhost:3000/products").then((res) => {
  let products = res.data;
  console.log(products);
  products.forEach((product, index) => {
    let productItem = document.createElement("li");
    let h4 = document.createElement("h4");
    let num = document.createElement("span");
    let productImg = document.createElement("img");
    let price = document.createElement("span");
    let description = document.createElement("p");
    let company = document.createElement("p");
    let category = document.createElement("p");

    if (index % 2 === 0) {
      productItem.classList.add("bg-secondary", "text-white", "rounded-2");
    } else {
      productItem.classList.add("bg-light", "rounded-2");
    }

    num.classList.add("px-2", "w-5");
    num.innerText = `${+index + 1}.`;
    h4.classList.add("w-20");
    h4.innerText = `${product.name}`;
    productImg.classList.add("img-pro", "mx-3");
    productImg.setAttribute("src", `${product.image}`);
    price.classList.add("w-10", "mx-2");
    price.innerText = `$${product.price}`;
    description.classList.add("w-30");
    description.innerText = `${product.description}`;
    company.classList.add("w-10");
    company.innerText = `${product.company}`;
    category.classList.add("w-10");
    category.innerText = `${product.category}`;
    productItem.classList.add("p-3", "d-flex", "fs-5");
    productItem.append(
      num,
      h4,
      productImg,
      price,
      company,
      description,
      category
    );
    productsList.append(productItem);
  });
});
