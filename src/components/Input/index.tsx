import { forwardRef } from "react";
import tw from "tailwind-styled-components";

export type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label?: string;
};

const InputInner = tw.input<InputProps>`
    transition-all
    px-4
    py-2
    ring-1
    ring-primary-300
    text-black
    rounded-3xl
    focus:outline-none
    focus:ring-primary-400
    disabled:bg-neutral-200
    disabled:cursor-not-allowed
    disabled:ring-primary-500
    disabled:text-neutral-400
`;

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, ...rest }, ref) => {
        if (!label) {
            return <InputInner {...rest} ref={ref} />;
        }

        return (
            <div className="flex flex-col gap-1">
                <label htmlFor={rest.id}>{label}</label>
                <InputInner {...rest} ref={ref} />
            </div>
        );
    }
);
