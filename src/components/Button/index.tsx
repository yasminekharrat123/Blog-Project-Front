import tw from "tailwind-styled-components";

export type ButtonVariant =
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "error";

export type ButtonProps = React.PropsWithChildren<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > & {
        $variant?: ButtonVariant;
    }
>;

const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-primary-400 hover:bg-primary-300 text-neutral-100",
    secondary:
        "bg-none border border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-neutral-100",
    tertiary:
        "bg-none !shadow-none border-none outline-none text-primary-400 hover:text-primary-300 disabled:text-neutral-400 disabled:bg-none",
    success: "bg-success-100 hover:bg-success-200 disabled:bg-success-300",
    warning: "bg-warning-100 hover:bg-warning-200 disabled:bg-warning-300",
    error: "bg-error-100 hover:bg-error-200 disabled:bg-error-300",
};

export const Button = tw.button<ButtonProps>`
    transition-colors
    shadow-custom
    disabled:bg-neutral-400
    disabled:text-white
    px-10
    py-1.5
    rounded-3xl
    text-neutral-100
    ${p => (!p.$variant ? variantClasses.primary : variantClasses[p.$variant])}
`;
