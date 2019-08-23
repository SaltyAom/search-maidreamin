let CACHE_STATIC_NAME = "v1"

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(CACHE_STATIC_NAME).then(cache => {
			cache.addAll(["index.html"])
		})
	)
})

self.addEventListener("activate", event => {
	event.waitUntil(
		caches.keys().then(keyList => {
			return Promise.all(
				keyList.map(key => {
					if (key !== CACHE_STATIC_NAME) {
						console.log("Removing old cache.", key)
						return caches.delete(key)
					}
				})
			)
		})
	)
	return self.clients.claim()
})

self.addEventListener("fetch", event => {
	event.respondWith(
		// Try the network
		fetch(event.request)
			.then(res => {
				return caches.open(CACHE_STATIC_NAME).then(cache => {
					cache.put(event.request.url, res.clone())
					return res
				})
			})
			.catch(err => {
				// Fallback to cache
				return caches.match(event.request).then(res => {
					if (res === undefined) {
						// get and return the offline page
					}
					return res
				})
			})
	)
})
