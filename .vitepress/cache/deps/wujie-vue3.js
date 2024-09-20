import {
  defineComponent,
  h
} from "./chunk-CSRWY6EZ.js";
import {
  __commonJS,
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof3(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof3(o);
    }
    module.exports = _typeof3, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var require_regeneratorRuntime = __commonJS({
  "node_modules/@babel/runtime/helpers/regeneratorRuntime.js"(exports, module) {
    var _typeof3 = require_typeof()["default"];
    function _regeneratorRuntime6() {
      "use strict";
      module.exports = _regeneratorRuntime6 = function _regeneratorRuntime7() {
        return e;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
        t2[e2] = r2.value;
      }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
      function define(t2, e2, r2) {
        return Object.defineProperty(t2, e2, {
          value: r2,
          enumerable: true,
          configurable: true,
          writable: true
        }), t2[e2];
      }
      try {
        define({}, "");
      } catch (t2) {
        define = function define2(t3, e2, r2) {
          return t3[e2] = r2;
        };
      }
      function wrap(t2, e2, r2, n2) {
        var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
        return o(a2, "_invoke", {
          value: makeInvokeMethod(t2, r2, c2)
        }), a2;
      }
      function tryCatch(t2, e2, r2) {
        try {
          return {
            type: "normal",
            arg: t2.call(e2, r2)
          };
        } catch (t3) {
          return {
            type: "throw",
            arg: t3
          };
        }
      }
      e.wrap = wrap;
      var h2 = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var p = {};
      define(p, a, function() {
        return this;
      });
      var d = Object.getPrototypeOf, v = d && d(d(values([])));
      v && v !== r && n.call(v, a) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
      function defineIteratorMethods(t2) {
        ["next", "throw", "return"].forEach(function(e2) {
          define(t2, e2, function(t3) {
            return this._invoke(e2, t3);
          });
        });
      }
      function AsyncIterator(t2, e2) {
        function invoke(r3, o2, i2, a2) {
          var c2 = tryCatch(t2[r3], t2, o2);
          if ("throw" !== c2.type) {
            var u2 = c2.arg, h3 = u2.value;
            return h3 && "object" == _typeof3(h3) && n.call(h3, "__await") ? e2.resolve(h3.__await).then(function(t3) {
              invoke("next", t3, i2, a2);
            }, function(t3) {
              invoke("throw", t3, i2, a2);
            }) : e2.resolve(h3).then(function(t3) {
              u2.value = t3, i2(u2);
            }, function(t3) {
              return invoke("throw", t3, i2, a2);
            });
          }
          a2(c2.arg);
        }
        var r2;
        o(this, "_invoke", {
          value: function value(t3, n2) {
            function callInvokeWithMethodAndArg() {
              return new e2(function(e3, r3) {
                invoke(t3, n2, e3, r3);
              });
            }
            return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          }
        });
      }
      function makeInvokeMethod(e2, r2, n2) {
        var o2 = h2;
        return function(i2, a2) {
          if (o2 === f)
            throw Error("Generator is already running");
          if (o2 === s) {
            if ("throw" === i2)
              throw a2;
            return {
              value: t,
              done: true
            };
          }
          for (n2.method = i2, n2.arg = a2; ; ) {
            var c2 = n2.delegate;
            if (c2) {
              var u2 = maybeInvokeDelegate(c2, n2);
              if (u2) {
                if (u2 === y)
                  continue;
                return u2;
              }
            }
            if ("next" === n2.method)
              n2.sent = n2._sent = n2.arg;
            else if ("throw" === n2.method) {
              if (o2 === h2)
                throw o2 = s, n2.arg;
              n2.dispatchException(n2.arg);
            } else
              "return" === n2.method && n2.abrupt("return", n2.arg);
            o2 = f;
            var p2 = tryCatch(e2, r2, n2);
            if ("normal" === p2.type) {
              if (o2 = n2.done ? s : l, p2.arg === y)
                continue;
              return {
                value: p2.arg,
                done: n2.done
              };
            }
            "throw" === p2.type && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
          }
        };
      }
      function maybeInvokeDelegate(e2, r2) {
        var n2 = r2.method, o2 = e2.iterator[n2];
        if (o2 === t)
          return r2.delegate = null, "throw" === n2 && e2.iterator["return"] && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), "throw" === r2.method) || "return" !== n2 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
        var i2 = tryCatch(o2, e2.iterator, r2.arg);
        if ("throw" === i2.type)
          return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
        var a2 = i2.arg;
        return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
      }
      function pushTryEntry(t2) {
        var e2 = {
          tryLoc: t2[0]
        };
        1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
      }
      function resetTryEntry(t2) {
        var e2 = t2.completion || {};
        e2.type = "normal", delete e2.arg, t2.completion = e2;
      }
      function Context(t2) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t2.forEach(pushTryEntry, this), this.reset(true);
      }
      function values(e2) {
        if (e2 || "" === e2) {
          var r2 = e2[a];
          if (r2)
            return r2.call(e2);
          if ("function" == typeof e2.next)
            return e2;
          if (!isNaN(e2.length)) {
            var o2 = -1, i2 = function next() {
              for (; ++o2 < e2.length; )
                if (n.call(e2, o2))
                  return next.value = e2[o2], next.done = false, next;
              return next.value = t, next.done = true, next;
            };
            return i2.next = i2;
          }
        }
        throw new TypeError(_typeof3(e2) + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
      }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
      }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
        var e2 = "function" == typeof t2 && t2.constructor;
        return !!e2 && (e2 === GeneratorFunction || "GeneratorFunction" === (e2.displayName || e2.name));
      }, e.mark = function(t2) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
      }, e.awrap = function(t2) {
        return {
          __await: t2
        };
      }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
        void 0 === i2 && (i2 = Promise);
        var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
        return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
          return t3.done ? t3.value : a2.next();
        });
      }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
      }), define(g, "toString", function() {
        return "[object Generator]";
      }), e.keys = function(t2) {
        var e2 = Object(t2), r2 = [];
        for (var n2 in e2)
          r2.push(n2);
        return r2.reverse(), function next() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return next.value = t3, next.done = false, next;
          }
          return next.done = true, next;
        };
      }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e2) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
            for (var r2 in this)
              "t" === r2.charAt(0) && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
        },
        stop: function stop() {
          this.done = true;
          var t2 = this.tryEntries[0].completion;
          if ("throw" === t2.type)
            throw t2.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(e2) {
          if (this.done)
            throw e2;
          var r2 = this;
          function handle(n2, o3) {
            return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
          }
          for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
            var i2 = this.tryEntries[o2], a2 = i2.completion;
            if ("root" === i2.tryLoc)
              return handle("end");
            if (i2.tryLoc <= this.prev) {
              var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
              if (c2 && u2) {
                if (this.prev < i2.catchLoc)
                  return handle(i2.catchLoc, true);
                if (this.prev < i2.finallyLoc)
                  return handle(i2.finallyLoc);
              } else if (c2) {
                if (this.prev < i2.catchLoc)
                  return handle(i2.catchLoc, true);
              } else {
                if (!u2)
                  throw Error("try statement without catch or finally");
                if (this.prev < i2.finallyLoc)
                  return handle(i2.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(t2, e2) {
          for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
            var o2 = this.tryEntries[r2];
            if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
              var i2 = o2;
              break;
            }
          }
          i2 && ("break" === t2 || "continue" === t2) && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
          var a2 = i2 ? i2.completion : {};
          return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
        },
        complete: function complete(t2, e2) {
          if ("throw" === t2.type)
            throw t2.arg;
          return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e2 && (this.next = e2), y;
        },
        finish: function finish(t2) {
          for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
            var r2 = this.tryEntries[e2];
            if (r2.finallyLoc === t2)
              return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
          }
        },
        "catch": function _catch(t2) {
          for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
            var r2 = this.tryEntries[e2];
            if (r2.tryLoc === t2) {
              var n2 = r2.completion;
              if ("throw" === n2.type) {
                var o2 = n2.arg;
                resetTryEntry(r2);
              }
              return o2;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e2, r2, n2) {
          return this.delegate = {
            iterator: values(e2),
            resultName: r2,
            nextLoc: n2
          }, "next" === this.method && (this.arg = t), y;
        }
      }, e;
    }
    module.exports = _regeneratorRuntime6, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/regenerator/index.js
var require_regenerator = __commonJS({
  "node_modules/@babel/runtime/regenerator/index.js"(exports, module) {
    var runtime = require_regeneratorRuntime()();
    module.exports = runtime;
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  }
});

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}

// node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}

// node_modules/wujie/esm/index.js
var import_regenerator4 = __toESM(require_regenerator());

// node_modules/wujie/esm/entry.js
var import_regenerator = __toESM(require_regenerator());

// node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r))
    return r;
}

// node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++)
    n[e] = r[e];
  return n;
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r)
      return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

// node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

// node_modules/wujie/esm/constant.js
var WUJIE_APP_ID = "data-wujie-id";
var WUJIE_SCRIPT_ID = "data-wujie-script-id";
var WUJIE_DATA_FLAG = "data-wujie-Flag";
var CONTAINER_POSITION_DATA_FLAG = "data-container-position-flag";
var CONTAINER_OVERFLOW_DATA_FLAG = "data-container-overflow-flag";
var LOADING_DATA_FLAG = "data-loading-flag";
var WUJIE_DATA_ATTACH_CSS_FLAG = "data-wujie-attach-css-flag";
var WUJIE_IFRAME_CLASS = "wujie_iframe";
var WUJIE_ALL_EVENT = "_wujie_all_event";
var WUJIE_SHADE_STYLE = "position: fixed; z-index: 2147483647; visibility: hidden; inset: 0px; backface-visibility: hidden;";
var WUJIE_LOADING_STYLE = "position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; z-index:1;";
var WUJIE_LOADING_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="30px" viewBox="0 0 24 30">\n<rect x="0" y="13" width="4" height="5" fill="#909090">\n  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>\n  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>\n</rect>\n<rect x="10" y="13" width="4" height="5" fill="#909090">\n  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>\n  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>\n</rect>\n<rect x="20" y="13" width="4" height="5" fill="#909090">\n  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>\n  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>\n</rect>\n</svg>';
var WUJIE_TIPS_NO_URL = "url参数为空";
var WUJIE_TIPS_RELOAD_DISABLED = "子应用调用reload无法生效";
var WUJIE_TIPS_STOP_APP = "此报错可以忽略，iframe主动中断主应用代码在子应用运行";
var WUJIE_TIPS_STOP_APP_DETAIL = WUJIE_TIPS_STOP_APP + "，详见：https://github.com/Tencent/wujie/issues/54";
var WUJIE_TIPS_NO_SUBJECT = "事件订阅数量为空";
var WUJIE_TIPS_NO_FETCH = "window上不存在fetch属性，需要自行polyfill";
var WUJIE_TIPS_NOT_SUPPORTED = "当前浏览器不支持无界，子应用将采用iframe方式渲染";
var WUJIE_TIPS_SCRIPT_ERROR_REQUESTED = "脚本请求出现错误";
var WUJIE_TIPS_CSS_ERROR_REQUESTED = "样式请求出现错误";
var WUJIE_TIPS_HTML_ERROR_REQUESTED = "html请求出现错误";
var WUJIE_TIPS_REPEAT_RENDER = "无界组件短时间重复渲染了两次，可能存在性能问题请检查代码";
var WUJIE_TIPS_NO_SCRIPT = "目标Script尚未准备好或已经被移除";
var WUJIE_TIPS_GET_ELEMENT_BY_ID = "不支持document.getElementById()传入特殊字符，请参考document.querySelector文档";

// node_modules/wujie/esm/utils.js
function isFunction(value) {
  return typeof value === "function";
}
function isHijackingTag(tagName) {
  return (tagName === null || tagName === void 0 ? void 0 : tagName.toUpperCase()) === "LINK" || (tagName === null || tagName === void 0 ? void 0 : tagName.toUpperCase()) === "STYLE" || (tagName === null || tagName === void 0 ? void 0 : tagName.toUpperCase()) === "SCRIPT" || (tagName === null || tagName === void 0 ? void 0 : tagName.toUpperCase()) === "IFRAME";
}
var wujieSupport = window.Proxy && window.CustomElementRegistry;
var naughtySafari = typeof document.all === "function" && typeof document.all === "undefined";
var callableFnCacheMap = /* @__PURE__ */ new WeakMap();
var isCallable = function isCallable2(fn) {
  if (callableFnCacheMap.has(fn)) {
    return true;
  }
  var callable = naughtySafari ? typeof fn === "function" && typeof fn !== "undefined" : typeof fn === "function";
  if (callable) {
    callableFnCacheMap.set(fn, callable);
  }
  return callable;
};
var boundedMap = /* @__PURE__ */ new WeakMap();
function isBoundedFunction(fn) {
  if (boundedMap.has(fn)) {
    return boundedMap.get(fn);
  }
  var bounded = fn.name.indexOf("bound ") === 0 && !fn.hasOwnProperty("prototype");
  boundedMap.set(fn, bounded);
  return bounded;
}
var fnRegexCheckCacheMap = /* @__PURE__ */ new WeakMap();
function isConstructable(fn) {
  var hasPrototypeMethods = fn.prototype && fn.prototype.constructor === fn && Object.getOwnPropertyNames(fn.prototype).length > 1;
  if (hasPrototypeMethods)
    return true;
  if (fnRegexCheckCacheMap.has(fn)) {
    return fnRegexCheckCacheMap.get(fn);
  }
  var constructable = hasPrototypeMethods;
  if (!constructable) {
    var fnString = fn.toString();
    var constructableFunctionRegex = /^function\b\s[A-Z].*/;
    var classRegex = /^class\b/;
    constructable = constructableFunctionRegex.test(fnString) || classRegex.test(fnString);
  }
  fnRegexCheckCacheMap.set(fn, constructable);
  return constructable;
}
var setFnCacheMap = /* @__PURE__ */ new WeakMap();
function checkProxyFunction(value) {
  if (isCallable(value) && !isBoundedFunction(value) && !isConstructable(value)) {
    if (!setFnCacheMap.has(value)) {
      setFnCacheMap.set(value, value);
    }
  }
}
function getTargetValue(target, p) {
  var value = target[p];
  if (setFnCacheMap.has(value)) {
    return setFnCacheMap.get(value);
  }
  if (isCallable(value) && !isBoundedFunction(value) && !isConstructable(value)) {
    var boundValue = Function.prototype.bind.call(value, target);
    setFnCacheMap.set(value, boundValue);
    for (var _key in value) {
      boundValue[_key] = value[_key];
    }
    if (value.hasOwnProperty("prototype") && !boundValue.hasOwnProperty("prototype")) {
      Object.defineProperty(boundValue, "prototype", {
        value: value.prototype,
        enumerable: false,
        writable: true
      });
    }
    return boundValue;
  }
  return value;
}
function getDegradeIframe(id) {
  return window.document.querySelector("iframe[".concat(WUJIE_APP_ID, '="').concat(id, '"]'));
}
function setAttrsToElement(element, attrs) {
  Object.keys(attrs).forEach(function(name) {
    element.setAttribute(name, attrs[name]);
  });
}
function appRouteParse(url) {
  if (!url) {
    error(WUJIE_TIPS_NO_URL);
    throw new Error();
  }
  var urlElement = anchorElementGenerator(url);
  var appHostPath = urlElement.protocol + "//" + urlElement.host;
  var appRoutePath = urlElement.pathname + urlElement.search + urlElement.hash;
  if (!appRoutePath.startsWith("/"))
    appRoutePath = "/" + appRoutePath;
  return {
    urlElement,
    appHostPath,
    appRoutePath
  };
}
function anchorElementGenerator(url) {
  var element = window.document.createElement("a");
  element.href = url;
  element.href = element.href;
  return element;
}
function getAnchorElementQueryMap(anchorElement) {
  var queryList = anchorElement.search.replace("?", "").split("&");
  var queryMap = {};
  queryList.forEach(function(query) {
    var _query$split = query.split("="), _query$split2 = _slicedToArray(_query$split, 2), key = _query$split2[0], value = _query$split2[1];
    if (key && value)
      queryMap[key] = value;
  });
  return queryMap;
}
function isMatchSyncQueryById(id) {
  var queryMap = getAnchorElementQueryMap(anchorElementGenerator(window.location.href));
  return Object.keys(queryMap).includes(id);
}
function fixElementCtrSrcOrHref(iframeWindow, elementCtr, attr) {
  var rawElementSetAttribute = iframeWindow.Element.prototype.setAttribute;
  elementCtr.prototype.setAttribute = function(name, value) {
    var targetValue = value;
    if (name === attr)
      targetValue = getAbsolutePath(value, this.baseURI || "", true);
    rawElementSetAttribute.call(this, name, targetValue);
  };
  var rawAnchorElementHrefDescriptor = Object.getOwnPropertyDescriptor(elementCtr.prototype, attr);
  var enumerable = rawAnchorElementHrefDescriptor.enumerable, configurable = rawAnchorElementHrefDescriptor.configurable, _get = rawAnchorElementHrefDescriptor.get, _set = rawAnchorElementHrefDescriptor.set;
  Object.defineProperty(elementCtr.prototype, attr, {
    enumerable,
    configurable,
    get: function get() {
      return _get.call(this);
    },
    set: function set(href) {
      _set.call(this, getAbsolutePath(href, this.baseURI, true));
    }
  });
}
function getCurUrl(proxyLocation) {
  var location2 = proxyLocation;
  return location2.protocol + "//" + location2.host + location2.pathname;
}
function getAbsolutePath(url, base, hash) {
  try {
    if (url) {
      if (hash && url.startsWith("#"))
        return url;
      return new URL(url, base).href;
    } else
      return url;
  } catch (_unused) {
    return url;
  }
}
function getSyncUrl(id, prefix) {
  var _syncUrl$match;
  var winUrlElement = anchorElementGenerator(window.location.href);
  var queryMap = getAnchorElementQueryMap(winUrlElement);
  winUrlElement = null;
  var syncUrl = window.decodeURIComponent(queryMap[id] || "");
  var validShortPath = (_syncUrl$match = syncUrl.match(/^{([^}]*)}/)) === null || _syncUrl$match === void 0 ? void 0 : _syncUrl$match[1];
  if (prefix && validShortPath) {
    return syncUrl.replace("{".concat(validShortPath, "}"), prefix[validShortPath]);
  }
  return syncUrl;
}
var requestIdleCallback = window.requestIdleCallback || function(cb) {
  return setTimeout(cb, 1);
};
function getContainer(container) {
  return typeof container === "string" ? document.querySelector(container) : container;
}
function warn(msg, data2) {
  var _console;
  (_console = console) === null || _console === void 0 || _console.warn("[wujie warn]: ".concat(msg), data2);
}
function error(msg, data2) {
  var _console2;
  (_console2 = console) === null || _console2 === void 0 || _console2.error("[wujie error]: ".concat(msg), data2);
}
function getInlineCode(match) {
  var start = match.indexOf(">") + 1;
  var end = match.lastIndexOf("<");
  return match.substring(start, end);
}
function defaultGetPublicPath(entry) {
  if (_typeof(entry) === "object") {
    return "/";
  }
  try {
    var _URL = new URL(entry, location.href), origin = _URL.origin, pathname = _URL.pathname;
    var paths = pathname.split("/");
    paths.pop();
    return "".concat(origin).concat(paths.join("/"), "/");
  } catch (e) {
    console.warn(e);
    return "";
  }
}
function compose(fnList) {
  return function(code) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return fnList.reduce(function(newCode, fn) {
      return isFunction(fn) ? fn.apply(void 0, [newCode].concat(args)) : newCode;
    }, code || "");
  };
}
function nextTick(cb) {
  Promise.resolve().then(cb);
}
function execHooks(plugins, hookName) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key3 = 2; _key3 < _len2; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }
  try {
    if (plugins && plugins.length > 0) {
      plugins.map(function(plugin) {
        return plugin[hookName];
      }).filter(function(hook) {
        return isFunction(hook);
      }).forEach(function(hook) {
        return hook.apply(void 0, args);
      });
    }
  } catch (e) {
    error(e);
  }
}
function isScriptElement(element) {
  var _element$tagName;
  return ((_element$tagName = element.tagName) === null || _element$tagName === void 0 ? void 0 : _element$tagName.toUpperCase()) === "SCRIPT";
}
var count = 1;
function setTagToScript(element, tag) {
  if (isScriptElement(element)) {
    var scriptTag = tag || String(count++);
    element.setAttribute(WUJIE_SCRIPT_ID, scriptTag);
  }
}
function getTagFromScript(element) {
  if (isScriptElement(element)) {
    return element.getAttribute(WUJIE_SCRIPT_ID);
  }
  return null;
}
function mergeOptions(options, cacheOptions) {
  return {
    name: options.name,
    el: options.el || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.el),
    url: options.url || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.url),
    html: options.html || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.html),
    exec: options.exec !== void 0 ? options.exec : cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.exec,
    replace: options.replace || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.replace),
    fetch: options.fetch || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.fetch),
    props: options.props || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.props),
    sync: options.sync !== void 0 ? options.sync : cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.sync,
    prefix: options.prefix || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.prefix),
    loading: options.loading || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.loading),
    // 默认 {}
    attrs: options.attrs !== void 0 ? options.attrs : (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.attrs) || {},
    degradeAttrs: options.degradeAttrs !== void 0 ? options.degradeAttrs : (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.degradeAttrs) || {},
    // 默认 true
    fiber: options.fiber !== void 0 ? options.fiber : (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.fiber) !== void 0 ? cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.fiber : true,
    alive: options.alive !== void 0 ? options.alive : cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.alive,
    degrade: options.degrade !== void 0 ? options.degrade : cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.degrade,
    plugins: options.plugins || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.plugins),
    lifecycles: {
      beforeLoad: options.beforeLoad || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.beforeLoad),
      beforeMount: options.beforeMount || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.beforeMount),
      afterMount: options.afterMount || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.afterMount),
      beforeUnmount: options.beforeUnmount || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.beforeUnmount),
      afterUnmount: options.afterUnmount || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.afterUnmount),
      activated: options.activated || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.activated),
      deactivated: options.deactivated || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.deactivated),
      loadError: options.loadError || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.loadError)
    }
  };
}
function eventTrigger(el, eventName, detail) {
  var event;
  if (typeof window.CustomEvent === "function") {
    event = new CustomEvent(eventName, {
      detail
    });
  } else {
    event = document.createEvent("CustomEvent");
    event.initCustomEvent(eventName, true, false, detail);
  }
  el.dispatchEvent(event);
}
function stopMainAppRun() {
  warn(WUJIE_TIPS_STOP_APP_DETAIL);
  throw new Error(WUJIE_TIPS_STOP_APP);
}

