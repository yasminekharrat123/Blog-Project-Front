export interface ButtonProps {
    label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
    return <button>{label}</button>;
};
