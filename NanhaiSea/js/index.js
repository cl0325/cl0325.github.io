axios.get('/NanhaiSea/json/index.json')
    .then(function (response) {
        // 处理成功情况
        // 采集中
        var townData = document.getElementsByClassName("townData")[0];
        for (let index = 0; index < response.data.length; index++) {

            var dataGathering = document.createElement("div");
            dataGathering.className = "dataGathering";
            var select = document.createElement("div");
            select.className = "select";
            select.innerHTML = `<button id ="selectivity">选择</button>` + response.data[index].projectName;
            var startEnd = document.createElement("div");
            startEnd.className = "startEnd";
            startEnd.innerHTML = `<strong>任务开始时间:</strong>` + response.data[index].begin +
                `<strong>任务结束时间:</strong>` + response.data[index].finish;
            var buttonSet = document.createElement("div");
            buttonSet.className = "buttonSet"
            buttonSet.innerHTML = `<button>采集区域</button><button>采集要求</button><button>执行情况</button><button>数据清单</button>`
            var card = document.createElement("div");
            card.className = "card";
            card.innerHTML =
                `<strong>图斑总数:</strong>` + response.data[index].amount +
                `<strong>已审核:</strong>` + response.data[index].audit +
                `<strong>已采集:</strong>` + response.data[index].spidered +
                `<strong>未采集:</strong>` + response.data[index].uncollected;
            // +`<strong>图斑总数:</strong>`
            // +`<strong>图斑总数:</strong>`
            console.log(response.data[index].audit);
            townData.appendChild(dataGathering);
            dataGathering.appendChild(select);
            dataGathering.appendChild(startEnd);
            dataGathering.appendChild(buttonSet);
            dataGathering.appendChild(card);
        }
        // 采集中
        // ----------------------------------------------------------------
        // 已到期
        var pastDue = document.getElementsByClassName("pastDue")[0];
        for (let index = 0; index < response.data.length; index++) {
            var dataGathering = document.createElement("div");
            dataGathering.className = "dataGathering";
            var select = document.createElement("div");
            select.className = "select";
            select.innerHTML = `<button>选择</button>` + response.data[index].projectName;
            var startEnd = document.createElement("div");
            startEnd.className = "startEnd";
            startEnd.innerHTML = `<strong>任务开始时间:</strong>` + response.data[index].begin +
                `<strong>任务结束时间:</strong>` + response.data[index].finish;
            var buttonSet = document.createElement("div");
            buttonSet.className = "buttonSet"
            buttonSet.innerHTML = `<button>采集区域</button><button>采集要求</button><button>执行情况</button><button>数据清单</button>`
            var card = document.createElement("div");
            card.className = "card";
            card.innerHTML =
                `<strong>图斑总数:</strong>` + response.data[index].amount +
                `<strong>图斑总数:</strong>` + response.data[index].audit +
                `<strong>图斑总数:</strong>` + response.data[index].spidered +
                `<strong>图斑总数:</strong>` + response.data[index].uncollected;
            // +`<strong>图斑总数:</strong>`
            // +`<strong>图斑总数:</strong>`
            console.log(response.data[index].audit);
            pastDue.appendChild(dataGathering);
            dataGathering.appendChild(select);
            dataGathering.appendChild(startEnd);
            dataGathering.appendChild(buttonSet);
            dataGathering.appendChild(card);
        }
        // 已到期

        function harvester() {
            // 采集中
            var collection = document.getElementById("collection");
            var pastDue = document.getElementsByClassName("pastDue")[0];
            collection.onclick = function () {
                pastDue.style.display = "none";
                townData.style.display = "block";
                stale.style.border = "none";
                piedata.style.display = "none";
                collection.style.borderBottom = "4px solid #0086FF";
                check.style.border = "none"
            }
            // 采集中
            // 已到期
            var stale = document.getElementById("stale");
            var townData = document.getElementsByClassName("townData")[0];
            stale.onclick = function () {
                townData.style.display = "none";
                pastDue.style.display = "block";
                collection.style.border = "none";
                stale.style.borderBottom = "4px solid #0086FF";
                piedata.style.display = "none";
                check.style.border = "none"
            }
            // 已到期
            // 数据查看
            var piedata = document.getElementsByClassName("piedata")[0];
            var check = document.getElementById("check");
            check.onclick = function () {
                townData.style.display = "none";
                pastDue.style.display = "none";
                check.style.borderBottom = "4px solid #0086FF";
                collection.style.border = "none";
                stale.style.border = "none";
                piedata.style.display = "block";
            }
        
            var selectivity = document.getElementById("selectivity");
            var select = document.getElementsByClassName("select")[0];
            selectivity.onclick = function () {
                selectivity.style.background = "#67c23A"
                selectivity.innerHTML = "当前";
                select.style.color = "red"
            }
            // 数据查看
            var disappear = document.getElementsByClassName("disappear")[0];
            var mapbox = document.getElementsByClassName("mapbox")[0];
        
            var x = 0;
            disappear.onclick = function () {
                if (x % 2 == 0) {
                    mapbox.style.display = "none"
                } else {
                    mapbox.style.display = "block"
                }
                x++
            }
        }
        harvester()
    })
    .catch(function (error) {
        // 处理错误情况
        console.log(error);
    })
    .then(function () {
        // 总是会执行
    });









// 饼图
function pie() {
    // 鱼塘总数量
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('totalQuantity'));
    var chartDom = document.getElementById('totalQuantity');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title: {
            text: '鱼塘总数量：28525块',
            subtext: '各二级地类数据',
            left: 'left'
        },
        tooltip: {
            trigger: 'item',
        },
        series: [{
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [{
                name: "合作社",
                value: 777
            }]
        }]
    };
    option && myChart.setOption(option);
    // 鱼塘总面积
    var myChart = echarts.init(document.getElementById('totalArea'));
    var chartDom = document.getElementById('totalArea');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title: {
            text: '鱼塘总面积：151857.867亩',
            subtext: '各二级地类数据',
            left: 'left'
        },
        tooltip: {
            trigger: 'item',
        },
        series: [{
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [{
                name: '鱼塘',
                value: 28525
            }]
        }]
    };
    option && myChart.setOption(option);

    // 总体类型分布
    var myChart = echarts.init(document.getElementById('distribute'));
    var chartDom = document.getElementById('distribute');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title: {
            text: '主体类型分布',
            subtext: '各二级地类数据',
            left: 'left'
        },
        tooltip: {
            trigger: 'item',
        },
        series: [{
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [{
                name: '合作社',
                value: 555
            }, {
                name: '个体户',
                value: 25585
            }]
        }]
    };
    option && myChart.setOption(option);

    var myChart = echarts.init(document.getElementById('value'));
    var chartDom = document.getElementById('value');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title: {
            text: '辖区鱼塘总产值:315858.85',
            subtext: '各二级地类数据',
            left: 'left'
        },
        tooltip: {
            trigger: 'item',
        },
        series: [{
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [{
                name: '鱼塘',
                value: 28525
            }]
        }]
    };
    option && myChart.setOption(option);
}
pie()
// 饼图

// 百度地图
function plat() {
    var map = new BMapGL.Map('mapvessel'); // 创建Map实例
    map.centerAndZoom("杭州市", 12); // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
    var marker1 = new BMapGL.Marker(new BMapGL.Point(116.404, 39.925));
    map.addOverlay(marker1);
}
plat()
// 百度地图