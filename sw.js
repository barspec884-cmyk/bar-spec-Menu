const CACHE_NAME = 'bar-spec-v1';
const urlsToCache = [
  'index.html',
  'menu_data.js',
  'images/logo.png',
  // 他に読み込む画像やCSSがあればここに追加
];

// インストール時にキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// ネットワーク優先、失敗したらキャッシュを返す（メニュー更新を反映しやすくするため）
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});