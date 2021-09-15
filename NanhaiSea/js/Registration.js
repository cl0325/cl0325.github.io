const verify = {
    // 检测内容是否为空
    isEmpty: function (str) {
        var str_trim = str.trim();
        // trim  去掉两边的空格
        return str_trim.length;
        // 检测内容是否为空
    },
    // 验证邮箱
    isEmail: function (str) {
        var str_trim = str.trim();
        // trim  去掉两边的空格
        var patten = /^[A-Za-z0-9\u4e00-\u9fa5]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)+$/;
        return patten.test(str_trim);
        // 验证邮箱
    },
    ispassword: function (str) {
        var str_trim = str.trim();
        // trim  去掉两边的空格
        var patten = /^(\w){6,20}$/;;
        return patten.test(str_trim);
        // 验证密码
    },
    isPhoneNumber: function (str) {
        var str_trim = str.trim();
        // trim  去掉两边的空格
        var patten = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        return patten.test(str_trim);
        // 验证手机号码
    },
    iscaptcha: function (str) {
        var str_trim = str.trim();
        // trim  去掉两边的空格
        var patten = /^\d{6}$/;
        return patten.test(str_trim);
        // 验证验证码
    },
    isname: function (str) {
        var str_trim = str.trim();
        // trim  去掉两边的空格
        var patten = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;
        return patten.test(str_trim);
        // 验证姓名
    },
    isidentityCard: function (str) {
        var str_trim = str.trim();
        // trim  去掉两边的空格
        var patten = /^(\d{18,18}|\d{15,15}|\d{17,17}X)$/;
        return patten.test(str_trim);
        // 验证身份证
    }

}


function Verify(el, reg, innerText) {
    var span = document.createElement('span');
    span.className = el + "box";
    span.style.fontSize = "12px"
    var el = document.getElementById(el);
    var isBool = null;
    el.onblur = function () {
        var isBool = verify[reg](this.value);
        if (!isBool) {
            this.style.border = "1px solid red";
            span.innerText = innerText;
            this.parentNode.appendChild(span);
            for (let index = 0; index < this.parentNode.parentNode.children.length; index++) {
                const element = this.parentNode.parentNode.children[index];
                if (element.children[0].nodeName === 'button') {
                    element.children[0].setAttribute('disabled', 'disabled')
                }
            }
            return false;
        } else {
            this.style.border = "1px solid green";
            span.innerText = '';

            for (let index = 0; index < this.parentNode.parentNode.children.length; index++) {
                const element = this.parentNode.parentNode.children[index];
                if (element.children[0].nodeName === 'button') {
                    element.children[0].removeAttribute('disabled')
                }
            }
        }
    }
}
Verify("nameValidation", "isname", "请输入正确的姓名");
Verify("identityCard", "isidentityCard", "身份证输入错误");
Verify("password", "ispassword", "密码错误");
Verify("cell", "isPhoneNumber", "手机号码错误");
Verify("securityCode", "iscaptcha", "验证码错误");
Verify("textareaBox", "isEmpty", "内容不能为空");

// 密码匹配
function passwordsMatch() {
    var inconformityBox = document.getElementById("inconformityBox");
    var confirmPassword = document.getElementById("confirmPassword");
    var password = document.getElementById("password");
    var inconformity = document.createElement("span");
    inconformity.id = "inconformitySpan"
    inconformityBox.appendChild(inconformity);
    inconformity.innerHTML= '';
    confirmPassword.onblur = function () {
        var x = confirmPassword.value;
        var y = password.value;
        if (x == y) {
    inconformity.innerHTML= '';
            confirmPassword.style.border = "1px solid green"
        } else {
            confirmPassword.style.border = "1px solid red";
            inconformity.innerHTML="两次密码输入不一致"
        }
    }
}
passwordsMatch()

function realName() {
    var realNameBox = document.getElementById("realNameBox");
    var nameValidation = document.getElementById("nameValidation");
    var realNameSpan = document.createElement("span");
    realNameSpan.id = "realNameSpan";
    realNameBox.appendChild(realNameSpan);

    var x = 0;
    realNameSpan.innerHTML = x + "/30";
    nameValidation.onkeyup = function () {
        x = nameValidation.value.length;
        realNameSpan.innerHTML = x + "/30";
    }
}
realName()

function identification() {
    var identificationBox = document.getElementById("identificationBox");
    var identityCard = document.getElementById("identityCard");
    var identificationSpan = document.createElement("span");
    identificationSpan.id = "identificationSpan"
    identificationBox.appendChild(identificationSpan);

    var x = 0;
    identificationSpan.innerHTML = x + "/18";
    identityCard.onkeyup = function () {
        x = identityCard.value.length;
        identificationSpan.innerHTML = x + "/18"
    }
}
identification()

function forPhone() {
    var cellBox = document.getElementById("cellBox");
    var cell = document.getElementById("cell");
    var cellSpan = document.createElement("span");
    cellSpan.id = "cellSpan";
    cellBox.appendChild(cellSpan);

    var x = 0;
    cellSpan.innerHTML = x + "/11";
    cell.onkeyup = function () {
        x = cell.value.length;
        cellSpan.innerHTML = x + "/11"
    }
}
forPhone()

function reasonApplication() {
    var detailedBox = document.getElementById("detailedBox");
    var textareaBox = document.getElementById("textareaBox");
    var detailedSpan = document.createElement("span");
    detailedSpan.id = "detailedSpan"
    detailedBox.appendChild(detailedSpan)

    var x = 0;
    detailedSpan.innerHTML = x + "/500";
    textareaBox.onkeyup = function () {
        x = textareaBox.value.length;
        detailedSpan.innerHTML = x + "/500"
    }
}
reasonApplication()