//API tinh - huyen - xa
function callGetProvinceAPI() {
    return axios({
        method: "get",
        url: "https://provinces.open-api.vn/api/p/"

    })
}

function callGetDictrictsAPI(provinceCode) {
    return axios({
        method: "get",
        url: `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`
    })
}

function callGetWardsAPI(districtCode) {
    return axios({
        method: "get",
        url: `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`
    })
}

//API dang ky - dang nhap

function callPostSignUpAPI(user) {
    return axios({
        method: "post",
        url:"http://phungmaianh.ddns.net/pfc/auth/sign-up",
        data: user
    })
}

function callPostLoginAPI(user) {
    return axios({
        method: "post",
        url: "http://phungmaianh.ddns.net/pfc/auth/session/login",
        data: user
    })
}

function callPostUpdateAPI(id, token, user) {
    return axios({
        method: "post",
        headers: {Authorization : `Bearer ${token}`},
        url: `http://phungmaianh.ddns.net/pfc/auth/user/${id}`,
        data: user
    })
}

function callGetUserAPI(id, token) {
    return axios({
        method: "get",
        headers: {Authorization : `Bearer ${token}`},
        url: `http://phungmaianh.ddns.net/pfc/auth/user/${id}`
    })
}


//API main-menu

function callGetAllCategoriesAPI() {
    return axios({
        method: "get",
        url: `http://phungmaianh.ddns.net/pfc/biz/categories/search/byIsActive?isActive=Y`
    })
}

//API detail-menu
function callGetProductsAPI(categoryId) {
    return axios({
        method: "get",
        url: `http://phungmaianh.ddns.net/pfc/biz/products/search/byCategoryId?categoryId=${categoryId}`
    })
}

function callGetProductByIdAPI(id) {
    return axios({
        method: "get",
        url: `http://phungmaianh.ddns.net/pfc/biz/products/${id}`
    })
}

//API promotion-product
function callGetPromotionProductsAPI(id) {
    return axios({
        method: "get",
        url: `http://phungmaianh.ddns.net/pfc/biz/categories/promotion`
    })
}

//API shopping-cart
function callGetAllOrderByUserIdAPI(userId) {
    return axios({
        method: "get",
        url: `http://phungmaianh.ddns.net/pfc/biz/orders/search/byUserId?userId=${userId}`
    })
}

function callPostUpdateItemOrderAPI(itemInfo) {
    return axios({
        method: "put",
        url: `http://phungmaianh.ddns.net/pfc/biz/orders/save/item`,
        data: itemInfo
    })
}

function callGetOrderByUserIdAndStaTusAPI(userId) {
    return axios({
        method: "get",
        url: ` http://phungmaianh.ddns.net/pfc/biz/orders/search/byUserIdAndStatus?userId=${userId}&status=ACTIVE`
    })
}

// axios.interceptors.request.use(request => {
//     console.log('Starting Request', JSON.stringify(request, null, 2))
//     return request
//   })
  
// axios.interceptors.response.use(response => {
// console.log('Response:', JSON.stringify(response, null, 2))
// return response
// })