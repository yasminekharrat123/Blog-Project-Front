import { Button } from "@/components/Button";
import Link from "next/link";

export type AuthContainerProps = {
    title: string;
    authButtonText: string;
    authAction: () => void;
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
                className="w-full rounded-xl py-2"
                onClick={authAction}
            >
                {authButtonText}
            </Button>
        </div>
    );
};

export default AuthContainer;
