const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = async () => {
  const productsContainer = document.getElementById('productsContainer');
  const products = await getAllProducts();
  displayProducts(products);
};

async function getAllProducts() {
  try {
    const response = await fetch(BASE_URL, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM3Zjc1YWM1Y2I2MjAwMTQzMDQ2MzgiLCJpYXQiOjE2ODEzODk0MDMsImV4cCI6MTY4MjU5OTAwM30.X8vcNHscCwbf38F9v8N9dADkt0E19x7HstOxfVfPIDg",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Errore durante il recupero dei prodotti:', error);
    return [];
  }
}

function displayProducts(products) {
  const productsContainer = document.getElementById('productsContainer');
  products.forEach(product => {
    const card = `
      <div class='col col-3 col-lg-3 col-md-4 col-sm-6 col-sm-12 mb-4'>  
        <div class="card justify-content-between">
          <img src="${product.imageUrl}" class="card-img-top" alt="${product._id}_${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <a href="./backoffice.html?id=${product._id}" class="btn btn-primary">Dettagli</a>
          </div>
        </div> 
      </div>`;
    productsContainer.innerHTML += card;
  });
}