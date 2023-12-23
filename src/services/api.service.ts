import clientJWTInterceptor from "@/interceptors/client-jwt.interceptor";
import axios from "axios";

const apiService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

apiService.interceptors.request.use(clientJWTInterceptor);

export default apiService;
