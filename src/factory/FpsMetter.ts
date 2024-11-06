import { AssetManager, Vector2 } from "angry-pixel";
import { textFactory } from "./Text";
import { FpsMetter } from "@component/FpsMetter";

export const fpsMetterFactory = (assetManager: AssetManager) => [
    ...textFactory(assetManager, "", new Vector2(-940, -500)),
    FpsMetter,
];
