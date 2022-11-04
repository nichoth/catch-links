var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/index.js
module.exports = CatchLinks;
function CatchLinks(root, cb) {
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
}
__name(CatchLinks, "CatchLinks");
CatchLinks.resolve = resolve;
function resolve(from, to) {
  const fromArr = from.split("/").map((path) => path.replaceAll("/", "")).filter(Boolean);
  const toArr = to.split("/").map((path) => path.replaceAll("/", ""));
  const isRelative = to.charAt(0) !== "/";
  if (!isRelative)
    return to;
  const str = fromArr.concat(toArr).join("/");
  return str.charAt(0) === "/" ? str : "/" + str;
}
__name(resolve, "resolve");
