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

var precacheConfig = [["D:/MyBlog/public/2020/07/01/blog-01/index.html","41f2bf1622e46304818789dc6d6e237e"],["D:/MyBlog/public/2020/07/02/blog-02/index.html","2cb08c1bb2880f28aa16225d289f490c"],["D:/MyBlog/public/2020/07/24/blog-03/index.html","5e5fb143e81e1cef8f0afd21cdedaff3"],["D:/MyBlog/public/2020/07/24/blog-04/index.html","25bf602d2e7d28deb01429120edd8e9b"],["D:/MyBlog/public/2020/07/25/blog-05/index.html","cc0de1cf4a0d6dd7962ac195a1c0c761"],["D:/MyBlog/public/2020/07/29/pythonNote/index.html","5c33eaef566025cb34647e15e4abd9e4"],["D:/MyBlog/public/2020/07/31/ExeCode-1/index.html","cbb736783c6aa0005c0cb850334bb9bb"],["D:/MyBlog/public/2020/08/03/gitNote/index.html","7528bda551fe3f27047205356b56ac6d"],["D:/MyBlog/public/2020/08/07/tomcatNote/index.html","1d45dffcde87bf4c8e677366c28b87af"],["D:/MyBlog/public/2020/08/08/markDownNote/index.html","ad152993af14519d3652bf966bbb08f9"],["D:/MyBlog/public/2020/08/09/JavaNote/index.html","2e8042d605fd00c4b93c1346379af530"],["D:/MyBlog/public/2020/08/09/UMLNote/index.html","8eae5642e29c63d97e9500e51c4b8e42"],["D:/MyBlog/public/2020/08/09/designPatternNote/index.html","60d08109a0239ae4bf4092b11bd887be"],["D:/MyBlog/public/2020/08/11/JNDINote/index.html","92eb5e37ba0111b2d44eee6aa7c8fd8e"],["D:/MyBlog/public/2020/08/14/JPANote/index.html","1f337957e27b2340af2d1cfbb2ce32c3"],["D:/MyBlog/public/2020/08/14/springOfIoC/index.html","92541955ab81f2dc8ec68c0db2280197"],["D:/MyBlog/public/2020/08/17/SpringOfAOP/index.html","74d3c76054d1c20944f97fa635c603ed"],["D:/MyBlog/public/404.html","19a930424e93501b9b1d101227a05e2a"],["D:/MyBlog/public/Lab/index.html","8905ee413e10f9f69db8bc77f7825fdc"],["D:/MyBlog/public/about/index.html","b33354c90388216beed041432674df69"],["D:/MyBlog/public/archives/2020/07/index.html","7f56d27f0b7fb5de791b2030ccfb1d62"],["D:/MyBlog/public/archives/2020/08/index.html","a106c6d48a2eb435598637fdb7e5e5bb"],["D:/MyBlog/public/archives/2020/index.html","b8167c1ecbd2208c3eeb959cd0b6e8af"],["D:/MyBlog/public/archives/2020/page/2/index.html","6e9b216e007bc7e66f150d36f8a454b3"],["D:/MyBlog/public/archives/index.html","1d30d665b20f091f4d8729f94e0de10c"],["D:/MyBlog/public/archives/page/2/index.html","c91ef8fd2b203254b94ad83a6018be45"],["D:/MyBlog/public/baidu_verify_5Z7yKtEFCL.html","f81f79e0b65d36ba17d60eb795f18ac5"],["D:/MyBlog/public/categories/blog搭建/index.html","2e3d5b80248a8a8e9eb285c4666b76bf"],["D:/MyBlog/public/categories/index.html","36c6b48a790b2a3da31351171c2139a3"],["D:/MyBlog/public/categories/刷题/index.html","35629310326f8096fa5b0a76e9cb7397"],["D:/MyBlog/public/categories/学习笔记/index.html","86ba530dd251bb0d9ee31a963517d96b"],["D:/MyBlog/public/categories/学习笔记/page/2/index.html","e91a1dcd7665532fbce2cc94bbc21f6b"],["D:/MyBlog/public/categories/读书/index.html","45237d265440c5ec71a7790c365576bb"],["D:/MyBlog/public/categories/随笔/index.html","01dae25a5cd018ba04776bc9cae98d97"],["D:/MyBlog/public/comment/index.html","54099a912d34f271e96047e51af5a5d0"],["D:/MyBlog/public/css/index.css","88be40f6c4be7655140dd622152b817c"],["D:/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/MyBlog/public/img/404.jpg","9df39f9f85511a6b1433dae0bdfbe8a7"],["D:/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/MyBlog/public/img/alipay.jpg","542f7e17f351f532aefe9114f624fdc2"],["D:/MyBlog/public/img/copy404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/MyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/MyBlog/public/img/pignose.png","5627b40ccdadca6e866fc466740b2b9b"],["D:/MyBlog/public/img/tinypng.png","647523013b89e5cc2af4423078e785a3"],["D:/MyBlog/public/img/wechat.png","cb6ee848c7def651638f99a5929a83fe"],["D:/MyBlog/public/index.html","d444ae91a66150b43d9857fcf368da33"],["D:/MyBlog/public/js/main.js","af1fc968dd48dafada95cd797f906acc"],["D:/MyBlog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/MyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/MyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/MyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/MyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/MyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/MyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/MyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/MyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/MyBlog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/MyBlog/public/js/utils.js","9a79a530e612235ae91149848ed41a83"],["D:/MyBlog/public/link/index.html","c2e8453666ff581506929464a5f2ee9c"],["D:/MyBlog/public/page/2/index.html","4e5a96ed6657217bf6df1573d6f894e5"],["D:/MyBlog/public/photoes/BlogBG/index.html","af382a2995e623eac247fff2f728fd84"],["D:/MyBlog/public/photoes/girls/index.html","12e87a31a75fe1d7158b3a15dc7c71d0"],["D:/MyBlog/public/photoes/index.html","991ddd8a814d9c5c7d918922f5f5b965"],["D:/MyBlog/public/photoes/marvel/index.html","8d5654ef5e85b508ab60641e213ec34c"],["D:/MyBlog/public/photoes/wallpaper/index.html","c7352b97068735c258fe14a255140e7c"],["D:/MyBlog/public/tags/JNDI/index.html","67d048d801b058e78c6b792e728f5b44"],["D:/MyBlog/public/tags/JPA/index.html","15f8a9246e1783c62a857519fca81984"],["D:/MyBlog/public/tags/Java/index.html","2db6b71348e7388ee2d7c0ccd40425c9"],["D:/MyBlog/public/tags/Markdown/index.html","12940d6da09fb48262f843b9e87e139a"],["D:/MyBlog/public/tags/Spring/index.html","ca06335be33172c5abc084f9a649e42d"],["D:/MyBlog/public/tags/UML/index.html","0a7f5c04628fd512f16b860e923bbe75"],["D:/MyBlog/public/tags/git/index.html","871c2cfbd1b128c368eee4287cda7f9d"],["D:/MyBlog/public/tags/github/index.html","801fbfd01f24ddad5db93f391ed68f61"],["D:/MyBlog/public/tags/hexo/index.html","eb8c5a5027144de2a4f0c99851c0c126"],["D:/MyBlog/public/tags/index.html","87f74b234cd3f3a0b5db89cadbe27415"],["D:/MyBlog/public/tags/python/index.html","0764bc9aa45006d13ee501ed4556ee12"],["D:/MyBlog/public/tags/tomcat/index.html","aee91be0524829c22efa9d37dbcafe29"],["D:/MyBlog/public/tags/刷题/index.html","3980bb4ab9de373f8f4a3a0cc21309da"],["D:/MyBlog/public/tags/消费社会/index.html","b55480310e1f29e8b95ccbd05d1fe319"],["D:/MyBlog/public/tags/生活/index.html","e6a0b09fd084761e2b7e7a671dc2ab89"],["D:/MyBlog/public/tags/笔记/index.html","be86956520bc7e85ed0105ba745cf3e0"],["D:/MyBlog/public/tags/笔记/page/2/index.html","3135c8dadb95acb584231864c6b51c51"],["D:/MyBlog/public/tags/设计模式/index.html","03e31caf4f9f1862046468420677f442"]];
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







