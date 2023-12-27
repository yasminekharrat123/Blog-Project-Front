import createAxiosInterceptorFromNextRequestHandler from "@/interceptors/server-jwt.interceptor";
import { UserResponseDto } from "@/services/UserService/dto/user-response.dto";
import UserService from "@/services/UserService/user.service";
import apiService from "@/services/api.service";
import { cookies } from "next/headers";

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

export default async function Navtop() {
    const user = await getUser();
    return user ? (
        <div className="flex w-full text-black text-center">
            Logged in as {user.username}
        </div>
    ) : (
        <div className="flex-w-full text-black text-center">Not logged in</div>
    );
}
