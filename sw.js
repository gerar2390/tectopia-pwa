
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('tectopia-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/logo.png',
        '/product1.jpg',
        '/product2.jpg'
      ]);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
