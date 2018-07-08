addEventListener('install', () => {
  console.log('service worker is installing')
  skipWaiting()
})
addEventListener('activate', () => {
  console.log('service worker is activating')
  skipWaiting()
})
addEventListener('fetch', e => {
  e.respondWith(
    new Response('Hello, world!')
  )
  skipWaiting()
})
