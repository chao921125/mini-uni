(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
	["app-service"],
	{
		"0516": function (t, e, n) {
			"use strict";
			n.r(e);
			var i = n("5ad1"),
				a = n.n(i);
			for (var r in i)
				"default" !== r &&
					(function (t) {
						n.d(e, t, function () {
							return i[t];
						});
					})(r);
			e["default"] = a.a;
		},
		"0de9": function (t, e, n) {
			"use strict";
			function i(t) {
				var e = Object.prototype.toString.call(t);
				return e.substring(8, e.length - 1);
			}
			function a() {
				return "string" === typeof __channelId__ && __channelId__;
			}
			function r(t) {
				for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
				console[t].apply(console, n);
			}
			function s() {
				for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
				var r = e.shift();
				if (a()) return e.push(e.pop().replace("at ", "uni-app:///")), console[r]["apply"](console, e);
				var s = e.map(function (t) {
						var e = Object.prototype.toString.call(t).toLowerCase();
						if ("[object object]" === e || "[object array]" === e)
							try {
								t = "---BEGIN:JSON---" + JSON.stringify(t) + "---END:JSON---";
							} catch (a) {
								t = "[object object]";
							}
						else if (null === t) t = "---NULL---";
						else if (void 0 === t) t = "---UNDEFINED---";
						else {
							var n = i(t).toUpperCase();
							t = "NUMBER" === n || "BOOLEAN" === n ? "---BEGIN:" + n + "---" + t + "---END:" + n + "---" : String(t);
						}
						return t;
					}),
					o = "";
				if (s.length > 1) {
					var u = s.pop();
					(o = s.join("---COMMA---")), 0 === u.indexOf(" at ") ? (o += u) : (o += "---COMMA---" + u);
				} else o = s[0];
				console[r](o);
			}
			n.r(e),
				n.d(e, "log", function () {
					return r;
				}),
				n.d(e, "default", function () {
					return s;
				});
		},
		"107b": function (t, e, n) {
			"undefined" === typeof Promise ||
				Promise.prototype.finally ||
				(Promise.prototype.finally = function (t) {
					var e = this.constructor;
					return this.then(
						function (n) {
							return e.resolve(t()).then(function () {
								return n;
							});
						},
						function (n) {
							return e.resolve(t()).then(function () {
								throw n;
							});
						},
					);
				}),
				uni.restoreGlobal && uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval),
				__definePage("pages/index/index", function () {
					return Vue.extend(n("6c42").default);
				}),
				__definePage("pages/sample/richAlert", function () {
					return Vue.extend(n("59bd").default);
				});
		},
		"12f9": function (t, e, n) {
			"use strict";
			var i,
				a = function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n(
						"view",
						{ staticClass: t._$s(0, "sc", "uni-container"), attrs: { _i: 0 } },
						[
							n("view", { staticClass: t._$s(1, "sc", "uni-hello-text"), attrs: { _i: 1 } }, [
								n("text", { staticClass: t._$s(2, "sc", "hello-text"), attrs: { _i: 2 } }),
							]),
							t._l(t._$s(3, "f", { forItems: t.list }), function (e, i, a, r) {
								return n("view", { key: t._$s(3, "f", { forIndex: a, key: e.id }), staticClass: t._$s("3-" + r, "sc", "uni-panel"), attrs: { _i: "3-" + r } }, [
									n(
										"view",
										{
											staticClass: t._$s("4-" + r, "sc", "uni-panel-h"),
											class: t._$s("4-" + r, "c", e.open ? "uni-panel-h-on" : ""),
											attrs: { _i: "4-" + r },
											on: {
												click: function (e) {
													return t.triggerCollapse(i);
												},
											},
										},
										[
											n("text", { staticClass: t._$s("5-" + r, "sc", "uni-panel-text"), attrs: { _i: "5-" + r } }, [
												t._v(t._$s("5-" + r, "t0-0", t._s(e.name))),
											]),
											n(
												"text",
												{
													staticClass: t._$s("6-" + r, "sc", "uni-panel-icon uni-icon"),
													class: t._$s("6-" + r, "c", e.open ? "uni-panel-icon-on" : ""),
													attrs: { _i: "6-" + r },
												},
												[t._v(t._$s("6-" + r, "t0-0", t._s(e.pages ? "" : "")))],
											),
										],
									),
									t._$s("7-" + r, "i", e.open)
										? n(
												"view",
												{ staticClass: t._$s("7-" + r, "sc", "uni-panel-c"), attrs: { _i: "7-" + r } },
												t._l(t._$s("8-" + r, "f", { forItems: e.pages }), function (e, i, a, s) {
													return n(
														"view",
														{
															key: t._$s("8-" + r, "f", { forIndex: a, key: i }),
															staticClass: t._$s("8-" + r + "-" + s, "sc", "uni-navigate-item"),
															attrs: { _i: "8-" + r + "-" + s },
															on: {
																click: function (n) {
																	return t.goDetailPage(e.url);
																},
															},
														},
														[
															n("text", { staticClass: t._$s("9-" + r + "-" + s, "sc", "uni-navigate-text"), attrs: { _i: "9-" + r + "-" + s } }, [
																t._v(t._$s("9-" + r + "-" + s, "t0-0", t._s(e.name ? e.name : e))),
															]),
															n("text", { staticClass: t._$s("10-" + r + "-" + s, "sc", "uni-navigate-icon uni-icon"), attrs: { _i: "10-" + r + "-" + s } }),
														],
													);
												}),
												0,
										  )
										: t._e(),
								]);
							}),
						],
						2,
					);
				},
				r = [];
			n.d(e, "b", function () {
				return a;
			}),
				n.d(e, "c", function () {
					return r;
				}),
				n.d(e, "a", function () {
					return i;
				});
		},
		"23b4": function (t, e, n) {
			"use strict";
			n.r(e);
			var i = n("bf45");
			for (var a in i)
				"default" !== a &&
					(function (t) {
						n.d(e, t, function () {
							return i[t];
						});
					})(a);
			var r,
				s,
				o,
				u,
				c = n("f0c5"),
				l = Object(c["a"])(i["default"], r, s, !1, null, null, null, !1, o, u);
			e["default"] = l.exports;
		},
		4999: function (t, e, n) {
			"use strict";
			(function (t) {
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
				var n = {
					onLaunch: function () {
						t("log", "App Launch", " at App.vue:4");
					},
					onShow: function () {
						t("log", "App Show", " at App.vue:7");
					},
					onHide: function () {
						t("log", "App Hide", " at App.vue:10");
					},
				};
				e.default = n;
			}).call(this, n("0de9")["default"]);
		},
		"59bd": function (t, e, n) {
			"use strict";
			n.r(e);
			var i = n("8c75"),
				a = n("0516");
			for (var r in a)
				"default" !== r &&
					(function (t) {
						n.d(e, t, function () {
							return a[t];
						});
					})(r);
			var s,
				o = n("f0c5"),
				u = Object(o["a"])(a["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], s);
			e["default"] = u.exports;
		},
		"5ad1": function (t, e, n) {
			"use strict";
			(function (t) {
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
				var n = uni.requireNativePlugin("modal"),
					i = uni.requireNativePlugin("DCloud-RichAlert"),
					a = {
						data: function () {
							return { title: "" };
						},
						onLoad: function () {},
						methods: {
							showRichAlert: function () {
								i.show(
									{
										position: "bottom",
										title: "提示信息",
										titleColor: "#FF0000",
										content:
											"<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> 是一个使用 Vue.js 开发跨平台应用的前端框架!\n免费的\n免费的\n免费的\n重要的事情说三遍",
										contentAlign: "left",
										checkBox: { title: "不再提示", isSelected: !0 },
										buttons: [{ title: "取消" }, { title: "否" }, { title: "确认", titleColor: "#3F51B5" }],
									},
									function (e) {
										var i = JSON.stringify(e);
										switch ((n.toast({ message: i, duration: 1.5 }), e.type)) {
											case "button":
												t("log", "callback---button--" + e.index, " at pages\\sample\\richAlert.vue:50");
												break;
											case "checkBox":
												t("log", "callback---checkBox--" + e.isSelected, " at pages\\sample\\richAlert.vue:53");
												break;
											case "a":
												t("log", "callback---a--" + JSON.stringify(e), " at pages\\sample\\richAlert.vue:56");
												break;
											case "backCancel":
												t("log", "callback---backCancel--", " at pages\\sample\\richAlert.vue:59");
												break;
										}
									},
								);
							},
						},
					};
				e.default = a;
			}).call(this, n("0de9")["default"]);
		},
		"6c42": function (t, e, n) {
			"use strict";
			n.r(e);
			var i = n("12f9"),
				a = n("7538");
			for (var r in a)
				"default" !== r &&
					(function (t) {
						n.d(e, t, function () {
							return a[t];
						});
					})(r);
			var s,
				o = n("f0c5"),
				u = Object(o["a"])(a["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], s);
			e["default"] = u.exports;
		},
		7538: function (t, e, n) {
			"use strict";
			n.r(e);
			var i = n("d343"),
				a = n.n(i);
			for (var r in i)
				"default" !== r &&
					(function (t) {
						n.d(e, t, function () {
							return i[t];
						});
					})(r);
			e["default"] = a.a;
		},
		8189: function (t) {
			t.exports = {
				_from: "@dcloudio/uni-stat@alpha",
				_id: "@dcloudio/uni-stat@2.0.0-alpha-26920200411001",
				_inBundle: !1,
				_integrity: "sha512-cUEIJ3It6EFJT0kIyVgcRMgNa2UBm+4autJWCuzggwnlOr6JdM3/ZVntz1YdwXFTEoKDWi8GLF7wWsZ2vwE0UA==",
				_location: "/@dcloudio/uni-stat",
				_phantomChildren: {},
				_requested: {
					type: "tag",
					registry: !0,
					raw: "@dcloudio/uni-stat@alpha",
					name: "@dcloudio/uni-stat",
					escapedName: "@dcloudio%2funi-stat",
					scope: "@dcloudio",
					rawSpec: "alpha",
					saveSpec: null,
					fetchSpec: "alpha",
				},
				_requiredBy: ["#USER", "/", "/@dcloudio/vue-cli-plugin-uni"],
				_resolved: "https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-26920200411001.tgz",
				_shasum: "dfab45e371df540c477880ae512b82546ac6e6d0",
				_spec: "@dcloudio/uni-stat@alpha",
				_where: "/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",
				author: "",
				bugs: { url: "https://github.com/dcloudio/uni-app/issues" },
				bundleDependencies: !1,
				deprecated: !1,
				description: "",
				devDependencies: {
					"@babel/core": "^7.5.5",
					"@babel/preset-env": "^7.5.5",
					eslint: "^6.1.0",
					rollup: "^1.19.3",
					"rollup-plugin-babel": "^4.3.3",
					"rollup-plugin-clear": "^2.0.7",
					"rollup-plugin-commonjs": "^10.0.2",
					"rollup-plugin-copy": "^3.1.0",
					"rollup-plugin-eslint": "^7.0.0",
					"rollup-plugin-json": "^4.0.0",
					"rollup-plugin-node-resolve": "^5.2.0",
					"rollup-plugin-replace": "^2.2.0",
					"rollup-plugin-uglify": "^6.0.2",
				},
				files: ["dist", "package.json", "LICENSE"],
				gitHead: "6090d656df76642953b405984451ec4a76bae2f5",
				homepage: "https://github.com/dcloudio/uni-app#readme",
				license: "Apache-2.0",
				main: "dist/index.js",
				name: "@dcloudio/uni-stat",
				repository: { type: "git", url: "git+https://github.com/dcloudio/uni-app.git", directory: "packages/uni-stat" },
				scripts: { build: "NODE_ENV=production rollup -c rollup.config.js", dev: "NODE_ENV=development rollup -w -c rollup.config.js" },
				version: "2.0.0-alpha-26920200411001",
			};
		},
		"8b75": function (t, e, n) {
			"use strict";
			n("107b"), n("921b");
			var i = r(n("8bbf")),
				a = r(n("23b4"));
			function r(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function s(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(t);
					e &&
						(i = i.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						n.push.apply(n, i);
				}
				return n;
			}
			function o(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2
						? s(Object(n), !0).forEach(function (e) {
								u(t, e, n[e]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
						: s(Object(n)).forEach(function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
						  });
				}
				return t;
			}
			function u(t, e, n) {
				return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
			}
			(i.default.config.productionTip = !1), (a.default.mpType = "app");
			var c = new i.default(o({}, a.default));
			c.$mount();
		},
		"8bbf": function (t, e) {
			t.exports = Vue;
		},
		"8c75": function (t, e, n) {
			"use strict";
			var i,
				a = function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("view", { staticClass: t._$s(0, "sc", "button-sp-area"), attrs: { _i: 0 } }, [
						n("button", {
							attrs: { _i: 1 },
							on: {
								click: function (e) {
									return t.showRichAlert();
								},
							},
						}),
					]);
				},
				r = [];
			n.d(e, "b", function () {
				return a;
			}),
				n.d(e, "c", function () {
					return r;
				}),
				n.d(e, "a", function () {
					return i;
				});
		},
		"921b": function (t, e, n) {
			"use strict";
			var i = n("8189");
			function a(t) {
				return function () {
					var e,
						n = u(t);
					if (o()) {
						var i = u(this).constructor;
						e = Reflect.construct(n, arguments, i);
					} else e = n.apply(this, arguments);
					return r(this, e);
				};
			}
			function r(t, e) {
				return !e || ("object" !== typeof e && "function" !== typeof e) ? s(t) : e;
			}
			function s(t) {
				if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return t;
			}
			function o() {
				if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" === typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
				} catch (t) {
					return !1;
				}
			}
			function u(t) {
				return (
					(u = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (t) {
								return t.__proto__ || Object.getPrototypeOf(t);
						  }),
					u(t)
				);
			}
			function c(t, e) {
				if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && l(t, e);
			}
			function l(t, e) {
				return (
					(l =
						Object.setPrototypeOf ||
						function (t, e) {
							return (t.__proto__ = e), t;
						}),
					l(t, e)
				);
			}
			function p(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
			}
			function f(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					(i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
				}
			}
			function d(t, e, n) {
				return e && f(t.prototype, e), n && f(t, n), t;
			}
			var h = i.version,
				g = "https://tongji.dcloud.io/uni/stat",
				v = "https://tongji.dcloud.io/uni/stat.gif",
				_ = 1800,
				y = 300,
				m = 10,
				b = "__DC_STAT_UUID",
				S = "__DC_UUID_VALUE";
			function D() {
				var t = "";
				if ("n" === T()) {
					try {
						t = plus.runtime.getDCloudId();
					} catch (e) {
						t = "";
					}
					return t;
				}
				try {
					t = uni.getStorageSync(b);
				} catch (e) {
					t = S;
				}
				if (!t) {
					t = Date.now() + "" + Math.floor(1e7 * Math.random());
					try {
						uni.setStorageSync(b, t);
					} catch (e) {
						uni.setStorageSync(b, S);
					}
				}
				return t;
			}
			var w = function (t) {
					var e = Object.keys(t),
						n = e.sort(),
						i = {},
						a = "";
					for (var r in n) (i[n[r]] = t[n[r]]), (a += n[r] + "=" + t[n[r]] + "&");
					return { sign: "", options: a.substr(0, a.length - 1) };
				},
				k = function (t) {
					var e = "";
					for (var n in t) e += n + "=" + t[n] + "&";
					return e.substr(0, e.length - 1);
				},
				O = function () {
					return parseInt(new Date().getTime() / 1e3);
				},
				T = function () {
					var t = { "app-plus": "n", h5: "h5", "mp-weixin": "wx", "mp-alipay": "ali", "mp-baidu": "bd", "mp-toutiao": "tt", "mp-qq": "qq" };
					return t["app-plus"];
				},
				R = function () {
					var t = "";
					return ("wx" !== T() && "qq" !== T()) || (uni.canIUse("getAccountInfoSync") && (t = uni.getAccountInfoSync().miniProgram.appId || "")), t;
				},
				$ = function () {
					return "n" === T() ? plus.runtime.version : "";
				},
				j = function () {
					var t = T(),
						e = "";
					return "n" === t && (e = plus.runtime.channel), e;
				},
				q = function (t) {
					var e = T(),
						n = "";
					return t || ("wx" === e && (n = uni.getLaunchOptionsSync().scene), n);
				},
				P = "First__Visit__Time",
				N = "Last__Visit__Time",
				C = function () {
					var t = uni.getStorageSync(P),
						e = 0;
					return t ? (e = t) : ((e = O()), uni.setStorageSync(P, e), uni.removeStorageSync(N)), e;
				},
				I = function () {
					var t = uni.getStorageSync(N),
						e = 0;
					return (e = t || ""), uni.setStorageSync(N, O()), e;
				},
				x = "__page__residence__time",
				A = 0,
				E = 0,
				U = function () {
					return (A = O()), "n" === T() && uni.setStorageSync(x, O()), A;
				},
				B = function () {
					return (E = O()), "n" === T() && (A = uni.getStorageSync(x)), E - A;
				},
				L = "Total__Visit__Count",
				J = function () {
					var t = uni.getStorageSync(L),
						e = 1;
					return t && ((e = t), e++), uni.setStorageSync(L, e), e;
				},
				H = function (t) {
					var e = {};
					for (var n in t) e[n] = encodeURIComponent(t[n]);
					return e;
				},
				M = 0,
				V = 0,
				F = function () {
					var t = new Date().getTime();
					return (M = t), (V = 0), t;
				},
				G = function () {
					var t = new Date().getTime();
					return (V = t), t;
				},
				W = function (t) {
					var e = 0;
					if ((0 !== M && (e = V - M), (e = parseInt(e / 1e3)), (e = e < 1 ? 1 : e), "app" === t)) {
						var n = e > y;
						return { residenceTime: e, overtime: n };
					}
					if ("page" === t) {
						var i = e > _;
						return { residenceTime: e, overtime: i };
					}
					return { residenceTime: e };
				},
				z = function () {
					var t = getCurrentPages(),
						e = t[t.length - 1],
						n = e.$vm;
					return "bd" === T() ? n.$mp && n.$mp.page.is : (n.$scope && n.$scope.route) || (n.$mp && n.$mp.page.route);
				},
				X = function (t) {
					var e = getCurrentPages(),
						n = e[e.length - 1],
						i = n.$vm,
						a = t._query,
						r = a && "{}" !== JSON.stringify(a) ? "?" + JSON.stringify(a) : "";
					return (t._query = ""), "bd" === T() ? i.$mp && i.$mp.page.is + r : (i.$scope && i.$scope.route + r) || (i.$mp && i.$mp.page.route + r);
				},
				K = function (t) {
					return !!("page" === t.mpType || (t.$mp && "page" === t.$mp.mpType) || "page" === t.$options.mpType);
				},
				Z = function (t, e) {
					return t
						? "string" !== typeof t
							? (console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"), !0)
							: t.length > 255
							? (console.error("uni.report [eventName] 参数长度不能大于 255"), !0)
							: "string" !== typeof e && "object" !== typeof e
							? (console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"), !0)
							: "string" === typeof e && e.length > 255
							? (console.error("uni.report [options] 参数长度不能大于 255"), !0)
							: "title" === t && "string" !== typeof e
							? (console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"), !0)
							: void 0
						: (console.error("uni.report 缺少 [eventName] 参数"), !0);
				},
				Y = n("dfb6").default,
				Q = n("fd13").default || n("fd13"),
				tt = uni.getSystemInfoSync(),
				et = (function () {
					function t() {
						p(this, t),
							(this.self = ""),
							(this._retry = 0),
							(this._platform = ""),
							(this._query = {}),
							(this._navigationBarTitle = { config: "", page: "", report: "", lt: "" }),
							(this._operatingTime = 0),
							(this._reportingRequestData = { 1: [], 11: [] }),
							(this.__prevent_triggering = !1),
							(this.__licationHide = !1),
							(this.__licationShow = !1),
							(this._lastPageRoute = ""),
							(this.statData = {
								uuid: D(),
								ut: T(),
								mpn: R(),
								ak: Q.appid,
								usv: h,
								v: $(),
								ch: j(),
								cn: "",
								pn: "",
								ct: "",
								t: O(),
								tt: "",
								p: "android" === tt.platform ? "a" : "i",
								brand: tt.brand || "",
								md: tt.model,
								sv: tt.system.replace(/(Android|iOS)\s/, ""),
								mpsdk: tt.SDKVersion || "",
								mpv: tt.version || "",
								lang: tt.language,
								pr: tt.pixelRatio,
								ww: tt.windowWidth,
								wh: tt.windowHeight,
								sw: tt.screenWidth,
								sh: tt.screenHeight,
							});
					}
					return (
						d(t, [
							{
								key: "_applicationShow",
								value: function () {
									if (this.__licationHide) {
										G();
										var t = W("app");
										if (t.overtime) {
											var e = { path: this._lastPageRoute, scene: this.statData.sc };
											this._sendReportRequest(e);
										}
										this.__licationHide = !1;
									}
								},
							},
							{
								key: "_applicationHide",
								value: function (t, e) {
									(this.__licationHide = !0), G();
									var n = W();
									F();
									var i = X(this);
									this._sendHideRequest({ urlref: i, urlref_ts: n.residenceTime }, e);
								},
							},
							{
								key: "_pageShow",
								value: function () {
									var t = X(this),
										e = z();
									if (
										((this._navigationBarTitle.config =
											(Y && Y.pages[e] && Y.pages[e].titleNView && Y.pages[e].titleNView.titleText) ||
											(Y && Y.pages[e] && Y.pages[e].navigationBarTitleText) ||
											""),
										this.__licationShow)
									)
										return F(), (this.__licationShow = !1), void (this._lastPageRoute = t);
									G(), (this._lastPageRoute = t);
									var n = W("page");
									if (n.overtime) {
										var i = { path: this._lastPageRoute, scene: this.statData.sc };
										this._sendReportRequest(i);
									}
									F();
								},
							},
							{
								key: "_pageHide",
								value: function () {
									if (!this.__licationHide) {
										G();
										var t = W("page");
										return (
											this._sendPageRequest({ url: this._lastPageRoute, urlref: this._lastPageRoute, urlref_ts: t.residenceTime }),
											void (this._navigationBarTitle = { config: "", page: "", report: "", lt: "" })
										);
									}
								},
							},
							{
								key: "_login",
								value: function () {
									this._sendEventRequest({ key: "login" }, 0);
								},
							},
							{
								key: "_share",
								value: function () {
									this._sendEventRequest({ key: "share" }, 0);
								},
							},
							{
								key: "_payment",
								value: function (t) {
									this._sendEventRequest({ key: t }, 0);
								},
							},
							{
								key: "_sendReportRequest",
								value: function (t) {
									this._navigationBarTitle.lt = "1";
									var e = t.query && "{}" !== JSON.stringify(t.query) ? "?" + JSON.stringify(t.query) : "";
									(this.statData.lt = "1"),
										(this.statData.url = t.path + e || ""),
										(this.statData.t = O()),
										(this.statData.sc = q(t.scene)),
										(this.statData.fvts = C()),
										(this.statData.lvts = I()),
										(this.statData.tvc = J()),
										"n" === T() ? this.getProperty() : this.getNetworkInfo();
								},
							},
							{
								key: "_sendPageRequest",
								value: function (t) {
									var e = t.url,
										n = t.urlref,
										i = t.urlref_ts;
									this._navigationBarTitle.lt = "11";
									var a = {
										ak: this.statData.ak,
										uuid: this.statData.uuid,
										lt: "11",
										ut: this.statData.ut,
										url: e,
										tt: this.statData.tt,
										urlref: n,
										urlref_ts: i,
										ch: this.statData.ch,
										usv: this.statData.usv,
										t: O(),
										p: this.statData.p,
									};
									this.request(a);
								},
							},
							{
								key: "_sendHideRequest",
								value: function (t, e) {
									var n = t.urlref,
										i = t.urlref_ts,
										a = {
											ak: this.statData.ak,
											uuid: this.statData.uuid,
											lt: "3",
											ut: this.statData.ut,
											urlref: n,
											urlref_ts: i,
											ch: this.statData.ch,
											usv: this.statData.usv,
											t: O(),
											p: this.statData.p,
										};
									this.request(a, e);
								},
							},
							{
								key: "_sendEventRequest",
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
										e = t.key,
										n = void 0 === e ? "" : e,
										i = t.value,
										a = void 0 === i ? "" : i,
										r = this._lastPageRoute,
										s = {
											ak: this.statData.ak,
											uuid: this.statData.uuid,
											lt: "21",
											ut: this.statData.ut,
											url: r,
											ch: this.statData.ch,
											e_n: n,
											e_v: "object" === typeof a ? JSON.stringify(a) : a.toString(),
											usv: this.statData.usv,
											t: O(),
											p: this.statData.p,
										};
									this.request(s);
								},
							},
							{
								key: "getNetworkInfo",
								value: function () {
									var t = this;
									uni.getNetworkType({
										success: function (e) {
											(t.statData.net = e.networkType), t.getLocation();
										},
									});
								},
							},
							{
								key: "getProperty",
								value: function () {
									var t = this;
									plus.runtime.getProperty(plus.runtime.appid, function (e) {
										(t.statData.v = e.version || ""), t.getNetworkInfo();
									});
								},
							},
							{
								key: "getLocation",
								value: function () {
									var t = this;
									Q.getLocation
										? uni.getLocation({
												type: "wgs84",
												geocode: !0,
												success: function (e) {
													e.address && ((t.statData.cn = e.address.country), (t.statData.pn = e.address.province), (t.statData.ct = e.address.city)),
														(t.statData.lat = e.latitude),
														(t.statData.lng = e.longitude),
														t.request(t.statData);
												},
										  })
										: ((this.statData.lat = 0), (this.statData.lng = 0), this.request(this.statData));
								},
							},
							{
								key: "request",
								value: function (t, e) {
									var n = this,
										i = O(),
										a = this._navigationBarTitle;
									(t.ttn = a.page), (t.ttpj = a.config), (t.ttc = a.report);
									var r = this._reportingRequestData;
									if (
										("n" === T() && (r = uni.getStorageSync("__UNI__STAT__DATA") || {}),
										r[t.lt] || (r[t.lt] = []),
										r[t.lt].push(t),
										"n" === T() && uni.setStorageSync("__UNI__STAT__DATA", r),
										!(B() < m) || e)
									) {
										var s = this._reportingRequestData;
										"n" === T() && (s = uni.getStorageSync("__UNI__STAT__DATA")), U();
										var o = [],
											u = [],
											c = [],
											l = function (t) {
												var e = s[t];
												e.forEach(function (e) {
													var n = k(e);
													0 === t ? o.push(n) : 3 === t ? c.push(n) : u.push(n);
												});
											};
										for (var p in s) l(p);
										o.push.apply(o, u.concat(c));
										var f = { usv: h, t: i, requests: JSON.stringify(o) };
										(this._reportingRequestData = {}),
											"n" === T() && uni.removeStorageSync("__UNI__STAT__DATA"),
											"h5" !== t.ut
												? "n" !== T() || "a" !== this.statData.p
													? this._sendRequest(f)
													: setTimeout(function () {
															n._sendRequest(f);
													  }, 200)
												: this.imageRequest(f);
									}
								},
							},
							{
								key: "_sendRequest",
								value: function (t) {
									var e = this;
									uni.request({
										url: g,
										method: "POST",
										data: t,
										success: function () {},
										fail: function (n) {
											++e._retry < 3 &&
												setTimeout(function () {
													e._sendRequest(t);
												}, 1e3);
										},
									});
								},
							},
							{
								key: "imageRequest",
								value: function (t) {
									var e = new Image(),
										n = w(H(t)).options;
									e.src = v + "?" + n;
								},
							},
							{
								key: "sendEvent",
								value: function (t, e) {
									Z(t, e) ||
										("title" !== t
											? this._sendEventRequest({ key: t, value: "object" === typeof e ? JSON.stringify(e) : e }, 1)
											: (this._navigationBarTitle.report = e));
								},
							},
						]),
						t
					);
				})(),
				nt = (function (t) {
					c(n, t);
					var e = a(n);
					function n() {
						var t;
						return (
							p(this, n),
							(t = e.call(this)),
							(t.instance = null),
							"function" === typeof uni.addInterceptor && (t.addInterceptorInit(), t.interceptLogin(), t.interceptShare(!0), t.interceptRequestPayment()),
							t
						);
					}
					return (
						d(n, null, [
							{
								key: "getInstance",
								value: function () {
									return this.instance || (this.instance = new n()), this.instance;
								},
							},
						]),
						d(n, [
							{
								key: "addInterceptorInit",
								value: function () {
									var t = this;
									uni.addInterceptor("setNavigationBarTitle", {
										invoke: function (e) {
											t._navigationBarTitle.page = e.title;
										},
									});
								},
							},
							{
								key: "interceptLogin",
								value: function () {
									var t = this;
									uni.addInterceptor("login", {
										complete: function () {
											t._login();
										},
									});
								},
							},
							{
								key: "interceptShare",
								value: function (t) {
									var e = this;
									t
										? uni.addInterceptor("share", {
												success: function () {
													e._share();
												},
												fail: function () {
													e._share();
												},
										  })
										: e._share();
								},
							},
							{
								key: "interceptRequestPayment",
								value: function () {
									var t = this;
									uni.addInterceptor("requestPayment", {
										success: function () {
											t._payment("pay_success");
										},
										fail: function () {
											t._payment("pay_fail");
										},
									});
								},
							},
							{
								key: "report",
								value: function (t, e) {
									(this.self = e), U(), (this.__licationShow = !0), this._sendReportRequest(t, !0);
								},
							},
							{
								key: "load",
								value: function (t, e) {
									if (!e.$scope && !e.$mp) {
										var n = getCurrentPages();
										e.$scope = n[n.length - 1];
									}
									(this.self = e), (this._query = t);
								},
							},
							{
								key: "show",
								value: function (t) {
									(this.self = t), K(t) ? this._pageShow(t) : this._applicationShow(t);
								},
							},
							{ key: "ready", value: function (t) {} },
							{
								key: "hide",
								value: function (t) {
									(this.self = t), K(t) ? this._pageHide(t) : this._applicationHide(t, !0);
								},
							},
							{
								key: "error",
								value: function (t) {
									this._platform;
									var e = "";
									e = t.message ? t.stack : JSON.stringify(t);
									var n = {
										ak: this.statData.ak,
										uuid: this.statData.uuid,
										lt: "31",
										ut: this.statData.ut,
										ch: this.statData.ch,
										mpsdk: this.statData.mpsdk,
										mpv: this.statData.mpv,
										v: this.statData.v,
										em: e,
										usv: this.statData.usv,
										t: O(),
										p: this.statData.p,
									};
									this.request(n);
								},
							},
						]),
						n
					);
				})(et),
				it = nt.getInstance(),
				at = !1,
				rt = {
					onLaunch: function (t) {
						it.report(t, this);
					},
					onReady: function () {
						it.ready(this);
					},
					onLoad: function (t) {
						if ((it.load(t, this), this.$scope && this.$scope.onShareAppMessage)) {
							var e = this.$scope.onShareAppMessage;
							this.$scope.onShareAppMessage = function (t) {
								return it.interceptShare(!1), e.call(this, t);
							};
						}
					},
					onShow: function () {
						(at = !1), it.show(this);
					},
					onHide: function () {
						(at = !0), it.hide(this);
					},
					onUnload: function () {
						at ? (at = !1) : it.hide(this);
					},
					onError: function (t) {
						it.error(t);
					},
				};
			function st() {
				var t = n("8bbf");
				(t.default || t).mixin(rt),
					(uni.report = function (t, e) {
						it.sendEvent(t, e);
					});
			}
			st();
		},
		bf45: function (t, e, n) {
			"use strict";
			n.r(e);
			var i = n("4999"),
				a = n.n(i);
			for (var r in i)
				"default" !== r &&
					(function (t) {
						n.d(e, t, function () {
							return i[t];
						});
					})(r);
			e["default"] = a.a;
		},
		d343: function (t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
			var i = {
				data: function () {
					return {
						list: [
							{ id: "ext-module", name: "扩展 module", open: !1, url: "/pages/sample/ext-module" },
							{ id: "ext-component", name: "扩展 component", open: !1, url: "/pages/sample/ext-component" },
							{ id: "richAlert", name: "插件示例RichAlert", open: !1, url: "/pages/sample/richAlert" },
						],
						navigateFlag: !1,
					};
				},
				onLoad: function () {},
				methods: {
					triggerCollapse: function (t) {
						if (this.list[t].pages) for (var e = 0; e < this.list.length; ++e) this.list[e].open = t === e && !this.list[t].open;
						else this.goDetailPage(this.list[t].url);
					},
					goDetailPage: function (t) {
						var e = this;
						if (!this.navigateFlag)
							return (
								(this.navigateFlag = !0),
								uni.navigateTo({ url: t }),
								setTimeout(function () {
									e.navigateFlag = !1;
								}, 200),
								!1
							);
					},
				},
			};
			e.default = i;
		},
		dfb6: function (t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
			var i = { pages: {}, globalStyle: {} };
			e.default = i;
		},
		f0c5: function (t, e, n) {
			"use strict";
			function i(t, e, n, i, a, r, s, o, u, c) {
				var l,
					p = "function" === typeof t ? t.options : t;
				if (u) {
					p.components || (p.components = {});
					var f = Object.prototype.hasOwnProperty;
					for (var d in u) f.call(u, d) && !f.call(p.components, d) && (p.components[d] = u[d]);
				}
				if (
					(c &&
						((c.beforeCreate || (c.beforeCreate = [])).unshift(function () {
							this[c.__module] = this;
						}),
						(p.mixins || (p.mixins = [])).push(c)),
					e && ((p.render = e), (p.staticRenderFns = n), (p._compiled = !0)),
					i && (p.functional = !0),
					r && (p._scopeId = "data-v-" + r),
					s
						? ((l = function (t) {
								(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)),
									t || "undefined" === typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
									a && a.call(this, t),
									t && t._registeredComponents && t._registeredComponents.add(s);
						  }),
						  (p._ssrRegister = l))
						: a &&
						  (l = o
								? function () {
										a.call(this, this.$root.$options.shadowRoot);
								  }
								: a),
					l)
				)
					if (p.functional) {
						p._injectStyles = l;
						var h = p.render;
						p.render = function (t, e) {
							return l.call(e), h(t, e);
						};
					} else {
						var g = p.beforeCreate;
						p.beforeCreate = g ? [].concat(g, l) : [l];
					}
				return { exports: t, options: p };
			}
			n.d(e, "a", function () {
				return i;
			});
		},
		fd13: function (t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
			var i = { appid: "__UNI__BCEC007" };
			e.default = i;
		},
	},
	[["8b75", "app-config"]],
]);
