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

var precacheConfig = [["D:/MyBlog/public/2020/07/01/blog-01/index.html","81a9fc5ae3780116fb5e24200a2dfa86"],["D:/MyBlog/public/2020/07/02/blog-02/index.html","335ccf560c2cdcd66ef1212dce471e61"],["D:/MyBlog/public/2020/07/24/blog-03/index.html","2eebe552363ba76c1198919a93446034"],["D:/MyBlog/public/2020/07/24/blog-04/index.html","6167314eb10534bd359a495bd2aed6fe"],["D:/MyBlog/public/2020/07/25/blog-05/index.html","f1de77619d26f88446c25c599cbad957"],["D:/MyBlog/public/2020/07/29/pythonNote/index.html","fa19ac8490d17febba51adab86827d36"],["D:/MyBlog/public/2020/07/31/ExeCode-1/index.html","6ac52c73178d9302064c5cdc1c43df83"],["D:/MyBlog/public/2020/08/03/gitNote/index.html","8da0ec98cddf60956b9c0dc476adb5d4"],["D:/MyBlog/public/2020/08/07/tomcatNote/index.html","3d825b536ef82211bfac9bffe89fcc1e"],["D:/MyBlog/public/2020/08/08/markDownNote/index.html","6316750fcb14e6e95753aa23a823507c"],["D:/MyBlog/public/2020/08/09/JavaNote/index.html","3ad9396c12bf99ca04ed522cec9402cf"],["D:/MyBlog/public/2020/08/09/UMLNote/index.html","9d623df55fb4a2f18096b8dd06241138"],["D:/MyBlog/public/2020/08/09/designPatternNote/index.html","40e321082e08793ba3e108c5e19bbf98"],["D:/MyBlog/public/2020/08/11/JNDINote/index.html","64faecf6a653fba57fba80e9bbdacfe3"],["D:/MyBlog/public/2020/08/14/JPANote/index.html","0a9b7863c9b706c5d4503c6e30df8180"],["D:/MyBlog/public/2020/08/14/springOfIoC/index.html","c831ff0486b7d2e403ddd18e7fbaa83e"],["D:/MyBlog/public/2020/08/17/SpringOfAOP/index.html","0b29b7b8d1c70e6a72736a636198473d"],["D:/MyBlog/public/2020/09/03/mybatisNote/index.html","02528baa6f296da51a98421427cdfc56"],["D:/MyBlog/public/2020/09/04/reSend/index.html","ca8053d463718cd1c6dd2c24045f2068"],["D:/MyBlog/public/2020/09/11/JspDiffHtml/index.html","8cc2369413742c79871d427fca29f9fe"],["D:/MyBlog/public/404.html","4a2401cf59e0aba525bd5259bc80e0bd"],["D:/MyBlog/public/Lab/index.html","8905ee413e10f9f69db8bc77f7825fdc"],["D:/MyBlog/public/about/index.html","1820e1e6e5e4f8bc2cb8bc61927e4a71"],["D:/MyBlog/public/archives/2020/07/index.html","3d1dc08844e945387836b42262771838"],["D:/MyBlog/public/archives/2020/08/index.html","871dcf5b17c2d9286b44778928a33652"],["D:/MyBlog/public/archives/2020/09/index.html","9c8e4ae6ff5b8a6572e6ce11a7a15cea"],["D:/MyBlog/public/archives/2020/index.html","59237d0a28d59a50db30ae52afeba201"],["D:/MyBlog/public/archives/2020/page/2/index.html","e1e0a65f3d3b7007eb557ddeaf0caa3c"],["D:/MyBlog/public/archives/index.html","8abaa14ca80ebd14252ca917b40b762f"],["D:/MyBlog/public/archives/page/2/index.html","7383a1b5c330325ced803204136127da"],["D:/MyBlog/public/baidu_verify_5Z7yKtEFCL.html","f81f79e0b65d36ba17d60eb795f18ac5"],["D:/MyBlog/public/categories/blog搭建/index.html","8e587816948fc472cbdade4bdd5126bd"],["D:/MyBlog/public/categories/index.html","4ca3f8e1b19a4bcc17b8cbbea5cf3519"],["D:/MyBlog/public/categories/刷题/index.html","a81a71a219291b12012abf80d14ab87d"],["D:/MyBlog/public/categories/学习笔记/index.html","e96b05cb39f429d5992c430997033cb6"],["D:/MyBlog/public/categories/学习笔记/page/2/index.html","fb1127e462e6beb071b8a94caaeba1ab"],["D:/MyBlog/public/categories/读书/index.html","e4fb4aff139ec07d766b6b21771834da"],["D:/MyBlog/public/categories/转发/index.html","d5951634d5ec0723f214cff4722d5f51"],["D:/MyBlog/public/categories/随笔/index.html","2803e6f5f01c46098c42cc1fc0c54644"],["D:/MyBlog/public/comment/index.html","83331940cb2a44215924c16a586cb697"],["D:/MyBlog/public/css/index.css","88be40f6c4be7655140dd622152b817c"],["D:/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/MyBlog/public/img/404.jpg","9df39f9f85511a6b1433dae0bdfbe8a7"],["D:/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/MyBlog/public/img/alipay.jpg","542f7e17f351f532aefe9114f624fdc2"],["D:/MyBlog/public/img/copy404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/MyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/MyBlog/public/img/pignose.png","5627b40ccdadca6e866fc466740b2b9b"],["D:/MyBlog/public/img/tinypng.png","647523013b89e5cc2af4423078e785a3"],["D:/MyBlog/public/img/wechat.png","cb6ee848c7def651638f99a5929a83fe"],["D:/MyBlog/public/index.html","d3feeafb088bc84bc482a681f461463d"],["D:/MyBlog/public/js/main.js","af1fc968dd48dafada95cd797f906acc"],["D:/MyBlog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/MyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/MyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/MyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/MyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/MyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/MyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/MyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/MyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/MyBlog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/MyBlog/public/js/utils.js","9a79a530e612235ae91149848ed41a83"],["D:/MyBlog/public/link/index.html","f935f0de4ed78bb1f7cf739a06f47257"],["D:/MyBlog/public/page/2/index.html","4ab7fb9838cb8312f802588397761c91"],["D:/MyBlog/public/photoes/BlogBG/index.html","46869771c3b0e8089cd0c85dd20ffe2b"],["D:/MyBlog/public/photoes/girls/index.html","e33f7e81ad76426e7515353b1d49c611"],["D:/MyBlog/public/photoes/index.html","91dbc2c6633f8a0a3408d010445df178"],["D:/MyBlog/public/photoes/marvel/index.html","88070627fa827ef29796dd32c775ca4d"],["D:/MyBlog/public/photoes/wallpaper/index.html","1354b44fc2d99770decf95ae1bca82ca"],["D:/MyBlog/public/tags/JNDI/index.html","e4a3e1e6096e4fbead46b4c85cc91499"],["D:/MyBlog/public/tags/JPA/index.html","8bf9ab3e2595ee1e77603e24be289b1f"],["D:/MyBlog/public/tags/JSP/index.html","de672dedf8713b3262b0e6f87e6f3073"],["D:/MyBlog/public/tags/Java/index.html","e7857385e38f1601e94716af94d260ca"],["D:/MyBlog/public/tags/Markdown/index.html","52d2b76cf8a6f667ed0c6aab874ee531"],["D:/MyBlog/public/tags/Spring/index.html","ec1ac22de4f4ee4598307f24b5d4c27b"],["D:/MyBlog/public/tags/UML/index.html","c3a7c3fa58cd89769b52f3db428843d9"],["D:/MyBlog/public/tags/Web/index.html","2af76b8953c7a696a0b7bef3a799fda3"],["D:/MyBlog/public/tags/git/index.html","306a0cf1570fc286713af301bd2460d7"],["D:/MyBlog/public/tags/github/index.html","de2eb6017bea9fafe120c663ac09de24"],["D:/MyBlog/public/tags/hexo/index.html","8fed38f96826482c0a336a8f2fb0f9b2"],["D:/MyBlog/public/tags/index.html","58f54039274e897b6d83274e92b5aaca"],["D:/MyBlog/public/tags/python/index.html","d785cd3b3308b21c8ea103768d525ff0"],["D:/MyBlog/public/tags/tomcat/index.html","d0b0ef4c601b0f5eac274acb5058b3f8"],["D:/MyBlog/public/tags/刷题/index.html","855e12e3b1a40e96c4c9e16a437db137"],["D:/MyBlog/public/tags/消费社会/index.html","53465f9e9e60b4ceacb38e36bb946e82"],["D:/MyBlog/public/tags/生活/index.html","9cb72c57ace8d71942db5e3ee3de3857"],["D:/MyBlog/public/tags/笔记/index.html","005eacaaa247813aa9adfbe039ca1108"],["D:/MyBlog/public/tags/笔记/page/2/index.html","3777d3acde6b96fb741abd8bdd0f71e2"],["D:/MyBlog/public/tags/设计模式/index.html","96d03a0fe9a0c0d372bc3d4b7acaa943"],["D:/MyBlog/public/tags/转发/index.html","a766977122c0fcb4cb178beb792bfa94"]];
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







