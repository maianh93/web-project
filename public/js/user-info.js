//Chi tiet TK

const updateBtnElement = document.getElementById("update-btn");
const firstNameInputElement = document.getElementById("firstname");
const lastNameInputElement = document.getElementById("lastname");
const addressInputElement = document.getElementById("address");
const emailInputElement = document.getElementById("email_address");
const phoneNumberInputElement = document.getElementById("phone_number");

console.log(firstNameInputElement)

//Ham xu ly viec get
function doGetUser(id, token) {
    callGetUserAPI(id, token)
    .then(res => {
        firstNameInputElement.value = res.data.firstName;
        lastNameInputElement.value = res.data.lastName;
        addressInputElement.value = res.data.address + " - " + res.data.ward + " - " + res.data.district + " - " + res.data.city + " - " + res.data.country;
        emailInputElement.value = localStorage.getItem("email");
        console.log(res.data);
    })
    .catch(err => {
        console.log(err.response.data);  
        console.log(err.response.status);  
        console.log(err.response.headers);
  })
}

//Ham xu ly viec update

function doUpdateUser(id, token, user) {
    callPostUpdateAPI(id, token, user)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err.response.data);  
        console.log(err.response.status);  
        console.log(err.response.headers);
    })
}

updateBtnElement.addEventListener("click", () => {
    let updateInfo = {
        firstName: firstNameInputElement.value,
        lastName: lastNameInputElement.value,
        address: addressInputElement.value,
        country: "Việt Nam",
        city: optionProvinceSelectionElement.value,
        district: optionDistrictSelectionElement.value,
        ward: optionWardsSelectionElement.value
    }
    doUpdateUser(localStorage.getItem("userId"), localStorage.getItem("token"), updateInfo);
})

doGetUser(localStorage.getItem("userId"), localStorage.getItem("token"))

//Lich su don hang