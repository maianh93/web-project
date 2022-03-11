let stores = [
    {
        id: 1,
        name: "PLUTO LÒ ĐÚC",
        province: "HN",
        address: "255 Lò Đúc, Đống Mác, Hai Bà Trưng, Hà Nội",
        image: "../public/image/cua-hang/pluto-hn/pluto-loduc.png",
        googlemap: "https://www.google.com/maps/place/255+P.+L%C3%B2+%C4%90%C3%BAc,+%C4%90%E1%BB%91ng+M%C3%A1c,+Hai+B%C3%A0+Tr%C6%B0ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0092595,105.8588974,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abf65669ea1b:0xf1bfaf5c721f8d9b!8m2!3d21.0092545!4d105.8610861?hl=vi-VN"
    },
    {
        id: 2,
        name: "PLUTO HỒ ĐẮC DI",
        province: "HN",
        address: "25 Hồ Đắc Di, Q. Đống Đa, Hà Nội",
        image: "../public/image/cua-hang/pluto-hn/pluto-hodacdi.png",
        googlemap: "https://www.google.com/maps/place/25+P.+H%E1%BB%93+%C4%90%E1%BA%AFc+Di,+Nam+%C4%90%E1%BB%93ng,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0116623,105.8280991,17z/data=!3m1!4b1!4m9!1m2!2m1!1zMjUgSOG7kyDEkOG6r2MgRGksIFEuxJDhu5FuZyDEkGEsIEjDoCBO4buZaQ!3m5!1s0x3135ab8037e5b2d1:0x764e93193ed712db!8m2!3d21.0116573!4d105.8302878!15sCisyNSBI4buTIMSQ4bqvYyBEaSwgUS7EkOG7kW5nIMSQYSwgSMOgIE7hu5lpkgEQZ2VvY29kZWRfYWRkcmVzcw?hl=vi-VN"
    },
    {
        id: 3,
        name: "PLUTO VŨ TÔNG PHAN",
        province: "HN",
        address: "326 Vũ Tông Phan, Khương Đình, Thanh Xuân, Hà Nội",
        image: "../public/image/cua-hang/pluto-hn/pluto-vutongphan.jpg",
        googlemap: "https://www.google.com/maps/place/326+P.+V%C5%A9+T%C3%B4ng+Phan,+Kh%C6%B0%C6%A1ng+%C4%90%C3%ACnh,+Thanh+Xu%C3%A2n,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.9817614,105.8152924,17z/data=!3m1!4b1!4m5!3m4!1s0x3135acf201b1b087:0x939e7c2bc00fee82!8m2!3d20.9817564!4d105.8174811?hl=vi-VN"
    },
    {
        id: 4,
        name: "PLUTO TIMES CITY",
        province: "HN",
        address: "T5, 458 P. Minh Khai, Vĩnh Phú, Hai Bà Trưng, Hà Nội",
        image: "../public/image/cua-hang/pluto-hn/pluto-timescity.jpg",
        googlemap: "https://www.google.com/maps/place/Times+city/@20.9956038,105.8666324,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ad7c2bd7b9ad:0x324e84fd6d12f1c9!8m2!3d20.9955988!4d105.8688211?hl=vi-VN"
    },
    {
        id: 5,
        name: "PLUTO LÊ DUẨN",
        province: "HN",
        address: "119 Đường Lê Duẩn, Nguyễn Du, Đống Đa, Hà Nội",
        image: "../public/image/cua-hang/pluto-hn/pluto-leduan.jpg",
        googlemap: "https://www.google.com/maps/place/119+%C4%90.+L%C3%AA+Du%E1%BA%A9n,+Kh%C3%A2m+Thi%C3%AAn,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0184547,105.8389402,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab8ff2c5b65b:0xd1ecd6f21041d34!8m2!3d21.0184497!4d105.8411289?hl=vi-VN"
    },
    {
        id: 6,
        name: "PLUTO BÀ HOM",
        province: "HCM",
        address: "175 Bà Hom, Phường 13, Quận 6, Tp. HCM",
        image: "../public/image/cua-hang/pluto-hn/pluto-vutongphan.jpg",
        googlemap: "https://www.google.com/maps/place/175+B%C3%A0+Hom,+Ph%C6%B0%E1%BB%9Dng+13,+Qu%E1%BA%ADn+6,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7551363,106.6261742,17z/data=!3m1!4b1!4m5!3m4!1s0x31752c29f783bbb9:0xa18df002214482e8!8m2!3d10.755131!4d106.6283629?hl=vi-VN"
    },
    {
        id: 7,
        name: "PLUTO ÂU CƠ",
        province: "HCM",
        address: "48/7 Âu Cơ, Phường 5, Quận 11, Tp. HCM",
        image: "../public/image/cua-hang/pluto-hn/pluto-hodacdi.png",
        googlemap: "https://www.google.com/maps/place/48%2F7+%C3%82u+C%C6%A1,+Ph%C6%B0%E1%BB%9Dng+9,+T%C3%A2n+B%C3%ACnh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7714921,106.648175,17z/data=!3m1!4b1!4m5!3m4!1s0x31752ebfb7d88849:0xdd58a4f6b41bc0f0!8m2!3d10.7714868!4d106.6503637?hl=vi-VN"
    },
    {
        id: 8,
        name: "PLUTO TRẦN HƯNG ĐẠO",
        province: "HCM",
        address: "291 Trần Hưng Đạo, Phường Nguyễn Cư Trinh, Quận 1, Tp. HCM",
        image: "../public/image/cua-hang/pluto-hn/pluto-loduc.png",
        googlemap: "https://www.google.com/maps/place/291+%C4%90.+Tr%E1%BA%A7n+H%C6%B0ng+%C4%90%E1%BA%A1o,+Ph%C6%B0%E1%BB%9Dng+C%C3%B4+Giang,+Qu%E1%BA%ADn+1,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7626583,106.6887812,17z/data=!3m1!4b1!4m5!3m4!1s0x31752f172a6ee19f:0xade6f93667e94838!8m2!3d10.762653!4d106.6909699?hl=vi-VN"
    },
    {
        id: 9,
        name: "PLUTO LOTTE ĐÀ NẴNG",
        province: "DN",
        address: "Siêu thị Lotte Đà Nẵng, P. Hòa Cường Bắc, Q. Hải Châu, TP Đà Nẵng",
        image: "../public/image/cua-hang/pluto-hn/pluto-timescity.jpg",
        googlemap: "https://www.google.com/maps/place/Lotte+Mart+%C4%90%C3%A0+N%E1%BA%B5ng/@16.0348369,108.2269446,17z/data=!3m1!4b1!4m5!3m4!1s0x314219e42bd859f1:0x59203ba8579a98a5!8m2!3d16.0345781!4d108.2290194?hl=vi-VN"
    },
    {
        id: 10,
        name: "PLUTO ĐIỆN BIÊN PHỦ",
        province: "DN",
        address: "89 Điện Biên Phủ, Quận Thanh Khê, Tp. Đà Nẵng",
        image: "../public/image/cua-hang/pluto-hn/pluto-leduan.jpg",
        googlemap: "https://www.google.com/maps/place/89+%C4%90i%E1%BB%87n+Bi%C3%AAn+Ph%E1%BB%A7,+Ch%C3%ADnh+Gi%C3%A1n,+Thanh+Kh%C3%AA,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vi%E1%BB%87t+Nam/@16.065408,108.1980668,17z/data=!3m1!4b1!4m5!3m4!1s0x314219ad313d02bf:0xeb1c431ba6b64a5f!8m2!3d16.0654029!4d108.2002555?hl=vi-VN"
    }
]

