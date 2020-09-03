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

var precacheConfig = [["D:/MyBlog/public/2020/07/01/blog-01/index.html","30e77d743b3f12fef25b6df650a6d711"],["D:/MyBlog/public/2020/07/02/blog-02/index.html","987eaf45154b5ef5f598ed64400b1728"],["D:/MyBlog/public/2020/07/24/blog-03/index.html","9f07104e664f81b970a145c6b0431659"],["D:/MyBlog/public/2020/07/24/blog-04/index.html","f901ac3e7c47cd9e1eaedd9cb314294b"],["D:/MyBlog/public/2020/07/25/blog-05/index.html","bc04ffaaf61eda0d297936b0679d3917"],["D:/MyBlog/public/2020/07/29/pythonNote/index.html","8b054a2ba47bb9bd23b2a023c360ed8a"],["D:/MyBlog/public/2020/07/31/ExeCode-1/index.html","88ef23bd0f6da3025b14b8e980348097"],["D:/MyBlog/public/2020/08/03/gitNote/index.html","d7044cb098067604f2a11ab7e136c563"],["D:/MyBlog/public/2020/08/07/tomcatNote/index.html","091a091cc9ea3a022c0f60d532576adb"],["D:/MyBlog/public/2020/08/08/markDownNote/index.html","00dace8eaae5559f5dcbdd6a65540dbe"],["D:/MyBlog/public/2020/08/09/JavaNote/index.html","5a6c02dd5c0947c611482fda8c564c85"],["D:/MyBlog/public/2020/08/09/UMLNote/index.html","f1a2979171668b9d8cffa2dd2aba25f3"],["D:/MyBlog/public/2020/08/09/designPatternNote/index.html","8bc0ba7654c4158f3358ab8ca8f643b1"],["D:/MyBlog/public/2020/08/11/JNDINote/index.html","c1f01bdfe2c9afcd9d3984052c602995"],["D:/MyBlog/public/2020/08/14/JPANote/index.html","e221be5a759911d535c206794783a89d"],["D:/MyBlog/public/2020/08/14/springOfIoC/index.html","fe0b0810862fce9366f32dc0219a523b"],["D:/MyBlog/public/2020/08/17/SpringOfAOP/index.html","1f73014f6de934cac7ba79c7e54429ca"],["D:/MyBlog/public/2020/09/03/mybatisNote/index.html","21048b3e608ffeccf547b5acabd55060"],["D:/MyBlog/public/404.html","a9bb0f3be35a68ef791d8db6c10d7320"],["D:/MyBlog/public/Lab/index.html","8905ee413e10f9f69db8bc77f7825fdc"],["D:/MyBlog/public/about/index.html","41a7a469113889d528c831e58f72c2ba"],["D:/MyBlog/public/archives/2020/07/index.html","375b6a02ff91ac9e648331a68d582406"],["D:/MyBlog/public/archives/2020/08/index.html","9ebb5709582a5d5cbc55ea453a954f46"],["D:/MyBlog/public/archives/2020/09/index.html","b70a760e94b5702ccde20caf74576722"],["D:/MyBlog/public/archives/2020/index.html","4294cbf5993af792ff8aad1b7bc9af9f"],["D:/MyBlog/public/archives/2020/page/2/index.html","21e53d192907530a64eaf2cf746a9742"],["D:/MyBlog/public/archives/index.html","a52d6c0a9b507a9cadf9edc59a97a5aa"],["D:/MyBlog/public/archives/page/2/index.html","1d8e042d7d0d271fb531bc150523e436"],["D:/MyBlog/public/baidu_verify_5Z7yKtEFCL.html","f81f79e0b65d36ba17d60eb795f18ac5"],["D:/MyBlog/public/categories/blog搭建/index.html","1e11a9de647b4c9316419b421b84b639"],["D:/MyBlog/public/categories/index.html","889ada8e0e95853f690ae83c1c456136"],["D:/MyBlog/public/categories/刷题/index.html","efbe299d8f5c8aa21b0cd6f49855b50c"],["D:/MyBlog/public/categories/学习笔记/index.html","d6b7f1437642c52679c26748ecea325b"],["D:/MyBlog/public/categories/学习笔记/page/2/index.html","664ee687dce7479c7e5fdcf4938cf578"],["D:/MyBlog/public/categories/读书/index.html","cfaaff2dfb9dc80446d5d96f6f65e0e6"],["D:/MyBlog/public/categories/随笔/index.html","12b6b665d87e0a9537185d354e5dc8f5"],["D:/MyBlog/public/comment/index.html","41583d45db7dc13e95e0e6649ef98b76"],["D:/MyBlog/public/css/index.css","88be40f6c4be7655140dd622152b817c"],["D:/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/MyBlog/public/img/404.jpg","9df39f9f85511a6b1433dae0bdfbe8a7"],["D:/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/MyBlog/public/img/alipay.jpg","542f7e17f351f532aefe9114f624fdc2"],["D:/MyBlog/public/img/copy404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/MyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/MyBlog/public/img/pignose.png","5627b40ccdadca6e866fc466740b2b9b"],["D:/MyBlog/public/img/tinypng.png","647523013b89e5cc2af4423078e785a3"],["D:/MyBlog/public/img/wechat.png","cb6ee848c7def651638f99a5929a83fe"],["D:/MyBlog/public/index.html","d183db489e43691dcbd22db8c3858a21"],["D:/MyBlog/public/js/main.js","af1fc968dd48dafada95cd797f906acc"],["D:/MyBlog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/MyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/MyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/MyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/MyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/MyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/MyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/MyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/MyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/MyBlog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/MyBlog/public/js/utils.js","9a79a530e612235ae91149848ed41a83"],["D:/MyBlog/public/link/index.html","6a072c936c2e944a574b6f18e26e10aa"],["D:/MyBlog/public/page/2/index.html","a2bcccf604215e2792b642c14515a93a"],["D:/MyBlog/public/photoes/BlogBG/index.html","cd8414b7048a9ee0ffa8ad4188423371"],["D:/MyBlog/public/photoes/girls/index.html","07d7f84381cb7b680bcfbf83f4a260d4"],["D:/MyBlog/public/photoes/index.html","7f1220c85fb62f637cd48f2b98790e1d"],["D:/MyBlog/public/photoes/marvel/index.html","0d0dc95543c8ef6d9e507c0f6c1c1d41"],["D:/MyBlog/public/photoes/wallpaper/index.html","4fc5daeebc1cadc8077f1d00ae76fa65"],["D:/MyBlog/public/tags/JNDI/index.html","f7f1c939a3ad0bd4c39ff27775a66f2e"],["D:/MyBlog/public/tags/JPA/index.html","2411b78967d10ef849c46608f2a8ec2a"],["D:/MyBlog/public/tags/Java/index.html","7bf03be49d923e5bcff2d4d15a5c6fa3"],["D:/MyBlog/public/tags/Markdown/index.html","8892344787f805c41140ac44b6d6fd0b"],["D:/MyBlog/public/tags/Spring/index.html","1664b1e8d0ab2b0de8d1bb85ae45ee05"],["D:/MyBlog/public/tags/UML/index.html","4d5c91e1a43923062e4b5593287a65d3"],["D:/MyBlog/public/tags/git/index.html","118fab3cff556086356fcf83754240ee"],["D:/MyBlog/public/tags/github/index.html","ec41f0f4be2fb36f7fa5aada6e002818"],["D:/MyBlog/public/tags/hexo/index.html","9ea64428196c9f4a2655b337681f8426"],["D:/MyBlog/public/tags/index.html","f6ecedafd8cbff04eae56248757a850f"],["D:/MyBlog/public/tags/python/index.html","97d2526031b8669c27dcdf88f64a1e7f"],["D:/MyBlog/public/tags/tomcat/index.html","e8c12202c1fc06cd2bf8f1f73e0dd0eb"],["D:/MyBlog/public/tags/刷题/index.html","88b95c94916f81c411b354618ff15867"],["D:/MyBlog/public/tags/消费社会/index.html","c882c4cdd417ca1783789c6e7594c9b2"],["D:/MyBlog/public/tags/生活/index.html","77441d624af5b4c5afe14746c78816ee"],["D:/MyBlog/public/tags/笔记/index.html","b3d58630ed44a4fde798a5e7dc1eb536"],["D:/MyBlog/public/tags/笔记/page/2/index.html","de26806c35c3cb563817781c7c402af0"],["D:/MyBlog/public/tags/设计模式/index.html","097322683e0aa4b85a6b563bdc8f676f"]];
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







