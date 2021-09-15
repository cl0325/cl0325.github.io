// 向给定ID的用户发起请求
axios.get('../NanhaiSea/json/production.json')
    .then(function (response) {
        var information = document.getElementsByClassName("information")[0];
        for (let index = 0; index < response.data.length; index++) {
            var cell = document.createElement("div");
            cell.className = "cell";
            // ---------------------------------------------
            var subjectName = document.createElement("div");
            subjectName.className ="subjectName";
            subjectName.innerHTML = response.data[index].name;
            // ---------------------------------------------
            var contacts = document.createElement("div");
            contacts.className = "contacts";
            contacts.innerHTML = response.data[index].linkman;
            // ---------------------------------------------
            var telephone  = document.createElement("div");
            telephone.className="telephone";
            telephone.innerHTML = response.data[index].phone;
            // ---------------------------------------------
            var sort = document.createElement("div");
            sort.className = "sort";
            sort.innerHTML = response.data[index].category;
            // ---------------------------------------------
            var tissue = document.createElement("div");
            tissue.className = "tissue";
            tissue.innerHTML = response.data[index].structure;
            // ---------------------------------------------
            var matrix = document.createElement("div");
            matrix.className = "matrix";
            matrix.innerHTML = response.data[index].base;
            // ---------------------------------------------
            var location = document.createElement("div");
            location.className ="location";
            location.innerHTML = response.data[index].site;
            // ---------------------------------------------
            var check = document.createElement("div");
            check.className = "check";
            check.innerHTML = `<button>查看</button><button>编辑</button>`
            information.appendChild(cell);
            cell.appendChild(subjectName);
            cell.appendChild(contacts);
            cell.appendChild(telephone);
            cell.appendChild(sort);
            cell.appendChild(tissue);
            cell.appendChild(matrix);
            cell.appendChild(location);
            cell.appendChild(check)
        }
    })
    .catch(function (error) {
        // 处理错误情况
        console.log(error);
    })
    .then(function () {
        // 总是会执行
    });


    axios.get('/NanhaiSea/json/Fishproduction.json')
    .then(function (response) {
        var fishProduction = document.getElementsByClassName("fishProduction")[0];
        for (let index = 0; index < response.data.length; index++) {
            var cell = document.createElement("div");
            cell.className = "cell";
            // ---------------------------------------------
            var subjectName = document.createElement("div");
            subjectName.className ="subjectName";
            subjectName.innerHTML = response.data[index].name;
            // ---------------------------------------------
            var contacts = document.createElement("div");
            contacts.className = "contacts";
            contacts.innerHTML = response.data[index].linkman;
            // ---------------------------------------------
            var telephone  = document.createElement("div");
            telephone.className="telephone";
            telephone.innerHTML = response.data[index].phone;
            // ---------------------------------------------
            var sort = document.createElement("div");
            sort.className = "sort";
            sort.innerHTML = response.data[index].category;
            // ---------------------------------------------
            var tissue = document.createElement("div");
            tissue.className = "tissue";
            tissue.innerHTML = response.data[index].structure;
            // ---------------------------------------------
            var matrix = document.createElement("div");
            matrix.className = "matrix";
            matrix.innerHTML = response.data[index].base;
            // ---------------------------------------------
            var location = document.createElement("div");
            location.className ="location";
            location.innerHTML = response.data[index].site;
            // ---------------------------------------------
            var check = document.createElement("div");
            check.className = "check";
            check.innerHTML = `<button>查看</button><button>编辑</button>`
            fishProduction.appendChild(cell);
            cell.appendChild(subjectName);
            cell.appendChild(contacts);
            cell.appendChild(telephone);
            cell.appendChild(sort);
            cell.appendChild(tissue);
            cell.appendChild(matrix);
            cell.appendChild(location);
            cell.appendChild(check)
        }
    })
    .catch(function (error) {
        // 处理错误情况
        console.log(error);
    })
    .then(function () {
        // 总是会执行
    });

    function acc (){
        var yield = document.getElementById("yield");
        var fishPondInfo = document.getElementById("fishPondInfo");
        var information = document.getElementsByClassName("information")[0];
        var fishProduction = document.getElementsByClassName("fishProduction")[0];

        yield.onclick = function(){
            information.style.display = "block";
            fishProduction.style.display = "none";
        }
        fishPondInfo.onclick = function(){
            information.style.display = "none";
            fishProduction.style.display = "block";
        }
       
    }
acc()
