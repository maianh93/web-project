async function loadPage() {
    try {
        const res = await callGetAllCategoriesAPI();
        renderProduct(filterNotPromotion(res.data))
        console.log(res.data[0].id)
    } catch (error) {
        console.log(error);
    }
}

const renderProduct = (arr) => {
    //Trường hợp mảng rỗng
    if (arr.length == 0) {
        // mainMenuElement.innerHTML = "<li>Không có sản phẩm nào trong thực đơn</li>";
        return
    }

    let numberOfCategory = arr.length;
    let numberOfRow = Math.floor(numberOfCategory / 3 + 1);

    let innerHtmlMainMenuElement = "";
    let j = 0;
    for (let i = 0; i < numberOfRow; i++) {
        let innerHtmlRowTextCenterElement = "";

        for (; j < arr.length; j++) {
            const t = arr[j];
            // Clear nội dung
            innerHtmlRowTextCenterElement += `
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="main-menu__card-image">
                    <img src="${t.imageUrl}" alt="menu_gakhongxuong">
                </div>
                <div onclick="redirectPage1(${t.id}, '${t.descriptions.VN.text}')" class="btn btn--main-menu uppercase-text small-text bold-text">${t.descriptions.VN.text}</div>
            </div>
            `
        }
        
        innerHtmlMainMenuElement += `
        <div class="container">
            <div class="row text-center">
                ${innerHtmlRowTextCenterElement}
            </div>
        </div>
        `;
    }

    document.querySelector(".main-menu").innerHTML = `
        <h2 class="extra-large-text red-text extra-bold-text uppercase-text text-center">Thực đơn</h2>
    ` + innerHtmlMainMenuElement;
}




const redirectPage1 = (categoryId, categoryName) => {
    window.location = `/page/detail-menu.html?id=${categoryId}&name=${categoryName}`;
}

loadPage()