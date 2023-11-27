document.addEventListener('DOMContentLoaded', function() {
  // Set your Cesium Ion default access token.
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODMwMDg5ZC0wYjJlLTQ2NmEtOTg5Ny1iMzI0NzNjMjU5YjYiLCJpZCI6MTczNDE4LCJpYXQiOjE2OTk4NTI5NDh9.VtT7XV6WVveRJijzrNyZLOsooZ6p14yChusoetLIL54';

  const viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.IonImageryProvider({ assetId: 3954 }), // Replace with the actual asset ID for the imagery layer
    terrainProvider: new Cesium.CesiumTerrainProvider({
      url: Cesium.IonResource.fromAssetId(1)
    }),
    baseLayerPicker: false,
    geocoder: false,
    homeButton: false,
    infoBox: false,
    navigationHelpButton: false,
    sceneModePicker: false,
    timeline: false,
    animation: false
  });

  
  // Load the photorealistic 3D Tiles. 
  var tileset = new Cesium.Cesium3DTileset({
    url: Cesium.IonResource.fromAssetId(2275207)
  });

  viewer.scene.primitives.add(tileset);

  tileset.readyPromise.then(function() {
    viewer.zoomTo(tileset);
  }).otherwise(function (error) {
    console.log(error);
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




