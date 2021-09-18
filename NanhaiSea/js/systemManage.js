axios.defaults.baseURL = 'http://127.0.0.1:5500/';
function cut() {
    var button1 = document.getElementsByClassName("button1")[0];
    var button2 = document.getElementsByClassName("button2")[0];
    var button3 = document.getElementsByClassName("button3")[0];
    var button4 = document.getElementsByClassName("button4")[0];
    var newTissue = document.getElementsByClassName("newTissue")[0];
    var personnel = document.getElementsByClassName("personnel")[0];
    var userManage = document.getElementsByClassName("userManage")[0];
    var registrationAudit = document.getElementsByClassName("registrationAudit")[0];

    function all(btn, box) {
        btn.onclick = function () {
            $(this).css("color", "#0086ff")
            $(this).siblings().css("color", "black")
            box.style.display = "flex";
            $(box).siblings().css("display", "none");
        }
    }
    all(button1, newTissue)
    all(button2, personnel)
    all(button3, userManage)
    all(button4, registrationAudit)
}
cut()

function axs() {
    axios({
            url: "http://192.168.104.217:8280/rbac/data/subject/getSubjectInfoList",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTGV2ZWwiOjEsImFkbWluaXN0cmF0aXZlQ29kZSI6IjQ0MDYwNSIsInVzZXJfaWQiOjEsInVzZXJfbmFtZSI6ImFkbWluIiwic2NvcGUiOlsiYWxsIl0sImxvZ2luTmFtZSI6ImFkbWluIiwiVXNlcklkZW50aXR5IjpbIuWMuue6p-S_oeaBr-WRmCJdLCJleHAiOjE2NTc0NzM5ODcsImF1dGhvcml0aWVzIjpbIm1lbWJlcjptZW1iZXI6dXBkYXRlTWVtYmVyUGFzc3dvcmQiLCJnb29kczpnb29kczphZGRHb29kc0NhdGVnb3J5IiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHNDYXRlZ29yeSIsImdvb2RzOmdvb2RzOmFkZEdvb2RzQnJhbmQiLCJzbXM6c3lzbm90aWNlcmVjb3JkczpsaXN0Iiwic3lzOmNvbmZpZzpzYXZlIiwic3lzOmNvbmZpZzp1cGRhdGUiLCJnb29kczpnb29kczpnZXRTcGVjQW5kQnJhbmtMaXN0IiwiZ29vZHM6Z29vZHM6R29vZHNDcmVhdGVPclVwZGF0ZSIsIm1lbWJlcjptZW1iZXI6dXBkYXRlQ3VzdG9tZXJTZXJ2aWNlIiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNBdHRyaWJ1dGUiLCJzbXM6c3lzbm90aWNldGVtcGxhdGU6bGlzdCIsInN5czpyb2xlOmxpc3QiLCJtZW1iZXI6bWVtYmVycGFydG5lcjphdWRpdG9yIiwic3lzOm1lbnU6c2VsZWN0Iiwic3VwcGxpZXI6c3VwcGxpZXI6bGlzdCIsInN5czpzY2hlZHVsZTp1cGRhdGUiLCJzeXM6c2NoZWR1bGU6c2F2ZSIsIm1lbWJlcjptZW1iZXI6bWVtYmVyVW5Mb2NrIiwic21zOnN5c25vdGljZXRlbXBsYXRlOmRlbGV0ZSIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZTppbmZvIiwibWVtYmVyOm1lbWJlcjp1c2VyQ29tbWlzc2lvbldpdGhkcmF3TGlzdCIsInN5czpyb2xlOnNhdmUiLCJnb29kczpnb29kczp1cGRhdGVHb29kc0NhdGVnb3J5IiwibWVtYmVyOm1lbWJlcjphZGRNZW1iZXJBY2NvdW50Iiwic3lzOnNjaGVkdWxlOmxvZyIsIm1lbWJlcjptZW1iZXI6YWRkTWVtYmVyTGV2ZWwiLCJzeXM6cm9sZTp1cGRhdGUiLCJtZW1iZXI6bWVtYmVyOnVwZGF0ZU1lbWJlciIsInN5czpzY2hlZHVsZTpsaXN0IiwiZ29vZHM6Z29vZHM6Z29vZHNsaXN0IiwiZ29vZHM6Z29vZHM6Z29vZHNjYXRlZ29yeWxpc3QiLCJtZW1iZXI6bWVtYmVyOm1lbWJlckxvY2siLCJzeXM6dXNlcjpzYXZlIiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHNHcm91cCIsIm1lbWJlcjptZW1iZXJwYXJ0bmVyOmxpc3QiLCJzdXBwbGllcjpzdXBwbGllcjp1cGRhdGUiLCJzeXM6b3NzOmFsbCIsInN5czpzY2hlZHVsZTppbmZvIiwiZ29vZHM6Z29vZHM6YWRkR29vZHMiLCJnb29kczpnb29kczp1cGRhdGVHb29kc1NwZWMiLCJzeXM6bWVudTpkZWxldGUiLCJzeXM6bWVudTp1cGRhdGUiLCJnb29kczpnb29kczpnb29kc2dyb3VwbGlzdCIsInN5czpjb25maWc6aW5mbyIsImdvb2RzOmdvb2RzOmFkZEF0dHJpYnV0ZVNlcnZpY2UiLCJnb29kczpnb29kczpkZWxldGVHb29kc0JyYW5kIiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNCcmFuZCIsInN5c2NvbmZpZ3RocmVlOnN5c2NvbmZpZ3RocmVlOnNldFNtc1N5c0NvbmZpZ1RocmVlIiwibWVtYmVyOm1lbWJlcjphY2NvdW50bGlzdCIsInN5czptZW51Omxpc3QiLCJnb29kczpnb29kczpkZWxldGVBdHRyIiwic3lzY29uZmlndGhyZWU6c3lzY29uZmlndGhyZWU6Z2V0U3lzQ29uZmlnVGhyZWUiLCJzeXNjb25maWd0aHJlZTpzeXNjb25maWd0aHJlZTptZW1iZXJXaXRoZHJhd1NldHRpbmciLCJnb29kczpnb29kczphZGRHb29kc0dyb3VwIiwic3lzOnNjaGVkdWxlOnJlc3VtZSIsIm1lbWJlcjptZW1iZXI6bWVtYmVybGlzdCIsImdvb2RzOmdvb2RzOmRlbGV0ZUV2YWx1YXRlQWpheCIsImdvb2RzOmdvb2RzOmdvb2RzYnJhbmRsaXN0Iiwic3lzOnVzZXI6ZGVsZXRlIiwiZ29vZHM6Z29vZHM6YXR0cmlidXRlbGlzdCIsImdvb2RzOmdvb2RzOmdvb2Rzc3BlY2xpc3QiLCJnb29kczpnb29kczpzZXRFdmFsdXRlU2hvd1N0YXR1QWpheCIsInN5czpjb25maWc6bGlzdCIsInN5czptZW51OmluZm8iLCJzeXM6dXNlcjp1cGRhdGUiLCJnb29kczpnb29kczpkZWxldGVHb29kc1NwZWMiLCJnb29kczpnb29kczpnb29kc2NvbW1lbnQiLCJzeXM6cm9sZTpzZWxlY3QiLCJtZW1iZXI6bWVtYmVyOmFjY291bnRkZXRhaWwiLCJzeXM6dXNlcjpsaXN0Iiwic3lzOm1lbnU6c2F2ZSIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZTp1cGRhdGUiLCJnb29kczpnb29kczpNb2RpZnlHb29kc09mZmxpbmUiLCJnb29kczpnb29kczphZGRHb29kc1NwZWMiLCJzeXM6cm9sZTppbmZvIiwic3lzOnNjaGVkdWxlOmRlbGV0ZSIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZWl0ZW06Z2V0VGVtcGxhdGVJdGVtIiwibWVtYmVyOm1lbWJlcjpwb2ludGxpc3QiLCJnb29kczpnb29kczp1cGRhdGVHb29kc0dyb3VwIiwic3lzOnVzZXI6aW5mbyIsInN5czpjb25maWc6ZGVsZXRlIiwic3lzOnNjaGVkdWxlOnJ1biIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZTpzYXZlIiwic3VwcGxpZXI6c3VwcGxpZXI6ZGVsZXRlIiwic3lzOnJvbGU6ZGVsZXRlIiwibWVtYmVyOm1lbWJlcjpiYWxhbmNlTWVtYmVyQWNjb3VudCIsIm1lbWJlcjptZW1iZXI6dXBkYXRlTWVtYmVyTGV2ZWwiLCJzdXBwbGllcjpzdXBwbGllcjpzYXZlIiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHMiLCJtZW1iZXI6bWVtYmVyOm1lbWJlckxldmVsTGlzdCIsInN5czpzY2hlZHVsZTpwYXVzZSIsImdvb2RzOmdvb2RzOnJlcGx5RXZhbHVhdGVBamF4Iiwic3lzOmxvZzpsaXN0Il0sImp0aSI6IjY2MjFiNWU5LWM4NGItNDQxMC04ZDA3LThmNDIwZWU0YTlhYSIsImNsaWVudF9pZCI6ImNsaWVudCJ9.CaenaF3zeGQXMfvVzNxKPhdTkL0uQjyBTf9ns2nbHig"
            }
        }).then(function (res) {
            var informationContent = document.getElementsByClassName("informationContent")[0];
            informationContent.innerHTML = '';
            for (let index = 0; index < 5; index++) {

                var cell = document.createElement("div");
                cell.className = "cell";
                // ---------------------------------------------
                var sequence = document.createElement("div");
                sequence.className = "sequence";
                sequence.innerHTML = res.data.data.list[index]["subjectName"];
                // ---------------------------------------------
                var partNumber = document.createElement("div");
                partNumber.className = "partNumber";
                partNumber.innerHTML = res.data.data.list[index]["subjectLinkman"];
                // ---------------------------------------------
                var partName = document.createElement("div");
                partName.className = "partName";
                partName.innerHTML = res.data.data.list[index]["subjectTele"];
                // ---------------------------------------------
                var creationTime = document.createElement("div");
                creationTime.className = "creationTime";
                creationTime.innerHTML = res.data.data.list[index]["subjectTypeName"];
                // ---------------------------------------------
                var creator = document.createElement("div");
                creator.className = "creator";
                creator.innerHTML = res.data.data.list[index]["subjectOrgCode"];
                // ---------------------------------------------
                var valid = document.createElement("div");
                valid.className = "valid";
                valid.innerHTML = res.data.data.list[index]["subjectBase"];
                // ---------------------------------------------
                var roleDescription = document.createElement("div");
                roleDescription.className = "roleDescription";
                roleDescription.innerHTML = res.data.data.list[index]["subjectAddr"];
                // ---------------------------------------------
                var check = document.createElement("div");
                check.className = "check";
                check.innerHTML = `<button>查看</button><button>编辑</button>`
                informationContent.appendChild(cell);
                cell.appendChild(sequence);
                cell.appendChild(partNumber);
                cell.appendChild(partName);
                cell.appendChild(creationTime);
                cell.appendChild(creator);
                cell.appendChild(valid);
                cell.appendChild(roleDescription);
                cell.appendChild(check)
            }
        })
        .catch(function (err) {
            // 处理错误情况
            console.log(err);
        })
}
axs()

