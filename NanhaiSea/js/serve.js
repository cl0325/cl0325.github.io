let data = Mock.mock({
    "list|50": [{
        "area": null,
        "id|+1": 472,
        "collectTaskLandRs": null,
        "createPerson": "admin",
        "planStatus": 1,
        "planFiles": "",
        "treeData": null,
        "ossImgList": null,
        "planName": '@cname',
        "collectTasks": [{
            "id": 16978,
            "createTime": "2021-09-10 16:24:32",
            "updateTime": null,
            "planInfos": null,
            "planName": null,
            "administrativeName": null,
            "collectTaskVillageName": null,
            "planStartTime": null,
            "planEndTime": null,
            "collectTaskPlanId": 472,
            "collectTaskTownId": "440605121",
            "collectTaskVillageId": "440605121002"
        }],
        "planStartTime": '@datetime',
        "planEndTime": "2099-03-25 00:00",
        "createTime": "2021-09-10 16:24",
        "planCode": "dsd",
        "updateTime": "2021-09-13 15:51",
        "planType": null,
        "updatePerson": "admin",
        "planRequire": "打视",
        "dataCount": 0
    }]
})


let mock = Mock.mock('http://192.168.104.217:8280/task/task/queryPlanAccordingToTheTask', 'get', {
    "result": "success",
    "data": {
        "pageNum": 1,
        "pageSize": 10,
        "size": 10,
        "startRow": 1,
        "endRow": 10,
        "total": 10,
        "pages": 10,
        "list": data.list,
        "prePage": 0,
        "nextPage": 2,
        "isFirstPage": true,
        "isLastPage": false,
        "hasPreviousPage": false,
        "hasNextPage": true,
        "navigatePages": 8,
        "navigatepageNums": [
            1,
            2,
            3
        ],
        "navigateFirstPage": 1,
        "navigateLastPage": 3,
        "firstPage": 1,
        "lastPage": 3
    },
    "errorCode": "00000",
    "errorMsg": "success"
})

// console.log(data.list);

