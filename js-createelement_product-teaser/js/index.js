console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const newArticle = document.createElement("article");
const article = `<article class="product">
<div class="product__body">
  <div class="product__text-container">
    <h2 class="product__name">${name}</h2>
    <ul class="product__categories">
      <li class="product__category">${category1}</li>
      <li class="product__category">${category2}</li>
      <li class="product__category">${category3}</li>
    </ul>
    <p class="product__description">
    ${description}
    </p>
  </div>
  <div class="product__image-container">
    <img
      class="product__image"
      src=${imageSrc}
      alt=""
    />
  </div>
</div>
<footer class="product__footer">
  <span class="product__price">${price}</span>
  <button type="button" class="product__buy-button" data-js="second-button">Buy</button>
  </footer>
  </article>`;

newArticle.innerHTML = article;
document.body.append(newArticle);

const button = document.querySelector('[data-js="second-button"]');
button.addEventListener("click", () => {
  console.log("product name and price :", name, price);
});

/*const productContainer = document.createElement("article");
productContainer.classList.add("product");

const productBody = document.createElement("div");
productBody.classList.add("product__body");

const productTextContainer = document.createElement("div");
productTextContainer.classList.add("product__text-container");

const productName = document.createElement("h2");
productName.classList.add("product__name");

const productCategories = document.createElement("ul");
productCategories.classList.add("product__categories");

const category1 = document.createElement("li");
category1.classList.add("product__category");
category1.textContent = category1;

const category2 = document.createElement("li");
category2.classList.add("product__category");
category2.textContent = category2;

const category3 = document.createElement("li");
category3.classList.add("product__category");
category3.textContent = category3;

productCategories.append(category1, category2, category3);

const productDescription = document.createElement("p");
productDescription.classList.add("product__description");
productDescription.textContent = description;

productTextContainer.append(productName, productCategories, productDescription);

const productimageContainer = document.createElement("div");
productimageContainer.classList.add("product__image-container");

const productImage = document.createElement("img");
productImage.classList.add("product__image");
productImage.src = imageSrc;

productImageContainer.appendChild(productImage);

const productFooter = document.createElement("footer");
productFooter.classList.add("product__footer");

const productPrice = document.createElement("span");
productPrice.classList.add("product__price");
productPrice.textContent = price;

const productBuyButton = document.createElement("button");
productBuyButton.classList.add("product__buy-button");
productBuyButton.textContent = "Buy";

productBuyButton.addEventListener("click", () => {
  console.log(`Product Name: ${name}`);
  console.log(`Price: ${price}`);
});

productFooter.append(productPrice, productBuyButton);

productContainer.append(productBody, productFooter);

document.body.appendChild(productContainer); */
