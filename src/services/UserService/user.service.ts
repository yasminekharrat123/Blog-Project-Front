import apiService from "../api.service";
import { AuthResponseDto } from "./dto/auth-response.dto";
import { UserResponseDto } from "./dto/user-response.dto";

export default class UserService {
    static async login(email: string, password: string) {
        const response = await apiService.post<AuthResponseDto>("user/login", {
            email,
            password,
        });
        return response.data;
    }

    static async register(username: string, email: string, password: string) {
        const response = await apiService.post<AuthResponseDto>(
            "user/register",
            {
                username,
                email,
                password,
            }
        );
        return response.data;
    }

    static async whoami() {
        const response = await apiService.get<UserResponseDto>("user/whoami");
        return response.data;
    }
}
