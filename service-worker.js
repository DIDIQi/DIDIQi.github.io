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

var precacheConfig = [["D:/MyBlog/public/2020/07/01/blog-01/index.html","41f2bf1622e46304818789dc6d6e237e"],["D:/MyBlog/public/2020/07/02/blog-02/index.html","2cb08c1bb2880f28aa16225d289f490c"],["D:/MyBlog/public/2020/07/24/blog-03/index.html","5e5fb143e81e1cef8f0afd21cdedaff3"],["D:/MyBlog/public/2020/07/24/blog-04/index.html","25bf602d2e7d28deb01429120edd8e9b"],["D:/MyBlog/public/2020/07/25/blog-05/index.html","cc0de1cf4a0d6dd7962ac195a1c0c761"],["D:/MyBlog/public/2020/07/29/pythonNote/index.html","5c33eaef566025cb34647e15e4abd9e4"],["D:/MyBlog/public/2020/07/31/ExeCode-1/index.html","cbb736783c6aa0005c0cb850334bb9bb"],["D:/MyBlog/public/2020/08/03/gitNote/index.html","7528bda551fe3f27047205356b56ac6d"],["D:/MyBlog/public/2020/08/07/tomcatNote/index.html","1d45dffcde87bf4c8e677366c28b87af"],["D:/MyBlog/public/2020/08/08/markDownNote/index.html","ad152993af14519d3652bf966bbb08f9"],["D:/MyBlog/public/2020/08/09/JavaNote/index.html","2e8042d605fd00c4b93c1346379af530"],["D:/MyBlog/public/2020/08/09/UMLNote/index.html","8eae5642e29c63d97e9500e51c4b8e42"],["D:/MyBlog/public/2020/08/09/designPatternNote/index.html","60d08109a0239ae4bf4092b11bd887be"],["D:/MyBlog/public/2020/08/11/JNDINote/index.html","92eb5e37ba0111b2d44eee6aa7c8fd8e"],["D:/MyBlog/public/2020/08/14/JPANote/index.html","1f337957e27b2340af2d1cfbb2ce32c3"],["D:/MyBlog/public/2020/08/14/springOfIoC/index.html","92541955ab81f2dc8ec68c0db2280197"],["D:/MyBlog/public/2020/08/17/SpringOfAOP/index.html","74d3c76054d1c20944f97fa635c603ed"],["D:/MyBlog/public/404.html","48ec34f043baa18f2b3a62cd2410366b"],["D:/MyBlog/public/Lab/index.html","8905ee413e10f9f69db8bc77f7825fdc"],["D:/MyBlog/public/about/index.html","b33354c90388216beed041432674df69"],["D:/MyBlog/public/archives/2020/07/index.html","60b0e3511ad88439a971ab51f6d39c08"],["D:/MyBlog/public/archives/2020/08/index.html","8e7425be66664876f3efa3bb44cf388f"],["D:/MyBlog/public/archives/2020/index.html","86793d15a5227856550c2e422ed460c6"],["D:/MyBlog/public/archives/2020/page/2/index.html","2006a0c009b5457f676f8595cc84281b"],["D:/MyBlog/public/archives/index.html","080b8fd41ff561c7fc86c406ea0ca3a8"],["D:/MyBlog/public/archives/page/2/index.html","8afea371a2f1a5a9a78f25771b190826"],["D:/MyBlog/public/baidu_verify_5Z7yKtEFCL.html","4f06e0b67158ea5df1752fbca6ff5efd"],["D:/MyBlog/public/categories/blog搭建/index.html","bf12980d55f99f568cc0f57a8d653228"],["D:/MyBlog/public/categories/index.html","36c6b48a790b2a3da31351171c2139a3"],["D:/MyBlog/public/categories/刷题/index.html","70dca0f3c6746f0b43f1708db8daabc0"],["D:/MyBlog/public/categories/学习笔记/index.html","fc00c2f1e7a506435b523e464bc90a51"],["D:/MyBlog/public/categories/学习笔记/page/2/index.html","5e7fea4ee8137c02351195225bea7897"],["D:/MyBlog/public/categories/读书/index.html","d2b2f8e505b2450dd9a33026d9a4bd1c"],["D:/MyBlog/public/categories/随笔/index.html","662aa414728d2b8c191f07e4109e78ea"],["D:/MyBlog/public/comment/index.html","54099a912d34f271e96047e51af5a5d0"],["D:/MyBlog/public/css/index.css","88be40f6c4be7655140dd622152b817c"],["D:/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/MyBlog/public/img/404.jpg","9df39f9f85511a6b1433dae0bdfbe8a7"],["D:/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/MyBlog/public/img/alipay.jpg","542f7e17f351f532aefe9114f624fdc2"],["D:/MyBlog/public/img/copy404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/MyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/MyBlog/public/img/pignose.png","5627b40ccdadca6e866fc466740b2b9b"],["D:/MyBlog/public/img/tinypng.png","647523013b89e5cc2af4423078e785a3"],["D:/MyBlog/public/img/wechat.png","cb6ee848c7def651638f99a5929a83fe"],["D:/MyBlog/public/index.html","754a46e1925bf8c321f10f972c6bc447"],["D:/MyBlog/public/js/main.js","af1fc968dd48dafada95cd797f906acc"],["D:/MyBlog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/MyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/MyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/MyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/MyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/MyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/MyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/MyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/MyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/MyBlog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/MyBlog/public/js/utils.js","9a79a530e612235ae91149848ed41a83"],["D:/MyBlog/public/link/index.html","c2e8453666ff581506929464a5f2ee9c"],["D:/MyBlog/public/page/2/index.html","2d38af47080cb62171a64043db882dae"],["D:/MyBlog/public/photoes/BlogBG/index.html","af382a2995e623eac247fff2f728fd84"],["D:/MyBlog/public/photoes/girls/index.html","12e87a31a75fe1d7158b3a15dc7c71d0"],["D:/MyBlog/public/photoes/index.html","991ddd8a814d9c5c7d918922f5f5b965"],["D:/MyBlog/public/photoes/marvel/index.html","8d5654ef5e85b508ab60641e213ec34c"],["D:/MyBlog/public/photoes/wallpaper/index.html","c7352b97068735c258fe14a255140e7c"],["D:/MyBlog/public/tags/JNDI/index.html","8bb3af0d796abc4219b26f0cd3f8c1a4"],["D:/MyBlog/public/tags/JPA/index.html","acca5d493600e1fe0a6dc9359af7ab12"],["D:/MyBlog/public/tags/Java/index.html","344ea34060c6707c2494f965adeaeba6"],["D:/MyBlog/public/tags/Markdown/index.html","95700d11336aec49e31f86ede8f24a64"],["D:/MyBlog/public/tags/Spring/index.html","18ecd2eae385ca4bd217b3b666b1d76f"],["D:/MyBlog/public/tags/UML/index.html","7fb10aa79c2011ac1ced723b84cbe437"],["D:/MyBlog/public/tags/git/index.html","3b031a016fdb4ed7415a9a41ebe03cde"],["D:/MyBlog/public/tags/github/index.html","91b275a8c0ef64bad79dff77490a2fac"],["D:/MyBlog/public/tags/hexo/index.html","87413b2d3c32dee5f118966aa1284b7d"],["D:/MyBlog/public/tags/index.html","3daa7c245f0b64f8c6ed6971a4ea25e8"],["D:/MyBlog/public/tags/python/index.html","42264e2a00fec46597a2b8c7267c1af1"],["D:/MyBlog/public/tags/tomcat/index.html","33bda15ced8b85595ac7491af229cab7"],["D:/MyBlog/public/tags/刷题/index.html","f1d88b91d84029c9c7bb3747b74aa03d"],["D:/MyBlog/public/tags/消费社会/index.html","2409d52d87a85ec0ae4f70da99281705"],["D:/MyBlog/public/tags/生活/index.html","20c5f01a796ecdc4d9c95ead59aab75c"],["D:/MyBlog/public/tags/笔记/index.html","1b48f3e7e51868918f5a37da1fbf33bf"],["D:/MyBlog/public/tags/笔记/page/2/index.html","eb94efaae20c81aab81a8ba3d9d288b6"],["D:/MyBlog/public/tags/设计模式/index.html","91ee03fb7200a0d212e322de7d747954"]];
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







