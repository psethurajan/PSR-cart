function getWishlist() {
  let data = localStorage.getItem("psrcard_wishlist");
  return data ? JSON.parse(data) : [];
}

function saveWishlist(list) {
  localStorage.setItem("psrcard_wishlist", JSON.stringify(list));
}

function toggleWishlist(productId) {
  let wishlist = getWishlist();
  let exists   = wishlist.find(item => item.id === productId);

  if (exists) {
    wishlist = wishlist.filter(item => item.id !== productId);
    showToast("Removed from wishlist");
  } else {
    let product = products.find(p => p.id === productId);
    wishlist.push(product);
    showToast(product.title + " added to wishlist!");
  }

  saveWishlist(wishlist);
  updateWishlistCount();
  return !exists;
}

function isInWishlist(productId) {
  let wishlist = getWishlist();
  return wishlist.some(item => item.id === productId);
}

function updateWishlistCount() {
  let wishlist = getWishlist();
  let badge    = document.getElementById("wishlist-count");
  if (badge) badge.textContent = wishlist.length;
}