// node_modules/wujie/esm/template.js
var ALL_SCRIPT_REGEX = /(<script[\s\S]*?>)[\s\S]*?<\/script>/gi;
var SCRIPT_TAG_REGEX = /<(script)\s+((?!type=('|")text\/ng\x2Dtemplate\3)[\s\S])*?>[\s\S]*?<\/\1>/i;
var SCRIPT_SRC_REGEX = /.*\ssrc=('|")?([^>'"\s]+)/;
var SCRIPT_TYPE_REGEX = /.*\stype=('|")?([^>'"\s]+)/;
var SCRIPT_ENTRY_REGEX = /.*\sentry\s*.*/;
var SCRIPT_ASYNC_REGEX = /.*\sasync\s*.*/;
var DEFER_ASYNC_REGEX = /.*\sdefer\s*.*/;
var SCRIPT_NO_MODULE_REGEX = /.*\snomodule\s*.*/;
var SCRIPT_MODULE_REGEX = /.*\stype=('|")?module('|")?\s*.*/;
var LINK_TAG_REGEX = /<(link)\s+[\s\S]*?>/gi;
var LINK_PRELOAD_OR_PREFETCH_REGEX = /\srel=('|")?(preload|prefetch|modulepreload)\1/;
var LINK_HREF_REGEX = /.*\shref=('|")?([^>'"\s]+)/;
var LINK_AS_FONT = /.*\sas=('|")?font\1.*/;
var STYLE_TAG_REGEX = /<style[^>]*>[\s\S]*?<\/style>/gi;
var STYLE_TYPE_REGEX = /\s+rel=('|")?stylesheet\1.*/;
var STYLE_HREF_REGEX = /.*\shref=('|")?([^>'"\s]+)/;
var HTML_COMMENT_REGEX = /<!--([\s\S]*?)-->/g;
var LINK_IGNORE_REGEX = /<link(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i;
var STYLE_IGNORE_REGEX = /<style(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i;
var SCRIPT_IGNORE_REGEX = /<script(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i;
var CROSS_ORIGIN_REGEX = /.*\scrossorigin=?('|")?(use-credentials|anonymous)?('|")?/i;
function hasProtocol(url) {
  return url.startsWith("//") || url.startsWith("http://") || url.startsWith("https://");
}
function getEntirePath(path, baseURI) {
  return new URL(path, baseURI).toString();
}
function isValidJavaScriptType(type) {
  var handleTypes = ["text/javascript", "module", "application/javascript", "text/ecmascript", "application/ecmascript"];
  return !type || handleTypes.indexOf(type) !== -1;
}
function parseTagAttributes(TagOuterHTML) {
  var pattern = /<[-\w]+\s+([^>]*)>/i;
  var matches = pattern.exec(TagOuterHTML);
  if (!matches) {
    return {};
  }
  var attributesString = matches[1];
  var attributesPattern = /([^\s=]+)\s*=\s*(['"])(.*?)\2/g;
  var attributesObject = {};
  var attributeMatches;
  while ((attributeMatches = attributesPattern.exec(attributesString)) !== null) {
    var attributeName = attributeMatches[1];
    var attributeValue = attributeMatches[3];
    attributesObject[attributeName] = attributeValue;
  }
  return attributesObject;
}
function isModuleScriptSupported() {
  var s = window.document.createElement("script");
  return "noModule" in s;
}
var genLinkReplaceSymbol = function genLinkReplaceSymbol2(linkHref) {
  var preloadOrPrefetch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  return "<!-- ".concat(preloadOrPrefetch ? "prefetch/preload/modulepreload" : "", " link ").concat(linkHref, " replaced by wujie -->");
};
var getInlineStyleReplaceSymbol = function getInlineStyleReplaceSymbol2(index) {
  return "<!-- inline-style-".concat(index, " replaced by wujie -->");
};
var genScriptReplaceSymbol = function genScriptReplaceSymbol2(scriptSrc) {
  var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "<!-- ".concat(type, " script ").concat(scriptSrc, " replaced by wujie -->");
};
var inlineScriptReplaceSymbol = "<!-- inline scripts replaced by wujie -->";
var genIgnoreAssetReplaceSymbol = function genIgnoreAssetReplaceSymbol2(url) {
  return "<!-- ignore asset ".concat(url || "file", " replaced by wujie -->");
};
var genModuleScriptReplaceSymbol = function genModuleScriptReplaceSymbol2(scriptSrc, moduleSupport) {
  return "<!-- ".concat(moduleSupport ? "nomodule" : "module", " script ").concat(scriptSrc, " ignored by wujie -->");
};
function processTpl(tpl, baseURI, postProcessTemplate) {
  var scripts = [];
  var styles = [];
  var entry = null;
  var moduleSupport = isModuleScriptSupported();
  var template = tpl.replace(HTML_COMMENT_REGEX, "").replace(LINK_TAG_REGEX, function(match) {
    var styleType = !!match.match(STYLE_TYPE_REGEX);
    if (styleType) {
      var styleHref = match.match(STYLE_HREF_REGEX);
      var styleIgnore = match.match(LINK_IGNORE_REGEX);
      if (styleHref) {
        var href = styleHref && styleHref[2];
        var newHref = href;
        if (href && !hasProtocol(href)) {
          newHref = getEntirePath(href, baseURI);
        }
        if (styleIgnore) {
          return genIgnoreAssetReplaceSymbol(newHref);
        }
        styles.push({
          src: newHref
        });
        return genLinkReplaceSymbol(newHref);
      }
    }
    var preloadOrPrefetchType = match.match(LINK_PRELOAD_OR_PREFETCH_REGEX) && match.match(LINK_HREF_REGEX) && !match.match(LINK_AS_FONT);
    if (preloadOrPrefetchType) {
      var _match$match = match.match(LINK_HREF_REGEX), _match$match2 = _slicedToArray(_match$match, 3), linkHref = _match$match2[2];
      return genLinkReplaceSymbol(linkHref, true);
    }
    return match;
  }).replace(STYLE_TAG_REGEX, function(match) {
    if (STYLE_IGNORE_REGEX.test(match)) {
      return genIgnoreAssetReplaceSymbol("style file");
    } else {
      var code = getInlineCode(match);
      styles.push({
        src: "",
        content: code
      });
      return getInlineStyleReplaceSymbol(styles.length - 1);
    }
  }).replace(ALL_SCRIPT_REGEX, function(match, scriptTag) {
    var scriptIgnore = scriptTag.match(SCRIPT_IGNORE_REGEX);
    var isModuleScript = !!scriptTag.match(SCRIPT_MODULE_REGEX);
    var isCrossOriginScript = scriptTag.match(CROSS_ORIGIN_REGEX);
    var crossOriginType = (isCrossOriginScript === null || isCrossOriginScript === void 0 ? void 0 : isCrossOriginScript[2]) || "";
    var moduleScriptIgnore = moduleSupport && !!scriptTag.match(SCRIPT_NO_MODULE_REGEX) || !moduleSupport && isModuleScript;
    var matchedScriptTypeMatch = scriptTag.match(SCRIPT_TYPE_REGEX);
    var matchedScriptType = matchedScriptTypeMatch && matchedScriptTypeMatch[2];
    if (!isValidJavaScriptType(matchedScriptType)) {
      return match;
    }
    if (SCRIPT_TAG_REGEX.test(match) && scriptTag.match(SCRIPT_SRC_REGEX)) {
      var matchedScriptEntry = scriptTag.match(SCRIPT_ENTRY_REGEX);
      var matchedScriptSrcMatch = scriptTag.match(SCRIPT_SRC_REGEX);
      var matchedScriptSrc = matchedScriptSrcMatch && matchedScriptSrcMatch[2];
      if (entry && matchedScriptEntry) {
        throw new SyntaxError("You should not set multiply entry script!");
      } else {
        if (matchedScriptSrc && !hasProtocol(matchedScriptSrc)) {
          matchedScriptSrc = getEntirePath(matchedScriptSrc, baseURI);
        }
        entry = entry || matchedScriptEntry && matchedScriptSrc;
      }
      if (scriptIgnore) {
        return genIgnoreAssetReplaceSymbol(matchedScriptSrc || "js file");
      }
      if (moduleScriptIgnore) {
        return genModuleScriptReplaceSymbol(matchedScriptSrc || "js file", moduleSupport);
      }
      if (matchedScriptSrc) {
        var isAsyncScript = !!scriptTag.match(SCRIPT_ASYNC_REGEX);
        var isDeferScript = !!scriptTag.match(DEFER_ASYNC_REGEX);
        scripts.push(isAsyncScript || isDeferScript ? {
          async: isAsyncScript,
          defer: isDeferScript,
          src: matchedScriptSrc,
          module: isModuleScript,
          crossorigin: !!isCrossOriginScript,
          crossoriginType: crossOriginType,
          attrs: parseTagAttributes(match)
        } : {
          src: matchedScriptSrc,
          module: isModuleScript,
          crossorigin: !!isCrossOriginScript,
          crossoriginType: crossOriginType,
          attrs: parseTagAttributes(match)
        });
        return genScriptReplaceSymbol(matchedScriptSrc, isAsyncScript && "async" || isDeferScript && "defer" || "");
      }
      return match;
    } else {
      if (scriptIgnore) {
        return genIgnoreAssetReplaceSymbol("js file");
      }
      if (moduleScriptIgnore) {
        return genModuleScriptReplaceSymbol("js file", moduleSupport);
      }
      var code = getInlineCode(match);
      var isPureCommentBlock = code.split(/[\r\n]+/).every(function(line) {
        return !line.trim() || line.trim().startsWith("//");
      });
      if (!isPureCommentBlock && code) {
        scripts.push({
          src: "",
          content: code,
          module: isModuleScript,
          crossorigin: !!isCrossOriginScript,
          crossoriginType: crossOriginType,
          attrs: parseTagAttributes(match)
        });
      }
      return inlineScriptReplaceSymbol;
    }
  });
  var tplResult = {
    template,
    scripts,
    styles,
    // set the last script as entry if have not set
    entry: entry || scripts[scripts.length - 1]
  };
  if (typeof postProcessTemplate === "function") {
    tplResult = postProcessTemplate(tplResult);
  }
  return tplResult;
}

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(r) {
  if (Array.isArray(r))
    return _arrayLikeToArray(r);
}

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"])
    return Array.from(r);
}

// node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

// node_modules/wujie/esm/plugin.js
function getCssLoader(_ref) {
  var plugins = _ref.plugins, replace = _ref.replace;
  return function(code) {
    var src = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var base = arguments.length > 2 ? arguments[2] : void 0;
    return compose(plugins.map(function(plugin) {
      return plugin.cssLoader;
    }))(replace ? replace(code) : code, src, base);
  };
}
function getJsLoader(_ref2) {
  var plugins = _ref2.plugins, replace = _ref2.replace;
  return function(code) {
    var src = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var base = arguments.length > 2 ? arguments[2] : void 0;
    return compose(plugins.map(function(plugin) {
      return plugin.jsLoader;
    }))(replace ? replace(code) : code, src, base);
  };
}
function getPresetLoaders(loaderType, plugins) {
  var loaders = plugins.map(function(plugin) {
    return plugin[loaderType];
  }).filter(function(loaders2) {
    return loaders2 === null || loaders2 === void 0 ? void 0 : loaders2.length;
  });
  var res = loaders.reduce(function(preLoaders, curLoaders) {
    return preLoaders.concat(curLoaders);
  }, []);
  return loaderType === "cssBeforeLoaders" ? res.reverse() : res;
}
function getEffectLoaders(loaderType, plugins) {
  return plugins.map(function(plugin) {
    return plugin[loaderType];
  }).filter(function(loaders) {
    return loaders === null || loaders === void 0 ? void 0 : loaders.length;
  }).reduce(function(preLoaders, curLoaders) {
    return preLoaders.concat(curLoaders);
  }, []);
}
function isMatchUrl(url, effectLoaders) {
  return effectLoaders.some(function(loader) {
    return typeof loader === "string" ? url === loader : loader.test(url);
  });
}
function cssRelativePathResolve(code, src, base) {
  var baseUrl = src ? getAbsolutePath(src, base) : base;
  var urlReg = /(url\((?!['"]?(?:data):)['"]?)([^'")]*)(['"]?\))/g;
  return code.replace(urlReg, function(_m, pre, url, post) {
    var absoluteUrl = getAbsolutePath(url, baseUrl);
    return pre + absoluteUrl + post;
  });
}
var defaultPlugin = {
  cssLoader: cssRelativePathResolve,
  // fix https://github.com/Tencent/wujie/issues/455
  cssBeforeLoaders: [{
    content: "html {view-transition-name: none;}"
  }]
};
function getPlugins(plugins) {
  return Array.isArray(plugins) ? [defaultPlugin].concat(_toConsumableArray(plugins)) : [defaultPlugin];
}

// node_modules/wujie/esm/entry.js
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var styleCache = {};
var scriptCache = {};
var embedHTMLCache = {};
if (!window.fetch) {
  error(WUJIE_TIPS_NO_FETCH);
  throw new Error();
}
var defaultFetch = window.fetch.bind(window);
function defaultGetTemplate(tpl) {
  return tpl;
}
function processCssLoader(_x, _x2, _x3) {
  return _processCssLoader.apply(this, arguments);
}
function _processCssLoader() {
  _processCssLoader = _asyncToGenerator(import_regenerator.default.mark(function _callee(sandbox, template, getExternalStyleSheets) {
    var curUrl, composeCssLoader, processedCssList, embedHTML;
    return import_regenerator.default.wrap(function _callee$(_context) {
      while (1)
        switch (_context.prev = _context.next) {
          case 0:
            curUrl = getCurUrl(sandbox.proxyLocation);
            composeCssLoader = compose(sandbox.plugins.map(function(plugin) {
              return plugin.cssLoader;
            }));
            processedCssList = getExternalStyleSheets().map(function(_ref2) {
              var src = _ref2.src, ignore = _ref2.ignore, contentPromise = _ref2.contentPromise;
              return {
                src,
                ignore,
                contentPromise: contentPromise.then(function(content) {
                  return composeCssLoader(content, src, curUrl);
                })
              };
            });
            _context.next = 5;
            return getEmbedHTML(template, processedCssList);
          case 5:
            embedHTML = _context.sent;
            return _context.abrupt("return", sandbox.replace ? sandbox.replace(embedHTML) : embedHTML);
          case 7:
          case "end":
            return _context.stop();
        }
    }, _callee);
  }));
  return _processCssLoader.apply(this, arguments);
}
function getEmbedHTML(_x4, _x5) {
  return _getEmbedHTML.apply(this, arguments);
}
function _getEmbedHTML() {
  _getEmbedHTML = _asyncToGenerator(import_regenerator.default.mark(function _callee2(template, styleResultList) {
    var embedHTML;
    return import_regenerator.default.wrap(function _callee2$(_context2) {
      while (1)
        switch (_context2.prev = _context2.next) {
          case 0:
            embedHTML = template;
            return _context2.abrupt("return", Promise.all(styleResultList.map(function(styleResult, index) {
              return styleResult.contentPromise.then(function(content) {
                if (styleResult.src) {
                  embedHTML = embedHTML.replace(genLinkReplaceSymbol(styleResult.src), styleResult.ignore ? '<link href="'.concat(styleResult.src, '" rel="stylesheet" type="text/css">') : "<style>/* ".concat(styleResult.src, " */").concat(content, "</style>"));
                } else if (content) {
                  embedHTML = embedHTML.replace(getInlineStyleReplaceSymbol(index), "<style>/* inline-style-".concat(index, " */").concat(content, "</style>"));
                }
              });
            })).then(function() {
              return embedHTML;
            }));
          case 2:
          case "end":
            return _context2.stop();
        }
    }, _callee2);
  }));
  return _getEmbedHTML.apply(this, arguments);
}
var isInlineCode = function isInlineCode2(code) {
  return code.startsWith("<");
};
var fetchAssets = function fetchAssets2(src, cache, fetch, cssFlag, loadError) {
  return cache[src] || (cache[src] = fetch(src).then(function(response) {
    if (response.status >= 400) {
      cache[src] = null;
      if (cssFlag) {
        error(WUJIE_TIPS_CSS_ERROR_REQUESTED, {
          src,
          response
        });
        loadError === null || loadError === void 0 || loadError(src, new Error(WUJIE_TIPS_CSS_ERROR_REQUESTED));
        return "";
      } else {
        error(WUJIE_TIPS_SCRIPT_ERROR_REQUESTED, {
          src,
          response
        });
        loadError === null || loadError === void 0 || loadError(src, new Error(WUJIE_TIPS_SCRIPT_ERROR_REQUESTED));
        throw new Error(WUJIE_TIPS_SCRIPT_ERROR_REQUESTED);
      }
    }
    return response.text();
  })["catch"](function(e) {
    cache[src] = null;
    if (cssFlag) {
      error(WUJIE_TIPS_CSS_ERROR_REQUESTED, src);
      loadError === null || loadError === void 0 || loadError(src, e);
      return "";
    } else {
      error(WUJIE_TIPS_SCRIPT_ERROR_REQUESTED, src);
      loadError === null || loadError === void 0 || loadError(src, e);
      return "";
    }
  }));
};
function _getExternalStyleSheets(styles) {
  var fetch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultFetch;
  var loadError = arguments.length > 2 ? arguments[2] : void 0;
  return styles.map(function(_ref) {
    var src = _ref.src, content = _ref.content, ignore = _ref.ignore;
    if (content) {
      return {
        src: "",
        contentPromise: Promise.resolve(content)
      };
    } else if (isInlineCode(src)) {
      return {
        src: "",
        contentPromise: Promise.resolve(getInlineCode(src))
      };
    } else {
      return {
        src,
        ignore,
        contentPromise: ignore ? Promise.resolve("") : fetchAssets(src, styleCache, fetch, true, loadError)
      };
    }
  });
}
function _getExternalScripts(scripts) {
  var fetch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultFetch;
  var loadError = arguments.length > 2 ? arguments[2] : void 0;
  var fiber = arguments.length > 3 ? arguments[3] : void 0;
  return scripts.map(function(script) {
    var src = script.src, async = script.async, defer = script.defer, module = script.module, ignore = script.ignore;
    var contentPromise = null;
    if ((async || defer) && src && !module) {
      contentPromise = new Promise(function(resolve, reject) {
        return fiber ? requestIdleCallback(function() {
          return fetchAssets(src, scriptCache, fetch, false, loadError).then(resolve, reject);
        }) : fetchAssets(src, scriptCache, fetch, false, loadError).then(resolve, reject);
      });
    } else if (module && src || ignore) {
      contentPromise = Promise.resolve("");
    } else if (!src) {
      contentPromise = Promise.resolve(script.content);
    } else {
      contentPromise = fetchAssets(src, scriptCache, fetch, false, loadError);
    }
    if (module && !async)
      script.defer = true;
    return _objectSpread(_objectSpread({}, script), {}, {
      contentPromise
    });
  });
}
function importHTML(params) {
  var _opts$fetch, _opts$fiber;
  var url = params.url, opts = params.opts, html = params.html;
  var fetch = (_opts$fetch = opts.fetch) !== null && _opts$fetch !== void 0 ? _opts$fetch : defaultFetch;
  var fiber = (_opts$fiber = opts.fiber) !== null && _opts$fiber !== void 0 ? _opts$fiber : true;
  var plugins = opts.plugins, loadError = opts.loadError;
  var htmlLoader = plugins ? compose(plugins.map(function(plugin) {
    return plugin.htmlLoader;
  })) : defaultGetTemplate;
  var jsExcludes = getEffectLoaders("jsExcludes", plugins);
  var cssExcludes = getEffectLoaders("cssExcludes", plugins);
  var jsIgnores = getEffectLoaders("jsIgnores", plugins);
  var cssIgnores = getEffectLoaders("cssIgnores", plugins);
  var getPublicPath = defaultGetPublicPath;
  var getHtmlParseResult = function getHtmlParseResult2(url2, html2, htmlLoader2) {
    return (html2 ? Promise.resolve(html2) : fetch(url2).then(function(response) {
      if (response.status >= 400) {
        error(WUJIE_TIPS_HTML_ERROR_REQUESTED, {
          url: url2,
          response
        });
        loadError === null || loadError === void 0 || loadError(url2, new Error(WUJIE_TIPS_HTML_ERROR_REQUESTED));
        return "";
      }
      return response.text();
    })["catch"](function(e) {
      embedHTMLCache[url2] = null;
      loadError === null || loadError === void 0 || loadError(url2, e);
      return Promise.reject(e);
    })).then(function(html3) {
      var assetPublicPath = getPublicPath(url2);
      var _processTpl = processTpl(htmlLoader2(html3), assetPublicPath), template = _processTpl.template, scripts = _processTpl.scripts, styles = _processTpl.styles;
      return {
        template,
        assetPublicPath,
        getExternalScripts: function getExternalScripts() {
          return _getExternalScripts(scripts.filter(function(script) {
            return !script.src || !isMatchUrl(script.src, jsExcludes);
          }).map(function(script) {
            return _objectSpread(_objectSpread({}, script), {}, {
              ignore: script.src && isMatchUrl(script.src, jsIgnores)
            });
          }), fetch, loadError, fiber);
        },
        getExternalStyleSheets: function getExternalStyleSheets() {
          return _getExternalStyleSheets(styles.filter(function(style) {
            return !style.src || !isMatchUrl(style.src, cssExcludes);
          }).map(function(style) {
            return _objectSpread(_objectSpread({}, style), {}, {
              ignore: style.src && isMatchUrl(style.src, cssIgnores)
            });
          }), fetch, loadError);
        }
      };
    });
  };
  if (opts !== null && opts !== void 0 && opts.plugins.some(function(plugin) {
    return plugin.htmlLoader;
  })) {
    return getHtmlParseResult(url, html, htmlLoader);
  } else {
    return embedHTMLCache[url] || (embedHTMLCache[url] = getHtmlParseResult(url, html, htmlLoader));
  }
}

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n))
    throw new TypeError("Cannot call a class as a function");
}

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

// node_modules/wujie/esm/sandbox.js
var import_regenerator3 = __toESM(require_regenerator());

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(t, e) {
  if ("function" != typeof e && null !== e)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e))
    return e;
  if (void 0 !== e)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}

// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}

// node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}

// node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct3() {
    return !!t;
  })();
}

// node_modules/@babel/runtime/helpers/esm/construct.js
function _construct(t, e, r) {
  if (_isNativeReflectConstruct())
    return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}

// node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper2(t2) {
    if (null === t2 || !_isNativeFunction(t2))
      return t2;
    if ("function" != typeof t2)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t2))
        return r.get(t2);
      r.set(t2, Wrapper);
    }
    function Wrapper() {
      return _construct(t2, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), _setPrototypeOf(Wrapper, t2);
  }, _wrapNativeSuper(t);
}

// node_modules/wujie/esm/shadow.js
var import_regenerator2 = __toESM(require_regenerator());

// node_modules/wujie/esm/common.js
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var idToSandboxCacheMap = window.__POWERED_BY_WUJIE__ ? window.__WUJIE.inject.idToSandboxMap : /* @__PURE__ */ new Map();
function getWujieById(id) {
  var _idToSandboxCacheMap$;
  return ((_idToSandboxCacheMap$ = idToSandboxCacheMap.get(id)) === null || _idToSandboxCacheMap$ === void 0 ? void 0 : _idToSandboxCacheMap$.wujie) || null;
}
function getOptionsById(id) {
  var _idToSandboxCacheMap$2;
  return ((_idToSandboxCacheMap$2 = idToSandboxCacheMap.get(id)) === null || _idToSandboxCacheMap$2 === void 0 ? void 0 : _idToSandboxCacheMap$2.options) || null;
}
function addSandboxCacheWithWujie(id, sandbox) {
  var wujieCache = idToSandboxCacheMap.get(id);
  if (wujieCache)
    idToSandboxCacheMap.set(id, _objectSpread2(_objectSpread2({}, wujieCache), {}, {
      wujie: sandbox
    }));
  else
    idToSandboxCacheMap.set(id, {
      wujie: sandbox
    });
}
function deleteWujieById(id) {
  var wujieCache = idToSandboxCacheMap.get(id);
  if (wujieCache !== null && wujieCache !== void 0 && wujieCache.options)
    idToSandboxCacheMap.set(id, {
      options: wujieCache.options
    });
  idToSandboxCacheMap["delete"](id);
}
function addSandboxCacheWithOptions(id, options) {
  var wujieCache = idToSandboxCacheMap.get(id);
  if (wujieCache)
    idToSandboxCacheMap.set(id, _objectSpread2(_objectSpread2({}, wujieCache), {}, {
      options
    }));
  else
    idToSandboxCacheMap.set(id, {
      options
    });
}
var documentProxyProperties = {
  // 降级场景下需要本地特殊处理的属性
  modifyLocalProperties: ["createElement", "createTextNode", "documentURI", "URL", "getElementsByTagName"],
  // 子应用需要手动修正的属性方法
  modifyProperties: ["createElement", "createTextNode", "documentURI", "URL", "getElementsByTagName", "getElementsByClassName", "getElementsByName", "getElementById", "querySelector", "querySelectorAll", "documentElement", "scrollingElement", "forms", "images", "links"],
  // 需要从shadowRoot中获取的属性
  shadowProperties: ["activeElement", "childElementCount", "children", "firstElementChild", "firstChild", "fullscreenElement", "lastElementChild", "pictureInPictureElement", "pointerLockElement", "styleSheets"],
  // 需要从shadowRoot中获取的方法
  shadowMethods: ["append", "contains", "getSelection", "elementFromPoint", "elementsFromPoint", "getAnimations", "replaceChildren"],
  // 需要从主应用document中获取的属性
  documentProperties: ["characterSet", "compatMode", "contentType", "designMode", "dir", "doctype", "embeds", "fullscreenEnabled", "hidden", "implementation", "lastModified", "pictureInPictureEnabled", "plugins", "readyState", "referrer", "visibilityState", "fonts"],
  // 需要从主应用document中获取的方法
  documentMethods: ["execCommand", "caretPositionFromPoint", "createRange", "exitFullscreen", "exitPictureInPicture", "getElementsByTagNameNS", "hasFocus", "prepend"],
  // 需要从主应用document中获取的事件
  documentEvents: ["onpointerlockchange", "onpointerlockerror", "onbeforecopy", "onbeforecut", "onbeforepaste", "onfreeze", "onresume", "onsearch", "onfullscreenchange", "onfullscreenerror", "onsecuritypolicyviolation", "onvisibilitychange"],
  // 无需修改原型的属性
  ownerProperties: ["head", "body"]
};
var appDocumentAddEventListenerEvents = ["DOMContentLoaded", "readystatechange"];
var appDocumentOnEvents = ["onreadystatechange"];
var mainDocumentAddEventListenerEvents = ["fullscreenchange", "fullscreenerror", "selectionchange", "visibilitychange", "wheel", "keydown", "keypress", "keyup"];
var mainAndAppAddEventListenerEvents = ["gotpointercapture", "lostpointercapture"];
var appWindowAddEventListenerEvents = ["hashchange", "popstate", "DOMContentLoaded", "load", "beforeunload", "unload", "message", "error", "unhandledrejection"];
var appWindowOnEvent = ["onload", "onbeforeunload", "onunload"];
var relativeElementTagAttrMap = {
  IMG: "src",
  A: "href",
  SOURCE: "src"
};
var windowProxyProperties = ["getComputedStyle", "visualViewport", "matchMedia", "DOMParser"];
var windowRegWhiteList = [/animationFrame$/i, /resizeObserver$|mutationObserver$|intersectionObserver$/i, /height$|width$|left$/i, /^screen/i, /X$|Y$/];
var rawElementAppendChild = HTMLElement.prototype.appendChild;
var rawElementRemoveChild = HTMLElement.prototype.removeChild;
var rawElementContains = HTMLElement.prototype.contains;
var rawHeadInsertBefore = HTMLHeadElement.prototype.insertBefore;
var rawBodyInsertBefore = HTMLBodyElement.prototype.insertBefore;
var rawAddEventListener = Node.prototype.addEventListener;
var rawRemoveEventListener = Node.prototype.removeEventListener;
var rawWindowAddEventListener = window.addEventListener;
var rawWindowRemoveEventListener = window.removeEventListener;
var rawAppendChild = Node.prototype.appendChild;
var rawDocumentQuerySelector = window.__POWERED_BY_WUJIE__ ? window.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__ : Document.prototype.querySelector;

// node_modules/wujie/esm/effect.js
function ownKeys3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys3(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function patchCustomEvent(e, elementGetter) {
  Object.defineProperties(e, {
    srcElement: {
      get: elementGetter
    },
    target: {
      get: elementGetter
    }
  });
  return e;
}
function manualInvokeElementEvent(element, event) {
  var customEvent = new CustomEvent(event);
  var patchedEvent = patchCustomEvent(customEvent, function() {
    return element;
  });
  if (isFunction(element["on".concat(event)])) {
    element["on".concat(event)](patchedEvent);
  } else {
    element.dispatchEvent(patchedEvent);
  }
}
function handleStylesheetElementPatch(stylesheetElement, sandbox) {
  if (!stylesheetElement.innerHTML || sandbox.degrade)
    return;
  var patcher = function patcher2() {
    var _getPatchStyleElement = getPatchStyleElements([stylesheetElement.sheet]), _getPatchStyleElement2 = _slicedToArray(_getPatchStyleElement, 2), hostStyleSheetElement = _getPatchStyleElement2[0], fontStyleSheetElement = _getPatchStyleElement2[1];
    if (hostStyleSheetElement) {
      sandbox.shadowRoot.head.appendChild(hostStyleSheetElement);
    }
    if (fontStyleSheetElement) {
      sandbox.shadowRoot.host.appendChild(fontStyleSheetElement);
    }
    stylesheetElement._patcher = void 0;
  };
  if (stylesheetElement._patcher) {
    clearTimeout(stylesheetElement._patcher);
  }
  stylesheetElement._patcher = setTimeout(patcher, 50);
}
function patchStylesheetElement(stylesheetElement, cssLoader, sandbox, curUrl) {
  var _stylesheetElement$sh;
  if (stylesheetElement._hasPatchStyle)
    return;
  var innerHTMLDesc = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML");
  var innerTextDesc = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerText");
  var textContentDesc = Object.getOwnPropertyDescriptor(Node.prototype, "textContent");
  var RawInsertRule = (_stylesheetElement$sh = stylesheetElement.sheet) === null || _stylesheetElement$sh === void 0 ? void 0 : _stylesheetElement$sh.insertRule;
  function patchSheetInsertRule() {
    if (!RawInsertRule)
      return;
    stylesheetElement.sheet.insertRule = function(rule, index) {
      innerHTMLDesc ? stylesheetElement.innerHTML += rule : stylesheetElement.innerText += rule;
      return RawInsertRule.call(stylesheetElement.sheet, rule, index);
    };
  }
  patchSheetInsertRule();
  if (innerHTMLDesc) {
    Object.defineProperties(stylesheetElement, {
      innerHTML: {
        get: function get() {
          return innerHTMLDesc.get.call(stylesheetElement);
        },
        set: function set(code) {
          var _this = this;
          innerHTMLDesc.set.call(stylesheetElement, cssLoader(code, "", curUrl));
          nextTick(function() {
            return handleStylesheetElementPatch(_this, sandbox);
          });
        }
      }
    });
  }
  Object.defineProperties(stylesheetElement, {
    innerText: {
      get: function get() {
        return innerTextDesc.get.call(stylesheetElement);
      },
      set: function set(code) {
        var _this2 = this;
        innerTextDesc.set.call(stylesheetElement, cssLoader(code, "", curUrl));
        nextTick(function() {
          return handleStylesheetElementPatch(_this2, sandbox);
        });
      }
    },
    textContent: {
      get: function get() {
        return textContentDesc.get.call(stylesheetElement);
      },
      set: function set(code) {
        var _this3 = this;
        textContentDesc.set.call(stylesheetElement, cssLoader(code, "", curUrl));
        nextTick(function() {
          return handleStylesheetElementPatch(_this3, sandbox);
        });
      }
    },
    appendChild: {
      value: function value(node) {
        var _this4 = this;
        nextTick(function() {
          return handleStylesheetElementPatch(_this4, sandbox);
        });
        if (node.nodeType === Node.TEXT_NODE) {
          var res = rawAppendChild.call(stylesheetElement, stylesheetElement.ownerDocument.createTextNode(cssLoader(node.textContent, "", curUrl)));
          patchSheetInsertRule();
          return res;
        } else
          return rawAppendChild(node);
      }
    },
    _hasPatchStyle: {
      get: function get() {
        return true;
      }
    }
  });
}
var dynamicScriptExecStack = Promise.resolve();
function rewriteAppendOrInsertChild(opts) {
  return function appendChildOrInsertBefore(newChild, refChild) {
    var _this5 = this;
    var element = newChild;
    var rawDOMAppendOrInsertBefore = opts.rawDOMAppendOrInsertBefore, wujieId = opts.wujieId;
    var sandbox = getWujieById(wujieId);
    var styleSheetElements = sandbox.styleSheetElements, replace = sandbox.replace, fetch = sandbox.fetch, plugins = sandbox.plugins, iframe = sandbox.iframe, lifecycles = sandbox.lifecycles, proxyLocation = sandbox.proxyLocation, fiber = sandbox.fiber;
    if (!isHijackingTag(element.tagName) || !wujieId) {
      var res = rawDOMAppendOrInsertBefore.call(this, element, refChild);
      patchElementEffect(element, iframe.contentWindow);
      execHooks(plugins, "appendOrInsertElementHook", element, iframe.contentWindow);
      return res;
    }
    var iframeDocument = iframe.contentDocument;
    var curUrl = getCurUrl(proxyLocation);
    if (element.tagName) {
      var _element$tagName;
      switch ((_element$tagName = element.tagName) === null || _element$tagName === void 0 ? void 0 : _element$tagName.toUpperCase()) {
        case "LINK": {
          var _ref = element, href = _ref.href, rel = _ref.rel, type = _ref.type;
          var styleFlag = rel === "stylesheet" || type === "text/css" || href.endsWith(".css");
          if (!styleFlag) {
            var _res = rawDOMAppendOrInsertBefore.call(this, element, refChild);
            execHooks(plugins, "appendOrInsertElementHook", element, iframe.contentWindow);
            return _res;
          }
          if (href && !isMatchUrl(href, getEffectLoaders("cssExcludes", plugins))) {
            _getExternalStyleSheets([{
              src: href,
              ignore: isMatchUrl(href, getEffectLoaders("cssIgnores", plugins))
            }], fetch, lifecycles.loadError).forEach(function(_ref2) {
              var src2 = _ref2.src, ignore = _ref2.ignore, contentPromise = _ref2.contentPromise;
              return contentPromise.then(function(content2) {
                var rawAttrs = parseTagAttributes(element.outerHTML);
                if (ignore && src2) {
                  rawDOMAppendOrInsertBefore.call(_this5, element, refChild);
                } else {
                  var stylesheetElement2 = iframeDocument.createElement("style");
                  var cssLoader2 = getCssLoader({
                    plugins,
                    replace
                  });
                  stylesheetElement2.innerHTML = cssLoader2(content2, src2, curUrl);
                  styleSheetElements.push(stylesheetElement2);
                  setAttrsToElement(stylesheetElement2, rawAttrs);
                  rawDOMAppendOrInsertBefore.call(_this5, stylesheetElement2, refChild);
                  handleStylesheetElementPatch(stylesheetElement2, sandbox);
                  manualInvokeElementEvent(element, "load");
                }
                element = null;
              }, function() {
                manualInvokeElementEvent(element, "error");
                element = null;
              });
            });
          }
          var comment = iframeDocument.createComment("dynamic link ".concat(href, " replaced by wujie"));
          return rawDOMAppendOrInsertBefore.call(this, comment, refChild);
        }
        case "STYLE": {
          var stylesheetElement = newChild;
          styleSheetElements.push(stylesheetElement);
          var content = stylesheetElement.innerHTML;
          var cssLoader = getCssLoader({
            plugins,
            replace
          });
          content && (stylesheetElement.innerHTML = cssLoader(content, "", curUrl));
          var _res2 = rawDOMAppendOrInsertBefore.call(this, element, refChild);
          patchStylesheetElement(stylesheetElement, cssLoader, sandbox, curUrl);
          handleStylesheetElementPatch(stylesheetElement, sandbox);
          execHooks(plugins, "appendOrInsertElementHook", element, iframe.contentWindow);
          return _res2;
        }
        case "SCRIPT": {
          setTagToScript(element);
          var _ref3 = element, src = _ref3.src, text = _ref3.text, _type = _ref3.type, crossOrigin = _ref3.crossOrigin;
          if (src && !isMatchUrl(src, getEffectLoaders("jsExcludes", plugins))) {
            var execScript = function execScript2(scriptResult) {
              if (sandbox.iframe === null)
                return warn(WUJIE_TIPS_REPEAT_RENDER);
              var onload = function onload2() {
                manualInvokeElementEvent(element, "load");
                element = null;
              };
              insertScriptToIframe(_objectSpread3(_objectSpread3({}, scriptResult), {}, {
                onload
              }), sandbox.iframe.contentWindow, element);
            };
            var scriptOptions = {
              src,
              module: _type === "module",
              crossorigin: crossOrigin !== null,
              crossoriginType: crossOrigin || "",
              ignore: isMatchUrl(src, getEffectLoaders("jsIgnores", plugins)),
              attrs: parseTagAttributes(element.outerHTML)
            };
            _getExternalScripts([scriptOptions], fetch, lifecycles.loadError, fiber).forEach(function(scriptResult) {
              dynamicScriptExecStack = dynamicScriptExecStack.then(function() {
                return scriptResult.contentPromise.then(function(content2) {
                  var _sandbox$execQueue;
                  if (sandbox.execQueue === null)
                    return warn(WUJIE_TIPS_REPEAT_RENDER);
                  var execQueueLength2 = (_sandbox$execQueue = sandbox.execQueue) === null || _sandbox$execQueue === void 0 ? void 0 : _sandbox$execQueue.length;
                  sandbox.execQueue.push(function() {
                    return fiber ? sandbox.requestIdleCallback(function() {
                      execScript(_objectSpread3(_objectSpread3({}, scriptResult), {}, {
                        content: content2
                      }));
                    }) : execScript(_objectSpread3(_objectSpread3({}, scriptResult), {}, {
                      content: content2
                    }));
                  });
                  if (!execQueueLength2)
                    sandbox.execQueue.shift()();
                }, function() {
                  manualInvokeElementEvent(element, "error");
                  element = null;
                });
              });
            });
          } else {
            var _sandbox$execQueue2;
            var execQueueLength = (_sandbox$execQueue2 = sandbox.execQueue) === null || _sandbox$execQueue2 === void 0 ? void 0 : _sandbox$execQueue2.length;
            sandbox.execQueue.push(function() {
              return fiber ? sandbox.requestIdleCallback(function() {
                insertScriptToIframe({
                  src: null,
                  content: text,
                  attrs: parseTagAttributes(element.outerHTML)
                }, sandbox.iframe.contentWindow, element);
              }) : insertScriptToIframe({
                src: null,
                content: text,
                attrs: parseTagAttributes(element.outerHTML)
              }, sandbox.iframe.contentWindow, element);
            });
            if (!execQueueLength)
              sandbox.execQueue.shift()();
          }
          var _comment = iframeDocument.createComment("dynamic script ".concat(src, " replaced by wujie"));
          return rawDOMAppendOrInsertBefore.call(this, _comment, refChild);
        }
        case "IFRAME": {
          if (element.getAttribute(WUJIE_DATA_FLAG) === "") {
            return rawAppendChild.call(rawDocumentQuerySelector.call(this.ownerDocument, "html"), element);
          }
          var _res3 = rawDOMAppendOrInsertBefore.call(this, element, refChild);
          execHooks(plugins, "appendOrInsertElementHook", element, iframe.contentWindow);
          return _res3;
        }
        default:
      }
    }
  };
}
function findScriptElementFromIframe(rawElement, wujieId) {
  var wujieTag = getTagFromScript(rawElement);
  var sandbox = getWujieById(wujieId);
  var iframe = sandbox.iframe;
  var targetScript = iframe.contentWindow.__WUJIE_RAW_DOCUMENT_HEAD__.querySelector("script[".concat(WUJIE_SCRIPT_ID, "='").concat(wujieTag, "']"));
  if (targetScript === null) {
    warn(WUJIE_TIPS_NO_SCRIPT, "<script ".concat(WUJIE_SCRIPT_ID, "='").concat(wujieTag, "'/>"));
  }
  return {
    targetScript,
    iframe
  };
}
function rewriteContains(opts) {
  return function contains(other) {
    var element = other;
    var rawElementContains2 = opts.rawElementContains, wujieId = opts.wujieId;
    if (element && isScriptElement(element)) {
      var _findScriptElementFro = findScriptElementFromIframe(element, wujieId), targetScript = _findScriptElementFro.targetScript;
      return targetScript !== null;
    }
    return rawElementContains2(element);
  };
}
function rewriteRemoveChild(opts) {
  return function removeChild(child) {
    var element = child;
    var rawElementRemoveChild2 = opts.rawElementRemoveChild, wujieId = opts.wujieId;
    if (element && isScriptElement(element)) {
      var _findScriptElementFro2 = findScriptElementFromIframe(element, wujieId), targetScript = _findScriptElementFro2.targetScript, iframe = _findScriptElementFro2.iframe;
      if (targetScript !== null) {
        return iframe.contentWindow.__WUJIE_RAW_DOCUMENT_HEAD__.removeChild(targetScript);
      }
      return null;
    }
    return rawElementRemoveChild2(element);
  };
}
function patchEventListener(element) {
  var listenerMap = /* @__PURE__ */ new Map();
  element._cacheListeners = listenerMap;
  element.addEventListener = function(type, listener, options) {
    var listeners = listenerMap.get(type) || [];
    listenerMap.set(type, [].concat(_toConsumableArray(listeners), [listener]));
    return rawAddEventListener.call(element, type, listener, options);
  };
  element.removeEventListener = function(type, listener, options) {
    var typeListeners = listenerMap.get(type);
    var index = typeListeners === null || typeListeners === void 0 ? void 0 : typeListeners.indexOf(listener);
    if (typeListeners !== null && typeListeners !== void 0 && typeListeners.length && index !== -1) {
      typeListeners.splice(index, 1);
    }
    return rawRemoveEventListener.call(element, type, listener, options);
  };
}
function removeEventListener(element) {
  var listenerMap = element._cacheListeners;
  _toConsumableArray(listenerMap.entries()).forEach(function(_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2), type = _ref5[0], listeners = _ref5[1];
    listeners.forEach(function(listener) {
      return rawRemoveEventListener.call(element, type, listener);
    });
  });
}
function patchRenderEffect(render2, id, degrade) {
  if (!degrade) {
    patchEventListener(render2.head);
    patchEventListener(render2.body);
  }
  render2.head.appendChild = rewriteAppendOrInsertChild({
    rawDOMAppendOrInsertBefore: rawAppendChild,
    wujieId: id
  });
  render2.head.insertBefore = rewriteAppendOrInsertChild({
    rawDOMAppendOrInsertBefore: rawHeadInsertBefore,
    wujieId: id
  });
  render2.head.removeChild = rewriteRemoveChild({
    rawElementRemoveChild: rawElementRemoveChild.bind(render2.head),
    wujieId: id
  });
  render2.head.contains = rewriteContains({
    rawElementContains: rawElementContains.bind(render2.head),
    wujieId: id
  });
  render2.contains = rewriteContains({
    rawElementContains: rawElementContains.bind(render2),
    wujieId: id
  });
  render2.body.appendChild = rewriteAppendOrInsertChild({
    rawDOMAppendOrInsertBefore: rawAppendChild,
    wujieId: id
  });
  render2.body.insertBefore = rewriteAppendOrInsertChild({
    rawDOMAppendOrInsertBefore: rawBodyInsertBefore,
    wujieId: id
  });
}

// node_modules/wujie/esm/shadow.js
function ownKeys4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys4(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct2() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var cssSelectorMap = {
  ":root": ":host"
};
function defineWujieWebComponent() {
  var customElements = window.customElements;
  if (customElements && !(customElements !== null && customElements !== void 0 && customElements.get("wujie-app"))) {
    var WujieApp = function(_HTMLElement) {
      _inherits(WujieApp2, _HTMLElement);
      var _super = _createSuper(WujieApp2);
      function WujieApp2() {
        _classCallCheck(this, WujieApp2);
        return _super.apply(this, arguments);
      }
      _createClass(WujieApp2, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          if (this.shadowRoot)
            return;
          var shadowRoot = this.attachShadow({
            mode: "open"
          });
          var sandbox = getWujieById(this.getAttribute(WUJIE_APP_ID));
          patchElementEffect(shadowRoot, sandbox.iframe.contentWindow);
          sandbox.shadowRoot = shadowRoot;
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          var sandbox = getWujieById(this.getAttribute(WUJIE_APP_ID));
          sandbox === null || sandbox === void 0 || sandbox.unmount();
        }
      }]);
      return WujieApp2;
    }(_wrapNativeSuper(HTMLElement));
    customElements === null || customElements === void 0 || customElements.define("wujie-app", WujieApp);
  }
}
function createWujieWebComponent(id) {
  var contentElement = window.document.createElement("wujie-app");
  contentElement.setAttribute(WUJIE_APP_ID, id);
  contentElement.classList.add(WUJIE_IFRAME_CLASS);
  return contentElement;
}
function renderElementToContainer(element, selectorOrElement) {
  var container = getContainer(selectorOrElement);
  if (container && !container.contains(element)) {
    if (!container.querySelector("div[".concat(LOADING_DATA_FLAG, "]"))) {
      clearChild(container);
    }
    if (element) {
      rawElementAppendChild.call(container, element);
    }
  }
  return container;
}
function initRenderIframeAndContainer(id, parent) {
  var degradeAttrs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var iframe = createIframeContainer(id, degradeAttrs);
  var container = renderElementToContainer(iframe, parent);
  var contentDocument = iframe.contentWindow.document;
  contentDocument.open();
  contentDocument.write("<!DOCTYPE html><html><head></head><body></body></html>");
  contentDocument.close();
  return {
    iframe,
    container
  };
}
function processCssLoaderForTemplate(_x, _x2) {
  return _processCssLoaderForTemplate.apply(this, arguments);
}
function _processCssLoaderForTemplate() {
  _processCssLoaderForTemplate = _asyncToGenerator(import_regenerator2.default.mark(function _callee(sandbox, html) {
    var document2, plugins, replace, proxyLocation, cssLoader, cssBeforeLoaders, cssAfterLoaders, curUrl;
    return import_regenerator2.default.wrap(function _callee$(_context) {
      while (1)
        switch (_context.prev = _context.next) {
          case 0:
            document2 = sandbox.iframe.contentDocument;
            plugins = sandbox.plugins, replace = sandbox.replace, proxyLocation = sandbox.proxyLocation;
            cssLoader = getCssLoader({
              plugins,
              replace
            });
            cssBeforeLoaders = getPresetLoaders("cssBeforeLoaders", plugins);
            cssAfterLoaders = getPresetLoaders("cssAfterLoaders", plugins);
            curUrl = getCurUrl(proxyLocation);
            _context.next = 8;
            return Promise.all([Promise.all(_getExternalStyleSheets(cssBeforeLoaders, sandbox.fetch, sandbox.lifecycles.loadError).map(function(_ref) {
              var src = _ref.src, contentPromise = _ref.contentPromise;
              return contentPromise.then(function(content) {
                return {
                  src,
                  content
                };
              });
            })).then(function(contentList) {
              contentList.forEach(function(_ref2) {
                var src = _ref2.src, content = _ref2.content;
                if (!content)
                  return;
                var styleElement = document2.createElement("style");
                styleElement.setAttribute("type", "text/css");
                styleElement.appendChild(document2.createTextNode(content ? cssLoader(content, src, curUrl) : content));
                var head = html.querySelector("head");
                var body = html.querySelector("body");
                html.insertBefore(styleElement, head || body || html.firstChild);
              });
            }), Promise.all(_getExternalStyleSheets(cssAfterLoaders, sandbox.fetch, sandbox.lifecycles.loadError).map(function(_ref3) {
              var src = _ref3.src, contentPromise = _ref3.contentPromise;
              return contentPromise.then(function(content) {
                return {
                  src,
                  content
                };
              });
            })).then(function(contentList) {
              contentList.forEach(function(_ref4) {
                var src = _ref4.src, content = _ref4.content;
                if (!content)
                  return;
                var styleElement = document2.createElement("style");
                styleElement.setAttribute("type", "text/css");
                styleElement.appendChild(document2.createTextNode(content ? cssLoader(content, src, curUrl) : content));
                html.appendChild(styleElement);
              });
            })]).then(function() {
              return html;
            }, function() {
              return html;
            });
          case 8:
            return _context.abrupt("return", _context.sent);
          case 9:
          case "end":
            return _context.stop();
        }
    }, _callee);
  }));
  return _processCssLoaderForTemplate.apply(this, arguments);
}
function replaceHeadAndBody(html, head, body) {
  var headElement = html.querySelector("head");
  var bodyElement = html.querySelector("body");
  if (headElement) {
    while (headElement.firstChild) {
      rawAppendChild.call(head, headElement.firstChild.cloneNode(true));
      headElement.removeChild(headElement.firstChild);
    }
    headElement.parentNode.replaceChild(head, headElement);
  }
  if (bodyElement) {
    while (bodyElement.firstChild) {
      rawAppendChild.call(body, bodyElement.firstChild.cloneNode(true));
      bodyElement.removeChild(bodyElement.firstChild);
    }
    bodyElement.parentNode.replaceChild(body, bodyElement);
  }
  return html;
}
function renderTemplateToHtml(iframeWindow, template) {
  var sandbox = iframeWindow.__WUJIE;
  var head = sandbox.head, body = sandbox.body, alive = sandbox.alive, execFlag = sandbox.execFlag;
  var document2 = iframeWindow.document;
  var html = document2.createElement("html");
  html.innerHTML = template;
  if (!alive && execFlag) {
    html = replaceHeadAndBody(html, head, body);
  } else {
    sandbox.head = html.querySelector("head");
    sandbox.body = html.querySelector("body");
  }
  var ElementIterator = document2.createTreeWalker(html, NodeFilter.SHOW_ELEMENT, null, false);
  var nextElement = ElementIterator.currentNode;
  while (nextElement) {
    patchElementEffect(nextElement, iframeWindow);
    var relativeAttr = relativeElementTagAttrMap[nextElement.tagName];
    var url = nextElement[relativeAttr];
    if (relativeAttr)
      nextElement.setAttribute(relativeAttr, getAbsolutePath(url, nextElement.baseURI || ""));
    nextElement = ElementIterator.nextNode();
  }
  if (!html.querySelector("head")) {
    var _head = document2.createElement("head");
    html.appendChild(_head);
  }
  if (!html.querySelector("body")) {
    var _body = document2.createElement("body");
    html.appendChild(_body);
  }
  return html;
}
function renderTemplateToShadowRoot(_x3, _x4, _x5) {
  return _renderTemplateToShadowRoot.apply(this, arguments);
}
function _renderTemplateToShadowRoot() {
  _renderTemplateToShadowRoot = _asyncToGenerator(import_regenerator2.default.mark(function _callee2(shadowRoot, iframeWindow, template) {
    var html, processedHtml, shade;
    return import_regenerator2.default.wrap(function _callee2$(_context2) {
      while (1)
        switch (_context2.prev = _context2.next) {
          case 0:
            html = renderTemplateToHtml(iframeWindow, template);
            _context2.next = 3;
            return processCssLoaderForTemplate(iframeWindow.__WUJIE, html);
          case 3:
            processedHtml = _context2.sent;
            shadowRoot.appendChild(processedHtml);
            shade = document.createElement("div");
            shade.setAttribute("style", WUJIE_SHADE_STYLE);
            processedHtml.insertBefore(shade, processedHtml.firstChild);
            shadowRoot.head = shadowRoot.querySelector("head");
            shadowRoot.body = shadowRoot.querySelector("body");
            Object.defineProperty(shadowRoot.firstChild, "parentNode", {
              enumerable: true,
              configurable: true,
              get: function get() {
                return iframeWindow.document;
              }
            });
            patchRenderEffect(shadowRoot, iframeWindow.__WUJIE.id, false);
          case 12:
          case "end":
            return _context2.stop();
        }
    }, _callee2);
  }));
  return _renderTemplateToShadowRoot.apply(this, arguments);
}
function createIframeContainer(id) {
  var degradeAttrs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var iframe = document.createElement("iframe");
  var defaultStyle = "height:100%;width:100%";
  setAttrsToElement(iframe, _objectSpread4(_objectSpread4({}, degradeAttrs), {}, _defineProperty({
    style: [defaultStyle, degradeAttrs.style].join(";")
  }, WUJIE_APP_ID, id)));
  return iframe;
}
function renderTemplateToIframe(_x6, _x7, _x8) {
  return _renderTemplateToIframe.apply(this, arguments);
}
function _renderTemplateToIframe() {
  _renderTemplateToIframe = _asyncToGenerator(import_regenerator2.default.mark(function _callee3(renderDocument, iframeWindow, template) {
    var html, processedHtml;
    return import_regenerator2.default.wrap(function _callee3$(_context3) {
      while (1)
        switch (_context3.prev = _context3.next) {
          case 0:
            html = renderTemplateToHtml(iframeWindow, template);
            _context3.next = 3;
            return processCssLoaderForTemplate(iframeWindow.__WUJIE, html);
          case 3:
            processedHtml = _context3.sent;
            renderDocument.replaceChild(processedHtml, renderDocument.documentElement);
            Object.defineProperty(renderDocument.documentElement, "parentNode", {
              enumerable: true,
              configurable: true,
              get: function get() {
                return iframeWindow.document;
              }
            });
            patchRenderEffect(renderDocument, iframeWindow.__WUJIE.id, true);
          case 7:
          case "end":
            return _context3.stop();
        }
    }, _callee3);
  }));
  return _renderTemplateToIframe.apply(this, arguments);
}
function clearChild(root) {
  while (root !== null && root !== void 0 && root.firstChild) {
    rawElementRemoveChild.call(root, root.firstChild);
  }
}
function addLoading(el, loading) {
  var container = getContainer(el);
  clearChild(container);
  var containerStyles = null;
  try {
    containerStyles = window.getComputedStyle(container);
  } catch (_unused) {
    return;
  }
  if (containerStyles.position === "static") {
    container.setAttribute(CONTAINER_POSITION_DATA_FLAG, containerStyles.position);
    container.setAttribute(CONTAINER_OVERFLOW_DATA_FLAG, containerStyles.overflow === "visible" ? "" : containerStyles.overflow);
    container.style.setProperty("position", "relative");
    container.style.setProperty("overflow", "hidden");
  } else if (["relative", "sticky"].includes(containerStyles.position)) {
    container.setAttribute(CONTAINER_OVERFLOW_DATA_FLAG, containerStyles.overflow === "visible" ? "" : containerStyles.overflow);
    container.style.setProperty("overflow", "hidden");
  }
  var loadingContainer = document.createElement("div");
  loadingContainer.setAttribute(LOADING_DATA_FLAG, "");
  loadingContainer.setAttribute("style", WUJIE_LOADING_STYLE);
  if (loading)
    loadingContainer.appendChild(loading);
  else
    loadingContainer.innerHTML = WUJIE_LOADING_SVG;
  container.appendChild(loadingContainer);
}
function removeLoading(el) {
  var positionFlag = el.getAttribute(CONTAINER_POSITION_DATA_FLAG);
  var overflowFlag = el.getAttribute(CONTAINER_OVERFLOW_DATA_FLAG);
  if (positionFlag)
    el.style.removeProperty("position");
  if (overflowFlag !== null) {
    overflowFlag ? el.style.setProperty("overflow", overflowFlag) : el.style.removeProperty("overflow");
  }
  el.removeAttribute(CONTAINER_POSITION_DATA_FLAG);
  el.removeAttribute(CONTAINER_OVERFLOW_DATA_FLAG);
  var loadingContainer = el.querySelector("div[".concat(LOADING_DATA_FLAG, "]"));
  loadingContainer && el.removeChild(loadingContainer);
}
function getPatchStyleElements(rootStyleSheets) {
  var rootCssRules = [];
  var fontCssRules = [];
  var rootStyleReg = /:root/g;
  for (var i = 0; i < rootStyleSheets.length; i++) {
    var _rootStyleSheets$i$cs, _rootStyleSheets$i;
    var cssRules = (_rootStyleSheets$i$cs = (_rootStyleSheets$i = rootStyleSheets[i]) === null || _rootStyleSheets$i === void 0 ? void 0 : _rootStyleSheets$i.cssRules) !== null && _rootStyleSheets$i$cs !== void 0 ? _rootStyleSheets$i$cs : [];
    for (var j = 0; j < cssRules.length; j++) {
      var cssRuleText = cssRules[j].cssText;
      if (rootStyleReg.test(cssRuleText)) {
        rootCssRules.push(cssRuleText.replace(rootStyleReg, function(match) {
          return cssSelectorMap[match];
        }));
      }
      if (cssRules[j].type === CSSRule.FONT_FACE_RULE) {
        fontCssRules.push(cssRuleText);
      }
    }
  }
  var rootStyleSheetElement = null;
  var fontStyleSheetElement = null;
  if (rootCssRules.length) {
    rootStyleSheetElement = window.document.createElement("style");
    rootStyleSheetElement.innerHTML = rootCssRules.join("");
  }
  if (fontCssRules.length) {
    fontStyleSheetElement = window.document.createElement("style");
    fontStyleSheetElement.innerHTML = fontCssRules.join("");
  }
  return [rootStyleSheetElement, fontStyleSheetElement];
}

// node_modules/wujie/esm/sync.js
function syncUrlToWindow(iframeWindow) {
  var _iframeWindow$__WUJIE = iframeWindow.__WUJIE, sync = _iframeWindow$__WUJIE.sync, id = _iframeWindow$__WUJIE.id, prefix = _iframeWindow$__WUJIE.prefix;
  var winUrlElement = anchorElementGenerator(window.location.href);
  var queryMap = getAnchorElementQueryMap(winUrlElement);
  if (!sync && !queryMap[id])
    return winUrlElement = null;
  var curUrl = iframeWindow.location.pathname + iframeWindow.location.search + iframeWindow.location.hash;
  var validShortPath = "";
  if (prefix) {
    Object.keys(prefix).forEach(function(shortPath) {
      var longPath = prefix[shortPath];
      if (curUrl.startsWith(longPath) && (!validShortPath || longPath.length > prefix[validShortPath].length)) {
        validShortPath = shortPath;
      }
    });
  }
  if (sync) {
    queryMap[id] = window.encodeURIComponent(validShortPath ? curUrl.replace(prefix[validShortPath], "{".concat(validShortPath, "}")) : curUrl);
  } else {
    delete queryMap[id];
  }
  var newQuery = "?" + Object.keys(queryMap).map(function(key) {
    return key + "=" + queryMap[key];
  }).join("&");
  winUrlElement.search = newQuery;
  if (winUrlElement.href !== window.location.href) {
    window.history.replaceState(null, "", winUrlElement.href);
  }
  winUrlElement = null;
}
function syncUrlToIframe(iframeWindow) {
  var _iframeWindow$locatio = iframeWindow.location, pathname = _iframeWindow$locatio.pathname, search = _iframeWindow$locatio.search, hash = _iframeWindow$locatio.hash;
  var _iframeWindow$__WUJIE2 = iframeWindow.__WUJIE, id = _iframeWindow$__WUJIE2.id, url = _iframeWindow$__WUJIE2.url, sync = _iframeWindow$__WUJIE2.sync, execFlag = _iframeWindow$__WUJIE2.execFlag, prefix = _iframeWindow$__WUJIE2.prefix, inject = _iframeWindow$__WUJIE2.inject;
  var idUrl = sync && !execFlag ? getSyncUrl(id, prefix) : url;
  var syncUrl = (/^http/.test(idUrl) ? null : idUrl) || url;
  var _appRouteParse = appRouteParse(syncUrl), appRoutePath = _appRouteParse.appRoutePath;
  var preAppRoutePath = pathname + search + hash;
  if (preAppRoutePath !== appRoutePath) {
    iframeWindow.history.replaceState(null, "", inject.mainHostPath + appRoutePath);
  }
}
function clearInactiveAppUrl() {
  var winUrlElement = anchorElementGenerator(window.location.href);
  var queryMap = getAnchorElementQueryMap(winUrlElement);
  Object.keys(queryMap).forEach(function(id) {
    var sandbox = getWujieById(id);
    if (!sandbox)
      return;
    if (sandbox.execFlag && sandbox.sync && !sandbox.hrefFlag && !sandbox.activeFlag) {
      delete queryMap[id];
    }
  });
  var newQuery = "?" + Object.keys(queryMap).map(function(key) {
    return key + "=" + queryMap[key];
  }).join("&");
  winUrlElement.search = newQuery;
  if (winUrlElement.href !== window.location.href) {
    window.history.replaceState(null, "", winUrlElement.href);
  }
  winUrlElement = null;
}
function pushUrlToWindow(id, url) {
  var winUrlElement = anchorElementGenerator(window.location.href);
  var queryMap = getAnchorElementQueryMap(winUrlElement);
  queryMap[id] = window.encodeURIComponent(url);
  var newQuery = "?" + Object.keys(queryMap).map(function(key) {
    return key + "=" + queryMap[key];
  }).join("&");
  winUrlElement.search = newQuery;
  window.history.pushState(null, "", winUrlElement.href);
  winUrlElement = null;
}
function processAppForHrefJump() {
  window.addEventListener("popstate", function() {
    var winUrlElement = anchorElementGenerator(window.location.href);
    var queryMap = getAnchorElementQueryMap(winUrlElement);
    winUrlElement = null;
    Object.keys(queryMap).map(function(id) {
      return getWujieById(id);
    }).filter(function(sandbox) {
      return sandbox;
    }).forEach(function(sandbox) {
      var url = queryMap[sandbox.id];
      var iframeBody = rawDocumentQuerySelector.call(sandbox.iframe.contentDocument, "body");
      if (/http/.test(url)) {
        if (sandbox.degrade) {
          renderElementToContainer(sandbox.document.documentElement, iframeBody);
          renderIframeReplaceApp(window.decodeURIComponent(url), getDegradeIframe(sandbox.id).parentElement, sandbox.degradeAttrs);
        } else
          renderIframeReplaceApp(window.decodeURIComponent(url), sandbox.shadowRoot.host.parentElement, sandbox.degradeAttrs);
        sandbox.hrefFlag = true;
      } else if (sandbox.hrefFlag) {
        if (sandbox.degrade) {
          var _initRenderIframeAndC = initRenderIframeAndContainer(sandbox.id, sandbox.el, sandbox.degradeAttrs), iframe = _initRenderIframeAndC.iframe;
          patchEventTimeStamp(iframe.contentWindow, sandbox.iframe.contentWindow);
          iframe.contentWindow.onunload = function() {
            sandbox.unmount();
          };
          iframe.contentDocument.appendChild(iframeBody.firstElementChild);
          sandbox.document = iframe.contentDocument;
        } else
          renderElementToContainer(sandbox.shadowRoot.host, sandbox.el);
        sandbox.hrefFlag = false;
      }
    });
  });
}

// node_modules/wujie/esm/iframe.js
function ownKeys5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys5(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function patchIframeEvents(iframeWindow) {
  iframeWindow.__WUJIE_EVENTLISTENER__ = iframeWindow.__WUJIE_EVENTLISTENER__ || /* @__PURE__ */ new Set();
  iframeWindow.addEventListener = function addEventListener(type, listener, options) {
    execHooks(iframeWindow.__WUJIE.plugins, "windowAddEventListenerHook", iframeWindow, type, listener, options);
    iframeWindow.__WUJIE_EVENTLISTENER__.add({
      type,
      listener,
      options
    });
    if (appWindowAddEventListenerEvents.includes(type) || _typeof(options) === "object" && options.targetWindow) {
      var targetWindow = _typeof(options) === "object" && options.targetWindow ? options === null || options === void 0 ? void 0 : options.targetWindow : iframeWindow;
      return rawWindowAddEventListener.call(targetWindow, type, listener, options);
    }
    rawWindowAddEventListener.call(window.__WUJIE_RAW_WINDOW__ || window, type, listener, options);
  };
  iframeWindow.removeEventListener = function removeEventListener2(type, listener, options) {
    execHooks(iframeWindow.__WUJIE.plugins, "windowRemoveEventListenerHook", iframeWindow, type, listener, options);
    iframeWindow.__WUJIE_EVENTLISTENER__.forEach(function(o) {
      if (o.listener === listener && o.type === type && options == o.options) {
        iframeWindow.__WUJIE_EVENTLISTENER__["delete"](o);
      }
    });
    if (appWindowAddEventListenerEvents.includes(type) || _typeof(options) === "object" && options.targetWindow) {
      var targetWindow = _typeof(options) === "object" && options.targetWindow ? options === null || options === void 0 ? void 0 : options.targetWindow : iframeWindow;
      return rawWindowRemoveEventListener.call(targetWindow, type, listener, options);
    }
    rawWindowRemoveEventListener.call(window.__WUJIE_RAW_WINDOW__ || window, type, listener, options);
  };
}
function patchIframeVariable(iframeWindow, wujie, appHostPath) {
  iframeWindow.__WUJIE = wujie;
  iframeWindow.__WUJIE_PUBLIC_PATH__ = appHostPath + "/";
  iframeWindow.$wujie = wujie.provide;
  iframeWindow.__WUJIE_RAW_WINDOW__ = iframeWindow;
}
function patchIframeHistory(iframeWindow, appHostPath, mainHostPath) {
  var history = iframeWindow.history;
  var rawHistoryPushState = history.pushState;
  var rawHistoryReplaceState = history.replaceState;
  history.pushState = function(data2, title, url) {
    var baseUrl = mainHostPath + iframeWindow.location.pathname + iframeWindow.location.search + iframeWindow.location.hash;
    var mainUrl = getAbsolutePath(url === null || url === void 0 ? void 0 : url.replace(appHostPath, ""), baseUrl);
    var ignoreFlag = url === void 0;
    rawHistoryPushState.call(history, data2, title, ignoreFlag ? void 0 : mainUrl);
    if (ignoreFlag)
      return;
    updateBase(iframeWindow, appHostPath, mainHostPath);
    syncUrlToWindow(iframeWindow);
  };
  history.replaceState = function(data2, title, url) {
    var baseUrl = mainHostPath + iframeWindow.location.pathname + iframeWindow.location.search + iframeWindow.location.hash;
    var mainUrl = getAbsolutePath(url === null || url === void 0 ? void 0 : url.replace(appHostPath, ""), baseUrl);
    var ignoreFlag = url === void 0;
    rawHistoryReplaceState.call(history, data2, title, ignoreFlag ? void 0 : mainUrl);
    if (ignoreFlag)
      return;
    updateBase(iframeWindow, appHostPath, mainHostPath);
    syncUrlToWindow(iframeWindow);
  };
}
function updateBase(iframeWindow, appHostPath, mainHostPath) {
  var _iframeWindow$locatio;
  var baseUrl = new URL((_iframeWindow$locatio = iframeWindow.location.href) === null || _iframeWindow$locatio === void 0 ? void 0 : _iframeWindow$locatio.replace(mainHostPath, ""), appHostPath);
  var baseElement = rawDocumentQuerySelector.call(iframeWindow.document, "base");
  if (baseElement)
    baseElement.setAttribute("href", appHostPath + baseUrl.pathname);
}
function patchWindowEffect(iframeWindow) {
  function processWindowProperty(key) {
    var value = iframeWindow[key];
    try {
      if (typeof value === "function" && !isConstructable(value)) {
        iframeWindow[key] = window[key].bind(window);
      } else {
        iframeWindow[key] = window[key];
      }
      return true;
    } catch (e) {
      warn(e.message);
      return false;
    }
  }
  Object.getOwnPropertyNames(iframeWindow).forEach(function(key) {
    if (key === "getSelection") {
      Object.defineProperty(iframeWindow, key, {
        get: function get() {
          return iframeWindow.document[key];
        }
      });
      return;
    }
    if (windowProxyProperties.includes(key)) {
      processWindowProperty(key);
      return;
    }
    windowRegWhiteList.some(function(reg) {
      if (reg.test(key) && key in iframeWindow.parent) {
        return processWindowProperty(key);
      }
      return false;
    });
  });
  var windowOnEvents = Object.getOwnPropertyNames(window).filter(function(p) {
    return /^on/.test(p);
  }).filter(function(e) {
    return !appWindowOnEvent.includes(e);
  });
  windowOnEvents.forEach(function(e) {
    var descriptor = Object.getOwnPropertyDescriptor(iframeWindow, e) || {
      enumerable: true,
      writable: true
    };
    try {
      Object.defineProperty(iframeWindow, e, {
        enumerable: descriptor.enumerable,
        configurable: true,
        get: function get() {
          return window[e];
        },
        set: descriptor.writable || descriptor.set ? function(handler) {
          window[e] = typeof handler === "function" ? handler.bind(iframeWindow) : handler;
        } : void 0
      });
    } catch (e2) {
      warn(e2.message);
    }
  });
  execHooks(iframeWindow.__WUJIE.plugins, "windowPropertyOverride", iframeWindow);
}
function recordEventListeners(iframeWindow) {
  var sandbox = iframeWindow.__WUJIE;
  iframeWindow.Node.prototype.addEventListener = function(type, handler, options) {
    var elementListenerList = sandbox.elementEventCacheMap.get(this);
    if (elementListenerList) {
      if (!elementListenerList.find(function(listener) {
        return listener.type === type && listener.handler === handler;
      })) {
        elementListenerList.push({
          type,
          handler,
          options
        });
      }
    } else
      sandbox.elementEventCacheMap.set(this, [{
        type,
        handler,
        options
      }]);
    return rawAddEventListener.call(this, type, handler, options);
  };
  iframeWindow.Node.prototype.removeEventListener = function(type, handler, options) {
    var elementListenerList = sandbox.elementEventCacheMap.get(this);
    if (elementListenerList) {
      var index = elementListenerList === null || elementListenerList === void 0 ? void 0 : elementListenerList.findIndex(function(ele) {
        return ele.type === type && ele.handler === handler;
      });
      elementListenerList.splice(index, 1);
    }
    if (!(elementListenerList !== null && elementListenerList !== void 0 && elementListenerList.length)) {
      sandbox.elementEventCacheMap["delete"](this);
    }
    return rawRemoveEventListener.call(this, type, handler, options);
  };
}
function recoverEventListeners(rootElement, iframeWindow) {
  var sandbox = iframeWindow.__WUJIE;
  var elementEventCacheMap = /* @__PURE__ */ new WeakMap();
  var ElementIterator = document.createTreeWalker(rootElement, NodeFilter.SHOW_ELEMENT, null, false);
  var nextElement = ElementIterator.currentNode;
  while (nextElement) {
    var elementListenerList = sandbox.elementEventCacheMap.get(nextElement);
    if (elementListenerList !== null && elementListenerList !== void 0 && elementListenerList.length) {
      elementEventCacheMap.set(nextElement, elementListenerList);
      elementListenerList.forEach(function(listener) {
        nextElement.addEventListener(listener.type, listener.handler, listener.options);
      });
    }
    nextElement = ElementIterator.nextNode();
  }
  sandbox.elementEventCacheMap = elementEventCacheMap;
}
function recoverDocumentListeners(oldRootElement, newRootElement, iframeWindow) {
  var sandbox = iframeWindow.__WUJIE;
  var elementEventCacheMap = /* @__PURE__ */ new WeakMap();
  var elementListenerList = sandbox.elementEventCacheMap.get(oldRootElement);
  if (elementListenerList !== null && elementListenerList !== void 0 && elementListenerList.length) {
    elementEventCacheMap.set(newRootElement, elementListenerList);
    elementListenerList.forEach(function(listener) {
      newRootElement.addEventListener(listener.type, listener.handler, listener.options);
    });
  }
  sandbox.elementEventCacheMap = elementEventCacheMap;
}
function patchEventTimeStamp(targetWindow, iframeWindow) {
  Object.defineProperty(targetWindow.Event.prototype, "timeStamp", {
    get: function get() {
      return iframeWindow.document.createEvent("Event").timeStamp;
    }
  });
}
function patchDocumentEffect(iframeWindow) {
  var sandbox = iframeWindow.__WUJIE;
  var handlerCallbackMap = /* @__PURE__ */ new WeakMap();
  var handlerTypeMap = /* @__PURE__ */ new WeakMap();
  iframeWindow.Document.prototype.addEventListener = function(type, handler, options) {
    if (!handler)
      return;
    var callback = handlerCallbackMap.get(handler);
    var typeList = handlerTypeMap.get(handler);
    if (!callback) {
      callback = typeof handler === "function" ? handler.bind(this) : handler;
      handlerCallbackMap.set(handler, callback);
    }
    if (typeList) {
      if (!typeList.includes(type))
        typeList.push(type);
    } else {
      handlerTypeMap.set(handler, [type]);
    }
    execHooks(iframeWindow.__WUJIE.plugins, "documentAddEventListenerHook", iframeWindow, type, callback, options);
    if (appDocumentAddEventListenerEvents.includes(type)) {
      return rawAddEventListener.call(this, type, callback, options);
    }
    if (sandbox.degrade)
      return sandbox.document.addEventListener(type, callback, options);
    if (mainDocumentAddEventListenerEvents.includes(type))
      return window.document.addEventListener(type, callback, options);
    if (mainAndAppAddEventListenerEvents.includes(type)) {
      window.document.addEventListener(type, callback, options);
      sandbox.shadowRoot.addEventListener(type, callback, options);
      return;
    }
    sandbox.shadowRoot.addEventListener(type, callback, options);
  };
  iframeWindow.Document.prototype.removeEventListener = function(type, handler, options) {
    var callback = handlerCallbackMap.get(handler);
    var typeList = handlerTypeMap.get(handler);
    if (callback) {
      if (typeList !== null && typeList !== void 0 && typeList.includes(type)) {
        typeList.splice(typeList.indexOf(type), 1);
        if (!typeList.length) {
          handlerCallbackMap["delete"](handler);
          handlerTypeMap["delete"](handler);
        }
      }
      execHooks(iframeWindow.__WUJIE.plugins, "documentRemoveEventListenerHook", iframeWindow, type, callback, options);
      if (appDocumentAddEventListenerEvents.includes(type)) {
        return rawRemoveEventListener.call(this, type, callback, options);
      }
      if (sandbox.degrade)
        return sandbox.document.removeEventListener(type, callback, options);
      if (mainDocumentAddEventListenerEvents.includes(type)) {
        return window.document.removeEventListener(type, callback, options);
      }
      if (mainAndAppAddEventListenerEvents.includes(type)) {
        window.document.removeEventListener(type, callback, options);
        sandbox.shadowRoot.removeEventListener(type, callback, options);
        return;
      }
      sandbox.shadowRoot.removeEventListener(type, callback, options);
    }
  };
  var elementOnEvents = Object.keys(iframeWindow.HTMLElement.prototype).filter(function(ele) {
    return /^on/.test(ele);
  });
  var documentOnEvent = Object.keys(iframeWindow.Document.prototype).filter(function(ele) {
    return /^on/.test(ele);
  }).filter(function(ele) {
    return !appDocumentOnEvents.includes(ele);
  });
  elementOnEvents.filter(function(e) {
    return documentOnEvent.includes(e);
  }).forEach(function(e) {
    var descriptor = Object.getOwnPropertyDescriptor(iframeWindow.Document.prototype, e) || {
      enumerable: true,
      writable: true
    };
    try {
      Object.defineProperty(iframeWindow.Document.prototype, e, {
        enumerable: descriptor.enumerable,
        configurable: true,
        get: function get() {
          return sandbox.degrade ? sandbox.document[e] : sandbox.shadowRoot.firstElementChild[e];
        },
        set: descriptor.writable || descriptor.set ? function(handler) {
          var val = typeof handler === "function" ? handler.bind(iframeWindow.document) : handler;
          sandbox.degrade ? sandbox.document[e] = val : sandbox.shadowRoot.firstElementChild[e] = val;
        } : void 0
      });
    } catch (e2) {
      warn(e2.message);
    }
  });
  var ownerProperties = documentProxyProperties.ownerProperties, modifyProperties = documentProxyProperties.modifyProperties, shadowProperties = documentProxyProperties.shadowProperties, shadowMethods = documentProxyProperties.shadowMethods, documentProperties = documentProxyProperties.documentProperties, documentMethods = documentProxyProperties.documentMethods, documentEvents = documentProxyProperties.documentEvents;
  modifyProperties.concat(shadowProperties, shadowMethods, documentProperties, documentMethods).forEach(function(propKey) {
    var descriptor = Object.getOwnPropertyDescriptor(iframeWindow.Document.prototype, propKey) || {
      enumerable: true,
      writable: true
    };
    try {
      Object.defineProperty(iframeWindow.Document.prototype, propKey, {
        enumerable: descriptor.enumerable,
        configurable: true,
        get: function get() {
          return sandbox.proxyDocument[propKey];
        },
        set: void 0
      });
    } catch (e) {
      warn(e.message);
    }
  });
  documentEvents.forEach(function(propKey) {
    var descriptor = Object.getOwnPropertyDescriptor(iframeWindow.Document.prototype, propKey) || {
      enumerable: true,
      writable: true
    };
    try {
      Object.defineProperty(iframeWindow.Document.prototype, propKey, {
        enumerable: descriptor.enumerable,
        configurable: true,
        get: function get() {
          return (sandbox.degrade ? sandbox : window).document[propKey];
        },
        set: descriptor.writable || descriptor.set ? function(handler) {
          (sandbox.degrade ? sandbox : window).document[propKey] = typeof handler === "function" ? handler.bind(iframeWindow.document) : handler;
        } : void 0
      });
    } catch (e) {
      warn(e.message);
    }
  });
  ownerProperties.forEach(function(propKey) {
    Object.defineProperty(iframeWindow.document, propKey, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return sandbox.proxyDocument[propKey];
      },
      set: void 0
    });
  });
  execHooks(iframeWindow.__WUJIE.plugins, "documentPropertyOverride", iframeWindow);
}
function patchNodeEffect(iframeWindow) {
  var rawGetRootNode = iframeWindow.Node.prototype.getRootNode;
  var rawAppendChild2 = iframeWindow.Node.prototype.appendChild;
  var rawInsertRule = iframeWindow.Node.prototype.insertBefore;
  iframeWindow.Node.prototype.getRootNode = function(options) {
    var rootNode = rawGetRootNode.call(this, options);
    if (rootNode === iframeWindow.__WUJIE.shadowRoot)
      return iframeWindow.document;
    else
      return rootNode;
  };
  iframeWindow.Node.prototype.appendChild = function(node) {
    var res = rawAppendChild2.call(this, node);
    patchElementEffect(node, iframeWindow);
    return res;
  };
  iframeWindow.Node.prototype.insertBefore = function(node, child) {
    var res = rawInsertRule.call(this, node, child);
    patchElementEffect(node, iframeWindow);
    return res;
  };
}
function patchRelativeUrlEffect(iframeWindow) {
  fixElementCtrSrcOrHref(iframeWindow, iframeWindow.HTMLImageElement, "src");
  fixElementCtrSrcOrHref(iframeWindow, iframeWindow.HTMLAnchorElement, "href");
  fixElementCtrSrcOrHref(iframeWindow, iframeWindow.HTMLSourceElement, "src");
  fixElementCtrSrcOrHref(iframeWindow, iframeWindow.HTMLLinkElement, "href");
  fixElementCtrSrcOrHref(iframeWindow, iframeWindow.HTMLScriptElement, "src");
  fixElementCtrSrcOrHref(iframeWindow, iframeWindow.HTMLMediaElement, "src");
}
function initBase(iframeWindow, url) {
  var iframeDocument = iframeWindow.document;
  var baseElement = iframeDocument.createElement("base");
  var iframeUrlElement = anchorElementGenerator(iframeWindow.location.href);
  var appUrlElement = anchorElementGenerator(url);
  baseElement.setAttribute("href", appUrlElement.protocol + "//" + appUrlElement.host + iframeUrlElement.pathname);
  iframeDocument.head.appendChild(baseElement);
}
function initIframeDom(iframeWindow, wujie, mainHostPath, appHostPath) {
  var iframeDocument = iframeWindow.document;
  var newDoc = window.document.implementation.createHTMLDocument("");
  var newDocumentElement = iframeDocument.importNode(newDoc.documentElement, true);
  iframeDocument.documentElement ? iframeDocument.replaceChild(newDocumentElement, iframeDocument.documentElement) : iframeDocument.appendChild(newDocumentElement);
  iframeWindow.__WUJIE_RAW_DOCUMENT_HEAD__ = iframeDocument.head;
  iframeWindow.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__ = iframeWindow.Document.prototype.querySelector;
  iframeWindow.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__ = iframeWindow.Document.prototype.querySelectorAll;
  iframeWindow.__WUJIE_RAW_DOCUMENT_CREATE_ELEMENT__ = iframeWindow.Document.prototype.createElement;
  iframeWindow.__WUJIE_RAW_DOCUMENT_CREATE_TEXT_NODE__ = iframeWindow.Document.prototype.createTextNode;
  initBase(iframeWindow, wujie.url);
  patchIframeHistory(iframeWindow, appHostPath, mainHostPath);
  patchIframeEvents(iframeWindow);
  if (wujie.degrade)
    recordEventListeners(iframeWindow);
  syncIframeUrlToWindow(iframeWindow);
  patchWindowEffect(iframeWindow);
  patchDocumentEffect(iframeWindow);
  patchNodeEffect(iframeWindow);
  patchRelativeUrlEffect(iframeWindow);
}
function stopIframeLoading(iframeWindow) {
  var oldDoc = iframeWindow.document;
  return new Promise(function(resolve) {
    function loop() {
      setTimeout(function() {
        var newDoc;
        try {
          newDoc = iframeWindow.document;
        } catch (err) {
          newDoc = null;
        }
        if (!newDoc || newDoc == oldDoc) {
          loop();
        } else {
          iframeWindow.stop ? iframeWindow.stop() : iframeWindow.document.execCommand("Stop");
          resolve();
        }
      }, 1);
    }
    loop();
  });
}
function patchElementEffect(element, iframeWindow) {
  var proxyLocation = iframeWindow.__WUJIE.proxyLocation;
  if (element._hasPatch)
    return;
  try {
    Object.defineProperties(element, {
      baseURI: {
        configurable: true,
        get: function get() {
          return proxyLocation.protocol + "//" + proxyLocation.host + proxyLocation.pathname;
        },
        set: void 0
      },
      ownerDocument: {
        configurable: true,
        get: function get() {
          return iframeWindow.document;
        }
      },
      _hasPatch: {
        get: function get() {
          return true;
        }
      }
    });
  } catch (error2) {
    console.warn(error2);
  }
  execHooks(iframeWindow.__WUJIE.plugins, "patchElementHook", element, iframeWindow);
}
function syncIframeUrlToWindow(iframeWindow) {
  iframeWindow.addEventListener("hashchange", function() {
    return syncUrlToWindow(iframeWindow);
  });
  iframeWindow.addEventListener("popstate", function() {
    syncUrlToWindow(iframeWindow);
  });
}
function insertScriptToIframe(scriptResult, iframeWindow, rawElement) {
  var _ref = scriptResult, src = _ref.src, module = _ref.module, content = _ref.content, crossorigin = _ref.crossorigin, crossoriginType = _ref.crossoriginType, async = _ref.async, attrs = _ref.attrs, callback = _ref.callback, onload = _ref.onload;
  var scriptElement = iframeWindow.document.createElement("script");
  var nextScriptElement = iframeWindow.document.createElement("script");
  var _iframeWindow$__WUJIE = iframeWindow.__WUJIE, replace = _iframeWindow$__WUJIE.replace, plugins = _iframeWindow$__WUJIE.plugins, proxyLocation = _iframeWindow$__WUJIE.proxyLocation;
  var jsLoader = getJsLoader({
    plugins,
    replace
  });
  var code = jsLoader(content, src, getCurUrl(proxyLocation));
  attrs && Object.keys(attrs).filter(function(key) {
    return !Object.keys(scriptResult).includes(key);
  }).forEach(function(key) {
    return scriptElement.setAttribute(key, String(attrs[key]));
  });
  if (content) {
    if (!iframeWindow.__WUJIE.degrade && !module) {
      code = "(function(window, self, global, location) {\n      ".concat(code, "\n}).bind(window.__WUJIE.proxy)(\n  window.__WUJIE.proxy,\n  window.__WUJIE.proxy,\n  window.__WUJIE.proxy,\n  window.__WUJIE.proxyLocation,\n);");
    }
    var descriptor = Object.getOwnPropertyDescriptor(scriptElement, "src");
    if (descriptor !== null && descriptor !== void 0 && descriptor.configurable || !descriptor) {
      try {
        Object.defineProperty(scriptElement, "src", {
          get: function get() {
            return src || "";
          }
        });
      } catch (error2) {
        console.warn(error2);
      }
    }
  } else {
    src && scriptElement.setAttribute("src", src);
    crossorigin && scriptElement.setAttribute("crossorigin", crossoriginType);
  }
  module && scriptElement.setAttribute("type", "module");
  scriptElement.textContent = code || "";
  nextScriptElement.textContent = "if(window.__WUJIE.execQueue && window.__WUJIE.execQueue.length){ window.__WUJIE.execQueue.shift()()}";
  var container = rawDocumentQuerySelector.call(iframeWindow.document, "head");
  var execNextScript = function execNextScript2() {
    return !async && container.appendChild(nextScriptElement);
  };
  var afterExecScript = function afterExecScript2() {
    onload === null || onload === void 0 || onload();
    execNextScript();
  };
  if (/^<!DOCTYPE html/i.test(code)) {
    error(WUJIE_TIPS_SCRIPT_ERROR_REQUESTED, scriptResult);
    return execNextScript();
  }
  if (rawElement) {
    setTagToScript(scriptElement, getTagFromScript(rawElement));
  }
  var isOutlineScript = !content && src;
  if (isOutlineScript) {
    scriptElement.onload = afterExecScript;
    scriptElement.onerror = afterExecScript;
  }
  container.appendChild(scriptElement);
  callback === null || callback === void 0 || callback(iframeWindow);
  execHooks(plugins, "appendOrInsertElementHook", scriptElement, iframeWindow, rawElement);
  !isOutlineScript && afterExecScript();
}
function renderIframeReplaceApp(src, element) {
  var degradeAttrs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var iframe = window.document.createElement("iframe");
  var defaultStyle = "height:100%;width:100%";
  setAttrsToElement(iframe, _objectSpread5(_objectSpread5({}, degradeAttrs), {}, {
    src,
    style: [defaultStyle, degradeAttrs.style].join(";")
  }));
  renderElementToContainer(iframe, element);
}
function iframeGenerator(sandbox, attrs, mainHostPath, appHostPath, appRoutePath) {
  var iframe = window.document.createElement("iframe");
  var attrsMerge = _objectSpread5(_objectSpread5({
    src: mainHostPath,
    style: "display: none"
  }, attrs), {}, _defineProperty({
    name: sandbox.id
  }, WUJIE_DATA_FLAG, ""));
  setAttrsToElement(iframe, attrsMerge);
  window.document.body.appendChild(iframe);
  var iframeWindow = iframe.contentWindow;
  patchIframeVariable(iframeWindow, sandbox, appHostPath);
  sandbox.iframeReady = stopIframeLoading(iframeWindow).then(function() {
    if (!iframeWindow.__WUJIE) {
      patchIframeVariable(iframeWindow, sandbox, appHostPath);
    }
    initIframeDom(iframeWindow, sandbox, mainHostPath, appHostPath);
    if (!isMatchSyncQueryById(iframeWindow.__WUJIE.id)) {
      iframeWindow.history.replaceState(null, "", mainHostPath + appRoutePath);
    }
  });
  return iframe;
}

// node_modules/wujie/esm/proxy.js
function locationHrefSet(iframe, value, appHostPath) {
  var _iframe$contentWindow = iframe.contentWindow.__WUJIE, shadowRoot = _iframe$contentWindow.shadowRoot, id = _iframe$contentWindow.id, degrade = _iframe$contentWindow.degrade, document2 = _iframe$contentWindow.document, degradeAttrs = _iframe$contentWindow.degradeAttrs;
  var url = value;
  if (!/^http/.test(url)) {
    var hrefElement = anchorElementGenerator(url);
    url = appHostPath + hrefElement.pathname + hrefElement.search + hrefElement.hash;
    hrefElement = null;
  }
  iframe.contentWindow.__WUJIE.hrefFlag = true;
  if (degrade) {
    var iframeBody = rawDocumentQuerySelector.call(iframe.contentDocument, "body");
    renderElementToContainer(document2.documentElement, iframeBody);
    renderIframeReplaceApp(window.decodeURIComponent(url), getDegradeIframe(id).parentElement, degradeAttrs);
  } else
    renderIframeReplaceApp(url, shadowRoot.host.parentElement, degradeAttrs);
  pushUrlToWindow(id, url);
  return true;
}
function proxyGenerator(iframe, urlElement, mainHostPath, appHostPath) {
  var proxyWindow = new Proxy(iframe.contentWindow, {
    get: function get(target, p) {
      if (p === "location") {
        return target.__WUJIE.proxyLocation;
      }
      if (p === "self" || p === "window" && Object.getOwnPropertyDescriptor(window, "window").get) {
        return target.__WUJIE.proxy;
      }
      if (p === "__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__" || p === "__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__") {
        return target[p];
      }
      var descriptor = Object.getOwnPropertyDescriptor(target, p);
      if ((descriptor === null || descriptor === void 0 ? void 0 : descriptor.configurable) === false && (descriptor === null || descriptor === void 0 ? void 0 : descriptor.writable) === false) {
        return target[p];
      }
      return getTargetValue(target, p);
    },
    set: function set(target, p, value) {
      checkProxyFunction(value);
      target[p] = value;
      return true;
    },
    has: function has(target, p) {
      return p in target;
    }
  });
  var proxyDocument = new Proxy({}, {
    get: function get(_fakeDocument, propKey) {
      var document2 = window.document;
      var _iframe$contentWindow2 = iframe.contentWindow.__WUJIE, shadowRoot = _iframe$contentWindow2.shadowRoot, proxyLocation2 = _iframe$contentWindow2.proxyLocation;
      if (!shadowRoot)
        stopMainAppRun();
      var rawCreateElement = iframe.contentWindow.__WUJIE_RAW_DOCUMENT_CREATE_ELEMENT__;
      var rawCreateTextNode = iframe.contentWindow.__WUJIE_RAW_DOCUMENT_CREATE_TEXT_NODE__;
      if (propKey === "createElement" || propKey === "createTextNode") {
        return new Proxy(document2[propKey], {
          apply: function apply(_createElement, _ctx, args) {
            var rawCreateMethod = propKey === "createElement" ? rawCreateElement : rawCreateTextNode;
            var element = rawCreateMethod.apply(iframe.contentDocument, args);
            patchElementEffect(element, iframe.contentWindow);
            return element;
          }
        });
      }
      if (propKey === "documentURI" || propKey === "URL") {
        return proxyLocation2.href;
      }
      if (propKey === "getElementsByTagName" || propKey === "getElementsByClassName" || propKey === "getElementsByName") {
        return new Proxy(shadowRoot.querySelectorAll, {
          apply: function apply(querySelectorAll, _ctx, args) {
            var arg = args[0];
            if (_ctx !== iframe.contentDocument) {
              return _ctx[propKey].apply(_ctx, args);
            }
            if (propKey === "getElementsByTagName" && arg === "script") {
              return iframe.contentDocument.scripts;
            }
            if (propKey === "getElementsByClassName")
              arg = "." + arg;
            if (propKey === "getElementsByName")
              arg = '[name="'.concat(arg, '"]');
            var res;
            try {
              res = querySelectorAll.call(shadowRoot, arg);
            } catch (error2) {
              res = [];
            }
            return res;
          }
        });
      }
      if (propKey === "getElementById") {
        return new Proxy(shadowRoot.querySelector, {
          // case document.querySelector.call
          apply: function apply(target, ctx, args) {
            if (ctx !== iframe.contentDocument) {
              var _ctx$propKey;
              return (_ctx$propKey = ctx[propKey]) === null || _ctx$propKey === void 0 ? void 0 : _ctx$propKey.apply(ctx, args);
            }
            try {
              return target.call(shadowRoot, '[id="'.concat(args[0], '"]')) || iframe.contentWindow.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__.call(iframe.contentWindow.document, "#".concat(args[0]));
            } catch (error2) {
              warn(WUJIE_TIPS_GET_ELEMENT_BY_ID);
              return null;
            }
          }
        });
      }
      if (propKey === "querySelector" || propKey === "querySelectorAll") {
        var rawPropMap = {
          querySelector: "__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__",
          querySelectorAll: "__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__"
        };
        return new Proxy(shadowRoot[propKey], {
          apply: function apply(target, ctx, args) {
            if (ctx !== iframe.contentDocument) {
              var _ctx$propKey2;
              return (_ctx$propKey2 = ctx[propKey]) === null || _ctx$propKey2 === void 0 ? void 0 : _ctx$propKey2.apply(ctx, args);
            }
            return target.apply(shadowRoot, args) || (args[0] === "base" ? null : iframe.contentWindow[rawPropMap[propKey]].call(iframe.contentWindow.document, args[0]));
          }
        });
      }
      if (propKey === "documentElement" || propKey === "scrollingElement")
        return shadowRoot.firstElementChild;
      if (propKey === "forms")
        return shadowRoot.querySelectorAll("form");
      if (propKey === "images")
        return shadowRoot.querySelectorAll("img");
      if (propKey === "links")
        return shadowRoot.querySelectorAll("a");
      var ownerProperties = documentProxyProperties.ownerProperties, shadowProperties = documentProxyProperties.shadowProperties, shadowMethods = documentProxyProperties.shadowMethods, documentProperties = documentProxyProperties.documentProperties, documentMethods = documentProxyProperties.documentMethods;
      if (ownerProperties.concat(shadowProperties).includes(propKey.toString())) {
        if (propKey === "activeElement" && shadowRoot.activeElement === null)
          return shadowRoot.body;
        return shadowRoot[propKey];
      }
      if (shadowMethods.includes(propKey.toString())) {
        var _getTargetValue;
        return (_getTargetValue = getTargetValue(shadowRoot, propKey)) !== null && _getTargetValue !== void 0 ? _getTargetValue : getTargetValue(document2, propKey);
      }
      if (documentProperties.includes(propKey.toString())) {
        return document2[propKey];
      }
      if (documentMethods.includes(propKey.toString())) {
        return getTargetValue(document2, propKey);
      }
    }
  });
  var proxyLocation = new Proxy({}, {
    get: function get(_fakeLocation, propKey) {
      var location2 = iframe.contentWindow.location;
      if (propKey === "host" || propKey === "hostname" || propKey === "protocol" || propKey === "port" || propKey === "origin") {
        return urlElement[propKey];
      }
      if (propKey === "href") {
        return location2[propKey].replace(mainHostPath, appHostPath);
      }
      if (propKey === "reload") {
        warn(WUJIE_TIPS_RELOAD_DISABLED);
        return function() {
          return null;
        };
      }
      if (propKey === "replace") {
        return new Proxy(location2[propKey], {
          apply: function apply(replace, _ctx, args) {
            var _args$;
            return replace.call(location2, (_args$ = args[0]) === null || _args$ === void 0 ? void 0 : _args$.replace(appHostPath, mainHostPath));
          }
        });
      }
      return getTargetValue(location2, propKey);
    },
    set: function set(_fakeLocation, propKey, value) {
      if (propKey === "href") {
        return locationHrefSet(iframe, value, appHostPath);
      }
      iframe.contentWindow.location[propKey] = value;
      return true;
    },
    ownKeys: function ownKeys8() {
      return Object.keys(iframe.contentWindow.location).filter(function(key) {
        return key !== "reload";
      });
    },
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(_target, key) {
      return {
        enumerable: true,
        configurable: true,
        value: this[key]
      };
    }
  });
  return {
    proxyWindow,
    proxyDocument,
    proxyLocation
  };
}
function localGenerator(iframe, urlElement, mainHostPath, appHostPath) {
  var proxyDocument = {};
  var sandbox = iframe.contentWindow.__WUJIE;
  Object.defineProperties(proxyDocument, {
    createElement: {
      get: function get() {
        return function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var element = iframe.contentWindow.__WUJIE_RAW_DOCUMENT_CREATE_ELEMENT__.apply(iframe.contentDocument, args);
          patchElementEffect(element, iframe.contentWindow);
          return element;
        };
      }
    },
    createTextNode: {
      get: function get() {
        return function() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          var element = iframe.contentWindow.__WUJIE_RAW_DOCUMENT_CREATE_TEXT_NODE__.apply(iframe.contentDocument, args);
          patchElementEffect(element, iframe.contentWindow);
          return element;
        };
      }
    },
    documentURI: {
      get: function get() {
        return sandbox.proxyLocation.href;
      }
    },
    URL: {
      get: function get() {
        return sandbox.proxyLocation.href;
      }
    },
    getElementsByTagName: {
      get: function get() {
        return function() {
          var tagName = arguments.length <= 0 ? void 0 : arguments[0];
          if (tagName === "script") {
            return iframe.contentDocument.scripts;
          }
          return sandbox.document.getElementsByTagName(tagName);
        };
      }
    }
  });
  var modifyLocalProperties = documentProxyProperties.modifyLocalProperties, modifyProperties = documentProxyProperties.modifyProperties, ownerProperties = documentProxyProperties.ownerProperties, shadowProperties = documentProxyProperties.shadowProperties, shadowMethods = documentProxyProperties.shadowMethods, documentProperties = documentProxyProperties.documentProperties, documentMethods = documentProxyProperties.documentMethods;
  modifyProperties.filter(function(key) {
    return !modifyLocalProperties.includes(key);
  }).concat(ownerProperties, shadowProperties, shadowMethods, documentProperties, documentMethods).forEach(function(key) {
    Object.defineProperty(proxyDocument, key, {
      get: function get() {
        var _sandbox$document;
        var value = (_sandbox$document = sandbox.document) === null || _sandbox$document === void 0 ? void 0 : _sandbox$document[key];
        return isCallable(value) ? value.bind(sandbox.document) : value;
      }
    });
  });
  var proxyLocation = {};
  var location2 = iframe.contentWindow.location;
  var locationKeys = Object.keys(location2);
  var constantKey = ["host", "hostname", "port", "protocol", "port"];
  constantKey.forEach(function(key) {
    proxyLocation[key] = urlElement[key];
  });
  Object.defineProperties(proxyLocation, {
    href: {
      get: function get() {
        return location2.href.replace(mainHostPath, appHostPath);
      },
      set: function set(value) {
        locationHrefSet(iframe, value, appHostPath);
      }
    },
    reload: {
      get: function get() {
        warn(WUJIE_TIPS_RELOAD_DISABLED);
        return function() {
          return null;
        };
      }
    }
  });
  locationKeys.filter(function(key) {
    return !constantKey.concat(["href", "reload"]).includes(key);
  }).forEach(function(key) {
    Object.defineProperty(proxyLocation, key, {
      get: function get() {
        return isCallable(location2[key]) ? location2[key].bind(location2) : location2[key];
      }
    });
  });
  return {
    proxyDocument,
    proxyLocation
  };
}

// node_modules/wujie/esm/event.js
var appEventObjMap = window.__POWERED_BY_WUJIE__ ? window.__WUJIE.inject.appEventObjMap : /* @__PURE__ */ new Map();
var EventBus = function() {
  function EventBus2(id) {
    _classCallCheck(this, EventBus2);
    this.id = id;
    this.$clear();
    if (!appEventObjMap.get(this.id)) {
      appEventObjMap.set(this.id, {});
    }
    this.eventObj = appEventObjMap.get(this.id);
  }
  _createClass(EventBus2, [{
    key: "$on",
    value: function $on(event, fn) {
      var cbs = this.eventObj[event];
      if (!cbs) {
        this.eventObj[event] = [fn];
        return this;
      }
      if (!cbs.includes(fn))
        cbs.push(fn);
      return this;
    }
    /** 任何$emit都会导致监听函数触发，第一个参数为事件名，后续的参数为$emit的参数 */
  }, {
    key: "$onAll",
    value: function $onAll(fn) {
      return this.$on(WUJIE_ALL_EVENT, fn);
    }
    // 一次性监听事件
  }, {
    key: "$once",
    value: function $once(event, fn) {
      var on = (function() {
        this.$off(event, on);
        fn.apply(void 0, arguments);
      }).bind(this);
      this.$on(event, on);
    }
    // 取消监听
  }, {
    key: "$off",
    value: function $off(event, fn) {
      var cbs = this.eventObj[event];
      if (!event || !cbs || !cbs.length) {
        warn("".concat(event, " ").concat(WUJIE_TIPS_NO_SUBJECT));
        return this;
      }
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn) {
          cbs.splice(i, 1);
          break;
        }
      }
      return this;
    }
    // 取消监听$onAll
  }, {
    key: "$offAll",
    value: function $offAll(fn) {
      return this.$off(WUJIE_ALL_EVENT, fn);
    }
    // 发送事件
  }, {
    key: "$emit",
    value: function $emit(event) {
      var cbs = [];
      var allCbs = [];
      appEventObjMap.forEach(function(eventObj) {
        if (eventObj[event])
          cbs = cbs.concat(eventObj[event]);
        if (eventObj[WUJIE_ALL_EVENT])
          allCbs = allCbs.concat(eventObj[WUJIE_ALL_EVENT]);
      });
      if (!event || cbs.length === 0 && allCbs.length === 0) {
        warn("".concat(event, " ").concat(WUJIE_TIPS_NO_SUBJECT));
      } else {
        try {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          for (var i = 0, l = cbs.length; i < l; i++) {
            var _cbs;
            (_cbs = cbs)[i].apply(_cbs, args);
          }
          for (var _i = 0, _l = allCbs.length; _i < _l; _i++) {
            var _allCbs;
            (_allCbs = allCbs)[_i].apply(_allCbs, [event].concat(args));
          }
        } catch (e) {
          error(e);
        }
      }
      return this;
    }
    // 清空当前所有的监听事件
  }, {
    key: "$clear",
    value: function $clear() {
      var _appEventObjMap$get;
      var eventObj = (_appEventObjMap$get = appEventObjMap.get(this.id)) !== null && _appEventObjMap$get !== void 0 ? _appEventObjMap$get : {};
      var events = Object.keys(eventObj);
      events.forEach(function(event) {
        return delete eventObj[event];
      });
      return this;
    }
  }]);
  return EventBus2;
}();

