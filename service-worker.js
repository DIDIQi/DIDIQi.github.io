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

var precacheConfig = [["D:/MyBlog/public/2020/07/01/blog-01/index.html","3e7054dbb664f15131068e4b4314d138"],["D:/MyBlog/public/2020/07/02/blog-02/index.html","64be4eb4dbd7d85866b498419a7a3eae"],["D:/MyBlog/public/2020/07/24/blog-03/index.html","0016c4c46ae5cedefb864aa428b87c7b"],["D:/MyBlog/public/2020/07/24/blog-04/index.html","c492fcbe4f1f81b3c7e51f3bd0ab2b8e"],["D:/MyBlog/public/2020/07/25/blog-05/index.html","05d66b69325d6ca1ec3dda66e6c5f49d"],["D:/MyBlog/public/2020/07/29/pythonNote/index.html","d235b5269e3023b628308af9fe9c7321"],["D:/MyBlog/public/2020/07/31/ExeCode-1/index.html","ec85d350f94aab6772b9e55a17857b3c"],["D:/MyBlog/public/2020/08/03/gitNote/index.html","70db00355a0c83e05613768836d24be0"],["D:/MyBlog/public/2020/08/07/tomcatNote/index.html","f6f807bd94141059da8b2415402041c4"],["D:/MyBlog/public/2020/08/08/markDownNote/index.html","ca05412c55c8e53e88fbc6ef4b1d4168"],["D:/MyBlog/public/2020/08/09/UMLNote/index.html","3bdeab3452f6cc2ffe9a1cc65f2de659"],["D:/MyBlog/public/2020/08/09/designPatternNote/index.html","c2d9da875c02ffe16d1a3f652b84dc5d"],["D:/MyBlog/public/404.html","6ab7f1cf7791bc512859ba2dcaf0d0bd"],["D:/MyBlog/public/Lab/index.html","8905ee413e10f9f69db8bc77f7825fdc"],["D:/MyBlog/public/about/index.html","e280c1c13c340a4d31259af0cb6ed543"],["D:/MyBlog/public/archives/2020/07/index.html","2e796018e1e6458b0be9422c48f38862"],["D:/MyBlog/public/archives/2020/08/index.html","82625f969e34c1aa79e91d67e52d4ac2"],["D:/MyBlog/public/archives/2020/index.html","3e340acecfdc0c234d98ba60c1bbab19"],["D:/MyBlog/public/archives/2020/page/2/index.html","5f33b6d7cde5361ed77d1e89d254804b"],["D:/MyBlog/public/archives/index.html","ab555d936d97a0fcf3d341982e32cfa7"],["D:/MyBlog/public/archives/page/2/index.html","e0fcb987b46b086fe50d516f04f2f22a"],["D:/MyBlog/public/categories/blog搭建/index.html","c15790c40d8dea400742e53280a0f51c"],["D:/MyBlog/public/categories/index.html","8ac263050643a5519aafd21d2a0bfee5"],["D:/MyBlog/public/categories/刷题/index.html","749d2861bf87345de59018d02b5c45ef"],["D:/MyBlog/public/categories/学习笔记/index.html","e0e9510fef0d6757f7f5e15b04943307"],["D:/MyBlog/public/categories/笔记/index.html","05e8c991effe5d58e2f0a822fd746217"],["D:/MyBlog/public/categories/读书/index.html","83b1ee2e6c4ea61b5c9fae4817a2a770"],["D:/MyBlog/public/categories/随笔/index.html","15cc2fb065d961ffbbb2a622246ed75e"],["D:/MyBlog/public/comment/index.html","b80ff4ea9b856028e7d4f6d967a03649"],["D:/MyBlog/public/css/index.css","88be40f6c4be7655140dd622152b817c"],["D:/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/MyBlog/public/img/404.jpg","9df39f9f85511a6b1433dae0bdfbe8a7"],["D:/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/MyBlog/public/img/alipay.jpg","542f7e17f351f532aefe9114f624fdc2"],["D:/MyBlog/public/img/copy404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/MyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/MyBlog/public/img/pignose.png","5627b40ccdadca6e866fc466740b2b9b"],["D:/MyBlog/public/img/tinypng.png","647523013b89e5cc2af4423078e785a3"],["D:/MyBlog/public/img/wechat.png","cb6ee848c7def651638f99a5929a83fe"],["D:/MyBlog/public/index.html","d6a4047e1d22f06054a602e39b086b47"],["D:/MyBlog/public/js/main.js","af1fc968dd48dafada95cd797f906acc"],["D:/MyBlog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/MyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/MyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/MyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/MyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/MyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/MyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/MyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/MyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/MyBlog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/MyBlog/public/js/utils.js","9a79a530e612235ae91149848ed41a83"],["D:/MyBlog/public/link/index.html","657d273184abe397d19f1ed5c6af9ae4"],["D:/MyBlog/public/photoes/BlogBG/index.html","804627ebfa47fd92e441d2327a428928"],["D:/MyBlog/public/photoes/girls/index.html","c35aa73106ae3086e0cc6595eb2191b8"],["D:/MyBlog/public/photoes/index.html","5d30d73b5d96904cd3d8804d4ab93723"],["D:/MyBlog/public/photoes/marvel/index.html","bd28d8977bd3a29050d58b1519671d71"],["D:/MyBlog/public/photoes/wallpaper/index.html","e7be919c40c64a5eb4bf6f85d8fc7bc1"],["D:/MyBlog/public/tags/Markdown/index.html","c3a71300cfde57db6d72455f951b2dbe"],["D:/MyBlog/public/tags/UML/index.html","df75c58cf55de8c419ef365c009bfee3"],["D:/MyBlog/public/tags/git/index.html","f09e38ae73b479e820d360f76013415d"],["D:/MyBlog/public/tags/github/index.html","0ccdb75d8028ea720b885b38f3a2e02a"],["D:/MyBlog/public/tags/hexo/index.html","7a69fd63d26af846a04b495169dcd6d7"],["D:/MyBlog/public/tags/index.html","135847ea55d072a5919afc11c3b68f32"],["D:/MyBlog/public/tags/python/index.html","0c61aaf3328051e4041ade2afbc6d925"],["D:/MyBlog/public/tags/tomcat/index.html","61edd11aac82e30cb8f10dde6b8efd40"],["D:/MyBlog/public/tags/刷题/index.html","2865884f404f2d67bd970f204e33e9f4"],["D:/MyBlog/public/tags/消费社会/index.html","24607c7e962fafbc7f22d9d34a7ca309"],["D:/MyBlog/public/tags/生活/index.html","fe8bca0f6f898f7b3c2c8b3717b9aef2"],["D:/MyBlog/public/tags/笔记/index.html","0766060cb485e521cc73fae435576ff3"],["D:/MyBlog/public/tags/设计模式/index.html","e9594d44bccbb66b859684944ee50b92"]];
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







