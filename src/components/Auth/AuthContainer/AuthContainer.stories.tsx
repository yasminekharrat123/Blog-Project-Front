import AuthContainer from ".";

export default {
    title: "Auth/AuthContainer",
    argTypes: {
        title: { control: "text" },
        subtitle: { control: "text" },
        authButtonText: { control: "text" },
        altLinkText: { control: "text" },
        altLinkPath: { control: "text" },
        altLinkLabel: { control: "text" },
    },
};

export const Template = () => (
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
        <div className="h-[250px] w-[300px] flex justify-center items-center">
            Content
        </div>
    </AuthContainer>
);
