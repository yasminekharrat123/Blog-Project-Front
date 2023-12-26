export default function Layout({ children }: { children: React.ReactNode }) {
    // TODO: replace h-screen with a more approriate height length when parent layout is ready

    return (
        <div className="w-full h-screen flex justify-center items-center">
            {children}
        </div>
    );
}
