import {
  __commonJS,
  __publicField
} from "./chunk-TCQZMY3T.js";

// node_modules/jsmind/es6/jsmind.js
var require_jsmind = __commonJS({
  "node_modules/jsmind/es6/jsmind.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).jsMind = t();
    }(exports, function() {
      "use strict";
      const e = "0.8.6";
      "function" != typeof String.prototype.startsWith && (String.prototype.startsWith = function(e2) {
        return this.slice(0, e2.length) === e2;
      });
      const t = { left: -1, center: 0, right: 1, of: function(e2) {
        return e2 && -1 !== e2 && 0 !== e2 && 1 !== e2 ? "-1" === e2 || "0" === e2 || "1" === e2 ? parseInt(e2) : "left" === e2.toLowerCase() ? this.left : "right" === e2.toLowerCase() ? this.right : "center" === e2.toLowerCase() ? this.center : void 0 : e2;
      } }, i = { show: 1, resize: 2, edit: 3, select: 4 }, n = { debug: 1, info: 2, warn: 3, error: 4, disable: 9 };
      var o = function() {
      };
      let s = "undefined" == typeof console ? { level: o, log: o, debug: o, info: o, warn: o, error: o } : { level: function(e2) {
        s.debug = e2 > n.debug ? o : console.debug;
        s.info = e2 > n.info ? o : console.info;
        s.warn = e2 > n.warn ? o : console.warn;
        s.error = e2 > n.error ? o : console.error;
      }, log: console.log, debug: console.debug, info: console.info, warn: console.warn, error: console.error };
      const r = new class {
        constructor(e2) {
          this.w = e2, this.d = e2.document, this.g = function(e3) {
            return this.d.getElementById(e3);
          }, this.c = function(e3) {
            return this.d.createElement(e3);
          }, this.t = function(e3, t2) {
            e3.hasChildNodes() ? e3.firstChild.nodeValue = t2 : e3.appendChild(this.d.createTextNode(t2));
          }, this.h = function(e3, t2) {
            t2 instanceof HTMLElement ? (e3.innerHTML = "", e3.appendChild(t2)) : e3.innerHTML = t2;
          }, this.i = function(e3) {
            return !!e3 && "object" == typeof e3 && 1 === e3.nodeType && "object" == typeof e3.style && "object" == typeof e3.ownerDocument;
          }, this.on = function(e3, t2, i2) {
            e3.addEventListener ? e3.addEventListener(t2, i2, false) : e3.attachEvent("on" + t2, i2);
          };
        }
      }(window), a = { file: { read: function(e2, t2) {
        var i2 = new FileReader();
        i2.onload = function() {
          "function" == typeof t2 && t2(this.result, e2.name);
        }, i2.readAsText(e2);
      }, save: function(e2, t2, i2) {
        var n2;
        if ("function" == typeof r.w.Blob)
          n2 = new Blob([e2], { type: t2 });
        else {
          var o2 = new (r.w.BlobBuilder || r.w.MozBlobBuilder || r.w.WebKitBlobBuilder || r.w.MSBlobBuilder)();
          o2.append(e2), n2 = o2.getBlob(t2);
        }
        if (navigator.msSaveBlob)
          navigator.msSaveBlob(n2, i2);
        else {
          var s2 = (r.w.URL || r.w.webkitURL).createObjectURL(n2), a2 = r.c("a");
          if ("download" in a2) {
            a2.style.visibility = "hidden", a2.href = s2, a2.download = i2, r.d.body.appendChild(a2);
            var d2 = r.d.createEvent("MouseEvents");
            d2.initEvent("click", true, true), a2.dispatchEvent(d2), r.d.body.removeChild(a2);
          } else
            location.href = s2;
        }
      } }, json: { json2string: function(e2) {
        return JSON.stringify(e2);
      }, string2json: function(e2) {
        return JSON.parse(e2);
      }, merge: function(e2, t2) {
        for (var i2 in t2)
          i2 in e2 ? "object" != typeof e2[i2] || "[object object]" != Object.prototype.toString.call(e2[i2]).toLowerCase() || e2[i2].length ? e2[i2] = t2[i2] : a.json.merge(e2[i2], t2[i2]) : e2[i2] = t2[i2];
        return e2;
      } }, uuid: { newid: function() {
        return ((/* @__PURE__ */ new Date()).getTime().toString(16) + Math.random().toString(16).substring(2)).substring(2, 18);
      } }, text: { is_empty: function(e2) {
        return !e2 || 0 == e2.replace(/\s*/, "").length;
      } } }, d = { container: "", editable: false, theme: null, mode: "full", support_html: true, log_level: "info", view: { engine: "canvas", enable_device_pixel_ratio: false, hmargin: 100, vmargin: 50, line_width: 2, line_color: "#555", line_style: "curved", draggable: false, hide_scrollbars_when_draggable: false, node_overflow: "hidden", zoom: { min: 0.5, max: 2.1, step: 0.1 }, custom_node_render: null, expander_style: "char" }, layout: { hspace: 30, vspace: 20, pspace: 13, cousin_space: 0 }, default_event_handle: { enable_mousedown_handle: true, enable_click_handle: true, enable_dblclick_handle: true, enable_mousewheel_handle: true }, shortcut: { enable: true, handles: {}, mapping: { addchild: [45, 4109], addbrother: 13, editnode: 113, delnode: 46, toggle: 32, left: 37, up: 38, right: 39, down: 40 } }, plugin: {} };
      class l {
        constructor(e2, t2, i2, n2, o2, r2, a2, d2) {
          e2 ? "number" == typeof t2 ? (void 0 === d2 && (d2 = true), this.id = e2, this.index = t2, this.topic = i2, this.data = n2 || {}, this.isroot = o2, this.parent = r2, this.direction = a2, this.expanded = !!d2, this.children = [], this._data = {}) : s.error("invalid node index") : s.error("invalid node id");
        }
        get_location() {
          var e2 = this._data.view;
          return { x: e2.abs_x, y: e2.abs_y };
        }
        get_size() {
          var e2 = this._data.view;
          return { w: e2.width, h: e2.height };
        }
        static compare(e2, t2) {
          var i2 = e2.index, n2 = t2.index;
          return i2 >= 0 && n2 >= 0 ? i2 - n2 : -1 == i2 && -1 == n2 ? 0 : -1 == i2 ? 1 : -1 == n2 ? -1 : 0;
        }
        static inherited(e2, t2) {
          if (e2 && t2) {
            if (e2.id === t2.id)
              return true;
            if (e2.isroot)
              return true;
            for (var i2 = e2.id, n2 = t2; !n2.isroot; )
              if ((n2 = n2.parent).id === i2)
                return true;
          }
          return false;
        }
        static is_node(e2) {
          return !!e2 && e2 instanceof l;
        }
      }
      class h {
        constructor() {
          this.name = null, this.author = null, this.version = null, this.root = null, this.selected = null, this.nodes = {};
        }
        get_node(e2) {
          return e2 in this.nodes ? this.nodes[e2] : (s.warn("the node[id=" + e2 + "] can not be found"), null);
        }
        set_root(e2, t2, i2) {
          return null == this.root ? (this.root = new l(e2, 0, t2, i2, true), this._put_node(this.root), this.root) : (s.error("root node is already exist"), null);
        }
        add_node(e2, i2, n2, o2, r2, a2, d2) {
          if (!l.is_node(e2))
            return s.error("the parent_node " + e2 + " is not a node."), null;
          var h2 = new l(i2, d2 || -1, n2, o2, false, e2, e2.direction, a2);
          return e2.isroot && (h2.direction = r2 || t.right), this._put_node(h2) ? (e2.children.push(h2), this._update_index(e2)) : (s.error("fail, the node id '" + h2.id + "' has been already exist."), h2 = null), h2;
        }
        insert_node_before(e2, t2, i2, n2, o2) {
          if (!l.is_node(e2))
            return s.error("the node_before " + e2 + " is not a node."), null;
          var r2 = e2.index - 0.5;
          return this.add_node(e2.parent, t2, i2, n2, o2, true, r2);
        }
        get_node_before(e2) {
          if (!l.is_node(e2)) {
            var t2 = this.get_node(e2);
            return t2 ? this.get_node_before(t2) : (s.error("the node[id=" + e2 + "] can not be found."), null);
          }
          if (e2.isroot)
            return null;
          var i2 = e2.index - 2;
          return i2 >= 0 ? e2.parent.children[i2] : null;
        }
        insert_node_after(e2, t2, i2, n2, o2) {
          if (!l.is_node(e2))
            return s.error("the node_after " + e2 + " is not a node."), null;
          var r2 = e2.index + 0.5;
          return this.add_node(e2.parent, t2, i2, n2, o2, true, r2);
        }
        get_node_after(e2) {
          if (!l.is_node(e2)) {
            var t2 = this.get_node(e2);
            return t2 ? this.get_node_after(t2) : (s.error("the node[id=" + e2 + "] can not be found."), null);
          }
          if (e2.isroot)
            return null;
          var i2 = e2.index;
          return e2.parent.children.length > i2 ? e2.parent.children[i2] : null;
        }
        move_node(e2, t2, i2, n2) {
          return l.is_node(e2) ? (i2 || (i2 = e2.parent.id), this._move_node(e2, t2, i2, n2)) : (s.error("the parameter node " + e2 + " is not a node."), null);
        }
        _flow_node_direction(e2, t2) {
          void 0 === t2 ? t2 = e2.direction : e2.direction = t2;
          for (var i2 = e2.children.length; i2--; )
            this._flow_node_direction(e2.children[i2], t2);
        }
        _move_node_internal(e2, t2) {
          if (e2 && t2)
            if ("_last_" == t2)
              e2.index = -1, this._update_index(e2.parent);
            else if ("_first_" == t2)
              e2.index = 0, this._update_index(e2.parent);
            else {
              var i2 = t2 ? this.get_node(t2) : null;
              null != i2 && null != i2.parent && i2.parent.id == e2.parent.id && (e2.index = i2.index - 0.5, this._update_index(e2.parent));
            }
          return e2;
        }
        _move_node(e2, i2, n2, o2) {
          if (e2 && n2) {
            var r2 = this.get_node(n2);
            if (l.inherited(e2, r2))
              return s.error("can not move a node to its children"), null;
            if (e2.parent.id != n2) {
              for (var a2 = e2.parent.children, d2 = a2.length; d2--; )
                if (a2[d2].id == e2.id) {
                  a2.splice(d2, 1);
                  break;
                }
              let t2 = e2.parent;
              e2.parent = r2, r2.children.push(e2), this._update_index(t2);
            }
            e2.parent.isroot ? o2 == t.left ? e2.direction = o2 : e2.direction = t.right : e2.direction = e2.parent.direction, this._move_node_internal(e2, i2), this._flow_node_direction(e2);
          }
          return e2;
        }
        remove_node(e2) {
          if (!l.is_node(e2))
            return s.error("the parameter node " + e2 + " is not a node."), false;
          if (e2.isroot)
            return s.error("fail, can not remove root node"), false;
          null != this.selected && this.selected.id == e2.id && (this.selected = null);
          for (var t2 = e2.children, i2 = t2.length; i2--; )
            this.remove_node(t2[i2]);
          t2.length = 0;
          for (var n2 = e2.parent, o2 = n2.children, r2 = o2.length; r2--; )
            if (o2[r2].id == e2.id) {
              o2.splice(r2, 1);
              break;
            }
          for (var a2 in delete this.nodes[e2.id], e2)
            delete e2[a2];
          return e2 = null, this._update_index(n2), true;
        }
        _put_node(e2) {
          return e2.id in this.nodes ? (s.warn("the node_id '" + e2.id + "' has been already exist."), false) : (this.nodes[e2.id] = e2, true);
        }
        _update_index(e2) {
          if (e2 instanceof l) {
            e2.children.sort(l.compare);
            for (var t2 = 0; t2 < e2.children.length; t2++)
              e2.children[t2].index = t2 + 1;
          }
        }
      }
      const _ = { name: "jsMind", author: "hizzgdev@163.com", version: e }, u = { node_tree: { example: { meta: _, format: "node_tree", data: { id: "root", topic: "jsMind node_tree example" } }, get_mind: function(e2) {
        var t2 = u.node_tree, i2 = new h();
        return i2.name = e2.meta.name, i2.author = e2.meta.author, i2.version = e2.meta.version, t2._parse(i2, e2.data), i2;
      }, get_data: function(e2) {
        var t2 = u.node_tree, i2 = {};
        return i2.meta = { name: e2.name, author: e2.author, version: e2.version }, i2.format = "node_tree", i2.data = t2._build_node(e2.root), i2;
      }, _parse: function(e2, t2) {
        var i2 = u.node_tree, n2 = i2._extract_data(t2);
        if (e2.set_root(t2.id, t2.topic, n2), "children" in t2)
          for (var o2 = t2.children, s2 = 0; s2 < o2.length; s2++)
            i2._extract_subnode(e2, e2.root, o2[s2]);
      }, _extract_data: function(e2) {
        var t2 = {};
        for (var i2 in e2)
          "id" != i2 && "topic" != i2 && "children" != i2 && "direction" != i2 && "expanded" != i2 && (t2[i2] = e2[i2]);
        return t2;
      }, _extract_subnode: function(e2, i2, n2) {
        var o2 = u.node_tree, s2 = o2._extract_data(n2), r2 = null;
        i2.isroot && (r2 = "left" == n2.direction ? t.left : t.right);
        var a2 = e2.add_node(i2, n2.id, n2.topic, s2, r2, n2.expanded);
        if (n2.children)
          for (var d2 = n2.children, l2 = 0; l2 < d2.length; l2++)
            o2._extract_subnode(e2, a2, d2[l2]);
      }, _build_node: function(e2) {
        var i2 = u.node_tree;
        if (e2 instanceof l) {
          var n2 = { id: e2.id, topic: e2.topic, expanded: e2.expanded };
          if (e2.parent && e2.parent.isroot && (n2.direction = e2.direction == t.left ? "left" : "right"), null != e2.data) {
            var o2 = e2.data;
            for (var s2 in o2)
              n2[s2] = o2[s2];
          }
          var r2 = e2.children;
          if (r2.length > 0) {
            n2.children = [];
            for (var a2 = 0; a2 < r2.length; a2++)
              n2.children.push(i2._build_node(r2[a2]));
          }
          return n2;
        }
      } }, node_array: { example: { meta: _, format: "node_array", data: [{ id: "root", topic: "jsMind node_array example", isroot: true }] }, get_mind: function(e2) {
        var t2 = u.node_array, i2 = new h();
        return i2.name = e2.meta.name, i2.author = e2.meta.author, i2.version = e2.meta.version, t2._parse(i2, e2.data), i2;
      }, get_data: function(e2) {
        var t2 = u.node_array, i2 = {};
        return i2.meta = { name: e2.name, author: e2.author, version: e2.version }, i2.format = "node_array", i2.data = [], t2._array(e2, i2.data), i2;
      }, _parse: function(e2, t2) {
        var i2 = u.node_array, n2 = t2.slice(0);
        n2.reverse();
        var o2 = i2._extract_root(e2, n2);
        o2 ? i2._extract_subnode(e2, o2, n2) : s.error("root node can not be found");
      }, _extract_root: function(e2, t2) {
        for (var i2 = u.node_array, n2 = t2.length; n2--; )
          if ("isroot" in t2[n2] && t2[n2].isroot) {
            var o2 = t2[n2], s2 = i2._extract_data(o2), r2 = e2.set_root(o2.id, o2.topic, s2);
            return t2.splice(n2, 1), r2;
          }
        return null;
      }, _extract_subnode: function(e2, i2, n2) {
        for (var o2 = u.node_array, s2 = n2.length, r2 = null, a2 = null, d2 = 0; s2--; )
          if ((r2 = n2[s2]).parentid == i2.id) {
            a2 = o2._extract_data(r2);
            var l2 = null, h2 = r2.direction;
            h2 && (l2 = "left" == h2 ? t.left : t.right);
            var _2 = e2.add_node(i2, r2.id, r2.topic, a2, l2, r2.expanded);
            n2.splice(s2, 1), d2++;
            var c2 = o2._extract_subnode(e2, _2, n2);
            c2 > 0 && (s2 = n2.length, d2 += c2);
          }
        return d2;
      }, _extract_data: function(e2) {
        var t2 = {};
        for (var i2 in e2)
          "id" != i2 && "topic" != i2 && "parentid" != i2 && "isroot" != i2 && "direction" != i2 && "expanded" != i2 && (t2[i2] = e2[i2]);
        return t2;
      }, _array: function(e2, t2) {
        u.node_array._array_node(e2.root, t2);
      }, _array_node: function(e2, i2) {
        var n2 = u.node_array;
        if (e2 instanceof l) {
          var o2 = { id: e2.id, topic: e2.topic, expanded: e2.expanded };
          if (e2.parent && (o2.parentid = e2.parent.id), e2.isroot && (o2.isroot = true), e2.parent && e2.parent.isroot && (o2.direction = e2.direction == t.left ? "left" : "right"), null != e2.data) {
            var s2 = e2.data;
            for (var r2 in s2)
              o2[r2] = s2[r2];
          }
          i2.push(o2);
          for (var a2 = e2.children.length, d2 = 0; d2 < a2; d2++)
            n2._array_node(e2.children[d2], i2);
        }
      } }, freemind: { example: { meta: _, format: "freemind", data: '<map version="1.0.1"><node ID="root" TEXT="jsMind freemind example"/></map>' }, get_mind: function(e2) {
        var t2 = u.freemind, i2 = new h();
        i2.name = e2.meta.name, i2.author = e2.meta.author, i2.version = e2.meta.version;
        var n2 = e2.data, o2 = t2._parse_xml(n2), s2 = t2._find_root(o2);
        return t2._load_node(i2, null, s2), i2;
      }, get_data: function(e2) {
        var t2 = u.freemind, i2 = {};
        i2.meta = { name: e2.name, author: e2.author, version: e2.version }, i2.format = "freemind";
        var n2 = [];
        return n2.push('<map version="1.0.1">'), t2._build_map(e2.root, n2), n2.push("</map>"), i2.data = n2.join(""), i2;
      }, _parse_xml: function(e2) {
        var t2 = null;
        window.DOMParser ? t2 = new DOMParser().parseFromString(e2, "text/xml") : ((t2 = new ActiveXObject("Microsoft.XMLDOM")).async = false, t2.loadXML(e2));
        return t2;
      }, _find_root: function(e2) {
        for (var t2 = e2.childNodes, i2 = null, n2 = null, o2 = 0; o2 < t2.length; o2++)
          if (1 == (n2 = t2[o2]).nodeType && "map" == n2.tagName) {
            i2 = n2;
            break;
          }
        if (i2) {
          var s2 = i2.childNodes;
          i2 = null;
          for (o2 = 0; o2 < s2.length; o2++)
            if (1 == (n2 = s2[o2]).nodeType && "node" == n2.tagName) {
              i2 = n2;
              break;
            }
        }
        return i2;
      }, _load_node: function(e2, i2, n2) {
        var o2 = u.freemind, s2 = n2.getAttribute("ID"), r2 = n2.getAttribute("TEXT"), a2 = n2.getAttribute("FOLDED");
        if (null == r2) {
          for (var d2 = n2.childNodes, l2 = null, h2 = 0; h2 < d2.length; h2++)
            if (1 == (l2 = d2[h2]).nodeType && "richcontent" === l2.tagName) {
              r2 = l2.textContent;
              break;
            }
        }
        var _2 = o2._load_attributes(n2), c2 = "expanded" in _2 ? "true" == _2.expanded : "true" != a2;
        delete _2.expanded;
        var p2 = n2.getAttribute("POSITION"), v2 = null;
        p2 && (v2 = "left" == p2 ? t.left : t.right);
        var f2 = null;
        f2 = i2 ? e2.add_node(i2, s2, r2, _2, v2, c2) : e2.set_root(s2, r2, _2);
        var g2 = n2.childNodes, m2 = null;
        for (h2 = 0; h2 < g2.length; h2++)
          1 == (m2 = g2[h2]).nodeType && "node" == m2.tagName && o2._load_node(e2, f2, m2);
      }, _load_attributes: function(e2) {
        for (var t2 = e2.childNodes, i2 = null, n2 = {}, o2 = 0; o2 < t2.length; o2++)
          1 == (i2 = t2[o2]).nodeType && "attribute" === i2.tagName && (n2[i2.getAttribute("NAME")] = i2.getAttribute("VALUE"));
        return n2;
      }, _build_map: function(e2, i2) {
        var n2 = u.freemind, o2 = null;
        e2.parent && e2.parent.isroot && (o2 = e2.direction === t.left ? "left" : "right"), i2.push("<node"), i2.push(' ID="' + e2.id + '"'), o2 && i2.push(' POSITION="' + o2 + '"'), e2.expanded || i2.push(' FOLDED="true"'), i2.push(' TEXT="' + n2._escape(e2.topic) + '">');
        var s2 = e2.data;
        if (null != s2)
          for (var r2 in s2)
            i2.push('<attribute NAME="' + r2 + '" VALUE="' + s2[r2] + '"/>');
        for (var a2 = e2.children, d2 = 0; d2 < a2.length; d2++)
          n2._build_map(a2[d2], i2);
        i2.push("</node>");
      }, _escape: function(e2) {
        return e2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
      } }, text: { example: { meta: _, format: "text", data: "jsMind text example\n node1\n  node1-sub\n  node1-sub\n node2" }, _line_regex: /\s*/, get_mind: function(e2) {
        var t2 = u.text, i2 = new h();
        i2.name = e2.meta.name, i2.author = e2.meta.author, i2.version = e2.meta.version;
        var n2 = e2.data.split(/\n|\r/);
        return t2._fill_nodes(i2, n2, 0, 0), i2;
      }, _fill_nodes: function(e2, t2) {
        let i2 = [], n2 = 0;
        for (; n2 < t2.length; ) {
          let o2 = t2[n2], s2 = o2.match(/\s*/)[0].length, r2 = o2.substr(s2);
          if (0 == s2 && i2.length > 0)
            return void log.error("more than 1 root node was found: " + r2);
          if (s2 > i2.length)
            return void log.error("a suspended node was found: " + r2);
          let d2 = i2.length - s2;
          for (; d2--; )
            i2.pop();
          if (0 == s2 && 0 == i2.length) {
            let t3 = e2.set_root(a.uuid.newid(), r2);
            i2.push(t3);
          } else {
            let t3 = e2.add_node(i2[s2 - 1], a.uuid.newid(), r2, {}, null);
            i2.push(t3);
          }
          n2++;
        }
        i2.length = 0;
      }, get_data: function(e2) {
        var t2 = u.text, i2 = {};
        i2.meta = { name: e2.name, author: e2.author, version: e2.version }, i2.format = "text";
        let n2 = [];
        return t2._build_lines(n2, [e2.root], 0), i2.data = n2.join("\n"), i2;
      }, _build_lines: function(e2, t2, i2) {
        let n2 = new Array(i2 + 1).join(" ");
        for (let o2 of t2)
          e2.push(n2 + o2.topic), o2.children && u.text._build_lines(e2, o2.children, i2 + 1);
      } } };
      class c {
        constructor(e2) {
          this.jm = e2;
        }
        init() {
          s.debug("data.init");
        }
        reset() {
          s.debug("data.reset");
        }
        load(e2) {
          var t2 = null, i2 = null;
          return "node_array" == (t2 = "object" == typeof e2 ? e2.format ? e2.format : "node_tree" : "freemind") ? i2 = u.node_array.get_mind(e2) : "node_tree" == t2 ? i2 = u.node_tree.get_mind(e2) : "freemind" == t2 ? i2 = u.freemind.get_mind(e2) : "text" == t2 ? i2 = u.text.get_mind(e2) : s.warn("unsupported format"), i2;
        }
        get_data(e2) {
          var t2 = null;
          return "node_array" == e2 ? t2 = u.node_array.get_data(this.jm.mind) : "node_tree" == e2 ? t2 = u.node_tree.get_data(this.jm.mind) : "freemind" == e2 ? t2 = u.freemind.get_data(this.jm.mind) : "text" == e2 ? t2 = u.text.get_data(this.jm.mind) : s.error("unsupported " + e2 + " format"), t2;
        }
      }
      class p {
        constructor(e2, t2) {
          this.opts = t2, this.jm = e2, this.isside = "side" == this.opts.mode, this.bounds = null, this.cache_valid = false;
        }
        init() {
          s.debug("layout.init");
        }
        reset() {
          s.debug("layout.reset"), this.bounds = { n: 0, s: 0, w: 0, e: 0 };
        }
        calculate_next_child_direction(e2) {
          if (this.isside)
            return t.right;
          for (var i2 = e2.children || [], n2 = i2.length, o2 = 0, s2 = 0; s2 < n2; s2++)
            i2[s2].direction === t.left ? o2-- : o2++;
          return n2 > 1 && o2 > 0 ? t.left : t.right;
        }
        layout() {
          s.debug("layout.layout"), this.layout_direction(), this.layout_offset();
        }
        layout_direction() {
          this._layout_direction_root();
        }
        _layout_direction_root() {
          var e2 = this.jm.mind.root, i2 = null;
          "layout" in e2._data ? i2 = e2._data.layout : (i2 = {}, e2._data.layout = i2);
          var n2 = e2.children, o2 = n2.length;
          if (i2.direction = t.center, i2.side_index = 0, this.isside)
            for (var s2 = o2; s2--; )
              this._layout_direction_side(n2[s2], t.right, s2);
          else {
            s2 = o2;
            for (var r2 = null; s2--; )
              (r2 = n2[s2]).direction == t.left ? this._layout_direction_side(r2, t.left, s2) : this._layout_direction_side(r2, t.right, s2);
          }
        }
        _layout_direction_side(e2, t2, i2) {
          var n2 = null;
          "layout" in e2._data ? n2 = e2._data.layout : (n2 = {}, e2._data.layout = n2);
          var o2 = e2.children, s2 = o2.length;
          n2.direction = t2, n2.side_index = i2;
          for (var r2 = s2; r2--; )
            this._layout_direction_side(o2[r2], t2, r2);
        }
        layout_offset() {
          var e2 = this.jm.mind.root, i2 = e2._data.layout;
          i2.offset_x = 0, i2.offset_y = 0, i2.outer_height = 0;
          for (var n2 = e2.children, o2 = n2.length, s2 = [], r2 = [], a2 = null; o2--; )
            (a2 = n2[o2])._data.layout.direction == t.right ? r2.unshift(a2) : s2.unshift(a2);
          i2.left_nodes = s2, i2.right_nodes = r2, i2.outer_height_left = this._layout_offset_subnodes(s2), i2.outer_height_right = this._layout_offset_subnodes(r2), this.bounds.e = e2._data.view.width / 2, this.bounds.w = 0 - this.bounds.e, this.bounds.n = 0, this.bounds.s = Math.max(i2.outer_height_left, i2.outer_height_right);
        }
        _layout_offset_subnodes(e2) {
          for (var t2 = 0, i2 = e2.length, n2 = i2, o2 = null, s2 = 0, r2 = null, a2 = 0, d2 = null; n2--; )
            r2 = (o2 = e2[n2])._data.layout, null == d2 && (d2 = o2.parent._data), s2 = this._layout_offset_subnodes(o2.children), o2.expanded || (s2 = 0, this.set_visible(o2.children, false)), s2 = Math.max(o2._data.view.height, s2), this._should_reserve_cousin_space(o2) && (s2 += this.opts.cousin_space), r2.outer_height = s2, r2.offset_y = a2 - s2 / 2, r2.offset_x = this.opts.hspace * r2.direction + d2.view.width * (d2.layout.direction + r2.direction) / 2, o2.parent.isroot || (r2.offset_x += this.opts.pspace * r2.direction), a2 = a2 - s2 - this.opts.vspace, t2 += s2;
          i2 > 1 && (t2 += this.opts.vspace * (i2 - 1)), n2 = i2;
          for (var l2 = t2 / 2; n2--; )
            (o2 = e2[n2])._data.layout.offset_y += l2;
          return t2;
        }
        _layout_offset_subnodes_height(e2) {
          for (var t2 = 0, i2 = e2.length, n2 = i2, o2 = null, s2 = 0, r2 = null, a2 = 0, d2 = null; n2--; )
            r2 = (o2 = e2[n2])._data.layout, null == d2 && (d2 = o2.parent._data), s2 = this._layout_offset_subnodes_height(o2.children), o2.expanded || (s2 = 0), s2 = Math.max(o2._data.view.height, s2), this._should_reserve_cousin_space(o2) && (s2 += this.opts.cousin_space), r2.outer_height = s2, r2.offset_y = a2 - s2 / 2, a2 = a2 - s2 - this.opts.vspace, t2 += s2;
          i2 > 1 && (t2 += this.opts.vspace * (i2 - 1)), n2 = i2;
          for (var l2 = t2 / 2; n2--; )
            (o2 = e2[n2])._data.layout.offset_y += l2;
          return t2;
        }
        _should_reserve_cousin_space(e2) {
          return e2.children.length > 0 && e2.parent.children.length > 1;
        }
        get_node_offset(e2) {
          var t2 = e2._data.layout, i2 = null;
          if ("_offset_" in t2 && this.cache_valid ? i2 = t2._offset_ : (i2 = { x: -1, y: -1 }, t2._offset_ = i2), -1 == i2.x || -1 == i2.y) {
            var n2 = t2.offset_x, o2 = t2.offset_y;
            if (!e2.isroot) {
              var s2 = this.get_node_offset(e2.parent);
              n2 += s2.x, o2 += s2.y;
            }
            i2.x = n2, i2.y = o2;
          }
          return i2;
        }
        get_node_point(e2) {
          var t2 = e2._data.view, i2 = this.get_node_offset(e2), n2 = {};
          return n2.x = i2.x + t2.width * (e2._data.layout.direction - 1) / 2, n2.y = i2.y - t2.height / 2, n2;
        }
        get_node_point_in(e2) {
          return this.get_node_offset(e2);
        }
        get_node_point_out(e2) {
          var t2 = e2._data.layout, i2 = null;
          if ("_pout_" in t2 && this.cache_valid ? i2 = t2._pout_ : (i2 = { x: -1, y: -1 }, t2._pout_ = i2), -1 == i2.x || -1 == i2.y)
            if (e2.isroot)
              i2.x = 0, i2.y = 0;
            else {
              var n2 = e2._data.view, o2 = this.get_node_offset(e2);
              i2.x = o2.x + (n2.width + this.opts.pspace) * e2._data.layout.direction, i2.y = o2.y;
            }
          return i2;
        }
        get_expander_point(e2) {
          var i2 = this.get_node_point_out(e2), n2 = {};
          return e2._data.layout.direction == t.right ? n2.x = i2.x - this.opts.pspace : n2.x = i2.x, n2.y = i2.y - Math.ceil(this.opts.pspace / 2), n2;
        }
        get_min_size() {
          var e2 = this.jm.mind.nodes, t2 = null, i2 = null;
          for (var n2 in e2)
            t2 = e2[n2], (i2 = this.get_node_point_out(t2)).x > this.bounds.e && (this.bounds.e = i2.x), i2.x < this.bounds.w && (this.bounds.w = i2.x);
          return { w: this.bounds.e - this.bounds.w, h: this.bounds.s - this.bounds.n };
        }
        toggle_node(e2) {
          e2.isroot || (e2.expanded ? this.collapse_node(e2) : this.expand_node(e2));
        }
        expand_node(e2) {
          e2.expanded = true, this.part_layout(e2), this.set_visible(e2.children, true), this.jm.invoke_event_handle(i.show, { evt: "expand_node", data: [], node: e2.id });
        }
        collapse_node(e2) {
          e2.expanded = false, this.part_layout(e2), this.set_visible(e2.children, false), this.jm.invoke_event_handle(i.show, { evt: "collapse_node", data: [], node: e2.id });
        }
        expand_all() {
          var e2, t2 = this.jm.mind.nodes, i2 = 0;
          for (var n2 in t2)
            (e2 = t2[n2]).expanded || (e2.expanded = true, i2++);
          if (i2 > 0) {
            var o2 = this.jm.mind.root;
            this.part_layout(o2), this.set_visible(o2.children, true);
          }
        }
        collapse_all() {
          var e2, t2 = this.jm.mind.nodes, i2 = 0;
          for (var n2 in t2)
            (e2 = t2[n2]).expanded && !e2.isroot && (e2.expanded = false, i2++);
          if (i2 > 0) {
            var o2 = this.jm.mind.root;
            this.part_layout(o2), this.set_visible(o2.children, true);
          }
        }
        expand_to_depth(e2, t2, i2) {
          if (!(e2 < 1))
            for (var n2 = t2 || this.jm.mind.root.children, o2 = i2 || 1, s2 = n2.length, r2 = null; s2--; )
              r2 = n2[s2], o2 < e2 && (r2.expanded || this.expand_node(r2), this.expand_to_depth(e2, r2.children, o2 + 1)), o2 == e2 && r2.expanded && this.collapse_node(r2);
        }
        part_layout(e2) {
          var i2 = this.jm.mind.root;
          if (i2) {
            var n2 = i2._data.layout;
            e2.isroot ? (n2.outer_height_right = this._layout_offset_subnodes_height(n2.right_nodes), n2.outer_height_left = this._layout_offset_subnodes_height(n2.left_nodes)) : e2._data.layout.direction == t.right ? n2.outer_height_right = this._layout_offset_subnodes_height(n2.right_nodes) : n2.outer_height_left = this._layout_offset_subnodes_height(n2.left_nodes), this.bounds.s = Math.max(n2.outer_height_left, n2.outer_height_right), this.cache_valid = false;
          } else
            s.warn("can not found root node");
        }
        set_visible(e2, t2) {
          for (var i2 = e2.length, n2 = null; i2--; )
            (n2 = e2[i2])._data.layout, n2.expanded ? this.set_visible(n2.children, t2) : this.set_visible(n2.children, false), n2.isroot || (n2._data.layout.visible = t2);
        }
        is_expand(e2) {
          return e2.expanded;
        }
        is_visible(e2) {
          var t2 = e2._data.layout;
          return !("visible" in t2 && !t2.visible);
        }
      }
      class v {
        constructor(e2) {
          this.view = e2, this.opts = e2.opts, this.e_svg = v.c("svg"), this.e_svg.setAttribute("class", "jsmind"), this.size = { w: 0, h: 0 }, this.lines = [], this.line_drawing = { straight: this._line_to, curved: this._bezier_to }, this.init_line_render();
        }
        static c(e2) {
          return r.d.createElementNS("http://www.w3.org/2000/svg", e2);
        }
        init_line_render() {
          "function" == typeof this.opts.custom_line_render ? this.drawing = (e2, t2, i2, n2, o2) => {
            try {
              this.opts.custom_line_render.call(this, { ctx: e2, start_point: { x: t2, y: i2 }, end_point: { x: n2, y: o2 } });
            } catch (e3) {
              s.error("custom line renderer error: ", e3);
            }
          } : this.drawing = this.line_drawing[this.opts.line_style] || this.line_drawing.curved;
        }
        element() {
          return this.e_svg;
        }
        set_size(e2, t2) {
          this.size.w = e2, this.size.h = t2, this.e_svg.setAttribute("width", e2), this.e_svg.setAttribute("height", t2);
        }
        clear() {
          for (var e2 = this.lines.length; e2--; )
            this.e_svg.removeChild(this.lines[e2]);
          this.lines.length = 0;
        }
        draw_line(e2, t2, i2, n2) {
          var o2 = v.c("path");
          o2.setAttribute("stroke", n2 || this.opts.line_color), o2.setAttribute("stroke-width", this.opts.line_width), o2.setAttribute("fill", "transparent"), this.lines.push(o2), this.e_svg.appendChild(o2), this.drawing(o2, t2.x + i2.x, t2.y + i2.y, e2.x + i2.x, e2.y + i2.y);
        }
        copy_to(e2, t2) {
          var i2 = new Image();
          i2.onload = function() {
            e2.drawImage(i2, 0, 0), t2 && t2();
          }, i2.src = "data:image/svg+xml;base64," + btoa(new XMLSerializer().serializeToString(this.e_svg));
        }
        _bezier_to(e2, t2, i2, n2, o2) {
          e2.setAttribute("d", "M " + t2 + " " + i2 + " C " + (t2 + 2 * (n2 - t2) / 3) + " " + i2 + ", " + t2 + " " + o2 + ", " + n2 + " " + o2);
        }
        _line_to(e2, t2, i2, n2, o2) {
          e2.setAttribute("d", "M " + t2 + " " + i2 + " L " + n2 + " " + o2);
        }
      }
      class f {
        constructor(e2) {
          this.opts = e2.opts, this.e_canvas = r.c("canvas"), this.e_canvas.className = "jsmind", this.canvas_ctx = this.e_canvas.getContext("2d"), this.size = { w: 0, h: 0 }, this.line_drawing = { straight: this._line_to, curved: this._bezier_to }, this.dpr = e2.device_pixel_ratio, this.init_line_render();
        }
        init_line_render() {
          "function" == typeof this.opts.custom_line_render ? this.drawing = (e2, t2, i2, n2, o2) => {
            try {
              this.opts.custom_line_render.call(this, { ctx: e2, start_point: { x: t2, y: i2 }, end_point: { x: n2, y: o2 } });
            } catch (e3) {
              s.error("custom line render error: ", e3);
            }
          } : this.drawing = this.line_drawing[this.opts.line_style] || this.line_drawing.curved;
        }
        element() {
          return this.e_canvas;
        }
        set_size(e2, t2) {
          this.size.w = e2, this.size.h = t2, this.e_canvas.width && this.e_canvas.height && this.canvas_ctx.scale ? (this.e_canvas.width = e2 * this.dpr, this.e_canvas.height = t2 * this.dpr, this.e_canvas.style.width = e2 + "px", this.e_canvas.style.height = t2 + "px", this.canvas_ctx.scale(this.dpr, this.dpr)) : (this.e_canvas.width = e2, this.e_canvas.height = t2);
        }
        clear() {
          this.canvas_ctx.clearRect(0, 0, this.size.w, this.size.h);
        }
        draw_line(e2, t2, i2, n2) {
          var o2 = this.canvas_ctx;
          o2.strokeStyle = n2 || this.opts.line_color, o2.lineWidth = this.opts.line_width, o2.lineCap = "round", this.drawing(o2, t2.x + i2.x, t2.y + i2.y, e2.x + i2.x, e2.y + i2.y);
        }
        copy_to(e2, t2) {
          e2.drawImage(this.e_canvas, 0, 0, this.size.w, this.size.h), t2 && t2();
        }
        _bezier_to(e2, t2, i2, n2, o2) {
          e2.beginPath(), e2.moveTo(t2, i2), e2.bezierCurveTo(t2 + 2 * (n2 - t2) / 3, i2, t2, o2, n2, o2), e2.stroke();
        }
        _line_to(e2, t2, i2, n2, o2) {
          e2.beginPath(), e2.moveTo(t2, i2), e2.lineTo(n2, o2), e2.stroke();
        }
      }
      class g {
        constructor(e2, t2) {
          this.opts = t2, this.jm = e2, this.layout = e2.layout, this.container = null, this.e_panel = null, this.e_nodes = null, this.size = { w: 0, h: 0 }, this.selected_node = null, this.editing_node = null, this.graph = null, this.render_node = t2.custom_node_render ? this._custom_node_render : this._default_node_render, this.zoom_current = 1, this.device_pixel_ratio = this.opts.enable_device_pixel_ratio && r.w.devicePixelRatio || 1, this._initialized = false;
        }
        init() {
          if (s.debug(this.opts), s.debug("view.init"), this.container = r.i(this.opts.container) ? this.opts.container : r.g(this.opts.container), this.container) {
            var e2;
            this.graph = (e2 = this, "svg" === this.opts.engine.toLowerCase() ? new v(e2) : new f(e2)), this.e_panel = r.c("div"), this.e_nodes = r.c("jmnodes"), this.e_editor = r.c("input"), this.e_panel.className = "jsmind-inner jmnode-overflow-" + this.opts.node_overflow, this.e_panel.tabIndex = 1, this.e_panel.appendChild(this.graph.element()), this.e_panel.appendChild(this.e_nodes), this.e_editor.className = "jsmind-editor", this.e_editor.type = "text";
            var t2 = this;
            r.on(this.e_editor, "keydown", function(e3) {
              var i2 = e3 || event;
              13 == i2.keyCode && (t2.edit_node_end(), i2.stopPropagation());
            }), r.on(this.e_editor, "blur", function(e3) {
              t2.edit_node_end();
            }), this.container.appendChild(this.e_panel), this.container.offsetParent || new IntersectionObserver((e3, t3) => {
              e3[0].isIntersecting && (t3.unobserve(this.e_panel), this.resize());
            }).observe(this.e_panel);
          } else
            s.error("the options.view.container was not be found in dom");
        }
        add_event(e2, t2, i2, n2) {
          let o2 = n2 ? this.e_panel : this.e_nodes;
          r.on(o2, t2, function(t3) {
            var n3 = t3 || event;
            i2.call(e2, n3);
          });
        }
        get_binded_nodeid(e2) {
          if (null == e2)
            return null;
          var t2 = e2.tagName.toLowerCase();
          return "jmnode" == t2 || "jmexpander" == t2 ? e2.getAttribute("nodeid") : "jmnodes" == t2 || "body" == t2 || "html" == t2 ? null : this.get_binded_nodeid(e2.parentElement);
        }
        is_node(e2) {
          if (null == e2)
            return false;
          var t2 = e2.tagName.toLowerCase();
          return "jmnode" == t2 || "jmnodes" != t2 && "body" != t2 && "html" != t2 && this.is_node(e2.parentElement);
        }
        is_expander(e2) {
          return "jmexpander" == e2.tagName.toLowerCase();
        }
        reset() {
          s.debug("view.reset"), this.selected_node = null, this.clear_lines(), this.clear_nodes(), this.reset_theme();
        }
        reset_theme() {
          var e2 = this.jm.options.theme;
          this.e_nodes.className = e2 ? "theme-" + e2 : "";
        }
        reset_custom_style() {
          var e2 = this.jm.mind.nodes;
          for (var t2 in e2)
            this.reset_node_custom_style(e2[t2]);
        }
        load() {
          s.debug("view.load"), this.setup_canvas_draggable(this.opts.draggable), this.init_nodes(), this._initialized = true;
        }
        expand_size() {
          var e2 = this.layout.get_min_size(), t2 = e2.w + 2 * this.opts.hmargin, i2 = e2.h + 2 * this.opts.vmargin, n2 = this.e_panel.clientWidth, o2 = this.e_panel.clientHeight;
          n2 < t2 && (n2 = t2), o2 < i2 && (o2 = i2), this.size.w = n2, this.size.h = o2;
        }
        init_nodes_size(e2) {
          var t2 = e2._data.view;
          t2.width = t2.element.clientWidth, t2.height = t2.element.clientHeight;
        }
        init_nodes() {
          var e2 = this.jm.mind.nodes, t2 = r.d.createDocumentFragment();
          for (var i2 in e2)
            this.create_node_element(e2[i2], t2);
          this.e_nodes.appendChild(t2), this.run_in_c11y_mode_if_needed(() => {
            for (var t3 in e2)
              this.init_nodes_size(e2[t3]);
          });
        }
        add_node(e2) {
          this.create_node_element(e2, this.e_nodes), this.run_in_c11y_mode_if_needed(() => {
            this.init_nodes_size(e2);
          });
        }
        run_in_c11y_mode_if_needed(e2) {
          this.container.offsetParent ? e2() : (s.warn("init nodes in compatibility mode. because the container or its parent has style {display:none}. "), this.e_panel.style.position = "absolute", this.e_panel.style.top = "-100000", r.d.body.appendChild(this.e_panel), e2(), this.container.appendChild(this.e_panel), this.e_panel.style.position = null, this.e_panel.style.top = null);
        }
        create_node_element(e2, t2) {
          var i2 = null;
          "view" in e2._data ? i2 = e2._data.view : (i2 = {}, e2._data.view = i2);
          var n2 = r.c("jmnode");
          if (e2.isroot)
            n2.className = "root";
          else {
            var o2 = r.c("jmexpander");
            r.t(o2, "-"), o2.setAttribute("nodeid", e2.id), o2.style.visibility = "hidden", t2.appendChild(o2), i2.expander = o2;
          }
          e2.topic && this.render_node(n2, e2), n2.setAttribute("nodeid", e2.id), n2.style.visibility = "hidden", this._reset_node_custom_style(n2, e2.data), t2.appendChild(n2), i2.element = n2;
        }
        remove_node(e2) {
          null != this.selected_node && this.selected_node.id == e2.id && (this.selected_node = null), null != this.editing_node && this.editing_node.id == e2.id && (e2._data.view.element.removeChild(this.e_editor), this.editing_node = null);
          for (var t2 = e2.children, i2 = t2.length; i2--; )
            this.remove_node(t2[i2]);
          if (e2._data.view) {
            var n2 = e2._data.view.element, o2 = e2._data.view.expander;
            this.e_nodes.removeChild(n2), this.e_nodes.removeChild(o2), e2._data.view.element = null, e2._data.view.expander = null;
          }
        }
        update_node(e2) {
          var t2 = e2._data.view, i2 = t2.element;
          if (e2.topic && this.render_node(i2, e2), this.layout.is_visible(e2))
            t2.width = i2.clientWidth, t2.height = i2.clientHeight;
          else {
            let e3 = i2.getAttribute("style");
            i2.style = "visibility: visible; left:0; top:0;", t2.width = i2.clientWidth, t2.height = i2.clientHeight, i2.style = e3;
          }
        }
        select_node(e2) {
          if (this.selected_node) {
            var t2 = this.selected_node._data.view.element;
            t2.className = t2.className.replace(/\s*selected\b/i, ""), this.restore_selected_node_custom_style(this.selected_node);
          }
          e2 && (this.selected_node = e2, e2._data.view.element.className += " selected", this.clear_selected_node_custom_style(e2));
        }
        select_clear() {
          this.select_node(null);
        }
        get_editing_node() {
          return this.editing_node;
        }
        is_editing() {
          return !!this.editing_node;
        }
        edit_node_begin(e2) {
          if (e2.topic) {
            null != this.editing_node && this.edit_node_end(), this.editing_node = e2;
            var t2 = e2._data.view.element, i2 = e2.topic, n2 = getComputedStyle(t2);
            this.e_editor.value = i2, this.e_editor.style.width = t2.clientWidth - parseInt(n2.getPropertyValue("padding-left")) - parseInt(n2.getPropertyValue("padding-right")) + "px", t2.innerHTML = "", t2.appendChild(this.e_editor), t2.style.zIndex = 5, this.e_editor.focus(), this.e_editor.select();
          } else
            s.warn("don't edit image nodes");
        }
        edit_node_end() {
          if (null != this.editing_node) {
            var e2 = this.editing_node;
            this.editing_node = null;
            var t2 = e2._data.view.element, i2 = this.e_editor.value;
            t2.style.zIndex = "auto", t2.removeChild(this.e_editor), a.text.is_empty(i2) || e2.topic === i2 ? this.render_node(t2, e2) : this.jm.update_node(e2.id, i2);
          }
          this.e_panel.focus();
        }
        get_view_offset() {
          var e2 = this.layout.bounds;
          return { x: (this.size.w - e2.e - e2.w) / 2, y: this.size.h / 2 };
        }
        resize() {
          this.graph.set_size(1, 1), this.e_nodes.style.width = "1px", this.e_nodes.style.height = "1px", this.expand_size(), this._show();
        }
        _show() {
          this.graph.set_size(this.size.w, this.size.h), this.e_nodes.style.width = this.size.w + "px", this.e_nodes.style.height = this.size.h + "px", this.show_nodes(), this.show_lines(), this.jm.invoke_event_handle(i.resize, { data: [] });
        }
        zoom_in(e2) {
          return this.set_zoom(this.zoom_current + this.opts.zoom.step, e2);
        }
        zoom_out(e2) {
          return this.set_zoom(this.zoom_current - this.opts.zoom.step, e2);
        }
        set_zoom(e2, t2) {
          if (e2 < this.opts.zoom.min || e2 > this.opts.zoom.max)
            return false;
          let i2 = this.e_panel.getBoundingClientRect();
          if (e2 < 1 && e2 < this.zoom_current && this.size.w * e2 < i2.width && this.size.h * e2 < i2.height)
            return false;
          let n2 = t2 ? { x: t2.x - i2.x, y: t2.y - i2.y } : { x: i2.width / 2, y: i2.height / 2 }, o2 = (this.e_panel.scrollLeft + n2.x) * e2 / this.zoom_current - n2.x, s2 = (this.e_panel.scrollTop + n2.y) * e2 / this.zoom_current - n2.y;
          this.zoom_current = e2;
          for (var r2 = 0; r2 < this.e_panel.children.length; r2++)
            this.e_panel.children[r2].style.zoom = e2;
          return this._show(), this.e_panel.scrollLeft = o2, this.e_panel.scrollTop = s2, true;
        }
        show(e2) {
          s.debug(`view.show: {keep_center: ${e2}}`), this.expand_size(), this._show(), e2 && this.center_node(this.jm.mind.root);
        }
        relayout() {
          this.expand_size(), this._show();
        }
        save_location(e2) {
          var t2 = e2._data.view;
          t2._saved_location = { x: parseInt(t2.element.style.left) - this.e_panel.scrollLeft, y: parseInt(t2.element.style.top) - this.e_panel.scrollTop };
        }
        restore_location(e2) {
          var t2 = e2._data.view;
          this.e_panel.scrollLeft = parseInt(t2.element.style.left) - t2._saved_location.x, this.e_panel.scrollTop = parseInt(t2.element.style.top) - t2._saved_location.y;
        }
        clear_nodes() {
          var e2 = this.jm.mind;
          if (null != e2) {
            var t2 = e2.nodes, i2 = null;
            for (var n2 in t2)
              (i2 = t2[n2])._data.view.element = null, i2._data.view.expander = null;
            this.e_nodes.innerHTML = "";
          }
        }
        show_nodes() {
          var e2 = this.jm.mind.nodes, t2 = null, i2 = null, n2 = null, o2 = null, s2 = this.get_view_offset();
          for (var r2 in e2)
            i2 = (o2 = (t2 = e2[r2])._data.view).element, this.layout.is_visible(t2) ? (this.reset_node_custom_style(t2), n2 = this.layout.get_node_point(t2), o2.abs_x = s2.x + n2.x, o2.abs_y = s2.y + n2.y, i2.style.left = s2.x + n2.x + "px", i2.style.top = s2.y + n2.y + "px", i2.style.display = "", i2.style.visibility = "visible", this._show_expander(t2, s2)) : (i2.style.display = "none", o2.expander.style.display = "none");
        }
        _show_expander(e2, t2) {
          if (e2.isroot)
            return;
          var i2 = e2._data.view.expander;
          if (0 == e2.children.length)
            return i2.style.display = "none", void (i2.style.visibility = "hidden");
          let n2 = this._get_expander_text(e2);
          r.t(i2, n2);
          let o2 = this.layout.get_expander_point(e2);
          i2.style.left = t2.x + o2.x + "px", i2.style.top = t2.y + o2.y + "px", i2.style.display = "", i2.style.visibility = "visible";
        }
        _get_expander_text(e2) {
          let t2 = this.opts.expander_style ? this.opts.expander_style.toLowerCase() : "char";
          return "number" === t2 ? e2.children.length > 99 ? "..." : e2.children.length : "char" === t2 ? e2.expanded ? "-" : "+" : void 0;
        }
        _default_node_render(e2, t2) {
          this.opts.support_html ? r.h(e2, t2.topic) : r.t(e2, t2.topic);
        }
        _custom_node_render(e2, t2) {
          this.opts.custom_node_render(this.jm, e2, t2) || this._default_node_render(e2, t2);
        }
        reset_node_custom_style(e2) {
          this._reset_node_custom_style(e2._data.view.element, e2.data);
        }
        _reset_node_custom_style(e2, t2) {
          if ("background-color" in t2 && (e2.style.backgroundColor = t2["background-color"]), "foreground-color" in t2 && (e2.style.color = t2["foreground-color"]), "width" in t2 && (e2.style.width = t2.width + "px"), "height" in t2 && (e2.style.height = t2.height + "px"), "font-size" in t2 && (e2.style.fontSize = t2["font-size"] + "px"), "font-weight" in t2 && (e2.style.fontWeight = t2["font-weight"]), "font-style" in t2 && (e2.style.fontStyle = t2["font-style"]), "background-image" in t2) {
            var i2 = t2["background-image"];
            if (i2.startsWith("data") && t2.width && t2.height) {
              var n2 = new Image();
              n2.onload = function() {
                var t3 = r.c("canvas");
                t3.width = e2.clientWidth, t3.height = e2.clientHeight;
                if (t3.getContext) {
                  t3.getContext("2d").drawImage(this, 2, 2, e2.clientWidth, e2.clientHeight);
                  var i3 = t3.toDataURL();
                  e2.style.backgroundImage = "url(" + i3 + ")";
                }
              }, n2.src = i2;
            } else
              e2.style.backgroundImage = "url(" + i2 + ")";
            e2.style.backgroundSize = "99%", "background-rotation" in t2 && (e2.style.transform = "rotate(" + t2["background-rotation"] + "deg)");
          }
        }
        restore_selected_node_custom_style(e2) {
          var t2 = e2._data.view.element, i2 = e2.data;
          "background-color" in i2 && (t2.style.backgroundColor = i2["background-color"]), "foreground-color" in i2 && (t2.style.color = i2["foreground-color"]);
        }
        clear_selected_node_custom_style(e2) {
          var t2 = e2._data.view.element;
          t2.style.backgroundColor = "", t2.style.color = "";
        }
        clear_lines() {
          this.graph.clear();
        }
        show_lines() {
          this.clear_lines();
          var e2 = this.jm.mind.nodes, t2 = null, i2 = null, n2 = null, o2 = null, s2 = this.get_view_offset();
          for (var r2 in e2)
            (t2 = e2[r2]).isroot || this.layout.is_visible(t2) && (i2 = this.layout.get_node_point_in(t2), n2 = this.layout.get_node_point_out(t2.parent), o2 = t2.data["leading-line-color"], this.graph.draw_line(n2, i2, s2, o2));
        }
        setup_canvas_draggable(e2) {
          if (this.opts.draggable = e2, !this._initialized) {
            let e3, t2, i2 = false;
            this.opts.hide_scrollbars_when_draggable && (this.e_panel.style = "overflow: hidden"), r.on(this.container, "mousedown", (n2) => {
              this.opts.draggable && (i2 = true, e3 = n2.clientX, t2 = n2.clientY);
            }), r.on(this.container, "mouseup", () => {
              i2 = false;
            }), r.on(this.container, "mousemove", (n2) => {
              this.opts.draggable && i2 && (this.e_panel.scrollBy(e3 - n2.clientX, t2 - n2.clientY), e3 = n2.clientX, t2 = n2.clientY);
            });
          }
        }
        center_node(e2) {
          if (!this.layout.is_visible(e2))
            return s.warn("can not scroll to the node, because it is invisible"), false;
          let t2 = e2._data.view, i2 = this.e_panel.getBoundingClientRect(), n2 = t2.abs_x + t2.width / 2, o2 = t2.abs_y + t2.height / 2;
          return this.e_panel.scrollTo(n2 * this.zoom_current - i2.width / 2, o2 * this.zoom_current - i2.height / 2), true;
        }
        zoomIn(e2) {
          return s.warn("please use zoom_in instead"), this.zoom_in(e2);
        }
        zoomOut(e2) {
          return s.warn("please use zoom_out instead"), this.zoom_out(e2);
        }
        setZoom(e2, t2) {
          return s.warn("please use set_zoom instead"), this.set_zoom(e2, t2);
        }
      }
      class m {
        constructor(e2, t2) {
          this.jm = e2, this.opts = t2, this.mapping = t2.mapping, this.handles = t2.handles, this._newid = null, this._mapping = {};
        }
        init() {
          for (var e2 in r.on(this.jm.view.e_panel, "keydown", this.handler.bind(this)), this.handles.addchild = this.handle_addchild, this.handles.addbrother = this.handle_addbrother, this.handles.editnode = this.handle_editnode, this.handles.delnode = this.handle_delnode, this.handles.toggle = this.handle_toggle, this.handles.up = this.handle_up, this.handles.down = this.handle_down, this.handles.left = this.handle_left, this.handles.right = this.handle_right, this.mapping)
            if (this.mapping[e2] && e2 in this.handles) {
              let t2 = this.mapping[e2];
              Array.isArray(t2) || (t2 = [t2]);
              for (let i2 of t2)
                this._mapping[i2] = this.handles[e2];
            }
          "function" == typeof this.opts.id_generator ? this._newid = this.opts.id_generator : this._newid = a.uuid.newid;
        }
        enable_shortcut() {
          this.opts.enable = true;
        }
        disable_shortcut() {
          this.opts.enable = false;
        }
        handler(e2) {
          if (9 == e2.which && e2.preventDefault(), !this.jm.view.is_editing()) {
            var t2 = e2 || event;
            if (!this.opts.enable)
              return true;
            var i2 = t2.keyCode + (t2.metaKey << 13) + (t2.ctrlKey << 12) + (t2.altKey << 11) + (t2.shiftKey << 10);
            i2 in this._mapping && this._mapping[i2].call(this, this.jm, e2);
          }
        }
        handle_addchild(e2, t2) {
          var i2 = e2.get_selected_node();
          if (i2) {
            var n2 = this._newid();
            e2.add_node(i2, n2, "New Node") && (e2.select_node(n2), e2.begin_edit(n2));
          }
        }
        handle_addbrother(e2, t2) {
          var i2 = e2.get_selected_node();
          if (i2 && !i2.isroot) {
            var n2 = this._newid();
            e2.insert_node_after(i2, n2, "New Node") && (e2.select_node(n2), e2.begin_edit(n2));
          }
        }
        handle_editnode(e2, t2) {
          var i2 = e2.get_selected_node();
          i2 && e2.begin_edit(i2);
        }
        handle_delnode(e2, t2) {
          var i2 = e2.get_selected_node();
          i2 && !i2.isroot && (e2.select_node(i2.parent), e2.remove_node(i2));
        }
        handle_toggle(e2, t2) {
          var i2 = t2 || event, n2 = e2.get_selected_node();
          n2 && (e2.toggle_node(n2.id), i2.stopPropagation(), i2.preventDefault());
        }
        handle_up(e2, t2) {
          var i2 = t2 || event, n2 = e2.get_selected_node();
          if (n2) {
            var o2 = e2.find_node_before(n2);
            if (!o2) {
              var s2 = e2.find_node_before(n2.parent);
              s2 && s2.children.length > 0 && (o2 = s2.children[s2.children.length - 1]);
            }
            o2 && e2.select_node(o2), i2.stopPropagation(), i2.preventDefault();
          }
        }
        handle_down(e2, t2) {
          var i2 = t2 || event, n2 = e2.get_selected_node();
          if (n2) {
            var o2 = e2.find_node_after(n2);
            if (!o2) {
              var s2 = e2.find_node_after(n2.parent);
              s2 && s2.children.length > 0 && (o2 = s2.children[0]);
            }
            o2 && e2.select_node(o2), i2.stopPropagation(), i2.preventDefault();
          }
        }
        handle_left(e2, i2) {
          this._handle_direction(e2, i2, t.left);
        }
        handle_right(e2, i2) {
          this._handle_direction(e2, i2, t.right);
        }
        _handle_direction(e2, t2, i2) {
          var n2 = t2 || event, o2 = e2.get_selected_node(), s2 = null;
          if (o2) {
            if (o2.isroot) {
              for (var r2 = o2.children, a2 = [], d2 = 0; d2 < r2.length; d2++)
                r2[d2].direction === i2 && a2.push(d2);
              s2 = r2[a2[Math.floor((a2.length - 1) / 2)]];
            } else if (o2.direction === i2) {
              var l2 = (a2 = o2.children).length;
              l2 > 0 && (s2 = a2[Math.floor((l2 - 1) / 2)]);
            } else
              s2 = o2.parent;
            s2 && e2.select_node(s2), n2.stopPropagation(), n2.preventDefault();
          }
        }
      }
      const w = { plugins: [] };
      function y(e2) {
        if (!(e2 instanceof x))
          throw new Error("can not register plugin, it is not an instance of Plugin");
        if (w.plugins.map((e3) => e3.name).includes(e2.name))
          throw new Error("can not register plugin " + e2.name + ": plugin name already exist");
        w.plugins.push(e2);
      }
      function b(e2, t2) {
        r.w.setTimeout(function() {
          !function(e3, t3) {
            w.plugins.forEach((i2) => i2.fn_init(e3, t3[i2.name]));
          }(e2, t2);
        }, 0);
      }
      class x {
        constructor(e2, t2) {
          if (!e2)
            throw new Error("plugin must has a name");
          if (!t2 || "function" != typeof t2)
            throw new Error("plugin must has an init function");
          this.name = e2, this.fn_init = t2;
        }
      }
      const _z = class _z {
        constructor(t2) {
          _z.current = this, this.options = function(e2) {
            var t3 = {};
            if (a.json.merge(t3, d), a.json.merge(t3, e2), !t3.container)
              throw new Error("the options.container should not be null or empty.");
            return t3;
          }(t2), s.level(n[this.options.log_level]), this.version = e, this.initialized = false, this.mind = null, this.event_handles = [], this.init();
        }
        init() {
          if (!this.initialized) {
            this.initialized = true;
            var e2 = { mode: this.options.mode, hspace: this.options.layout.hspace, vspace: this.options.layout.vspace, pspace: this.options.layout.pspace, cousin_space: this.options.layout.cousin_space }, t2 = { container: this.options.container, support_html: this.options.support_html, engine: this.options.view.engine, enable_device_pixel_ratio: this.options.view.enable_device_pixel_ratio, hmargin: this.options.view.hmargin, vmargin: this.options.view.vmargin, line_width: this.options.view.line_width, line_color: this.options.view.line_color, line_style: this.options.view.line_style, custom_line_render: this.options.view.custom_line_render, draggable: this.options.view.draggable, hide_scrollbars_when_draggable: this.options.view.hide_scrollbars_when_draggable, node_overflow: this.options.view.node_overflow, zoom: this.options.view.zoom, custom_node_render: this.options.view.custom_node_render, expander_style: this.options.view.expander_style };
            this.data = new c(this), this.layout = new p(this, e2), this.view = new g(this, t2), this.shortcut = new m(this, this.options.shortcut), this.data.init(), this.layout.init(), this.view.init(), this.shortcut.init(), this._event_bind(), b(this, this.options.plugin);
          }
        }
        get_editable() {
          return this.options.editable;
        }
        enable_edit() {
          this.options.editable = true;
        }
        disable_edit() {
          this.options.editable = false;
        }
        get_view_draggable() {
          return this.options.view.draggable;
        }
        enable_view_draggable() {
          this.options.view.draggable = true, this.view.setup_canvas_draggable(true);
        }
        disable_view_draggable() {
          this.options.view.draggable = false, this.view.setup_canvas_draggable(false);
        }
        enable_event_handle(e2) {
          this.options.default_event_handle["enable_" + e2 + "_handle"] = true;
        }
        disable_event_handle(e2) {
          this.options.default_event_handle["enable_" + e2 + "_handle"] = false;
        }
        set_theme(e2) {
          var t2 = this.options.theme;
          this.options.theme = e2 || null, t2 != this.options.theme && (this.view.reset_theme(), this.view.reset_custom_style());
        }
        _event_bind() {
          this.view.add_event(this, "mousedown", this.mousedown_handle), this.view.add_event(this, "click", this.click_handle), this.view.add_event(this, "dblclick", this.dblclick_handle), this.view.add_event(this, "mousewheel", this.mousewheel_handle, true);
        }
        mousedown_handle(e2) {
          if (this.options.default_event_handle.enable_mousedown_handle) {
            var t2 = e2.target || event.srcElement, i2 = this.view.get_binded_nodeid(t2);
            i2 ? this.view.is_node(t2) && this.select_node(i2) : this.select_clear();
          }
        }
        click_handle(e2) {
          if (this.options.default_event_handle.enable_click_handle) {
            var t2 = e2.target || event.srcElement;
            if (this.view.is_expander(t2)) {
              var i2 = this.view.get_binded_nodeid(t2);
              i2 && this.toggle_node(i2);
            }
          }
        }
        dblclick_handle(e2) {
          if (this.options.default_event_handle.enable_dblclick_handle && this.get_editable()) {
            var t2 = e2.target || event.srcElement;
            if (this.view.is_node(t2)) {
              var i2 = this.view.get_binded_nodeid(t2);
              i2 && this.begin_edit(i2);
            }
          }
        }
        mousewheel_handle(e2) {
          if (this.options.default_event_handle.enable_mousewheel_handle && e2.ctrlKey) {
            var t2 = e2 || event;
            t2.preventDefault(), t2.deltaY < 0 ? this.view.zoom_in(t2) : this.view.zoom_out(t2);
          }
        }
        begin_edit(e2) {
          if (!l.is_node(e2)) {
            var t2 = this.get_node(e2);
            return t2 ? this.begin_edit(t2) : (s.error("the node[id=" + e2 + "] can not be found."), false);
          }
          this.get_editable() ? this.view.edit_node_begin(e2) : s.error("fail, this mind map is not editable.");
        }
        end_edit() {
          this.view.edit_node_end();
        }
        toggle_node(e2) {
          if (!l.is_node(e2)) {
            var t2 = this.get_node(e2);
            return t2 ? this.toggle_node(t2) : void s.error("the node[id=" + e2 + "] can not be found.");
          }
          e2.isroot || (this.view.save_location(e2), this.layout.toggle_node(e2), this.view.relayout(), this.view.restore_location(e2));
        }
        expand_node(e2) {
          if (!l.is_node(e2)) {
            var t2 = this.get_node(e2);
            return t2 ? this.expand_node(t2) : void s.error("the node[id=" + e2 + "] can not be found.");
          }
          e2.isroot || (this.view.save_location(e2), this.layout.expand_node(e2), this.view.relayout(), this.view.restore_location(e2));
        }
        collapse_node(e2) {
          if (!l.is_node(e2)) {
            var t2 = this.get_node(e2);
            return t2 ? this.collapse_node(t2) : void s.error("the node[id=" + e2 + "] can not be found.");
          }
          e2.isroot || (this.view.save_location(e2), this.layout.collapse_node(e2), this.view.relayout(), this.view.restore_location(e2));
        }
        expand_all() {
          this.layout.expand_all(), this.view.relayout();
        }
        collapse_all() {
          this.layout.collapse_all(), this.view.relayout();
        }
        expand_to_depth(e2) {
          this.layout.expand_to_depth(e2), this.view.relayout();
        }
        _reset() {
          this.view.reset(), this.layout.reset(), this.data.reset();
        }
        _show(e2, t2) {
          var n2 = e2 || u.node_array.example;
          this.mind = this.data.load(n2), this.mind ? (s.debug("data.load ok"), this.view.load(), s.debug("view.load ok"), this.layout.layout(), s.debug("layout.layout ok"), this.view.show(!t2), s.debug("view.show ok"), this.invoke_event_handle(i.show, { data: [e2] })) : s.error("data.load error");
        }
        show(e2, t2) {
          this._reset(), this._show(e2, t2);
        }
        get_meta() {
          return { name: this.mind.name, author: this.mind.author, version: this.mind.version };
        }
        get_data(e2) {
          var t2 = e2 || "node_tree";
          return this.data.get_data(t2);
        }
        get_root() {
          return this.mind.root;
        }
        get_node(e2) {
          return l.is_node(e2) ? e2 : this.mind.get_node(e2);
        }
        add_node(e2, n2, o2, r2, a2) {
          if (this.get_editable()) {
            var d2 = this.get_node(e2), l2 = t.of(a2);
            void 0 === l2 && (l2 = this.layout.calculate_next_child_direction(d2));
            var h2 = this.mind.add_node(d2, n2, o2, r2, l2);
            return h2 && (this.view.add_node(h2), this.layout.layout(), this.view.show(false), this.view.reset_node_custom_style(h2), this.expand_node(d2), this.invoke_event_handle(i.edit, { evt: "add_node", data: [d2.id, n2, o2, r2, l2], node: n2 })), h2;
          }
          return s.error("fail, this mind map is not editable"), null;
        }
        insert_node_before(e2, n2, o2, r2, a2) {
          if (this.get_editable()) {
            var d2 = this.get_node(e2), l2 = t.of(a2);
            void 0 === l2 && (l2 = this.layout.calculate_next_child_direction(d2.parent));
            var h2 = this.mind.insert_node_before(d2, n2, o2, r2, l2);
            return h2 && (this.view.add_node(h2), this.layout.layout(), this.view.show(false), this.invoke_event_handle(i.edit, { evt: "insert_node_before", data: [d2.id, n2, o2, r2, l2], node: n2 })), h2;
          }
          return s.error("fail, this mind map is not editable"), null;
        }
        insert_node_after(e2, n2, o2, r2, a2) {
          if (this.get_editable()) {
            var d2 = this.get_node(e2), l2 = t.of(a2);
            void 0 === l2 && (l2 = this.layout.calculate_next_child_direction(d2.parent));
            var h2 = this.mind.insert_node_after(d2, n2, o2, r2, l2);
            return h2 && (this.view.add_node(h2), this.layout.layout(), this.view.show(false), this.invoke_event_handle(i.edit, { evt: "insert_node_after", data: [d2.id, n2, o2, r2, l2], node: n2 })), h2;
          }
          return s.error("fail, this mind map is not editable"), null;
        }
        remove_node(e2) {
          if (!l.is_node(e2)) {
            var t2 = this.get_node(e2);
            return t2 ? this.remove_node(t2) : (s.error("the node[id=" + e2 + "] can not be found."), false);
          }
          if (this.get_editable()) {
            if (e2.isroot)
              return s.error("fail, can not remove root node"), false;
            var n2 = e2.id, o2 = e2.parent.id, r2 = this.get_node(o2);
            return this.view.save_location(r2), this.view.remove_node(e2), this.mind.remove_node(e2), this.layout.layout(), this.view.show(false), this.view.restore_location(r2), this.invoke_event_handle(i.edit, { evt: "remove_node", data: [n2], node: o2 }), true;
          }
          return s.error("fail, this mind map is not editable"), false;
        }
        update_node(e2, t2) {
          if (this.get_editable())
            if (a.text.is_empty(t2))
              s.warn("fail, topic can not be empty");
            else {
              var n2 = this.get_node(e2);
              if (n2) {
                if (n2.topic === t2)
                  return s.info("nothing changed"), void this.view.update_node(n2);
                n2.topic = t2, this.view.update_node(n2), this.layout.layout(), this.view.show(false), this.invoke_event_handle(i.edit, { evt: "update_node", data: [e2, t2], node: e2 });
              }
            }
          else
            s.error("fail, this mind map is not editable");
        }
        move_node(e2, t2, n2, o2) {
          if (this.get_editable()) {
            var r2 = this.get_node(e2), a2 = this.mind.move_node(r2, t2, n2, o2);
            a2 && (this.view.update_node(a2), this.layout.layout(), this.view.show(false), this.invoke_event_handle(i.edit, { evt: "move_node", data: [e2, t2, n2, o2], node: e2 }));
          } else
            s.error("fail, this mind map is not editable");
        }
        select_node(e2) {
          if (!l.is_node(e2)) {
            var t2 = this.get_node(e2);
            return t2 ? this.select_node(t2) : void s.error("the node[id=" + e2 + "] can not be found.");
          }
          this.layout.is_visible(e2) && (this.mind.selected = e2, this.view.select_node(e2), this.invoke_event_handle(i.select, { evt: "select_node", data: [], node: e2.id }));
        }
        get_selected_node() {
          return this.mind ? this.mind.selected : null;
        }
        select_clear() {
          this.mind && (this.mind.selected = null, this.view.select_clear());
        }
        is_node_visible(e2) {
          return this.layout.is_visible(e2);
        }
        scroll_node_to_center(e2) {
          if (l.is_node(e2))
            this.view.center_node(e2);
          else {
            var t2 = this.get_node(e2);
            t2 ? this.scroll_node_to_center(t2) : s.error("the node[id=" + e2 + "] can not be found.");
          }
        }
        find_node_before(e2) {
          if (!l.is_node(e2)) {
            var t2 = this.get_node(e2);
            return t2 ? this.find_node_before(t2) : void s.error("the node[id=" + e2 + "] can not be found.");
          }
          if (e2.isroot)
            return null;
          var i2 = null;
          if (e2.parent.isroot)
            for (var n2 = e2.parent.children, o2 = null, r2 = null, a2 = 0; a2 < n2.length; a2++)
              r2 = n2[a2], e2.direction === r2.direction && (e2.id === r2.id && (i2 = o2), o2 = r2);
          else
            i2 = this.mind.get_node_before(e2);
          return i2;
        }
        find_node_after(e2) {
          if (!l.is_node(e2)) {
            var t2 = this.get_node(e2);
            return t2 ? this.find_node_after(t2) : void s.error("the node[id=" + e2 + "] can not be found.");
          }
          if (e2.isroot)
            return null;
          var i2 = null;
          if (e2.parent.isroot) {
            for (var n2 = e2.parent.children, o2 = false, r2 = null, a2 = 0; a2 < n2.length; a2++)
              if (r2 = n2[a2], e2.direction === r2.direction) {
                if (o2) {
                  i2 = r2;
                  break;
                }
                e2.id === r2.id && (o2 = true);
              }
          } else
            i2 = this.mind.get_node_after(e2);
          return i2;
        }
        set_node_color(e2, t2, i2) {
          if (!this.get_editable())
            return s.error("fail, this mind map is not editable"), null;
          var n2 = this.mind.get_node(e2);
          n2 && (t2 && (n2.data["background-color"] = t2), i2 && (n2.data["foreground-color"] = i2), this.view.reset_node_custom_style(n2));
        }
        set_node_font_style(e2, t2, i2, n2) {
          if (!this.get_editable())
            return s.error("fail, this mind map is not editable"), null;
          var o2 = this.mind.get_node(e2);
          o2 && (t2 && (o2.data["font-size"] = t2), i2 && (o2.data["font-weight"] = i2), n2 && (o2.data["font-style"] = n2), this.view.reset_node_custom_style(o2), this.view.update_node(o2), this.layout.layout(), this.view.show(false));
        }
        set_node_background_image(e2, t2, i2, n2, o2) {
          if (!this.get_editable())
            return s.error("fail, this mind map is not editable"), null;
          var r2 = this.mind.get_node(e2);
          r2 && (t2 && (r2.data["background-image"] = t2), i2 && (r2.data.width = i2), n2 && (r2.data.height = n2), o2 && (r2.data["background-rotation"] = o2), this.view.reset_node_custom_style(r2), this.view.update_node(r2), this.layout.layout(), this.view.show(false));
        }
        set_node_background_rotation(e2, t2) {
          if (!this.get_editable())
            return s.error("fail, this mind map is not editable"), null;
          var i2 = this.mind.get_node(e2);
          if (i2) {
            if (!i2.data["background-image"])
              return s.error("fail, only can change rotation angle of node with background image"), null;
            i2.data["background-rotation"] = t2, this.view.reset_node_custom_style(i2), this.view.update_node(i2), this.layout.layout(), this.view.show(false);
          }
        }
        resize() {
          this.view.resize();
        }
        add_event_listener(e2) {
          "function" == typeof e2 && this.event_handles.push(e2);
        }
        clear_event_listener() {
          this.event_handles = [];
        }
        invoke_event_handle(e2, t2) {
          var i2 = this;
          r.w.setTimeout(function() {
            i2._invoke_event_handle(e2, t2);
          }, 0);
        }
        _invoke_event_handle(e2, t2) {
          for (var i2 = this.event_handles.length, n2 = 0; n2 < i2; n2++)
            this.event_handles[n2](e2, t2);
        }
        static show(e2, t2) {
          s.warn("`jsMind.show(options, mind)` is deprecated, please use `jm = new jsMind(options); jm.show(mind);` instead");
          var i2 = new _z(e2);
          return i2.show(t2), i2;
        }
      };
      __publicField(_z, "mind", h);
      __publicField(_z, "node", l);
      __publicField(_z, "direction", t);
      __publicField(_z, "event_type", i);
      __publicField(_z, "$", r);
      __publicField(_z, "plugin", x);
      __publicField(_z, "register_plugin", y);
      __publicField(_z, "util", a);
      let z = _z;
      return z;
    });
  }
});

export {
  require_jsmind
};
/*! Bundled license information:

jsmind/es6/jsmind.js:
  (**
  * @license BSD-3-Clause
  * @copyright 2014-2023 hizzgdev@163.com
  *
  * Project Home:
  *   https://github.com/hizzgdev/jsmind/
  *)
*/
//# sourceMappingURL=chunk-4KODZ5DT.js.map
