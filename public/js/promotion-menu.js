const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get('id');
const categoryName = urlParams.get('name');
const userId = localStorage.getItem("userId");

const numberFormater = new Intl.NumberFormat('de-DE');

async function loadPage() {
    try {
        const resProduct = await callGetProductsAPI(categoryId);
        console.log(resProduct.data)
        renderProduct(resProduct.data)
    } catch (error) {
        console.log(error);
    }
}

//render product
const renderProduct = (products) => {
    //Trường hợp mảng rỗng
    if (products.length == 0) {

        return
    }

    let numberOfCategory = products.length;
    let numberOfRow = Math.floor(numberOfCategory / 3 + 1);

    let innerHtmlMainMenuElement = "";
    let j = 0;
    for (let i = 0; i < numberOfRow; i++) {
        let innerHtmlRowTextCenterElement = "";

        for (; j < products.length; j++) {
            const t = products[j];
            // Clear nội dung
            innerHtmlRowTextCenterElement += `
            <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="detail-menu__card mx-auto mt-5">
                <div class="detail-menu__card-image">
                    <img src="${t.imageUrl}" alt="1mieng-gagionkhongcay">
                </div>
                <div class="detail-menu__info">
                    <h3 class="regular-text uppercase-text orange-text extra-bold-text mt-3">${t.descriptions.VN.text}</h3>
                    ${buildDescription(t.units.VN)}
                    <p class="extra-bold-text green-text pt-3">${numberFormater.format(t.prices.VND.price)}đ</p>
                </div>
                <div onclick="orderSingleProduct(${t.id}, '${t.descriptions.VN.text}', ${t.prices.VND.price} )" class="btn btn--red btn--order uppercase-text small-text bold-text mb-4">Đặt mua</div>
            </div>
        </div>
            `
        }
        
        innerHtmlMainMenuElement += `
        <div class="container mt-5">
            <div class="row text-center">
                ${innerHtmlRowTextCenterElement}
            </div>
        </div>
        `;
    }

    document.querySelector(".detail-menu").innerHTML = `
    <h2 class="extra-large-text red-text extra-bold-text uppercase-text text-center mt-5">${categoryName}</h2>
    ` + innerHtmlMainMenuElement;
}

const buildDescription = (obj) => {
    let a = "";
    a = obj.map(e => e.text).join(" + ");
        
    return `<p class="detail-menu__info-content small-text regular-bold-text grey-text pe-3 ps-3">${a}</p>`;
}


//Đặt mua
const orderSingleProduct = (id, productName, productPrice) => {
    let quantity = document.querySelector(".quantity-value>input");
    quantity.onchange = function(){
        document.getElementById("pop-up-price").innerHTML = `<div class="pop-up-price semi-large-text bold-text green-text">${numberFormater.format(productPrice*quantity.value)}đ</div>`
    }
    document.getElementById("add-to-cart").onclick = function() {
        let userId = localStorage.getItem("userId");
        let productId = id;
        let _quantity = quantity.value;
        callPostUpdateItemOrderAPI({
            userId,
            productId,
            quantity: _quantity
        })
        .then(res => {
            console.log(res.data)
        }

        )
        document.querySelector(".dialog-body").classList.add("disable");
        document.querySelector(".detail-menu").classList.remove("opacity-4")
    }

    let name = document.querySelector(".dialog-body__input-volumn-item");
    document.getElementById("pop-up-price").innerHTML = `<div class="pop-up-price semi-large-text bold-text green-text">${numberFormater.format(productPrice*quantity.value)}đ</div>`
    name.innerHTML = `<p class="white-text text-center semi-large-text bold-text pt-2">${productName}</p>`
    document.querySelector(".dialog-body").classList.remove("disable");
    document.querySelector(".detail-menu").classList.add("opacity-4")
}

const updateTotalProduct = (inc) => {
    // console.log("hi")
    let ele = document.querySelector(".quantity-value>input");
    let currentQtty = parseInt(ele.value);
    ele.value = Math.max(0, currentQtty + inc);
    ele.onchange();
    // console.log("ele: " + ele.value);

}


loadPage()