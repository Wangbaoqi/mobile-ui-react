// 配置axios的拦截器。通用配置
import axios from "axios";
// 1.创建一个实例.实例上就有所有
const instance = axios.create();
// 2.请求拦截器
instance.interceptors.request.use(
  config => {
    // TODO.如果要加token，可以在这统一配置
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.common["Authorization"] = token;
    // }
    // return config;
    // 这里没有配置。直接返回就行
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 3.响应拦截器
instance.interceptors.response.use(
  res => {
    //因为接受到的数据默认会在最外层包一层http状态数据。在这里就判断后剥离
    // 判定和后端协商这里的状态值是多少,我的是200
    if (res.status === 200) {
      return Promise.resolve(res.data);
    } else {
      // 这里是后端返回的自定义状态。看和后端协商是什么
      return Promise.resolve(res);
    }
  },
  error => {
    // TODO 这里可以加入异常处理，例如弹出一个错误，跳转去往首页登录
    return Promise.reject(error);
  }
);
// 将axios暴露出去
export default instance;
