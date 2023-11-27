// Grant CesiumJS access to your ion assets
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmZTE0OGI1Ni03MTk3LTQxYzYtYTc3MS1mY2M1ZDFjMzYyYmMiLCJpZCI6MTczNDE4LCJpYXQiOjE2OTgwODUwNDF9.VeJhEdO20c8chc58WWuT3VGj5wiuSLdHqx0I4S7mfss";

const viewer = new Cesium.Viewer("cesiumContainer", {
  // This is a global 3D Tiles tileset so disable the
  // globe to prevent it from interfering with the data
  globe: false,
  // Disabling the globe means we need to manually
  // re-enable the atmosphere
  skyAtmosphere: new Cesium.SkyAtmosphere(),
  // 2D and Columbus View are not currently supported
  // for global 3D Tiles tilesets
  sceneModePicker: false,
  // Imagery layers are not currently supported for
  // global 3D Tiles tilesets
  baseLayerPicker: false,
});

try {
  const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(2275207);
  viewer.scene.primitives.add(tileset);
} catch (error) {
  console.log(error);


    // Set the camera to view the Port of Long Beach
    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(-118.2153, 33.7550, 1000), // Replace with the desired altitude
      orientation: {
        heading: Cesium.Math.toRadians(0),
        pitch: Cesium.Math.toRadians(-35), // Tilt the view down
        roll: 0.0
      }
    });
  }).catch(function(error) {
    console.error(error);
  });
});

viewer.dataSources.add(Cesium.KmlDataSource.load('./Health_Impact_Points_POLB_OptimizedD2CANCER.kml', {
  camera: viewer.scene.camera,
  canvas: viewer.scene.canvas
}));

