// 全局配置
axios.defaults.baseURL = 'http://192.168.104.217:8280/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.defaults.transformRequest = [function (data) {
    return Qs.stringify(data);
  }],

  // 添加请求拦截器
  axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  let data
  if (response.status === 200) {
    data = response.data
    return data
  }
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  error.txt = '请求失败'
  return Promise.reject(error);
});