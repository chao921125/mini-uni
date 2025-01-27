!(function (t) {
	var e = {};
	function n(o) {
		if (e[o]) return e[o].exports;
		var r = (e[o] = { i: o, l: !1, exports: {} });
		return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
	}
	(n.m = t),
		(n.c = e),
		(n.d = function (t, e, o) {
			n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
		}),
		(n.r = function (t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(n.t = function (t, e) {
			if ((1 & e && (t = n(t)), 8 & e)) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var o = Object.create(null);
			if ((n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
				for (var r in t)
					n.d(
						o,
						r,
						function (e) {
							return t[e];
						}.bind(null, r),
					);
			return o;
		}),
		(n.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t.default;
					  }
					: function () {
							return t;
					  };
			return n.d(e, "a", e), e;
		}),
		(n.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(n.p = ""),
		n((n.s = 737));
})({
	0: function (t, e, n) {
		"use strict";
		function o(t, e, n, o, r, i, s, a, u, c) {
			var l,
				d = "function" == typeof t ? t.options : t;
			if (u) {
				d.components || (d.components = {});
				var p = Object.prototype.hasOwnProperty;
				for (var f in u) p.call(u, f) && !p.call(d.components, f) && (d.components[f] = u[f]);
			}
			if (
				(c &&
					((c.beforeCreate || (c.beforeCreate = [])).unshift(function () {
						this[c.__module] = this;
					}),
					(d.mixins || (d.mixins = [])).push(c)),
				e && ((d.render = e), (d.staticRenderFns = n), (d._compiled = !0)),
				o && (d.functional = !0),
				i && (d._scopeId = "data-v-" + i),
				s
					? ((l = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								r && r.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(s);
					  }),
					  (d._ssrRegister = l))
					: r &&
					  (l = a
							? function () {
									r.call(this, this.$root.$options.shadowRoot);
							  }
							: r),
				l)
			)
				if (d.functional) {
					d._injectStyles = l;
					var _ = d.render;
					d.render = function (t, e) {
						return l.call(e), _(t, e);
					};
				} else {
					var h = d.beforeCreate;
					d.beforeCreate = h ? [].concat(h, l) : [l];
				}
			return { exports: t, options: d };
		}
		n.d(e, "a", function () {
			return o;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	114: function (t, e, n) {
		"use strict";
		var o = n(437),
			r = n(391),
			i = n(0);
		var s = Object(i.a)(r.default, o.b, o.c, !1, null, null, "15b0d870", !1, o.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(628).default, this.options.style) : Object.assign(this.options.style, n(628).default);
		}).call(s),
			(e.default = s.exports);
	},
	13: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(5),
			r = n(2);
		for (var i in r)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return r[t];
					});
				})(i);
		var s = n(0);
		var a = Object(s.a)(r.default, o.b, o.c, !1, null, "168bca6c", "39eb9647", !1, o.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(8).default, this.options.style) : Object.assign(this.options.style, n(8).default);
		}).call(a),
			(e.default = a.exports);
	},
	2: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(3),
			r = n.n(o);
		for (var i in o)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(i);
		e.default = r.a;
	},
	3: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var o = {
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
		e.default = o;
	},
	388: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(389),
			r = n.n(o);
		for (var i in o)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(i);
		e.default = r.a;
	},
	389: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var o = {
			name: "UniCountdown",
			props: {
				showDay: { type: Boolean, default: !0 },
				showColon: { type: Boolean, default: !0 },
				backgroundColor: { type: String, default: "#FFFFFF" },
				borderColor: { type: String, default: "#000000" },
				color: { type: String, default: "#000000" },
				splitorColor: { type: String, default: "#000000" },
				day: { type: Number, default: 0 },
				hour: { type: Number, default: 0 },
				minute: { type: Number, default: 0 },
				second: { type: Number, default: 0 },
				timestamp: { type: Number, default: 0 },
			},
			data: function () {
				return { timer: null, syncFlag: !1, d: "00", h: "00", i: "00", s: "00", leftTime: 0, seconds: 0 };
			},
			watch: {
				day: function (t) {
					this.changeFlag();
				},
				hour: function (t) {
					this.changeFlag();
				},
				minute: function (t) {
					this.changeFlag();
				},
				second: function (t) {
					this.changeFlag();
				},
			},
			created: function (t) {
				this.startData();
			},
			beforeDestroy: function () {
				clearInterval(this.timer);
			},
			methods: {
				toSeconds: function (t, e, n, o, r) {
					return t ? t - parseInt(new Date().getTime() / 1e3, 10) : 60 * e * 60 * 24 + 60 * n * 60 + 60 * o + r;
				},
				timeUp: function () {
					clearInterval(this.timer), this.$emit("timeup");
				},
				countDown: function () {
					var t = this.seconds,
						e = 0,
						n = 0,
						o = 0,
						r = 0;
					t > 0
						? ((e = Math.floor(t / 86400)),
						  (n = Math.floor(t / 3600) - 24 * e),
						  (o = Math.floor(t / 60) - 24 * e * 60 - 60 * n),
						  (r = Math.floor(t) - 24 * e * 60 * 60 - 60 * n * 60 - 60 * o))
						: this.timeUp(),
						e < 10 && (e = "0" + e),
						n < 10 && (n = "0" + n),
						o < 10 && (o = "0" + o),
						r < 10 && (r = "0" + r),
						(this.d = e),
						(this.h = n),
						(this.i = o),
						(this.s = r);
				},
				startData: function () {
					var t = this;
					(this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second)),
						this.seconds <= 0 ||
							(this.countDown(),
							(this.timer = setInterval(function () {
								t.seconds--, t.seconds < 0 ? t.timeUp() : t.countDown();
							}, 1e3)));
				},
				changeFlag: function () {
					this.syncFlag ||
						((this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second)), this.startData(), (this.syncFlag = !0));
				},
			},
		};
		e.default = o;
	},
	390: function (t, e) {
		t.exports = {
			".uni-countdown": {
				"": {
					flexDirection: ["row", 0, 0, 0],
					justifyContent: ["flex-start", 0, 0, 0],
					paddingTop: ["2rpx", 0, 0, 0],
					paddingRight: [0, 0, 0, 0],
					paddingBottom: ["2rpx", 0, 0, 0],
					paddingLeft: [0, 0, 0, 0],
				},
			},
			".uni-countdown__splitor": {
				"": {
					justifyContent: ["center", 0, 0, 1],
					lineHeight: ["48rpx", 0, 0, 1],
					paddingTop: ["5rpx", 0, 0, 1],
					paddingRight: ["5rpx", 0, 0, 1],
					paddingBottom: ["5rpx", 0, 0, 1],
					paddingLeft: ["5rpx", 0, 0, 1],
					fontSize: ["12", 0, 0, 1],
				},
			},
			".uni-countdown__number": {
				"": {
					justifyContent: ["center", 0, 0, 2],
					alignItems: ["center", 0, 0, 2],
					width: ["52rpx", 0, 0, 2],
					height: ["48rpx", 0, 0, 2],
					lineHeight: ["48rpx", 0, 0, 2],
					marginTop: ["5rpx", 0, 0, 2],
					marginRight: ["5rpx", 0, 0, 2],
					marginBottom: ["5rpx", 0, 0, 2],
					marginLeft: ["5rpx", 0, 0, 2],
					textAlign: ["center", 0, 0, 2],
					fontSize: ["12", 0, 0, 2],
				},
			},
			"@VERSION": 2,
		};
	},
	391: function (t, e, n) {
		"use strict";
		var o = n(392),
			r = n.n(o);
		e.default = r.a;
	},
	392: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var o = {
			components: {},
			data: function () {
				return { testHour: 0, testMinute: 0, testSecond: 0 };
			},
			created: function () {
				var t = this;
				setTimeout(function () {
					(t.testHour = 1), (t.testMinute = 1), (t.testSecond = 0);
				}, 2e3);
			},
			methods: {
				timeup: function () {
					uni.showToast({ title: "\u65f6\u95f4\u5230" });
				},
			},
		};
		e.default = o;
	},
	393: function (t, e) {
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
					flexDirection: ["column", 0, 0, 5],
					paddingTop: ["10", 0, 0, 9],
					paddingRight: ["10", 0, 0, 9],
					paddingBottom: ["10", 0, 0, 9],
					paddingLeft: ["10", 0, 0, 9],
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
	437: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return r;
		}),
			n.d(e, "c", function () {
				return i;
			}),
			n.d(e, "a", function () {
				return o;
			});
		var o = { uniSection: n(13).default, uniCountdown: n(738).default },
			r = function () {
				var t = this.$createElement,
					e = this._self._c || t;
				return e("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					e(
						"view",
						[
							e("u-text", { staticClass: ["example-info"], appendAsTree: !0, attrs: { append: "tree" } }, [
								this._v(
									"\u5012\u8ba1\u65f6\u7ec4\u4ef6\u4e3b\u8981\u7528\u4e8e\u4fc3\u9500\u5546\u54c1\u5269\u4f59\u65f6\u95f4\uff0c\u53d1\u9001\u77ed\u4fe1\u9a8c\u8bc1\u7b49\u5f85\u65f6\u95f4\u7b49\u573a\u666f",
								),
							]),
							e("uni-section", { attrs: { title: "\u4e00\u822c\u7528\u6cd5", type: "line" } }),
							e("view", { staticClass: ["example-body"] }, [e("uni-countdown", { attrs: { day: 1, hour: 1, minute: 12, second: 40 } })], 1),
							e("uni-section", { attrs: { title: "\u4e0d\u663e\u793a\u5929\u6570", type: "line" } }),
							e("view", { staticClass: ["example-body"] }, [e("uni-countdown", { attrs: { showDay: !1, hour: 12, minute: 12, second: 12 } })], 1),
							e("uni-section", { attrs: { title: "\u6587\u5b57\u5206\u9694\u7b26", type: "line" } }),
							e("view", { staticClass: ["example-body"] }, [e("uni-countdown", { attrs: { minute: 30, second: 0, showColon: !1 } })], 1),
							e("uni-section", { attrs: { title: "\u4fee\u6539\u989c\u8272", type: "line" } }),
							e(
								"view",
								{ staticClass: ["example-body"] },
								[
									e("uni-countdown", {
										attrs: { day: 1, hour: 2, minute: 30, second: 0, color: "#FFFFFF", backgroundColor: "#007AFF", borderColor: "#007AFF" },
									}),
								],
								1,
							),
							e("uni-section", { attrs: { title: "\u5012\u8ba1\u65f6\u56de\u8c03\u4e8b\u4ef6", type: "line" } }),
							e("view", { staticClass: ["example-body"] }, [e("uni-countdown", { attrs: { showDay: !1, second: 10 }, on: { timeup: this.timeup } })], 1),
							e("uni-section", { attrs: { title: "\u52a8\u6001\u8d4b\u503c", type: "line" } }),
							e(
								"view",
								{ staticClass: ["example-body"] },
								[e("uni-countdown", { attrs: { showDay: !1, hour: this.testHour, minute: this.testMinute, second: this.testSecond } })],
								1,
							),
						],
						1,
					),
				]);
			},
			i = [];
	},
	5: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return o;
		}),
			n.d(e, "c", function () {
				return r;
			}),
			n.d(e, "a", function () {});
		var o = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n(
					"view",
					{ staticClass: ["uni-section"], attrs: { nvue: !0 } },
					[
						t.type ? n("view", { staticClass: ["uni-section__head"] }, [n("view", { staticClass: ["uni-section__head-tag"], class: t.type })]) : t._e(),
						n("view", { staticClass: ["uni-section__content"] }, [
							n("u-text", { staticClass: ["uni-section__content-title"], class: { distraction: !t.subTitle }, appendAsTree: !0, attrs: { append: "tree" } }, [
								t._v(t._s(t.title)),
							]),
							t.subTitle
								? n("u-text", { staticClass: ["uni-section__content-sub"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(t.subTitle))])
								: t._e(),
						]),
						t._t("default"),
					],
					2,
				);
			},
			r = [];
	},
	520: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return o;
		}),
			n.d(e, "c", function () {
				return r;
			}),
			n.d(e, "a", function () {});
		var o = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("view", { staticClass: ["uni-countdown"] }, [
					t.showDay
						? n(
								"u-text",
								{
									staticClass: ["uni-countdown__number"],
									style: { borderColor: t.borderColor, color: t.color, backgroundColor: t.backgroundColor },
									appendAsTree: !0,
									attrs: { append: "tree" },
								},
								[t._v(t._s(t.d))],
						  )
						: t._e(),
					t.showDay
						? n("u-text", { staticClass: ["uni-countdown__splitor"], style: { color: t.splitorColor }, appendAsTree: !0, attrs: { append: "tree" } }, [
								t._v("\u5929"),
						  ])
						: t._e(),
					n(
						"u-text",
						{
							staticClass: ["uni-countdown__number"],
							style: { borderColor: t.borderColor, color: t.color, backgroundColor: t.backgroundColor },
							appendAsTree: !0,
							attrs: { append: "tree" },
						},
						[t._v(t._s(t.h))],
					),
					n("u-text", { staticClass: ["uni-countdown__splitor"], style: { color: t.splitorColor }, appendAsTree: !0, attrs: { append: "tree" } }, [
						t._v(t._s(t.showColon ? ":" : "\u65f6")),
					]),
					n(
						"u-text",
						{
							staticClass: ["uni-countdown__number"],
							style: { borderColor: t.borderColor, color: t.color, backgroundColor: t.backgroundColor },
							appendAsTree: !0,
							attrs: { append: "tree" },
						},
						[t._v(t._s(t.i))],
					),
					n("u-text", { staticClass: ["uni-countdown__splitor"], style: { color: t.splitorColor }, appendAsTree: !0, attrs: { append: "tree" } }, [
						t._v(t._s(t.showColon ? ":" : "\u5206")),
					]),
					n(
						"u-text",
						{
							staticClass: ["uni-countdown__number"],
							style: { borderColor: t.borderColor, color: t.color, backgroundColor: t.backgroundColor },
							appendAsTree: !0,
							attrs: { append: "tree" },
						},
						[t._v(t._s(t.s))],
					),
					t.showColon
						? t._e()
						: n("u-text", { staticClass: ["uni-countdown__splitor"], style: { color: t.splitorColor }, appendAsTree: !0, attrs: { append: "tree" } }, [
								t._v("\u79d2"),
						  ]),
				]);
			},
			r = [];
	},
	6: function (t, e, n) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(n(7).default, Vue.prototype.__$appStyle__);
	},
	627: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(390),
			r = n.n(o);
		for (var i in o)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(i);
		e.default = r.a;
	},
	628: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(393),
			r = n.n(o);
		for (var i in o)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(i);
		e.default = r.a;
	},
	7: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(1),
			r = n.n(o);
		for (var i in o)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(i);
		e.default = r.a;
	},
	737: function (t, e, n) {
		"use strict";
		n.r(e);
		n(6);
		var o = n(114);
		"undefined" == typeof Promise ||
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
			(o.default.mpType = "page"),
			(o.default.route = "pages/extUI/countdown/countdown"),
			(o.default.el = "#root"),
			new Vue(o.default);
	},
	738: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(520),
			r = n(388);
		for (var i in r)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return r[t];
					});
				})(i);
		var s = n(0);
		var a = Object(s.a)(r.default, o.b, o.c, !1, null, "7f2cae04", "489c6c42", !1, o.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(627).default, this.options.style) : Object.assign(this.options.style, n(627).default);
		}).call(a),
			(e.default = a.exports);
	},
	8: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(4),
			r = n.n(o);
		for (var i in o)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(i);
		e.default = r.a;
	},
});
