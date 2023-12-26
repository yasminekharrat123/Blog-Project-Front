"use client";

import { Input } from "@/components/Input";
import { useReducer } from "react";
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        dispatch({
            type: name as keyof RegistrationStateProps,
            payload: value,
        });
    };

    return (
        <AuthContainer
            title="Regiser Now!"
            authButtonText="Register"
            altLinkText="Already have an account?"
            altLinkPath="/login"
            altLinkLabel="Login"
            authAction={() => {
                // do nothing
            }}
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
            </div>
        </AuthContainer>
    );
}
