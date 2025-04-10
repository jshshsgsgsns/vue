// import axios from 'axios';

// // 创建axios实例
// const http = axios.create({
//     baseURL: 'https://api.example.com', // 替换为你的接口基础地址
//     timeout: 5000, // 请求超时时间
// });

// // 请求拦截器
// http.interceptors.request.use(
//     (config) => {
//         // 在发送请求之前做些什么，比如添加token
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         // 对请求错误做些什么
//         return Promise.reject(error);
//     }
// );

// // 响应拦截器
// http.interceptors.response.use(
//     (response) => {
//         // 对响应数据做点什么
//         return response.data;
//     },
//     (error) => {
//         // 对响应错误做点什么
//         if (error.response) {
//             // 根据状态码处理错误
//             switch (error.response.status) {
//                 case 401:
//                     console.error('未授权，请登录');
//                     break;
//                 case 403:
//                     console.error('拒绝访问');
//                     break;
//                 case 404:
//                     console.error('请求地址不存在');
//                     break;
//                 default:
//                     console.error('服务器错误');
//             }
//         }
//         return Promise.reject(error);
//     }
// );

// export default http;