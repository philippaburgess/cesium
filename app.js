document.addEventListener('DOMContentLoaded', function() {
  // Set your Cesium Ion default access token.
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODMwMDg5ZC0wYjJlLTQ2NmEtOTg5Ny1iMzI0NzNjMjU5YjYiLCJpZCI6MTczNDE4LCJpYXQiOjE2OTk4NTI5NDh9.VtT7XV6WVveRJijzrNyZLOsooZ6p14yChusoetLIL54';
  const viewer = new Cesium.Viewer('cesiumContainer', {
    baseLayerPicker: false,
    homeButton: false,
    infoBox: false,
    navigationHelpButton: false,
    sceneModePicker: false,
    timeline: false,
    animation: false,
    requestRenderMode: true,
  });

  const imageryLayer = viewer.imageryLayers.addImageryProvider(new Cesium.IonImageryProvider({
    assetId: 2275207 // The ID for the photorealistic 3D Tiles
  }));
  
  const tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: Cesium.IonResource.fromAssetId(2275207) // The ID for the photorealistic 3D Tiles
  }));

  tileset.readyPromise.then(function() {
    viewer.zoomTo(tileset);
  }).catch(function(error) {
    console.error(error);
  });

  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-118.2153, 33.7550, 1500),
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-35),
      roll: 0.0
    }
  });
});