const hnOptionElement = document.getElementById("hn-option-store");
const hcmOptionElement = document.getElementById("hcm-option-store");
const dnOptionElement = document.getElementById("dn-option-store");
const allOptionElement = document.getElementById("all-option-store");
const pageTitleElement = document.getElementsByClassName("page_title");
console.log(allOptionElement)

// Hàm filter
const filterStoreByProvince = (arr, province) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].province == province) {
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(filterStoreByProvince(stores, "HN"))

// Render
const renderAllStore = (arr, province) => {

    document.getElementById("right-side").innerHTML = "";
    //Trường hợp mảng rỗng
    if (arr.length == 0) {

        return
    }

    let numberOfStore = arr.length;
    let numberOfRow = Math.floor(numberOfStore / 2 + 1);

    let innerHtmlMainMenuElement = "";
    let j = 0;
    for (let i = 0; i < numberOfRow; i++) {
        let innerHtmlRowTextCenterElement = "";

        for (; j < arr.length; j++) {
            const t = arr[j];
            // Clear nội dung
            innerHtmlRowTextCenterElement += `
            <div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="store__card">
                                    <div class="store__card-image">
                                        <img src="${t.image}" alt="">
                                    </div>
                                    <div class="store__card-detail text-center">
                                        <h3 class="red-text semi-large-text">${t.name}</h3>
                                        <p class="black-text regular-text">${t.address}
                                        </p>
                                        <p class="grey-text semi-large-text">9:00 - 22:00</p>
                                        <a href="${t.googlemap}" target="blank"><div class="btn btn--orange small-text mb-5">XEM BẢN ĐỒ</div> </a>
                                    </div>
                                </div>
                            </div>
            `
        }
        
        innerHtmlMainMenuElement += `
        <div class="container">
            <div class="row">
                ${innerHtmlRowTextCenterElement}
            </div>
        </div>
        `;
    }

    document.getElementById("right-side").innerHTML = `
    <h3 class="page_title pb-5">Khám phá <span>${numberOfStore}</span> cửa hàng của chúng tôi <span>${province}</span></h3>
    ` + innerHtmlMainMenuElement;
}


allOptionElement.addEventListener("click", () => {
    renderAllStore(stores, "trên toàn quốc");
    document.querySelector("#all-option-store > a").classList.add("red-text","bold-text")
    document.querySelector("#all-option-store > a").classList.remove("black-text")
    document.querySelector("#hn-option-store > a").classList.remove("red-text","bold-text")
    document.querySelector("#hn-option-store > a").classList.add("black-text")
    document.querySelector("#hcm-option-store > a").classList.remove("red-text","bold-text")
    document.querySelector("#hcm-option-store > a").classList.add("black-text")
    document.querySelector("#dn-option-store > a").classList.remove("red-text","bold-text")
    document.querySelector("#dn-option-store > a").classList.add("black-text")
})

hnOptionElement.addEventListener("click", () => {
    let filteredStore = filterStoreByProvince(stores,"HN");
    renderAllStore(filteredStore, "tại Thành phố Hà Nội");
    document.querySelector("#all-option-store > a").classList.remove("red-text","bold-text")
    document.querySelector("#all-option-store > a").classList.add("black-text")
    document.querySelector("#hn-option-store > a").classList.add("red-text","bold-text")
    document.querySelector("#hn-option-store > a").classList.remove("black-text")
    document.querySelector("#hcm-option-store > a").classList.remove("red-text","bold-text")
    document.querySelector("#hcm-option-store > a").classList.add("black-text")
    document.querySelector("#dn-option-store > a").classList.remove("red-text","bold-text")
    document.querySelector("#dn-option-store > a").classList.add("black-text")
})

hcmOptionElement.addEventListener("click", () => {
    let filteredStore = filterStoreByProvince(stores,"HCM");
    renderAllStore(filteredStore, "tại Thành phố Hồ Chí Minh");
    document.querySelector("#all-option-store > a").classList.remove("red-text","bold-text")
    document.querySelector("#all-option-store > a").classList.add("black-text")
    document.querySelector("#hn-option-store > a").classList.remove("red-text","bold-text")
    document.querySelector("#hn-option-store > a").classList.add("black-text")
    document.querySelector("#hcm-option-store > a").classList.add("red-text","bold-text")
    document.querySelector("#hcm-option-store > a").classList.remove("black-text")
    document.querySelector("#dn-option-store > a").classList.remove("red-text","bold-text")
    document.querySelector("#dn-option-store > a").classList.add("black-text")
})

dnOptionElement.addEventListener("click", () => {
    let filteredStore = filterStoreByProvince(stores,"DN");
    renderAllStore(filteredStore, "tại Thành phố Đà Nẵng");
    document.querySelector("#all-option-store > a").classList.remove("red-text","bold-text")
    document.querySelector("#all-option-store > a").classList.add("black-text")
    document.querySelector("#hn-option-store > a").classList.remove("red-text","bold-text")
    document.querySelector("#hn-option-store > a").classList.add("black-text")
    document.querySelector("#hcm-option-store > a").classList.remove("red-text","bold-text")
    document.querySelector("#hcm-option-store > a").classList.add("black-text")
    document.querySelector("#dn-option-store > a").classList.add("red-text","bold-text")
    document.querySelector("#dn-option-store > a").classList.remove("black-text")
})

renderAllStore(stores, "trên toàn quốc")