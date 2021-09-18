// 处理成功情况




function audit() {
  var plan = document.getElementsByClassName("plan")[0];
  var createTask = document.getElementsByClassName("createTask")[0];
  plan.onclick = function () {
    createTask.style.display = "block";
    own1.style.display = "none";
    own2.style.display = "none";
    own3.style.display = "none";
  }


  var idc = document.getElementById("idc");
  var dataAuditing = document.getElementById("dataAuditing");
  var createTask = document.getElementsByClassName("createTask")[0];
  var own1 = document.getElementsByClassName("own1")[0];
  var x = 0;
  idc.onclick = function () {
    createTask.style.display = "none";
    own1.style.display = "flex"
    if (x % 2 == 0) {
      dataAuditing.style.display = "none";
    } else {
      dataAuditing.style.display = "block"
    }
    x++
  }

  var statistics = document.getElementsByClassName("statistics")[0];
  statistics.onclick = function () {
    createTask.style.display = "none";
    own1.style.display = "flex"
  }

  var toAudit = document.getElementsByClassName("toAudit")[0];
  var own2 = document.getElementsByClassName("own2")[0];
  toAudit.onclick = function () {
    createTask.style.display = "none";
    own1.style.display = "none";
    own2.style.display = "flex";
  }

  var noPass = document.getElementsByClassName("noPass")[0];
  var own3 = document.getElementsByClassName("own3")[0];
  noPass.onclick = function () {
    createTask.style.display = "none";
    own1.style.display = "none";
    own2.style.display = "none";
    own3.style.display = "flex";
  }
}
audit()




