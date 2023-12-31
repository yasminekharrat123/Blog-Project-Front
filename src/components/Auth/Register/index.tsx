"use client";

import { Input } from "@/components/Input";
import UserService from "@/services/UserService/user.service";
import { setCookie } from "cookies-next";
import { useReducer } from "react";
import { toast } from "react-toastify";
import AuthContainer from "../AuthContainer";

type RegistrationStateProps = {
    email: string;
    password: string;
    confirmPassword: string;
    userName: string;
    error: string;
};

type RegistrationActionProps = {
    payload: string;
    type: keyof RegistrationStateProps;
};

const initialState: RegistrationStateProps = {
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
    error: "",
};

export default function Register() {
    const [state, dispatch] = useReducer(
        (state: RegistrationStateProps, action: RegistrationActionProps) => {
            return {
                ...state,
                [action.type]: action.payload,
            };
        },
        initialState
    );

    function clearError() {
        dispatch({
            type: "error",
            payload: "",
        });
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        dispatch({
            type: name as keyof RegistrationStateProps,
            payload: value,
        });
    };

    const handleRegister = async () => {
        clearError();
        if (
            !state.email ||
            !state.password ||
            !state.confirmPassword ||
            !state.userName
        ) {
            dispatch({
                type: "error",
                payload: "All fields are required",
            });
            return;
        }

        if (state.password !== state.confirmPassword) {
            dispatch({
                type: "error",
                payload: "Passwords do not match",
            });
            return;
        }
        const res = await UserService.register(
            state.userName,
            state.email,
            state.password
        );
        toast.success("Register successful!");
        setCookie("auth-token", res.accessToken, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
        });
    };

    return (
        <AuthContainer
            title="Regiser Now!"
            authButtonText="Register"
            altLinkText="Already have an account?"
            altLinkPath="/login"
            altLinkLabel="Login"
            authAction={() => handleRegister()}
        >
            <div className="flex flex-col gap-2 md:min-w-[400px] py-6">
                <Input
                    label="User Name"
                    name="userName"
                    value={state.userName}
                    onChange={handleChange}
                    placeholder="Enter your user name"
                />
                <Input
                    label="Email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
                <Input
                    label="Password"
                    name="password"
                    type="password"
                    value={state.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                />
                <Input
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={state.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                />
                {state.error && (
                    <p className="text-error-100 text-xs">{state.error}</p>
                )}
            </div>
        </AuthContainer>
    );
}