function manageuser() {
    axios({
        url: "http://192.168.104.217:8280/rbac/data/subject/getSubjectInfoList",
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTGV2ZWwiOjEsImFkbWluaXN0cmF0aXZlQ29kZSI6IjQ0MDYwNSIsInVzZXJfaWQiOjEsInVzZXJfbmFtZSI6ImFkbWluIiwic2NvcGUiOlsiYWxsIl0sImxvZ2luTmFtZSI6ImFkbWluIiwiVXNlcklkZW50aXR5IjpbIuWMuue6p-S_oeaBr-WRmCJdLCJleHAiOjE2NTc0NzM5ODcsImF1dGhvcml0aWVzIjpbIm1lbWJlcjptZW1iZXI6dXBkYXRlTWVtYmVyUGFzc3dvcmQiLCJnb29kczpnb29kczphZGRHb29kc0NhdGVnb3J5IiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHNDYXRlZ29yeSIsImdvb2RzOmdvb2RzOmFkZEdvb2RzQnJhbmQiLCJzbXM6c3lzbm90aWNlcmVjb3JkczpsaXN0Iiwic3lzOmNvbmZpZzpzYXZlIiwic3lzOmNvbmZpZzp1cGRhdGUiLCJnb29kczpnb29kczpnZXRTcGVjQW5kQnJhbmtMaXN0IiwiZ29vZHM6Z29vZHM6R29vZHNDcmVhdGVPclVwZGF0ZSIsIm1lbWJlcjptZW1iZXI6dXBkYXRlQ3VzdG9tZXJTZXJ2aWNlIiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNBdHRyaWJ1dGUiLCJzbXM6c3lzbm90aWNldGVtcGxhdGU6bGlzdCIsInN5czpyb2xlOmxpc3QiLCJtZW1iZXI6bWVtYmVycGFydG5lcjphdWRpdG9yIiwic3lzOm1lbnU6c2VsZWN0Iiwic3VwcGxpZXI6c3VwcGxpZXI6bGlzdCIsInN5czpzY2hlZHVsZTp1cGRhdGUiLCJzeXM6c2NoZWR1bGU6c2F2ZSIsIm1lbWJlcjptZW1iZXI6bWVtYmVyVW5Mb2NrIiwic21zOnN5c25vdGljZXRlbXBsYXRlOmRlbGV0ZSIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZTppbmZvIiwibWVtYmVyOm1lbWJlcjp1c2VyQ29tbWlzc2lvbldpdGhkcmF3TGlzdCIsInN5czpyb2xlOnNhdmUiLCJnb29kczpnb29kczp1cGRhdGVHb29kc0NhdGVnb3J5IiwibWVtYmVyOm1lbWJlcjphZGRNZW1iZXJBY2NvdW50Iiwic3lzOnNjaGVkdWxlOmxvZyIsIm1lbWJlcjptZW1iZXI6YWRkTWVtYmVyTGV2ZWwiLCJzeXM6cm9sZTp1cGRhdGUiLCJtZW1iZXI6bWVtYmVyOnVwZGF0ZU1lbWJlciIsInN5czpzY2hlZHVsZTpsaXN0IiwiZ29vZHM6Z29vZHM6Z29vZHNsaXN0IiwiZ29vZHM6Z29vZHM6Z29vZHNjYXRlZ29yeWxpc3QiLCJtZW1iZXI6bWVtYmVyOm1lbWJlckxvY2siLCJzeXM6dXNlcjpzYXZlIiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHNHcm91cCIsIm1lbWJlcjptZW1iZXJwYXJ0bmVyOmxpc3QiLCJzdXBwbGllcjpzdXBwbGllcjp1cGRhdGUiLCJzeXM6b3NzOmFsbCIsInN5czpzY2hlZHVsZTppbmZvIiwiZ29vZHM6Z29vZHM6YWRkR29vZHMiLCJnb29kczpnb29kczp1cGRhdGVHb29kc1NwZWMiLCJzeXM6bWVudTpkZWxldGUiLCJzeXM6bWVudTp1cGRhdGUiLCJnb29kczpnb29kczpnb29kc2dyb3VwbGlzdCIsInN5czpjb25maWc6aW5mbyIsImdvb2RzOmdvb2RzOmFkZEF0dHJpYnV0ZVNlcnZpY2UiLCJnb29kczpnb29kczpkZWxldGVHb29kc0JyYW5kIiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNCcmFuZCIsInN5c2NvbmZpZ3RocmVlOnN5c2NvbmZpZ3RocmVlOnNldFNtc1N5c0NvbmZpZ1RocmVlIiwibWVtYmVyOm1lbWJlcjphY2NvdW50bGlzdCIsInN5czptZW51Omxpc3QiLCJnb29kczpnb29kczpkZWxldGVBdHRyIiwic3lzY29uZmlndGhyZWU6c3lzY29uZmlndGhyZWU6Z2V0U3lzQ29uZmlnVGhyZWUiLCJzeXNjb25maWd0aHJlZTpzeXNjb25maWd0aHJlZTptZW1iZXJXaXRoZHJhd1NldHRpbmciLCJnb29kczpnb29kczphZGRHb29kc0dyb3VwIiwic3lzOnNjaGVkdWxlOnJlc3VtZSIsIm1lbWJlcjptZW1iZXI6bWVtYmVybGlzdCIsImdvb2RzOmdvb2RzOmRlbGV0ZUV2YWx1YXRlQWpheCIsImdvb2RzOmdvb2RzOmdvb2RzYnJhbmRsaXN0Iiwic3lzOnVzZXI6ZGVsZXRlIiwiZ29vZHM6Z29vZHM6YXR0cmlidXRlbGlzdCIsImdvb2RzOmdvb2RzOmdvb2Rzc3BlY2xpc3QiLCJnb29kczpnb29kczpzZXRFdmFsdXRlU2hvd1N0YXR1QWpheCIsInN5czpjb25maWc6bGlzdCIsInN5czptZW51OmluZm8iLCJzeXM6dXNlcjp1cGRhdGUiLCJnb29kczpnb29kczpkZWxldGVHb29kc1NwZWMiLCJnb29kczpnb29kczpnb29kc2NvbW1lbnQiLCJzeXM6cm9sZTpzZWxlY3QiLCJtZW1iZXI6bWVtYmVyOmFjY291bnRkZXRhaWwiLCJzeXM6dXNlcjpsaXN0Iiwic3lzOm1lbnU6c2F2ZSIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZTp1cGRhdGUiLCJnb29kczpnb29kczpNb2RpZnlHb29kc09mZmxpbmUiLCJnb29kczpnb29kczphZGRHb29kc1NwZWMiLCJzeXM6cm9sZTppbmZvIiwic3lzOnNjaGVkdWxlOmRlbGV0ZSIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZWl0ZW06Z2V0VGVtcGxhdGVJdGVtIiwibWVtYmVyOm1lbWJlcjpwb2ludGxpc3QiLCJnb29kczpnb29kczp1cGRhdGVHb29kc0dyb3VwIiwic3lzOnVzZXI6aW5mbyIsInN5czpjb25maWc6ZGVsZXRlIiwic3lzOnNjaGVkdWxlOnJ1biIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZTpzYXZlIiwic3VwcGxpZXI6c3VwcGxpZXI6ZGVsZXRlIiwic3lzOnJvbGU6ZGVsZXRlIiwibWVtYmVyOm1lbWJlcjpiYWxhbmNlTWVtYmVyQWNjb3VudCIsIm1lbWJlcjptZW1iZXI6dXBkYXRlTWVtYmVyTGV2ZWwiLCJzdXBwbGllcjpzdXBwbGllcjpzYXZlIiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHMiLCJtZW1iZXI6bWVtYmVyOm1lbWJlckxldmVsTGlzdCIsInN5czpzY2hlZHVsZTpwYXVzZSIsImdvb2RzOmdvb2RzOnJlcGx5RXZhbHVhdGVBamF4Iiwic3lzOmxvZzpsaXN0Il0sImp0aSI6IjY2MjFiNWU5LWM4NGItNDQxMC04ZDA3LThmNDIwZWU0YTlhYSIsImNsaWVudF9pZCI6ImNsaWVudCJ9.CaenaF3zeGQXMfvVzNxKPhdTkL0uQjyBTf9ns2nbHig"
        }
    })
        .then(function (response) {
            // 处理成功情况
            var manageUserx = document.getElementsByClassName("manage-user")[0];
            for (let index = 0; index < data.list.length; index++) {
                var manageCell = document.createElement("div");
                manageCell.className = "manageCell"

                var userId = document.createElement("div");
                userId.className = "userId";
                userId.innerHTML= response.data.data.list[index]["subjectName"];

                var loginID = document.createElement("div");
                loginID.className = "loginID";
                loginID.innerHTML= response.data.data.list[index]["subjectName"];

                var manageName = document.createElement("div");
                manageName.className = "manageName";
                manageName.innerHTML= response.data.data.list[index]["subjectName"];

                var manageCellphone = document.createElement("div");
                manageCellphone.className = "manage-cellphone";
                manageCellphone.innerHTML= response.data.data.list[index]["subjectName"];

                var manageDepartment = document.createElement("div");
                manageDepartment.className = "manage-department";
                manageDepartment.innerHTML= response.data.data.list[index]["subjectName"];

                var manageState = document.createElement("div");
                manageState.className = "manage-state";
                manageState.innerHTML=response.data.data.list[index]["subjectName"];

                var managebutton = document.createElement("div");
                managebutton.className = "managebutton";
                managebutton.innerHTML = `<button>查看</button><button>删除</button><button>编辑</button>`



                manageUserx.appendChild(manageCell)
                manageCell.appendChild(userId)
                manageCell.appendChild(loginID)
                manageCell.appendChild(manageName)
                manageCell.appendChild(manageCellphone)
                manageCell.appendChild(manageDepartment)
                manageCell.appendChild(manageState)
                manageCell.appendChild(managebutton)
            }
        })
        .catch(function (error) {
            // 处理错误情况
            console.log(error);
        })
        .then(function () {
            // 总是会执行
        });
}
manageuser()

