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

var precacheConfig = [["D:/MyBlog/public/2020/07/01/blog-01/index.html","1f6af60b047b3a695fc01afb27e06670"],["D:/MyBlog/public/2020/07/02/blog-02/index.html","c438188d65ec6f3988a91d68a032764f"],["D:/MyBlog/public/2020/07/24/blog-03/index.html","d1a7a263607b3841da3c5bc98e7a19b4"],["D:/MyBlog/public/2020/07/24/blog-04/index.html","641376f620f92a26b385db10484dee34"],["D:/MyBlog/public/2020/07/25/blog-05/index.html","0a4e4501ebba334cb9b9c04ade7dfb8c"],["D:/MyBlog/public/2020/07/29/pythonNote/index.html","7df9694d7754c4ae9aa1715d81c76886"],["D:/MyBlog/public/2020/07/31/ExeCode-1/index.html","a2e960062ecc9aa3283f53e00c9a11cb"],["D:/MyBlog/public/2020/08/03/gitNote/index.html","36ffb43ace537a23ecf960d256aa4f07"],["D:/MyBlog/public/2020/08/07/tomcatNote/index.html","17c7e39b7b70de71accc76c7df428de3"],["D:/MyBlog/public/2020/08/08/markDownNote/index.html","8bdfb89cb77bda3d0cfb5ce5932e8bd8"],["D:/MyBlog/public/2020/08/09/JavaNote/index.html","4674d527d3c55107de4d8c0c6e3cd46e"],["D:/MyBlog/public/2020/08/09/UMLNote/index.html","9a62f5ac1855b9b1b6c38e7b53557c43"],["D:/MyBlog/public/2020/08/09/designPatternNote/index.html","2a7297187ca615cd427bc7f270deacfb"],["D:/MyBlog/public/2020/08/11/JNDINote/index.html","b7d052f6b96938c84fd0ebff22ff7266"],["D:/MyBlog/public/2020/08/14/JPANote/index.html","d8dbf5fd407689a92df776e8bf866ed5"],["D:/MyBlog/public/2020/08/14/springOfIoC/index.html","cf954335b8109c65980b534b6ead8032"],["D:/MyBlog/public/2020/08/17/SpringOfAOP/index.html","597fd574869a81b02fc6efacc0310c54"],["D:/MyBlog/public/404.html","2755fd6821530458c22424de9613aa93"],["D:/MyBlog/public/Lab/index.html","8905ee413e10f9f69db8bc77f7825fdc"],["D:/MyBlog/public/about/index.html","189ce78a55973a3101d8dbe6cd2bbf37"],["D:/MyBlog/public/archives/2020/07/index.html","38e29178a5c3504f3340e72a36ef9e2c"],["D:/MyBlog/public/archives/2020/08/index.html","4f29931f0792c81fde065cc3f58aedfb"],["D:/MyBlog/public/archives/2020/index.html","3cef365edef5af684abd75b37a4226ef"],["D:/MyBlog/public/archives/2020/page/2/index.html","0dab281f40034adaf757c73424e21798"],["D:/MyBlog/public/archives/index.html","44813fe50f327aa5ba0a18373e656e81"],["D:/MyBlog/public/archives/page/2/index.html","8b0cfcf754732415f33d0ffe070c5506"],["D:/MyBlog/public/categories/blog搭建/index.html","e427d5ad081c25d890485feee7f8b426"],["D:/MyBlog/public/categories/index.html","323b686b19a69a9149a0e7b2d4982b9d"],["D:/MyBlog/public/categories/刷题/index.html","2e0a34751a0c088db8bda1841a9893d6"],["D:/MyBlog/public/categories/学习笔记/index.html","e9deea3c3350cb52141835e965c2af79"],["D:/MyBlog/public/categories/学习笔记/page/2/index.html","687e6fe1951c80741b390f6db7720410"],["D:/MyBlog/public/categories/读书/index.html","b52edf1bee069187badc918a99c9b5b2"],["D:/MyBlog/public/categories/随笔/index.html","7c29f9339f6bc4d5643c2665315d95b4"],["D:/MyBlog/public/comment/index.html","dee2396059e3d8daf47f469467a77090"],["D:/MyBlog/public/css/index.css","88be40f6c4be7655140dd622152b817c"],["D:/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/MyBlog/public/img/404.jpg","9df39f9f85511a6b1433dae0bdfbe8a7"],["D:/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/MyBlog/public/img/alipay.jpg","542f7e17f351f532aefe9114f624fdc2"],["D:/MyBlog/public/img/copy404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/MyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/MyBlog/public/img/pignose.png","5627b40ccdadca6e866fc466740b2b9b"],["D:/MyBlog/public/img/tinypng.png","647523013b89e5cc2af4423078e785a3"],["D:/MyBlog/public/img/wechat.png","cb6ee848c7def651638f99a5929a83fe"],["D:/MyBlog/public/index.html","13c81a5e0b06056b4e9b4eec8a64f7e4"],["D:/MyBlog/public/js/main.js","af1fc968dd48dafada95cd797f906acc"],["D:/MyBlog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/MyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/MyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/MyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/MyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/MyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/MyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/MyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/MyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/MyBlog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/MyBlog/public/js/utils.js","9a79a530e612235ae91149848ed41a83"],["D:/MyBlog/public/link/index.html","d43cb25624515fd20b4198653b820f87"],["D:/MyBlog/public/page/2/index.html","bee2b5f3e0d02dbf6d7cdacf66927bd7"],["D:/MyBlog/public/photoes/BlogBG/index.html","c9ea359f18fb9c9423e33d2976acc496"],["D:/MyBlog/public/photoes/girls/index.html","43a985c7513016cdfe7d2a529b721ac5"],["D:/MyBlog/public/photoes/index.html","9155ede015e10fec8730819ea43e14a1"],["D:/MyBlog/public/photoes/marvel/index.html","6ed265c1bc1b4475081a9a74bc511dbb"],["D:/MyBlog/public/photoes/wallpaper/index.html","f950a2c44afb2e1baee40fa2d24a9227"],["D:/MyBlog/public/tags/JNDI/index.html","5540741e6ab8b67e24b50636407a0be0"],["D:/MyBlog/public/tags/JPA/index.html","ad162c223cd584ed1d1787c870f689d1"],["D:/MyBlog/public/tags/Java/index.html","ff7ce2b697ee2410debc4555cc5e4f82"],["D:/MyBlog/public/tags/Markdown/index.html","93c6e97efda2f57ab00e1d8da9809a96"],["D:/MyBlog/public/tags/Spring/index.html","c05257337201ef379e4901ed53302b91"],["D:/MyBlog/public/tags/UML/index.html","3343dce066f679e9d2e8c1198499f7d9"],["D:/MyBlog/public/tags/git/index.html","2f41fa44e37f42b19644bb553e6e66b8"],["D:/MyBlog/public/tags/github/index.html","0d143eb4e4c66871aeeb4962f9c84d5e"],["D:/MyBlog/public/tags/hexo/index.html","3b0136bc9e56fd3f6dbe152f6ef54ab2"],["D:/MyBlog/public/tags/index.html","0f2f9ba43afa8bc408cd9f921247fb83"],["D:/MyBlog/public/tags/python/index.html","394b3b67291a8565bd32c2f96ecec6fe"],["D:/MyBlog/public/tags/tomcat/index.html","96f3db7220870ee3ed1d9dd3a2d9377c"],["D:/MyBlog/public/tags/刷题/index.html","061a9e9d3da93c24f156ea749c7d2a06"],["D:/MyBlog/public/tags/消费社会/index.html","f9f94209a393db84d718296e7ec259a5"],["D:/MyBlog/public/tags/生活/index.html","eedc4f2f87dde010bd80eff863622e8c"],["D:/MyBlog/public/tags/笔记/index.html","7e01cf4ae5c48a56e21f4380c0a9108e"],["D:/MyBlog/public/tags/笔记/page/2/index.html","436f046ff2db184612b481c64f7adf89"],["D:/MyBlog/public/tags/设计模式/index.html","46f8eacd7ff97030da91d278bce0a5e3"]];
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







