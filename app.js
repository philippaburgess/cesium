// Grant CesiumJS access to your ion assets

Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODMwMDg5ZC0wYjJlLTQ2NmEtOTg5Ny1iMzI0NzNjMjU5YjYiLCJpZCI6MTczNDE4LCJpYXQiOjE2OTk4NTI5NDh9.VtT7XV6WVveRJijzrNyZLOsooZ6p14yChusoetLIL54";
document.addEventListener('DOMContentLoaded', function() {

  // Create a new viewer with the terrain provider and disable unwanted widgets
  const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain(),
    baseLayerPicker: false,
    geocoder: false,
    homeButton: false,
    infoBox: false,
    navigationHelpButton: false,
    sceneModePicker: false,
    timeline: false,
    animation: false,
    requestRenderMode: true,
    globe: false, // Disable the globe
    skyAtmosphere: new Cesium.SkyAtmosphere(), // Manually enable the atmosphere
  });

const viewer = new Viewer('cesiumContainer', {
    imageryProvider: new Cesium.IonImageryProvider({ assetId: 2275207 }), // Replace with your Google Photorealistic 3D Tiles asset ID
    terrainProvider: new Cesium.IonTerrainProvider({ assetId: 1 }), // Cesium World Terrain
    baseLayerPicker: false,
    geocoder: false,
});


  viewer.scene.primitives.add(tileset);

  tileset.readyPromise.then(function(loadedTileset) {
    // Zoom to the tileset once it's ready
    viewer.zoomTo(loadedTileset);

    // Set the camera to view the Port of Long Beach
    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(-118.2153, 33.7550, 1000),
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