function  application() {
    axios({
        url: "http://192.168.104.217:8280/rbac/data/subject/getSubjectInfoList",
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTGV2ZWwiOjEsImFkbWluaXN0cmF0aXZlQ29kZSI6IjQ0MDYwNSIsInVzZXJfaWQiOjEsInVzZXJfbmFtZSI6ImFkbWluIiwic2NvcGUiOlsiYWxsIl0sImxvZ2luTmFtZSI6ImFkbWluIiwiVXNlcklkZW50aXR5IjpbIuWMuue6p-S_oeaBr-WRmCJdLCJleHAiOjE2NTc0NzM5ODcsImF1dGhvcml0aWVzIjpbIm1lbWJlcjptZW1iZXI6dXBkYXRlTWVtYmVyUGFzc3dvcmQiLCJnb29kczpnb29kczphZGRHb29kc0NhdGVnb3J5IiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHNDYXRlZ29yeSIsImdvb2RzOmdvb2RzOmFkZEdvb2RzQnJhbmQiLCJzbXM6c3lzbm90aWNlcmVjb3JkczpsaXN0Iiwic3lzOmNvbmZpZzpzYXZlIiwic3lzOmNvbmZpZzp1cGRhdGUiLCJnb29kczpnb29kczpnZXRTcGVjQW5kQnJhbmtMaXN0IiwiZ29vZHM6Z29vZHM6R29vZHNDcmVhdGVPclVwZGF0ZSIsIm1lbWJlcjptZW1iZXI6dXBkYXRlQ3VzdG9tZXJTZXJ2aWNlIiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNBdHRyaWJ1dGUiLCJzbXM6c3lzbm90aWNldGVtcGxhdGU6bGlzdCIsInN5czpyb2xlOmxpc3QiLCJtZW1iZXI6bWVtYmVycGFydG5lcjphdWRpdG9yIiwic3lzOm1lbnU6c2VsZWN0Iiwic3VwcGxpZXI6c3VwcGxpZXI6bGlzdCIsInN5czpzY2hlZHVsZTp1cGRhdGUiLCJzeXM6c2NoZWR1bGU6c2F2ZSIsIm1lbWJlcjptZW1iZXI6bWVtYmVyVW5Mb2NrIiwic21zOnN5c25vdGljZXRlbXBsYXRlOmRlbGV0ZSIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZTppbmZvIiwibWVtYmVyOm1lbWJlcjp1c2VyQ29tbWlzc2lvbldpdGhkcmF3TGlzdCIsInN5czpyb2xlOnNhdmUiLCJnb29kczpnb29kczp1cGRhdGVHb29kc0NhdGVnb3J5IiwibWVtYmVyOm1lbWJlcjphZGRNZW1iZXJBY2NvdW50Iiwic3lzOnNjaGVkdWxlOmxvZyIsIm1lbWJlcjptZW1iZXI6YWRkTWVtYmVyTGV2ZWwiLCJzeXM6cm9sZTp1cGRhdGUiLCJtZW1iZXI6bWVtYmVyOnVwZGF0ZU1lbWJlciIsInN5czpzY2hlZHVsZTpsaXN0IiwiZ29vZHM6Z29vZHM6Z29vZHNsaXN0IiwiZ29vZHM6Z29vZHM6Z29vZHNjYXRlZ29yeWxpc3QiLCJtZW1iZXI6bWVtYmVyOm1lbWJlckxvY2siLCJzeXM6dXNlcjpzYXZlIiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHNHcm91cCIsIm1lbWJlcjptZW1iZXJwYXJ0bmVyOmxpc3QiLCJzdXBwbGllcjpzdXBwbGllcjp1cGRhdGUiLCJzeXM6b3NzOmFsbCIsInN5czpzY2hlZHVsZTppbmZvIiwiZ29vZHM6Z29vZHM6YWRkR29vZHMiLCJnb29kczpnb29kczp1cGRhdGVHb29kc1NwZWMiLCJzeXM6bWVudTpkZWxldGUiLCJzeXM6bWVudTp1cGRhdGUiLCJnb29kczpnb29kczpnb29kc2dyb3VwbGlzdCIsInN5czpjb25maWc6aW5mbyIsImdvb2RzOmdvb2RzOmFkZEF0dHJpYnV0ZVNlcnZpY2UiLCJnb29kczpnb29kczpkZWxldGVHb29kc0JyYW5kIiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNCcmFuZCIsInN5c2NvbmZpZ3RocmVlOnN5c2NvbmZpZ3RocmVlOnNldFNtc1N5c0NvbmZpZ1RocmVlIiwibWVtYmVyOm1lbWJlcjphY2NvdW50bGlzdCIsInN5czptZW51Omxpc3QiLCJnb29kczpnb29kczpkZWxldGVBdHRyIiwic3lzY29uZmlndGhyZWU6c3lzY29uZmlndGhyZWU6Z2V0U3lzQ29uZmlnVGhyZWUiLCJzeXNjb25maWd0aHJlZTpzeXNjb25maWd0aHJlZTptZW1iZXJXaXRoZHJhd1NldHRpbmciLCJnb29kczpnb29kczphZGRHb29kc0dyb3VwIiwic3lzOnNjaGVkdWxlOnJlc3VtZSIsIm1lbWJlcjptZW1iZXI6bWVtYmVybGlzdCIsImdvb2RzOmdvb2RzOmRlbGV0ZUV2YWx1YXRlQWpheCIsImdvb2RzOmdvb2RzOmdvb2RzYnJhbmRsaXN0Iiwic3lzOnVzZXI6ZGVsZXRlIiwiZ29vZHM6Z29vZHM6YXR0cmlidXRlbGlzdCIsImdvb2RzOmdvb2RzOmdvb2Rzc3BlY2xpc3QiLCJnb29kczpnb29kczpzZXRFdmFsdXRlU2hvd1N0YXR1QWpheCIsInN5czpjb25maWc6bGlzdCIsInN5czptZW51OmluZm8iLCJzeXM6dXNlcjp1cGRhdGUiLCJnb29kczpnb29kczpkZWxldGVHb29kc1NwZWMiLCJnb29kczpnb29kczpnb29kc2NvbW1lbnQiLCJzeXM6cm9sZTpzZWxlY3QiLCJtZW1iZXI6bWVtYmVyOmFjY291bnRkZXRhaWwiLCJzeXM6dXNlcjpsaXN0Iiwic3lzOm1lbnU6c2F2ZSIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZTp1cGRhdGUiLCJnb29kczpnb29kczpNb2RpZnlHb29kc09mZmxpbmUiLCJnb29kczpnb29kczphZGRHb29kc1NwZWMiLCJzeXM6cm9sZTppbmZvIiwic3lzOnNjaGVkdWxlOmRlbGV0ZSIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZWl0ZW06Z2V0VGVtcGxhdGVJdGVtIiwibWVtYmVyOm1lbWJlcjpwb2ludGxpc3QiLCJnb29kczpnb29kczp1cGRhdGVHb29kc0dyb3VwIiwic3lzOnVzZXI6aW5mbyIsInN5czpjb25maWc6ZGVsZXRlIiwic3lzOnNjaGVkdWxlOnJ1biIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZTpzYXZlIiwic3VwcGxpZXI6c3VwcGxpZXI6ZGVsZXRlIiwic3lzOnJvbGU6ZGVsZXRlIiwibWVtYmVyOm1lbWJlcjpiYWxhbmNlTWVtYmVyQWNjb3VudCIsIm1lbWJlcjptZW1iZXI6dXBkYXRlTWVtYmVyTGV2ZWwiLCJzdXBwbGllcjpzdXBwbGllcjpzYXZlIiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHMiLCJtZW1iZXI6bWVtYmVyOm1lbWJlckxldmVsTGlzdCIsInN5czpzY2hlZHVsZTpwYXVzZSIsImdvb2RzOmdvb2RzOnJlcGx5RXZhbHVhdGVBamF4Iiwic3lzOmxvZzpsaXN0Il0sImp0aSI6IjY2MjFiNWU5LWM4NGItNDQxMC04ZDA3LThmNDIwZWU0YTlhYSIsImNsaWVudF9pZCI6ImNsaWVudCJ9.CaenaF3zeGQXMfvVzNxKPhdTkL0uQjyBTf9ns2nbHig"
        }
    })
        .then(function (response) {
            // 处理成功情况
            var auditCellBox = document.getElementsByClassName("audit-cell-box")[0];
            for (let index = 0; index < data.list.length; index++) {
                var auditCell = document.createElement("div");
                auditCell.className = "audit-cell"

                var auditSelect = document.createElement("div");
                auditSelect.className = "audit-select";
                auditSelect.innerHTML= `<span></span>`

                var auditName = document.createElement("div");
                auditName.className = "audit-name";
                auditName.innerHTML= response.data.data.list[index]["subjectName"];

                var auditIDcard = document.createElement("div");
                auditIDcard.className = "audit-IDcard";
                auditIDcard.innerHTML= response.data.data.list[index]["subjectName"];

                var auditPhone = document.createElement("div");
                auditPhone.className = "audit-phone";
                auditPhone.innerHTML= response.data.data.list[index]["subjectName"];

                var auditPopedom = document.createElement("div");
                auditPopedom.className = "audit-popedom";
                auditPopedom.innerHTML= response.data.data.list[index]["subjectName"];

                var auditType = document.createElement("div");
                auditType.className = "audit-type";
                auditType.innerHTML= response.data.data.list[index]["subjectName"];

                var auditApplyFor = document.createElement("div");
                auditApplyFor.className = "audit-applyFor";
                auditApplyFor.innerHTML= response.data.data.list[index]["subjectName"];
                
                var auditbutton = document.createElement("div");
                auditbutton.className = "auditbutton";
                auditbutton.innerHTML = `<button>审核</button>`

                auditCellBox.appendChild(auditCell)
                auditCell.appendChild(auditSelect)
                auditCell.appendChild(auditName)
                auditCell.appendChild(auditIDcard)
                auditCell.appendChild(auditPhone)
                auditCell.appendChild(auditPopedom)
                auditCell.appendChild(auditType)
                auditCell.appendChild(auditApplyFor)
                auditCell.appendChild(auditbutton)
            }
        })
        .catch(function (error) {
            // 处理错误情况
            console.log(error);
        })
        .then(function () {
            // 总是会执行
        });
}
application()