'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ba06fee0a011321e5613f2eca881b67f",
".git/config": "110b87f3560b990b99df7dc2c83ed153",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b99caa678f01dc542bcc21d6ffe59b26",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "23e5818ec28c7858871ec7db895f0eb4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "79145bef2eea4d1de3d74750e0dfd085",
".git/logs/refs/heads/master": "79145bef2eea4d1de3d74750e0dfd085",
".git/logs/refs/remotes/shaheer2/main": "4101e5c9d3558fd3872926957bf86132",
".git/logs/refs/remotes/shaheer2/master": "84070bc455f99e04569db02f096eb211",
".git/objects/00/0d98e2cdc1e623009cbd0a52c4b55145dc6ef3": "9d43dae39946c87d22a9d142db06c1d2",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/01/eb599a2836ccd310e7dc43952023dbac26dc9f": "b5997d961fc86b91dc69d29dde235534",
".git/objects/03/202352eb6903eca9418038e64cc8f53bbce500": "fc45a9651de1319654497f7486ba3de4",
".git/objects/07/998979b1cd16f0a1687b8a684d8fa5e2abae33": "30fad25b754071e77766eb50d2601784",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/1e/97b4f980a20557077cdef6e79ddb8bca8fdfb9": "ddd273bf18ded90b357d15141ecc06ad",
".git/objects/2c/0e04354c257a9184cd53d7276d946bdf27c0d3": "36fae22e0b96f443cf673ab12a3fda7e",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/31/9c7e3714a51da1233709957eca6541bf4822bf": "cdf660c52e9c1532d4ccf62e0b7f21e5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/e32287d1893067f199d71c81c21f43d4425b11": "04198e9f6c73209377e7a39352f43cea",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/53/d808501040823d533ca4ab765ccad9b4b89f99": "86c04b05b715ae8e2fa6ac5c3865119e",
".git/objects/5b/dabd58b075ae602517b0d652219de927a0480e": "2e37743c8e3ff09520552473c1da49bc",
".git/objects/63/3510ae8f46ebe6d0395941b1461f37d2b8f8c0": "e12d5fb3fa6e5790e4c8af87bd278a0a",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/71/8d31e76e96fa4632b08c13364e123b8f762ca5": "b958645c9d134b0465974ab42a9eed59",
".git/objects/74/071f4ecc02832971ae2a5ca32be5a0dad16d36": "78d7cf3ff3bf38fc6b71613eb7e05e47",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/bbaa5583b0717e6855dc2ea9c7c52b2252f0b1": "c8d83db1eed64d09eef7bdda0e2a8420",
".git/objects/81/c0d8447fa3bf592f89007321a3ec09c1c25600": "8fcd5f1c711a439013259ea39b8e5330",
".git/objects/86/1e57857c9296be8f218473f69bda8d050b5553": "cda3cfeb7fba36ea322e2253e2715534",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/8f6561087c86536d055ede667f2fc223154efd": "c773232db3e4f82344ebf41381268577",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/c3ae4576ba9d80c7e1ba28b0dfa456c04aa6dd": "2e12513d75395b3a48cff0ea72d92137",
".git/objects/9c/2b7214dd86887551d56003213eef0b6908c851": "19a714534186c7007513065626e43e34",
".git/objects/9d/136e01d3417048c41910bc3d8d1b0f7aa13ad5": "b30f4548b9a594b15f74ea087e70ea45",
".git/objects/9e/ed6894a64312c024b20ee94b528960c4b863d9": "95899dfd5c409a710a6a8bc77117142f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/9e9cdec7390eb19b03e28a33e64357d7c6f0fd": "206927236a49201fcf217ea2432e5a90",
".git/objects/a4/f5555b8cbfb95ed85066919cd7d6e9247f739e": "1134879f661371cb466e54f4bc9bd7bc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b2/8efabde4de2b8802b459ff6d20caa9f883fe90": "45eac4bf9960d880d878b594896ec9aa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c7/4c86e43ad3dadd2225e07d7324176c5c6d0af6": "0531ce05703a5d9fdb2497be9d7702bc",
".git/objects/c9/0806db5695d2971bbdc3034aeacb066473def6": "16c3a6af18385aafb1999279ed2ab6d6",
".git/objects/cc/3d2174fc268c6e6ba633cc9247711b81d3839d": "36f3e0000db3b31c88436015cef74fb2",
".git/objects/d1/a05ea19c526c05d0b1451106f2f980e6d9993b": "469f14aba7c77a1332352729ac6f98a8",
".git/objects/d4/6f4c7e778371f43400f9151309099c454f83b8": "a0d3ea1dc6023daae16284bb5cc14ac9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/58c8130e9f85b0eccc2159ff3b6f2419be7244": "ce2288acdd92f4868ef62f695153c984",
".git/objects/de/ba61801d9c18cf565e5303d3e97441a6bb7d61": "578447ddc495103193e38ac35506b3fb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/03fea9f3305cdf2f173e9e3f53e749ad7194e0": "e79d1b3eab20ecf569a8bf66a0fd1001",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/2150205f2c8c51a923b4968593a522f94f6611": "a3f00248e4bdb8879259b0da8335cfd2",
".git/objects/ee/2cf1f77fbafa51824fc518abb7e811ffc6e363": "f94477557f8ba183ff0b9bfdf9801169",
".git/objects/fc/116e0082c8b20e45f2f02d059b2d20a3313f01": "a5d3e7fadae5d8fad51d6658299d185a",
".git/ORIG_HEAD": "c7029f4b2b55e9e13ac835f8a8d7ea0e",
".git/refs/heads/master": "c7029f4b2b55e9e13ac835f8a8d7ea0e",
".git/refs/remotes/shaheer2/main": "0781d22b8b656ce8b8610884d6735ea2",
".git/refs/remotes/shaheer2/master": "c7029f4b2b55e9e13ac835f8a8d7ea0e",
"assets/AssetManifest.json": "dd92d01b3a9d41256fe7b6344b19d0d8",
"assets/assets/20210604_204426.png": "c2c970f76cab295c89bd5bfe0931339a",
"assets/assets/501-961-document-icon.riv": "a323125b1df11de6a4c1b8791a73d034",
"assets/assets/byc_logo.png": "22dfb0c62e77419f92d3199bde300d8c",
"assets/assets/HindSiliguri-Regular.ttf": "a8d8f1d83c427fcc7a34593e92ecd093",
"assets/FontManifest.json": "29f1383fe8534a8993ba8cc25b8ef550",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a3bde124d8790164f513a31e177864e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "767df15f60a1a13eebc82ff4244e3224",
"/": "767df15f60a1a13eebc82ff4244e3224",
"main.dart.js": "5240e22af2175a407152869f56ab84bd",
"manifest.json": "5af947e03e3b9c67d99eafa3ba2e36d0",
"version.json": "d19bf6c60d8c35c18c166a664fc94605"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
