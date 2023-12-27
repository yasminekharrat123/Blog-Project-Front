export default async function promisify<T>(
    functionToBePromisified: () => Promise<T> | T
) {
    const result = functionToBePromisified();
    if (result instanceof Promise) {
        return result;
    }
    return Promise.resolve(result);
}
