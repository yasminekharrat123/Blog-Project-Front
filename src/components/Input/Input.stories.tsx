import { Input, InputProps } from ".";

export default {
    title: "Components/Input",
    component: Input,
    argTypes: {
        disabled: {
            control: {
                type: "boolean",
            },
        },
        placeholder: {
            control: {
                type: "text",
            },
        },
    },
};

export const InputExample = (args: Omit<InputProps, "ref">) => (
    <Input {...args} />
);
