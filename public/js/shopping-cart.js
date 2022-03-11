let products = [
    {
        id: 1,
        name: "COMBO GÀ GIÒN KHÔNG XƯƠNG (3 MIẾNG)",
        description: [
            "3 miếng gà giòn không xương",
            "1 salad bắp cải",
            "1 sprite/coca/fanta"
        ],
        image: "../public/image/detail-menu/ga-gion-khong-xuong/combo-3pc-ga-gion-k-xuong.jpg",
        price: 69000,
        total: 0
    },
    {
        id: 2,
        name: "COMBO GÀ GIÒN CAY (3 MIẾNG)",
        description: [
            "3 miếng gà giòn cay",
            "1 khoai tây chiên (nhỏ)",
            "1 sprite/coca/fanta"
        ],
        image: "../public/image/detail-menu/ga-gion-cay/gacay_combo3mieng_1.jpg",
        price: 115000,
        total: 0
    },
    {
        id: 3,
        name: "COMBO GÀ GIÒN CAY (3 MIẾNG)",
        description : [
            "3 miếng gà giòn không xương",
            "3 miếng gà giòn không xương"
        ],
        image: "../public/image/detail-menu/ga-gion-cay/gacay_combo3mieng_1.jpg",
        price: 115000,
        total: 0
    }
]

async function buildShopingCart (userId) {
    products.length = 0;
    callGetOrderByUserIdAndStaTusAPI(userId)
        .then(res => {
            let data = res.data;
            console.log("callGetOrderByUserIdAndStaTusAPI: " + JSON.stringify(data));
            let items = data[0].items;
            let promiseProducts = [];
            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                let total = item.quantity;
                if (!total || total <= 0)
                    continue;
                let id = item.id;
                let promiseProduct = callGetProductByIdAPI(item.productId)
                    .then(res => {
                        let product = res.data;
                        let name = product.descriptions.VN.text;
                        let description = product.units.VN.map(e => e.text);
                        let image = product.imageUrl;
                        let price = product.prices.VND.price;
                        let productId = item.productId;

                        let p = {
                            id,
                            name,
                            description,
                            image,
                            price,
                            total,
                            productId
                        };
                        return p;
                    })
                    .catch(error => {
                        console.log(error);
                        return {};
                    });
                promiseProducts.push(promiseProduct);
            }
            return Promise.all(promiseProducts);        
        })
        .then(ps => {
            ps.forEach(p => {
                products.push(p);
            });
        })
        .then(e => {
            // console.log(products);
            renderProduct(products);
        })
        .catch(error => {
            console.log(error);
        });        
}

let promotionCode = {
    PLUTO5: 0.05,
    PLUTO20: 0.2,
    PLUTO15: 0.15,
    PLUTO10: 0.1,
}

const numberFormater = new Intl.NumberFormat('de-DE');
const shoppingCartElement = document.querySelector(".shopping-cart");
// const notionalPriceElement = document.querySelector(".notional-price");
// const singlePriceElement = document.querySelector(".single-price");
const promotionElement = document.querySelector(".promotion");
const summaryElement = document.querySelector(".summary");
const inputQuantityElement = document.querySelector("input");
const plusBtnElement = document.querySelectorAll(".fa-plus-square");
const summaryUlElement = document.querySelector(".summary ul");
const inputCodeElement = document.getElementById("promo-code");
const btnElement = document.querySelector(".promotion button");
const discountElement = document.querySelector(".discount.disable")

let discountRate = 0;

// Render danh sách sản phẩm ra ngoài giao diện
const renderProduct = (arr) => {
    //B1: Xóa hết nội dung trước khi render
    shoppingCartElement.innerHTML = "";

    //Trường hợp mảng rỗng
    if (arr.length == 0) {
        shoppingCartElement.innerHTML = "<li class='text-center red-text semi-large-text' style='list-style-type: none'>Không có sản phẩm nào trong giỏ hàng</li>";
        promotionElement.style.display = "none";
        summaryElement.style.display = "none";
        document.getElementById("confirm-container").classList.add("disable");
        // totalProductsElement.style.display = "none";
        return
    }

    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        const details = buildDescription(t.description);
        // Clear nội dung
        shoppingCartElement.innerHTML += `
        <div class="container single-product mt-5">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-12">
                    <div class="image">
                        <img src=${t.image}>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="info mt-2">
                        <h4 class="info-name orange-text extra-bold-text semi-large-text uppercase-text">${t.name}</h3>
                            <div class="detail ps-2">
                                ${details}
                            </div>
                            <p class="single-price ps-2 bold-text small-text green-text">${numberFormater.format(t.price)}</p>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-12 text-center">
                    <div class="quantity">
                        <div class="d-flex">
                            <div class="quantity-icon">
                                <i class="far fa-minus-square extra-bold-text orange-text fa-2x" onclick="updateTotalProduct(${t.id}, -1); renderProduct(products);"></i>
                            </div>
                            <div class="quantity-value" onchange="changeTotalProduct(${t.id}, event)">
                                <input id="input_qtty_${t.id}" class="orange-text extra-bold-text" type="text" value="${t.total}">
                            </div>
                            <div class="quantity-icon">
                                <i class="far fa-plus-square extra-bold-text orange-text fa-2x" onclick="updateTotalProduct(${t.id}, 1); renderProduct(products);"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-12 text-center">
                    <div class="total-notional-price pt-5">
                        <span class="notional-price pt-2 bold-text semi-large-text red-text">${numberFormater.format(t.total * t.price)}đ</span>
                    </div>
                </div>
                <div class="col-lg-1 col-md-1 col-sm-12 text-center">
                    <div class="remove pt-5">
                        <span class="close" onclick="deleteProduct(${t.id})">
                            <i class="fas fa-trash black-text fa-2x"></i>
                        </span>
                    </div>
                </div>

            </div>
        </div>
        `
    }
    updateTotalProduct(products)
    updateTotalMoney(products)
}

