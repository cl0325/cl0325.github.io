function card() {
    var loginLeft = document.getElementById('loginLeft');
    var loginRight = document.getElementById('loginRight');
    var formBox = document.getElementById('formBox');
    var formBox2 = document.getElementById('formBox2');

    loginLeft.onclick = function () {
        formBox2.style.display = "none";
        formBox.style.display = "flex";
        loginRight.style.borderBottom = "none";
        loginLeft.style.borderBottom = "2px solid #409EFF";
        loginRight.style.color = "#303133";
        loginLeft.style.color = "#409EFF";
    }
    loginRight.onclick = function () {
        formBox.style.display = "none";
        formBox2.style.display = "flex";
        loginLeft.style.borderBottom = "none";
        loginRight.style.borderBottom = "2px solid #409EFF"
        loginLeft.style.color = "#303133";
        loginRight.style.color = "#409EFF";
    }
}
card()

function retrievePassword() {
    var forgetPassword = document.getElementsByClassName("forgetPassword")[0];
    var forget = document.getElementById('forget');
    var curtain = document.getElementsByClassName("curtain")[0];
    var rightClosed = document.getElementById("rightClosed");
    var x = document.documentElement.clientHeight || document.body.clientHeight;
    forget.onclick = function () {
        curtain.style.height = x;
        forgetPassword.style.display = "flex";
        curtain.style.display = "block";
        curtain.style.zIndex = "997";
    }
    var whetherShut = document.getElementsByClassName("whetherShut")[0];
    rightClosed.onclick = function () {
        curtain.style.zIndex = "999";
        whetherShut.style.display = "flex";
    }
    var callOff = document.getElementsByClassName("callOff")[0]
    callOff.onclick = function () {
        whetherShut.style.display = "none";
        curtain.style.zIndex = "997";
    }
    var determine = document.getElementsByClassName("determine")[0];
    determine.onclick = function () {
        whetherShut.style.display = "none";
        forgetPassword.style.display = "none";
        curtain.style.display = "none";
    }
    var shut = document.getElementsByClassName("shut")[0];
    shut.onclick = function () {
        whetherShut.style.display = "none";
        forgetPassword.style.zIndex = "1000";
    }
    var close = document.getElementsByClassName("close")[0];
    close.onclick = function () {
        curtain.style.zIndex = "999";
        whetherShut.style.display = "flex";
    }
}
retrievePassword()



// const verify = {
//     // ????????????????????????
//     isEmpty: function (str) {
//         var str_trim = str.trim();
//         // trim  ?????????????????????
//         return str_trim.length;
//         // ????????????????????????
//     },
//     // ????????????
//     isEmail: function (str) {
//         var str_trim = str.trim();
//         // trim  ?????????????????????
//         var patten = /^[A-Za-z0-9\u4e00-\u9fa5]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)+$/;
//         return patten.test(str_trim);
//         // ????????????
//     },
//     ispassword: function (str) {
//         var str_trim = str.trim();
//         // trim  ?????????????????????
//         var patten = /^(\w){6,20}$/;;
//         return patten.test(str_trim);
//         // ????????????
//     },
//     isPhoneNumber: function (str) {
//         var str_trim = str.trim();
//         // trim  ?????????????????????
//         var patten = /^[a-zA-z]\w{3,15}$/;
//         return patten.test(str_trim);
//         // ??????????????????
//     },
//     iscaptcha: function (str) {
//         var str_trim = str.trim();
//         // trim  ?????????????????????
//         var patten = /^\d{6}$/;
//         return patten.test(str_trim);
//         // ???????????????
//     }
// }

// function Verify(el, reg, innerText) {
//     var span = document.createElement('span');
//     span.className = el + "box";
//     span.style.fontSize = "12px"

