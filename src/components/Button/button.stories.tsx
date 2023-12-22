import { Button, ButtonVariant } from ".";
import "../../app/globals.css";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        $variant: {
            control: {
                type: "select",
                options: [
                    "primary",
                    "secondary",
                    "tertiary",
                    "success",
                    "warning",
                    "error",
                ],
            },
        },
        className: {
            control: {
                type: "text",
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
    },
};

export const Variants = ({
    $variant,
    className,
    disabled,
}: {
    $variant: ButtonVariant;
    className: string;
    disabled: boolean;
}) => (
    <Button $variant={$variant} className={className} disabled={disabled}>
        Button
    </Button>
);

export const Primary = () => <Button $variant="primary">Primary</Button>;

export const Secondary = () => <Button $variant="secondary">Secondary</Button>;

export const Tertiary = () => <Button $variant="tertiary">Tertiary</Button>;

export const Success = () => <Button $variant="success">Success</Button>;

export const Warning = () => <Button $variant="warning">Warning</Button>;

export const Error = () => <Button $variant="error">Error</Button>;
