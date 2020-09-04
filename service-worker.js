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

var precacheConfig = [["D:/MyBlog/public/2020/07/01/blog-01/index.html","313bcab58849fc1e95d977f107197c74"],["D:/MyBlog/public/2020/07/02/blog-02/index.html","468e1e0209ee0846aa2cd6d37ee05a4a"],["D:/MyBlog/public/2020/07/24/blog-03/index.html","1940bd4f5f242a7f4c8fbda7322d6faa"],["D:/MyBlog/public/2020/07/24/blog-04/index.html","4f9d8ca0f2b77ca1155be4130f69ff38"],["D:/MyBlog/public/2020/07/25/blog-05/index.html","d61e8cf3d79fbf4fdc6ad612fc9825dd"],["D:/MyBlog/public/2020/07/29/pythonNote/index.html","832691f16fd049efa26ac2ac3430689e"],["D:/MyBlog/public/2020/07/31/ExeCode-1/index.html","c5c6c07467c6bd2d64ccbfaf74eaec22"],["D:/MyBlog/public/2020/08/03/gitNote/index.html","fa04efd58495864931168c356621be8f"],["D:/MyBlog/public/2020/08/07/tomcatNote/index.html","0fa95d38a0dbce9390c699eed2061084"],["D:/MyBlog/public/2020/08/08/markDownNote/index.html","4d0dd8b00c8a13562a9e732aba9faecd"],["D:/MyBlog/public/2020/08/09/JavaNote/index.html","0527dd814412854d8e3c6a0b42fad7ba"],["D:/MyBlog/public/2020/08/09/UMLNote/index.html","543a26164ccd9c33953c0ca0f688ee13"],["D:/MyBlog/public/2020/08/09/designPatternNote/index.html","a0e741e106327715994b009213dc328a"],["D:/MyBlog/public/2020/08/11/JNDINote/index.html","d83e2efdf5f3f55ba7be90c5f6dc4cf6"],["D:/MyBlog/public/2020/08/14/JPANote/index.html","64d70e9a381a7a7aff4583da80118099"],["D:/MyBlog/public/2020/08/14/springOfIoC/index.html","d5bdfd0034d3445c286eff1559578b54"],["D:/MyBlog/public/2020/08/17/SpringOfAOP/index.html","620f3724bc1a87a6099d6deb0f0418c5"],["D:/MyBlog/public/2020/09/03/mybatisNote/index.html","b0170c4c98a2b308622fab6d271c8905"],["D:/MyBlog/public/2020/09/04/reSend/index.html","0e73b7e05d16aebdd25410d8891a3b35"],["D:/MyBlog/public/404.html","616067d7c9eef091f08af8e7c08dc915"],["D:/MyBlog/public/Lab/index.html","8905ee413e10f9f69db8bc77f7825fdc"],["D:/MyBlog/public/about/index.html","d2e8543ea1c4ca2198edd1a63e04c0e0"],["D:/MyBlog/public/archives/2020/07/index.html","1491ca782c87229e0f03a06b8e11fce0"],["D:/MyBlog/public/archives/2020/08/index.html","5fdb7b51c95c19131a68f2f5ba3c8369"],["D:/MyBlog/public/archives/2020/09/index.html","5b3a01e689020481c43c46cfbef34046"],["D:/MyBlog/public/archives/2020/index.html","9b8803940001e42aef7eb12215912350"],["D:/MyBlog/public/archives/2020/page/2/index.html","e340d33f6c42045c0455b06a28178610"],["D:/MyBlog/public/archives/index.html","0f38c552e4fdd8eab4aec8c5161a97a1"],["D:/MyBlog/public/archives/page/2/index.html","de720c2b5edecb9cd079aae88b526391"],["D:/MyBlog/public/baidu_verify_5Z7yKtEFCL.html","f81f79e0b65d36ba17d60eb795f18ac5"],["D:/MyBlog/public/categories/blog搭建/index.html","ec29dad56322b30915a2fad37b6962fa"],["D:/MyBlog/public/categories/index.html","c84470436c5d8e3d6bae1d28deebfbb2"],["D:/MyBlog/public/categories/刷题/index.html","1c6888aa5d5404e94faa9638c9b53974"],["D:/MyBlog/public/categories/学习笔记/index.html","340276f56fc98ebc21cae8ac138e3d25"],["D:/MyBlog/public/categories/学习笔记/page/2/index.html","6c87e610421fbb7968e9d5b9e650ed9a"],["D:/MyBlog/public/categories/读书/index.html","b21684d9bef8ac7c528a0ddd3b02f3d1"],["D:/MyBlog/public/categories/转发/index.html","3f4d59ce1e57a5a497c3c645998cf3a5"],["D:/MyBlog/public/categories/随笔/index.html","6e827f0b098153091aff028f1acb5a67"],["D:/MyBlog/public/comment/index.html","77a6d48a8e04c524de191c96823155a1"],["D:/MyBlog/public/css/index.css","88be40f6c4be7655140dd622152b817c"],["D:/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/MyBlog/public/img/404.jpg","9df39f9f85511a6b1433dae0bdfbe8a7"],["D:/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/MyBlog/public/img/alipay.jpg","542f7e17f351f532aefe9114f624fdc2"],["D:/MyBlog/public/img/copy404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/MyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/MyBlog/public/img/pignose.png","5627b40ccdadca6e866fc466740b2b9b"],["D:/MyBlog/public/img/tinypng.png","647523013b89e5cc2af4423078e785a3"],["D:/MyBlog/public/img/wechat.png","cb6ee848c7def651638f99a5929a83fe"],["D:/MyBlog/public/index.html","58fe1b31ac3f82ea1215d4e927c2d998"],["D:/MyBlog/public/js/main.js","af1fc968dd48dafada95cd797f906acc"],["D:/MyBlog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/MyBlog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/MyBlog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/MyBlog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/MyBlog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/MyBlog/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/MyBlog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/MyBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/MyBlog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/MyBlog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/MyBlog/public/js/utils.js","9a79a530e612235ae91149848ed41a83"],["D:/MyBlog/public/link/index.html","4c751c578b393ba0d5123081b22cdb00"],["D:/MyBlog/public/page/2/index.html","d7daf8b45c26ed377ff6d8ea3eada293"],["D:/MyBlog/public/photoes/BlogBG/index.html","e357bb9b5e0638c32809a380ed4b35ca"],["D:/MyBlog/public/photoes/girls/index.html","bcfbea3b6637908d1a353d432b4ee168"],["D:/MyBlog/public/photoes/index.html","74d456a9bf6506a90f37f4f3abba09d4"],["D:/MyBlog/public/photoes/marvel/index.html","33ac52d4f3aeaa0e22350a76c1bdb68e"],["D:/MyBlog/public/photoes/wallpaper/index.html","eaa346becdf8af62659cf3f36e38904f"],["D:/MyBlog/public/tags/JNDI/index.html","91c4986642b545e6b91aa650de16b8b6"],["D:/MyBlog/public/tags/JPA/index.html","f0ab3570e6e228b372cb39c7a5d1fbfa"],["D:/MyBlog/public/tags/Java/index.html","591e337349f7f724aaff1ca93dc2ba6c"],["D:/MyBlog/public/tags/Markdown/index.html","91eab77e7d02ddbe0f1115657279794d"],["D:/MyBlog/public/tags/Spring/index.html","72ce83876dbd25b7db16c7d8fc9fa863"],["D:/MyBlog/public/tags/UML/index.html","75da516df83dd2e9e129d2fe844782be"],["D:/MyBlog/public/tags/Web/index.html","5382674bf5c6999293f26023000c410a"],["D:/MyBlog/public/tags/git/index.html","da1b87f9e84e5f6fc605f3875afc7137"],["D:/MyBlog/public/tags/github/index.html","dc21692463d586eaab092c9de1336461"],["D:/MyBlog/public/tags/hexo/index.html","1c778b764efbdfb9911061b48172c24d"],["D:/MyBlog/public/tags/index.html","c0f21fa90b709ab8534a79e9796a7593"],["D:/MyBlog/public/tags/python/index.html","3a3ba1ada4c5574d87606b1d2586e13a"],["D:/MyBlog/public/tags/tomcat/index.html","8c3722ecdec79ef873593cfbcf2e5422"],["D:/MyBlog/public/tags/刷题/index.html","7dbe909f2a5a4fb8eacc550e2ea8f713"],["D:/MyBlog/public/tags/消费社会/index.html","9a5ecf7b2b053f71ed41f2111ce09762"],["D:/MyBlog/public/tags/生活/index.html","8016a3695c33d0865f6ae3ffacf8560d"],["D:/MyBlog/public/tags/笔记/index.html","f652d0f4d0ac655e3571251c2d47c5c0"],["D:/MyBlog/public/tags/笔记/page/2/index.html","4ab61f6503dfded479cd20b24042b830"],["D:/MyBlog/public/tags/设计模式/index.html","43ba23cfaba81efd185eecc9e40aeefa"],["D:/MyBlog/public/tags/转发/index.html","b42af12ca390ad38922345a0fd2742a1"]];
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







