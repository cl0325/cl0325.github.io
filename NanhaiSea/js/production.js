function acc() {
    var yield = document.getElementById("yield");
    var fishPondInfo = document.getElementById("fishPondInfo");
    var information = document.getElementsByClassName("information")[0];
    var fishProduction = document.getElementsByClassName("fishProduction")[0];

    yield.onclick = function () {
        information.style.display = "block";
        fishProduction.style.display = "none";
    }
    fishPondInfo.onclick = function () {
        information.style.display = "none";
        fishProduction.style.display = "block";
    }

}
acc()

function axs(num) {
    let data = new URLSearchParams()
    data.append("pageNumber", num)
    axios({
            params: data,
            url: "http://192.168.104.217:8280/rbac/data/subject/getSubjectInfoList",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTGV2ZWwiOjEsImFkbWluaXN0cmF0aXZlQ29kZSI6IjQ0MDYwNSIsInVzZXJfaWQiOjEsInVzZXJfbmFtZSI6ImFkbWluIiwic2NvcGUiOlsiYWxsIl0sImxvZ2luTmFtZSI6ImFkbWluIiwiVXNlcklkZW50aXR5IjpbIuWMuue6p-S_oeaBr-WRmCJdLCJleHAiOjE2NTc0NzM5ODcsImF1dGhvcml0aWVzIjpbIm1lbWJlcjptZW1iZXI6dXBkYXRlTWVtYmVyUGFzc3dvcmQiLCJnb29kczpnb29kczphZGRHb29kc0NhdGVnb3J5IiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHNDYXRlZ29yeSIsImdvb2RzOmdvb2RzOmFkZEdvb2RzQnJhbmQiLCJzbXM6c3lzbm90aWNlcmVjb3JkczpsaXN0Iiwic3lzOmNvbmZpZzpzYXZlIiwic3lzOmNvbmZpZzp1cGRhdGUiLCJnb29kczpnb29kczpnZXRTcGVjQW5kQnJhbmtMaXN0IiwiZ29vZHM6Z29vZHM6R29vZHNDcmVhdGVPclVwZGF0ZSIsIm1lbWJlcjptZW1iZXI6dXBkYXRlQ3VzdG9tZXJTZXJ2aWNlIiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNBdHRyaWJ1dGUiLCJzbXM6c3lzbm90aWNldGVtcGxhdGU6bGlzdCIsInN5czpyb2xlOmxpc3QiLCJtZW1iZXI6bWVtYmVycGFydG5lcjphdWRpdG9yIiwic3lzOm1lbnU6c2VsZWN0Iiwic3VwcGxpZXI6c3VwcGxpZXI6bGlzdCIsInN5czpzY2hlZHVsZTp1cGRhdGUiLCJzeXM6c2NoZWR1bGU6c2F2ZSIsIm1lbWJlcjptZW1iZXI6bWVtYmVyVW5Mb2NrIiwic21zOnN5c25vdGljZXRlbXBsYXRlOmRlbGV0ZSIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZTppbmZvIiwibWVtYmVyOm1lbWJlcjp1c2VyQ29tbWlzc2lvbldpdGhkcmF3TGlzdCIsInN5czpyb2xlOnNhdmUiLCJnb29kczpnb29kczp1cGRhdGVHb29kc0NhdGVnb3J5IiwibWVtYmVyOm1lbWJlcjphZGRNZW1iZXJBY2NvdW50Iiwic3lzOnNjaGVkdWxlOmxvZyIsIm1lbWJlcjptZW1iZXI6YWRkTWVtYmVyTGV2ZWwiLCJzeXM6cm9sZTp1cGRhdGUiLCJtZW1iZXI6bWVtYmVyOnVwZGF0ZU1lbWJlciIsInN5czpzY2hlZHVsZTpsaXN0IiwiZ29vZHM6Z29vZHM6Z29vZHNsaXN0IiwiZ29vZHM6Z29vZHM6Z29vZHNjYXRlZ29yeWxpc3QiLCJtZW1iZXI6bWVtYmVyOm1lbWJlckxvY2siLCJzeXM6dXNlcjpzYXZlIiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHNHcm91cCIsIm1lbWJlcjptZW1iZXJwYXJ0bmVyOmxpc3QiLCJzdXBwbGllcjpzdXBwbGllcjp1cGRhdGUiLCJzeXM6b3NzOmFsbCIsInN5czpzY2hlZHVsZTppbmZvIiwiZ29vZHM6Z29vZHM6YWRkR29vZHMiLCJnb29kczpnb29kczp1cGRhdGVHb29kc1NwZWMiLCJzeXM6bWVudTpkZWxldGUiLCJzeXM6bWVudTp1cGRhdGUiLCJnb29kczpnb29kczpnb29kc2dyb3VwbGlzdCIsInN5czpjb25maWc6aW5mbyIsImdvb2RzOmdvb2RzOmFkZEF0dHJpYnV0ZVNlcnZpY2UiLCJnb29kczpnb29kczpkZWxldGVHb29kc0JyYW5kIiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNCcmFuZCIsInN5c2NvbmZpZ3RocmVlOnN5c2NvbmZpZ3RocmVlOnNldFNtc1N5c0NvbmZpZ1RocmVlIiwibWVtYmVyOm1lbWJlcjphY2NvdW50bGlzdCIsInN5czptZW51Omxpc3QiLCJnb29kczpnb29kczpkZWxldGVBdHRyIiwic3lzY29uZmlndGhyZWU6c3lzY29uZmlndGhyZWU6Z2V0U3lzQ29uZmlnVGhyZWUiLCJzeXNjb25maWd0aHJlZTpzeXNjb25maWd0aHJlZTptZW1iZXJXaXRoZHJhd1NldHRpbmciLCJnb29kczpnb29kczphZGRHb29kc0dyb3VwIiwic3lzOnNjaGVkdWxlOnJlc3VtZSIsIm1lbWJlcjptZW1iZXI6bWVtYmVybGlzdCIsImdvb2RzOmdvb2RzOmRlbGV0ZUV2YWx1YXRlQWpheCIsImdvb2RzOmdvb2RzOmdvb2RzYnJhbmRsaXN0Iiwic3lzOnVzZXI6ZGVsZXRlIiwiZ29vZHM6Z29vZHM6YXR0cmlidXRlbGlzdCIsImdvb2RzOmdvb2RzOmdvb2Rzc3BlY2xpc3QiLCJnb29kczpnb29kczpzZXRFdmFsdXRlU2hvd1N0YXR1QWpheCIsInN5czpjb25maWc6bGlzdCIsInN5czptZW51OmluZm8iLCJzeXM6dXNlcjp1cGRhdGUiLCJnb29kczpnb29kczpkZWxldGVHb29kc1NwZWMiLCJnb29kczpnb29kczpnb29kc2NvbW1lbnQiLCJzeXM6cm9sZTpzZWxlY3QiLCJtZW1iZXI6bWVtYmVyOmFjY291bnRkZXRhaWwiLCJzeXM6dXNlcjpsaXN0Iiwic3lzOm1lbnU6c2F2ZSIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZTp1cGRhdGUiLCJnb29kczpnb29kczpNb2RpZnlHb29kc09mZmxpbmUiLCJnb29kczpnb29kczphZGRHb29kc1NwZWMiLCJzeXM6cm9sZTppbmZvIiwic3lzOnNjaGVkdWxlOmRlbGV0ZSIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZWl0ZW06Z2V0VGVtcGxhdGVJdGVtIiwibWVtYmVyOm1lbWJlcjpwb2ludGxpc3QiLCJnb29kczpnb29kczp1cGRhdGVHb29kc0dyb3VwIiwic3lzOnVzZXI6aW5mbyIsInN5czpjb25maWc6ZGVsZXRlIiwic3lzOnNjaGVkdWxlOnJ1biIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZTpzYXZlIiwic3VwcGxpZXI6c3VwcGxpZXI6ZGVsZXRlIiwic3lzOnJvbGU6ZGVsZXRlIiwibWVtYmVyOm1lbWJlcjpiYWxhbmNlTWVtYmVyQWNjb3VudCIsIm1lbWJlcjptZW1iZXI6dXBkYXRlTWVtYmVyTGV2ZWwiLCJzdXBwbGllcjpzdXBwbGllcjpzYXZlIiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHMiLCJtZW1iZXI6bWVtYmVyOm1lbWJlckxldmVsTGlzdCIsInN5czpzY2hlZHVsZTpwYXVzZSIsImdvb2RzOmdvb2RzOnJlcGx5RXZhbHVhdGVBamF4Iiwic3lzOmxvZzpsaXN0Il0sImp0aSI6IjY2MjFiNWU5LWM4NGItNDQxMC04ZDA3LThmNDIwZWU0YTlhYSIsImNsaWVudF9pZCI6ImNsaWVudCJ9.CaenaF3zeGQXMfvVzNxKPhdTkL0uQjyBTf9ns2nbHig"
            }
        }).then(function (res) {
            var informationList = document.getElementsByClassName("informationList")[0];
            informationList.innerHTML = '';
            for (let index = 0; index < 10; index++) {

                var cell = document.createElement("div");
                cell.className = "cell";
                // ---------------------------------------------
                var subjectName = document.createElement("div");
                subjectName.className = "subjectName";
                subjectName.innerHTML = res.data.data.list[index]["subjectName"];
                // ---------------------------------------------
                var contacts = document.createElement("div");
                contacts.className = "contacts";
                contacts.innerHTML = res.data.data.list[index]["subjectLinkman"];
                // ---------------------------------------------
                var telephone = document.createElement("div");
                telephone.className = "telephone";
                telephone.innerHTML = res.data.data.list[index]["subjectTele"];
                // ---------------------------------------------
                var sort = document.createElement("div");
                sort.className = "sort";
                sort.innerHTML = res.data.data.list[index]["subjectTypeName"];
                // ---------------------------------------------
                var tissue = document.createElement("div");
                tissue.className = "tissue";
                tissue.innerHTML = res.data.data.list[index]["subjectOrgCode"];
                // ---------------------------------------------
                var matrix = document.createElement("div");
                matrix.className = "matrix";
                matrix.innerHTML = res.data.data.list[index]["subjectBase"];
                // ---------------------------------------------
                var location = document.createElement("div");
                location.className = "location";
                location.innerHTML = res.data.data.list[index]["subjectAddr"];
                // ---------------------------------------------
                var check = document.createElement("div");
                check.className = "check";
                check.innerHTML = `<button>查看</button><button>编辑</button>`
                informationList.appendChild(cell);
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
        .catch(function (err) {
            // 处理错误情况
            console.log(err);
        })
}
axs(1)
var page_one = document.getElementsByClassName("page")[0];
page_one.style.background = "#0086ff"
page_one.onclick = function () {
    axs(1)
    $(this).css("background", "#0086FF");
      $(this).siblings().css("background", "#efefef");
}
var page_two = document.getElementsByClassName("page")[1];
page_two.onclick = function () {
    axs(2)
    $(this).css("background", "#0086FF");
      $(this).siblings().css("background", "#efefef");
}


function axstwo(num) {
    let data = new URLSearchParams()
    data.append("pageNumber", num)
    axios({
            params: data,
            url: "http://192.168.104.217:8280/rbac/data/LandInfo/getList",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTGV2ZWwiOjIsImFkbWluaXN0cmF0aXZlQ29kZSI6IjQ0MDYwNTAxMSIsInVzZXJfaWQiOjEsInVzZXJfbmFtZSI6ImFkbWluIiwic2NvcGUiOlsiYWxsIl0sImxvZ2luTmFtZSI6ImFhYSIsIlVzZXJJZGVudGl0eSI6WyLljLrnrqHnkIblkZgiXSwiZXhwIjoxNjU3MzI1NjYyLCJhdXRob3JpdGllcyI6WyJtZW1iZXI6bWVtYmVyOnVwZGF0ZU1lbWJlclBhc3N3b3JkIiwiZ29vZHM6Z29vZHM6YWRkR29vZHNDYXRlZ29yeSIsImdvb2RzOmdvb2RzOmRlbGV0ZUdvb2RzQ2F0ZWdvcnkiLCJnb29kczpnb29kczphZGRHb29kc0JyYW5kIiwic21zOnN5c25vdGljZXJlY29yZHM6bGlzdCIsInN5czpjb25maWc6c2F2ZSIsInN5czpjb25maWc6dXBkYXRlIiwiZ29vZHM6Z29vZHM6Z2V0U3BlY0FuZEJyYW5rTGlzdCIsImdvb2RzOmdvb2RzOkdvb2RzQ3JlYXRlT3JVcGRhdGUiLCJtZW1iZXI6bWVtYmVyOnVwZGF0ZUN1c3RvbWVyU2VydmljZSIsImdvb2RzOmdvb2RzOnVwZGF0ZUdvb2RzQXR0cmlidXRlIiwic21zOnN5c25vdGljZXRlbXBsYXRlOmxpc3QiLCJzeXM6cm9sZTpsaXN0IiwibWVtYmVyOm1lbWJlcnBhcnRuZXI6YXVkaXRvciIsInN5czptZW51OnNlbGVjdCIsInN1cHBsaWVyOnN1cHBsaWVyOmxpc3QiLCJzeXM6c2NoZWR1bGU6dXBkYXRlIiwic3lzOnNjaGVkdWxlOnNhdmUiLCJtZW1iZXI6bWVtYmVyOm1lbWJlclVuTG9jayIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZTpkZWxldGUiLCJzbXM6c3lzbm90aWNldGVtcGxhdGU6aW5mbyIsIm1lbWJlcjptZW1iZXI6dXNlckNvbW1pc3Npb25XaXRoZHJhd0xpc3QiLCJzeXM6cm9sZTpzYXZlIiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNDYXRlZ29yeSIsIm1lbWJlcjptZW1iZXI6YWRkTWVtYmVyQWNjb3VudCIsInN5czpzY2hlZHVsZTpsb2ciLCJtZW1iZXI6bWVtYmVyOmFkZE1lbWJlckxldmVsIiwic3lzOnJvbGU6dXBkYXRlIiwibWVtYmVyOm1lbWJlcjp1cGRhdGVNZW1iZXIiLCJzeXM6c2NoZWR1bGU6bGlzdCIsImdvb2RzOmdvb2RzOmdvb2RzbGlzdCIsImdvb2RzOmdvb2RzOmdvb2RzY2F0ZWdvcnlsaXN0IiwibWVtYmVyOm1lbWJlcjptZW1iZXJMb2NrIiwic3lzOnVzZXI6c2F2ZSIsImdvb2RzOmdvb2RzOmRlbGV0ZUdvb2RzR3JvdXAiLCJtZW1iZXI6bWVtYmVycGFydG5lcjpsaXN0Iiwic3VwcGxpZXI6c3VwcGxpZXI6dXBkYXRlIiwic3lzOm9zczphbGwiLCJzeXM6c2NoZWR1bGU6aW5mbyIsImdvb2RzOmdvb2RzOmFkZEdvb2RzIiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNTcGVjIiwic3lzOm1lbnU6ZGVsZXRlIiwic3lzOm1lbnU6dXBkYXRlIiwiZ29vZHM6Z29vZHM6Z29vZHNncm91cGxpc3QiLCJzeXM6Y29uZmlnOmluZm8iLCJnb29kczpnb29kczphZGRBdHRyaWJ1dGVTZXJ2aWNlIiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHNCcmFuZCIsImdvb2RzOmdvb2RzOnVwZGF0ZUdvb2RzQnJhbmQiLCJzeXNjb25maWd0aHJlZTpzeXNjb25maWd0aHJlZTpzZXRTbXNTeXNDb25maWdUaHJlZSIsIm1lbWJlcjptZW1iZXI6YWNjb3VudGxpc3QiLCJzeXM6bWVudTpsaXN0IiwiZ29vZHM6Z29vZHM6ZGVsZXRlQXR0ciIsInN5c2NvbmZpZ3RocmVlOnN5c2NvbmZpZ3RocmVlOmdldFN5c0NvbmZpZ1RocmVlIiwic3lzY29uZmlndGhyZWU6c3lzY29uZmlndGhyZWU6bWVtYmVyV2l0aGRyYXdTZXR0aW5nIiwiZ29vZHM6Z29vZHM6YWRkR29vZHNHcm91cCIsInN5czpzY2hlZHVsZTpyZXN1bWUiLCJtZW1iZXI6bWVtYmVyOm1lbWJlcmxpc3QiLCJnb29kczpnb29kczpkZWxldGVFdmFsdWF0ZUFqYXgiLCJnb29kczpnb29kczpnb29kc2JyYW5kbGlzdCIsInN5czp1c2VyOmRlbGV0ZSIsImdvb2RzOmdvb2RzOmF0dHJpYnV0ZWxpc3QiLCJnb29kczpnb29kczpnb29kc3NwZWNsaXN0IiwiZ29vZHM6Z29vZHM6c2V0RXZhbHV0ZVNob3dTdGF0dUFqYXgiLCJzeXM6Y29uZmlnOmxpc3QiLCJzeXM6bWVudTppbmZvIiwic3lzOnVzZXI6dXBkYXRlIiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHNTcGVjIiwiZ29vZHM6Z29vZHM6Z29vZHNjb21tZW50Iiwic3lzOnJvbGU6c2VsZWN0IiwibWVtYmVyOm1lbWJlcjphY2NvdW50ZGV0YWlsIiwic3lzOnVzZXI6bGlzdCIsInN5czptZW51OnNhdmUiLCJzbXM6c3lzbm90aWNldGVtcGxhdGU6dXBkYXRlIiwiZ29vZHM6Z29vZHM6TW9kaWZ5R29vZHNPZmZsaW5lIiwiZ29vZHM6Z29vZHM6YWRkR29vZHNTcGVjIiwic3lzOnJvbGU6aW5mbyIsInN5czpzY2hlZHVsZTpkZWxldGUiLCJzbXM6c3lzbm90aWNldGVtcGxhdGVpdGVtOmdldFRlbXBsYXRlSXRlbSIsIm1lbWJlcjptZW1iZXI6cG9pbnRsaXN0IiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNHcm91cCIsInN5czp1c2VyOmluZm8iLCJzeXM6Y29uZmlnOmRlbGV0ZSIsInN5czpzY2hlZHVsZTpydW4iLCJzbXM6c3lzbm90aWNldGVtcGxhdGU6c2F2ZSIsInN1cHBsaWVyOnN1cHBsaWVyOmRlbGV0ZSIsInN5czpyb2xlOmRlbGV0ZSIsIm1lbWJlcjptZW1iZXI6YmFsYW5jZU1lbWJlckFjY291bnQiLCJtZW1iZXI6bWVtYmVyOnVwZGF0ZU1lbWJlckxldmVsIiwic3VwcGxpZXI6c3VwcGxpZXI6c2F2ZSIsImdvb2RzOmdvb2RzOmRlbGV0ZUdvb2RzIiwibWVtYmVyOm1lbWJlcjptZW1iZXJMZXZlbExpc3QiLCJzeXM6c2NoZWR1bGU6cGF1c2UiLCJnb29kczpnb29kczpyZXBseUV2YWx1YXRlQWpheCIsInN5czpsb2c6bGlzdCJdLCJqdGkiOiIwMDQzYTc1OS1kNDljLTQwNTEtYTg3Yi0zNDRjMTg1ZjMwNTAiLCJjbGllbnRfaWQiOiJjbGllbnQifQ.UdLIbQIYeVxouyABCY-T2UZ_4KVvca789SjCAEBTG3I"
            }
        }).then(function (res) {
            console.log(res.data.data);
            var fishProductionList = document.getElementsByClassName("fishProductionList")[0];
            fishProductionList.innerHTML = ''
            for (let index = 0; index < 10; index++) {
                var cell = document.createElement("div");
                cell.className = "cell";
                // ---------------------------------------------
                var patternSpot = document.createElement("div");
                patternSpot.className = "patternSpot";
                patternSpot.innerHTML = res.data.data.list[index]["landCode"];
                // ---------------------------------------------
                var plotPondName = document.createElement("div");
                plotPondName.className = "plotPondName";
                plotPondName.innerHTML = res.data.data.list[index]["landName"];
                // ---------------------------------------------
                var streetTown = document.createElement("div");
                streetTown.className = "streetTown";
                streetTown.innerHTML = res.data.data.list[index]["landTownName"];
                // ---------------------------------------------
                var aVillageScene = document.createElement("div");
                aVillageScene.className = "aVillageScene";
                aVillageScene.innerHTML = res.data.data.list[index]["landVillageName"];
                // ---------------------------------------------
                var areaOfMu = document.createElement("div");
                areaOfMu.className = "areaOfMu";
                areaOfMu.innerHTML = res.data.data.list[index]["mu"];
                // ---------------------------------------------
                var plotType = document.createElement("div");
                plotType.className = "plotType";
                plotType.innerHTML = res.data.data.list[index]["landTypeName"];
                // ---------------------------------------------
                var belongingMainBody = document.createElement("div");
                belongingMainBody.className = "belongingMainBody";
                belongingMainBody.innerHTML = res.data.data.list[index]["subjectNames"];
                // ---------------------------------------------
                var farmProductsClassify = document.createElement("div");
                farmProductsClassify.className = "farmProductsClassify";
                farmProductsClassify.innerHTML = res.data.data.list[index]["landProductName"]
                // ---------------------------------------------
                var variety = document.createElement("div");
                variety.className = "variety";
                variety.innerHTML = res.data.data.list[index]["landOtherType"]
                // ---------------------------------------------
                var check = document.createElement("div");
                check.className = "check";
                check.innerHTML = `<button>查看</button>`
                // ---------------------------------------------
                fishProductionList.appendChild(cell);
                cell.appendChild(patternSpot);
                cell.appendChild(plotPondName);
                cell.appendChild(streetTown);
                cell.appendChild(aVillageScene);
                cell.appendChild(areaOfMu);
                cell.appendChild(plotType);
                cell.appendChild(belongingMainBody);
                cell.appendChild(farmProductsClassify);
                cell.appendChild(variety);
                cell.appendChild(check);
            }
        })
        .catch(function (err) {
            // 处理错误情况
            console.log(err);
        })
        .then(function () {
            // 总是会执行
        });
}
axstwo(1)

var page_one = document.getElementsByClassName("pagetwo")[0];
page_one.style.background = "#0086ff"
page_one.onclick = function () {
    axstwo(1)
    $(this).css("background", "#0086FF");
      $(this).siblings().css("background", "#efefef");
}
var page_two = document.getElementsByClassName("pagetwo")[1];
page_two.onclick = function () {
    axstwo(2)
    $(this).css("background", "#0086FF");
      $(this).siblings().css("background", "#efefef");
}

