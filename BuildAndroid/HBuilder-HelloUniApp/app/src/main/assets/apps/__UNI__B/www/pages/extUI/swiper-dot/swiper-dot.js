!(function (t) {
	var e = {};
	function o(n) {
		if (e[n]) return e[n].exports;
		var r = (e[n] = { i: n, l: !1, exports: {} });
		return t[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
	}
	(o.m = t),
		(o.c = e),
		(o.d = function (t, e, n) {
			o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
		}),
		(o.r = function (t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(o.t = function (t, e) {
			if ((1 & e && (t = o(t)), 8 & e)) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var n = Object.create(null);
			if ((o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
				for (var r in t)
					o.d(
						n,
						r,
						function (e) {
							return t[e];
						}.bind(null, r),
					);
			return n;
		}),
		(o.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t.default;
					  }
					: function () {
							return t;
					  };
			return o.d(e, "a", e), e;
		}),
		(o.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(o.p = ""),
		o((o.s = 710));
})({
	0: function (t, e, o) {
		"use strict";
		function n(t, e, o, n, r, i, s, a, c, d) {
			var l,
				u = "function" == typeof t ? t.options : t;
			if (c) {
				u.components || (u.components = {});
				var p = Object.prototype.hasOwnProperty;
				for (var f in c) p.call(c, f) && !p.call(u.components, f) && (u.components[f] = c[f]);
			}
			if (
				(d &&
					((d.beforeCreate || (d.beforeCreate = [])).unshift(function () {
						this[d.__module] = this;
					}),
					(u.mixins || (u.mixins = [])).push(d)),
				e && ((u.render = e), (u.staticRenderFns = o), (u._compiled = !0)),
				n && (u.functional = !0),
				i && (u._scopeId = "data-v-" + i),
				s
					? ((l = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								r && r.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(s);
					  }),
					  (u._ssrRegister = l))
					: r &&
					  (l = a
							? function () {
									r.call(this, this.$root.$options.shadowRoot);
							  }
							: r),
				l)
			)
				if (u.functional) {
					u._injectStyles = l;
					var _ = u.render;
					u.render = function (t, e) {
						return l.call(e), _(t, e);
					};
				} else {
					var g = u.beforeCreate;
					u.beforeCreate = g ? [].concat(g, l) : [l];
				}
			return { exports: t, options: u };
		}
		o.d(e, "a", function () {
			return n;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	102: function (t, e, o) {
		"use strict";
		var n = o(473),
			r = o(316),
			i = o(0);
		var s = Object(i.a)(r.default, n.b, n.c, !1, null, null, "1fe5a6cc", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(o(603).default, this.options.style) : Object.assign(this.options.style, o(603).default);
		}).call(s),
			(e.default = s.exports);
	},
	13: function (t, e, o) {
		"use strict";
		o.r(e);
		var n = o(5),
			r = o(2);
		for (var i in r)
			"default" !== i &&
				(function (t) {
					o.d(e, t, function () {
						return r[t];
					});
				})(i);
		var s = o(0);
		var a = Object(s.a)(r.default, n.b, n.c, !1, null, "168bca6c", "39eb9647", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(o(8).default, this.options.style) : Object.assign(this.options.style, o(8).default);
		}).call(a),
			(e.default = a.exports);
	},
	14: function (t, e, o) {
		"use strict";
		function n(t) {
			var e = Object.prototype.toString.call(t);
			return e.substring(8, e.length - 1);
		}
		function r() {
			return "string" == typeof __channelId__ && __channelId__;
		}
		function i(t, e) {
			switch (n(e)) {
				case "Function":
					return "function() { [native code] }";
				default:
					return e;
			}
		}
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.log = function (t) {
				for (var e = arguments.length, o = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) o[n - 1] = arguments[n];
				console[t].apply(console, o);
			}),
			(e.default = function () {
				for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
				var s = e.shift();
				if (r()) return e.push(e.pop().replace("at ", "uni-app:///")), console[s].apply(console, e);
				var a = e.map(function (t) {
						var e = Object.prototype.toString.call(t).toLowerCase();
						if ("[object object]" === e || "[object array]" === e)
							try {
								t = "---BEGIN:JSON---" + JSON.stringify(t, i) + "---END:JSON---";
							} catch (o) {
								t = e;
							}
						else if (null === t) t = "---NULL---";
						else if (void 0 === t) t = "---UNDEFINED---";
						else {
							var o = n(t).toUpperCase();
							t = "NUMBER" === o || "BOOLEAN" === o ? "---BEGIN:" + o + "---" + t + "---END:" + o + "---" : String(t);
						}
						return t;
					}),
					c = "";
				if (a.length > 1) {
					var d = a.pop();
					(c = a.join("---COMMA---")), 0 === d.indexOf(" at ") ? (c += d) : (c += "---COMMA---" + d);
				} else c = a[0];
				console[s](c);
			});
	},
	2: function (t, e, o) {
		"use strict";
		o.r(e);
		var n = o(3),
			r = o.n(n);
		for (var i in n)
			"default" !== i &&
				(function (t) {
					o.d(e, t, function () {
						return n[t];
					});
				})(i);
		e.default = r.a;
	},
	3: function (t, e, o) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var n = {
			name: "UniSection",
			props: { type: { type: String, default: "" }, title: { type: String, default: "" }, subTitle: { type: String, default: "" } },
			data: function () {
				return {};
			},
			watch: {
				title: function (t) {
					uni.report && "" !== t && uni.report("title", t);
				},
			},
			methods: {
				onClick: function () {
					this.$emit("click");
				},
			},
		};
		e.default = n;
	},
	313: function (t, e, o) {
		"use strict";
		o.r(e);
		var n = o(314),
			r = o.n(n);
		for (var i in n)
			"default" !== i &&
				(function (t) {
					o.d(e, t, function () {
						return n[t];
					});
				})(i);
		e.default = r.a;
	},
	314: function (t, e, o) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var n = {
			name: "UniSwiperDot",
			props: {
				info: {
					type: Array,
					default: function () {
						return [];
					},
				},
				current: { type: Number, default: 0 },
				dotsStyles: {
					type: Object,
					default: function () {
						return {};
					},
				},
				mode: { type: String, default: "default" },
				field: { type: String, default: "" },
			},
			data: function () {
				return {
					dots: {
						width: 8,
						height: 8,
						bottom: 10,
						color: "#fff",
						backgroundColor: "rgba(0, 0, 0, .3)",
						border: "1px rgba(0, 0, 0, .3) solid",
						selectedBackgroundColor: "#333",
						selectedBorder: "1px rgba(0, 0, 0, .9) solid",
					},
				};
			},
			watch: {
				dotsStyles: function (t) {
					this.dots = Object.assign(this.dots, this.dotsStyles);
				},
				mode: function (t) {
					"indexes" === t ? ((this.dots.width = 20), (this.dots.height = 20)) : ((this.dots.width = 8), (this.dots.height = 8));
				},
			},
			created: function () {
				"indexes" === this.mode && ((this.dots.width = 20), (this.dots.height = 20)), (this.dots = Object.assign(this.dots, this.dotsStyles));
			},
			methods: {
				clickItem: function (t) {
					this.$emit("clickItem", t);
				},
			},
		};
		e.default = n;
	},
	315: function (t, e) {
		t.exports = {
			".uni-swiper__warp": { "": { flex: [1, 0, 0, 0], flexDirection: ["column", 0, 0, 0], position: ["relative", 0, 0, 0], overflow: ["hidden", 0, 0, 0] } },
			".uni-swiper__dots-box": {
				"": {
					position: ["absolute", 0, 0, 1],
					bottom: ["10", 0, 0, 1],
					left: [0, 0, 0, 1],
					right: [0, 0, 0, 1],
					flex: [1, 0, 0, 1],
					flexDirection: ["row", 0, 0, 1],
					justifyContent: ["center", 0, 0, 1],
					alignItems: ["center", 0, 0, 1],
				},
			},
			".uni-swiper__dots-item": {
				"": {
					width: ["8", 0, 0, 2],
					borderRadius: ["100", 0, 0, 2],
					marginLeft: ["6", 0, 0, 2],
					backgroundColor: ["rgba(0,0,0,0.4)", 0, 0, 2],
					"marginTop:first-child": [0, 0, 0, 3],
					"marginRight:first-child": [0, 0, 0, 3],
					"marginBottom:first-child": [0, 0, 0, 3],
					"marginLeft:first-child": [0, 0, 0, 3],
				},
			},
			".uni-swiper__dots-default": { "": { borderRadius: ["100", 0, 0, 4] } },
			".uni-swiper__dots-long": { "": { borderRadius: ["50", 0, 0, 5] } },
			".uni-swiper__dots-bar": { "": { borderRadius: ["50", 0, 0, 6] } },
			".uni-swiper__dots-nav": {
				"": {
					bottom: ["0", 0, 0, 7],
					height: ["40", 0, 0, 7],
					flex: [1, 0, 0, 7],
					flexDirection: ["row", 0, 0, 7],
					justifyContent: ["flex-start", 0, 0, 7],
					alignItems: ["center", 0, 0, 7],
					backgroundColor: ["rgba(0,0,0,0.2)", 0, 0, 7],
				},
			},
			".uni-swiper__dots-nav-item": {
				"": {
					fontSize: ["14", 0, 0, 8],
					color: ["#ffffff", 0, 0, 8],
					marginTop: [0, 0, 0, 8],
					marginRight: ["15", 0, 0, 8],
					marginBottom: [0, 0, 0, 8],
					marginLeft: ["15", 0, 0, 8],
				},
			},
			".uni-swiper__dots-indexes": { "": { justifyContent: ["center", 0, 0, 9], alignItems: ["center", 0, 0, 9] } },
			".uni-swiper__dots-indexes-text": { "": { color: ["#ffffff", 0, 0, 10], fontSize: ["12", 0, 0, 10] } },
			"@VERSION": 2,
		};
	},
	316: function (t, e, o) {
		"use strict";
		var n = o(317),
			r = o.n(n);
		e.default = r.a;
	},
	317: function (t, e, o) {
		"use strict";
		(function (t) {
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
			var o = {
				components: {},
				data: function () {
					return {
						info: [
							{
								colorClass: "uni-bg-red",
								url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",
								content: "\u5185\u5bb9 A",
							},
							{
								colorClass: "uni-bg-green",
								url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",
								content: "\u5185\u5bb9 B",
							},
							{
								colorClass: "uni-bg-blue",
								url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",
								content: "\u5185\u5bb9 C",
							},
						],
						dotStyle: [
							{
								backgroundColor: "rgba(0, 0, 0, .3)",
								border: "1px rgba(0, 0, 0, .3) solid",
								color: "#fff",
								selectedBackgroundColor: "rgba(0, 0, 0, .9)",
								selectedBorder: "1px rgba(0, 0, 0, .9) solid",
							},
							{
								backgroundColor: "rgba(255, 90, 95,0.3)",
								border: "1px rgba(255, 90, 95,0.3) solid",
								color: "#fff",
								selectedBackgroundColor: "rgba(255, 90, 95,0.9)",
								selectedBorder: "1px rgba(255, 90, 95,0.9) solid",
							},
							{
								backgroundColor: "rgba(83, 200, 249,0.3)",
								border: "1px rgba(83, 200, 249,0.3) solid",
								color: "#fff",
								selectedBackgroundColor: "rgba(83, 200, 249,0.9)",
								selectedBorder: "1px rgba(83, 200, 249,0.9) solid",
							},
						],
						modeIndex: -1,
						styleIndex: -1,
						current: 0,
						mode: "default",
						dotsStyles: {},
						swiperDotIndex: 0,
					};
				},
				onLoad: function () {},
				methods: {
					change: function (t) {
						this.current = t.detail.current;
					},
					selectStyle: function (t) {
						(this.dotsStyles = this.dotStyle[t]), (this.styleIndex = t);
					},
					selectMode: function (t, e) {
						(this.mode = t), (this.modeIndex = e), (this.styleIndex = -1), (this.dotsStyles = this.dotStyle[0]);
					},
					clickItem: function (t) {
						this.swiperDotIndex = t;
					},
					onBanner: function (e) {
						t("log", 22222, e, " at pages/extUI/swiper-dot/swiper-dot.nvue:108");
					},
				},
			};
			e.default = o;
		}).call(this, o(14).default);
	},
	318: function (t, e) {
		t.exports = {
			".example": { "": { paddingTop: [0, 0, 0, 2], paddingRight: ["15", 0, 0, 2], paddingBottom: [0, 0, 0, 2], paddingLeft: ["15", 0, 0, 2] } },
			".example-info": {
				"": {
					paddingTop: ["15", 0, 0, 3],
					paddingRight: ["15", 0, 0, 3],
					paddingBottom: ["15", 0, 0, 3],
					paddingLeft: ["15", 0, 0, 3],
					color: ["#3b4144", 0, 0, 3],
					backgroundColor: ["#ffffff", 0, 0, 3],
					fontSize: ["14", 0, 0, 3],
					lineHeight: ["20", 0, 0, 3],
				},
			},
			".example-info-text": { "": { fontSize: ["14", 0, 0, 4], lineHeight: ["20", 0, 0, 4], color: ["#3b4144", 0, 0, 4] } },
			".example-body": {
				"": {
					flexDirection: ["row", 0, 0, 16],
					paddingTop: ["20rpx", 0, 0, 16],
					paddingRight: ["20rpx", 0, 0, 16],
					paddingBottom: ["20rpx", 0, 0, 16],
					paddingLeft: ["20rpx", 0, 0, 16],
					backgroundColor: ["#ffffff", 0, 0, 5],
				},
			},
			".word-btn-white": { "": { fontSize: ["18", 0, 0, 6], color: ["#FFFFFF", 0, 0, 6] } },
			".word-btn": {
				"": {
					flexDirection: ["row", 0, 0, 7],
					alignItems: ["center", 0, 0, 7],
					justifyContent: ["center", 0, 0, 7],
					borderRadius: ["6", 0, 0, 7],
					height: ["48", 0, 0, 7],
					marginTop: ["15", 0, 0, 7],
					marginRight: ["15", 0, 0, 7],
					marginBottom: ["15", 0, 0, 7],
					marginLeft: ["15", 0, 0, 7],
					backgroundColor: ["#007AFF", 0, 0, 7],
				},
			},
			".word-btn--hover": { "": { backgroundColor: ["#4ca2ff", 0, 0, 8] } },
			".swiper-box": { "": { height: ["200", 0, 0, 9] } },
			".swiper-item": {
				"": {
					flexDirection: ["column", 0, 0, 10],
					justifyContent: ["center", 0, 0, 10],
					alignItems: ["center", 0, 0, 10],
					backgroundColor: ["#999999", 0, 0, 10],
					color: ["#ffffff", 0, 0, 10],
				},
			},
			".image": { "": { width: ["750rpx", 0, 0, 11] } },
			".uni-bg-red": { "": { backgroundColor: ["#ff5a5f", 0, 0, 13] } },
			".uni-bg-green": { "": { backgroundColor: ["#09bb07", 0, 0, 14] } },
			".uni-bg-blue": { "": { backgroundColor: ["#007aff", 0, 0, 15] } },
			".example-body-item": {
				"": {
					flexDirection: ["row", 0, 0, 17],
					justifyContent: ["center", 0, 0, 17],
					alignItems: ["center", 0, 0, 17],
					marginTop: ["15rpx", 0, 0, 17],
					marginRight: ["15rpx", 0, 0, 17],
					marginBottom: ["15rpx", 0, 0, 17],
					marginLeft: ["15rpx", 0, 0, 17],
					paddingTop: ["15rpx", 0, 0, 17],
					paddingRight: ["15rpx", 0, 0, 17],
					paddingBottom: ["15rpx", 0, 0, 17],
					paddingLeft: ["15rpx", 0, 0, 17],
					height: ["60rpx", 0, 0, 17],
					flex: [1, 0, 0, 17],
					borderColor: ["#e5e5e5", 0, 0, 17],
					borderStyle: ["solid", 0, 0, 17],
					borderWidth: ["1", 0, 0, 17],
					borderRadius: ["5", 0, 0, 17],
				},
			},
			".example-body-item-text": { "": { fontSize: ["28rpx", 0, 0, 18], color: ["#333333", 0, 0, 18] } },
			".example-body-dots": {
				"": {
					width: ["16rpx", 0, 0, 19],
					height: ["16rpx", 0, 0, 19],
					borderRadius: ["50", 0, 0, 19],
					backgroundColor: ["#333333", 0, 0, 19],
					marginLeft: ["10rpx", 0, 0, 19],
				},
			},
			".active": { "": { borderStyle: ["solid", 0, 0, 20], borderColor: ["#007aff", 0, 0, 20], borderWidth: ["1", 0, 0, 20] } },
			"@VERSION": 2,
		};
	},
	4: function (t, e) {
		t.exports = {
			".uni-section": {
				"": {
					position: ["relative", 0, 0, 0],
					marginTop: ["10", 0, 0, 0],
					flexDirection: ["row", 0, 0, 0],
					alignItems: ["center", 0, 0, 0],
					paddingTop: [0, 0, 0, 0],
					paddingRight: ["10", 0, 0, 0],
					paddingBottom: [0, 0, 0, 0],
					paddingLeft: ["10", 0, 0, 0],
					height: ["50", 0, 0, 0],
					backgroundColor: ["#f8f8f8", 0, 0, 0],
					fontWeight: ["normal", 0, 0, 0],
				},
			},
			".uni-section__head": {
				"": { flexDirection: ["row", 0, 0, 1], justifyContent: ["center", 0, 0, 1], alignItems: ["center", 0, 0, 1], marginRight: ["10", 0, 0, 1] },
			},
			".line": { "": { height: ["15", 0, 0, 2], backgroundColor: ["#c0c0c0", 0, 0, 2], borderRadius: ["5", 0, 0, 2], width: ["3", 0, 0, 2] } },
			".circle": {
				"": {
					width: ["8", 0, 0, 3],
					height: ["8", 0, 0, 3],
					borderTopRightRadius: ["50", 0, 0, 3],
					borderTopLeftRadius: ["50", 0, 0, 3],
					borderBottomLeftRadius: ["50", 0, 0, 3],
					borderBottomRightRadius: ["50", 0, 0, 3],
					backgroundColor: ["#c0c0c0", 0, 0, 3],
				},
			},
			".uni-section__content": { "": { flexDirection: ["column", 0, 0, 4], flex: [1, 0, 0, 4], color: ["#333333", 0, 0, 4] } },
			".uni-section__content-title": { "": { fontSize: ["14", 0, 0, 5], color: ["#333333", 0, 0, 5] } },
			".distraction": { "": { flexDirection: ["row", 0, 0, 6], alignItems: ["center", 0, 0, 6] } },
			".uni-section__content-sub": { "": { fontSize: ["12", 0, 0, 7], color: ["#999999", 0, 0, 7] } },
			"@VERSION": 2,
		};
	},
	473: function (t, e, o) {
		"use strict";
		o.d(e, "b", function () {
			return r;
		}),
			o.d(e, "c", function () {
				return i;
			}),
			o.d(e, "a", function () {
				return n;
			});
		var n = { uniSwiperDot: o(711).default, uniSection: o(13).default },
			r = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					o(
						"view",
						{ staticClass: ["content"] },
						[
							o(
								"uni-swiper-dot",
								{
									staticClass: ["uni-swiper-dot-box"],
									attrs: { info: t.info, current: t.current, mode: t.mode, dotsStyles: t.dotsStyles, field: "content" },
									on: { clickItem: t.clickItem },
								},
								[
									o(
										"swiper",
										{ staticClass: ["swiper-box"], attrs: { current: t.swiperDotIndex }, on: { change: t.change } },
										t._l(t.info, function (e, n) {
											return o("swiper-item", { key: n }, [
												o(
													"view",
													{ staticClass: ["swiper-item"], class: e.colorClass },
													[
														o("u-image", {
															staticClass: ["image"],
															attrs: { src: e.url, mode: "aspectFill", draggable: !1 },
															on: {
																click: function (e) {
																	t.onBanner(n);
																},
															},
														}),
													],
													1,
												),
											]);
										}),
										1,
									),
								],
								1,
							),
							o("uni-section", { attrs: { title: "\u6a21\u5f0f\u9009\u62e9", type: "line" } }),
							o("view", { staticClass: ["example-body"] }, [
								o(
									"view",
									{
										staticClass: ["example-body-item"],
										class: { active: 0 === t.modeIndex },
										on: {
											click: function (e) {
												t.selectMode("default", 0);
											},
										},
									},
									[o("u-text", { staticClass: ["example-body-item-text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v("default")])],
								),
								o(
									"view",
									{
										staticClass: ["example-body-item"],
										class: { active: 1 === t.modeIndex },
										on: {
											click: function (e) {
												t.selectMode("dot", 1);
											},
										},
									},
									[o("u-text", { staticClass: ["example-body-item-text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v("dot")])],
								),
								o(
									"view",
									{
										staticClass: ["example-body-item"],
										class: { active: 2 === t.modeIndex },
										on: {
											click: function (e) {
												t.selectMode("round", 2);
											},
										},
									},
									[o("u-text", { staticClass: ["example-body-item-text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v("round")])],
								),
								o(
									"view",
									{
										staticClass: ["example-body-item"],
										class: { active: 3 === t.modeIndex },
										on: {
											click: function (e) {
												t.selectMode("nav", 3);
											},
										},
									},
									[o("u-text", { staticClass: ["example-body-item-text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v("nav")])],
								),
								o(
									"view",
									{
										staticClass: ["example-body-item"],
										class: { active: 4 === t.modeIndex },
										on: {
											click: function (e) {
												t.selectMode("indexes", 4);
											},
										},
									},
									[o("u-text", { staticClass: ["example-body-item-text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v("indexes")])],
								),
							]),
							o("uni-section", { attrs: { title: "\u989c\u8272\u6837\u5f0f\u9009\u62e9", type: "line" } }),
							o(
								"view",
								{ staticClass: ["example-body"] },
								[
									"nav" !== t.mode
										? t._l(t.dotStyle, function (e, n) {
												return o(
													"view",
													{
														key: n,
														staticClass: ["example-body-item"],
														class: { active: t.styleIndex === n },
														on: {
															click: function (e) {
																t.selectStyle(n);
															},
														},
													},
													[
														o("view", {
															staticClass: ["example-body-dots"],
															style: { "background-color": e.selectedBackgroundColor, border: e.selectedBorder },
														}),
														o("view", { staticClass: ["example-body-dots"], style: { "background-color": e.backgroundColor, border: e.border } }),
														o("view", { staticClass: ["example-body-dots"], style: { "background-color": e.backgroundColor, border: e.border } }),
													],
												);
										  })
										: t._e(),
									"nav" === t.mode
										? t._l(t.dotStyle, function (e, n) {
												return o(
													"view",
													{
														key: n,
														staticClass: ["example-body-item"],
														class: { active: t.styleIndex === n },
														style: { "background-color": e.selectedBackgroundColor },
														on: {
															click: function (e) {
																t.selectStyle(n);
															},
														},
													},
													[
														o("u-text", { staticClass: ["example-body-item-text"], style: { color: e.color }, appendAsTree: !0, attrs: { append: "tree" } }, [
															t._v("\u5185\u5bb9"),
														]),
													],
												);
										  })
										: t._e(),
								],
								2,
							),
						],
						1,
					),
				]);
			},
			i = [];
	},
	496: function (t, e, o) {
		"use strict";
		o.d(e, "b", function () {
			return n;
		}),
			o.d(e, "c", function () {
				return r;
			}),
			o.d(e, "a", function () {});
		var n = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o(
					"view",
					{ staticClass: ["uni-swiper__warp"] },
					[
						t._t("default"),
						"default" === t.mode
							? o(
									"view",
									{ key: "default", staticClass: ["uni-swiper__dots-box"], style: { bottom: t.dots.bottom + "px" } },
									t._l(t.info, function (e, n) {
										return o("view", {
											key: n,
											staticClass: ["uni-swiper__dots-item", "uni-swiper__dots-bar"],
											style: {
												width: (n === t.current ? 2 * t.dots.width : t.dots.width) + "px",
												height: t.dots.width / 3 + "px",
												"background-color": n !== t.current ? t.dots.backgroundColor : t.dots.selectedBackgroundColor,
												"border-radius": "0px",
											},
											on: {
												click: function (e) {
													t.clickItem(n);
												},
											},
										});
									}),
									0,
							  )
							: t._e(),
						"dot" === t.mode
							? o(
									"view",
									{ key: "dot", staticClass: ["uni-swiper__dots-box"], style: { bottom: t.dots.bottom + "px" } },
									t._l(t.info, function (e, n) {
										return o("view", {
											key: n,
											staticClass: ["uni-swiper__dots-item"],
											style: {
												width: t.dots.width + "px",
												height: t.dots.height + "px",
												"background-color": n !== t.current ? t.dots.backgroundColor : t.dots.selectedBackgroundColor,
												border: n !== t.current ? t.dots.border : t.dots.selectedBorder,
											},
											on: {
												click: function (e) {
													t.clickItem(n);
												},
											},
										});
									}),
									0,
							  )
							: t._e(),
						"round" === t.mode
							? o(
									"view",
									{ key: "round", staticClass: ["uni-swiper__dots-box"], style: { bottom: t.dots.bottom + "px" } },
									t._l(t.info, function (e, n) {
										return o("view", {
											key: n,
											staticClass: ["uni-swiper__dots-item"],
											class: [n === t.current && "uni-swiper__dots-long"],
											style: {
												width: (n === t.current ? 3 * t.dots.width : t.dots.width) + "px",
												height: t.dots.height + "px",
												"background-color": n !== t.current ? t.dots.backgroundColor : t.dots.selectedBackgroundColor,
												border: n !== t.current ? t.dots.border : t.dots.selectedBorder,
											},
											on: {
												click: function (e) {
													t.clickItem(n);
												},
											},
										});
									}),
									0,
							  )
							: t._e(),
						"nav" === t.mode
							? o(
									"view",
									{
										key: "nav",
										staticClass: ["uni-swiper__dots-box", "uni-swiper__dots-nav"],
										style: { "background-color": t.dotsStyles.backgroundColor, bottom: "0" },
									},
									[
										o(
											"u-text",
											{ staticClass: ["uni-swiper__dots-nav-item"], style: { color: t.dotsStyles.color }, appendAsTree: !0, attrs: { append: "tree" } },
											[t._v(t._s(t.current + 1 + "/" + t.info.length + " " + t.info[t.current][t.field]))],
										),
									],
							  )
							: t._e(),
						"indexes" === t.mode
							? o(
									"view",
									{ key: "indexes", staticClass: ["uni-swiper__dots-box"], style: { bottom: t.dots.bottom + "px" } },
									t._l(t.info, function (e, n) {
										return o(
											"view",
											{
												key: n,
												staticClass: ["uni-swiper__dots-item", "uni-swiper__dots-indexes"],
												style: {
													width: t.dots.width + "px",
													height: t.dots.height + "px",
													color: n === t.current ? t.dots.selectedColor : t.dots.color,
													"background-color": n !== t.current ? t.dots.backgroundColor : t.dots.selectedBackgroundColor,
													border: n !== t.current ? t.dots.border : t.dots.selectedBorder,
												},
												on: {
													click: function (e) {
														t.clickItem(n);
													},
												},
											},
											[o("u-text", { staticClass: ["uni-swiper__dots-indexes-text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(n + 1))])],
										);
									}),
									0,
							  )
							: t._e(),
					],
					2,
				);
			},
			r = [];
	},
	5: function (t, e, o) {
		"use strict";
		o.d(e, "b", function () {
			return n;
		}),
			o.d(e, "c", function () {
				return r;
			}),
			o.d(e, "a", function () {});
		var n = function () {
				var t = this,
					e = t.$createElement,
					o = t._self._c || e;
				return o(
					"view",
					{ staticClass: ["uni-section"], attrs: { nvue: !0 } },
					[
						t.type ? o("view", { staticClass: ["uni-section__head"] }, [o("view", { staticClass: ["uni-section__head-tag"], class: t.type })]) : t._e(),
						o("view", { staticClass: ["uni-section__content"] }, [
							o("u-text", { staticClass: ["uni-section__content-title"], class: { distraction: !t.subTitle }, appendAsTree: !0, attrs: { append: "tree" } }, [
								t._v(t._s(t.title)),
							]),
							t.subTitle
								? o("u-text", { staticClass: ["uni-section__content-sub"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(t.subTitle))])
								: t._e(),
						]),
						t._t("default"),
					],
					2,
				);
			},
			r = [];
	},
	6: function (t, e, o) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(o(7).default, Vue.prototype.__$appStyle__);
	},
	602: function (t, e, o) {
		"use strict";
		o.r(e);
		var n = o(315),
			r = o.n(n);
		for (var i in n)
			"default" !== i &&
				(function (t) {
					o.d(e, t, function () {
						return n[t];
					});
				})(i);
		e.default = r.a;
	},
	603: function (t, e, o) {
		"use strict";
		o.r(e);
		var n = o(318),
			r = o.n(n);
		for (var i in n)
			"default" !== i &&
				(function (t) {
					o.d(e, t, function () {
						return n[t];
					});
				})(i);
		e.default = r.a;
	},
	7: function (t, e, o) {
		"use strict";
		o.r(e);
		var n = o(1),
			r = o.n(n);
		for (var i in n)
			"default" !== i &&
				(function (t) {
					o.d(e, t, function () {
						return n[t];
					});
				})(i);
		e.default = r.a;
	},
	710: function (t, e, o) {
		"use strict";
		o.r(e);
		o(6);
		var n = o(102);
		"undefined" == typeof Promise ||
			Promise.prototype.finally ||
			(Promise.prototype.finally = function (t) {
				var e = this.constructor;
				return this.then(
					function (o) {
						return e.resolve(t()).then(function () {
							return o;
						});
					},
					function (o) {
						return e.resolve(t()).then(function () {
							throw o;
						});
					},
				);
			}),
			(n.default.mpType = "page"),
			(n.default.route = "pages/extUI/swiper-dot/swiper-dot"),
			(n.default.el = "#root"),
			new Vue(n.default);
	},
	711: function (t, e, o) {
		"use strict";
		o.r(e);
		var n = o(496),
			r = o(313);
		for (var i in r)
			"default" !== i &&
				(function (t) {
					o.d(e, t, function () {
						return r[t];
					});
				})(i);
		var s = o(0);
		var a = Object(s.a)(r.default, n.b, n.c, !1, null, "4a2af973", "e04f8de2", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(o(602).default, this.options.style) : Object.assign(this.options.style, o(602).default);
		}).call(a),
			(e.default = a.exports);
	},
	8: function (t, e, o) {
		"use strict";
		o.r(e);
		var n = o(4),
			r = o.n(n);
		for (var i in n)
			"default" !== i &&
				(function (t) {
					o.d(e, t, function () {
						return n[t];
					});
				})(i);
		e.default = r.a;
	},
});
