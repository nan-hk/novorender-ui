import * as NovoRender from "@novorender/webgl-api";

export async function main(canvas: HTMLCanvasElement) {
  // Create API
  const api = NovoRender.createAPI();
  console.log('Hello')
  // Create a view
  const view = await api.createView(
    { background: { color: [0, 0, 0.25, 1] } },
    canvas
  );
  console.log(view)
  // load a predefined scene into the view, available views are cube, oilrig, condos
  view.scene = await api.loadScene('https://api.novorender.com/assets/scenes/18f56c98c1e748feb8369a6d32fde9ef/');

  // provide a controller, available controller types are static, orbit, flight and turntable
  view.camera.controller = api.createCameraController({ kind: "turntable" });

  const ctx = canvas.getContext("bitmaprenderer");

  // render-loop https://dens.website/tutorials/webgl/render-loop
  while (true) {
    const { clientWidth: width, clientHeight: height } = canvas;
    // handle resizes
    view.applySettings({ display: { width, height } });
    const output = await view.render();

    {
      const image = await output.getImage();
      if (image && ctx) {
        // display in canvas
        ctx.transferFromImageBitmap(image);
      }
    }
    (output as any).dispose();
  }
}