// In ra màn hình description

const buildDescription = (arr) => {
    let a = "";
    for (let i = 0; i < arr.length; i++) {
            a += `<p class="black-text bold-text small-text">${arr[i]}</p>`
    }
    return a;
}

// Thay đổi số lượng của item
// Cách 1
// const updateTotalProduct = (inputQttyId, inc) => {
//     console.log("hi")
//     let ele = document.getElementById(inputQttyId);
//     let currentQtty = parseInt(ele.value);
//     ele.value = Math.max(0, currentQtty + inc);
    
//     console.log("inputQttyId: " + inputQttyId);
//     console.log("ele: " + ele.value);

// }

// Cách 2: Thay đổi số lượng của item và Thay đổi tổng tiền 1 sản phẩm
const updateTotalProduct = (id, inc) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) { 
            let currentQtty = products[i].total;
            products[i].total = Math.max(0, currentQtty+= inc);
            let itemInfo = {
                userId: localStorage.getItem("userId"),
                productId: products[i].productId,
                quantity: products[i].total
            };
            callPostUpdateItemOrderAPI(itemInfo);
            return;
        }
    }    
}


// Thay đổi số lượng của item khi nhập số
const changeTotalProduct = (id, event) => {
    // Lấy giá trị trong ô input dựa vào biến event trong hàm xử lý sự kiện
    let inputQuantityValue = parseInt(event.target.value);
    // Duyệt mảng products để tìm sản phẩm thay đổi
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].total = inputQuantityValue;
            let itemInfo = {
                userId: localStorage.getItem("userId"),
                productId: products[i].productId,
                quantity: products[i].total
            };
            callPostUpdateItemOrderAPI(itemInfo);
        }
    }
    // Render lại giao diện sau khi xóa
    renderProduct(products)
}

// Thay đổi tổng tiền 1 sản phẩm
// const updateSingleMoney = (id) => {
//     let singleTotal = 0;
//     let currentQtty = parseInt(ele.value);
    
//     return singleTotal = currentQtty * price;
// }

// Xóa sản phẩm
const deleteProduct = (id) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            let itemInfo = {
                userId: localStorage.getItem("userId"),
                productId: products[i].productId,
                quantity: 0
            };
            products.splice(i, 1);
            callPostUpdateItemOrderAPI(itemInfo);
        }
    }
    renderProduct(products)
}

// Tính tổng tiền
const updateTotalMoney = (arr) => {
    // Tính tổng tiền subtotal
    // subtotal = Số lượng * đơn giá
    let subTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        subTotal += products[i].total * products[i].price;
    }

    // Tính thuế giá trị gia tăng
    // VAT = 10% của subtotal
    let vatTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        vatTotal = 0.1 * subTotal;
    }

    // Kiểm tra xem mã giảm giá có chính xác hay không
    // Nếu có => discount = subtotal * (% mã giảm giá)
    // Nếu không => discount = 0
    // Ẩn hiện class "hide" nếu discount chính xác hoặc không
    let discountRate = getDiscountRate();
    let discountTotal = discountRate * subTotal;
    let hideClass = discountRate == 0 ? " disable" : "";
    // Tính tổng tiền phải trả
    // total = subtotal + VAT - discount
    let totalMoney = subTotal + vatTotal - discountTotal;

    // let hideClass = discountRate == 0 ? " hide" : "";

    // Cập nhật lên trên giao diện
    summaryUlElement.innerHTML = "";

    summaryUlElement.innerHTML += `
    <li class="subtotal extra-bold-text">TỔNG CỘNG <span class="extra-bold-text red-text amount-of-money">${numberFormater.format(subTotal)} VND</span>
    </li>
    <li class="vat">VAT<span class="red-text amount-of-money">${numberFormater.format(vatTotal)} VND</span></li>
    <li class="discount ${hideClass}">
            GIẢM GIÁ (- ${discountRate * 100}%)<span class="red-text amount-of-money">- ${numberFormater.format(discountTotal)} VND</span>
    </li>
    <li class="total">TỔNG THANH TOÁN <span class="red-text amount-of-money">${numberFormater.format(totalMoney)} VND</span></li>
    ` + `<div id="confirm-container" class="container">
    <div class="row pt-5 pb-5">
        <div class="continue-order col-lg-6 col-md-6 col-sm-12">
            <a href="../page/main-menu.html"><div class="btn btn--white uppercase-text">Tiếp tục đặt hàng</div></a>
        </div>
        <div class="confirm-btn col-lg-6 col-md-6 col-sm-12">
            <a href="../page/checkout.html"><div id="confirm-btn" class="btn btn--orange float-end uppercase-text">Thanh toán</div></a>
        </div>
    </div>
</div>`
}

const checkPromoCodeValue = () => {
    let inputPromodCode = inputCodeElement.value;
    let rate = promotionCode[inputPromodCode];
    if (!rate) {
        alert("Ma giam gia khong phu hop!");
        discountRate = 0;
    } else {
        discountRate = rate;
    }
    updateTotalMoney(products);
}

const getDiscountRate = () => {
    return discountRate;
}

btnElement.addEventListener("click", checkPromoCodeValue);
buildShopingCart(localStorage.getItem("userId"))

document.getElementById("confirm-btn").addEventListener("click", {
    
})
