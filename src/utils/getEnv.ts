export default function getEnvironment(): "browser" | "node" {
    return typeof window === "undefined" ? "node" : "browser";
}
