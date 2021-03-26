import axios from "./axios_config";
import { BASE_URL } from "./base_config";
// 这里统一分发请求
export default {
  /**
   * 获取文章类型的接口
   * @method get
   * /getArticleType
   */
  getArticleType: () => {
    return axios({
      url: `${BASE_URL}/api/getlist`,
      method: "get"
    });
  },
  
  /**
   * 通过指定id获取文章
   * @method get
   * /getArticleById/${id}
   */
  getArticleById: id => {
    return axios({
      url: `${BASE_URL}/api/getArticleById/${id}`,
      method: "get"
    });
  },
};

