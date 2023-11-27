// Grant CesiumJS access to your ion assets
document.addEventListener('DOMContentLoaded', function() {
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmZTE0OGI1Ni03MTk3LTQxYzYtYTc3MS1mY2M1ZDFjMzYyYmMiLCJpZCI6MTczNDE4LCJpYXQiOjE2OTgwODUwNDF9.VeJhEdO20c8chc58WWuT3VGj5wiuSLdHqx0I4S7mfss";
 
  const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain(),
  });

  viewer.scene.globe.enableLighting = true;

  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-118.2153, 33.7550, 1000),
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-35),
      roll: 0.0
    },
    duration: 3
  });
});

