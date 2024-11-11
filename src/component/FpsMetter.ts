export class FpsMetter {
    gameLogicTimer: number = 0;
    gameLogicCounter: number = 0;
    gameLogicFps: string = "";
    physicsTimer: number = 0;
    physicsCounter: number = 0;
    physicsFps: string = "";
    renderTimer: number = 0;
    renderCounter: number = 0;
    renderFps: string = "";
    template: string = "Game: %{g} FPS. Physics: %{p} FPS. Rendering: %{r} FPS.";
}
