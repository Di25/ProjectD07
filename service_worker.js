const cacheName = 'D07_V1';

const cacheAssets = [
    '/',
    '/index.html',
    '/app.html',
    '/css/styles.css',
    '/css/styles_Res.css',
    '/js/main.js',
    '/js/script.js',
    '/js/animation.js',
    '/fonts/BasementGrotesque-Black_v1.202.otf',
    '/sounds/hiphop/hat_1.wav',
    '/sounds/hiphop/hat_2.wav',
    '/sounds/hiphop/kick_1.wav',
    '/sounds/hiphop/kick_2.wav',
    '/sounds/hiphop/kick_3.wav',
    '/sounds/hiphop/snap_1.wav',
    '/sounds/hiphop/snare_1.wav',
    '/sounds/hiphop/snare_2.wav',
    '/sounds/hiphop/snare_3.wav',
    'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
    '/assets/BGs/',
    '/assets/BGs/APP.png',
    '/assets/BGs/gif_4.gif',
    'assets/svgs/github-brands.svg',
    'assets/svgs/html5-brands.svg',
    'assets/svgs/css3-alt-brands.svg',
    'assets/svgs/js-square-brands.svg',
    
]


// Install Event
self.addEventListener('install', (e) =>{
    console.log('Service Worker : Installed');

    e.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('Service Worker : Cacheing Files');
            cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
    )
});

// Activate Event
self.addEventListener('activate', (e) =>{
    console.log('Service Worker : Activated');

    //Remove Unwanted Caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName){
                        console.log('Service Worker : Clearing Old Cache');
                        return caches.delete(cache);

                    }
                })
            )
        })
    );
});


// Call Fetch Event
self.addEventListener('fetch', e =>{
    console.log('Service Worker : Fetching');
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    )
})