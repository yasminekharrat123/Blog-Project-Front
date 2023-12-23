import getEnvironment from "@/utils/getEnv";
import { InternalAxiosRequestConfig } from "axios";

const clientJWTInterceptor = (cfg: InternalAxiosRequestConfig) => {
    if (getEnvironment() === "browser") {
        const token = localStorage.getItem("auth-token");
        if (token) {
            cfg.headers.Authorization = `Bearer ${token}`;
        }
    }
    return cfg;
};

export default clientJWTInterceptor;