function axs(num) {
  let data = new URLSearchParams()
  data.append("pageNumber", num)
  axios({
      params: data,
      url: "http://192.168.104.217:8280/task/task/queryPlanAccordingToTheTask",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTGV2ZWwiOjIsImFkbWluaXN0cmF0aXZlQ29kZSI6IjQ0MDYwNTAxMSIsInVzZXJfaWQiOjEsInVzZXJfbmFtZSI6ImFkbWluIiwic2NvcGUiOlsiYWxsIl0sImxvZ2luTmFtZSI6ImFhYSIsIlVzZXJJZGVudGl0eSI6WyLljLrnrqHnkIblkZgiXSwiZXhwIjoxNjU3MzI1MTI0LCJhdXRob3JpdGllcyI6WyJtZW1iZXI6bWVtYmVyOnVwZGF0ZU1lbWJlclBhc3N3b3JkIiwiZ29vZHM6Z29vZHM6YWRkR29vZHNDYXRlZ29yeSIsImdvb2RzOmdvb2RzOmRlbGV0ZUdvb2RzQ2F0ZWdvcnkiLCJnb29kczpnb29kczphZGRHb29kc0JyYW5kIiwic21zOnN5c25vdGljZXJlY29yZHM6bGlzdCIsInN5czpjb25maWc6c2F2ZSIsInN5czpjb25maWc6dXBkYXRlIiwiZ29vZHM6Z29vZHM6Z2V0U3BlY0FuZEJyYW5rTGlzdCIsImdvb2RzOmdvb2RzOkdvb2RzQ3JlYXRlT3JVcGRhdGUiLCJtZW1iZXI6bWVtYmVyOnVwZGF0ZUN1c3RvbWVyU2VydmljZSIsImdvb2RzOmdvb2RzOnVwZGF0ZUdvb2RzQXR0cmlidXRlIiwic21zOnN5c25vdGljZXRlbXBsYXRlOmxpc3QiLCJzeXM6cm9sZTpsaXN0IiwibWVtYmVyOm1lbWJlcnBhcnRuZXI6YXVkaXRvciIsInN5czptZW51OnNlbGVjdCIsInN1cHBsaWVyOnN1cHBsaWVyOmxpc3QiLCJzeXM6c2NoZWR1bGU6dXBkYXRlIiwic3lzOnNjaGVkdWxlOnNhdmUiLCJtZW1iZXI6bWVtYmVyOm1lbWJlclVuTG9jayIsInNtczpzeXNub3RpY2V0ZW1wbGF0ZTpkZWxldGUiLCJzbXM6c3lzbm90aWNldGVtcGxhdGU6aW5mbyIsIm1lbWJlcjptZW1iZXI6dXNlckNvbW1pc3Npb25XaXRoZHJhd0xpc3QiLCJzeXM6cm9sZTpzYXZlIiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNDYXRlZ29yeSIsIm1lbWJlcjptZW1iZXI6YWRkTWVtYmVyQWNjb3VudCIsInN5czpzY2hlZHVsZTpsb2ciLCJtZW1iZXI6bWVtYmVyOmFkZE1lbWJlckxldmVsIiwic3lzOnJvbGU6dXBkYXRlIiwibWVtYmVyOm1lbWJlcjp1cGRhdGVNZW1iZXIiLCJzeXM6c2NoZWR1bGU6bGlzdCIsImdvb2RzOmdvb2RzOmdvb2RzbGlzdCIsImdvb2RzOmdvb2RzOmdvb2RzY2F0ZWdvcnlsaXN0IiwibWVtYmVyOm1lbWJlcjptZW1iZXJMb2NrIiwic3lzOnVzZXI6c2F2ZSIsImdvb2RzOmdvb2RzOmRlbGV0ZUdvb2RzR3JvdXAiLCJtZW1iZXI6bWVtYmVycGFydG5lcjpsaXN0Iiwic3VwcGxpZXI6c3VwcGxpZXI6dXBkYXRlIiwic3lzOm9zczphbGwiLCJzeXM6c2NoZWR1bGU6aW5mbyIsImdvb2RzOmdvb2RzOmFkZEdvb2RzIiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNTcGVjIiwic3lzOm1lbnU6ZGVsZXRlIiwic3lzOm1lbnU6dXBkYXRlIiwiZ29vZHM6Z29vZHM6Z29vZHNncm91cGxpc3QiLCJzeXM6Y29uZmlnOmluZm8iLCJnb29kczpnb29kczphZGRBdHRyaWJ1dGVTZXJ2aWNlIiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHNCcmFuZCIsImdvb2RzOmdvb2RzOnVwZGF0ZUdvb2RzQnJhbmQiLCJzeXNjb25maWd0aHJlZTpzeXNjb25maWd0aHJlZTpzZXRTbXNTeXNDb25maWdUaHJlZSIsIm1lbWJlcjptZW1iZXI6YWNjb3VudGxpc3QiLCJzeXM6bWVudTpsaXN0IiwiZ29vZHM6Z29vZHM6ZGVsZXRlQXR0ciIsInN5c2NvbmZpZ3RocmVlOnN5c2NvbmZpZ3RocmVlOmdldFN5c0NvbmZpZ1RocmVlIiwic3lzY29uZmlndGhyZWU6c3lzY29uZmlndGhyZWU6bWVtYmVyV2l0aGRyYXdTZXR0aW5nIiwiZ29vZHM6Z29vZHM6YWRkR29vZHNHcm91cCIsInN5czpzY2hlZHVsZTpyZXN1bWUiLCJtZW1iZXI6bWVtYmVyOm1lbWJlcmxpc3QiLCJnb29kczpnb29kczpkZWxldGVFdmFsdWF0ZUFqYXgiLCJnb29kczpnb29kczpnb29kc2JyYW5kbGlzdCIsInN5czp1c2VyOmRlbGV0ZSIsImdvb2RzOmdvb2RzOmF0dHJpYnV0ZWxpc3QiLCJnb29kczpnb29kczpnb29kc3NwZWNsaXN0IiwiZ29vZHM6Z29vZHM6c2V0RXZhbHV0ZVNob3dTdGF0dUFqYXgiLCJzeXM6Y29uZmlnOmxpc3QiLCJzeXM6bWVudTppbmZvIiwic3lzOnVzZXI6dXBkYXRlIiwiZ29vZHM6Z29vZHM6ZGVsZXRlR29vZHNTcGVjIiwiZ29vZHM6Z29vZHM6Z29vZHNjb21tZW50Iiwic3lzOnJvbGU6c2VsZWN0IiwibWVtYmVyOm1lbWJlcjphY2NvdW50ZGV0YWlsIiwic3lzOnVzZXI6bGlzdCIsInN5czptZW51OnNhdmUiLCJzbXM6c3lzbm90aWNldGVtcGxhdGU6dXBkYXRlIiwiZ29vZHM6Z29vZHM6TW9kaWZ5R29vZHNPZmZsaW5lIiwiZ29vZHM6Z29vZHM6YWRkR29vZHNTcGVjIiwic3lzOnJvbGU6aW5mbyIsInN5czpzY2hlZHVsZTpkZWxldGUiLCJzbXM6c3lzbm90aWNldGVtcGxhdGVpdGVtOmdldFRlbXBsYXRlSXRlbSIsIm1lbWJlcjptZW1iZXI6cG9pbnRsaXN0IiwiZ29vZHM6Z29vZHM6dXBkYXRlR29vZHNHcm91cCIsInN5czp1c2VyOmluZm8iLCJzeXM6Y29uZmlnOmRlbGV0ZSIsInN5czpzY2hlZHVsZTpydW4iLCJzbXM6c3lzbm90aWNldGVtcGxhdGU6c2F2ZSIsInN1cHBsaWVyOnN1cHBsaWVyOmRlbGV0ZSIsInN5czpyb2xlOmRlbGV0ZSIsIm1lbWJlcjptZW1iZXI6YmFsYW5jZU1lbWJlckFjY291bnQiLCJtZW1iZXI6bWVtYmVyOnVwZGF0ZU1lbWJlckxldmVsIiwic3VwcGxpZXI6c3VwcGxpZXI6c2F2ZSIsImdvb2RzOmdvb2RzOmRlbGV0ZUdvb2RzIiwibWVtYmVyOm1lbWJlcjptZW1iZXJMZXZlbExpc3QiLCJzeXM6c2NoZWR1bGU6cGF1c2UiLCJnb29kczpnb29kczpyZXBseUV2YWx1YXRlQWpheCIsInN5czpsb2c6bGlzdCJdLCJqdGkiOiIwN2IwYjc4Yy03MjAwLTRiY2ItYTFiNy1mYTAxNjFhN2Y0MjMiLCJjbGllbnRfaWQiOiJjbGllbnQifQ.IM3GmWNYgEyZlU6Mfmm3RG4pHMgyqkeAjiEs8BkU8n4"
      }
    }).then(function (res) {
      console.log(res.data.data);
      var dataTitle = document.getElementById("dataTitle");
      dataTitle.innerHTML = '';
      for (let index = 0; index < 10; index++) {
        var odiv = document.createElement("div");
        odiv.className = "dataTitle";
        // -------------------------------------------
        // ID
        var createdata = document.createElement("div");
        createdata.className = "createdata";
        createdata.innerHTML = res.data.data.list[index]["id"];
        // -------------------------------------------
        // 计划名称
        var projectdata = document.createElement('div');
        projectdata.className = "projectdata";
        projectdata.innerHTML = res.data.data.list[index]["planName"];
        // -------------------------------------------
        // 开始时间
        var startdata = document.createElement('div');
        startdata.className = "startdata";
        startdata.innerHTML = res.data.data.list[index]["planStartTime"];
        // -------------------------------------------
        // 结束时间
        var enddata = document.createElement('div');
        enddata.className = "enddata";
        enddata.innerHTML = res.data.data.list[index]["planEndTime"];
        // -------------------------------------------
        // 任务状态
        var taskdata = document.createElement('div');
        taskdata.className = "taskdata";
        taskdata.innerHTML = res.data.data.list[index]["planCode"];
        // -------------------------------------------
        // 任务要求
        var plandata = document.createElement('div');
        plandata.className = "plandata";
        plandata.innerHTML = res.data.data.list[index]["planRequire"];
        // -------------------------------------------
        var createdataButton = document.createElement("div");
        createdataButton.className = "createdataButton";
        createdataButton.innerHTML = `
              <button>撤回</button>
              <button>停用</button>
                  <button>查看</button>
                  <button>编辑</button>`
        // -------------------------------------------
        dataTitle.appendChild(odiv);
        odiv.appendChild(createdata);
        odiv.appendChild(projectdata);
        odiv.appendChild(startdata);
        odiv.appendChild(enddata);
        odiv.appendChild(taskdata);
        odiv.appendChild(plandata);
        odiv.appendChild(createdataButton);
      }
    })
    .catch(function (err) {
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


