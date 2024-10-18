// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9IOHb":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "78fcd0ac8e9bd240";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1jwFz":[function(require,module,exports) {
var _countriesAndTimezones = require("countries-and-timezones");
const FIVE_PM = 17;
const tzs = (0, _countriesAndTimezones.getAllTimezones)();
const zones = document.getElementById("zones");
const utc = document.getElementById("utc");
if (zones && utc) {
    const now = new Date();
    const utcHours = now.getUTCHours();
    const minutes = `0${now.getUTCMinutes()}`.slice(-2);
    utc.textContent = `${utcHours}:${minutes}`;
    let offsetHours = [];
    // west of utc is BEHIND in time, negative. east of utc is AHEAD in time, positive
    if (utcHours === FIVE_PM) offsetHours = [
        0
    ];
    else offsetHours = [
        FIVE_PM - utcHours,
        -(24 + utcHours - FIVE_PM)
    ];
    Object.entries(tzs).forEach(([zone, details])=>{
        // floor should help include time zones that are not on the exact hour
        const target = Math.floor(details.dstOffset / 60);
        if (offsetHours.includes(target)) {
            const countries = (0, _countriesAndTimezones.getCountriesForTimezone)(zone).map((country)=>country.name);
            countries.forEach((country)=>{
                const li = document.createElement("li");
                li.textContent = `${country}, ${zone}, ${details.dstOffset / 60}`;
                zones.appendChild(li);
            });
        }
    });
}

},{"countries-and-timezones":"375sL"}],"375sL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>utils);
parcelHelpers.export(exports, "getAllCountries", ()=>getAllCountries);
parcelHelpers.export(exports, "getAllTimezones", ()=>getAllTimezones);
parcelHelpers.export(exports, "getCountriesForTimezone", ()=>getCountriesForTimezone);
parcelHelpers.export(exports, "getCountry", ()=>getCountry);
parcelHelpers.export(exports, "getCountryForTimezone", ()=>getCountryForTimezone);
parcelHelpers.export(exports, "getTimezone", ()=>getTimezone);
parcelHelpers.export(exports, "getTimezonesForCountry", ()=>getTimezonesForCountry);
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
        if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
            t && (r = t);
            var n = 0, F = function() {};
            return {
                s: F,
                n: function() {
                    return n >= r.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: r[n++]
                    };
                },
                e: function(r) {
                    throw r;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o, a = !0, u = !1;
    return {
        s: function() {
            t = t.call(r);
        },
        n: function() {
            var r = t.next();
            return a = r.done, r;
        },
        e: function(r) {
            u = !0, o = r;
        },
        f: function() {
            try {
                a || null == t.return || t.return();
            } finally{
                if (u) throw o;
            }
        }
    };
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}
var countries$1 = {
    AD: "Andorra",
    AE: "United Arab Emirates",
    AF: "Afghanistan",
    AG: "Antigua and Barbuda",
    AI: "Anguilla",
    AL: "Albania",
    AM: "Armenia",
    AO: "Angola",
    AQ: "Antarctica",
    AR: "Argentina",
    AS: "American Samoa",
    AT: "Austria",
    AU: "Australia",
    AW: "Aruba",
    AX: "\xc5land Islands",
    AZ: "Azerbaijan",
    BA: "Bosnia and Herzegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgium",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barth\xe9lemy",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivia",
    BQ: "Caribbean Netherlands",
    BR: "Brazil",
    BS: "Bahamas",
    BT: "Bhutan",
    BW: "Botswana",
    BY: "Belarus",
    BZ: "Belize",
    CA: "Canada",
    CC: "Cocos Islands",
    CD: "Democratic Republic of the Congo",
    CF: "Central African Republic",
    CG: "Republic of the Congo",
    CH: "Switzerland",
    CI: "Ivory Coast",
    CK: "Cook Islands",
    CL: "Chile",
    CM: "Cameroon",
    CN: "China",
    CO: "Colombia",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Cabo Verde",
    CW: "Cura\xe7ao",
    CX: "Christmas Island",
    CY: "Cyprus",
    CZ: "Czechia",
    DE: "Germany",
    DJ: "Djibouti",
    DK: "Denmark",
    DM: "Dominica",
    DO: "Dominican Republic",
    DZ: "Algeria",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egypt",
    EH: "Western Sahara",
    ER: "Eritrea",
    ES: "Spain",
    ET: "Ethiopia",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falkland Islands",
    FM: "Micronesia",
    FO: "Faroe Islands",
    FR: "France",
    GA: "Gabon",
    GB: "United Kingdom",
    GD: "Grenada",
    GE: "Georgia",
    GF: "French Guiana",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Greenland",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Equatorial Guinea",
    GR: "Greece",
    GS: "South Georgia and the South Sandwich Islands",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HK: "Hong Kong",
    HN: "Honduras",
    HR: "Croatia",
    HT: "Haiti",
    HU: "Hungary",
    ID: "Indonesia",
    IE: "Ireland",
    IL: "Israel",
    IM: "Isle of Man",
    IN: "India",
    IO: "British Indian Ocean Territory",
    IQ: "Iraq",
    IR: "Iran",
    IS: "Iceland",
    IT: "Italy",
    JE: "Jersey",
    JM: "Jamaica",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenya",
    KG: "Kyrgyzstan",
    KH: "Cambodia",
    KI: "Kiribati",
    KM: "Comoros",
    KN: "Saint Kitts and Nevis",
    KP: "North Korea",
    KR: "South Korea",
    KW: "Kuwait",
    KY: "Cayman Islands",
    KZ: "Kazakhstan",
    LA: "Laos",
    LB: "Lebanon",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Lithuania",
    LU: "Luxembourg",
    LV: "Latvia",
    LY: "Libya",
    MA: "Morocco",
    MC: "Monaco",
    MD: "Moldova",
    ME: "Montenegro",
    MF: "Saint Martin",
    MG: "Madagascar",
    MH: "Marshall Islands",
    MK: "North Macedonia",
    ML: "Mali",
    MM: "Myanmar",
    MN: "Mongolia",
    MO: "Macao",
    MP: "Northern Mariana Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldives",
    MW: "Malawi",
    MX: "Mexico",
    MY: "Malaysia",
    MZ: "Mozambique",
    NA: "Namibia",
    NC: "New Caledonia",
    NE: "Niger",
    NF: "Norfolk Island",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Netherlands",
    NO: "Norway",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "New Zealand",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "French Polynesia",
    PG: "Papua New Guinea",
    PH: "Philippines",
    PK: "Pakistan",
    PL: "Poland",
    PM: "Saint Pierre and Miquelon",
    PN: "Pitcairn",
    PR: "Puerto Rico",
    PS: "Palestine",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    RE: "R\xe9union",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russia",
    RW: "Rwanda",
    SA: "Saudi Arabia",
    SB: "Solomon Islands",
    SC: "Seychelles",
    SD: "Sudan",
    SE: "Sweden",
    SG: "Singapore",
    SH: "Saint Helena, Ascension and Tristan da Cunha",
    SI: "Slovenia",
    SJ: "Svalbard and Jan Mayen",
    SK: "Slovakia",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Suriname",
    SS: "South Sudan",
    ST: "Sao Tome and Principe",
    SV: "El Salvador",
    SX: "Sint Maarten",
    SY: "Syria",
    SZ: "Eswatini",
    TC: "Turks and Caicos Islands",
    TD: "Chad",
    TF: "French Southern Territories",
    TG: "Togo",
    TH: "Thailand",
    TJ: "Tajikistan",
    TK: "Tokelau",
    TL: "Timor-Leste",
    TM: "Turkmenistan",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "T\xfcrkiye",
    TT: "Trinidad and Tobago",
    TV: "Tuvalu",
    TW: "Taiwan",
    TZ: "Tanzania",
    UA: "Ukraine",
    UG: "Uganda",
    UM: "United States Minor Outlying Islands",
    US: "United States of America",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VA: "Holy See",
    VC: "Saint Vincent and the Grenadines",
    VE: "Venezuela",
    VG: "Virgin Islands (UK)",
    VI: "Virgin Islands (US)",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis and Futuna",
    WS: "Samoa",
    YE: "Yemen",
    YT: "Mayotte",
    ZA: "South Africa",
    ZM: "Zambia",
    ZW: "Zimbabwe"
};
var timezones$1 = {
    "Africa/Abidjan": {
        u: 0,
        c: [
            "CI",
            "BF",
            "GH",
            "GM",
            "GN",
            "IS",
            "ML",
            "MR",
            "SH",
            "SL",
            "SN",
            "TG"
        ]
    },
    "Africa/Accra": {
        a: "Africa/Abidjan",
        c: [
            "GH"
        ],
        r: 1
    },
    "Africa/Addis_Ababa": {
        a: "Africa/Nairobi",
        c: [
            "ET"
        ],
        r: 1
    },
    "Africa/Algiers": {
        u: 60,
        c: [
            "DZ"
        ]
    },
    "Africa/Asmara": {
        a: "Africa/Nairobi",
        c: [
            "ER"
        ],
        r: 1
    },
    "Africa/Asmera": {
        a: "Africa/Nairobi",
        c: [
            "ER"
        ],
        r: 1
    },
    "Africa/Bamako": {
        a: "Africa/Abidjan",
        c: [
            "ML"
        ],
        r: 1
    },
    "Africa/Bangui": {
        a: "Africa/Lagos",
        c: [
            "CF"
        ],
        r: 1
    },
    "Africa/Banjul": {
        a: "Africa/Abidjan",
        c: [
            "GM"
        ],
        r: 1
    },
    "Africa/Bissau": {
        u: 0,
        c: [
            "GW"
        ]
    },
    "Africa/Blantyre": {
        a: "Africa/Maputo",
        c: [
            "MW"
        ],
        r: 1
    },
    "Africa/Brazzaville": {
        a: "Africa/Lagos",
        c: [
            "CG"
        ],
        r: 1
    },
    "Africa/Bujumbura": {
        a: "Africa/Maputo",
        c: [
            "BI"
        ],
        r: 1
    },
    "Africa/Cairo": {
        u: 120,
        d: 180,
        c: [
            "EG"
        ]
    },
    "Africa/Casablanca": {
        u: 60,
        d: 0,
        c: [
            "MA"
        ]
    },
    "Africa/Ceuta": {
        u: 60,
        d: 120,
        c: [
            "ES"
        ]
    },
    "Africa/Conakry": {
        a: "Africa/Abidjan",
        c: [
            "GN"
        ],
        r: 1
    },
    "Africa/Dakar": {
        a: "Africa/Abidjan",
        c: [
            "SN"
        ],
        r: 1
    },
    "Africa/Dar_es_Salaam": {
        a: "Africa/Nairobi",
        c: [
            "TZ"
        ],
        r: 1
    },
    "Africa/Djibouti": {
        a: "Africa/Nairobi",
        c: [
            "DJ"
        ],
        r: 1
    },
    "Africa/Douala": {
        a: "Africa/Lagos",
        c: [
            "CM"
        ],
        r: 1
    },
    "Africa/El_Aaiun": {
        u: 60,
        d: 0,
        c: [
            "EH"
        ]
    },
    "Africa/Freetown": {
        a: "Africa/Abidjan",
        c: [
            "SL"
        ],
        r: 1
    },
    "Africa/Gaborone": {
        a: "Africa/Maputo",
        c: [
            "BW"
        ],
        r: 1
    },
    "Africa/Harare": {
        a: "Africa/Maputo",
        c: [
            "ZW"
        ],
        r: 1
    },
    "Africa/Johannesburg": {
        u: 120,
        c: [
            "ZA",
            "LS",
            "SZ"
        ]
    },
    "Africa/Juba": {
        u: 120,
        c: [
            "SS"
        ]
    },
    "Africa/Kampala": {
        a: "Africa/Nairobi",
        c: [
            "UG"
        ],
        r: 1
    },
    "Africa/Khartoum": {
        u: 120,
        c: [
            "SD"
        ]
    },
    "Africa/Kigali": {
        a: "Africa/Maputo",
        c: [
            "RW"
        ],
        r: 1
    },
    "Africa/Kinshasa": {
        a: "Africa/Lagos",
        c: [
            "CD"
        ],
        r: 1
    },
    "Africa/Lagos": {
        u: 60,
        c: [
            "NG",
            "AO",
            "BJ",
            "CD",
            "CF",
            "CG",
            "CM",
            "GA",
            "GQ",
            "NE"
        ]
    },
    "Africa/Libreville": {
        a: "Africa/Lagos",
        c: [
            "GA"
        ],
        r: 1
    },
    "Africa/Lome": {
        a: "Africa/Abidjan",
        c: [
            "TG"
        ],
        r: 1
    },
    "Africa/Luanda": {
        a: "Africa/Lagos",
        c: [
            "AO"
        ],
        r: 1
    },
    "Africa/Lubumbashi": {
        a: "Africa/Maputo",
        c: [
            "CD"
        ],
        r: 1
    },
    "Africa/Lusaka": {
        a: "Africa/Maputo",
        c: [
            "ZM"
        ],
        r: 1
    },
    "Africa/Malabo": {
        a: "Africa/Lagos",
        c: [
            "GQ"
        ],
        r: 1
    },
    "Africa/Maputo": {
        u: 120,
        c: [
            "MZ",
            "BI",
            "BW",
            "CD",
            "MW",
            "RW",
            "ZM",
            "ZW"
        ]
    },
    "Africa/Maseru": {
        a: "Africa/Johannesburg",
        c: [
            "LS"
        ],
        r: 1
    },
    "Africa/Mbabane": {
        a: "Africa/Johannesburg",
        c: [
            "SZ"
        ],
        r: 1
    },
    "Africa/Mogadishu": {
        a: "Africa/Nairobi",
        c: [
            "SO"
        ],
        r: 1
    },
    "Africa/Monrovia": {
        u: 0,
        c: [
            "LR"
        ]
    },
    "Africa/Nairobi": {
        u: 180,
        c: [
            "KE",
            "DJ",
            "ER",
            "ET",
            "KM",
            "MG",
            "SO",
            "TZ",
            "UG",
            "YT"
        ]
    },
    "Africa/Ndjamena": {
        u: 60,
        c: [
            "TD"
        ]
    },
    "Africa/Niamey": {
        a: "Africa/Lagos",
        c: [
            "NE"
        ],
        r: 1
    },
    "Africa/Nouakchott": {
        a: "Africa/Abidjan",
        c: [
            "MR"
        ],
        r: 1
    },
    "Africa/Ouagadougou": {
        a: "Africa/Abidjan",
        c: [
            "BF"
        ],
        r: 1
    },
    "Africa/Porto-Novo": {
        a: "Africa/Lagos",
        c: [
            "BJ"
        ],
        r: 1
    },
    "Africa/Sao_Tome": {
        u: 0,
        c: [
            "ST"
        ]
    },
    "Africa/Timbuktu": {
        a: "Africa/Abidjan",
        c: [
            "ML"
        ],
        r: 1
    },
    "Africa/Tripoli": {
        u: 120,
        c: [
            "LY"
        ]
    },
    "Africa/Tunis": {
        u: 60,
        c: [
            "TN"
        ]
    },
    "Africa/Windhoek": {
        u: 120,
        c: [
            "NA"
        ]
    },
    "America/Adak": {
        u: -600,
        d: -540,
        c: [
            "US"
        ]
    },
    "America/Anchorage": {
        u: -540,
        d: -480,
        c: [
            "US"
        ]
    },
    "America/Anguilla": {
        a: "America/Puerto_Rico",
        c: [
            "AI"
        ],
        r: 1
    },
    "America/Antigua": {
        a: "America/Puerto_Rico",
        c: [
            "AG"
        ],
        r: 1
    },
    "America/Araguaina": {
        u: -180,
        c: [
            "BR"
        ]
    },
    "America/Argentina/Buenos_Aires": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/Catamarca": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/ComodRivadavia": {
        a: "America/Argentina/Catamarca",
        r: 1
    },
    "America/Argentina/Cordoba": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/Jujuy": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/La_Rioja": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/Mendoza": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/Rio_Gallegos": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/Salta": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/San_Juan": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/San_Luis": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/Tucuman": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Argentina/Ushuaia": {
        u: -180,
        c: [
            "AR"
        ]
    },
    "America/Aruba": {
        a: "America/Puerto_Rico",
        c: [
            "AW"
        ],
        r: 1
    },
    "America/Asuncion": {
        u: -240,
        d: -180,
        c: [
            "PY"
        ]
    },
    "America/Atikokan": {
        a: "America/Panama",
        c: [
            "CA"
        ],
        r: 1
    },
    "America/Atka": {
        a: "America/Adak",
        r: 1
    },
    "America/Bahia": {
        u: -180,
        c: [
            "BR"
        ]
    },
    "America/Bahia_Banderas": {
        u: -360,
        c: [
            "MX"
        ]
    },
    "America/Barbados": {
        u: -240,
        c: [
            "BB"
        ]
    },
    "America/Belem": {
        u: -180,
        c: [
            "BR"
        ]
    },
    "America/Belize": {
        u: -360,
        c: [
            "BZ"
        ]
    },
    "America/Blanc-Sablon": {
        a: "America/Puerto_Rico",
        c: [
            "CA"
        ],
        r: 1
    },
    "America/Boa_Vista": {
        u: -240,
        c: [
            "BR"
        ]
    },
    "America/Bogota": {
        u: -300,
        c: [
            "CO"
        ]
    },
    "America/Boise": {
        u: -420,
        d: -360,
        c: [
            "US"
        ]
    },
    "America/Buenos_Aires": {
        a: "America/Argentina/Buenos_Aires",
        r: 1
    },
    "America/Cambridge_Bay": {
        u: -420,
        d: -360,
        c: [
            "CA"
        ]
    },
    "America/Campo_Grande": {
        u: -240,
        c: [
            "BR"
        ]
    },
    "America/Cancun": {
        u: -300,
        c: [
            "MX"
        ]
    },
    "America/Caracas": {
        u: -240,
        c: [
            "VE"
        ]
    },
    "America/Catamarca": {
        a: "America/Argentina/Catamarca",
        r: 1
    },
    "America/Cayenne": {
        u: -180,
        c: [
            "GF"
        ]
    },
    "America/Cayman": {
        a: "America/Panama",
        c: [
            "KY"
        ],
        r: 1
    },
    "America/Chicago": {
        u: -360,
        d: -300,
        c: [
            "US"
        ]
    },
    "America/Chihuahua": {
        u: -360,
        c: [
            "MX"
        ]
    },
    "America/Ciudad_Juarez": {
        u: -420,
        d: -360,
        c: [
            "MX"
        ]
    },
    "America/Coral_Harbour": {
        a: "America/Panama",
        c: [
            "CA"
        ],
        r: 1
    },
    "America/Cordoba": {
        a: "America/Argentina/Cordoba",
        r: 1
    },
    "America/Costa_Rica": {
        u: -360,
        c: [
            "CR"
        ]
    },
    "America/Creston": {
        a: "America/Phoenix",
        c: [
            "CA"
        ],
        r: 1
    },
    "America/Cuiaba": {
        u: -240,
        c: [
            "BR"
        ]
    },
    "America/Curacao": {
        a: "America/Puerto_Rico",
        c: [
            "CW"
        ],
        r: 1
    },
    "America/Danmarkshavn": {
        u: 0,
        c: [
            "GL"
        ]
    },
    "America/Dawson": {
        u: -420,
        c: [
            "CA"
        ]
    },
    "America/Dawson_Creek": {
        u: -420,
        c: [
            "CA"
        ]
    },
    "America/Denver": {
        u: -420,
        d: -360,
        c: [
            "US"
        ]
    },
    "America/Detroit": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Dominica": {
        a: "America/Puerto_Rico",
        c: [
            "DM"
        ],
        r: 1
    },
    "America/Edmonton": {
        u: -420,
        d: -360,
        c: [
            "CA"
        ]
    },
    "America/Eirunepe": {
        u: -300,
        c: [
            "BR"
        ]
    },
    "America/El_Salvador": {
        u: -360,
        c: [
            "SV"
        ]
    },
    "America/Ensenada": {
        a: "America/Tijuana",
        r: 1
    },
    "America/Fort_Nelson": {
        u: -420,
        c: [
            "CA"
        ]
    },
    "America/Fort_Wayne": {
        a: "America/Indiana/Indianapolis",
        r: 1
    },
    "America/Fortaleza": {
        u: -180,
        c: [
            "BR"
        ]
    },
    "America/Glace_Bay": {
        u: -240,
        d: -180,
        c: [
            "CA"
        ]
    },
    "America/Godthab": {
        a: "America/Nuuk",
        r: 1
    },
    "America/Goose_Bay": {
        u: -240,
        d: -180,
        c: [
            "CA"
        ]
    },
    "America/Grand_Turk": {
        u: -300,
        d: -240,
        c: [
            "TC"
        ]
    },
    "America/Grenada": {
        a: "America/Puerto_Rico",
        c: [
            "GD"
        ],
        r: 1
    },
    "America/Guadeloupe": {
        a: "America/Puerto_Rico",
        c: [
            "GP"
        ],
        r: 1
    },
    "America/Guatemala": {
        u: -360,
        c: [
            "GT"
        ]
    },
    "America/Guayaquil": {
        u: -300,
        c: [
            "EC"
        ]
    },
    "America/Guyana": {
        u: -240,
        c: [
            "GY"
        ]
    },
    "America/Halifax": {
        u: -240,
        d: -180,
        c: [
            "CA"
        ]
    },
    "America/Havana": {
        u: -300,
        d: -240,
        c: [
            "CU"
        ]
    },
    "America/Hermosillo": {
        u: -420,
        c: [
            "MX"
        ]
    },
    "America/Indiana/Indianapolis": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Indiana/Knox": {
        u: -360,
        d: -300,
        c: [
            "US"
        ]
    },
    "America/Indiana/Marengo": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Indiana/Petersburg": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Indiana/Tell_City": {
        u: -360,
        d: -300,
        c: [
            "US"
        ]
    },
    "America/Indiana/Vevay": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Indiana/Vincennes": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Indiana/Winamac": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Indianapolis": {
        a: "America/Indiana/Indianapolis",
        r: 1
    },
    "America/Inuvik": {
        u: -420,
        d: -360,
        c: [
            "CA"
        ]
    },
    "America/Iqaluit": {
        u: -300,
        d: -240,
        c: [
            "CA"
        ]
    },
    "America/Jamaica": {
        u: -300,
        c: [
            "JM"
        ]
    },
    "America/Jujuy": {
        a: "America/Argentina/Jujuy",
        r: 1
    },
    "America/Juneau": {
        u: -540,
        d: -480,
        c: [
            "US"
        ]
    },
    "America/Kentucky/Louisville": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Kentucky/Monticello": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Knox_IN": {
        a: "America/Indiana/Knox",
        r: 1
    },
    "America/Kralendijk": {
        a: "America/Puerto_Rico",
        c: [
            "BQ"
        ],
        r: 1
    },
    "America/La_Paz": {
        u: -240,
        c: [
            "BO"
        ]
    },
    "America/Lima": {
        u: -300,
        c: [
            "PE"
        ]
    },
    "America/Los_Angeles": {
        u: -480,
        d: -420,
        c: [
            "US"
        ]
    },
    "America/Louisville": {
        a: "America/Kentucky/Louisville",
        r: 1
    },
    "America/Lower_Princes": {
        a: "America/Puerto_Rico",
        c: [
            "SX"
        ],
        r: 1
    },
    "America/Maceio": {
        u: -180,
        c: [
            "BR"
        ]
    },
    "America/Managua": {
        u: -360,
        c: [
            "NI"
        ]
    },
    "America/Manaus": {
        u: -240,
        c: [
            "BR"
        ]
    },
    "America/Marigot": {
        a: "America/Puerto_Rico",
        c: [
            "MF"
        ],
        r: 1
    },
    "America/Martinique": {
        u: -240,
        c: [
            "MQ"
        ]
    },
    "America/Matamoros": {
        u: -360,
        d: -300,
        c: [
            "MX"
        ]
    },
    "America/Mazatlan": {
        u: -420,
        c: [
            "MX"
        ]
    },
    "America/Mendoza": {
        a: "America/Argentina/Mendoza",
        r: 1
    },
    "America/Menominee": {
        u: -360,
        d: -300,
        c: [
            "US"
        ]
    },
    "America/Merida": {
        u: -360,
        c: [
            "MX"
        ]
    },
    "America/Metlakatla": {
        u: -540,
        d: -480,
        c: [
            "US"
        ]
    },
    "America/Mexico_City": {
        u: -360,
        c: [
            "MX"
        ]
    },
    "America/Miquelon": {
        u: -180,
        d: -120,
        c: [
            "PM"
        ]
    },
    "America/Moncton": {
        u: -240,
        d: -180,
        c: [
            "CA"
        ]
    },
    "America/Monterrey": {
        u: -360,
        c: [
            "MX"
        ]
    },
    "America/Montevideo": {
        u: -180,
        c: [
            "UY"
        ]
    },
    "America/Montreal": {
        a: "America/Toronto",
        c: [
            "CA"
        ],
        r: 1
    },
    "America/Montserrat": {
        a: "America/Puerto_Rico",
        c: [
            "MS"
        ],
        r: 1
    },
    "America/Nassau": {
        a: "America/Toronto",
        c: [
            "BS"
        ],
        r: 1
    },
    "America/New_York": {
        u: -300,
        d: -240,
        c: [
            "US"
        ]
    },
    "America/Nipigon": {
        a: "America/Toronto",
        c: [
            "CA"
        ],
        r: 1
    },
    "America/Nome": {
        u: -540,
        d: -480,
        c: [
            "US"
        ]
    },
    "America/Noronha": {
        u: -120,
        c: [
            "BR"
        ]
    },
    "America/North_Dakota/Beulah": {
        u: -360,
        d: -300,
        c: [
            "US"
        ]
    },
    "America/North_Dakota/Center": {
        u: -360,
        d: -300,
        c: [
            "US"
        ]
    },
    "America/North_Dakota/New_Salem": {
        u: -360,
        d: -300,
        c: [
            "US"
        ]
    },
    "America/Nuuk": {
        u: -120,
        d: -60,
        c: [
            "GL"
        ]
    },
    "America/Ojinaga": {
        u: -360,
        d: -300,
        c: [
            "MX"
        ]
    },
    "America/Panama": {
        u: -300,
        c: [
            "PA",
            "CA",
            "KY"
        ]
    },
    "America/Pangnirtung": {
        a: "America/Iqaluit",
        r: 1
    },
    "America/Paramaribo": {
        u: -180,
        c: [
            "SR"
        ]
    },
    "America/Phoenix": {
        u: -420,
        c: [
            "US",
            "CA"
        ]
    },
    "America/Port-au-Prince": {
        u: -300,
        d: -240,
        c: [
            "HT"
        ]
    },
    "America/Port_of_Spain": {
        a: "America/Puerto_Rico",
        c: [
            "TT"
        ],
        r: 1
    },
    "America/Porto_Acre": {
        a: "America/Rio_Branco",
        r: 1
    },
    "America/Porto_Velho": {
        u: -240,
        c: [
            "BR"
        ]
    },
    "America/Puerto_Rico": {
        u: -240,
        c: [
            "PR",
            "AG",
            "CA",
            "AI",
            "AW",
            "BL",
            "BQ",
            "CW",
            "DM",
            "GD",
            "GP",
            "KN",
            "LC",
            "MF",
            "MS",
            "SX",
            "TT",
            "VC",
            "VG",
            "VI"
        ]
    },
    "America/Punta_Arenas": {
        u: -180,
        c: [
            "CL"
        ]
    },
    "America/Rainy_River": {
        a: "America/Winnipeg",
        r: 1
    },
    "America/Rankin_Inlet": {
        u: -360,
        d: -300,
        c: [
            "CA"
        ]
    },
    "America/Recife": {
        u: -180,
        c: [
            "BR"
        ]
    },
    "America/Regina": {
        u: -360,
        c: [
            "CA"
        ]
    },
    "America/Resolute": {
        u: -360,
        d: -300,
        c: [
            "CA"
        ]
    },
    "America/Rio_Branco": {
        u: -300,
        c: [
            "BR"
        ]
    },
    "America/Rosario": {
        a: "America/Argentina/Cordoba",
        r: 1
    },
    "America/Santa_Isabel": {
        a: "America/Tijuana",
        r: 1
    },
    "America/Santarem": {
        u: -180,
        c: [
            "BR"
        ]
    },
    "America/Santiago": {
        u: -240,
        d: -180,
        c: [
            "CL"
        ]
    },
    "America/Santo_Domingo": {
        u: -240,
        c: [
            "DO"
        ]
    },
    "America/Sao_Paulo": {
        u: -180,
        c: [
            "BR"
        ]
    },
    "America/Scoresbysund": {
        u: -120,
        d: -60,
        c: [
            "GL"
        ]
    },
    "America/Shiprock": {
        a: "America/Denver",
        r: 1
    },
    "America/Sitka": {
        u: -540,
        d: -480,
        c: [
            "US"
        ]
    },
    "America/St_Barthelemy": {
        a: "America/Puerto_Rico",
        c: [
            "BL"
        ],
        r: 1
    },
    "America/St_Johns": {
        u: -210,
        d: -150,
        c: [
            "CA"
        ]
    },
    "America/St_Kitts": {
        a: "America/Puerto_Rico",
        c: [
            "KN"
        ],
        r: 1
    },
    "America/St_Lucia": {
        a: "America/Puerto_Rico",
        c: [
            "LC"
        ],
        r: 1
    },
    "America/St_Thomas": {
        a: "America/Puerto_Rico",
        c: [
            "VI"
        ],
        r: 1
    },
    "America/St_Vincent": {
        a: "America/Puerto_Rico",
        c: [
            "VC"
        ],
        r: 1
    },
    "America/Swift_Current": {
        u: -360,
        c: [
            "CA"
        ]
    },
    "America/Tegucigalpa": {
        u: -360,
        c: [
            "HN"
        ]
    },
    "America/Thule": {
        u: -240,
        d: -180,
        c: [
            "GL"
        ]
    },
    "America/Thunder_Bay": {
        a: "America/Toronto",
        c: [
            "CA"
        ],
        r: 1
    },
    "America/Tijuana": {
        u: -480,
        d: -420,
        c: [
            "MX"
        ]
    },
    "America/Toronto": {
        u: -300,
        d: -240,
        c: [
            "CA",
            "BS"
        ]
    },
    "America/Tortola": {
        a: "America/Puerto_Rico",
        c: [
            "VG"
        ],
        r: 1
    },
    "America/Vancouver": {
        u: -480,
        d: -420,
        c: [
            "CA"
        ]
    },
    "America/Virgin": {
        a: "America/Puerto_Rico",
        c: [
            "VI"
        ],
        r: 1
    },
    "America/Whitehorse": {
        u: -420,
        c: [
            "CA"
        ]
    },
    "America/Winnipeg": {
        u: -360,
        d: -300,
        c: [
            "CA"
        ]
    },
    "America/Yakutat": {
        u: -540,
        d: -480,
        c: [
            "US"
        ]
    },
    "America/Yellowknife": {
        a: "America/Edmonton",
        r: 1
    },
    "Antarctica/Casey": {
        u: 480,
        c: [
            "AQ"
        ]
    },
    "Antarctica/Davis": {
        u: 420,
        c: [
            "AQ"
        ]
    },
    "Antarctica/DumontDUrville": {
        a: "Pacific/Port_Moresby",
        c: [
            "AQ"
        ],
        r: 1
    },
    "Antarctica/Macquarie": {
        u: 600,
        d: 660,
        c: [
            "AU"
        ]
    },
    "Antarctica/Mawson": {
        u: 300,
        c: [
            "AQ"
        ]
    },
    "Antarctica/McMurdo": {
        a: "Pacific/Auckland",
        c: [
            "AQ"
        ],
        r: 1
    },
    "Antarctica/Palmer": {
        u: -180,
        c: [
            "AQ"
        ]
    },
    "Antarctica/Rothera": {
        u: -180,
        c: [
            "AQ"
        ]
    },
    "Antarctica/South_Pole": {
        a: "Pacific/Auckland",
        c: [
            "AQ"
        ],
        r: 1
    },
    "Antarctica/Syowa": {
        a: "Asia/Riyadh",
        c: [
            "AQ"
        ],
        r: 1
    },
    "Antarctica/Troll": {
        u: 0,
        d: 120,
        c: [
            "AQ"
        ]
    },
    "Antarctica/Vostok": {
        u: 300,
        c: [
            "AQ"
        ]
    },
    "Arctic/Longyearbyen": {
        a: "Europe/Berlin",
        c: [
            "SJ"
        ],
        r: 1
    },
    "Asia/Aden": {
        a: "Asia/Riyadh",
        c: [
            "YE"
        ],
        r: 1
    },
    "Asia/Almaty": {
        u: 300,
        c: [
            "KZ"
        ]
    },
    "Asia/Amman": {
        u: 180,
        c: [
            "JO"
        ]
    },
    "Asia/Anadyr": {
        u: 720,
        c: [
            "RU"
        ]
    },
    "Asia/Aqtau": {
        u: 300,
        c: [
            "KZ"
        ]
    },
    "Asia/Aqtobe": {
        u: 300,
        c: [
            "KZ"
        ]
    },
    "Asia/Ashgabat": {
        u: 300,
        c: [
            "TM"
        ]
    },
    "Asia/Ashkhabad": {
        a: "Asia/Ashgabat",
        r: 1
    },
    "Asia/Atyrau": {
        u: 300,
        c: [
            "KZ"
        ]
    },
    "Asia/Baghdad": {
        u: 180,
        c: [
            "IQ"
        ]
    },
    "Asia/Bahrain": {
        a: "Asia/Qatar",
        c: [
            "BH"
        ],
        r: 1
    },
    "Asia/Baku": {
        u: 240,
        c: [
            "AZ"
        ]
    },
    "Asia/Bangkok": {
        u: 420,
        c: [
            "TH",
            "CX",
            "KH",
            "LA",
            "VN"
        ]
    },
    "Asia/Barnaul": {
        u: 420,
        c: [
            "RU"
        ]
    },
    "Asia/Beirut": {
        u: 120,
        d: 180,
        c: [
            "LB"
        ]
    },
    "Asia/Bishkek": {
        u: 360,
        c: [
            "KG"
        ]
    },
    "Asia/Brunei": {
        a: "Asia/Kuching",
        c: [
            "BN"
        ],
        r: 1
    },
    "Asia/Calcutta": {
        a: "Asia/Kolkata",
        r: 1
    },
    "Asia/Chita": {
        u: 540,
        c: [
            "RU"
        ]
    },
    "Asia/Choibalsan": {
        a: "Asia/Ulaanbaatar",
        r: 1
    },
    "Asia/Chongqing": {
        a: "Asia/Shanghai",
        r: 1
    },
    "Asia/Chungking": {
        a: "Asia/Shanghai",
        r: 1
    },
    "Asia/Colombo": {
        u: 330,
        c: [
            "LK"
        ]
    },
    "Asia/Dacca": {
        a: "Asia/Dhaka",
        r: 1
    },
    "Asia/Damascus": {
        u: 180,
        c: [
            "SY"
        ]
    },
    "Asia/Dhaka": {
        u: 360,
        c: [
            "BD"
        ]
    },
    "Asia/Dili": {
        u: 540,
        c: [
            "TL"
        ]
    },
    "Asia/Dubai": {
        u: 240,
        c: [
            "AE",
            "OM",
            "RE",
            "SC",
            "TF"
        ]
    },
    "Asia/Dushanbe": {
        u: 300,
        c: [
            "TJ"
        ]
    },
    "Asia/Famagusta": {
        u: 120,
        d: 180,
        c: [
            "CY"
        ]
    },
    "Asia/Gaza": {
        u: 120,
        d: 180,
        c: [
            "PS"
        ]
    },
    "Asia/Harbin": {
        a: "Asia/Shanghai",
        r: 1
    },
    "Asia/Hebron": {
        u: 120,
        d: 180,
        c: [
            "PS"
        ]
    },
    "Asia/Ho_Chi_Minh": {
        u: 420,
        c: [
            "VN"
        ]
    },
    "Asia/Hong_Kong": {
        u: 480,
        c: [
            "HK"
        ]
    },
    "Asia/Hovd": {
        u: 420,
        c: [
            "MN"
        ]
    },
    "Asia/Irkutsk": {
        u: 480,
        c: [
            "RU"
        ]
    },
    "Asia/Istanbul": {
        a: "Europe/Istanbul",
        r: 1
    },
    "Asia/Jakarta": {
        u: 420,
        c: [
            "ID"
        ]
    },
    "Asia/Jayapura": {
        u: 540,
        c: [
            "ID"
        ]
    },
    "Asia/Jerusalem": {
        u: 120,
        d: 180,
        c: [
            "IL"
        ]
    },
    "Asia/Kabul": {
        u: 270,
        c: [
            "AF"
        ]
    },
    "Asia/Kamchatka": {
        u: 720,
        c: [
            "RU"
        ]
    },
    "Asia/Karachi": {
        u: 300,
        c: [
            "PK"
        ]
    },
    "Asia/Kashgar": {
        a: "Asia/Urumqi",
        r: 1
    },
    "Asia/Kathmandu": {
        u: 345,
        c: [
            "NP"
        ]
    },
    "Asia/Katmandu": {
        a: "Asia/Kathmandu",
        r: 1
    },
    "Asia/Khandyga": {
        u: 540,
        c: [
            "RU"
        ]
    },
    "Asia/Kolkata": {
        u: 330,
        c: [
            "IN"
        ]
    },
    "Asia/Krasnoyarsk": {
        u: 420,
        c: [
            "RU"
        ]
    },
    "Asia/Kuala_Lumpur": {
        a: "Asia/Singapore",
        c: [
            "MY"
        ],
        r: 1
    },
    "Asia/Kuching": {
        u: 480,
        c: [
            "MY",
            "BN"
        ]
    },
    "Asia/Kuwait": {
        a: "Asia/Riyadh",
        c: [
            "KW"
        ],
        r: 1
    },
    "Asia/Macao": {
        a: "Asia/Macau",
        r: 1
    },
    "Asia/Macau": {
        u: 480,
        c: [
            "MO"
        ]
    },
    "Asia/Magadan": {
        u: 660,
        c: [
            "RU"
        ]
    },
    "Asia/Makassar": {
        u: 480,
        c: [
            "ID"
        ]
    },
    "Asia/Manila": {
        u: 480,
        c: [
            "PH"
        ]
    },
    "Asia/Muscat": {
        a: "Asia/Dubai",
        c: [
            "OM"
        ],
        r: 1
    },
    "Asia/Nicosia": {
        u: 120,
        d: 180,
        c: [
            "CY"
        ]
    },
    "Asia/Novokuznetsk": {
        u: 420,
        c: [
            "RU"
        ]
    },
    "Asia/Novosibirsk": {
        u: 420,
        c: [
            "RU"
        ]
    },
    "Asia/Omsk": {
        u: 360,
        c: [
            "RU"
        ]
    },
    "Asia/Oral": {
        u: 300,
        c: [
            "KZ"
        ]
    },
    "Asia/Phnom_Penh": {
        a: "Asia/Bangkok",
        c: [
            "KH"
        ],
        r: 1
    },
    "Asia/Pontianak": {
        u: 420,
        c: [
            "ID"
        ]
    },
    "Asia/Pyongyang": {
        u: 540,
        c: [
            "KP"
        ]
    },
    "Asia/Qatar": {
        u: 180,
        c: [
            "QA",
            "BH"
        ]
    },
    "Asia/Qostanay": {
        u: 300,
        c: [
            "KZ"
        ]
    },
    "Asia/Qyzylorda": {
        u: 300,
        c: [
            "KZ"
        ]
    },
    "Asia/Rangoon": {
        a: "Asia/Yangon",
        c: [
            "MM"
        ],
        r: 1
    },
    "Asia/Riyadh": {
        u: 180,
        c: [
            "SA",
            "AQ",
            "KW",
            "YE"
        ]
    },
    "Asia/Saigon": {
        a: "Asia/Ho_Chi_Minh",
        r: 1
    },
    "Asia/Sakhalin": {
        u: 660,
        c: [
            "RU"
        ]
    },
    "Asia/Samarkand": {
        u: 300,
        c: [
            "UZ"
        ]
    },
    "Asia/Seoul": {
        u: 540,
        c: [
            "KR"
        ]
    },
    "Asia/Shanghai": {
        u: 480,
        c: [
            "CN"
        ]
    },
    "Asia/Singapore": {
        u: 480,
        c: [
            "SG",
            "MY"
        ]
    },
    "Asia/Srednekolymsk": {
        u: 660,
        c: [
            "RU"
        ]
    },
    "Asia/Taipei": {
        u: 480,
        c: [
            "TW"
        ]
    },
    "Asia/Tashkent": {
        u: 300,
        c: [
            "UZ"
        ]
    },
    "Asia/Tbilisi": {
        u: 240,
        c: [
            "GE"
        ]
    },
    "Asia/Tehran": {
        u: 210,
        c: [
            "IR"
        ]
    },
    "Asia/Tel_Aviv": {
        a: "Asia/Jerusalem",
        r: 1
    },
    "Asia/Thimbu": {
        a: "Asia/Thimphu",
        r: 1
    },
    "Asia/Thimphu": {
        u: 360,
        c: [
            "BT"
        ]
    },
    "Asia/Tokyo": {
        u: 540,
        c: [
            "JP"
        ]
    },
    "Asia/Tomsk": {
        u: 420,
        c: [
            "RU"
        ]
    },
    "Asia/Ujung_Pandang": {
        a: "Asia/Makassar",
        r: 1
    },
    "Asia/Ulaanbaatar": {
        u: 480,
        c: [
            "MN"
        ]
    },
    "Asia/Ulan_Bator": {
        a: "Asia/Ulaanbaatar",
        r: 1
    },
    "Asia/Urumqi": {
        u: 360,
        c: [
            "CN"
        ]
    },
    "Asia/Ust-Nera": {
        u: 600,
        c: [
            "RU"
        ]
    },
    "Asia/Vientiane": {
        a: "Asia/Bangkok",
        c: [
            "LA"
        ],
        r: 1
    },
    "Asia/Vladivostok": {
        u: 600,
        c: [
            "RU"
        ]
    },
    "Asia/Yakutsk": {
        u: 540,
        c: [
            "RU"
        ]
    },
    "Asia/Yangon": {
        u: 390,
        c: [
            "MM",
            "CC"
        ]
    },
    "Asia/Yekaterinburg": {
        u: 300,
        c: [
            "RU"
        ]
    },
    "Asia/Yerevan": {
        u: 240,
        c: [
            "AM"
        ]
    },
    "Atlantic/Azores": {
        u: -60,
        d: 0,
        c: [
            "PT"
        ]
    },
    "Atlantic/Bermuda": {
        u: -240,
        d: -180,
        c: [
            "BM"
        ]
    },
    "Atlantic/Canary": {
        u: 0,
        d: 60,
        c: [
            "ES"
        ]
    },
    "Atlantic/Cape_Verde": {
        u: -60,
        c: [
            "CV"
        ]
    },
    "Atlantic/Faeroe": {
        a: "Atlantic/Faroe",
        r: 1
    },
    "Atlantic/Faroe": {
        u: 0,
        d: 60,
        c: [
            "FO"
        ]
    },
    "Atlantic/Jan_Mayen": {
        a: "Europe/Berlin",
        c: [
            "SJ"
        ],
        r: 1
    },
    "Atlantic/Madeira": {
        u: 0,
        d: 60,
        c: [
            "PT"
        ]
    },
    "Atlantic/Reykjavik": {
        a: "Africa/Abidjan",
        c: [
            "IS"
        ],
        r: 1
    },
    "Atlantic/South_Georgia": {
        u: -120,
        c: [
            "GS"
        ]
    },
    "Atlantic/St_Helena": {
        a: "Africa/Abidjan",
        c: [
            "SH"
        ],
        r: 1
    },
    "Atlantic/Stanley": {
        u: -180,
        c: [
            "FK"
        ]
    },
    "Australia/ACT": {
        a: "Australia/Sydney",
        r: 1
    },
    "Australia/Adelaide": {
        u: 570,
        d: 630,
        c: [
            "AU"
        ]
    },
    "Australia/Brisbane": {
        u: 600,
        c: [
            "AU"
        ]
    },
    "Australia/Broken_Hill": {
        u: 570,
        d: 630,
        c: [
            "AU"
        ]
    },
    "Australia/Canberra": {
        a: "Australia/Sydney",
        r: 1
    },
    "Australia/Currie": {
        a: "Australia/Hobart",
        r: 1
    },
    "Australia/Darwin": {
        u: 570,
        c: [
            "AU"
        ]
    },
    "Australia/Eucla": {
        u: 525,
        c: [
            "AU"
        ]
    },
    "Australia/Hobart": {
        u: 600,
        d: 660,
        c: [
            "AU"
        ]
    },
    "Australia/LHI": {
        a: "Australia/Lord_Howe",
        r: 1
    },
    "Australia/Lindeman": {
        u: 600,
        c: [
            "AU"
        ]
    },
    "Australia/Lord_Howe": {
        u: 630,
        d: 660,
        c: [
            "AU"
        ]
    },
    "Australia/Melbourne": {
        u: 600,
        d: 660,
        c: [
            "AU"
        ]
    },
    "Australia/NSW": {
        a: "Australia/Sydney",
        r: 1
    },
    "Australia/North": {
        a: "Australia/Darwin",
        r: 1
    },
    "Australia/Perth": {
        u: 480,
        c: [
            "AU"
        ]
    },
    "Australia/Queensland": {
        a: "Australia/Brisbane",
        r: 1
    },
    "Australia/South": {
        a: "Australia/Adelaide",
        r: 1
    },
    "Australia/Sydney": {
        u: 600,
        d: 660,
        c: [
            "AU"
        ]
    },
    "Australia/Tasmania": {
        a: "Australia/Hobart",
        r: 1
    },
    "Australia/Victoria": {
        a: "Australia/Melbourne",
        r: 1
    },
    "Australia/West": {
        a: "Australia/Perth",
        r: 1
    },
    "Australia/Yancowinna": {
        a: "Australia/Broken_Hill",
        r: 1
    },
    "Brazil/Acre": {
        a: "America/Rio_Branco",
        r: 1
    },
    "Brazil/DeNoronha": {
        a: "America/Noronha",
        r: 1
    },
    "Brazil/East": {
        a: "America/Sao_Paulo",
        r: 1
    },
    "Brazil/West": {
        a: "America/Manaus",
        r: 1
    },
    CET: {
        a: "Europe/Brussels",
        r: 1
    },
    CST6CDT: {
        a: "America/Chicago",
        r: 1
    },
    "Canada/Atlantic": {
        a: "America/Halifax",
        r: 1
    },
    "Canada/Central": {
        a: "America/Winnipeg",
        r: 1
    },
    "Canada/Eastern": {
        a: "America/Toronto",
        c: [
            "CA"
        ],
        r: 1
    },
    "Canada/Mountain": {
        a: "America/Edmonton",
        r: 1
    },
    "Canada/Newfoundland": {
        a: "America/St_Johns",
        r: 1
    },
    "Canada/Pacific": {
        a: "America/Vancouver",
        r: 1
    },
    "Canada/Saskatchewan": {
        a: "America/Regina",
        r: 1
    },
    "Canada/Yukon": {
        a: "America/Whitehorse",
        r: 1
    },
    "Chile/Continental": {
        a: "America/Santiago",
        r: 1
    },
    "Chile/EasterIsland": {
        a: "Pacific/Easter",
        r: 1
    },
    Cuba: {
        a: "America/Havana",
        r: 1
    },
    EET: {
        a: "Europe/Athens",
        r: 1
    },
    EST: {
        a: "America/Panama",
        r: 1
    },
    EST5EDT: {
        a: "America/New_York",
        r: 1
    },
    Egypt: {
        a: "Africa/Cairo",
        r: 1
    },
    Eire: {
        a: "Europe/Dublin",
        r: 1
    },
    "Etc/GMT": {
        u: 0
    },
    "Etc/GMT+0": {
        a: "Etc/GMT",
        r: 1
    },
    "Etc/GMT+1": {
        u: -60
    },
    "Etc/GMT+10": {
        u: -600
    },
    "Etc/GMT+11": {
        u: -660
    },
    "Etc/GMT+12": {
        u: -720
    },
    "Etc/GMT+2": {
        u: -120
    },
    "Etc/GMT+3": {
        u: -180
    },
    "Etc/GMT+4": {
        u: -240
    },
    "Etc/GMT+5": {
        u: -300
    },
    "Etc/GMT+6": {
        u: -360
    },
    "Etc/GMT+7": {
        u: -420
    },
    "Etc/GMT+8": {
        u: -480
    },
    "Etc/GMT+9": {
        u: -540
    },
    "Etc/GMT-0": {
        a: "Etc/GMT",
        r: 1
    },
    "Etc/GMT-1": {
        u: 60
    },
    "Etc/GMT-10": {
        u: 600
    },
    "Etc/GMT-11": {
        u: 660
    },
    "Etc/GMT-12": {
        u: 720
    },
    "Etc/GMT-13": {
        u: 780
    },
    "Etc/GMT-14": {
        u: 840
    },
    "Etc/GMT-2": {
        u: 120
    },
    "Etc/GMT-3": {
        u: 180
    },
    "Etc/GMT-4": {
        u: 240
    },
    "Etc/GMT-5": {
        u: 300
    },
    "Etc/GMT-6": {
        u: 360
    },
    "Etc/GMT-7": {
        u: 420
    },
    "Etc/GMT-8": {
        u: 480
    },
    "Etc/GMT-9": {
        u: 540
    },
    "Etc/GMT0": {
        a: "Etc/GMT",
        r: 1
    },
    "Etc/Greenwich": {
        a: "Etc/GMT",
        r: 1
    },
    "Etc/UCT": {
        a: "Etc/UTC",
        r: 1
    },
    "Etc/UTC": {
        u: 0
    },
    "Etc/Universal": {
        a: "Etc/UTC",
        r: 1
    },
    "Etc/Zulu": {
        a: "Etc/UTC",
        r: 1
    },
    "Europe/Amsterdam": {
        a: "Europe/Brussels",
        c: [
            "NL"
        ],
        r: 1
    },
    "Europe/Andorra": {
        u: 60,
        d: 120,
        c: [
            "AD"
        ]
    },
    "Europe/Astrakhan": {
        u: 240,
        c: [
            "RU"
        ]
    },
    "Europe/Athens": {
        u: 120,
        d: 180,
        c: [
            "GR"
        ]
    },
    "Europe/Belfast": {
        a: "Europe/London",
        c: [
            "GB"
        ],
        r: 1
    },
    "Europe/Belgrade": {
        u: 60,
        d: 120,
        c: [
            "RS",
            "BA",
            "HR",
            "ME",
            "MK",
            "SI"
        ]
    },
    "Europe/Berlin": {
        u: 60,
        d: 120,
        c: [
            "DE",
            "DK",
            "NO",
            "SE",
            "SJ"
        ]
    },
    "Europe/Bratislava": {
        a: "Europe/Prague",
        c: [
            "SK"
        ],
        r: 1
    },
    "Europe/Brussels": {
        u: 60,
        d: 120,
        c: [
            "BE",
            "LU",
            "NL"
        ]
    },
    "Europe/Bucharest": {
        u: 120,
        d: 180,
        c: [
            "RO"
        ]
    },
    "Europe/Budapest": {
        u: 60,
        d: 120,
        c: [
            "HU"
        ]
    },
    "Europe/Busingen": {
        a: "Europe/Zurich",
        c: [
            "DE"
        ],
        r: 1
    },
    "Europe/Chisinau": {
        u: 120,
        d: 180,
        c: [
            "MD"
        ]
    },
    "Europe/Copenhagen": {
        a: "Europe/Berlin",
        c: [
            "DK"
        ],
        r: 1
    },
    "Europe/Dublin": {
        u: 0,
        d: 60,
        c: [
            "IE"
        ]
    },
    "Europe/Gibraltar": {
        u: 60,
        d: 120,
        c: [
            "GI"
        ]
    },
    "Europe/Guernsey": {
        a: "Europe/London",
        c: [
            "GG"
        ],
        r: 1
    },
    "Europe/Helsinki": {
        u: 120,
        d: 180,
        c: [
            "FI",
            "AX"
        ]
    },
    "Europe/Isle_of_Man": {
        a: "Europe/London",
        c: [
            "IM"
        ],
        r: 1
    },
    "Europe/Istanbul": {
        u: 180,
        c: [
            "TR"
        ]
    },
    "Europe/Jersey": {
        a: "Europe/London",
        c: [
            "JE"
        ],
        r: 1
    },
    "Europe/Kaliningrad": {
        u: 120,
        c: [
            "RU"
        ]
    },
    "Europe/Kiev": {
        a: "Europe/Kyiv",
        r: 1
    },
    "Europe/Kirov": {
        u: 180,
        c: [
            "RU"
        ]
    },
    "Europe/Kyiv": {
        u: 120,
        d: 180,
        c: [
            "UA"
        ]
    },
    "Europe/Lisbon": {
        u: 0,
        d: 60,
        c: [
            "PT"
        ]
    },
    "Europe/Ljubljana": {
        a: "Europe/Belgrade",
        c: [
            "SI"
        ],
        r: 1
    },
    "Europe/London": {
        u: 0,
        d: 60,
        c: [
            "GB",
            "GG",
            "IM",
            "JE"
        ]
    },
    "Europe/Luxembourg": {
        a: "Europe/Brussels",
        c: [
            "LU"
        ],
        r: 1
    },
    "Europe/Madrid": {
        u: 60,
        d: 120,
        c: [
            "ES"
        ]
    },
    "Europe/Malta": {
        u: 60,
        d: 120,
        c: [
            "MT"
        ]
    },
    "Europe/Mariehamn": {
        a: "Europe/Helsinki",
        c: [
            "AX"
        ],
        r: 1
    },
    "Europe/Minsk": {
        u: 180,
        c: [
            "BY"
        ]
    },
    "Europe/Monaco": {
        a: "Europe/Paris",
        c: [
            "MC"
        ],
        r: 1
    },
    "Europe/Moscow": {
        u: 180,
        c: [
            "RU"
        ]
    },
    "Europe/Nicosia": {
        a: "Asia/Nicosia",
        r: 1
    },
    "Europe/Oslo": {
        a: "Europe/Berlin",
        c: [
            "NO"
        ],
        r: 1
    },
    "Europe/Paris": {
        u: 60,
        d: 120,
        c: [
            "FR",
            "MC"
        ]
    },
    "Europe/Podgorica": {
        a: "Europe/Belgrade",
        c: [
            "ME"
        ],
        r: 1
    },
    "Europe/Prague": {
        u: 60,
        d: 120,
        c: [
            "CZ",
            "SK"
        ]
    },
    "Europe/Riga": {
        u: 120,
        d: 180,
        c: [
            "LV"
        ]
    },
    "Europe/Rome": {
        u: 60,
        d: 120,
        c: [
            "IT",
            "SM",
            "VA"
        ]
    },
    "Europe/Samara": {
        u: 240,
        c: [
            "RU"
        ]
    },
    "Europe/San_Marino": {
        a: "Europe/Rome",
        c: [
            "SM"
        ],
        r: 1
    },
    "Europe/Sarajevo": {
        a: "Europe/Belgrade",
        c: [
            "BA"
        ],
        r: 1
    },
    "Europe/Saratov": {
        u: 240,
        c: [
            "RU"
        ]
    },
    "Europe/Simferopol": {
        u: 180,
        c: [
            "RU",
            "UA"
        ]
    },
    "Europe/Skopje": {
        a: "Europe/Belgrade",
        c: [
            "MK"
        ],
        r: 1
    },
    "Europe/Sofia": {
        u: 120,
        d: 180,
        c: [
            "BG"
        ]
    },
    "Europe/Stockholm": {
        a: "Europe/Berlin",
        c: [
            "SE"
        ],
        r: 1
    },
    "Europe/Tallinn": {
        u: 120,
        d: 180,
        c: [
            "EE"
        ]
    },
    "Europe/Tirane": {
        u: 60,
        d: 120,
        c: [
            "AL"
        ]
    },
    "Europe/Tiraspol": {
        a: "Europe/Chisinau",
        r: 1
    },
    "Europe/Ulyanovsk": {
        u: 240,
        c: [
            "RU"
        ]
    },
    "Europe/Uzhgorod": {
        a: "Europe/Kyiv",
        r: 1
    },
    "Europe/Vaduz": {
        a: "Europe/Zurich",
        c: [
            "LI"
        ],
        r: 1
    },
    "Europe/Vatican": {
        a: "Europe/Rome",
        c: [
            "VA"
        ],
        r: 1
    },
    "Europe/Vienna": {
        u: 60,
        d: 120,
        c: [
            "AT"
        ]
    },
    "Europe/Vilnius": {
        u: 120,
        d: 180,
        c: [
            "LT"
        ]
    },
    "Europe/Volgograd": {
        u: 180,
        c: [
            "RU"
        ]
    },
    "Europe/Warsaw": {
        u: 60,
        d: 120,
        c: [
            "PL"
        ]
    },
    "Europe/Zagreb": {
        a: "Europe/Belgrade",
        c: [
            "HR"
        ],
        r: 1
    },
    "Europe/Zaporozhye": {
        a: "Europe/Kyiv",
        r: 1
    },
    "Europe/Zurich": {
        u: 60,
        d: 120,
        c: [
            "CH",
            "DE",
            "LI"
        ]
    },
    Factory: {
        u: 0
    },
    GB: {
        a: "Europe/London",
        c: [
            "GB"
        ],
        r: 1
    },
    "GB-Eire": {
        a: "Europe/London",
        c: [
            "GB"
        ],
        r: 1
    },
    GMT: {
        a: "Etc/GMT",
        r: 1
    },
    "GMT+0": {
        a: "Etc/GMT",
        r: 1
    },
    "GMT-0": {
        a: "Etc/GMT",
        r: 1
    },
    GMT0: {
        a: "Etc/GMT",
        r: 1
    },
    Greenwich: {
        a: "Etc/GMT",
        r: 1
    },
    HST: {
        a: "Pacific/Honolulu",
        r: 1
    },
    Hongkong: {
        a: "Asia/Hong_Kong",
        r: 1
    },
    Iceland: {
        a: "Africa/Abidjan",
        c: [
            "IS"
        ],
        r: 1
    },
    "Indian/Antananarivo": {
        a: "Africa/Nairobi",
        c: [
            "MG"
        ],
        r: 1
    },
    "Indian/Chagos": {
        u: 360,
        c: [
            "IO"
        ]
    },
    "Indian/Christmas": {
        a: "Asia/Bangkok",
        c: [
            "CX"
        ],
        r: 1
    },
    "Indian/Cocos": {
        a: "Asia/Yangon",
        c: [
            "CC"
        ],
        r: 1
    },
    "Indian/Comoro": {
        a: "Africa/Nairobi",
        c: [
            "KM"
        ],
        r: 1
    },
    "Indian/Kerguelen": {
        a: "Indian/Maldives",
        c: [
            "TF"
        ],
        r: 1
    },
    "Indian/Mahe": {
        a: "Asia/Dubai",
        c: [
            "SC"
        ],
        r: 1
    },
    "Indian/Maldives": {
        u: 300,
        c: [
            "MV",
            "TF"
        ]
    },
    "Indian/Mauritius": {
        u: 240,
        c: [
            "MU"
        ]
    },
    "Indian/Mayotte": {
        a: "Africa/Nairobi",
        c: [
            "YT"
        ],
        r: 1
    },
    "Indian/Reunion": {
        a: "Asia/Dubai",
        c: [
            "RE"
        ],
        r: 1
    },
    Iran: {
        a: "Asia/Tehran",
        r: 1
    },
    Israel: {
        a: "Asia/Jerusalem",
        r: 1
    },
    Jamaica: {
        a: "America/Jamaica",
        r: 1
    },
    Japan: {
        a: "Asia/Tokyo",
        r: 1
    },
    Kwajalein: {
        a: "Pacific/Kwajalein",
        r: 1
    },
    Libya: {
        a: "Africa/Tripoli",
        r: 1
    },
    MET: {
        a: "Europe/Brussels",
        r: 1
    },
    MST: {
        a: "America/Phoenix",
        r: 1
    },
    MST7MDT: {
        a: "America/Denver",
        r: 1
    },
    "Mexico/BajaNorte": {
        a: "America/Tijuana",
        r: 1
    },
    "Mexico/BajaSur": {
        a: "America/Mazatlan",
        r: 1
    },
    "Mexico/General": {
        a: "America/Mexico_City",
        r: 1
    },
    NZ: {
        a: "Pacific/Auckland",
        c: [
            "NZ"
        ],
        r: 1
    },
    "NZ-CHAT": {
        a: "Pacific/Chatham",
        r: 1
    },
    Navajo: {
        a: "America/Denver",
        r: 1
    },
    PRC: {
        a: "Asia/Shanghai",
        r: 1
    },
    PST8PDT: {
        a: "America/Los_Angeles",
        r: 1
    },
    "Pacific/Apia": {
        u: 780,
        c: [
            "WS"
        ]
    },
    "Pacific/Auckland": {
        u: 720,
        d: 780,
        c: [
            "NZ",
            "AQ"
        ]
    },
    "Pacific/Bougainville": {
        u: 660,
        c: [
            "PG"
        ]
    },
    "Pacific/Chatham": {
        u: 765,
        d: 825,
        c: [
            "NZ"
        ]
    },
    "Pacific/Chuuk": {
        a: "Pacific/Port_Moresby",
        c: [
            "FM"
        ],
        r: 1
    },
    "Pacific/Easter": {
        u: -360,
        d: -300,
        c: [
            "CL"
        ]
    },
    "Pacific/Efate": {
        u: 660,
        c: [
            "VU"
        ]
    },
    "Pacific/Enderbury": {
        a: "Pacific/Kanton",
        r: 1
    },
    "Pacific/Fakaofo": {
        u: 780,
        c: [
            "TK"
        ]
    },
    "Pacific/Fiji": {
        u: 720,
        c: [
            "FJ"
        ]
    },
    "Pacific/Funafuti": {
        a: "Pacific/Tarawa",
        c: [
            "TV"
        ],
        r: 1
    },
    "Pacific/Galapagos": {
        u: -360,
        c: [
            "EC"
        ]
    },
    "Pacific/Gambier": {
        u: -540,
        c: [
            "PF"
        ]
    },
    "Pacific/Guadalcanal": {
        u: 660,
        c: [
            "SB",
            "FM"
        ]
    },
    "Pacific/Guam": {
        u: 600,
        c: [
            "GU",
            "MP"
        ]
    },
    "Pacific/Honolulu": {
        u: -600,
        c: [
            "US"
        ]
    },
    "Pacific/Johnston": {
        a: "Pacific/Honolulu",
        c: [
            "UM"
        ],
        r: 1
    },
    "Pacific/Kanton": {
        u: 780,
        c: [
            "KI"
        ]
    },
    "Pacific/Kiritimati": {
        u: 840,
        c: [
            "KI"
        ]
    },
    "Pacific/Kosrae": {
        u: 660,
        c: [
            "FM"
        ]
    },
    "Pacific/Kwajalein": {
        u: 720,
        c: [
            "MH"
        ]
    },
    "Pacific/Majuro": {
        a: "Pacific/Tarawa",
        c: [
            "MH"
        ],
        r: 1
    },
    "Pacific/Marquesas": {
        u: -570,
        c: [
            "PF"
        ]
    },
    "Pacific/Midway": {
        a: "Pacific/Pago_Pago",
        c: [
            "UM"
        ],
        r: 1
    },
    "Pacific/Nauru": {
        u: 720,
        c: [
            "NR"
        ]
    },
    "Pacific/Niue": {
        u: -660,
        c: [
            "NU"
        ]
    },
    "Pacific/Norfolk": {
        u: 660,
        d: 720,
        c: [
            "NF"
        ]
    },
    "Pacific/Noumea": {
        u: 660,
        c: [
            "NC"
        ]
    },
    "Pacific/Pago_Pago": {
        u: -660,
        c: [
            "AS",
            "UM"
        ]
    },
    "Pacific/Palau": {
        u: 540,
        c: [
            "PW"
        ]
    },
    "Pacific/Pitcairn": {
        u: -480,
        c: [
            "PN"
        ]
    },
    "Pacific/Pohnpei": {
        a: "Pacific/Guadalcanal",
        c: [
            "FM"
        ],
        r: 1
    },
    "Pacific/Ponape": {
        a: "Pacific/Guadalcanal",
        c: [
            "FM"
        ],
        r: 1
    },
    "Pacific/Port_Moresby": {
        u: 600,
        c: [
            "PG",
            "AQ",
            "FM"
        ]
    },
    "Pacific/Rarotonga": {
        u: -600,
        c: [
            "CK"
        ]
    },
    "Pacific/Saipan": {
        a: "Pacific/Guam",
        c: [
            "MP"
        ],
        r: 1
    },
    "Pacific/Samoa": {
        a: "Pacific/Pago_Pago",
        c: [
            "AS"
        ],
        r: 1
    },
    "Pacific/Tahiti": {
        u: -600,
        c: [
            "PF"
        ]
    },
    "Pacific/Tarawa": {
        u: 720,
        c: [
            "KI",
            "MH",
            "TV",
            "UM",
            "WF"
        ]
    },
    "Pacific/Tongatapu": {
        u: 780,
        c: [
            "TO"
        ]
    },
    "Pacific/Truk": {
        a: "Pacific/Port_Moresby",
        c: [
            "FM"
        ],
        r: 1
    },
    "Pacific/Wake": {
        a: "Pacific/Tarawa",
        c: [
            "UM"
        ],
        r: 1
    },
    "Pacific/Wallis": {
        a: "Pacific/Tarawa",
        c: [
            "WF"
        ],
        r: 1
    },
    "Pacific/Yap": {
        a: "Pacific/Port_Moresby",
        c: [
            "FM"
        ],
        r: 1
    },
    Poland: {
        a: "Europe/Warsaw",
        r: 1
    },
    Portugal: {
        a: "Europe/Lisbon",
        r: 1
    },
    ROC: {
        a: "Asia/Taipei",
        r: 1
    },
    ROK: {
        a: "Asia/Seoul",
        r: 1
    },
    Singapore: {
        a: "Asia/Singapore",
        c: [
            "SG"
        ],
        r: 1
    },
    Turkey: {
        a: "Europe/Istanbul",
        r: 1
    },
    UCT: {
        a: "Etc/UTC",
        r: 1
    },
    "US/Alaska": {
        a: "America/Anchorage",
        r: 1
    },
    "US/Aleutian": {
        a: "America/Adak",
        r: 1
    },
    "US/Arizona": {
        a: "America/Phoenix",
        c: [
            "US"
        ],
        r: 1
    },
    "US/Central": {
        a: "America/Chicago",
        r: 1
    },
    "US/East-Indiana": {
        a: "America/Indiana/Indianapolis",
        r: 1
    },
    "US/Eastern": {
        a: "America/New_York",
        r: 1
    },
    "US/Hawaii": {
        a: "Pacific/Honolulu",
        r: 1
    },
    "US/Indiana-Starke": {
        a: "America/Indiana/Knox",
        r: 1
    },
    "US/Michigan": {
        a: "America/Detroit",
        r: 1
    },
    "US/Mountain": {
        a: "America/Denver",
        r: 1
    },
    "US/Pacific": {
        a: "America/Los_Angeles",
        r: 1
    },
    "US/Samoa": {
        a: "Pacific/Pago_Pago",
        c: [
            "AS"
        ],
        r: 1
    },
    UTC: {
        a: "Etc/UTC",
        r: 1
    },
    Universal: {
        a: "Etc/UTC",
        r: 1
    },
    "W-SU": {
        a: "Europe/Moscow",
        r: 1
    },
    WET: {
        a: "Europe/Lisbon",
        r: 1
    },
    Zulu: {
        a: "Etc/UTC",
        r: 1
    }
};
var data = {
    countries: countries$1,
    timezones: timezones$1
};
var timezonesMap;
function buildCountry(data, id) {
    var name = data.countries[id];
    if (!name) return null;
    var tzMap = getTimezonesMap(data)[id] || {};
    return {
        id: id,
        name: name,
        timezones: tzMap.current || [],
        allTimezones: tzMap.all || []
    };
}
function getTimezonesMap(data) {
    timezonesMap || (timezonesMap = buildTimezonesMap(data));
    return timezonesMap;
}
function buildTimezonesMap(data) {
    return Object.keys(data.timezones).reduce(function(result, id) {
        var tz = data.timezones[id];
        var c = tz.c, a = tz.a;
        var aliasTz = data.timezones[a] || {};
        var countries = c || aliasTz.c;
        if (!countries) return result;
        var _iterator = _createForOfIteratorHelper(countries), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var country = _step.value;
                if (!result[country]) Object.assign(result, _defineProperty({}, country, {
                    current: [],
                    all: []
                }));
                if (tz.r === undefined) result[country].current.push(id);
                result[country].all.push(id);
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
        return result;
    }, {});
}
function buildTimezone(data, name) {
    var timezone = data.timezones[name];
    if (!timezone) return null;
    var _timezone$a = timezone.a, aliasOf = _timezone$a === void 0 ? null : _timezone$a;
    var aliasTz = aliasOf ? data.timezones[aliasOf] : {};
    var tz = _objectSpread2(_objectSpread2({}, aliasTz), data.timezones[name]);
    var countries = tz.c || [];
    var utcOffset = tz.u;
    var dstOffset = Number.isInteger(tz.d) ? tz.d : utcOffset;
    var result = {
        name: name,
        countries: countries,
        utcOffset: utcOffset,
        utcOffsetStr: getOffsetString(utcOffset),
        dstOffset: dstOffset,
        dstOffsetStr: getOffsetString(dstOffset),
        aliasOf: aliasOf
    };
    if (timezone.r) result.deprecated = true;
    return result;
}
function getOffsetString(offset) {
    var hours = Math.floor(Math.abs(offset) / 60);
    var min = offset % 60;
    var sign = offset < 0 ? "-" : "+";
    return "".concat(sign).concat(getNumberString(hours), ":").concat(getNumberString(min));
}
function getNumberString(input) {
    var number_ = Math.abs(input);
    var prefix = number_ < 10 ? "0" : "";
    return "".concat(prefix).concat(number_);
}
var _excluded = [
    "allTimezones"
];
var totalTimezones = Object.keys(data.timezones).length;
var countries = {};
var timezones = {};
var memoizedTimezones = 0;
function getAllCountries() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(data.countries).reduce(function(previous, id) {
        return Object.assign(previous, _defineProperty({}, id, getCountry(id, options)));
    }, {});
}
function getAllTimezones() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (totalTimezones !== memoizedTimezones) for(var _i = 0, _Object$keys = Object.keys(data.timezones); _i < _Object$keys.length; _i++){
        var name = _Object$keys[_i];
        getTimezone(name);
    }
    return deliverTimezones(timezones, options);
}
function getCountry(id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!countries[id]) memoizeCountry(buildCountry(data, id));
    return deliverCountry(countries[id], options);
}
function memoizeCountry(country) {
    if (!country) return;
    countries[country.id] = country;
}
function getTimezone(name) {
    if (!timezones[name]) memoizeTimezone(buildTimezone(data, name));
    return timezones[name] ? _objectSpread2({}, timezones[name]) : null;
}
function memoizeTimezone(timezone) {
    if (!timezone) return;
    timezones[timezone.name] = timezone;
    memoizedTimezones = Object.keys(timezone).length;
}
function getCountriesForTimezone(tzName) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var timezone = getTimezone(tzName) || {};
    var values = timezone.countries || [];
    return values.map(function(c) {
        return getCountry(c, options);
    });
}
function getCountryForTimezone(tzName) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _getCountriesForTimez = getCountriesForTimezone(tzName, options), _getCountriesForTimez2 = _slicedToArray(_getCountriesForTimez, 1), main = _getCountriesForTimez2[0];
    return main || null;
}
function getTimezonesForCountry(countryId) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var country = getCountry(countryId, options);
    if (!country) return null;
    var values = country.timezones || [];
    return values.map(function(timezone) {
        return getTimezone(timezone);
    });
}
function deliverTimezones(tzs, options) {
    var _ref = options || {}, deprecated = _ref.deprecated;
    if (deprecated === true) return tzs;
    return Object.keys(tzs).reduce(function(previous, key) {
        if (!tzs[key].deprecated) Object.assign(previous, _defineProperty({}, key, tzs[key]));
        return previous;
    }, {});
}
function deliverCountry(country, options) {
    if (!country) return null;
    var _ref2 = options || {}, deprecated = _ref2.deprecated;
    country.allTimezones;
    var other = _objectWithoutProperties(country, _excluded);
    var tz = deprecated ? country.allTimezones : country.timezones;
    return _objectSpread2(_objectSpread2({}, other), {}, {
        timezones: tz
    });
}
var utils = {
    getCountry: getCountry,
    getTimezone: getTimezone,
    getAllCountries: getAllCountries,
    getAllTimezones: getAllTimezones,
    getTimezonesForCountry: getTimezonesForCountry,
    getCountriesForTimezone: getCountriesForTimezone,
    getCountryForTimezone: getCountryForTimezone
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["9IOHb","1jwFz"], "1jwFz", "parcelRequire94c2")

//# sourceMappingURL=index.8e9bd240.js.map