// Grant CesiumJS access to your ion assets
document.addEventListener('DOMContentLoaded', function() {
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODMwMDg5ZC0wYjJlLTQ2NmEtOTg5Ny1iMzI0NzNjMjU5YjYiLCJpZCI6MTczNDE4LCJpYXQiOjE2OTk4NTI5NDh9.VtT7XV6WVveRJijzrNyZLOsooZ6p14yChusoetLIL54";

const viewer = new Cesium.Viewer("cesiumContainer", {
  // Use Cesium World Terrain
  terrainProvider: Cesium.createWorldTerrain(),
  // Improve performance by not automatically requesting render
  requestRenderMode: true,
  // Reduce the maximum number of terrain tiles to load (for performance)
  maximumScreenSpaceError: 16,
    globe:false,
    skyAtmosphere: new Cesium.SkyAtmosphere(),
    sceneModePicker: false,
    baseLayerPicker: false,
    geocoder: false,
    homeButton: false,
    infoBox: false,
    navigationHelpButton: false,
    timeline: false,
    animation: false,
  });

const tileset = new Cesium.Cesium3DTileset({
    url: Cesium.IonResource.fromAssetId(2275207) // Asset ID for the photorealistic 3D Tiles
  });

  viewer.scene.primitives.add(tileset);

  tileset.readyPromise.then(function(tileset) {
    viewer.zoomTo(tileset);
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
    console.error("Error loading Google Photorealistic 3D Tiles:", error);
  });
});

