---
# The list to be cached by PWA
---

const resource = [

  /* --- CSS --- */
  '{{ "/assets/css/hm.css" | relative_url }}',
  '{{ "/assets/css/component.css" | relative_url }}',
  '{{ "/assets/css/landing.css" | relative_url }}',
  '{{ "/assets/css/page.css" | relative_url }}',
  '{{ "/assets/css/syntax.css" | relative_url }}',
  
  /* --- LOGO --- */
  '{{ "/assets/malingit.svg" | relative_url }}',
  
  /* --- JavaScripts --- */
  {% assign js_path = "/assets/js" | relative_url %}
  '{{ js_path }}/zxc.js',
  '{{ js_path }}/custom.js',
  '{{ js_path }}/post.js',
  '{{ "/app.js" | relative_url }}',
  '{{ "/sw.js" | relative_url }}',
  'https://giscus.app/client.js',

  /* --- HTML --- */
  '{{ "/404.html" | relative_url }}',

  /* --- Favicons --- */
  {% assign favicon_path = "/assets/favicons" | relative_url %}

  '{{ favicon_path }}/android-chrome-192x192.png',
  '{{ favicon_path }}/android-chrome-512x512.png',
  '{{ favicon_path }}/apple-touch-icon.png',
  '{{ favicon_path }}/favicon-16x16.png',
  '{{ favicon_path }}/favicon-32x32.png',
  '{{ favicon_path }}/favicon.ico',
  '{{ favicon_path }}/mstile-150x150.png',
  '{{ favicon_path }}/site.webmanifest',
  '{{ favicon_path }}/browserconfig.xml'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  {% if site.google_analytics.id != '' %}
    'www.googletagmanager.com',
    'www.google-analytics.com',
  {% endif %}

  '{{ site.url | split: "//" | last }}',
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
  {% if site.google_analytics.pv.cache_path %}
    '{{ site.google_analytics.pv.cache_path | absolute_url }}'
  {% endif %}
];
