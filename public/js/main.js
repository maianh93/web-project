// const windowExceptSubMenu= document.querySelectorAll("window:not(.menu-dropdown);(.user-dropdown)")

// Hiển thị sub-nav menu

const dropdownMenuBtnElement = document.getElementById("menu-nav-btn");
const dropdownMenuElement = document.querySelector(".menu-dropdown");
const windowElement = document.querySelector(".fake-face");



async function loadMainMenu() {
        try {
            console.log("ok")
            const res = await callGetAllCategoriesAPI();
            renderProductDropdown(filterNotPromotion(res.data))
            renderPromotion(filterPromotion(res.data))
            console.log(res.data)
        
        } catch (error) {
            console.log(error);
        }
    
}

const renderProductDropdown = (arr) => {
    if (arr.length == 0) {
        // mainMenuElement.innerHTML = "<li>Không có sản phẩm nào trong thực đơn</li>";
        return
    }
    let htmlContent = "";
    for (let i = 0; i < arr.length; i++) {
        let t = arr[i];

        htmlContent += `
        <a onclick="redirectPageDetail(${t.id}, '${t.descriptions.VN.text}')" class="dropdown-item">${t.descriptions.VN.text}</a>
        `
    }
    document.getElementById("product-dropdown").innerHTML = htmlContent;
}

const renderPromotion = (arr) => {
    if (arr.length == 0) {
        // mainMenuElement.innerHTML = "<li>Không có sản phẩm nào trong thực đơn</li>";
        return
    }
    let htmlContent = "";
    for (let i = 0; i < arr.length; i++) {
        let t = arr[i];

        htmlContent += `
        <a onclick="redirectPagePromotion(${t.id}, '${t.descriptions.VN.text}')" class="">Khuyến Mãi</a>
        `
    }
    document.getElementById("promotion-menu").innerHTML = htmlContent;
}

const redirectPageDetail = (categoryId, categoryName) => {
    window.location = `/page/detail-menu.html?id=${categoryId}&name=${categoryName}`;
}

const redirectPagePromotion = (categoryId, categoryName) => {
    window.location = `/page/promotion-menu.html?id=${categoryId}&name=${categoryName}`;
}


dropdownMenuBtnElement.addEventListener("click", () => {   
    dropdownMenuElement.classList.toggle("disable");
    windowElement.classList.remove("disable");
});

windowElement.addEventListener("click", () => {
    dropdownMenuElement.classList.add("disable");
    windowElement.classList.add("disable");
})


// Hiển thị sub-nav user
const dropdownUserBtnElement = document.getElementById("user-nav-btn");
const dropdownUserElement = document.querySelector(".user-dropdown");


dropdownUserBtnElement.addEventListener('click', () => {   
    dropdownUserElement.classList.toggle("disable");
    windowElement.classList.remove("disable");
});

windowElement.addEventListener("click", () => {
    dropdownUserElement.classList.add("disable");
    windowElement.classList.add("disable");
})

const filterNotPromotion = (obj) => {
    let result = [];
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].point > 0) {
            result.push(obj[i]);
        }
    }
    return result;
}

const filterPromotion = (obj) => {
    let result = [];
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].point < 0) {
            result.push(obj[i]);
        }
    }
    return result;
}

console.log(document.querySelector("log-out-btn"))
document.getElementById("log-out-btn").addEventListener("click", () => {
    localStorage.setItem("token", undefined)
})



loadMainMenu()