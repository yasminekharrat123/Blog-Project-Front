import { InternalAxiosRequestConfig } from "axios";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export default function createAxiosInterceptorFromNextRequestHandler(
    cookies: ReadonlyRequestCookies
): (cfg: InternalAxiosRequestConfig) => InternalAxiosRequestConfig {
    return (cfg: InternalAxiosRequestConfig) => {
        const jwt = cookies.get("auth-token");
        if (jwt) {
            cfg.headers.Authorization = `Bearer ${jwt.value ?? ""}`;
        }
        return cfg;
    };
}
