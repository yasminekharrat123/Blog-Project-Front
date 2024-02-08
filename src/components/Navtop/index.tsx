import React from "react";
import createAxiosInterceptorFromNextRequestHandler from "@/interceptors/server-jwt.interceptor";
import { UserResponseDto } from "@/services/UserService/dto/user-response.dto";
import UserService from "@/services/UserService/user.service";
import apiService from "@/services/api.service";
import { cookies } from "next/headers";
import ClientNavtop from "./ClientNavtop";

async function getUser(): Promise<UserResponseDto | null> {
    const interceptor = createAxiosInterceptorFromNextRequestHandler(cookies());
    const interceptorId = apiService.interceptors.request.use(interceptor);

    try {
        return await UserService.whoami();
    } catch (error) {
        return null;
    } finally {
        apiService.interceptors.request.eject(interceptorId);
    }
}

const Navtop: React.FC = async (): Promise<React.JSX.Element> => {
    const user: UserResponseDto | null = await getUser();

    return user ? <ClientNavtop user={user} /> : <ClientNavtop user={null} />;
};

export default Navtop;
