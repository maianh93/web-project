const updateCartItemCount = () => {
    let number = localStorage.getItem("cartItemCount");
    let element = document.querySelector(".count-cart-item");
    element.innerHTML = number;
};