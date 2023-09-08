import React, {useEffect} from 'react';
import {main} from "./condos";

export const Condo = () => {

  useEffect(() => {

    const canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;
    main(canvas);
  }, []);

  return (
      <>
        <h1>Hello</h1>
      <canvas id="canvas"></canvas>
      </>
  );
}