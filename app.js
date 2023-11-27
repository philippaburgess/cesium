document.addEventListener('DOMContentLoaded', function() {
  // Set your Cesium Ion default access token.
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODMwMDg5ZC0wYjJlLTQ2NmEtOTg5Ny1iMzI0NzNjMjU5YjYiLCJpZCI6MTczNDE4LCJpYXQiOjE2OTk4NTI5NDh9.VtT7XV6WVveRJijzrNyZLOsooZ6p14yChusoetLIL54';

  const viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: false, // No default imagery
    baseLayerPicker: false,
    geocoder: false,
    homeButton: false,
    infoBox: false,
    navigationHelpButton: false,
    sceneModePicker: false,
    timeline: false,
    animation: false,
    requestRenderMode: true, // Optimize rendering
  });

  // Fly to Port of Long Beach with a duration of 3 seconds to ensure you can see the transition
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
