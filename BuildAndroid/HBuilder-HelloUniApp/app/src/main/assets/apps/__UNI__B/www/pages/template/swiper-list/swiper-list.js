!(function (t) {
	var e = {};
	function i(n) {
		if (e[n]) return e[n].exports;
		var a = (e[n] = { i: n, l: !1, exports: {} });
		return t[n].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
	}
	(i.m = t),
		(i.c = e),
		(i.d = function (t, e, n) {
			i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
		}),
		(i.r = function (t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(i.t = function (t, e) {
			if ((1 & e && (t = i(t)), 8 & e)) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var n = Object.create(null);
			if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
				for (var a in t)
					i.d(
						n,
						a,
						function (e) {
							return t[e];
						}.bind(null, a),
					);
			return n;
		}),
		(i.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t.default;
					  }
					: function () {
							return t;
					  };
			return i.d(e, "a", e), e;
		}),
		(i.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(i.p = ""),
		i((i.s = 748));
})({
	0: function (t, e, i) {
		"use strict";
		function n(t, e, i, n, a, r, o, s, l, c) {
			var u,
				f = "function" == typeof t ? t.options : t;
			if (l) {
				f.components || (f.components = {});
				var d = Object.prototype.hasOwnProperty;
				for (var p in l) d.call(l, p) && !d.call(f.components, p) && (f.components[p] = l[p]);
			}
			if (
				(c &&
					((c.beforeCreate || (c.beforeCreate = [])).unshift(function () {
						this[c.__module] = this;
					}),
					(f.mixins || (f.mixins = [])).push(c)),
				e && ((f.render = e), (f.staticRenderFns = i), (f._compiled = !0)),
				n && (f.functional = !0),
				r && (f._scopeId = "data-v-" + r),
				o
					? ((u = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								a && a.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(o);
					  }),
					  (f._ssrRegister = u))
					: a &&
					  (u = s
							? function () {
									a.call(this, this.$root.$options.shadowRoot);
							  }
							: a),
				u)
			)
				if (f.functional) {
					f._injectStyles = u;
					var h = f.render;
					f.render = function (t, e) {
						return u.call(e), h(t, e);
					};
				} else {
					var b = f.beforeCreate;
					f.beforeCreate = b ? [].concat(b, u) : [u];
				}
			return { exports: t, options: f };
		}
		i.d(e, "a", function () {
			return n;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	119: function (t, e, i) {
		"use strict";
		var n = i(479),
			a = i(414),
			r = i(0);
		var o = Object(r.a)(a.default, n.b, n.c, !1, null, null, "5d6f2db5", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(i(636).default, this.options.style) : Object.assign(this.options.style, i(636).default);
		}).call(o),
			(e.default = o.exports);
	},
	14: function (t, e, i) {
		"use strict";
		function n(t) {
			var e = Object.prototype.toString.call(t);
			return e.substring(8, e.length - 1);
		}
		function a() {
			return "string" == typeof __channelId__ && __channelId__;
		}
		function r(t, e) {
			switch (n(e)) {
				case "Function":
					return "function() { [native code] }";
				default:
					return e;
			}
		}
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.log = function (t) {
				for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
				console[t].apply(console, i);
			}),
			(e.default = function () {
				for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
				var o = e.shift();
				if (a()) return e.push(e.pop().replace("at ", "uni-app:///")), console[o].apply(console, e);
				var s = e.map(function (t) {
						var e = Object.prototype.toString.call(t).toLowerCase();
						if ("[object object]" === e || "[object array]" === e)
							try {
								t = "---BEGIN:JSON---" + JSON.stringify(t, r) + "---END:JSON---";
							} catch (i) {
								t = e;
							}
						else if (null === t) t = "---NULL---";
						else if (void 0 === t) t = "---UNDEFINED---";
						else {
							var i = n(t).toUpperCase();
							t = "NUMBER" === i || "BOOLEAN" === i ? "---BEGIN:" + i + "---" + t + "---END:" + i + "---" : String(t);
						}
						return t;
					}),
					l = "";
				if (s.length > 1) {
					var c = s.pop();
					(l = s.join("---COMMA---")), 0 === c.indexOf(" at ") ? (l += c) : (l += "---COMMA---" + c);
				} else l = s[0];
				console[o](l);
			});
	},
	414: function (t, e, i) {
		"use strict";
		var n = i(415),
			a = i.n(n);
		e.default = a.a;
	},
	415: function (t, e, i) {
		"use strict";
		(function (t) {
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
			var n,
				a = (n = i(749)) && n.__esModule ? n : { default: n };
			var r = weex.requireModule("dom"),
				o = {
					components: { swiperPage: a.default },
					data: function () {
						return { tabList: [], tabIndex: 0, cacheTab: [], scrollInto: "", indicatorLineLeft: 0, indicatorLineWidth: 0, isTap: !1 };
					},
					onLoad: function () {
						for (var t = 0; t < 6; t++) this.tabList.push({ id: "tab" + t, name: "Tab " + (t + 1), pageid: t + 1 });
					},
					onReady: function () {
						(this._lastTabIndex = 0),
							(this.swiperWidth = 0),
							(this.tabbarWidth = 0),
							(this.tabListSize = {}),
							(this._touchTabIndex = 0),
							(this.pageList = this.$refs.page),
							this.switchTab(this.tabIndex),
							this.getTabbarItemsSize();
					},
					methods: {
						ontabtap: function (t) {
							var e = t.target.dataset.current || t.currentTarget.dataset.current;
							this.isTap = !0;
							var i = this.tabListSize[e];
							this.updateIndicator(i.left, i.width), (this._touchTabIndex = e), this.switchTab(e);
						},
						onswiperchange: function (t) {},
						onswiperscroll: function (t) {
							if (!this.isTap) {
								var e = t.detail.dx,
									i = this._lastTabIndex;
								if ((e > 1 ? i++ : e < -1 && i--, !(i === this._lastTabIndex || i < 0 || i > this.pageList.length - 1))) {
									0 === this.pageList[i].dataList.length && this.loadTabData(i);
									var n = Math.abs(this.swiperWidth / e),
										a = this.tabListSize[this._lastTabIndex],
										r = this.tabListSize[i],
										o = a.left + (r.left - a.left) / n,
										s = a.width + (r.width - a.width) / n;
									this.updateIndicator(o, s);
								}
							}
						},
						animationfinish: function (t) {
							var e = t.detail.current;
							this._touchTabIndex === e && (this.isTap = !1),
								(this._lastTabIndex = e),
								this.switchTab(e),
								this.updateIndicator(this.tabListSize[e].left, this.tabListSize[e].width);
						},
						getTabbarItemsSize: function () {
							var e = this;
							uni
								.createSelectorQuery()
								.in(this)
								.select("#tab-bar")
								.boundingClientRect()
								.exec(function (t) {
									e.tabbarWidth = t[0].width;
								}),
								uni
									.createSelectorQuery()
									.in(this)
									.select("#tab-bar-view")
									.boundingClientRect()
									.exec(function (t) {
										e.swiperWidth = t[0].width;
									});
							for (var i = uni.createSelectorQuery().in(this), n = 0; n < this.tabList.length; n++) i.select("#" + this.tabList[n].id).boundingClientRect();
							i.exec(function (i) {
								t("log", JSON.stringify(i), " at pages/template/swiper-list/swiper-list.nvue:169"),
									i.forEach(function (t) {
										e.tabListSize[t.dataset.id] = t;
									});
							}),
								setTimeout(function () {
									e.updateIndicator(e.tabListSize[e.tabIndex].left, e.tabListSize[e.tabIndex].width);
								}, 100);
						},
						updateIndicator: function (t, e) {
							(this.indicatorLineLeft = t), (this.indicatorLineWidth = e);
						},
						switchTab: function (t) {
							if ((0 === this.pageList[t].dataList.length && this.loadTabData(t), this.tabIndex !== t)) {
								if (this.pageList[this.tabIndex].dataList.length > 100) this.cacheTab.indexOf(this.tabIndex) < 0 && this.cacheTab.push(this.tabIndex);
								if (((this.tabIndex = t), this.scrollTabTo(t), this.cacheTab.length > 3)) {
									var e = this.cacheTab[0];
									this.clearTabData(e), this.cacheTab.splice(0, 1);
								}
							}
						},
						scrollTabTo: function (t) {
							var e = this.$refs["tabitem" + t][0],
								i = 0;
							t > 0 &&
								((i = this.tabbarWidth / 2 - this.tabListSize[t].width / 2),
								this.tabListSize[t].right < this.tabbarWidth / 2 && (i = this.tabListSize[0].width)),
								r.scrollToElement(e, { offset: -i });
						},
						loadTabData: function (t) {
							this.pageList[t].loadData();
						},
						clearTabData: function (t) {
							this.pageList[t].clear();
						},
					},
				};
			e.default = o;
		}).call(this, i(14).default);
	},
	416: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(417),
			a = i.n(n);
		for (var r in n)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(r);
		e.default = a.a;
	},
	417: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var n = {
			props: { pid: { type: [Number, String], default: "" } },
			data: function () {
				return { dataList: [] };
			},
			created: function () {},
			methods: {
				loadData: function () {},
				clear: function () {
					this.dataList.length = 0;
				},
			},
		};
		e.default = n;
	},
	418: function (t, e) {
		t.exports = {
			".uni-swiper-page": {
				"": {
					flex: [1, 0, 0, 0],
					flexDirection: ["column", 0, 0, 0],
					position: ["absolute", 0, 0, 0],
					left: [0, 0, 0, 0],
					top: [0, 0, 0, 0],
					right: [0, 0, 0, 0],
					bottom: [0, 0, 0, 0],
					alignItems: ["center", 0, 0, 0],
					justifyContent: ["center", 0, 0, 0],
				},
			},
			"@VERSION": 2,
		};
	},
	419: function (t, e) {
		t.exports = {
			".tabs": { "": { flex: [1, 0, 0, 0], flexDirection: ["column", 0, 0, 0], overflow: ["hidden", 0, 0, 0], backgroundColor: ["#ffffff", 0, 0, 0] } },
			".tab-bar": { "": { width: ["750rpx", 0, 0, 1], height: ["84rpx", 0, 0, 1], flexDirection: ["row", 0, 0, 1] } },
			".scroll-view-indicator": { "": { position: ["relative", 0, 0, 2], height: ["2", 0, 0, 2], backgroundColor: ["rgba(0,0,0,0)", 0, 0, 2] } },
			".scroll-view-underline": {
				"": { position: ["absolute", 0, 0, 3], top: [0, 0, 0, 3], bottom: [0, 0, 0, 3], width: [0, 0, 0, 3], backgroundColor: ["#007AFF", 0, 0, 3] },
			},
			".scroll-view-animation": { "": { transitionDuration: [200, 0, 0, 4], transitionProperty: ["left", 0, 0, 4] } },
			".tab-bar-line": { "": { height: ["1rpx", 0, 0, 5], backgroundColor: ["#cccccc", 0, 0, 5] } },
			".tab-view": { "": { flex: [1, 0, 0, 6] } },
			".uni-tab-item": { "": { flexWrap: ["nowrap", 0, 0, 7], paddingLeft: ["25", 0, 0, 7], paddingRight: ["25", 0, 0, 7] } },
			".uni-tab-item-title": {
				"": {
					color: ["#555555", 0, 0, 8],
					fontSize: ["30rpx", 0, 0, 8],
					height: ["80rpx", 0, 0, 8],
					lineHeight: ["80rpx", 0, 0, 8],
					flexWrap: ["nowrap", 0, 0, 8],
				},
			},
			".uni-tab-item-title-active": { "": { color: ["#007AFF", 0, 0, 9] } },
			".swiper-item": { "": { flex: [1, 0, 0, 10], flexDirection: ["column", 0, 0, 10] } },
			".swiper-page": {
				"": {
					flex: [1, 0, 0, 11],
					flexDirection: ["row", 0, 0, 11],
					position: ["absolute", 0, 0, 11],
					left: [0, 0, 0, 11],
					top: [0, 0, 0, 11],
					right: [0, 0, 0, 11],
					bottom: [0, 0, 0, 11],
				},
			},
			"@VERSION": 2,
		};
	},
	479: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return n;
		}),
			i.d(e, "c", function () {
				return a;
			}),
			i.d(e, "a", function () {});
		var n = function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					i(
						"view",
						{ staticClass: ["tabs"] },
						[
							i(
								"scroll-view",
								{
									ref: "tabbar1",
									staticClass: ["tab-bar"],
									attrs: { id: "tab-bar", scroll: !1, scrollX: !0, showScrollbar: !1, scrollIntoView: t.scrollInto },
								},
								[
									i("view", { staticStyle: { flexDirection: "column" } }, [
										i(
											"view",
											{ staticStyle: { flexDirection: "row" } },
											t._l(t.tabList, function (e, n) {
												return i(
													"view",
													{
														key: e.id,
														ref: "tabitem" + n,
														refInFor: !0,
														staticClass: ["uni-tab-item"],
														attrs: { id: e.id, dataId: n, dataCurrent: n },
														on: { click: t.ontabtap },
													},
													[
														i(
															"u-text",
															{
																staticClass: ["uni-tab-item-title"],
																class: t.tabIndex == n ? "uni-tab-item-title-active" : "",
																appendAsTree: !0,
																attrs: { append: "tree" },
															},
															[t._v(t._s(e.name))],
														),
													],
												);
											}),
											0,
										),
										i("view", { staticClass: ["scroll-view-indicator"] }, [
											i("view", {
												ref: "underline",
												staticClass: ["scroll-view-underline"],
												class: t.isTap ? "scroll-view-animation" : "",
												style: { left: t.indicatorLineLeft + "px", width: t.indicatorLineWidth + "px" },
											}),
										]),
									]),
								],
							),
							i("view", { staticClass: ["tab-bar-line"] }),
							i(
								"swiper",
								{
									ref: "swiper1",
									staticClass: ["tab-view"],
									attrs: { id: "tab-bar-view", current: t.tabIndex, duration: 300 },
									on: { change: t.onswiperchange, transition: t.onswiperscroll, animationfinish: t.animationfinish, onAnimationEnd: t.animationfinish },
								},
								t._l(t.tabList, function (t, e) {
									return i(
										"swiper-item",
										{ key: e, staticClass: ["swiper-item"] },
										[i("swiperPage", { ref: "page", refInFor: !0, staticClass: ["swiper-page"], attrs: { pid: t.pageid } })],
										1,
									);
								}),
								1,
							),
						],
						1,
					),
				]);
			},
			a = [];
	},
	518: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return n;
		}),
			i.d(e, "c", function () {
				return a;
			}),
			i.d(e, "a", function () {});
		var n = function () {
				var t = this.$createElement,
					e = this._self._c || t;
				return e("view", { staticClass: ["uni-swiper-page"] }, [
					e("u-text", { appendAsTree: !0, attrs: { append: "tree" } }, [this._v("Tab View " + this._s(this.pid))]),
				]);
			},
			a = [];
	},
	6: function (t, e, i) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(i(7).default, Vue.prototype.__$appStyle__);
	},
	635: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(418),
			a = i.n(n);
		for (var r in n)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(r);
		e.default = a.a;
	},
	636: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(419),
			a = i.n(n);
		for (var r in n)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(r);
		e.default = a.a;
	},
	7: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(1),
			a = i.n(n);
		for (var r in n)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(r);
		e.default = a.a;
	},
	748: function (t, e, i) {
		"use strict";
		i.r(e);
		i(6);
		var n = i(119);
		"undefined" == typeof Promise ||
			Promise.prototype.finally ||
			(Promise.prototype.finally = function (t) {
				var e = this.constructor;
				return this.then(
					function (i) {
						return e.resolve(t()).then(function () {
							return i;
						});
					},
					function (i) {
						return e.resolve(t()).then(function () {
							throw i;
						});
					},
				);
			}),
			(n.default.mpType = "page"),
			(n.default.route = "pages/template/swiper-list/swiper-list"),
			(n.default.el = "#root"),
			new Vue(n.default);
	},
	749: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(518),
			a = i(416);
		for (var r in a)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return a[t];
					});
				})(r);
		var o = i(0);
		var s = Object(o.a)(a.default, n.b, n.c, !1, null, "1acd3f98", "4dfe6c94", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(i(635).default, this.options.style) : Object.assign(this.options.style, i(635).default);
		}).call(s),
			(e.default = s.exports);
	},
});
