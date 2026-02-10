const CACHE_NAME = 'angelos-v1-cache';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&family=JetBrains+Mono:wght@400;700&family=Playfair+Display:ital,wght@1,700&display=swap'
];

// Main Install Event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Fetch Event - Dito kinukuha ang files kahit walang internet
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
