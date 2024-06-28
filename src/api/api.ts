import axios from "axios";
const instance = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_BASE_URL,
    withCredentials: true // 추후 쿠키 사용시 true로 변경 (자격 증명 허용 설정)
});
axios.defaults.withCredentials = true; // 추후 쿠키 사용시 true로 변경 (자격 증명 허용 설정)

// 로그인 구현 이후 사용
// instance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     function (error) {
//         if (error.response.status == 401) {
//             swal.fire("세션이 만료되었습니다.");
//             router.push({ name: "board" });
//         } else if (error.response.status == 403) {
//             swal.fire("허용되지 않은 접근입니다.");
//             router.push({ name: "board" });
//         }
//         return Promise.reject(error);
//     }
// );

export function requestRegister(obj: any) {
    return instance.post("/api/register/request", obj);
}