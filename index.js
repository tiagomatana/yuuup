if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/yuuup/sw.js')
        .then(function() { console.log('Service Worker Registered'); });
}
