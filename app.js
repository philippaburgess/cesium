document.addEventListener('DOMContentLoaded', function() {
  // Set your Cesium Ion default access token.
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODMwMDg5ZC0wYjJlLTQ2NmEtOTg5Ny1iMzI0NzNjMjU5YjYiLCJpZCI6MTczNDE4LCJpYXQiOjE2OTk4NTI5NDh9.VtT7XV6WVveRJijzrNyZLOsooZ6p14yChusoetLIL54';

  // Create the Cesium Viewer with the specified imagery provider and terrain provider.
  const viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.IonImageryProvider({ assetId: 2275207 }), // Use your Google Photorealistic 3D Tiles asset ID
    terrainProvider: new Cesium.CesiumTerrainProvider({
      url: Cesium.IonResource.fromAssetId(1) // Use the Cesium World Terrain asset ID
    }),
    baseLayerPicker: false, // Optionally hide the base layer picker
    // ... other viewer options
  });

  // Load the 3D Tiles and add them to the scene.
  viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: Cesium.IonResource.fromAssetId(2275207) // Your Google Photorealistic 3D Tiles asset ID
  }));

  // Fly the camera to the Port of Long Beach.
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-118.2153, 33.7550, 1500),
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-30),
      roll: 0.0
    }
  });
});
