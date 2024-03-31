const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = async () => {
  const products = await getAllProducts();
  displayProducts(products);
};

async function getAllProducts() {
  try {
    const response = await fetch(BASE_URL, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA5YTlhNTQ2MTBmZDAwMTk4ZjAyNjYiLCJpYXQiOjE3MTE5MDkyODUsImV4cCI6MTcxMzExODg4NX0.6r6SoKLD1IY0vKavrHwMWRgSQEIYUPuGGXtfCutou2M",
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
  const productsContainer = document.getElementById('products');
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
