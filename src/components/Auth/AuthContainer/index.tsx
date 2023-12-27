"use client";

import { Button } from "@/components/Button";
import promisify from "@/utils/promisify";
import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type AuthContainerProps = {
    title: string;
    authButtonText: string;
    authAction: () => Promise<void> | void;
} & (
    | {
          altLinkText: string;
          altLinkPath: string;
          altLinkLabel: string;
      }
    | {
          altLinkText?: never;
          altLinkPath?: never;
          altLinkLabel?: never;
      }
);
const AuthContainer: React.FC<React.PropsWithChildren<AuthContainerProps>> = ({
    title,
    authButtonText,
    altLinkLabel,
    altLinkPath,
    altLinkText,
    children,
    authAction,
}) => {
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState(false);
    useEffect(() => {
        const submitButton = document.getElementById("submit-button");
        if (submitButton) {
            const submitOnEnter = (e: KeyboardEvent) => {
                if (e.key === "Enter") {
                    submitButton.click();
                }
            };
            document.addEventListener("keydown", submitOnEnter);
            return () => {
                document.removeEventListener("keydown", submitOnEnter);
            };
        }
        return () => {
            /* do nothing */
        };
    });

    async function handleSubmit() {
        try {
            setIsSubmitting(true);
            await promisify(authAction);
            setTimeout(() => {
                router.push("/");
            }, 2000);
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(
                    error.response?.data.message ?? "An error has occured"
                );
            } else {
                toast.error("An error has occured");
            }
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="px-6 py-8 shadow-2xl flex flex-col justify-center items-center rounded-xl gap-2 w-fit">
            <div className="w-full text-start flex flex-col">
                <h6 className="text-primary-500">
                    Welcome to
                    <span className="text-primary-400 font-semibold">
                        {" "}
                        Blogify
                    </span>
                </h6>
                <h3 className="text-primary-400">{title}</h3>
                {altLinkText && altLinkPath && altLinkLabel && (
                    <span className="flex gap-2">
                        <p className="text-2xs">{altLinkText}</p>
                        <Link
                            href={altLinkPath}
                            className="text-primary-400 hover:text-primary-300 transition-colors text-2xs font-bold"
                        >
                            {altLinkLabel}
                        </Link>
                    </span>
                )}
            </div>
            <hr className="w-full border-slate-300 mt-2" />
            {children}
            <Button
                $variant="primary"
                className="w-full rounded-xl py-2 flex gap-4 justify-center items-center transition-all"
                onClick={() => handleSubmit()}
                id="submit-button"
            >
                {authButtonText}
                {isSubmitting && (
                    <AiOutlineLoading className="h-4 w-4 text-white animate-spin" />
                )}
            </Button>
            <ToastContainer />
        </div>
    );
};

export default AuthContainer;
