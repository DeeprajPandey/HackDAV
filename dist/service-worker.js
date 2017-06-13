//version:1.1
/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["images/GDGBBSR.png","dc9af5027061035ec556699b61d077e5"],["images/hackdav_logo.png","45a2281be19d90c9835896dfa8a5ea28"],["images/hackerearth.png","28e6978b3a1804c229a812465376dfaa"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/jetbrains.svg","63df7d5cec738d36df3b521fe9dd4973"],["images/makeschool.png","9043852d3c6397b188ac9b2a3479956f"],["images/sketch.png","2138f3943c6f9b9031de01d99c1dcf42"],["images/soylent.png","e9da84963cdee9891bc7e651a923fd13"],["images/stickermule.svg","a1a3271e11fcc41760458bbcec93763f"],["images/tech.png","d50de7e45ee59ead67e6193a72b81a8a"],["images/touch/android-chrome-144x144.png","628fba1fa56979f4e652aa849d1c8ace"],["images/touch/android-chrome-192x192.png","d57b79b6ac7e82aa1913664d439a4c24"],["images/touch/android-chrome-256x256.png","bfe5e48eeae7e44e258ba88cef2d18c6"],["images/touch/android-chrome-36x36.png","603617b0eef82d4956a1ac6dfa347ba6"],["images/touch/android-chrome-384x384.png","8ab34b0b016f4f140d935bbf9293b273"],["images/touch/android-chrome-48x48.png","826fbeba9d5b56e7ee29b823954ca072"],["images/touch/android-chrome-512x512.png","768ae500c18a380b925655fd634a3cca"],["images/touch/android-chrome-72x72.png","031218eeac78027632ad1ffb73be007e"],["images/touch/android-chrome-96x96.png","00e5eb46006ee2289c9b7a258a1e9ea0"],["images/touch/apple-touch-icon-114x114-precomposed.png","bfbbc3b26ae45117ad8ed97030dc5a59"],["images/touch/apple-touch-icon-114x114.png","5dbb78456f98ba7783bdfa819357acce"],["images/touch/apple-touch-icon-120x120-precomposed.png","cd40f5c1112777525d46f87c92c29830"],["images/touch/apple-touch-icon-120x120.png","1d56f8dc4cff49429a35c5ddd889d654"],["images/touch/apple-touch-icon-144x144-precomposed.png","9c3d203a5d959fd7523336dd9a41e89d"],["images/touch/apple-touch-icon-144x144.png","ecac445bd4ef93ecd3e56d145b7a23be"],["images/touch/apple-touch-icon-152x152-precomposed.png","1be6fa88587aa1b6b861714d68b0f449"],["images/touch/apple-touch-icon-152x152.png","0bb03d410efab2c407d30eaea03a7f9e"],["images/touch/apple-touch-icon-180x180-precomposed.png","1ee3e400e82c0e05604e3d223ff779e7"],["images/touch/apple-touch-icon-180x180.png","6b517cd2114e04a24dd304010861a579"],["images/touch/apple-touch-icon-57x57-precomposed.png","6b5150780e6345a5761b8678b91416c7"],["images/touch/apple-touch-icon-57x57.png","e5657c512db963c9b0016176e46c0ac1"],["images/touch/apple-touch-icon-60x60-precomposed.png","5ac5a01d92fcbf45c5ce9998224ce205"],["images/touch/apple-touch-icon-60x60.png","b7d24d5fdcdb6743238fb83cf27b7d5c"],["images/touch/apple-touch-icon-72x72-precomposed.png","7acd8ebdeb2de1e7c8ed34c25483d0d7"],["images/touch/apple-touch-icon-72x72.png","ec1ee109d3b73423dc982fb4dae47dc2"],["images/touch/apple-touch-icon-76x76-precomposed.png","03982fb19f2b44f622e37cc5cf3d5f14"],["images/touch/apple-touch-icon-76x76.png","dbb99a7e653fb79938e055f0715532c1"],["images/touch/apple-touch-icon-precomposed.png","1ee3e400e82c0e05604e3d223ff779e7"],["images/touch/apple-touch-icon.png","6b517cd2114e04a24dd304010861a579"],["images/touch/favicon-16x16.png","c4726ad9425ec78c06c9a9fda4ec61e3"],["images/touch/favicon-32x32.png","c3d96aec5b7e8c120afe88ec333ed765"],["images/touch/favicon.ico","1aa6a8fc4b0d492a01ee5ddb19cd5711"],["images/touch/icon-128x128.png","05def6bc38e6429874d8082d0a8dbd57"],["images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["images/touch/mstile-144x144.png","36cf805832707d21bb40be28e7faa7f3"],["images/touch/mstile-150x150.png","264c69b47790767a101cc396326f5f0b"],["images/touch/mstile-310x310.png","2e141a975cd92b81da9b0bbdd7e4c093"],["images/touch/mstile-70x70.png","b5e2d7e8735de3f66993a5e5c0f96784"],["images/touch/safari-pinned-tab.svg","dfee3c68efb5a096383e1da14eaa1dbf"],["index.html","4a80d1c06dfb575f0407b64d010374c8"],["manifest.json","b6d72f50066edc84e8d0c7dea857d459"],["scripts/main.min.js","a1e094d02b040d867612c5901f8dcc60"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","2770efb889cc10c4de88d0b746c2a13c"],["styles/main.css","ccdb24c613144b690146cf174e483668"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-HackDAV-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




