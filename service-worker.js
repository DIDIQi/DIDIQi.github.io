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

var precacheConfig = [["D:/DIDI-FILE/Code/web/hexo-myblog/public/2020/06/29/hello-world/index.html","5044f1329603129a56f25d4d9d7eeef1"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/404.html","4a28314e1142d8a06e542ffdeab76c13"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/Lab/index.html","f5719878d51090f721a51cce14b7582b"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/archives/2020/06/index.html","f9dc0de800def740ed2d302223447279"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/archives/2020/index.html","652e2591dd72fc0e95395a2329ecebb1"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/archives/index.html","8ae5581fd79bad137b6e7c3f77c669cc"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/categories/index.html","4f5faf2a6dde14c3ec9b70587511707a"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/comment/index.html","ef3fa8f2b97ce70568b516f1c8e2acfd"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/css/index.css","6832a4d7a60271053ea0e465ba5beb06"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/404.jpg","f53953491677704a561930e2e56aa767"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/alipay.jpg","542f7e17f351f532aefe9114f624fdc2"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/bg1.png","9fcbf058f394c626c4c00dcaa1789202"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/bg2.png","e7fd4e370acdd6d6b7f3fedbf7b506bd"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/bg3.png","48edcd9b220bf949f595755c0e711cdb"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/bg4.png","80410a27f3e638124086c26dbac8abef"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/bg5.png","611e4a1f379cc0d4a65298041a7fdb84"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/copy404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/copyloading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/faviconn.png","37f381603b887dd5a3a2d430a59869fe"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/jiayouNo.jpg","159ee1eb5fcc8c14d91636fa26590bf6"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/loading.gif","813d40da1b634ef1d7f7cf4f8ee0113e"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/pandaMC.png","f1c3ae92a81b1201d46b1dbcbc5ab345"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/pignose.jpg","217c20717eb5678a0c5a21339ee3893f"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/img/wechat.png","cb6ee848c7def651638f99a5929a83fe"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/index.html","537a86cfd7efa911d14ae5e70864846e"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/main.js","af1fc968dd48dafada95cd797f906acc"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/js/utils.js","9a79a530e612235ae91149848ed41a83"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/link/index.html","8f41761e5e53787780ac337cbf172ecb"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/photoes/index.html","da31ad069146eb1233d6fc60291bf5c3"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/statis/index.html","d7bb32bbcf0ee0cf775abe99eb1aaf7c"],["D:/DIDI-FILE/Code/web/hexo-myblog/public/tags/index.html","af1c1966e598a67ce7aa939233961b90"]];
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







