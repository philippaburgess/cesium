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
  const viewer = new Cesium.Viewer("cesiumContainer", {
    // These options turn off extra Cesium features that are not needed.
    globe: true,
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

// Adding the 3D Tiles Photorealistic layer
viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
  url: Cesium.IonResource.fromAssetId(2275207)
}));

// Fly the camera to the Port of Long Beach
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(-118.2153, 33.7550, 1000),
  orientation: {
    heading: Cesium.Math.toRadians(0),
    pitch: Cesium.Math.toRadians(-35),
    roll: 0.0
  }
});

// Adding the ArcGIS Web Feature Layer as GeoJSON
const featureLayerUrl = 'https://services1.arcgis.com/ZIL9uO234SBBPGL7/arcgis/rest/services/Health_Impact_Points_POLB_OptimizedD2CANCER/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson';

viewer.dataSources.add(Cesium.GeoJsonDataSource.load(featureLayerUrl, {
  // Set the marker symbol and color here if needed
  // Example: pointToLayer and onEachFeature functions
}));



