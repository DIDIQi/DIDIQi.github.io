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

var precacheConfig = [["D:/MyBlog/public/2020/07/01/blog-01/index.html","a3168d5e11c95a6c682d91cd4effa7c5"],["D:/MyBlog/public/2020/07/02/blog-02/index.html","eb27871aa27c8af41ac535ae0fd7d0d2"],["D:/MyBlog/public/2020/07/24/blog-03/index.html","3badb4e6946ac182e825051741686c40"],["D:/MyBlog/public/2020/07/24/blog-04/index.html","4012c724b5290360af5d6c3031e743d4"],["D:/MyBlog/public/2020/07/25/blog-05/index.html","dad73bbef807ef9fef1a4595b9df7caa"],["D:/MyBlog/public/2020/07/29/pythonNote/index.html","996b4e349f17415e0ac6545f62359935"],["D:/MyBlog/public/2020/07/31/ExeCode-1/index.html","46acef633b3190ee7e90afefb605f0a1"],["D:/MyBlog/public/2020/08/03/gitNote/index.html","5a4c34651129546d934fd605eb01d3c2"],["D:/MyBlog/public/2020/08/07/tomcatNote/index.html","405dec8f71d09f747bf6cc7c57d54842"],["D:/MyBlog/public/2020/08/08/markDownNote/index.html","585e9d5ab1fc3aefa08266e02a770cae"],["D:/MyBlog/public/2020/08/09/JavaNote/index.html","95935617e5a7be38b527ead9eef2d6df"],["D:/MyBlog/public/2020/08/09/UMLNote/index.html","a71eae25cdce8a004fffee5cf4ab5390"],["D:/MyBlog/public/2020/08/09/designPatternNote/index.html","24df2894898543bc20ae181fe6a9bd37"],["D:/MyBlog/public/2020/08/11/JNDINote/index.html","16f83c4f6ff72938b519bfaa5394615a"],["D:/MyBlog/public/404.html","3ba7f88931ac27f3092c067fddb601e1"],["D:/MyBlog/public/Lab/index.html","8905ee413e10f9f69db8bc77f7825fdc"],["D:/MyBlog/public/about/index.html","a5672b03dccad0e161ab5b03a01a076a"],["D:/MyBlog/public/archives/2020/07/index.html","35cf67041d64df78271082eee14780f5"],["D:/MyBlog/public/archives/2020/08/index.html","8373427ff8f80ce89535c5e316b9b52b"],["D:/MyBlog/public/archives/2020/index.html","6aa3226e92b8af3deb3de1a2ce0d78d3"],["D:/MyBlog/public/archives/2020/page/2/index.html","e690aeee7609f0e8ed5566f786c0c497"],["D:/MyBlog/public/archives/index.html","9410011bfeb0a8df1e3924ffece9bf9a"],["D:/MyBlog/public/archives/page/2/index.html","8962ff2618903fbdcc962f4ecfb2cbde"],["D:/MyBlog/public/categories/blog搭建/index.html","b1a1c0edb9e83b3cf238250aff8aa822"],["D:/MyBlog/public/categories/index.html","3abd53866642ca28919724f3d92f0dca"],["D:/MyBlog/public/categories/刷题/index.html","4f2372311424bb08c67d70e606ca3f2b"],["D:/MyBlog/public/categories/学习笔记/index.html","ce45e8baa7ac8744cbdcda29a344205f"],["D:/MyBlog/public/categories/笔记/index.html","f909688406d4866459af5a9977499818"],["D:/MyBlog/public/categories/读书/index.html","ebf5c42e33ca9f9810af0df3d5c99df9"],["D:/MyBlog/public/categories/随笔/index.html","e97ae144f1141763de3f8943dad96a93"],["D:/MyBlog/public/comment/index.html","8b398a753f169b0d541762ab75b783ce"],["D:/MyBlog/public/css/index.css","88be40f6c4be7655140dd622152b817c"],["D:/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/MyBlog/public/img/404.jpg","9df39f9f85511a6b1433dae0bdfbe8a7"],["D:/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/MyBlog/public/img/alipay.jpg","542f7e17f351f532aefe9114f624fdc2"],["D:/MyBlog/public/img/copy404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/MyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/MyBlog/public/img/pignose.png","5627b40ccdadca6e866fc466740b2b9b"],["D:/MyBlog/public/img/tinypng.png","647523013b89e5cc2af4423078e785a3"],["D:/MyBlog/public/img/wechat.png","cb6ee848c7def651638f99a5929a83fe"],["D:/MyBlog/public/index.html","c99e24747f6fa583bd8757ed7f6defba"],["D:/MyBlog/public/js/main.js","af1fc968dd48dafada95cd797f906acc"],["D:/MyBlog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/MyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/MyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/MyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/MyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/MyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/MyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/MyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/MyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/MyBlog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/MyBlog/public/js/utils.js","9a79a530e612235ae91149848ed41a83"],["D:/MyBlog/public/link/index.html","4b432cd55f5a88f05f264897b583f2a2"],["D:/MyBlog/public/page/2/index.html","be71aec770149e8b1b5406f3abf5e319"],["D:/MyBlog/public/photoes/BlogBG/index.html","588a47c49e3e63f913708bc0beba8f22"],["D:/MyBlog/public/photoes/girls/index.html","86d38d8a5b27b36997940c3a0fc65316"],["D:/MyBlog/public/photoes/index.html","cd599285ff8274be28be84e0103042d3"],["D:/MyBlog/public/photoes/marvel/index.html","1f987b68b8babb983310661d01a5d171"],["D:/MyBlog/public/photoes/wallpaper/index.html","d85ce95ed08397021105004d75e47f0f"],["D:/MyBlog/public/tags/JNDI/index.html","bd76098ae7075769ab0f2e72f9035085"],["D:/MyBlog/public/tags/Java/index.html","7008b76f296e99eac2d8762864bc1125"],["D:/MyBlog/public/tags/Markdown/index.html","d98e2e9e847f90262de64eeef4646ec9"],["D:/MyBlog/public/tags/UML/index.html","ec9552b46070a850639d335b67a5f3ee"],["D:/MyBlog/public/tags/git/index.html","04a821ec13a9cbf9f5bab34da4e9f14c"],["D:/MyBlog/public/tags/github/index.html","1ad6931b3b177aabc806a2f76dcbf21a"],["D:/MyBlog/public/tags/hexo/index.html","5dcef841eda494223f4b799957da3cd9"],["D:/MyBlog/public/tags/index.html","b65733d8acb2f37b7759afdb193f79d7"],["D:/MyBlog/public/tags/python/index.html","2635e42681ec135c9f6d161aa4267193"],["D:/MyBlog/public/tags/tomcat/index.html","97c2306289a6a96bcce36dcc27dd88ea"],["D:/MyBlog/public/tags/刷题/index.html","2fcf49080d7d3443f35ab0523ee4fb64"],["D:/MyBlog/public/tags/消费社会/index.html","c3106129ae2fc8a377a5d45cf5d7f83d"],["D:/MyBlog/public/tags/生活/index.html","935822452cfc63d40f202541b61a11f5"],["D:/MyBlog/public/tags/笔记/index.html","938462b59f790608f9b98a38179cbdae"],["D:/MyBlog/public/tags/设计模式/index.html","44b5cfbde10023a6e0490180ccfa50c8"]];
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







