import { InternalAxiosRequestConfig } from "axios";
import { NextRequest } from "next/server";

export default function createAxiosInterceptorFromNextRequestHandler(
    nextRequest: NextRequest
): (cfg: InternalAxiosRequestConfig) => InternalAxiosRequestConfig {
    return (cfg: InternalAxiosRequestConfig) => {
        const jwt = nextRequest.cookies.get("jwt");
        if (jwt) {
            cfg.headers.Authorization = `Bearer ${jwt}`;
        }
        return cfg;
    };
}
