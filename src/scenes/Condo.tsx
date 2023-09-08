import React, {useEffect} from 'react';
import {renderCondoScene} from "./condos";

export const Condo = () => {

  useEffect(() => {
    const canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;

    // Errors while rendering condos (createView function has an error)
    // renderCondoScene(canvas);
  }, []);

  return (
      <>
        <h1>Novorender Test</h1>
        <canvas id="canvas"></canvas>
      </>
  );
}