//     var el = document.getElementById(el);
//     var isBool = null;
//     el.onblur = function () {
//         var isBool = verify[reg](this.value);
//         if (!isBool) {
//             this.style.border = "1px solid red";
//             span.innerText = innerText;
//             this.parentNode.appendChild(span);
//             for (let index = 0; index < this.parentNode.parentNode.children.length; index++) {
//                 const element = this.parentNode.parentNode.children[index];
//                 if (element.children[0].nodename === "BUTTON") {
//                     element.children[0].setAttribute('disabled', 'disabled')
//                 }
//             }
//             return false;
//         } else {
//             this.style.border = "1px solid green";
//             span.innerText = '';
//             for (let index = 0; index < this.parentNode.parentNode.children.length; index++) {
//                 const element = this.parentNode.parentNode.children[index];
//                 if (element.children[0].nodename === "BUTTON") {
//                     element.children[0].removeAttribute('disabled')
//                 }
//             }
//         }
//     }
// }
            


// Verify("username", "isPhoneNumber", "??????????????????????????????");
// Verify("password", "ispassword", "????????????????????????");
// Verify("mobileToken", "isPhoneNumber", "??????????????????????????????");
// Verify("VerificationCode", "iscaptcha", "???????????????");
// Verify("PasswordHint", "isPhoneNumber", "???????????????????????????????????????????????????????????????");
// Verify("getCode", "iscaptcha", "???????????????");
// Verify("setupPassword", "ispassword", "????????????");

// ????????????

function passwordsMatch() {
    var affirmPassword = document.getElementById("affirmPassword");
    var setupPassword = document.getElementById("setupPassword");
    var repeatPassword = document.getElementById("repeatPassword");
    var distinction = document.createElement("span");
    distinction.id = "distinction";
    affirmPassword.appendChild(distinction);
    distinction.innerHTML = '';
    repeatPassword.onblur = function () {
        var x = setupPassword.value;
        var y = repeatPassword.value;
        if (x == y) {
            distinction.innerHTML = '';
            repeatPassword.style.border = "1px solid green"
        } else {
            repeatPassword.style.border = "1px solid red"
            distinction.innerHTML = "???????????????????????????"
        }
    }

    // inconformity.innerHTML = '';
    // confirmPassword.onblur = function () {
    //     var x = confirmPassword.value;
    //     var y = password.value;
    //     if (x == y) {
    //         inconformity.innerHTML = '';
    //         confirmPassword.style.border = "1px solid green"
    //     } else {
    //         confirmPassword.style.border = "1px solid red";
    //         inconformity.innerHTML = "???????????????????????????"
    //     }
    // }
}
passwordsMatch()


// ??????????????????
function wordLimit() {
    var cellPhoneNumberBox = document.getElementsByClassName("cellPhoneNumberBox")[0];
    var username = document.getElementById("username");
    var worldLimit = document.createElement("span");
    worldLimit.id = "worldLimit";
    cellPhoneNumberBox.appendChild(worldLimit);
    var x = 0;
    worldLimit.innerHTML = x + "/11";
    username.onkeyup = function () {
        x = username.value.length;
        worldLimit.innerHTML = x + "/11";
    }
}
wordLimit()

function formBox2() {
    var formBox2 = document.getElementById("formBox2");
    var mobileToken = document.getElementById("mobileToken");
    var digitMobileToken = document.createElement("span");
    digitMobileToken.id = "digitMobileToken";
    formBox2.appendChild(digitMobileToken);

    var x = 0;
    digitMobileToken.innerHTML = x + "/11";
    mobileToken.onkeyup = function () {
        x = mobileToken.value.length;
        digitMobileToken.innerHTML = x + "/11";
    }
}
formBox2()


function passwordCell() {
    var retrieve = document.getElementById("retrieve");
    var PasswordHint = document.getElementById("PasswordHint");
    var passwordCell = document.createElement("span");
    passwordCell.id = "passwordCell";
    retrieve.appendChild(passwordCell);

    var x = 0;
    passwordCell.innerHTML = x + "/11";
    PasswordHint.onkeyup = function () {
        x = PasswordHint.value.length;
        passwordCell.innerHTML = x + "/11";
    }
}
passwordCell()

