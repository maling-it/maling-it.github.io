const resource = [

  /* --- CSS --- */
  '/assets/css/hm.css',
  '/assets/css/component.css',
  '/assets/css/landing.css',
  '/assets/css/page.css',
  '/assets/css/syntax.css',
  
  /* --- LOGO --- */
  '/assets/malingit.svg',
  
  /* --- JavaScripts --- */
  
  '/assets/js/zxc.js',
  '/assets/js/custom.js',
  '/assets/js/post.js',
  '/app.js',
  '/sw.js',
  'https://utteranc.es/client.js',

  /* --- HTML --- */
  '/index.html',
  '/404.html',
  
  /* --- Pages --- */
  
    '/archives/',
  
    '/info/',
  
    '/tools/',
  
    '/tags/',
  
    '/category/',
  
  /* --- Author --- */
  
    '/info/catur/',
  
    '/info/memet/',
  
    '/info/tutu/',
  


  /* --- Favicons --- */
  

  '/assets/favicons/android-chrome-192x192.png',
  '/assets/favicons/android-chrome-512x512.png',
  '/assets/favicons/apple-touch-icon.png',
  '/assets/favicons/favicon-16x16.png',
  '/assets/favicons/favicon-32x32.png',
  '/assets/favicons/favicon.ico',
  '/assets/favicons/mstile-150x150.png',
  '/assets/favicons/site.webmanifest',
  '/assets/favicons/browserconfig.xml'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  
    'www.googletagmanager.com',
    'www.google-analytics.com',
  

  'maling-it.github.io',
  'raw.githubusercontent.com',
  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'cdnjs.cloudflare.com',
  'polyfill.io',
  'unpkg.com'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];
