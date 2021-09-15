// 接口管理
const Api = {
    textArea: function (data, url = "index.html") {
        let grant_type
        if (data.grant_type) {
            grant_type = data.grant_type
        } else {
            grant_type = "password"
        }
        data.grant_type = grant_type;
        data.scope = "all";
        return axios({
            method: "post",
            url: '/uaa/oauth/token',
            data,
            headers: {
                Authorization: "Basic Y2xpZW50OnNlY3JldA=="
            }
        }).then(function (res) {
            localStorage.setItem('user', JSON.stringify(res));
            if (url) {
                location.href = url
            }
            location.href="index.html"
            return Promise.resolve(res);
        }).catch(function (err) {
            console.log(err.txt);
        })
    }
}