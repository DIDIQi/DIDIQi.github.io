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

var precacheConfig = [["D:/MyBlog/public/2020/07/01/blog-01/index.html","5be423ea3f7f5fd3bcdea4c1634444d9"],["D:/MyBlog/public/2020/07/02/blog-02/index.html","406b7a938d590921985612553d554bee"],["D:/MyBlog/public/2020/07/24/blog-03/index.html","6c6e4fd68d986c6fa0269789434433ba"],["D:/MyBlog/public/2020/07/24/blog-04/index.html","76cefb85dbd97b3fab40cddd135b2c46"],["D:/MyBlog/public/2020/07/25/blog-05/index.html","644d82305fc9fa634bd5d4d10d98bef6"],["D:/MyBlog/public/2020/07/29/pythonNote/index.html","9d14ceb56fa10b3f92d1148ea3ad7bca"],["D:/MyBlog/public/2020/07/31/ExeCode-1/index.html","739605699cf13c30196cc7fc4f205e42"],["D:/MyBlog/public/2020/08/03/gitNote/index.html","82bae473810db0e54d320d12af1fc376"],["D:/MyBlog/public/2020/08/07/tomcatNote/index.html","7d2047e1fd70a451fd5c822f12db32b1"],["D:/MyBlog/public/2020/08/08/markDownNote/index.html","d0a2a6f26bc5d194a1dfeea94fe75467"],["D:/MyBlog/public/2020/08/09/JavaNote/index.html","d087961b1d7bdbd2d6633071d76f5c17"],["D:/MyBlog/public/2020/08/09/UMLNote/index.html","3078aff609be5e72ac87ba1214f6b6be"],["D:/MyBlog/public/2020/08/09/designPatternNote/index.html","a04a0b22136ef9428fc0c0faf3447bf2"],["D:/MyBlog/public/404.html","b343c029de7ff75fcf98ceea7b2c1832"],["D:/MyBlog/public/Lab/index.html","8905ee413e10f9f69db8bc77f7825fdc"],["D:/MyBlog/public/about/index.html","d9fc4633ecb382b2d18d465dd93696f5"],["D:/MyBlog/public/archives/2020/07/index.html","ba0760af512b542f2af1fa29ec02fbea"],["D:/MyBlog/public/archives/2020/08/index.html","c2b1221dead637d54266d13a2be6dae6"],["D:/MyBlog/public/archives/2020/index.html","58227466471b7de01f2eb4f3960bac94"],["D:/MyBlog/public/archives/2020/page/2/index.html","b4e2bdb4fc32848084c4d14db3577836"],["D:/MyBlog/public/archives/index.html","ff56afac2b4a42f5e0c14a17b0631de2"],["D:/MyBlog/public/archives/page/2/index.html","631e15a7a7f31bb81e8de51f293f0c74"],["D:/MyBlog/public/categories/blog搭建/index.html","75bd6f6a982fdb42c3c07c5468379fe1"],["D:/MyBlog/public/categories/index.html","ae164c2b49a1dfebb78a99ee13da235e"],["D:/MyBlog/public/categories/刷题/index.html","eada340f2e0a0e6cbcc199db1ae18ae5"],["D:/MyBlog/public/categories/学习笔记/index.html","a5a3e502a6472e926b5d5692efc273bf"],["D:/MyBlog/public/categories/笔记/index.html","59d1d9766c3f94ba4e51d8647d817104"],["D:/MyBlog/public/categories/读书/index.html","413dd035cd22d1740ad4a37c53891237"],["D:/MyBlog/public/categories/随笔/index.html","d33f66543762900d6aafccf8d56b1230"],["D:/MyBlog/public/comment/index.html","52988bc6f892c7ef54c2f0421693c652"],["D:/MyBlog/public/css/index.css","88be40f6c4be7655140dd622152b817c"],["D:/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/MyBlog/public/img/404.jpg","9df39f9f85511a6b1433dae0bdfbe8a7"],["D:/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/MyBlog/public/img/alipay.jpg","542f7e17f351f532aefe9114f624fdc2"],["D:/MyBlog/public/img/copy404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/MyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/MyBlog/public/img/pignose.png","5627b40ccdadca6e866fc466740b2b9b"],["D:/MyBlog/public/img/tinypng.png","647523013b89e5cc2af4423078e785a3"],["D:/MyBlog/public/img/wechat.png","cb6ee848c7def651638f99a5929a83fe"],["D:/MyBlog/public/index.html","08b1980f6747e0f07f6632b841dd68e5"],["D:/MyBlog/public/js/main.js","af1fc968dd48dafada95cd797f906acc"],["D:/MyBlog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/MyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/MyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/MyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/MyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/MyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/MyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/MyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/MyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/MyBlog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/MyBlog/public/js/utils.js","9a79a530e612235ae91149848ed41a83"],["D:/MyBlog/public/link/index.html","7d66800a0eb39780504d6c21aec6b7a7"],["D:/MyBlog/public/page/2/index.html","db3f71c8184ea6045f209d3e9be161f5"],["D:/MyBlog/public/photoes/BlogBG/index.html","cc72d3681aabab8159877a82d63c3817"],["D:/MyBlog/public/photoes/girls/index.html","9641ad01426bc6bd7755e64bf53cd560"],["D:/MyBlog/public/photoes/index.html","d3d72315be7c63d1dc5dfaedefe438c8"],["D:/MyBlog/public/photoes/marvel/index.html","439c6cb6f15796f05b660b998a6d2ab7"],["D:/MyBlog/public/photoes/wallpaper/index.html","64c860cbaae442ac3a45b47983d75916"],["D:/MyBlog/public/tags/Java/index.html","601f1af01737c0c98d99ac3913ba3c2d"],["D:/MyBlog/public/tags/Markdown/index.html","e14e2f48dd357fb418caace7fc09f28c"],["D:/MyBlog/public/tags/UML/index.html","d2f8697d82b5a0ea2b793dbd44d7d797"],["D:/MyBlog/public/tags/git/index.html","915b0acab1664e9d5bd3691846c151de"],["D:/MyBlog/public/tags/github/index.html","33cf2464475fad61576962cccd889f08"],["D:/MyBlog/public/tags/hexo/index.html","991b63df5a806a6d7e1766da3c19404f"],["D:/MyBlog/public/tags/index.html","dac8f7bd31c4a54defc6bd7dbcd5809c"],["D:/MyBlog/public/tags/python/index.html","9ed7ec6bc1ccc3a9a2ab1c99f2d0d494"],["D:/MyBlog/public/tags/tomcat/index.html","ed64266254d261a6c54d38c28fcd5337"],["D:/MyBlog/public/tags/刷题/index.html","0930bba4dfd100202c4ba9f344ac4933"],["D:/MyBlog/public/tags/消费社会/index.html","41dea0489cbe48df1ef23dcaf119e9e2"],["D:/MyBlog/public/tags/生活/index.html","1de91cfffba7068d119ea8273f124ffc"],["D:/MyBlog/public/tags/笔记/index.html","7e7b1d8c13f57d3b1d5abfae11546bd5"],["D:/MyBlog/public/tags/设计模式/index.html","548f78a0805a1153c23e5dbdc023143d"]];
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







