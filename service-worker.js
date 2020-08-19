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

var precacheConfig = [["D:/MyBlog/public/2020/07/01/blog-01/index.html","df8e72007c94ec87ad1951f6968df6c2"],["D:/MyBlog/public/2020/07/02/blog-02/index.html","53077b0530f5dd589e1f275dcba34c04"],["D:/MyBlog/public/2020/07/24/blog-03/index.html","fe3fa761dccbbb68bbe585fb1216801c"],["D:/MyBlog/public/2020/07/24/blog-04/index.html","b31e185fd53eebb73d51f9c1a11441d7"],["D:/MyBlog/public/2020/07/25/blog-05/index.html","e29f9588cf55bb9eb8dca8dcff6eaf1c"],["D:/MyBlog/public/2020/07/29/pythonNote/index.html","06bde20e5a0046ec8c7185a76b7d3e9c"],["D:/MyBlog/public/2020/07/31/ExeCode-1/index.html","e21b41f1e7339a06a7d1ebba4af14696"],["D:/MyBlog/public/2020/08/03/gitNote/index.html","66db829319106b87b1fe55edf1b7bd7e"],["D:/MyBlog/public/2020/08/07/tomcatNote/index.html","1c451168a1f2de2808229288a0c5a717"],["D:/MyBlog/public/2020/08/08/markDownNote/index.html","0a189e119d2cf6a772fc0d9f7689968c"],["D:/MyBlog/public/2020/08/09/JavaNote/index.html","9c66e69cdbf4bb6a2b9f0b3dc46eca8e"],["D:/MyBlog/public/2020/08/09/UMLNote/index.html","2fc8c5bc2c05ed5fb6a6c41af552b1a3"],["D:/MyBlog/public/2020/08/09/designPatternNote/index.html","ce0676de14fe7c17f6cb42dfb53ab34b"],["D:/MyBlog/public/2020/08/11/JNDINote/index.html","06e510e604d8a23b46c2b5cba8d72cf3"],["D:/MyBlog/public/2020/08/14/JPANote/index.html","876e5eee8a1386ddb715d7a903e8ff60"],["D:/MyBlog/public/2020/08/14/springOfIoC/index.html","30aebd0c80015b35be496a3ec072ff13"],["D:/MyBlog/public/2020/08/17/SpringOfAOP/index.html","ddf3319ec818f8b8da0d103e8db65529"],["D:/MyBlog/public/404.html","61373cd1c26e81fab154af1a7e2cf5a8"],["D:/MyBlog/public/Lab/index.html","8905ee413e10f9f69db8bc77f7825fdc"],["D:/MyBlog/public/about/index.html","a91a6fc9bbffc80e6e2730c49c8d767c"],["D:/MyBlog/public/archives/2020/07/index.html","917330a472d455208dac36fbde4fc5c2"],["D:/MyBlog/public/archives/2020/08/index.html","e2298771af5475b502e6f363685c150c"],["D:/MyBlog/public/archives/2020/index.html","8564d42f94f542f6d7fd7d53bacd05dc"],["D:/MyBlog/public/archives/2020/page/2/index.html","c08b8edfa0fd4e35fdc10aca76c14849"],["D:/MyBlog/public/archives/index.html","0d9c80ce2458ed6af9dee912757de8d1"],["D:/MyBlog/public/archives/page/2/index.html","614dd122a8011320ee904ea3d69d4290"],["D:/MyBlog/public/categories/blog搭建/index.html","92bdba697c476d293ef78d90add7c4ed"],["D:/MyBlog/public/categories/index.html","2b5ebf3a7671d0f93bf7150bd7197013"],["D:/MyBlog/public/categories/刷题/index.html","9f4d094df9d9c99f705c65c97089a35c"],["D:/MyBlog/public/categories/学习笔记/index.html","76d3ee77ed4d63da29a141945d728248"],["D:/MyBlog/public/categories/学习笔记/page/2/index.html","c1b9ddc3eb44961083efe6ef50979f34"],["D:/MyBlog/public/categories/读书/index.html","d9d5d3066ea59dacaefdf9abd0df70a8"],["D:/MyBlog/public/categories/随笔/index.html","13c5adf3b38b410d0ea1d49f75d3ac00"],["D:/MyBlog/public/comment/index.html","c5af721a4fbed994725582e2a15adbb1"],["D:/MyBlog/public/css/index.css","88be40f6c4be7655140dd622152b817c"],["D:/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/MyBlog/public/img/404.jpg","9df39f9f85511a6b1433dae0bdfbe8a7"],["D:/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/MyBlog/public/img/alipay.jpg","542f7e17f351f532aefe9114f624fdc2"],["D:/MyBlog/public/img/copy404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/MyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/MyBlog/public/img/pignose.png","5627b40ccdadca6e866fc466740b2b9b"],["D:/MyBlog/public/img/tinypng.png","647523013b89e5cc2af4423078e785a3"],["D:/MyBlog/public/img/wechat.png","cb6ee848c7def651638f99a5929a83fe"],["D:/MyBlog/public/index.html","0328745b3593e02e6920822182ea1038"],["D:/MyBlog/public/js/main.js","af1fc968dd48dafada95cd797f906acc"],["D:/MyBlog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/MyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/MyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/MyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/MyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/MyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/MyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/MyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/MyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/MyBlog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/MyBlog/public/js/utils.js","9a79a530e612235ae91149848ed41a83"],["D:/MyBlog/public/link/index.html","ec6a78998dceaf6e825c08948c616760"],["D:/MyBlog/public/page/2/index.html","f3c6eed5d94fe01c9c119ad20ac9b2c2"],["D:/MyBlog/public/photoes/BlogBG/index.html","d01466010ebb68748f38b1f0602a6263"],["D:/MyBlog/public/photoes/girls/index.html","fa8798bb9b2c52199d004d15cb1a31e5"],["D:/MyBlog/public/photoes/index.html","ce8ff3dbc633e339779485a5969866e6"],["D:/MyBlog/public/photoes/marvel/index.html","5a602e8c86bbb4e37b0b3f01a566cc49"],["D:/MyBlog/public/photoes/wallpaper/index.html","57fda9113f8ee9b94e6a516540eab76e"],["D:/MyBlog/public/tags/JNDI/index.html","1c837f47b8ad70cad31c018faef751e6"],["D:/MyBlog/public/tags/JPA/index.html","1f0d1bcefdeff88e248c13fe0f42ca0b"],["D:/MyBlog/public/tags/Java/index.html","5e76aa6b77407855d01d77e84dc5328d"],["D:/MyBlog/public/tags/Markdown/index.html","d89f76b938e6453da53a443af9fa00d2"],["D:/MyBlog/public/tags/Spring/index.html","75132c969850dd85cc8daad3c2d97199"],["D:/MyBlog/public/tags/UML/index.html","456a2b7671186c2369ac3a188bd3dcf8"],["D:/MyBlog/public/tags/git/index.html","e1bf1dbedc4a4b5ccb0087906bc37c50"],["D:/MyBlog/public/tags/github/index.html","0590eb1f2f4fe5fbd102e054a0a2fd95"],["D:/MyBlog/public/tags/hexo/index.html","6875168e49d3bcb8a164718bd1d208eb"],["D:/MyBlog/public/tags/index.html","fda212bb655bd5fa9d8fbbed15940b88"],["D:/MyBlog/public/tags/python/index.html","8f743fc559dac4cce8d5f4f7e9b17e82"],["D:/MyBlog/public/tags/tomcat/index.html","dd531e1298aea421aae50c7ab8377b90"],["D:/MyBlog/public/tags/刷题/index.html","733621ad53de8d5ab6533e505103a74f"],["D:/MyBlog/public/tags/消费社会/index.html","33918e2a7184807abba3322db9a84fd8"],["D:/MyBlog/public/tags/生活/index.html","d4ef0c544a83c32e0b43f9e6e423c24c"],["D:/MyBlog/public/tags/笔记/index.html","246341d013c05e969de4b5c444a86891"],["D:/MyBlog/public/tags/笔记/page/2/index.html","d7b4f1900bed55c869851f1b6f6a6e64"],["D:/MyBlog/public/tags/设计模式/index.html","1f06688b697bf85b4dbadd702902b7db"]];
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







