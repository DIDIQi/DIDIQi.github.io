/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/DIDI-FILE/Code/web/hexo-myblog/public/2020/07/04/blog-01/index.html","acf28cffc8081ba345f767dae3940cf4"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/2020/07/04/blog-02/index.html","63baa13bb53b18a299919fdc53b4e4aa"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/404.html","f08f82ee2ecc171241266b5d7ebc52a9"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/Lab/index.html","8905ee413e10f9f69db8bc77f7825fdc"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/about/index.html","a7196e3a4d732584876440f6d20a95de"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/archives/2020/07/index.html","2e766e1fb104f602749150a779096fb7"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/archives/2020/index.html","838ef4e8c90f04cf40c71e00547be8dd"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/archives/index.html","ea4854caa81881db71a966185e62b779"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/categories/index.html","d8e9f33b4e0d065e3349544de327dddd"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/categories/随笔/index.html","2df766c67b949fa54fdd3a0fa7cb1f3a"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/comment/index.html","43425656fc74c1704a9ed5214e4b7fb5"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/css/index.css","88be40f6c4be7655140dd622152b817c"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/404.jpg","9df39f9f85511a6b1433dae0bdfbe8a7"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/alipay.jpg","542f7e17f351f532aefe9114f624fdc2"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/copy404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/pignose.png","5627b40ccdadca6e866fc466740b2b9b"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/tinypng.png","647523013b89e5cc2af4423078e785a3"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/wechat.png","cb6ee848c7def651638f99a5929a83fe"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/index.html","38ece7eafdcb52fc321e7d597ba690e0"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/main.js","af1fc968dd48dafada95cd797f906acc"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/utils.js","9a79a530e612235ae91149848ed41a83"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/link/index.html","4c9ab8facface1d7af050159a89ba44b"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/photoes/BlogBG/index.html","e7ee98675c88c86427ceb621d50d273f"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/photoes/girls/index.html","dfe615d0dce1a986521942f7f1e21f57"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/photoes/index.html","e1256239593e2fa7e0ce87d9ec25383d"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/photoes/marvel/index.html","dcb18f1c426e2e242d8b308879eee2ec"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/photoes/wallpaper/index.html","7e49174df5e557819ebc1a69885a9336"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/tags/index.html","8dd46ff282888cba3a0bad74242abe53"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/tags/生活/index.html","3c3f41fd3907cbe5c63d4c83d3aff2cf"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

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


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







