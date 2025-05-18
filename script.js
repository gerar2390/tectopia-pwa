
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(reg => console.log('Service Worker registrado'))
    .catch(err => console.error('Error:', err));
}
