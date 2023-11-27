document.addEventListener('DOMContentLoaded', function() {
  // Set your Cesium Ion default access token.
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODMwMDg5ZC0wYjJlLTQ2NmEtOTg5Ny1iMzI0NzNjMjU5YjYiLCJpZCI6MTczNDE4LCJpYXQiOjE2OTk4NTI5NDh9.VtT7XV6WVveRJijzrNyZLOsooZ6p14yChusoetLIL54';
  
onst viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.IonImageryProvider({
      assetId: 2275207  // Asset ID for the photorealistic 3D Tiles
    }),
    terrainProvider: new Cesium.CesiumTerrainProvider({
      url: Cesium.IonResource.fromAssetId(1)  // Cesium World Terrain
    }),
    baseLayerPicker: false,
    geocoder: false,
    homeButton: false,
    infoBox: false,
    navigationHelpButton: false,
    sceneModePicker: false,
    timeline: false,
    animation: false,
    requestRenderMode: true
  });

  const tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: Cesium.IonResource.fromAssetId(2275207)  // Again, the Asset ID for the photorealistic 3D Tiles
  }));

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
    console.error(error);
  });
});