// node_modules/wujie/esm/sandbox.js
function ownKeys6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys6(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys6(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Wujie = function() {
  function Wujie2(options) {
    _classCallCheck(this, Wujie2);
    _defineProperty(this, "elementEventCacheMap", /* @__PURE__ */ new WeakMap());
    if (window.__POWERED_BY_WUJIE__)
      this.inject = window.__WUJIE.inject;
    else {
      this.inject = {
        idToSandboxMap: idToSandboxCacheMap,
        appEventObjMap,
        mainHostPath: window.location.protocol + "//" + window.location.host
      };
    }
    var name = options.name, url = options.url, attrs = options.attrs, fiber = options.fiber, degradeAttrs = options.degradeAttrs, degrade = options.degrade, lifecycles = options.lifecycles, plugins = options.plugins;
    this.id = name;
    this.fiber = fiber;
    this.degrade = degrade || !wujieSupport;
    this.bus = new EventBus(this.id);
    this.url = url;
    this.degradeAttrs = degradeAttrs;
    this.provide = {
      bus: this.bus
    };
    this.styleSheetElements = [];
    this.execQueue = [];
    this.lifecycles = lifecycles;
    this.plugins = getPlugins(plugins);
    var _appRouteParse = appRouteParse(url), urlElement = _appRouteParse.urlElement, appHostPath = _appRouteParse.appHostPath, appRoutePath = _appRouteParse.appRoutePath;
    var mainHostPath = this.inject.mainHostPath;
    this.iframe = iframeGenerator(this, attrs, mainHostPath, appHostPath, appRoutePath);
    if (this.degrade) {
      var _localGenerator = localGenerator(this.iframe, urlElement, mainHostPath, appHostPath), proxyDocument = _localGenerator.proxyDocument, proxyLocation = _localGenerator.proxyLocation;
      this.proxyDocument = proxyDocument;
      this.proxyLocation = proxyLocation;
    } else {
      var _proxyGenerator = proxyGenerator(this.iframe, urlElement, mainHostPath, appHostPath), proxyWindow = _proxyGenerator.proxyWindow, _proxyDocument = _proxyGenerator.proxyDocument, _proxyLocation = _proxyGenerator.proxyLocation;
      this.proxy = proxyWindow;
      this.proxyDocument = _proxyDocument;
      this.proxyLocation = _proxyLocation;
    }
    this.provide.location = this.proxyLocation;
    addSandboxCacheWithWujie(this.id, this);
  }
  _createClass(Wujie2, [{
    key: "active",
    value: (
      /** $wujie对象，提供给子应用的接口 */
      /** 子应用嵌套场景，父应用传递给子应用的数据 */
      /** 激活子应用
       * 1、同步路由
       * 2、动态修改iframe的fetch
       * 3、准备shadow
       * 4、准备子应用注入
       */
      function() {
        var _active = _asyncToGenerator(import_regenerator3.default.mark(function _callee(options) {
          var _this = this;
          var sync, url, el, template, props, alive, prefix, fetch, replace, iframeWindow, iframeFetch, iframeBody, _initRenderIframeAndC, iframe, container, _iframeBody;
          return import_regenerator3.default.wrap(function _callee$(_context) {
            while (1)
              switch (_context.prev = _context.next) {
                case 0:
                  sync = options.sync, url = options.url, el = options.el, template = options.template, props = options.props, alive = options.alive, prefix = options.prefix, fetch = options.fetch, replace = options.replace;
                  this.url = url;
                  this.sync = sync;
                  this.alive = alive;
                  this.hrefFlag = false;
                  this.prefix = prefix !== null && prefix !== void 0 ? prefix : this.prefix;
                  this.replace = replace !== null && replace !== void 0 ? replace : this.replace;
                  this.provide.props = props !== null && props !== void 0 ? props : this.provide.props;
                  this.activeFlag = true;
                  _context.next = 11;
                  return this.iframeReady;
                case 11:
                  iframeWindow = this.iframe.contentWindow;
                  iframeFetch = fetch ? function(input, init) {
                    return fetch(typeof input === "string" ? getAbsolutePath(input, _this.proxyLocation.href) : input, init);
                  } : this.fetch;
                  if (iframeFetch) {
                    iframeWindow.fetch = iframeFetch;
                    this.fetch = iframeFetch;
                  }
                  if (this.execFlag && this.alive) {
                    syncUrlToWindow(iframeWindow);
                  } else {
                    syncUrlToIframe(iframeWindow);
                    syncUrlToWindow(iframeWindow);
                  }
                  this.template = template !== null && template !== void 0 ? template : this.template;
                  if (!this.degrade) {
                    _context.next = 38;
                    break;
                  }
                  iframeBody = rawDocumentQuerySelector.call(iframeWindow.document, "body");
                  _initRenderIframeAndC = initRenderIframeAndContainer(this.id, el !== null && el !== void 0 ? el : iframeBody, this.degradeAttrs), iframe = _initRenderIframeAndC.iframe, container = _initRenderIframeAndC.container;
                  this.el = container;
                  if (el)
                    clearChild(iframeBody);
                  patchEventTimeStamp(iframe.contentWindow, iframeWindow);
                  iframe.contentWindow.onunload = function() {
                    _this.unmount();
                  };
                  if (!this.document) {
                    _context.next = 34;
                    break;
                  }
                  if (!this.alive) {
                    _context.next = 29;
                    break;
                  }
                  iframe.contentDocument.replaceChild(this.document.documentElement, iframe.contentDocument.documentElement);
                  recoverEventListeners(iframe.contentDocument.documentElement, iframeWindow);
                  _context.next = 32;
                  break;
                case 29:
                  _context.next = 31;
                  return renderTemplateToIframe(iframe.contentDocument, this.iframe.contentWindow, this.template);
                case 31:
                  recoverDocumentListeners(this.document.documentElement, iframe.contentDocument.documentElement, iframeWindow);
                case 32:
                  _context.next = 36;
                  break;
                case 34:
                  _context.next = 36;
                  return renderTemplateToIframe(iframe.contentDocument, this.iframe.contentWindow, this.template);
                case 36:
                  this.document = iframe.contentDocument;
                  return _context.abrupt("return");
                case 38:
                  if (!this.shadowRoot) {
                    _context.next = 44;
                    break;
                  }
                  this.el = renderElementToContainer(this.shadowRoot.host, el);
                  if (!this.alive) {
                    _context.next = 42;
                    break;
                  }
                  return _context.abrupt("return");
                case 42:
                  _context.next = 46;
                  break;
                case 44:
                  _iframeBody = rawDocumentQuerySelector.call(iframeWindow.document, "body");
                  this.el = renderElementToContainer(createWujieWebComponent(this.id), el !== null && el !== void 0 ? el : _iframeBody);
                case 46:
                  _context.next = 48;
                  return renderTemplateToShadowRoot(this.shadowRoot, iframeWindow, this.template);
                case 48:
                  this.patchCssRules();
                  this.provide.shadowRoot = this.shadowRoot;
                case 50:
                case "end":
                  return _context.stop();
              }
          }, _callee, this);
        }));
        function active(_x) {
          return _active.apply(this, arguments);
        }
        return active;
      }()
    )
  }, {
    key: "requestIdleCallback",
    value: function requestIdleCallback2(callback) {
      var _this2 = this;
      return requestIdleCallback(function() {
        if (!_this2.iframe)
          return;
        callback.apply(_this2);
      });
    }
    /** 启动子应用
     * 1、运行js
     * 2、处理兼容样式
     */
  }, {
    key: "start",
    value: function() {
      var _start = _asyncToGenerator(import_regenerator3.default.mark(function _callee2(getExternalScripts) {
        var _this3 = this;
        var scriptResultList, iframeWindow, beforeScriptResultList, afterScriptResultList, syncScriptResultList, asyncScriptResultList, deferScriptResultList, domContentLoadedTrigger, domLoadedTrigger;
        return import_regenerator3.default.wrap(function _callee2$(_context2) {
          while (1)
            switch (_context2.prev = _context2.next) {
              case 0:
                this.execFlag = true;
                _context2.next = 3;
                return getExternalScripts();
              case 3:
                scriptResultList = _context2.sent;
                if (this.iframe) {
                  _context2.next = 6;
                  break;
                }
                return _context2.abrupt("return");
              case 6:
                iframeWindow = this.iframe.contentWindow;
                iframeWindow.__POWERED_BY_WUJIE__ = true;
                beforeScriptResultList = getPresetLoaders("jsBeforeLoaders", this.plugins);
                afterScriptResultList = getPresetLoaders("jsAfterLoaders", this.plugins);
                syncScriptResultList = [];
                asyncScriptResultList = [];
                deferScriptResultList = [];
                scriptResultList.forEach(function(scriptResult) {
                  if (scriptResult.defer)
                    deferScriptResultList.push(scriptResult);
                  else if (scriptResult.async)
                    asyncScriptResultList.push(scriptResult);
                  else
                    syncScriptResultList.push(scriptResult);
                });
                beforeScriptResultList.forEach(function(beforeScriptResult) {
                  _this3.execQueue.push(function() {
                    return _this3.fiber ? _this3.requestIdleCallback(function() {
                      return insertScriptToIframe(beforeScriptResult, iframeWindow);
                    }) : insertScriptToIframe(beforeScriptResult, iframeWindow);
                  });
                });
                syncScriptResultList.concat(deferScriptResultList).forEach(function(scriptResult) {
                  _this3.execQueue.push(function() {
                    return scriptResult.contentPromise.then(function(content) {
                      return _this3.fiber ? _this3.requestIdleCallback(function() {
                        return insertScriptToIframe(_objectSpread6(_objectSpread6({}, scriptResult), {}, {
                          content
                        }), iframeWindow);
                      }) : insertScriptToIframe(_objectSpread6(_objectSpread6({}, scriptResult), {}, {
                        content
                      }), iframeWindow);
                    });
                  });
                });
                asyncScriptResultList.forEach(function(scriptResult) {
                  scriptResult.contentPromise.then(function(content) {
                    _this3.fiber ? _this3.requestIdleCallback(function() {
                      return insertScriptToIframe(_objectSpread6(_objectSpread6({}, scriptResult), {}, {
                        content
                      }), iframeWindow);
                    }) : insertScriptToIframe(_objectSpread6(_objectSpread6({}, scriptResult), {}, {
                      content
                    }), iframeWindow);
                  });
                });
                this.execQueue.push(this.fiber ? function() {
                  return _this3.requestIdleCallback(function() {
                    return _this3.mount();
                  });
                } : function() {
                  return _this3.mount();
                });
                domContentLoadedTrigger = function domContentLoadedTrigger2() {
                  var _this3$execQueue$shif;
                  eventTrigger(iframeWindow.document, "DOMContentLoaded");
                  eventTrigger(iframeWindow, "DOMContentLoaded");
                  (_this3$execQueue$shif = _this3.execQueue.shift()) === null || _this3$execQueue$shif === void 0 || _this3$execQueue$shif();
                };
                this.execQueue.push(this.fiber ? function() {
                  return _this3.requestIdleCallback(domContentLoadedTrigger);
                } : domContentLoadedTrigger);
                afterScriptResultList.forEach(function(afterScriptResult) {
                  _this3.execQueue.push(function() {
                    return _this3.fiber ? _this3.requestIdleCallback(function() {
                      return insertScriptToIframe(afterScriptResult, iframeWindow);
                    }) : insertScriptToIframe(afterScriptResult, iframeWindow);
                  });
                });
                domLoadedTrigger = function domLoadedTrigger2() {
                  var _this3$execQueue$shif2;
                  eventTrigger(iframeWindow.document, "readystatechange");
                  eventTrigger(iframeWindow, "load");
                  (_this3$execQueue$shif2 = _this3.execQueue.shift()) === null || _this3$execQueue$shif2 === void 0 || _this3$execQueue$shif2();
                };
                this.execQueue.push(this.fiber ? function() {
                  return _this3.requestIdleCallback(domLoadedTrigger);
                } : domLoadedTrigger);
                if (this.alive || !isFunction(this.iframe.contentWindow.__WUJIE_UNMOUNT))
                  removeLoading(this.el);
                this.execQueue.shift()();
                return _context2.abrupt("return", new Promise(function(resolve) {
                  _this3.execQueue.push(function() {
                    var _this3$execQueue$shif3;
                    resolve();
                    (_this3$execQueue$shif3 = _this3.execQueue.shift()) === null || _this3$execQueue$shif3 === void 0 || _this3$execQueue$shif3();
                  });
                }));
              case 26:
              case "end":
                return _context2.stop();
            }
        }, _callee2, this);
      }));
      function start(_x2) {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }, {
    key: "mount",
    value: function mount() {
      var _this$execQueue$shift;
      if (this.mountFlag)
        return;
      if (isFunction(this.iframe.contentWindow.__WUJIE_MOUNT)) {
        var _this$lifecycles, _this$lifecycles$befo, _this$lifecycles2, _this$lifecycles2$aft;
        removeLoading(this.el);
        (_this$lifecycles = this.lifecycles) === null || _this$lifecycles === void 0 || (_this$lifecycles$befo = _this$lifecycles.beforeMount) === null || _this$lifecycles$befo === void 0 || _this$lifecycles$befo.call(_this$lifecycles, this.iframe.contentWindow);
        this.iframe.contentWindow.__WUJIE_MOUNT();
        (_this$lifecycles2 = this.lifecycles) === null || _this$lifecycles2 === void 0 || (_this$lifecycles2$aft = _this$lifecycles2.afterMount) === null || _this$lifecycles2$aft === void 0 || _this$lifecycles2$aft.call(_this$lifecycles2, this.iframe.contentWindow);
        this.mountFlag = true;
      }
      if (this.alive) {
        var _this$lifecycles3, _this$lifecycles3$act;
        (_this$lifecycles3 = this.lifecycles) === null || _this$lifecycles3 === void 0 || (_this$lifecycles3$act = _this$lifecycles3.activated) === null || _this$lifecycles3$act === void 0 || _this$lifecycles3$act.call(_this$lifecycles3, this.iframe.contentWindow);
      }
      (_this$execQueue$shift = this.execQueue.shift()) === null || _this$execQueue$shift === void 0 || _this$execQueue$shift();
    }
    /** 保活模式和使用proxyLocation.href跳转链接都不应该销毁shadow */
  }, {
    key: "unmount",
    value: function unmount() {
      this.activeFlag = false;
      clearInactiveAppUrl();
      if (this.alive) {
        var _this$lifecycles4, _this$lifecycles4$dea;
        (_this$lifecycles4 = this.lifecycles) === null || _this$lifecycles4 === void 0 || (_this$lifecycles4$dea = _this$lifecycles4.deactivated) === null || _this$lifecycles4$dea === void 0 || _this$lifecycles4$dea.call(_this$lifecycles4, this.iframe.contentWindow);
      }
      if (!this.mountFlag)
        return;
      if (isFunction(this.iframe.contentWindow.__WUJIE_UNMOUNT) && !this.alive && !this.hrefFlag) {
        var _this$lifecycles5, _this$lifecycles5$bef, _this$lifecycles6, _this$lifecycles6$aft;
        (_this$lifecycles5 = this.lifecycles) === null || _this$lifecycles5 === void 0 || (_this$lifecycles5$bef = _this$lifecycles5.beforeUnmount) === null || _this$lifecycles5$bef === void 0 || _this$lifecycles5$bef.call(_this$lifecycles5, this.iframe.contentWindow);
        this.iframe.contentWindow.__WUJIE_UNMOUNT();
        (_this$lifecycles6 = this.lifecycles) === null || _this$lifecycles6 === void 0 || (_this$lifecycles6$aft = _this$lifecycles6.afterUnmount) === null || _this$lifecycles6$aft === void 0 || _this$lifecycles6$aft.call(_this$lifecycles6, this.iframe.contentWindow);
        this.mountFlag = false;
        this.bus.$clear();
        if (!this.degrade) {
          clearChild(this.shadowRoot);
          removeEventListener(this.head);
          removeEventListener(this.body);
        }
        clearChild(this.head);
        clearChild(this.body);
      }
    }
    /** 销毁子应用 */
  }, {
    key: "destroy",
    value: function destroy2() {
      this.unmount();
      this.bus.$clear();
      this.shadowRoot = null;
      this.proxy = null;
      this.proxyDocument = null;
      this.proxyLocation = null;
      this.execQueue = null;
      this.provide = null;
      this.degradeAttrs = null;
      this.styleSheetElements = null;
      this.bus = null;
      this.replace = null;
      this.fetch = null;
      this.execFlag = null;
      this.mountFlag = null;
      this.hrefFlag = null;
      this.document = null;
      this.head = null;
      this.body = null;
      this.elementEventCacheMap = null;
      this.lifecycles = null;
      this.plugins = null;
      this.provide = null;
      this.inject = null;
      this.execQueue = null;
      this.prefix = null;
      if (this.el) {
        clearChild(this.el);
        this.el = null;
      }
      if (this.iframe) {
        var _this$iframe$parentNo;
        var _iframeWindow = this.iframe.contentWindow;
        if (_iframeWindow !== null && _iframeWindow !== void 0 && _iframeWindow.__WUJIE_EVENTLISTENER__) {
          _iframeWindow.__WUJIE_EVENTLISTENER__.forEach(function(o) {
            _iframeWindow.removeEventListener(o.type, o.listener, o.options);
          });
        }
        (_this$iframe$parentNo = this.iframe.parentNode) === null || _this$iframe$parentNo === void 0 || _this$iframe$parentNo.removeChild(this.iframe);
        this.iframe = null;
      }
      deleteWujieById(this.id);
    }
    /** 当子应用再次激活后，只运行mount函数，样式需要重新恢复 */
  }, {
    key: "rebuildStyleSheets",
    value: function rebuildStyleSheets() {
      var _this4 = this;
      if (this.styleSheetElements && this.styleSheetElements.length) {
        this.styleSheetElements.forEach(function(styleSheetElement) {
          rawElementAppendChild.call(_this4.degrade ? _this4.document.head : _this4.shadowRoot.head, styleSheetElement);
        });
      }
      this.patchCssRules();
    }
    /**
     * 子应用样式打补丁
     * 1、兼容:root选择器样式到:host选择器上
     * 2、将@font-face定义到shadowRoot外部
     */
  }, {
    key: "patchCssRules",
    value: function patchCssRules() {
      if (this.degrade)
        return;
      if (this.shadowRoot.host.hasAttribute(WUJIE_DATA_ATTACH_CSS_FLAG))
        return;
      var _getPatchStyleElement = getPatchStyleElements(Array.from(this.iframe.contentDocument.querySelectorAll("style")).map(function(styleSheetElement) {
        return styleSheetElement.sheet;
      })), _getPatchStyleElement2 = _slicedToArray(_getPatchStyleElement, 2), hostStyleSheetElement = _getPatchStyleElement2[0], fontStyleSheetElement = _getPatchStyleElement2[1];
      if (hostStyleSheetElement) {
        this.shadowRoot.head.appendChild(hostStyleSheetElement);
        this.styleSheetElements.push(hostStyleSheetElement);
      }
      if (fontStyleSheetElement) {
        this.shadowRoot.host.appendChild(fontStyleSheetElement);
      }
      (hostStyleSheetElement || fontStyleSheetElement) && this.shadowRoot.host.setAttribute(WUJIE_DATA_ATTACH_CSS_FLAG, "");
    }
  }]);
  return Wujie2;
}();

// node_modules/wujie/esm/index.js
function ownKeys7(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread7(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys7(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys7(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var bus = new EventBus(Date.now().toString());
if (window.__WUJIE && !window.__POWERED_BY_WUJIE__) {
  stopMainAppRun();
}
processAppForHrefJump();
defineWujieWebComponent();
if (!wujieSupport)
  warn(WUJIE_TIPS_NOT_SUPPORTED);
function setupApp(options) {
  if (options.name)
    addSandboxCacheWithOptions(options.name, options);
}
function startApp(_x) {
  return _startApp.apply(this, arguments);
}
function _startApp() {
  _startApp = _asyncToGenerator(import_regenerator4.default.mark(function _callee2(startOptions) {
    var _newSandbox$lifecycle, _newSandbox$lifecycle2;
    var sandbox, cacheOptions, options, name, url, html, replace, fetch, props, attrs, degradeAttrs, fiber, alive, degrade, sync, prefix, el, loading, plugins, lifecycles, _iframeWindow, _sandbox$lifecycles3, _sandbox$lifecycles3$, _sandbox$lifecycles2, _sandbox$lifecycles2$, _yield$importHTML2, _getExternalScripts2, _sandbox$lifecycles4, _sandbox$lifecycles4$, _sandbox$lifecycles5, _sandbox$lifecycles5$, newSandbox, _yield$importHTML3, template, getExternalScripts, getExternalStyleSheets, processedHtml;
    return import_regenerator4.default.wrap(function _callee2$(_context2) {
      while (1)
        switch (_context2.prev = _context2.next) {
          case 0:
            sandbox = getWujieById(startOptions.name);
            cacheOptions = getOptionsById(startOptions.name);
            options = mergeOptions(startOptions, cacheOptions);
            name = options.name, url = options.url, html = options.html, replace = options.replace, fetch = options.fetch, props = options.props, attrs = options.attrs, degradeAttrs = options.degradeAttrs, fiber = options.fiber, alive = options.alive, degrade = options.degrade, sync = options.sync, prefix = options.prefix, el = options.el, loading = options.loading, plugins = options.plugins, lifecycles = options.lifecycles;
            if (!sandbox) {
              _context2.next = 39;
              break;
            }
            sandbox.plugins = getPlugins(plugins);
            sandbox.lifecycles = lifecycles;
            _iframeWindow = sandbox.iframe.contentWindow;
            if (!sandbox.preload) {
              _context2.next = 11;
              break;
            }
            _context2.next = 11;
            return sandbox.preload;
          case 11:
            if (!alive) {
              _context2.next = 26;
              break;
            }
            _context2.next = 14;
            return sandbox.active({
              url,
              sync,
              prefix,
              el,
              props,
              alive,
              fetch,
              replace
            });
          case 14:
            if (sandbox.execFlag) {
              _context2.next = 22;
              break;
            }
            (_sandbox$lifecycles2 = sandbox.lifecycles) === null || _sandbox$lifecycles2 === void 0 || (_sandbox$lifecycles2$ = _sandbox$lifecycles2.beforeLoad) === null || _sandbox$lifecycles2$ === void 0 || _sandbox$lifecycles2$.call(_sandbox$lifecycles2, sandbox.iframe.contentWindow);
            _context2.next = 18;
            return importHTML({
              url,
              html,
              opts: {
                fetch: fetch || window.fetch,
                plugins: sandbox.plugins,
                loadError: sandbox.lifecycles.loadError,
                fiber
              }
            });
          case 18:
            _yield$importHTML2 = _context2.sent;
            _getExternalScripts2 = _yield$importHTML2.getExternalScripts;
            _context2.next = 22;
            return sandbox.start(_getExternalScripts2);
          case 22:
            (_sandbox$lifecycles3 = sandbox.lifecycles) === null || _sandbox$lifecycles3 === void 0 || (_sandbox$lifecycles3$ = _sandbox$lifecycles3.activated) === null || _sandbox$lifecycles3$ === void 0 || _sandbox$lifecycles3$.call(_sandbox$lifecycles3, sandbox.iframe.contentWindow);
            return _context2.abrupt("return", sandbox.destroy);
          case 26:
            if (!isFunction(_iframeWindow.__WUJIE_MOUNT)) {
              _context2.next = 38;
              break;
            }
            sandbox.unmount();
            _context2.next = 30;
            return sandbox.active({
              url,
              sync,
              prefix,
              el,
              props,
              alive,
              fetch,
              replace
            });
          case 30:
            sandbox.rebuildStyleSheets();
            (_sandbox$lifecycles4 = sandbox.lifecycles) === null || _sandbox$lifecycles4 === void 0 || (_sandbox$lifecycles4$ = _sandbox$lifecycles4.beforeMount) === null || _sandbox$lifecycles4$ === void 0 || _sandbox$lifecycles4$.call(_sandbox$lifecycles4, sandbox.iframe.contentWindow);
            _iframeWindow.__WUJIE_MOUNT();
            (_sandbox$lifecycles5 = sandbox.lifecycles) === null || _sandbox$lifecycles5 === void 0 || (_sandbox$lifecycles5$ = _sandbox$lifecycles5.afterMount) === null || _sandbox$lifecycles5$ === void 0 || _sandbox$lifecycles5$.call(_sandbox$lifecycles5, sandbox.iframe.contentWindow);
            sandbox.mountFlag = true;
            return _context2.abrupt("return", sandbox.destroy);
          case 38:
            sandbox.destroy();
          case 39:
            addLoading(el, loading);
            newSandbox = new Wujie({
              name,
              url,
              attrs,
              degradeAttrs,
              fiber,
              degrade,
              plugins,
              lifecycles
            });
            (_newSandbox$lifecycle = newSandbox.lifecycles) === null || _newSandbox$lifecycle === void 0 || (_newSandbox$lifecycle2 = _newSandbox$lifecycle.beforeLoad) === null || _newSandbox$lifecycle2 === void 0 || _newSandbox$lifecycle2.call(_newSandbox$lifecycle, newSandbox.iframe.contentWindow);
            _context2.next = 44;
            return importHTML({
              url,
              html,
              opts: {
                fetch: fetch || window.fetch,
                plugins: newSandbox.plugins,
                loadError: newSandbox.lifecycles.loadError,
                fiber
              }
            });
          case 44:
            _yield$importHTML3 = _context2.sent;
            template = _yield$importHTML3.template;
            getExternalScripts = _yield$importHTML3.getExternalScripts;
            getExternalStyleSheets = _yield$importHTML3.getExternalStyleSheets;
            _context2.next = 50;
            return processCssLoader(newSandbox, template, getExternalStyleSheets);
          case 50:
            processedHtml = _context2.sent;
            _context2.next = 53;
            return newSandbox.active({
              url,
              sync,
              prefix,
              template: processedHtml,
              el,
              props,
              alive,
              fetch,
              replace
            });
          case 53:
            _context2.next = 55;
            return newSandbox.start(getExternalScripts);
          case 55:
            return _context2.abrupt("return", newSandbox.destroy);
          case 56:
          case "end":
            return _context2.stop();
        }
    }, _callee2);
  }));
  return _startApp.apply(this, arguments);
}
function preloadApp(preOptions) {
  requestIdleCallback(function() {
    if (getWujieById(preOptions.name) || isMatchSyncQueryById(preOptions.name))
      return;
    var cacheOptions = getOptionsById(preOptions.name);
    var options = mergeOptions(_objectSpread7({}, preOptions), cacheOptions);
    var name = options.name, url = options.url, html = options.html, props = options.props, alive = options.alive, replace = options.replace, fetch = options.fetch, exec = options.exec, attrs = options.attrs, degradeAttrs = options.degradeAttrs, fiber = options.fiber, degrade = options.degrade, prefix = options.prefix, plugins = options.plugins, lifecycles = options.lifecycles;
    var sandbox = new Wujie({
      name,
      url,
      attrs,
      degradeAttrs,
      fiber,
      degrade,
      plugins,
      lifecycles
    });
    if (sandbox.preload)
      return sandbox.preload;
    var runPreload = function() {
      var _ref = _asyncToGenerator(import_regenerator4.default.mark(function _callee() {
        var _sandbox$lifecycles, _sandbox$lifecycles$b;
        var _yield$importHTML, template, getExternalScripts, getExternalStyleSheets, processedHtml;
        return import_regenerator4.default.wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                (_sandbox$lifecycles = sandbox.lifecycles) === null || _sandbox$lifecycles === void 0 || (_sandbox$lifecycles$b = _sandbox$lifecycles.beforeLoad) === null || _sandbox$lifecycles$b === void 0 || _sandbox$lifecycles$b.call(_sandbox$lifecycles, sandbox.iframe.contentWindow);
                _context.next = 3;
                return importHTML({
                  url,
                  html,
                  opts: {
                    fetch: fetch || window.fetch,
                    plugins: sandbox.plugins,
                    loadError: sandbox.lifecycles.loadError,
                    fiber
                  }
                });
              case 3:
                _yield$importHTML = _context.sent;
                template = _yield$importHTML.template;
                getExternalScripts = _yield$importHTML.getExternalScripts;
                getExternalStyleSheets = _yield$importHTML.getExternalStyleSheets;
                _context.next = 9;
                return processCssLoader(sandbox, template, getExternalStyleSheets);
              case 9:
                processedHtml = _context.sent;
                _context.next = 12;
                return sandbox.active({
                  url,
                  props,
                  prefix,
                  alive,
                  template: processedHtml,
                  fetch,
                  replace
                });
              case 12:
                if (!exec) {
                  _context.next = 17;
                  break;
                }
                _context.next = 15;
                return sandbox.start(getExternalScripts);
              case 15:
                _context.next = 19;
                break;
              case 17:
                _context.next = 19;
                return getExternalScripts();
              case 19:
              case "end":
                return _context.stop();
            }
        }, _callee);
      }));
      return function runPreload2() {
        return _ref.apply(this, arguments);
      };
    }();
    sandbox.preload = runPreload();
  });
}
function destroyApp(id) {
  var sandbox = getWujieById(id);
  if (sandbox) {
    sandbox.destroy();
  }
}

// node_modules/wujie-vue3/esm/index.js
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof2(o);
}
function _regeneratorRuntime5() {
  "use strict";
  _regeneratorRuntime5 = function _regeneratorRuntime6() {
    return e;
  };
  var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
    t2[e2] = r2.value;
  }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
  function define(t2, e2, r2) {
    return Object.defineProperty(t2, e2, { value: r2, enumerable: true, configurable: true, writable: true }), t2[e2];
  }
  try {
    define({}, "");
  } catch (t2) {
    define = function define2(t3, e2, r2) {
      return t3[e2] = r2;
    };
  }
  function wrap(t2, e2, r2, n2) {
    var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
    return o(a2, "_invoke", { value: makeInvokeMethod(t2, r2, c2) }), a2;
  }
  function tryCatch(t2, e2, r2) {
    try {
      return { type: "normal", arg: t2.call(e2, r2) };
    } catch (t3) {
      return { type: "throw", arg: t3 };
    }
  }
  e.wrap = wrap;
  var h2 = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  var p = {};
  define(p, a, function() {
    return this;
  });
  var d = Object.getPrototypeOf, v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t2) {
    ["next", "throw", "return"].forEach(function(e2) {
      define(t2, e2, function(t3) {
        return this._invoke(e2, t3);
      });
    });
  }
  function AsyncIterator(t2, e2) {
    function invoke(r3, o2, i2, a2) {
      var c2 = tryCatch(t2[r3], t2, o2);
      if ("throw" !== c2.type) {
        var u2 = c2.arg, h3 = u2.value;
        return h3 && "object" == _typeof2(h3) && n.call(h3, "__await") ? e2.resolve(h3.__await).then(function(t3) {
          invoke("next", t3, i2, a2);
        }, function(t3) {
          invoke("throw", t3, i2, a2);
        }) : e2.resolve(h3).then(function(t3) {
          u2.value = t3, i2(u2);
        }, function(t3) {
          return invoke("throw", t3, i2, a2);
        });
      }
      a2(c2.arg);
    }
    var r2;
    o(this, "_invoke", { value: function value(t3, n2) {
      function callInvokeWithMethodAndArg() {
        return new e2(function(e3, r3) {
          invoke(t3, n2, e3, r3);
        });
      }
      return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } });
  }
  function makeInvokeMethod(e2, r2, n2) {
    var o2 = h2;
    return function(i2, a2) {
      if (o2 === f)
        throw new Error("Generator is already running");
      if (o2 === s) {
        if ("throw" === i2)
          throw a2;
        return { value: t, done: true };
      }
      for (n2.method = i2, n2.arg = a2; ; ) {
        var c2 = n2.delegate;
        if (c2) {
          var u2 = maybeInvokeDelegate(c2, n2);
          if (u2) {
            if (u2 === y)
              continue;
            return u2;
          }
        }
        if ("next" === n2.method)
          n2.sent = n2._sent = n2.arg;
        else if ("throw" === n2.method) {
          if (o2 === h2)
            throw o2 = s, n2.arg;
          n2.dispatchException(n2.arg);
        } else
          "return" === n2.method && n2.abrupt("return", n2.arg);
        o2 = f;
        var p2 = tryCatch(e2, r2, n2);
        if ("normal" === p2.type) {
          if (o2 = n2.done ? s : l, p2.arg === y)
            continue;
          return { value: p2.arg, done: n2.done };
        }
        "throw" === p2.type && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
      }
    };
  }
  function maybeInvokeDelegate(e2, r2) {
    var n2 = r2.method, o2 = e2.iterator[n2];
    if (o2 === t)
      return r2.delegate = null, "throw" === n2 && e2.iterator["return"] && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), "throw" === r2.method) || "return" !== n2 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
    var i2 = tryCatch(o2, e2.iterator, r2.arg);
    if ("throw" === i2.type)
      return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
    var a2 = i2.arg;
    return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
  }
  function pushTryEntry(t2) {
    var e2 = { tryLoc: t2[0] };
    1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
  }
  function resetTryEntry(t2) {
    var e2 = t2.completion || {};
    e2.type = "normal", delete e2.arg, t2.completion = e2;
  }
  function Context(t2) {
    this.tryEntries = [{ tryLoc: "root" }], t2.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(e2) {
    if (e2 || "" === e2) {
      var r2 = e2[a];
      if (r2)
        return r2.call(e2);
      if ("function" == typeof e2.next)
        return e2;
      if (!isNaN(e2.length)) {
        var o2 = -1, i2 = function next() {
          for (; ++o2 < e2.length; )
            if (n.call(e2, o2))
              return next.value = e2[o2], next.done = false, next;
          return next.value = t, next.done = true, next;
        };
        return i2.next = i2;
      }
    }
    throw new TypeError(_typeof2(e2) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: true }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: true }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
    var e2 = "function" == typeof t2 && t2.constructor;
    return !!e2 && (e2 === GeneratorFunction || "GeneratorFunction" === (e2.displayName || e2.name));
  }, e.mark = function(t2) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
  }, e.awrap = function(t2) {
    return { __await: t2 };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
    void 0 === i2 && (i2 = Promise);
    var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
    return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
      return t3.done ? t3.value : a2.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
    return this;
  }), define(g, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(t2) {
    var e2 = Object(t2), r2 = [];
    for (var n2 in e2)
      r2.push(n2);
    return r2.reverse(), function next() {
      for (; r2.length; ) {
        var t3 = r2.pop();
        if (t3 in e2)
          return next.value = t3, next.done = false, next;
      }
      return next.done = true, next;
    };
  }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e2) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
      for (var r2 in this)
        "t" === r2.charAt(0) && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
  }, stop: function stop() {
    this.done = true;
    var t2 = this.tryEntries[0].completion;
    if ("throw" === t2.type)
      throw t2.arg;
    return this.rval;
  }, dispatchException: function dispatchException(e2) {
    if (this.done)
      throw e2;
    var r2 = this;
    function handle(n2, o3) {
      return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
    }
    for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
      var i2 = this.tryEntries[o2], a2 = i2.completion;
      if ("root" === i2.tryLoc)
        return handle("end");
      if (i2.tryLoc <= this.prev) {
        var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
        if (c2 && u2) {
          if (this.prev < i2.catchLoc)
            return handle(i2.catchLoc, true);
          if (this.prev < i2.finallyLoc)
            return handle(i2.finallyLoc);
        } else if (c2) {
          if (this.prev < i2.catchLoc)
            return handle(i2.catchLoc, true);
        } else {
          if (!u2)
            throw new Error("try statement without catch or finally");
          if (this.prev < i2.finallyLoc)
            return handle(i2.finallyLoc);
        }
      }
    }
  }, abrupt: function abrupt(t2, e2) {
    for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
      var o2 = this.tryEntries[r2];
      if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
        var i2 = o2;
        break;
      }
    }
    i2 && ("break" === t2 || "continue" === t2) && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
    var a2 = i2 ? i2.completion : {};
    return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
  }, complete: function complete(t2, e2) {
    if ("throw" === t2.type)
      throw t2.arg;
    return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e2 && (this.next = e2), y;
  }, finish: function finish(t2) {
    for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
      var r2 = this.tryEntries[e2];
      if (r2.finallyLoc === t2)
        return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
    }
  }, "catch": function _catch(t2) {
    for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
      var r2 = this.tryEntries[e2];
      if (r2.tryLoc === t2) {
        var n2 = r2.completion;
        if ("throw" === n2.type) {
          var o2 = n2.arg;
          resetTryEntry(r2);
        }
        return o2;
      }
    }
    throw new Error("illegal catch attempt");
  }, delegateYield: function delegateYield(e2, r2, n2) {
    return this.delegate = { iterator: values(e2), resultName: r2, nextLoc: n2 }, "next" === this.method && (this.arg = t), y;
  } }, e;
}
function asyncGeneratorStep2(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error2) {
    reject(error2);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator2(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep2(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep2(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var wujieVueOptions = {
  name: "WujieVue",
  props: {
    width: {
      type: String,
      "default": ""
    },
    height: {
      type: String,
      "default": ""
    },
    name: {
      type: String,
      "default": ""
    },
    loading: {
      type: HTMLElement,
      "default": void 0
    },
    url: {
      type: String,
      "default": ""
    },
    sync: {
      type: Boolean,
      "default": void 0
    },
    prefix: {
      type: Object,
      "default": void 0
    },
    alive: {
      type: Boolean,
      "default": void 0
    },
    props: {
      type: Object,
      "default": void 0
    },
    attrs: {
      type: Object,
      "default": void 0
    },
    replace: {
      type: Function,
      "default": void 0
    },
    fetch: {
      type: Function,
      "default": void 0
    },
    fiber: {
      type: Boolean,
      "default": void 0
    },
    degrade: {
      type: Boolean,
      "default": void 0
    },
    plugins: {
      type: Array,
      "default": null
    },
    beforeLoad: {
      type: Function,
      "default": null
    },
    beforeMount: {
      type: Function,
      "default": null
    },
    afterMount: {
      type: Function,
      "default": null
    },
    beforeUnmount: {
      type: Function,
      "default": null
    },
    afterUnmount: {
      type: Function,
      "default": null
    },
    activated: {
      type: Function,
      "default": null
    },
    deactivated: {
      type: Function,
      "default": null
    },
    loadError: {
      type: Function,
      "default": null
    }
  },
  data: function data() {
    return {
      startAppQueue: Promise.resolve()
    };
  },
  mounted: function mounted() {
    var _this = this;
    bus.$onAll(this.handleEmit);
    this.execStartApp();
    this.$watch(function() {
      return _this.name + _this.url;
    }, function() {
      return _this.execStartApp();
    });
  },
  methods: {
    handleEmit: function handleEmit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      this.$emit.apply(this, [event].concat(args));
    },
    startApp: function startApp2() {
      var _this2 = this;
      return _asyncToGenerator2(_regeneratorRuntime5().mark(function _callee() {
        return _regeneratorRuntime5().wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return startApp({
                  name: _this2.name,
                  url: _this2.url,
                  el: _this2.$refs.wujie,
                  loading: _this2.loading,
                  alive: _this2.alive,
                  fetch: _this2.fetch,
                  props: _this2.props,
                  attrs: _this2.attrs,
                  replace: _this2.replace,
                  sync: _this2.sync,
                  prefix: _this2.prefix,
                  fiber: _this2.fiber,
                  degrade: _this2.degrade,
                  plugins: _this2.plugins,
                  beforeLoad: _this2.beforeLoad,
                  beforeMount: _this2.beforeMount,
                  afterMount: _this2.afterMount,
                  beforeUnmount: _this2.beforeUnmount,
                  afterUnmount: _this2.afterUnmount,
                  activated: _this2.activated,
                  deactivated: _this2.deactivated,
                  loadError: _this2.loadError
                });
              case 3:
                _context.next = 8;
                break;
              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
              case 8:
              case "end":
                return _context.stop();
            }
        }, _callee, null, [[0, 5]]);
      }))();
    },
    execStartApp: function execStartApp() {
      this.startAppQueue = this.startAppQueue.then(this.startApp);
    },
    destroy: function destroy() {
      destroyApp(this.name);
    }
  },
  beforeDestroy: function beforeDestroy() {
    bus.$offAll(this.handleEmit);
  },
  render: function render() {
    return h("div", {
      style: {
        width: this.width,
        height: this.height
      },
      ref: "wujie"
    });
  }
};
var WujieVue = defineComponent(wujieVueOptions);
WujieVue.setupApp = setupApp;
WujieVue.preloadApp = preloadApp;
WujieVue.bus = bus;
WujieVue.destroyApp = destroyApp;
WujieVue.install = function(app) {
  app.component("WujieVue", WujieVue);
};
var esm_default = WujieVue;
export {
  esm_default as default
};
/*! Bundled license information:

@babel/runtime/helpers/regeneratorRuntime.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)

wujie-vue3/esm/index.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
*/
//# sourceMappingURL=wujie-vue3.js.map
