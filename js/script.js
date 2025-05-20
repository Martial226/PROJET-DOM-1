// Fonction pour mettre à jour le total
function updateTotal() {
  const products = document.querySelectorAll('.card-body');
  let total = 0;

  products.forEach((product) => {
    const quantity = parseInt(product.querySelector('.quantity').textContent);
    const priceText = product.querySelector('.unit-price').textContent;
    const price = parseFloat(priceText.replace('$', ''));
    total += quantity * price;
  });

  document.querySelector('.total').textContent = total + ' $';
}

// Gérer les boutons + et -
document.querySelectorAll('.fa-plus-circle').forEach((btn) => {
  btn.addEventListener('click', function () {
    const quantitySpan = this.nextElementSibling;
    quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
    updateTotal();
  });
});

document.querySelectorAll('.fa-minus-circle').forEach((btn) => {
  btn.addEventListener('click', function () {
    const quantitySpan = this.previousElementSibling;
    if (parseInt(quantitySpan.textContent) > 0) {
      quantitySpan.textContent = parseInt(quantitySpan.textContent) - 1;
      updateTotal();
    }
  });
});

// Gérer le bouton supprimer
document.querySelectorAll('.fa-trash-alt').forEach((btn) => {
  btn.addEventListener('click', function () {
    const cardBody = this.closest('.card-body');
    cardBody.remove();
    updateTotal();
  });
});

// Gérer le bouton j’aime
document.querySelectorAll('.fa-heart').forEach((btn) => {
  btn.addEventListener('click', function () {
    if (this.style.color === 'red') {
      this.style.color = 'black';
    } else {
      this.style.color = 'red';
    }
  });
});
