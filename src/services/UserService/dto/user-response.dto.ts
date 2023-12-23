export enum UserRole {
    SUPER_ADMIN = 0,
    ADMIN = 1,
    USER = 2,
}

export interface UserResponseDto {
    id: number;
    username: string;
    email: string;
    role: UserRole;
}
