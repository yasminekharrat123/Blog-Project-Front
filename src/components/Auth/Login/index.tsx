"use client";

import { Input } from "@/components/Input";
import UserService from "@/services/UserService/user.service";
import { setCookie } from "cookies-next";
import { useReducer } from "react";
import { toast } from "react-toastify";
import AuthContainer from "../AuthContainer";

type LoginStateProps = {
    email: string;
    password: string;
    error: string;
};

type LoginActionProps = {
    payload: string;
    type: keyof LoginStateProps;
};

const initialState: LoginStateProps = {
    email: "",
    password: "",
    error: "",
};

export default function Login() {
    const [state, dispatch] = useReducer(
        (state: LoginStateProps, action: LoginActionProps) => {
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
            type: name as keyof LoginStateProps,
            payload: value,
        });
    };

    const handleLogin = async () => {
        clearError();
        if (!state.email || !state.password) {
            dispatch({
                type: "error",
                payload: "All fields are required",
            });
            return;
        }

        const res = await UserService.login(state.email, state.password);
        toast.success("Login successful!");
        setCookie("auth-token", res.accessToken, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
        });
    };

    return (
        <AuthContainer
            title="Login!"
            authButtonText="Login"
            altLinkText="Don't have an account?"
            altLinkPath="/register"
            altLinkLabel="Register"
            authAction={() => handleLogin()}
        >
            <div className="flex flex-col gap-2 md:min-w-[400px] py-6">
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
                {state.error && (
                    <p className="text-error-100 text-xs">{state.error}</p>
                )}
            </div>
        </AuthContainer>
    );
}
