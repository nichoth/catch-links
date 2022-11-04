(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // index.js
  var require_catch_links = __commonJS({
    "index.js"(exports, module) {
      module.exports = function(root, cb) {
        root.addEventListener("click", function(ev) {
          if (ev.altKey || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.defaultPrevented) {
            return true;
          }
          var anchor = null;
          for (var n = ev.target; n.parentNode; n = n.parentNode) {
            if (n.nodeName === "A") {
              anchor = n;
              break;
            }
          }
          if (!anchor)
            return true;
          const url = new URL(anchor.getAttribute("href"), location.origin);
          if (url.host && url.host !== location.host)
            return true;
          ev.preventDefault();
          const urlPath = url.pathname + url.search;
          cb(resolve(location.pathname, urlPath || "") + (url.hash || ""));
          return false;
        });
      };
      function resolve(from, to) {
        const isRelative = to.charAt(0) !== "/";
        if (!isRelative)
          return to;
        return [location.pathname === "/" ? "/" : "", to].join("/");
      }
    }
  });
  require_catch_links();
})();
