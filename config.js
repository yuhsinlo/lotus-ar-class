// 此檔與 index.html 放在同一個 HTTPS 網站，不是貼進 GAS。
window.LOTUS_CONFIG = {
  gasUrl: 'https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbzW18J8MmhRnjZw904RhPFaMBPLyroqMfFHNU8QUq8MLJLR3ByDYF2Ny4ck32RIz2n2NQ/exec/exec',
  modelUrl: './plant.glb',
  targetUrl: './targets.mind',
  // 必須與 GLB 內水體的物件名稱完全相同；常見為 Water_volume 或 Water volume。
  // 平台載入後會列出水體候選名稱，找不到時停止，避免重複疊加水體。
  waterNodeName: 'Water volume',
  // 對應先前 lotus_tank.py 的 Blender 尺寸，GLB 匯出時啟用 +Y Up。
  soilY: 0.20,
  waterWidth: 2.77,
  waterDepth: 1.87,
  centerX: 0,
  centerZ: 0,
  modelScale: 0.48
};
