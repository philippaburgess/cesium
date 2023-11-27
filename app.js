import { Cartesian3, createOsmBuildingsAsync, Ion, Math as CesiumMath, Terrain, Viewer } from 'cesium';

// Grant CesiumJS access to your ion assets
document.addEventListener('DOMContentLoaded', function() {
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODMwMDg5ZC0wYjJlLTQ2NmEtOTg5Ny1iMzI0NzNjMjU5YjYiLCJpZCI6MTczNDE4LCJpYXQiOjE2OTk4NTI5NDh9.VtT7XV6WVveRJijzrNyZLOsooZ6p14yChusoetLIL54";
 
  const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain(),

  
const viewer = new Cesium.Viewer('cesiumContainer', {
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

   
try {
  const tileset = await Cesium.createGooglePhotorealistic3DTileset();
  viewer.scene.primitives.add(tileset);
} catch (error) {
  console.log(`Failed to load tileset: ${error}`);
}

  });

  const tileset = new Cesium.Cesium3DTileset({
    url: Cesium.IonResource.fromAssetId(2275207) // Asset ID for the photorealistic 3D Tiles
  });

const viewer = new Cesium.Viewer("cesiumContainer", {
    globe: false,
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

