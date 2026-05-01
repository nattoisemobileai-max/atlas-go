const CACHE_NAME = 'atlasgo-v1';
const assets = [
  '/',
  '/index.html',
  '/js/data.js',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
