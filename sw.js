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

var precacheConfig = [["/404/index.html","09ccb8d251b6e68450ef394c752c7a57"],["/about/index.html","570532523b5f91f428507da9f27afd1a"],["/assets/css/main.css","b105a1706fbac97e7af4a8cb8dad26d3"],["/assets/img/favicon.jpg","ffb9f5c8afdda7fa4f3fd697e5147182"],["/assets/img/icons/android-chrome-192x192.png","4df4c8779d47bcaa69516050281773b9"],["/assets/img/icons/android-chrome-256x256.png","939ec88a61f407945a27d867fca1651d"],["/assets/img/icons/apple-touch-icon.png","366666899d15cf8f6811cc73ee0d63de"],["/assets/img/icons/favicon-16x16.png","f625044491b20a5df78571ba266cbcf6"],["/assets/img/icons/favicon-32x32.png","67502381e45848a4ab76123364675ffe"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/safari-pinned-tab.svg","398ef6b25c0f7f3f6e54c112a8facc5f"],["/assets/img/posts/cocobolo-pen-hannah-final.jpg","9d469985bc09b6fe1ea6b73e937fad4b"],["/assets/img/posts/cocobolo-pen-hannah-final_lg.jpg","b6bba67310f8554126569bd569b9bc97"],["/assets/img/posts/cocobolo-pen-hannah-final_md.jpg","84e27243dab12026be398734ec7404e5"],["/assets/img/posts/cocobolo-pen-hannah-final_placehold.jpg","c5022dd9d3b70da4b13455b038406ae7"],["/assets/img/posts/cocobolo-pen-hannah-final_sm.jpg","0cefbf6bfc348f314898dbc68d197791"],["/assets/img/posts/cocobolo-pen-hannah-final_thumb.jpg","e141e0d23566e918358c00a783b956d6"],["/assets/img/posts/cocobolo-pen-hannah-final_thumb@2x.jpg","5db7b2a91fddfc2ea82634e130bd7327"],["/assets/img/posts/cocobolo-pen-hannah-final_xs.jpg","c63a79ad5d554fb66369a9490f82b93c"],["/assets/img/posts/cocobolo-pens-final.jpg","7bb462e78bc5492b69783037c020cad0"],["/assets/img/posts/cocobolo-pens-final_lg.jpg","bc39ad81745afb5b05e8b7ea9dd72dca"],["/assets/img/posts/cocobolo-pens-final_md.jpg","6f73b1e7a6ae462a2e39cd87e29aa2d4"],["/assets/img/posts/cocobolo-pens-final_placehold.jpg","46b5060629a8a74d8161e3ef7961cc92"],["/assets/img/posts/cocobolo-pens-final_sm.jpg","f23a99f1431f132f0f329d37a20b3939"],["/assets/img/posts/cocobolo-pens-final_thumb.jpg","90638a311d79c0fc3b54dff14b07083c"],["/assets/img/posts/cocobolo-pens-final_thumb@2x.jpg","cd7c2cc896c5af06085ea0e932a876b8"],["/assets/img/posts/cocobolo-pens-final_xs.jpg","be8e103f4c3a018e225789aba1b4d5d3"],["/assets/img/posts/firewood-mushroom-final_md.jpg","b61e856f2c2d51a931adbecc21e69940"],["/assets/img/posts/firewood-mushroom-final_placehold.jpg","1e3a054de742bb1049180d909d9aa130"],["/assets/img/posts/firewood-mushroom-final_sm.jpg","b7fdf2a13d50cdf90e83d82143124d3d"],["/assets/img/posts/firewood-mushroom-final_thumb.jpg","66f3d5b8ac27d731ba2b9f9bd3e884e3"],["/assets/img/posts/firewood-mushroom-final_thumb@2x.jpg","8ab7bb175e6b70c27d105855da5e05c1"],["/assets/img/posts/firewood-mushroom-final_xs.jpg","61197522a408dbe7e997ab10b7cfa2a0"],["/assets/img/posts/first-cutting-board-final.jpg","0a8c63c195de123bf7748cef6c66ebd6"],["/assets/img/posts/first-cutting-board-final_lg.jpg","98329e84797a494d6f79f2edd7387dc8"],["/assets/img/posts/first-cutting-board-final_md.jpg","8ee7e00d61a29bc449236631b4bbbd66"],["/assets/img/posts/first-cutting-board-final_placehold.jpg","c9c4ca31ebadc981de3773a83a5be983"],["/assets/img/posts/first-cutting-board-final_sm.jpg","b9378eeb8cdc2baeec1597148fc1a4b7"],["/assets/img/posts/first-cutting-board-final_thumb.jpg","1a4e1005cbfe0912f5ac4099892a183c"],["/assets/img/posts/first-cutting-board-final_thumb@2x.jpg","89321ad2c8b5f46e8d1ed5a172d345a6"],["/assets/img/posts/first-cutting-board-final_xs.jpg","05a10d98ff36da4c89d240be0173927d"],["/assets/img/posts/oak-chopping-block-final-surface.jpg","08ae292f6893bca7edb5bb6893892457"],["/assets/img/posts/oak-chopping-block-final-surface_lg.jpg","737b3ed3d4fb05eac4c541a8bacbf7de"],["/assets/img/posts/oak-chopping-block-final-surface_md.jpg","23b79967d742a0957b8007bfa6b68d3b"],["/assets/img/posts/oak-chopping-block-final-surface_placehold.jpg","33cff1963886a4101f49f458e4be701a"],["/assets/img/posts/oak-chopping-block-final-surface_sm.jpg","78e487267de4deb02a74558a54142379"],["/assets/img/posts/oak-chopping-block-final-surface_thumb.jpg","aa1293ed0d8ea323690ffeaf70ce5695"],["/assets/img/posts/oak-chopping-block-final-surface_thumb@2x.jpg","54591d646b257cca5c8cc27fbb9313d4"],["/assets/img/posts/oak-chopping-block-final-surface_xs.jpg","69365165a093e0cddb42f07128b9b26e"],["/assets/img/posts/picture-ledge-shelf-final.jpg","989911013b7a627220e4390a022fae6c"],["/assets/img/posts/picture-ledge-shelf-final_lg.jpg","72c0a5a150b975fcfd78cf389a42c5b2"],["/assets/img/posts/picture-ledge-shelf-final_md.jpg","6af7b66f87b8348ffd0e14842bf83a20"],["/assets/img/posts/picture-ledge-shelf-final_placehold.jpg","903a9a2c0c82218f9d6e750bb116de07"],["/assets/img/posts/picture-ledge-shelf-final_sm.jpg","053e420be2e1eb74596e3863910c8ee2"],["/assets/img/posts/picture-ledge-shelf-final_thumb.jpg","91b83c2f0a324b47c024bdfb02b8e435"],["/assets/img/posts/picture-ledge-shelf-final_thumb@2x.jpg","0af1efa4d59f109163f681c6c7cb650c"],["/assets/img/posts/picture-ledge-shelf-final_xs.jpg","56111f7be41f2b1e8954d87e914d0160"],["/assets/img/posts/pocket-hole-cupboard-final.jpg","7ac78cea48aefb0f5dfa4a804b00fd10"],["/assets/img/posts/pocket-hole-cupboard-final_lg.jpg","23718ab2703376ec7f6e8ee3ce630dbd"],["/assets/img/posts/pocket-hole-cupboard-final_md.jpg","ec86475b2fb36ee773a7b612cb336072"],["/assets/img/posts/pocket-hole-cupboard-final_placehold.jpg","693fe652d7d49e40e2efc6e11e06a552"],["/assets/img/posts/pocket-hole-cupboard-final_sm.jpg","782f23ba582925b56c0da4edbfa9f507"],["/assets/img/posts/pocket-hole-cupboard-final_thumb.jpg","0432177634b72cd5284fc58ef15aceb4"],["/assets/img/posts/pocket-hole-cupboard-final_thumb@2x.jpg","cd6a17296b4a27473a8566022111e431"],["/assets/img/posts/pocket-hole-cupboard-final_xs.jpg","d55d7efea6f92e0fc1731a5e14a3d4ef"],["/assets/img/posts/suspended-oak-leaf.jpg","dc9fa8431eb29b321597562f3d332265"],["/assets/img/posts/suspended-oak-leaf_lg.jpg","76aa31f1dee0d22bca76bca7d8c79930"],["/assets/img/posts/suspended-oak-leaf_md.jpg","1065c742e164b2b2c80b453e202f25c1"],["/assets/img/posts/suspended-oak-leaf_placehold.jpg","65864b843f1c50371845a2ae033b5fab"],["/assets/img/posts/suspended-oak-leaf_sm.jpg","b3ba294f7dfdcb796dcbe6cc9018f5a4"],["/assets/img/posts/suspended-oak-leaf_thumb.jpg","7683708cf8b6a2060dc0b0b03af1f5d6"],["/assets/img/posts/suspended-oak-leaf_thumb@2x.jpg","65bfc4fc55bd7125665c4409608fff9f"],["/assets/img/posts/suspended-oak-leaf_xs.jpg","b1d7bb712bb5099915e900fe9b9e45ef"],["/assets/img/posts/walnut-pen-grandma-final.jpg","4317981cbb40154b8bedd245c05521c3"],["/assets/img/posts/walnut-pen-grandma-final_lg.jpg","823f9529338da7e9302c38b4b09f8275"],["/assets/img/posts/walnut-pen-grandma-final_md.jpg","15be8a54d000de49d8da3bac30264fc9"],["/assets/img/posts/walnut-pen-grandma-final_placehold.jpg","20cd2b584785c7a052d43fc6ddd7668f"],["/assets/img/posts/walnut-pen-grandma-final_sm.jpg","22d8eb622a89ddcf25b13efbcd80ada0"],["/assets/img/posts/walnut-pen-grandma-final_thumb.jpg","7086eaa963b21353cb21a43f91519b8e"],["/assets/img/posts/walnut-pen-grandma-final_thumb@2x.jpg","16563557f77ed1736f48d0ed88aa2ef3"],["/assets/img/posts/walnut-pen-grandma-final_xs.jpg","4c66c8ce7c9ab9e0adc41deb98c28370"],["/assets/img/suspended-oak-leaf.jpg","dc9fa8431eb29b321597562f3d332265"],["/assets/js/bundle.js","df854a763d7d3fd95381b95081eb822f"],["/categories/index.html","81374e28f93b3be8750ac78bfdbbe5b0"],["/cocobolo-pen-for-hannah/index.html","b0b3f0c50b1895e0f2f01de3fc468c7e"],["/cocobolo-pens/index.html","0cbe5e271a847bda3c4e5313aa12e870"],["/contact/index.html","320d587aae67ff9ea361f47205d03770"],["/first-cutting-board/index.html","954ac9d1d1e0a8fcae47d3e1ea2bc695"],["/index.html","2bfca01c8783d13115ce32a3e68b7dea"],["/oak-chopping-block-refurbish/index.html","087d9b4f58178e9b5660039468a0d772"],["/picture-ledge-shelf/index.html","a37a56b9994e41ebceebb38365e13aa7"],["/pocket-hole-cupboard/index.html","bbe87372403c56bdff6bb52184304fba"],["/sw.js","ec0062ffef3ba18bbca831eb1fe9bbd6"],["/turned-mushroom/index.html","beddc72e73e0c87a1557949e1a9b8061"],["/walnut-pen-for-grandma/index.html","48e21d91032d6190a7b28e7a656c150a"],["/woodworking-project-ideas/index.html","49ccae6850417ec1c7f03698678e9fdc"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
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

var createCacheKey = function (originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function (originalUrl,
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







