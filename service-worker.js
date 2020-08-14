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

var precacheConfig = [["D:/MyBlog/public/2020/07/01/blog-01/index.html","10d1383b70dc7342a0ab4e4efebd01c0"],["D:/MyBlog/public/2020/07/02/blog-02/index.html","2b1ae25c12c93d30e25cd66cfa8611ca"],["D:/MyBlog/public/2020/07/24/blog-03/index.html","afadee83da520505877c508a442d86a8"],["D:/MyBlog/public/2020/07/24/blog-04/index.html","08727851c3028a3edcbea9f5103c1338"],["D:/MyBlog/public/2020/07/25/blog-05/index.html","1f779dd79bd2ad38009a4acd53460ccf"],["D:/MyBlog/public/2020/07/29/pythonNote/index.html","59966477d1c37bcf6ae5089ab3ce2ab0"],["D:/MyBlog/public/2020/07/31/ExeCode-1/index.html","f2111138be56801c9daa71722653546a"],["D:/MyBlog/public/2020/08/03/gitNote/index.html","f6fef2b8885aaf52770f6098412273f4"],["D:/MyBlog/public/2020/08/07/tomcatNote/index.html","48aab4213c89fae570e65a0a48e62c20"],["D:/MyBlog/public/2020/08/08/markDownNote/index.html","20e2dc0a1f8806654098f41b10ba2e21"],["D:/MyBlog/public/2020/08/09/JavaNote/index.html","d71e1fa78aeef3b614131367f3c45fc0"],["D:/MyBlog/public/2020/08/09/UMLNote/index.html","118282680bfd55eed9bfac1dea145e6c"],["D:/MyBlog/public/2020/08/09/designPatternNote/index.html","f37a8e1b94ea183bdf16b992453fcf7e"],["D:/MyBlog/public/2020/08/11/JNDINote/index.html","08283c7873ebbd7c191f999a1f988765"],["D:/MyBlog/public/2020/08/14/JPANote/index.html","11797e9d1bf5a0dceb361602687be758"],["D:/MyBlog/public/2020/08/14/springNote/index.html","eea91bb5690246534219d7f05d94455d"],["D:/MyBlog/public/404.html","2821fa46f7e5814f5ebbbfabfdaaf4d5"],["D:/MyBlog/public/Lab/index.html","8905ee413e10f9f69db8bc77f7825fdc"],["D:/MyBlog/public/about/index.html","3bb56f01971c2658651f89c926db67c5"],["D:/MyBlog/public/archives/2020/07/index.html","c1d870d4c71637c68a920742bb6b8564"],["D:/MyBlog/public/archives/2020/08/index.html","a87f856fc52a3334ee5700a57d0f83ed"],["D:/MyBlog/public/archives/2020/index.html","628febc87acb5ae00c4170b4ae48c6ff"],["D:/MyBlog/public/archives/2020/page/2/index.html","ebd71717cbee1a06442aeb034cccc91a"],["D:/MyBlog/public/archives/index.html","05ae0d8cbe3cf5c351a21658c7c9e2d9"],["D:/MyBlog/public/archives/page/2/index.html","46b90cb57fc4fb11482451d12e36597b"],["D:/MyBlog/public/categories/blog搭建/index.html","0c4a43486c266f1b6a7d48a5c2e0099f"],["D:/MyBlog/public/categories/index.html","c8b66e2b6397964b747e36f71dc1127a"],["D:/MyBlog/public/categories/刷题/index.html","718dcfefe98488aca0214b5d21af8eb5"],["D:/MyBlog/public/categories/学习笔记/index.html","07a29ead1b3ec061ea0a79751eb0c223"],["D:/MyBlog/public/categories/笔记/index.html","12a0ac54d8999bdedd752791d72b9123"],["D:/MyBlog/public/categories/读书/index.html","c0d0ceda9a494ba1ab25602f5852dda4"],["D:/MyBlog/public/categories/随笔/index.html","318ff627cd7e07ec4c1ae45f544b6b75"],["D:/MyBlog/public/comment/index.html","a1c2878fbc980ce9b8963856746e21e5"],["D:/MyBlog/public/css/index.css","88be40f6c4be7655140dd622152b817c"],["D:/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/MyBlog/public/img/404.jpg","9df39f9f85511a6b1433dae0bdfbe8a7"],["D:/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/MyBlog/public/img/alipay.jpg","542f7e17f351f532aefe9114f624fdc2"],["D:/MyBlog/public/img/copy404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/MyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/MyBlog/public/img/pignose.png","5627b40ccdadca6e866fc466740b2b9b"],["D:/MyBlog/public/img/tinypng.png","647523013b89e5cc2af4423078e785a3"],["D:/MyBlog/public/img/wechat.png","cb6ee848c7def651638f99a5929a83fe"],["D:/MyBlog/public/index.html","d6ad21ea44b8c4a48abf939ce874ece0"],["D:/MyBlog/public/js/main.js","af1fc968dd48dafada95cd797f906acc"],["D:/MyBlog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/MyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/MyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/MyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/MyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/MyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/MyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/MyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/MyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/MyBlog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/MyBlog/public/js/utils.js","9a79a530e612235ae91149848ed41a83"],["D:/MyBlog/public/link/index.html","ab22f79603600538f1ab0bc79cac8584"],["D:/MyBlog/public/page/2/index.html","10cabb04d070e042e80df694bef921ec"],["D:/MyBlog/public/photoes/BlogBG/index.html","76f91cb59f3edf31c3bf145759b675d6"],["D:/MyBlog/public/photoes/girls/index.html","69d69eecbcd9009433d21136fb2e28aa"],["D:/MyBlog/public/photoes/index.html","fd513d61031d10a845c1ca89053b0071"],["D:/MyBlog/public/photoes/marvel/index.html","7124f8eea0969d2ebd2e36481c1cfc31"],["D:/MyBlog/public/photoes/wallpaper/index.html","4268b1b48eae176a267977a303d1c811"],["D:/MyBlog/public/tags/JNDI/index.html","d8d0e92e3c25d16fed2b3b7ad841935a"],["D:/MyBlog/public/tags/JPA/index.html","495ea5779ade181e3adda96480f7179d"],["D:/MyBlog/public/tags/Java/index.html","5936976826f8a446ec4e072e2f4c6567"],["D:/MyBlog/public/tags/Markdown/index.html","032b69047beb899d39d43ded9215d204"],["D:/MyBlog/public/tags/Spring/index.html","7dd8e84c60c40ab5fe34f64103c75213"],["D:/MyBlog/public/tags/UML/index.html","f04cffb9cea7ae9e9002def132f1483c"],["D:/MyBlog/public/tags/git/index.html","b03c59212dd768dc0018dbbba7482e58"],["D:/MyBlog/public/tags/github/index.html","2744195ead3598b224c94b631d77d286"],["D:/MyBlog/public/tags/hexo/index.html","fb59f9e8be3f96216319b2fe15b850b6"],["D:/MyBlog/public/tags/index.html","877edb87cd2e08b7455a54954e265aa3"],["D:/MyBlog/public/tags/python/index.html","88894b9231fba6f493438ac0a0eda41d"],["D:/MyBlog/public/tags/tomcat/index.html","eeb54fde12e0d928bc79d19ffa9395bf"],["D:/MyBlog/public/tags/刷题/index.html","9c6bbb9320d6343d7fc713972f36d03e"],["D:/MyBlog/public/tags/消费社会/index.html","aa54c43e24717cb65f87ce0568530caa"],["D:/MyBlog/public/tags/生活/index.html","375b8c4b96433c67eeca59e49e7d737c"],["D:/MyBlog/public/tags/笔记/index.html","48270267f3b4974926fe846272908aad"],["D:/MyBlog/public/tags/设计模式/index.html","d2bbdff6ae502f9a5e9fa244a49956d3"]];
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







