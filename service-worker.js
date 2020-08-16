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

var precacheConfig = [["D:/MyBlog/public/2020/07/01/blog-01/index.html","b89a0b30a2c786cf469077b32306f164"],["D:/MyBlog/public/2020/07/02/blog-02/index.html","3bcdf49505533b138636f031c75d541e"],["D:/MyBlog/public/2020/07/24/blog-03/index.html","cc4a280771cb3c307d16ff50afa7c3a7"],["D:/MyBlog/public/2020/07/24/blog-04/index.html","37a3078593072eb2b8c8803044322fff"],["D:/MyBlog/public/2020/07/25/blog-05/index.html","7dcd6c0b6f7acf6ece64e1ed2ad1cac4"],["D:/MyBlog/public/2020/07/29/pythonNote/index.html","59efe0853d224374d4166240e1cf26fb"],["D:/MyBlog/public/2020/07/31/ExeCode-1/index.html","96c68f541a6c18db512322ff651c4f79"],["D:/MyBlog/public/2020/08/03/gitNote/index.html","633b0909f4234d06526f3a392a6bbf1f"],["D:/MyBlog/public/2020/08/07/tomcatNote/index.html","52776eecc96bf3b0bd5c2ae673d3c2b7"],["D:/MyBlog/public/2020/08/08/markDownNote/index.html","8140d6b640fed6e246caaa2165816462"],["D:/MyBlog/public/2020/08/09/JavaNote/index.html","f4bc065553b58257b1b9bd97bfd5cfc9"],["D:/MyBlog/public/2020/08/09/UMLNote/index.html","41b004a3c6c11d4bb831f71423e4f7ab"],["D:/MyBlog/public/2020/08/09/designPatternNote/index.html","ebd8d9f4db41559d5f2ae4fa42967580"],["D:/MyBlog/public/2020/08/11/JNDINote/index.html","7d110b34d5e0c94199a4b1dbdd42898e"],["D:/MyBlog/public/2020/08/14/JPANote/index.html","dd8a1956d46873c8885729d39a144b99"],["D:/MyBlog/public/2020/08/14/springOfIoC/index.html","f75c08f1834005aded2084a433690e25"],["D:/MyBlog/public/2020/08/17/SpringOfAOP/index.html","499a020186f8d78638edc4f9614806cb"],["D:/MyBlog/public/404.html","60435d8435832b65940c8f2c1ac870c5"],["D:/MyBlog/public/Lab/index.html","8905ee413e10f9f69db8bc77f7825fdc"],["D:/MyBlog/public/about/index.html","bca4cb74090013f4ccd40913c70956c7"],["D:/MyBlog/public/archives/2020/07/index.html","43d1a7ed17ca5d8c077cee32442c2de4"],["D:/MyBlog/public/archives/2020/08/index.html","f28d1fe49847b0b34c6989fc29e971bb"],["D:/MyBlog/public/archives/2020/index.html","970da87f9f417a4846295a4e77360c63"],["D:/MyBlog/public/archives/2020/page/2/index.html","4863833297ef0d3e2aca5d488be31aec"],["D:/MyBlog/public/archives/index.html","fa4e7090a718aa6b5b1c92fafe5e91b7"],["D:/MyBlog/public/archives/page/2/index.html","1a52f94c08710036b64fa37e599b6284"],["D:/MyBlog/public/categories/blog搭建/index.html","faef262a1df9da8912b8f00190d9e016"],["D:/MyBlog/public/categories/index.html","fd8c76bc89a52a75c5542c10701682cc"],["D:/MyBlog/public/categories/刷题/index.html","c5451fd524957facaf1908ce5df6921e"],["D:/MyBlog/public/categories/学习笔记/index.html","ce82854b8cbd9a56e25342a08f5368d8"],["D:/MyBlog/public/categories/笔记/index.html","2990ae92e6604a75a7cd10144940184d"],["D:/MyBlog/public/categories/读书/index.html","6b2c5b4d5b7739749f0cd5f8945a5495"],["D:/MyBlog/public/categories/随笔/index.html","cd8c4491a4be65f7a44d0ea43befcce9"],["D:/MyBlog/public/comment/index.html","5d23027820de9b1099bce04a23e2d044"],["D:/MyBlog/public/css/index.css","88be40f6c4be7655140dd622152b817c"],["D:/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/MyBlog/public/img/404.jpg","9df39f9f85511a6b1433dae0bdfbe8a7"],["D:/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/MyBlog/public/img/alipay.jpg","542f7e17f351f532aefe9114f624fdc2"],["D:/MyBlog/public/img/copy404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/MyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/MyBlog/public/img/pignose.png","5627b40ccdadca6e866fc466740b2b9b"],["D:/MyBlog/public/img/tinypng.png","647523013b89e5cc2af4423078e785a3"],["D:/MyBlog/public/img/wechat.png","cb6ee848c7def651638f99a5929a83fe"],["D:/MyBlog/public/index.html","e14e36cce0e3578c2f38449af27e2e45"],["D:/MyBlog/public/js/main.js","af1fc968dd48dafada95cd797f906acc"],["D:/MyBlog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/MyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/MyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/MyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/MyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/MyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/MyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/MyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/MyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/MyBlog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/MyBlog/public/js/utils.js","9a79a530e612235ae91149848ed41a83"],["D:/MyBlog/public/link/index.html","6e72b3b4d847e57142a0e7712ce55a4c"],["D:/MyBlog/public/page/2/index.html","027bfc2cbce5093a39a24204ca69480a"],["D:/MyBlog/public/photoes/BlogBG/index.html","f2331e878a5da5cb72417024f5cd1c75"],["D:/MyBlog/public/photoes/girls/index.html","ae4374d72c15c74b8cd952d9d17034a4"],["D:/MyBlog/public/photoes/index.html","994ce06183919b382b56e79fa21d40a1"],["D:/MyBlog/public/photoes/marvel/index.html","5c0b9491134ab499dcda98ae42138e12"],["D:/MyBlog/public/photoes/wallpaper/index.html","b45de0f46efb071261edda8df910841e"],["D:/MyBlog/public/tags/JNDI/index.html","b9df0a088f79ea5154b7816e487c053e"],["D:/MyBlog/public/tags/JPA/index.html","18b91c1620052fb17a782ca842f0852b"],["D:/MyBlog/public/tags/Java/index.html","e7e135738aa1ee15bb86923f91aed55a"],["D:/MyBlog/public/tags/Markdown/index.html","52592bcde251e7f18b289d9694262d73"],["D:/MyBlog/public/tags/Spring/index.html","14407e68bad2ed68bc0b7872020e3df6"],["D:/MyBlog/public/tags/UML/index.html","53d07711368ddb72a673c8de76cc13f9"],["D:/MyBlog/public/tags/git/index.html","5be208f8613eb3529deba984488ea077"],["D:/MyBlog/public/tags/github/index.html","646871bb7636856395a9208456854229"],["D:/MyBlog/public/tags/hexo/index.html","925ef053cb36af1d4f75681065ea00a4"],["D:/MyBlog/public/tags/index.html","7c55f3c95b14b45044b8ddc798e2f8a0"],["D:/MyBlog/public/tags/python/index.html","38fc758414bb45b085781b49edee6218"],["D:/MyBlog/public/tags/tomcat/index.html","3a0bde51d72dcced555fe23f8efaecc4"],["D:/MyBlog/public/tags/刷题/index.html","bb68c0cfd36ed7d95663ddadbfa16b48"],["D:/MyBlog/public/tags/消费社会/index.html","5c41356630a183f221aed699a8bf6343"],["D:/MyBlog/public/tags/生活/index.html","ffaef60ff683cbc046bc8559dfd47649"],["D:/MyBlog/public/tags/笔记/index.html","907a0045a745105fd07785b8f284e399"],["D:/MyBlog/public/tags/笔记/page/2/index.html","ee67379eb7554e7478b53e86c0db24a7"],["D:/MyBlog/public/tags/设计模式/index.html","4b99fa4990e98b7e9c95cf4fcbc93469"]];
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







