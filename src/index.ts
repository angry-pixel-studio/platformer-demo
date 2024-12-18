import { BroadPhaseMethods, CollisionMethods, Game } from "angry-pixel";
import { MainScene } from "@scene/MainScene";
import { collisionMatrix } from "@config/collisionMatrix";

const params = new URLSearchParams(window.location.search);

export const createAndStart = () => {
    // create game
    const game = new Game({
        containerNode: document.querySelector("#app"),
        width: 1920,
        height: 1080,
        canvasColor: "#1b0841",
        physicsFramerate: 180,
        collisions: {
            collisionMatrix,
            collisionBroadPhaseMethod: BroadPhaseMethods.SpartialGrid,
            collisionMethod: CollisionMethods.SAT,
        },
        debugEnabled: Boolean(Number(params.get("debug"))),
    });

    //  add scenes
    game.addScene(MainScene, "MainScene", true);

    // start game
    game.start();
};

createAndStart();
