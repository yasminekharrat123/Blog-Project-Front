const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX;

export default function getAssetBasePath(asset: string) {
    return `${prefix}/${asset}`.replace("//", "/");
}
