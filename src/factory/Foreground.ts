import {
    Component,
    AssetManager,
    RigidBody,
    RigidBodyType,
    TiledWrapper,
    TilemapCollider,
    TilemapRenderer,
    Transform,
    Vector2,
} from "angry-pixel";
import { ASSETS } from "@config/assets";
import { COLLISION_LAYERS, RENDER_LAYERS } from "@config/layers";

export const foregroundFactory = (assetManager: AssetManager): Component[] => [
    new Transform(),
    new TiledWrapper({
        layerToRender: "Foreground",
        tilemap: require("@tilemap/tilemap.json"),
    }),
    new TilemapRenderer({
        tileset: {
            image: assetManager.getImage(ASSETS.images.tileset),
            tileWidth: 16,
            tileHeight: 16,
            width: 12,
            margin: new Vector2(0.1, 0.1),
            spacing: new Vector2(-0.1, -0.1),
        },
        layer: RENDER_LAYERS.Foreground,
    }),
    new TilemapCollider({
        layer: COLLISION_LAYERS.Foreground,
        composite: true,
    }),
    new RigidBody({
        type: RigidBodyType.Static,
    }),
];
