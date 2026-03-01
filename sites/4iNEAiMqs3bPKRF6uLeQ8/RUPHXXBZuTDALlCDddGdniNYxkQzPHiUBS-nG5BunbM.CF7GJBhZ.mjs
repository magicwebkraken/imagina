import {
    __esmMin as e
} from "./rolldown-runtime.DXOHPd_4.mjs";
import {
    X as t,
    Y as n,
    Z as r,
    ae as i,
    init_jsx_runtime as a,
    init_npm_react_18_2 as o,
    init_ssg_sandbox_shims as s,
    navigator as c,
    p as l,
    pe as u,
    re as d,
    se as f,
    te as p,
    u as m,
    ue as h,
    window as g,
    x as _,
    ye as v
} from "./react.Dwjas_Sf.mjs";
import {
    LayoutGroup as y,
    MotionConfigContext as b,
    init_framer_motion_5EXT2AMG as x,
    isMotionValue as S,
    motion as C,
    useInView as w
} from "./motion.BlEiWAc3.mjs";
import {
    ComponentViewportProvider as T,
    Container as E,
    ControlType as D,
    GeneratedComponentContext as O,
    Image2 as k,
    Link as A,
    PropertyOverrides2 as j,
    RenderTarget as M,
    RichText as N,
    SmartComponentScopedContainer as P,
    addFonts as F,
    addPropertyControls as I,
    cx as L,
    fontStore as R,
    getFonts as z,
    getFontsFromSharedStyle as B,
    getLoadingLazyAtYPosition as V,
    getPropertyControls as H,
    init_framer_RT4SPRVC as U,
    useActiveVariantCallback as W,
    useComponentViewport as G,
    useCustomCursors as K,
    useHydratedBreakpointVariants as q,
    useIsInCurrentNavigationTarget as J,
    useIsOnFramerCanvas as ee,
    useLocaleCode as te,
    useLocaleInfo as Y,
    useMetadata as ne,
    useOnVariantChange as re,
    useRouteElementId as ie,
    useVariantState as X,
    withCSS as Z,
    withFX as ae,
    withOptimizedAppearEffect as oe,
    withVariantAppearEffect as se
} from "./framer.IOnGdwAS.mjs";
import {
    Icon as ce,
    className as le,
    className$1 as ue,
    className$2 as de,
    className$3 as fe,
    css as pe,
    css$1 as me,
    css$2 as he,
    css$3 as ge,
    fonts as _e,
    fonts$1 as ve,
    fonts$2 as ye,
    fonts$3 as be,
    init_MdHF6Jcfy as xe,
    init_Phosphor as Se,
    init_Z3olXvqFe as Ce,
    init_ZfkYyGwCo as we,
    init_augiA20Il as Te,
    init_bEb99onL_ as Ee,
    metadata$1 as De
} from "./shared-lib.DlfjeACi.mjs";

function Oe(e, {
    showYear: t,
    showMonth: n,
    showWeekday: r,
    showMinutes: i,
    showSeconds: a
}, o, s, c) {
    let l = new Date,
        u = !r && !n && t;
    switch (e) {
        case `date`:
            return new Intl.DateTimeFormat(c, {
                weekday: r ? `long` : void 0,
                day: u ? void 0 : `numeric`,
                month: n ? s : void 0,
                year: t ? `numeric` : void 0
            }).format(l);
        case `time`:
            return new Intl.DateTimeFormat(c, {
                hour: `numeric`,
                minute: i ? `numeric` : void 0,
                second: a && i ? `numeric` : void 0,
                hour12: o === `12h`
            }).format(l);
        default:
            return new Intl.DateTimeFormat(c).format(l)
    }
}

function ke(e) {
    let t = {
            ...Q,
            ...e
        },
        {
            outputType: n,
            timeFormat: i,
            showYear: a,
            showMonth: o,
            showWeekday: s,
            showMinutes: c,
            showSeconds: d,
            monthFormat: f,
            color: m,
            font: g,
            tabularFont: _
        } = t,
        y = te(),
        b = p(() => Oe(n, {
            showYear: a,
            showMonth: o,
            showWeekday: s,
            showMinutes: c,
            showSeconds: d
        }, i, f, y), [y, f, n, c, o, d, s, a, i]),
        x = u(),
        S = p(e => {
            if (e === null) {
                clearTimeout(x.current);
                return
            }
            let t, n = () => {
                let r = new Date,
                    i = new Date().setSeconds(r.getSeconds() + 1, 0) - +r;
                x.current = setTimeout(n, i);
                let a = b();
                t !== a && (e.textContent = a, t = a)
            };
            n()
        }, [b]),
        [C, w] = v(!1),
        T = M.current() === M.canvas;
    return h(() => {
        r(() => w(!0))
    }, [T]), l(`p`, {
        suppressHydrationWarning: !0,
        style: {
            margin: 0,
            padding: 0,
            color: m,
            fontFamily: Ae,
            fontWeight: 500,
            fontSize: 16,
            lineHeight: 1,
            visibility: C ? `visible` : `hidden`,
            ...g,
            fontVariantNumeric: _ ? `tabular-nums` : `normal`,
            whiteSpace: `nowrap`
        },
        ref: T ? void 0 : S,
        children: b()
    })
}
var Ae, Q, je = e(() => {
        a(), U(), o(), Ae = `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`, Q = {
            height: 20,
            width: 140,
            outputType: `time`,
            color: `#999`,
            timeFormat: `24h`,
            showYear: !0,
            showMonth: !0,
            showWeekday: !0,
            showMinutes: !0,
            showSeconds: !0,
            monthFormat: `long`,
            alignment: `center`
        }, ke.displayName = `Time & Date`, I(ke, {
            outputType: {
                title: `Type`,
                type: D.Enum,
                displaySegmentedControl: !0,
                options: [`date`, `time`],
                optionTitles: [`Date`, `Time`],
                defaultValue: Q.outputType
            },
            showWeekday: {
                title: `Day`,
                type: D.Boolean,
                enabledTitle: `Show`,
                disabledTitle: `Hide`,
                defaultValue: Q.showWeekday,
                hidden: e => e.outputType !== `date`
            },
            showMonth: {
                title: `Month`,
                type: D.Boolean,
                enabledTitle: `Show`,
                disabledTitle: `Hide`,
                defaultValue: Q.showMonth,
                hidden: e => e.outputType !== `date`
            },
            monthFormat: {
                title: `Format`,
                type: D.Enum,
                options: [`short`, `long`, `numeric`],
                optionTitles: [`Short`, `Long`, `Numeric`],
                defaultValue: Q.monthFormat,
                hidden: e => e.outputType !== `date` || !e.showMonth
            },
            showYear: {
                title: `Year`,
                type: D.Boolean,
                enabledTitle: `Show`,
                disabledTitle: `Hide`,
                defaultValue: Q.showYear,
                hidden: e => e.outputType !== `date`
            },
            timeFormat: {
                title: `Format`,
                type: D.Enum,
                options: [`12h`, `24h`],
                optionTitles: [`12h`, `24h`],
                displaySegmentedControl: !0,
                defaultValue: Q.timeFormat,
                hidden: e => e.outputType !== `time`
            },
            showMinutes: {
                title: `Minutes`,
                type: D.Boolean,
                enabledTitle: `Show`,
                disabledTitle: `Hide`,
                defaultValue: Q.showMinutes,
                hidden: e => e.outputType !== `time`
            },
            showSeconds: {
                title: `Seconds`,
                type: D.Boolean,
                enabledTitle: `Show`,
                disabledTitle: `Hide`,
                defaultValue: Q.showSeconds,
                hidden: e => e.outputType !== `time` || !e.showMinutes
            },
            font: {
                type: D.Font,
                controls: `extended`
            },
            tabularFont: {
                title: `Tabular`,
                type: D.Boolean,
                defaultValue: !0
            },
            color: {
                type: D.Color,
                defaultValue: Q.color
            }
        })
    }),
    Me, Ne, Pe, Fe, Ie, Le = e(() => {
        U(), Me = {
            position: `relative`,
            width: `100%`,
            height: `100%`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`
        }, Ne = {
            ...Me,
            borderRadius: 6,
            background: `rgba(136, 85, 255, 0.3)`,
            color: `#85F`,
            border: `1px dashed #85F`,
            flexDirection: `column`
        }, Pe = {
            onClick: {
                type: D.EventHandler
            },
            onMouseEnter: {
                type: D.EventHandler
            },
            onMouseLeave: {
                type: D.EventHandler
            }
        }, Fe = {
            type: D.Number,
            title: `Font Size`,
            min: 2,
            max: 200,
            step: 1,
            displayStepper: !0
        }, Ie = {
            font: {
                type: D.Boolean,
                title: `Font`,
                defaultValue: !1,
                disabledTitle: `Default`,
                enabledTitle: `Custom`
            },
            fontFamily: {
                type: D.String,
                title: `Family`,
                placeholder: `Inter`,
                hidden: ({
                    font: e
                }) => !e
            },
            fontWeight: {
                type: D.Enum,
                title: `Weight`,
                options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
                optionTitles: [`Thin`, `Extra-light`, `Light`, `Regular`, `Medium`, `Semi-bold`, `Bold`, `Extra-bold`, `Black`],
                hidden: ({
                    font: e
                }) => !e
            }
        }
    });

function Re(e, t) {
    return Be(!0, e, t)
}

function ze(e, t) {
    return Be(!1, e, t)
}

function Be(e, t, n = !0) {
    let r = J();
    h(() => {
        n && r === e && t()
    }, [r])
}
var Ve = e(() => {
        U(), o()
    }),
    He = e(() => {
        o()
    }),
    Ue = e(() => {
        U()
    }),
    We = e(() => {
        U()
    }),
    Ge = e(() => {
        o()
    }),
    Ke = e(() => {
        U()
    }),
    qe, Je, Ye = e(() => {
        s(), o(), qe = () => {
            if (c !== void 0) {
                let e = c.userAgent.toLowerCase(),
                    t = (e.indexOf(`safari`) > -1 || e.indexOf(`framermobile`) > -1 || e.indexOf(`framerx`) > -1) && e.indexOf(`chrome`) < 0;
                return t
            } else return !1
        }, Je = () => f(() => qe(), [])
    }),
    Xe = e(() => {
        o(), We()
    }),
    Ze = e(() => {
        o(), U(), We(), He()
    }),
    Qe = e(() => {
        U(), o(), Le()
    });

function $e() {
    let e = f(() => M.current(), []);
    return e
}

function et() {
    let e = f(() => M.current() === M.canvas, []);
    return e
}
var tt = e(() => {
        o(), U()
    }),
    nt = e(() => {
        o()
    });

function rt(e) {
    let {
        borderRadius: t,
        isMixedBorderRadius: n,
        topLeftRadius: r,
        topRightRadius: i,
        bottomRightRadius: a,
        bottomLeftRadius: o
    } = e, s = f(() => n ? `${r}px ${i}px ${a}px ${o}px` : `${t}px`, [t, n, r, i, a, o]);
    return s
}
var it, at, ot = e(() => {
        o(), U(), it = {
            borderRadius: {
                title: `Radius`,
                type: D.FusedNumber,
                toggleKey: `isMixedBorderRadius`,
                toggleTitles: [`Radius`, `Radius per corner`],
                valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
                valueLabels: [`TL`, `TR`, `BR`, `BL`],
                min: 0
            }
        }, at = {
            padding: {
                type: D.FusedNumber,
                toggleKey: `paddingPerSide`,
                toggleTitles: [`Padding`, `Padding per side`],
                valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
                valueLabels: [`T`, `R`, `B`, `L`],
                min: 0,
                title: `Padding`
            }
        }
    }),
    st = e(() => {
        Le(), Ve(), He(), Ue(), We(), Ge(), Ke(), Ye(), Xe(), Ze(), Qe(), tt(), nt(), ot()
    });

function ct(e) {
    let {
        width: t,
        height: n,
        topLeft: r,
        topRight: i,
        bottomRight: a,
        bottomLeft: o,
        id: s,
        children: c,
        ...l
    } = e;
    return l
}

function $(e) {
    let t = ct(e);
    return l(gt, {
        ...t
    })
}

function lt(e) {
    let t = J(),
        n = u(!1),
        r = p(t => {
            if (!e.current) return;
            let n = (t === 1 ?.999 : t) * e.current.duration,
                r = Math.abs(e.current.currentTime - n) < .1;
            e.current.duration > 0 && !r && (e.current.currentTime = n)
        }, []),
        i = p(() => {
            let r = e.current.currentTime > 0 && e.current.onplaying && !e.current.paused && !e.current.ended && e.current.readyState > e.current.HAVE_CURRENT_DATA;
            !r && e.current && !n.current && t && (n.current = !0, e.current.play().catch(e => {}).finally(() => n.current = !1))
        }, []),
        a = p(() => {
            !e.current || n.current || e.current.pause()
        }, []);
    return {
        play: i,
        pause: a,
        setProgress: r
    }
}

function ut({
    playingProp: e,
    muted: t,
    loop: n,
    playsinline: r,
    controls: i
}) {
    let [a] = v(() => e), [o, s] = v(!1);
    e !== a && !o && s(!0);
    let c = a && t && n && r && !i && !o,
        l;
    return l = c ? `on-viewport` : a ? `on-mount` : `no-autoplay`, l
}

function dt(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}

function ft(e) {
    let t = e.match(_t) || [];
    return t.map(dt).join(` `)
}
var pt, mt, ht, gt, _t, vt, yt = e(() => {
    a(), U(), x(), st(), o(),
        function (e) {
            e.Fill = `fill`, e.Contain = `contain`, e.Cover = `cover`, e.None = `none`, e.ScaleDown = `scale-down`
        }(pt ||= {}),
        function (e) {
            e.Video = `Upload`, e.Url = `URL`
        }(mt ||= {}), ht = !1, gt = t(function (e) {
            let {
                srcType: t,
                srcFile: n,
                srcUrl: r,
                playing: i,
                muted: a,
                playsinline: o,
                controls: s,
                progress: c,
                objectFit: d,
                backgroundColor: p,
                onSeeked: m,
                onPause: g,
                onPlay: _,
                onEnd: v,
                onClick: y,
                onMouseEnter: b,
                onMouseLeave: x,
                onMouseDown: C,
                onMouseUp: T,
                poster: E,
                posterEnabled: D,
                startTime: O,
                volume: k,
                loop: A
            } = e, j = u(), M = Je(), N = u(null), P = u(null), F = et(), I = rt(e), L = F ? `no-autoplay` : ut({
                playingProp: i,
                muted: a,
                loop: A,
                playsinline: o,
                controls: s
            }), R = F ? !0 : w(j), z = O === 100 ? 99.9 : O, {
                play: B,
                pause: V,
                setProgress: H
            } = lt(j);
            h(() => {
                F || (i ? B() : V())
            }, [i]), h(() => {
                F || L === `on-viewport` && (R ? B() : V())
            }, [L, R]), h(() => {
                if (!ht) {
                    ht = !0;
                    return
                }
                let e = S(c) ? c.get() : (c ?? 0) * .01;
                H((e ?? 0) || (z ?? 0) / 100)
            }, [z, n, r, c]), h(() => {
                if (S(c)) return c.on(`change`, e => H(e))
            }, [c]), Re(() => {
                N.current !== null && j.current && (!P && A || !N.current) && B()
            }), ze(() => {
                j.current && (P.current = j.current.ended, N.current = j.current.paused, V())
            });
            let U = f(() => {
                let e = ``;
                if (t === `URL`) return r + e;
                if (t === `Upload`) return n + e
            }, [t, n, r, z]);
            h(() => {
                M && j.current && L === `on-mount` && setTimeout(() => B(), 50)
            }, []), h(() => {
                j.current && !a && (j.current.volume = (k ?? 0) / 100)
            }, [k]);
            let W = () => {
                j.current && (j.current.currentTime < .3 && H((z ?? 0) * .01), L === `on-mount` && B())
            };
            return l(`video`, {
                onClick: y,
                onMouseEnter: b,
                onMouseLeave: x,
                onMouseDown: C,
                onMouseUp: T,
                src: U,
                loop: A,
                ref: j,
                onSeeked: e => m ?.(e),
                onPause: e => g ?.(e),
                onPlay: e => _ ?.(e),
                onEnded: e => v ?.(e),
                autoPlay: L === `on-mount`,
                preload: L !== `on-mount` && D ? `metadata` : `auto`,
                poster: D ? E : void 0,
                onLoadedData: W,
                controls: s,
                muted: F ? !0 : a,
                playsInline: o,
                style: {
                    cursor: y ? `pointer` : `auto`,
                    width: `100%`,
                    height: `100%`,
                    borderRadius: I,
                    display: `block`,
                    objectFit: d,
                    backgroundColor: p,
                    objectPosition: `50% 50%`
                }
            })
        }), $.displayName = `Video`, $.defaultProps = {
            srcType: `URL`,
            srcUrl: `https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4`,
            srcFile: ``,
            posterEnabled: !1,
            controls: !1,
            playing: !0,
            loop: !0,
            muted: !0,
            playsinline: !0,
            restartOnEnter: !1,
            objectFit: `cover`,
            backgroundColor: `rgba(0,0,0,0)`,
            radius: 0,
            volume: 25,
            startTime: 0
        }, _t = /[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu, vt = [`cover`, `fill`, `contain`, `scale-down`, `none`], I($, {
            srcType: {
                type: D.Enum,
                displaySegmentedControl: !0,
                title: `Source`,
                options: [`URL`, `Upload`]
            },
            srcUrl: {
                type: D.String,
                title: `URL`,
                placeholder: `../example.mp4`,
                hidden(e) {
                    return e.srcType === `Upload`
                },
                description: `Hosted video file URL. For YouTube, use the YouTube component.`
            },
            srcFile: {
                type: D.File,
                title: `File`,
                allowedFileTypes: [`mp4`, `webm`],
                hidden(e) {
                    return e.srcType === `URL`
                }
            },
            playing: {
                type: D.Boolean,
                title: `Playing`,
                enabledTitle: `Yes`,
                disabledTitle: `No`
            },
            posterEnabled: {
                type: D.Boolean,
                title: `Poster`,
                enabledTitle: `Yes`,
                disabledTitle: `No`
            },
            poster: {
                type: D.Image,
                title: ` `,
                hidden: ({
                    posterEnabled: e
                }) => !e
            },
            backgroundColor: {
                type: D.Color,
                title: `Background`
            },
            ...it,
            startTime: {
                title: `Start Time`,
                type: D.Number,
                min: 0,
                max: 100,
                step: .1,
                unit: `%`
            },
            loop: {
                type: D.Boolean,
                title: `Loop`,
                enabledTitle: `Yes`,
                disabledTitle: `No`
            },
            objectFit: {
                type: D.Enum,
                title: `Fit`,
                options: vt,
                optionTitles: vt.map(ft)
            },
            controls: {
                type: D.Boolean,
                title: `Controls`,
                enabledTitle: `Show`,
                disabledTitle: `Hide`
            },
            muted: {
                type: D.Boolean,
                title: `Muted`,
                enabledTitle: `Yes`,
                disabledTitle: `No`
            },
            volume: {
                type: D.Number,
                max: 100,
                min: 0,
                unit: `%`,
                hidden: ({
                    muted: e
                }) => e
            },
            onEnd: {
                type: D.EventHandler
            },
            onSeeked: {
                type: D.EventHandler
            },
            onPause: {
                type: D.EventHandler
            },
            onPlay: {
                type: D.EventHandler
            },
            ...Pe
        })
});

function bt(e, t, n) {
    return Math.max(e, Math.min(t, n))
}
var xt, St, Ct, wt, Tt, Et, Dt = e(() => {
    s(), xt = class {
        constructor() {
            this.isRunning = !1, this.value = 0, this.from = 0, this.to = 0, this.duration = 0, this.currentTime = 0
        }
        advance(e) {
            var t;
            if (!this.isRunning) return;
            let n = !1;
            if (this.duration && this.easing) {
                this.currentTime += e;
                let t = bt(0, this.currentTime / this.duration, 1);
                n = t >= 1;
                let r = n ? 1 : this.easing(t);
                this.value = this.from + (this.to - this.from) * r
            } else this.lerp ? (this.value = function (e, t, n, r) {
                return function (e, t, n) {
                    return (1 - n) * e + n * t
                }(e, t, 1 - Math.exp(-n * r))
            }(this.value, this.to, 60 * this.lerp, e), Math.round(this.value) === this.to && (this.value = this.to, n = !0)) : (this.value = this.to, n = !0);
            n && this.stop(), (t = this.onUpdate) == null || t.call(this, this.value, n)
        }
        stop() {
            this.isRunning = !1
        }
        fromTo(e, t, {
            lerp: n,
            duration: r,
            easing: i,
            onStart: a,
            onUpdate: o
        }) {
            this.from = this.value = e, this.to = t, this.lerp = n, this.duration = r, this.easing = i, this.currentTime = 0, this.isRunning = !0, a ?.(), this.onUpdate = o
        }
    }, St = class {
        constructor({
            wrapper: e,
            content: t,
            autoResize: n = !0,
            debounce: r = 250
        } = {}) {
            this.width = 0, this.height = 0, this.scrollWidth = 0, this.scrollHeight = 0, this.resize = () => {
                this.onWrapperResize(), this.onContentResize()
            }, this.onWrapperResize = () => {
                this.wrapper === g ? (this.width = g.innerWidth, this.height = g.innerHeight) : this.wrapper instanceof HTMLElement && (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
            }, this.onContentResize = () => {
                this.wrapper === g ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : this.wrapper instanceof HTMLElement && (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
            }, this.wrapper = e, this.content = t, n && (this.debouncedResize = function (e, t) {
                let n;
                return function () {
                    let r = arguments,
                        i = this;
                    clearTimeout(n), n = setTimeout(function () {
                        e.apply(i, r)
                    }, t)
                }
            }(this.resize, r), this.wrapper === g ? g.addEventListener(`resize`, this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
        }
        destroy() {
            var e, t;
            (e = this.wrapperResizeObserver) == null || e.disconnect(), (t = this.contentResizeObserver) == null || t.disconnect(), g.removeEventListener(`resize`, this.debouncedResize, !1)
        }
        get limit() {
            return {
                x: this.scrollWidth - this.width,
                y: this.scrollHeight - this.height
            }
        }
    }, Ct = class {
        constructor() {
            this.events = {}
        }
        emit(e, ...t) {
            let n = this.events[e] || [];
            for (let e = 0, r = n.length; e < r; e++) n[e](...t)
        }
        on(e, t) {
            var n;
            return (n = this.events[e]) != null && n.push(t) || (this.events[e] = [t]), () => {
                var n;
                this.events[e] = (n = this.events[e]) ?.filter(e => t !== e)
            }
        }
        off(e, t) {
            var n;
            this.events[e] = (n = this.events[e]) ?.filter(e => t !== e)
        }
        destroy() {
            this.events = {}
        }
    }, wt = 100 / 6, Tt = class {
        constructor(e, {
            wheelMultiplier: t = 1,
            touchMultiplier: n = 1
        }) {
            this.lastDelta = {
                x: 0,
                y: 0
            }, this.windowWidth = 0, this.windowHeight = 0, this.onTouchStart = e => {
                let {
                    clientX: t,
                    clientY: n
                } = e.targetTouches ? e.targetTouches[0] : e;
                this.touchStart.x = t, this.touchStart.y = n, this.lastDelta = {
                    x: 0,
                    y: 0
                }, this.emitter.emit(`scroll`, {
                    deltaX: 0,
                    deltaY: 0,
                    event: e
                })
            }, this.onTouchMove = e => {
                var t, n, r, i;
                let {
                    clientX: a,
                    clientY: o
                } = e.targetTouches ? e.targetTouches[0] : e, s = -(a - ((n = (t = this.touchStart) ?.x) ?? 0)) * this.touchMultiplier, c = -(o - ((i = (r = this.touchStart) ?.y) ?? 0)) * this.touchMultiplier;
                this.touchStart.x = a, this.touchStart.y = o, this.lastDelta = {
                    x: s,
                    y: c
                }, this.emitter.emit(`scroll`, {
                    deltaX: s,
                    deltaY: c,
                    event: e
                })
            }, this.onTouchEnd = e => {
                this.emitter.emit(`scroll`, {
                    deltaX: this.lastDelta.x,
                    deltaY: this.lastDelta.y,
                    event: e
                })
            }, this.onWheel = e => {
                let {
                    deltaX: t,
                    deltaY: n,
                    deltaMode: r
                } = e;
                t *= r === 1 ? wt : r === 2 ? this.windowWidth : 1, n *= r === 1 ? wt : r === 2 ? this.windowHeight : 1, t *= this.wheelMultiplier, n *= this.wheelMultiplier, this.emitter.emit(`scroll`, {
                    deltaX: t,
                    deltaY: n,
                    event: e
                })
            }, this.onWindowResize = () => {
                this.windowWidth = g.innerWidth, this.windowHeight = g.innerHeight
            }, this.element = e, this.wheelMultiplier = t, this.touchMultiplier = n, this.touchStart = {
                x: null,
                y: null
            }, this.emitter = new Ct, g.addEventListener(`resize`, this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener(`wheel`, this.onWheel, {
                passive: !1
            }), this.element.addEventListener(`touchstart`, this.onTouchStart, {
                passive: !1
            }), this.element.addEventListener(`touchmove`, this.onTouchMove, {
                passive: !1
            }), this.element.addEventListener(`touchend`, this.onTouchEnd, {
                passive: !1
            })
        }
        on(e, t) {
            return this.emitter.on(e, t)
        }
        destroy() {
            this.emitter.destroy(), g.removeEventListener(`resize`, this.onWindowResize, !1), this.element.removeEventListener(`wheel`, this.onWheel), this.element.removeEventListener(`touchstart`, this.onTouchStart), this.element.removeEventListener(`touchmove`, this.onTouchMove), this.element.removeEventListener(`touchend`, this.onTouchEnd)
        }
    }, Et = class {
        constructor({
            wrapper: e = g,
            content: t = document.documentElement,
            wheelEventsTarget: n = e,
            eventsTarget: r = n,
            smoothWheel: i = !0,
            syncTouch: a = !1,
            syncTouchLerp: o = .075,
            touchInertiaMultiplier: s = 35,
            duration: c,
            easing: l = e => Math.min(1, 1.001 - 2 ** (-10 * e)),
            lerp: u = .1,
            infinite: d = !1,
            orientation: f = `vertical`,
            gestureOrientation: p = `vertical`,
            touchMultiplier: m = 1,
            wheelMultiplier: h = 1,
            autoResize: _ = !0,
            prevent: v,
            virtualScroll: y,
            __experimental__naiveDimensions: b = !1
        } = {}) {
            this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.userData = {}, this.lastVelocity = 0, this.velocity = 0, this.direction = 0, this.onPointerDown = e => {
                e.button === 1 && this.reset()
            }, this.onVirtualScroll = e => {
                if (typeof this.options.virtualScroll == `function` && !1 === this.options.virtualScroll(e)) return;
                let {
                    deltaX: t,
                    deltaY: n,
                    event: r
                } = e;
                if (this.emitter.emit(`virtual-scroll`, {
                        deltaX: t,
                        deltaY: n,
                        event: r
                    }), r.ctrlKey) return;
                let i = r.type.includes(`touch`),
                    a = r.type.includes(`wheel`);
                if (this.isTouching = r.type === `touchstart` || r.type === `touchmove`, this.options.syncTouch && i && r.type === `touchstart` && !this.isStopped && !this.isLocked) return void this.reset();
                let o = t === 0 && n === 0,
                    s = this.options.gestureOrientation === `vertical` && n === 0 || this.options.gestureOrientation === `horizontal` && t === 0;
                if (o || s) return;
                let c = r.composedPath();
                c = c.slice(0, c.indexOf(this.rootElement));
                let l = this.options.prevent;
                if (c.find(e => {
                        var t, n, r, o, s;
                        return e instanceof Element && (typeof l == `function` && l ?.(e) || (t = e.hasAttribute) ?.call(e, `data-lenis-prevent`) || i && (n = e.hasAttribute) ?.call(e, `data-lenis-prevent-touch`) || a && (r = e.hasAttribute) ?.call(e, `data-lenis-prevent-wheel`) || (o = e.classList) ?.contains(`lenis`) && !(s = e.classList) ?.contains(`lenis-stopped`))
                    })) return;
                if (this.isStopped || this.isLocked) return void r.preventDefault();
                if (!(this.options.syncTouch && i || this.options.smoothWheel && a)) return this.isScrolling = `native`, void this.animate.stop();
                r.preventDefault();
                let u = n;
                this.options.gestureOrientation === `both` ? u = Math.abs(n) > Math.abs(t) ? n : t : this.options.gestureOrientation === `horizontal` && (u = t);
                let d = i && this.options.syncTouch,
                    f = i && r.type === `touchend` && Math.abs(u) > 5;
                f && (u = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + u, Object.assign({
                    programmatic: !1
                }, d ? {
                    lerp: f ? this.options.syncTouchLerp : 1
                } : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing
                }))
            }, this.onNativeScroll = () => {
                if (clearTimeout(this.__resetVelocityTimeout), delete this.__resetVelocityTimeout, this.__preventNextNativeScrollEvent) delete this.__preventNextNativeScrollEvent;
                else if (!1 === this.isScrolling || this.isScrolling === `native`) {
                    let e = this.animatedScroll;
                    this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - e, this.direction = Math.sign(this.animatedScroll - e), this.isScrolling = `native`, this.emit(), this.velocity !== 0 && (this.__resetVelocityTimeout = setTimeout(() => {
                        this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
                    }, 400))
                }
            }, g.lenisVersion = `1.1.9`, e && e !== document.documentElement && e !== document.body || (e = g), this.options = {
                wrapper: e,
                content: t,
                wheelEventsTarget: n,
                eventsTarget: r,
                smoothWheel: i,
                syncTouch: a,
                syncTouchLerp: o,
                touchInertiaMultiplier: s,
                duration: c,
                easing: l,
                lerp: u,
                infinite: d,
                gestureOrientation: p,
                orientation: f,
                touchMultiplier: m,
                wheelMultiplier: h,
                autoResize: _,
                prevent: v,
                virtualScroll: y,
                __experimental__naiveDimensions: b
            }, this.animate = new xt, this.emitter = new Ct, this.dimensions = new St({
                wrapper: e,
                content: t,
                autoResize: _
            }), this.updateClassName(), this.userData = {}, this.time = 0, this.velocity = this.lastVelocity = 0, this.isLocked = !1, this.isStopped = !1, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, !1), this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown, !1), this.virtualScroll = new Tt(r, {
                touchMultiplier: m,
                wheelMultiplier: h
            }), this.virtualScroll.on(`scroll`, this.onVirtualScroll)
        }
        destroy() {
            this.emitter.destroy(), this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, !1), this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName()
        }
        on(e, t) {
            return this.emitter.on(e, t)
        }
        off(e, t) {
            return this.emitter.off(e, t)
        }
        setScroll(e) {
            this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
        }
        resize() {
            this.dimensions.resize()
        }
        emit() {
            this.emitter.emit(`scroll`, this)
        }
        reset() {
            this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
        }
        start() {
            this.isStopped && (this.isStopped = !1, this.reset())
        }
        stop() {
            this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
        }
        raf(e) {
            let t = e - (this.time || e);
            this.time = e, this.animate.advance(.001 * t)
        }
        scrollTo(e, {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            duration: i = this.options.duration,
            easing: a = this.options.easing,
            lerp: o = this.options.lerp,
            onStart: s,
            onComplete: c,
            force: l = !1,
            programmatic: u = !0,
            userData: d = {}
        } = {}) {
            if (!this.isStopped && !this.isLocked || l) {
                if (typeof e == `string` && [`top`, `left`, `start`].includes(e)) e = 0;
                else if (typeof e == `string` && [`bottom`, `right`, `end`].includes(e)) e = this.limit;
                else {
                    let n;
                    if (typeof e == `string` ? n = document.querySelector(e) : e instanceof HTMLElement && e != null && e.nodeType && (n = e), n) {
                        if (this.options.wrapper !== g) {
                            let e = this.rootElement.getBoundingClientRect();
                            t -= this.isHorizontal ? e.left : e.top
                        }
                        let r = n.getBoundingClientRect();
                        e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll
                    }
                }
                if (typeof e == `number` && (e += t, e = Math.round(e), this.options.infinite ? u && (this.targetScroll = this.animatedScroll = this.scroll) : e = bt(0, e, this.limit), e !== this.targetScroll)) {
                    if (this.userData = d, n) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), c ?.(this), void(this.userData = {});
                    u || (this.targetScroll = e), this.animate.fromTo(this.animatedScroll, e, {
                        duration: i,
                        easing: a,
                        lerp: o,
                        onStart: () => {
                            r && (this.isLocked = !0), this.isScrolling = `smooth`, s ?.(this)
                        },
                        onUpdate: (e, t) => {
                            this.isScrolling = `smooth`, this.lastVelocity = this.velocity, this.velocity = e - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = e, this.setScroll(this.scroll), u && (this.targetScroll = e), t || this.emit(), t && (this.reset(), this.emit(), c ?.(this), this.userData = {}, this.preventNextNativeScrollEvent())
                        }
                    })
                }
            }
        }
        preventNextNativeScrollEvent() {
            this.__preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
                delete this.__preventNextNativeScrollEvent
            })
        }
        get rootElement() {
            return this.options.wrapper === g ? document.documentElement : this.options.wrapper
        }
        get limit() {
            return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? `x` : `y`]
        }
        get isHorizontal() {
            return this.options.orientation === `horizontal`
        }
        get actualScroll() {
            return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
        }
        get scroll() {
            return this.options.infinite ? function (e, t) {
                return (e % t + t) % t
            }(this.animatedScroll, this.limit) : this.animatedScroll
        }
        get progress() {
            return this.limit === 0 ? 1 : this.scroll / this.limit
        }
        get isScrolling() {
            return this.__isScrolling
        }
        set isScrolling(e) {
            this.__isScrolling !== e && (this.__isScrolling = e, this.updateClassName())
        }
        get isStopped() {
            return this.__isStopped
        }
        set isStopped(e) {
            this.__isStopped !== e && (this.__isStopped = e, this.updateClassName())
        }
        get isLocked() {
            return this.__isLocked
        }
        set isLocked(e) {
            this.__isLocked !== e && (this.__isLocked = e, this.updateClassName())
        }
        get isSmooth() {
            return this.isScrolling === `smooth`
        }
        get className() {
            let e = `lenis`;
            return this.isStopped && (e += ` lenis-stopped`), this.isLocked && (e += ` lenis-locked`), this.isScrolling && (e += ` lenis-scrolling`), this.isScrolling === `smooth` && (e += ` lenis-smooth`), e
        }
        updateClassName() {
            this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
        }
        cleanUpClassName() {
            this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, ``).trim()
        }
    }
});

function Ot(e) {
    let {
        intensity: t
    } = e, n = u(null);
    return h(() => {
        if (n.current) try {
            n.current.scrollTo(0, {
                immediate: !0
            })
        } catch (e) {
            console.error(`Error scrolling to top:`, e)
        }
    }, [n]), h(() => {
        let e = () => {
            try {
                let e = document.querySelector(`[data-frameruni-stop-scroll]`),
                    t = document.documentElement,
                    r = t && t.style && t.style.overflow === `hidden`;
                n.current && (e || r ? n.current.stop() : n.current.start())
            } catch (e) {
                console.error(`Error in checkForStopScroll:`, e)
            }
        };
        e();
        let t, r;
        try {
            t = new MutationObserver(e), r = new MutationObserver(e), document && document.documentElement && (t.observe(document.documentElement, {
                childList: !0,
                subtree: !0,
                attributes: !0,
                attributeFilter: [`data-frameruni-stop-scroll`]
            }), r.observe(document.documentElement, {
                attributes: !0,
                attributeFilter: [`style`]
            }))
        } catch (e) {
            console.error(`Error setting up observers:`, e)
        }
        return () => {
            try {
                t && t.disconnect(), r && r.disconnect()
            } catch (e) {
                console.error(`Error disconnecting observers:`, e)
            }
        }
    }, []), h(() => {
        try {
            if (!document) return;
            let e = document.getElementsByTagName(`*`);
            for (let t = 0; t < e.length; t++) {
                let n = e[t];
                if (n) try {
                    let e = g.getComputedStyle(n);
                    e && e.getPropertyValue(`overflow`) === `auto` && n.setAttribute(`data-lenis-prevent`, `true`)
                } catch (e) {
                    console.error(`Error getting computed style:`, e)
                }
            }
        } catch (e) {
            console.error(`Error in overflow detection:`, e)
        }
    }, []), h(() => {
        try {
            if (typeof Et != `function`) {
                console.error(`Lenis is not available`);
                return
            }
            n.current = new Et({
                duration: (t || 10) / 10
            });
            let e = t => {
                    if (n.current) try {
                        n.current.raf(t), requestAnimationFrame(e)
                    } catch (e) {
                        console.error(`Error in animation frame:`, e)
                    }
                },
                r = requestAnimationFrame(e);
            return () => {
                if (cancelAnimationFrame(r), n.current) try {
                    n.current.destroy(), n.current = null
                } catch (e) {
                    console.error(`Error destroying Lenis:`, e)
                }
            }
        } catch (e) {
            return console.error(`Error initializing Lenis:`, e), () => {}
        }
    }, [t]), h(() => {
        try {
            if (!document || !n.current) return;
            let e = Array.from(document.querySelectorAll(`a[href]`) || []).filter(e => {
                    if (!e) return !1;
                    let t = e;
                    if (!t.href) return !1;
                    let n = t.href.startsWith(g.location.origin) || t.href.startsWith(`./`) || t.href.startsWith(`/`),
                        r = t.href.includes(`#`);
                    return n && r
                }).map(e => {
                    try {
                        let t = e,
                            n = t.href.includes(`#`) ? `#${t.href.split(`#`).pop()}` : ``,
                            r = n ? decodeURIComponent(n) : ``,
                            i = 0;
                        try {
                            if (r) {
                                let e = document.querySelector(r);
                                if (e) {
                                    let t = g.getComputedStyle(e).scrollMarginTop;
                                    i = t && parseInt(t) || 0
                                }
                            }
                        } catch (e) {
                            console.error(`Error finding target element:`, e)
                        }
                        return {
                            href: n,
                            scrollMargin: i,
                            anchorElement: t
                        }
                    } catch (e) {
                        return console.error(`Error processing anchor:`, e), null
                    }
                }).filter(Boolean),
                t = (e, t, r) => {
                    try {
                        e && e.preventDefault && e.preventDefault(), n.current && t && n.current.scrollTo(t, {
                            offset: -(r || 0)
                        })
                    } catch (e) {
                        console.error(`Error in anchor click handler:`, e)
                    }
                },
                r = e.map(({
                    href: e,
                    scrollMargin: n
                }) => r => t(r, e, n));
            return e.forEach(({
                anchorElement: e
            }, t) => {
                e && r[t] && e.addEventListener(`click`, r[t])
            }), () => {
                e.forEach(({
                    anchorElement: e
                }, t) => {
                    e && r[t] && e.removeEventListener(`click`, r[t])
                })
            }
        } catch (e) {
            return console.error(`Error setting up anchor links:`, e), () => {}
        }
    }, [n]), l(`div`, {
        style: e.style
    })
}
var kt, At, jt = e(() => {
    s(), a(), U(), Dt(), o(), kt = Z(Ot, [`html.lenis { height: auto; }`, `.lenis.lenis-smooth { scroll-behavior: auto !important; }`, `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`, `.lenis.lenis-stopped { overflow: hidden; }`, `.lenis.lenis-scrolling iframe { pointer-events: none; }`], ``), At = kt, kt.displayName = `Smooth Scroll`, I(kt, {
        intensity: {
            title: `Intensity`,
            type: D.Number,
            defaultValue: 10,
            min: 0,
            description: `More components at [Framer University](https://frameruni.link/cc).`
        }
    })
});

function Mt(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt = e(() => {
    a(), U(), x(), o(), Nt = [`KRJpZNjW0`, `PJhnXyMuc`], Pt = `framer-nD58W`, Ft = {
        KRJpZNjW0: `framer-v-uykodg`,
        PJhnXyMuc: `framer-v-nsab8o`
    }, It = {
        damping: 30,
        delay: 0,
        mass: 1,
        stiffness: 100,
        type: `spring`
    }, Lt = e => typeof e == `object` && e && typeof e.src == `string` ? e : typeof e == `string` ? {
        src: e
    } : void 0, Rt = ({
        value: e,
        children: t
    }) => {
        let n = d(b),
            r = e ?? n.transition,
            i = f(() => ({
                ...n,
                transition: r
            }), [JSON.stringify(r)]);
        return l(b.Provider, {
            value: i,
            children: t
        })
    }, zt = C.create(_), Bt = {
        "Desktop 1": `KRJpZNjW0`,
        "Desktop 2": `PJhnXyMuc`
    }, Vt = ({
        height: e,
        id: t,
        image: n,
        width: r,
        ...i
    }) => ({
        ...i,
        rjk_eQu76: n ?? i.rjk_eQu76 ?? {
            pixelHeight: 1808,
            pixelWidth: 2400,
            src: `https://framerusercontent.com/images/blO9S3CbYfXAfqzsNgSGOggU7no.jpeg?scale-down-to=2048`,
            srcSet: `https://framerusercontent.com/images/blO9S3CbYfXAfqzsNgSGOggU7no.jpeg?scale-down-to=512 512w,https://framerusercontent.com/images/blO9S3CbYfXAfqzsNgSGOggU7no.jpeg?scale-down-to=1024 1024w,https://framerusercontent.com/images/blO9S3CbYfXAfqzsNgSGOggU7no.jpeg?scale-down-to=2048 2048w,https://framerusercontent.com/images/blO9S3CbYfXAfqzsNgSGOggU7no.jpeg 2400w`
        },
        variant: Bt[i.variant] ?? i.variant ?? `KRJpZNjW0`
    }), Ht = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Ut = n(function (e, t) {
        let n = u(null),
            r = t ?? n,
            a = i(),
            {
                activeLocale: o,
                setLocale: s
            } = Y(),
            c = G(),
            {
                style: d,
                className: f,
                layoutId: p,
                variant: m,
                rjk_eQu76: h,
                ...g
            } = Vt(e),
            {
                baseVariant: _,
                classNames: v,
                clearLoadingGesture: b,
                gestureHandlers: x,
                gestureVariant: S,
                isLoading: w,
                setGestureState: T,
                setVariant: E,
                variants: D
            } = X({
                cycleOrder: Nt,
                defaultVariant: `KRJpZNjW0`,
                ref: r,
                variant: m,
                variantClassNames: Ft
            }),
            O = Ht(e, D),
            A = [],
            j = L(Pt, ...A);
        return l(y, {
            id: p ?? a,
            children: l(zt, {
                animate: D,
                initial: !1,
                children: l(Rt, {
                    value: It,
                    children: l(C.div, {
                        ...g,
                        ...x,
                        className: L(j, `framer-uykodg`, f, v),
                        "data-framer-name": `Desktop 1`,
                        layoutDependency: O,
                        layoutId: `KRJpZNjW0`,
                        ref: r,
                        style: {
                            ...d
                        },
                        ...Mt({
                            PJhnXyMuc: {
                                "data-framer-name": `Desktop 2`
                            }
                        }, _, S),
                        children: l(k, {
                            background: {
                                alt: ``,
                                fit: `fill`,
                                loading: V((c ?.y || 0) + 0 + (((c ?.height || 522) - 0 - 522) / 2 + 0 + 0)),
                                pixelHeight: 2400,
                                pixelWidth: 1984,
                                sizes: `calc(${c?.width||`100vw`} * 0.7)`,
                                ...Lt(h)
                            },
                            className: `framer-g67yx7`,
                            "data-framer-name": `Image`,
                            layoutDependency: O,
                            layoutId: `K6So26LwU`,
                            style: {
                                borderBottomLeftRadius: 16,
                                borderBottomRightRadius: 16,
                                borderTopLeftRadius: 16,
                                borderTopRightRadius: 16
                            },
                            ...Mt({
                                PJhnXyMuc: {
                                    background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: V((c ?.y || 0) + 0 + (((c ?.height || 522) - 0 - 522) / 2 + 0 + 0)),
                                        pixelHeight: 2400,
                                        pixelWidth: 1984,
                                        sizes: c ?.width || `100vw`,
                                        ...Lt(h)
                                    }
                                }
                            }, _, S)
                        })
                    })
                })
            })
        })
    }), Wt = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-nD58W.framer-usuk85, .framer-nD58W .framer-usuk85 { display: block; }`, `.framer-nD58W.framer-uykodg { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`, `.framer-nD58W .framer-g67yx7 { flex: none; height: 522px; overflow: hidden; position: relative; width: 70%; will-change: var(--framer-will-change-override, transform); }`, `.framer-nD58W.framer-v-nsab8o .framer-g67yx7 { width: 100%; }`], Gt = Z(Ut, Wt, `framer-nD58W`), Kt = Gt, Gt.displayName = `Image changer`, Gt.defaultProps = {
        height: 522,
        width: 1200
    }, I(Gt, {
        variant: {
            options: [`KRJpZNjW0`, `PJhnXyMuc`],
            optionTitles: [`Desktop 1`, `Desktop 2`],
            title: `Variant`,
            type: D.Enum
        },
        rjk_eQu76: {
            __defaultAssetReference: `data:framer/asset-reference,blO9S3CbYfXAfqzsNgSGOggU7no.jpeg?originalFilename=Modern+Tech+Arrangement.jpeg&preferredSize=auto`,
            title: `Image`,
            type: D.ResponsiveImage
        }
    }), F(Gt, [{
        explicitInter: !0,
        fonts: []
    }], {
        supportsExplicitInterCodegen: !0
    })
});

function Jt(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un = e(() => {
        a(), U(), x(), o(), Yt = [`FncRFU7UL`, `mCwIT4qPN`, `svdswXNTA`, `d51MlNbpk`], Xt = `framer-6qRSE`, Zt = {
            d51MlNbpk: `framer-v-6h3z1x`,
            FncRFU7UL: `framer-v-x6fzyj`,
            mCwIT4qPN: `framer-v-veqckj`,
            svdswXNTA: `framer-v-1id8tr8`
        }, Qt = {
            damping: 60,
            delay: 0,
            mass: 1,
            stiffness: 270,
            type: `spring`
        }, $t = e => typeof e == `object` && e && typeof e.src == `string` ? e : typeof e == `string` ? {
            src: e
        } : void 0, en = ({
            value: e,
            children: t
        }) => {
            let n = d(b),
                r = e ?? n.transition,
                i = f(() => ({
                    ...n,
                    transition: r
                }), [JSON.stringify(r)]);
            return l(b.Provider, {
                value: i,
                children: t
            })
        }, tn = C.create(_), nn = {
            "Desktop Default": `mCwIT4qPN`,
            "Desktop Hover": `FncRFU7UL`,
            "Phone Default": `svdswXNTA`,
            "Phone Tapped": `d51MlNbpk`
        }, rn = ({
            description: e,
            height: t,
            id: n,
            image: r,
            title: i,
            width: a,
            ...o
        }) => ({
            ...o,
            GEReXC71q: e ?? o.GEReXC71q ?? `feature films, documentaries, and other long-form video content`,
            HSYB8KLpc: i ?? o.HSYB8KLpc ?? `Film and Video Editing`,
            variant: nn[o.variant] ?? o.variant ?? `FncRFU7UL`,
            y1DNXPRRS: r ?? o.y1DNXPRRS ?? {
                pixelHeight: 3648,
                pixelWidth: 5398,
                src: `https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=1024`,
                srcSet: `https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=4096 4096w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg 5398w`
            }
        }), an = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), on = n(function (e, t) {
            let n = u(null),
                r = t ?? n,
                a = i(),
                {
                    activeLocale: o,
                    setLocale: s
                } = Y(),
                c = G(),
                {
                    style: d,
                    className: f,
                    layoutId: p,
                    variant: h,
                    HSYB8KLpc: g,
                    GEReXC71q: v,
                    y1DNXPRRS: b,
                    ...x
                } = rn(e),
                {
                    baseVariant: S,
                    classNames: w,
                    clearLoadingGesture: T,
                    gestureHandlers: E,
                    gestureVariant: D,
                    isLoading: O,
                    setGestureState: A,
                    setVariant: j,
                    variants: M
                } = X({
                    cycleOrder: Yt,
                    defaultVariant: `FncRFU7UL`,
                    ref: r,
                    variant: h,
                    variantClassNames: Zt
                }),
                P = an(e, M),
                {
                    activeVariantCallback: F,
                    delay: I
                } = W(S),
                R = F(async (...e) => {
                    A({
                        isHovered: !0
                    }), j(`mCwIT4qPN`)
                }),
                z = F(async (...e) => {
                    A({
                        isHovered: !1
                    }), j(`mCwIT4qPN`)
                }),
                B = F(async (...e) => {
                    A({
                        isHovered: !0
                    }), j(`FncRFU7UL`)
                }),
                H = F(async (...e) => {
                    A({
                        isPressed: !1
                    }), j(`d51MlNbpk`)
                }),
                U = F(async (...e) => {
                    A({
                        isPressed: !1
                    }), j(`svdswXNTA`)
                }),
                K = [],
                q = L(Xt, ...K),
                J = () => ![`svdswXNTA`, `d51MlNbpk`].includes(S),
                ee = () => ![`mCwIT4qPN`, `svdswXNTA`].includes(S);
            return l(y, {
                id: p ?? a,
                children: l(tn, {
                    animate: M,
                    initial: !1,
                    children: l(en, {
                        value: Qt,
                        children: m(C.div, {
                            ...x,
                            ...E,
                            className: L(q, `framer-x6fzyj`, f, w),
                            "data-border": !0,
                            "data-framer-name": `Desktop Hover`,
                            "data-highlight": !0,
                            layoutDependency: P,
                            layoutId: `FncRFU7UL`,
                            onMouseEnter: R,
                            onMouseLeave: z,
                            ref: r,
                            style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgba(255, 255, 255, 0.3))`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                backdropFilter: `blur(10px)`,
                                background: `radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.1) 2.210024196147939%, rgba(255, 255, 255, 0) 100%)`,
                                borderBottomLeftRadius: 30,
                                borderBottomRightRadius: 30,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30,
                                WebkitBackdropFilter: `blur(10px)`,
                                ...d
                            },
                            variants: {
                                d51MlNbpk: {
                                    "--border-color": `rgba(255, 255, 255, 0)`,
                                    borderBottomLeftRadius: 16,
                                    borderBottomRightRadius: 16,
                                    borderTopLeftRadius: 16,
                                    borderTopRightRadius: 16
                                },
                                mCwIT4qPN: {
                                    "--border-bottom-width": `0px`,
                                    "--border-left-width": `0px`,
                                    "--border-right-width": `0px`,
                                    "--border-top-width": `0px`
                                },
                                svdswXNTA: {
                                    "--border-color": `rgba(255, 255, 255, 0)`,
                                    borderBottomLeftRadius: 15,
                                    borderBottomRightRadius: 15,
                                    borderTopLeftRadius: 15,
                                    borderTopRightRadius: 15
                                }
                            },
                            ...Jt({
                                d51MlNbpk: {
                                    "data-framer-name": `Phone Tapped`,
                                    onMouseEnter: void 0,
                                    onMouseLeave: void 0,
                                    onTap: U
                                },
                                mCwIT4qPN: {
                                    "data-framer-name": `Desktop Default`,
                                    onMouseEnter: B,
                                    onMouseLeave: void 0
                                },
                                svdswXNTA: {
                                    "data-framer-name": `Phone Default`,
                                    onMouseEnter: void 0,
                                    onMouseLeave: void 0,
                                    onTap: H
                                }
                            }, S, D),
                            children: [J() && l(C.div, {
                                className: `framer-za0hsz`,
                                "data-framer-name": `Glass Effect`,
                                layoutDependency: P,
                                layoutId: `FgCEV1YF2`,
                                style: {
                                    backdropFilter: `blur(5px)`,
                                    rotate: 9,
                                    WebkitBackdropFilter: `blur(5px)`
                                },
                                children: l(C.div, {
                                    className: `framer-1dw6zx5`,
                                    layoutDependency: P,
                                    layoutId: `rIcu7cAM4`,
                                    style: {
                                        backdropFilter: `blur(0px)`,
                                        background: `linear-gradient(114deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)`,
                                        backgroundColor: `rgb(255, 255, 255)`,
                                        opacity: .12,
                                        WebkitBackdropFilter: `blur(0px)`
                                    },
                                    variants: {
                                        mCwIT4qPN: {
                                            background: `linear-gradient(114deg, rgb(255, 255, 255) 47.74774774774775%, rgba(255, 255, 255, 0.08) 50.819488890785856%)`,
                                            backgroundColor: `rgba(0, 0, 0, 0)`,
                                            opacity: .17
                                        }
                                    }
                                })
                            }), l(C.div, {
                                className: `framer-1ae0bb6`,
                                "data-framer-name": `Title Wrapper`,
                                layoutDependency: P,
                                layoutId: `zoonQaYz8`,
                                children: l(N, {
                                    __fromCanvasComponent: !0,
                                    children: l(_, {
                                        children: l(C.h3, {
                                            style: {
                                                "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                                "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                                "--framer-font-size": `26px`,
                                                "--framer-letter-spacing": `-0.05em`,
                                                "--framer-line-height": `1.5em`,
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--extracted-a0htzi, rgb(255, 255, 255))`
                                            },
                                            children: `Film and Video Editing`
                                        })
                                    }),
                                    className: `framer-arsri9`,
                                    fonts: [`CUSTOM;SF Compact Rounded Semibold`],
                                    layoutDependency: P,
                                    layoutId: `MFqGykqB6`,
                                    style: {
                                        "--extracted-a0htzi": `rgb(255, 255, 255)`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                        textShadow: `none`
                                    },
                                    text: g,
                                    variants: {
                                        d51MlNbpk: {
                                            "--extracted-a0htzi": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                            textShadow: `none`
                                        },
                                        svdswXNTA: {
                                            "--extracted-a0htzi": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                            textShadow: `0px 1px 10px rgba(0, 0, 0, 0.4)`
                                        }
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...Jt({
                                        d51MlNbpk: {
                                            children: l(_, {
                                                children: l(C.h3, {
                                                    style: {
                                                        "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                                        "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                                        "--framer-font-size": `26px`,
                                                        "--framer-letter-spacing": `-0.05em`,
                                                        "--framer-line-height": `1.5em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                                    },
                                                    children: `Film and Video Editing`
                                                })
                                            })
                                        },
                                        mCwIT4qPN: {
                                            children: l(_, {
                                                children: l(C.h3, {
                                                    style: {
                                                        "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                                        "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                                        "--framer-font-size": `26px`,
                                                        "--framer-letter-spacing": `-0.05em`,
                                                        "--framer-line-height": `1.5em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--extracted-a0htzi, rgb(255, 255, 255))`
                                                    },
                                                    children: l(C.span, {
                                                        "data-text-fill": `true`,
                                                        style: {
                                                            backgroundImage: `linear-gradient(93deg, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)) 42.494226327944574%, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)) 100%)`
                                                        },
                                                        children: `Film and Video Editing`
                                                    })
                                                })
                                            })
                                        },
                                        svdswXNTA: {
                                            children: l(_, {
                                                children: l(C.h3, {
                                                    style: {
                                                        "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                                        "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                                        "--framer-font-size": `26px`,
                                                        "--framer-letter-spacing": `-0.05em`,
                                                        "--framer-line-height": `1.5em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                                    },
                                                    children: l(C.span, {
                                                        "data-text-fill": `true`,
                                                        style: {
                                                            backgroundImage: `linear-gradient(93deg, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)) 42.494226327944574%, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)) 100%)`
                                                        },
                                                        children: `Film and Video Editing`
                                                    })
                                                })
                                            })
                                        }
                                    }, S, D)
                                })
                            }), l(N, {
                                __fromCanvasComponent: !0,
                                children: l(_, {
                                    children: l(C.p, {
                                        style: {
                                            "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                            "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                            "--framer-font-size": `20px`,
                                            "--framer-line-height": `1.5em`,
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d9d01f21-7a47-443c-a8bc-56cdb453de6f, rgba(255, 255, 255, 0.8)))`
                                        },
                                        children: `feature films, documentaries, and other long-form video content`
                                    })
                                }),
                                className: `framer-598fx1`,
                                "data-framer-name": `Content`,
                                fonts: [`CUSTOM;SF Compact Rounded Semibold`],
                                layoutDependency: P,
                                layoutId: `oxBF59pow`,
                                style: {
                                    "--extracted-r6o4lv": `var(--token-d9d01f21-7a47-443c-a8bc-56cdb453de6f, rgba(255, 255, 255, 0.8))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                    opacity: 1,
                                    textShadow: `none`
                                },
                                text: v,
                                variants: {
                                    d51MlNbpk: {
                                        opacity: 1,
                                        textShadow: `none`
                                    },
                                    mCwIT4qPN: {
                                        opacity: 0
                                    },
                                    svdswXNTA: {
                                        "--extracted-r6o4lv": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                        opacity: 1,
                                        textShadow: `0px 2px 23px rgba(0, 0, 0, 0.55)`
                                    }
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Jt({
                                    svdswXNTA: {
                                        children: l(_, {
                                            children: l(C.p, {
                                                style: {
                                                    "--font-selector": `R0Y7SW50ZXItcmVndWxhcg==`,
                                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                    "--framer-font-size": `14px`,
                                                    "--framer-letter-spacing": `-0.04em`,
                                                    "--framer-line-height": `1.5em`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                                },
                                                children: `Learn More →`
                                            })
                                        }),
                                        fonts: [`GF;Inter-regular`],
                                        text: void 0
                                    }
                                }, S, D)
                            }), m(C.div, {
                                className: `framer-8o7yy1`,
                                "data-framer-name": `Image Wrapper`,
                                layoutDependency: P,
                                layoutId: `wH5tILdSF`,
                                style: {
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 0
                                },
                                variants: {
                                    d51MlNbpk: {
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    },
                                    svdswXNTA: {
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }
                                },
                                children: [l(k, {
                                    background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3648,
                                        intrinsicWidth: 5398,
                                        loading: V((c ?.y || 0) + ((c ?.height || 376) * .5000000000000002 - (c ?.height || 376) * 1 / 2) + ((c ?.height || 376) * 1 * .4988610478359911 - ((c ?.height || 376) * 1 - 0) * .9977 / 2)),
                                        pixelHeight: 3648,
                                        pixelWidth: 5398,
                                        sizes: `calc(${c?.width||`100vw`} * 0.9983)`,
                                        ...$t(b)
                                    },
                                    className: `framer-1qdcyjp`,
                                    "data-framer-name": `Image`,
                                    layoutDependency: P,
                                    layoutId: `gufEbba4C`,
                                    style: {
                                        filter: `none`,
                                        WebkitFilter: `none`
                                    },
                                    variants: {
                                        d51MlNbpk: {
                                            filter: `brightness(1)`,
                                            WebkitFilter: `brightness(1)`
                                        },
                                        svdswXNTA: {
                                            filter: `brightness(1)`,
                                            WebkitFilter: `brightness(1)`
                                        }
                                    },
                                    ...Jt({
                                        d51MlNbpk: {
                                            background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 3648,
                                                intrinsicWidth: 5398,
                                                loading: V((c ?.y || 0) + ((c ?.height || 200) * .5000000000000002 - (c ?.height || 200) * 1 / 2) + ((c ?.height || 200) * 1 * .49390243902439046 - ((c ?.height || 200) * 1 - 0) * 1.5 / 2)),
                                                pixelHeight: 3648,
                                                pixelWidth: 5398,
                                                sizes: `calc(${c?.width||`100vw`} * 1.5)`,
                                                ...$t(b)
                                            }
                                        },
                                        mCwIT4qPN: {
                                            background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 3648,
                                                intrinsicWidth: 5398,
                                                loading: V((c ?.y || 0) + ((c ?.height || 376) * .5000000000000002 - (c ?.height || 376) * 1.0027 / 2) + ((c ?.height || 376) * 1.0027 * .4986737400530506 - ((c ?.height || 376) * 1.0027 - 0) * .9973 / 2)),
                                                pixelHeight: 3648,
                                                pixelWidth: 5398,
                                                sizes: `calc(${c?.width||`100vw`} * 1)`,
                                                ...$t(b)
                                            }
                                        },
                                        svdswXNTA: {
                                            background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 3648,
                                                intrinsicWidth: 5398,
                                                loading: V((c ?.y || 0) + ((c ?.height || 200) * .5000000000000002 - (c ?.height || 200) * 1 / 2) + ((c ?.height || 200) * 1 * .5000000000000002 - ((c ?.height || 200) * 1 - 0) * 1 / 2)),
                                                pixelHeight: 3648,
                                                pixelWidth: 5398,
                                                sizes: c ?.width || `100vw`,
                                                ...$t(b)
                                            }
                                        }
                                    }, S, D)
                                }), ee() && l(C.div, {
                                    className: `framer-hfskuh`,
                                    "data-framer-name": `Overlay`,
                                    layoutDependency: P,
                                    layoutId: `c9w3tZzGZ`,
                                    style: {
                                        background: `linear-gradient(165deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)`
                                    }
                                })]
                            })]
                        })
                    })
                })
            })
        }), sn = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-6qRSE.framer-1lwvt57, .framer-6qRSE .framer-1lwvt57 { display: block; }`, `.framer-6qRSE.framer-x6fzyj { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; height: 376px; justify-content: space-between; overflow: hidden; padding: 40px; position: relative; width: 513px; will-change: var(--framer-will-change-override, transform); }`, `.framer-6qRSE .framer-za0hsz { align-content: center; align-items: center; bottom: -59px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: -276px; top: -199px; width: 169px; }`, `.framer-6qRSE .framer-1dw6zx5 { flex: none; height: 100%; left: calc(50.11389521640094% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`, `.framer-6qRSE .framer-1ae0bb6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-6qRSE .framer-arsri9 { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`, `.framer-6qRSE .framer-598fx1 { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-6qRSE .framer-8o7yy1 { flex: none; height: 100%; left: calc(50.097465886939595% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: -1; }`, `.framer-6qRSE .framer-1qdcyjp { flex: none; height: 100%; left: calc(50.00000000000002% - 99.83277591973244% / 2); overflow: visible; position: absolute; top: calc(49.88610478359911% - 99.77220956719817% / 2); width: 100%; z-index: -1; }`, `.framer-6qRSE .framer-hfskuh { flex: none; height: 100%; left: calc(50.097465886939595% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`, `.framer-6qRSE.framer-v-veqckj.framer-x6fzyj { padding: 12px 40px 40px 20px; }`, `.framer-6qRSE.framer-v-veqckj .framer-za0hsz { bottom: -57px; left: -218px; right: unset; top: -201px; }`, `.framer-6qRSE.framer-v-veqckj .framer-8o7yy1 { height: 100%; left: calc(50.097465886939595% - 100.19493177387915% / 2); top: calc(50.00000000000002% - 100.2659574468085% / 2); width: 100%; }`, `.framer-6qRSE.framer-v-veqckj .framer-1qdcyjp { height: 100%; left: calc(50.00000000000002% - 99.80544747081711% / 2); top: calc(49.86737400530506% - 99.73474801061008% / 2); width: 100%; }`, `.framer-6qRSE.framer-v-1id8tr8.framer-x6fzyj, .framer-6qRSE.framer-v-6h3z1x.framer-x6fzyj { cursor: pointer; gap: 70px; height: 200px; justify-content: flex-start; padding: 20px; }`, `.framer-6qRSE.framer-v-1id8tr8 .framer-1ae0bb6, .framer-6qRSE.framer-v-6h3z1x .framer-1ae0bb6 { order: 1; }`, `.framer-6qRSE.framer-v-1id8tr8 .framer-598fx1 { order: 3; }`, `.framer-6qRSE.framer-v-1id8tr8 .framer-8o7yy1 { left: calc(49.90253411306045% - 100% / 2); order: 2; overflow: hidden; will-change: var(--framer-will-change-override, transform); }`, `.framer-6qRSE.framer-v-1id8tr8 .framer-1qdcyjp { height: 100%; left: calc(49.90253411306045% - 100% / 2); top: calc(50.00000000000002% - 100% / 2); width: 100%; }`, `.framer-6qRSE.framer-v-6h3z1x .framer-598fx1 { order: 2; }`, `.framer-6qRSE.framer-v-6h3z1x .framer-8o7yy1 { left: calc(49.90253411306045% - 100% / 2); order: 3; overflow: hidden; will-change: var(--framer-will-change-override, transform); }`, `.framer-6qRSE.framer-v-6h3z1x .framer-1qdcyjp { height: 150%; left: calc(49.90253411306045% - 150% / 2); top: calc(49.390243902439046% - 150% / 2); width: 150%; }`, `.framer-6qRSE[data-border="true"]::after, .framer-6qRSE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`], cn = Z(on, sn, `framer-6qRSE`), ln = cn, cn.displayName = `Homepage - Category 3`, cn.defaultProps = {
            height: 376,
            width: 513
        }, I(cn, {
            variant: {
                options: [`FncRFU7UL`, `mCwIT4qPN`, `svdswXNTA`, `d51MlNbpk`],
                optionTitles: [`Desktop Hover`, `Desktop Default`, `Phone Default`, `Phone Tapped`],
                title: `Variant`,
                type: D.Enum
            },
            HSYB8KLpc: {
                defaultValue: `Film and Video Editing`,
                displayTextArea: !0,
                title: `Title`,
                type: D.String
            },
            GEReXC71q: {
                defaultValue: `feature films, documentaries, and other long-form video content`,
                displayTextArea: !0,
                title: `Description`,
                type: D.String
            },
            y1DNXPRRS: {
                __defaultAssetReference: `data:framer/asset-reference,KU8reFP90nuP1WlMgSloOnrcY.jpg?originalFilename=photo-1485846234645-a62644f84728%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHwyfHxmaWxtfGVufDB8fHx8MTY5NTQ3NjA1OXww%26ixlib%3Drb-4.0.jpg&preferredSize=auto`,
                title: `Image`,
                type: D.ResponsiveImage
            }
        }), F(cn, [{
            explicitInter: !0,
            fonts: [{
                family: `SF Compact Rounded Semibold`,
                source: `custom`,
                url: `https://framerusercontent.com/assets/CRNOcOM8NAYf5f6RmDbFrUUJqY8.otf`
            }, {
                family: `Inter`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZ1rib2Bg-4.woff2`,
                weight: `400`
            }]
        }], {
            supportsExplicitInterCodegen: !0
        })
    }),
    dn = e(() => {
        Le(), Ve(), He(), Ue(), We(), Ge(), Ke(), Ye(), Xe(), Ze(), Qe(), tt(), nt(), ot()
    });

function fn(e) {
    let {
        width: t,
        height: n,
        topLeft: r,
        topRight: i,
        bottomRight: a,
        bottomLeft: o,
        id: s,
        children: c,
        ...l
    } = e;
    return l
}

function pn(e) {
    let t = fn(e);
    return l(xn, {
        ...t
    })
}

function mn(e) {
    let t = J(),
        n = u(!1),
        r = u(!1),
        i = p(t => {
            if (!e.current) return;
            let n = (t === 1 ?.999 : t) * e.current.duration,
                r = Math.abs(e.current.currentTime - n) < .1;
            e.current.duration > 0 && !r && (e.current.currentTime = n)
        }, []),
        a = p(() => {
            let i = e.current;
            if (!i) return;
            i.preload = `auto`;
            let a = i.currentTime > 0 && i.onplaying && !i.paused && !i.ended && i.readyState >= i.HAVE_CURRENT_DATA;
            !a && i && !n.current && t && (n.current = !0, r.current = !0, i.play().catch(e => {}).finally(() => n.current = !1))
        }, []),
        o = p(() => {
            !e.current || n.current || (e.current.pause(), r.current = !1)
        }, []);
    return {
        play: a,
        pause: o,
        setProgress: i,
        isPlaying: r
    }
}

function hn({
    playingProp: e,
    muted: t,
    loop: n,
    playsinline: r,
    controls: i
}) {
    let [a] = v(() => e), [o, s] = v(!1);
    e !== a && !o && s(!0);
    let c = a && t && n && r && !i && !o,
        l;
    return l = c ? `on-viewport` : a ? `on-mount` : `no-autoplay`, l
}

function gn(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}

function _n(e) {
    let t = e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || [];
    return t.map(gn).join(` `)
}
var vn, yn, bn, xn, Sn, Cn = e(() => {
    a(), U(), x(), dn(), o(),
        function (e) {
            e.Fill = `fill`, e.Contain = `contain`, e.Cover = `cover`, e.None = `none`, e.ScaleDown = `scale-down`
        }(vn ||= {}),
        function (e) {
            e.Video = `Upload`, e.Url = `URL`
        }(yn ||= {}), bn = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`, xn = t(function (e) {
            let {
                srcType: t = `URL`,
                srcUrl: n,
                srcFile: r = ``,
                posterEnabled: i = !1,
                controls: a = !1,
                playing: o = !0,
                loop: s = !0,
                muted: c = !0,
                playsinline: d = !0,
                restartOnEnter: p = !1,
                objectFit: m = `cover`,
                backgroundColor: g = `rgba(0,0,0,0)`,
                radius: _ = 0,
                volume: v = 25,
                startTime: y = 0,
                poster: b,
                playing: x,
                progress: C,
                onSeeked: T,
                onPause: E,
                onPlay: D,
                onEnd: O,
                onClick: k,
                onMouseEnter: A,
                onMouseLeave: j,
                onMouseDown: N,
                onMouseUp: P
            } = e, F = u(), I = Je(), L = u(null), R = u(null), z = et(), B = $e(), V = z || B === M.export, H = rt(e), U = V ? `no-autoplay` : hn({
                playingProp: x,
                muted: c,
                loop: s,
                playsinline: d,
                controls: a
            }), W = V ? !0 : w(F), G = V ? !1 : w(F, {
                margin: `10%`,
                once: !0
            }), K = y === 100 ? 99.9 : y, {
                play: q,
                pause: J,
                setProgress: ee,
                isPlaying: te
            } = mn(F);
            h(() => {
                V || U !== `on-viewport` && (x ? q() : J())
            }, [U, x]), h(() => {
                V || (W && x && U !== `no-autoplay` && q(), U === `on-viewport` && J())
            }, [U, W, x]), h(() => {
                !z || b || i || K || !F.current || (F.current.currentTime = .01)
            }, [i, b, K]);
            let Y = u(!1);
            h(() => {
                if (!Y.current) {
                    Y.current = !0;
                    return
                }
                let e = S(C) ? C.get() : (C ?? 0) * .01;
                ee((e ?? 0) || (K ?? 0) / 100)
            }, [K, r, n, C]), h(() => {
                if (S(C)) return C.on(`change`, e => ee(e))
            }, [C]), Re(() => {
                L.current !== null && F.current && (!R && s || !L.current) && q()
            }), ze(() => {
                F.current && (R.current = F.current.ended, L.current = F.current.paused, J())
            });
            let ne = f(() => {
                let e = ``;
                if (t === `URL`) return n + e;
                if (t === `Upload`) return r + e
            }, [t, r, n, K]);
            h(() => {
                I && F.current && U === `on-mount` && setTimeout(() => q(), 50)
            }, []), h(() => {
                F.current && !c && (F.current.volume = (v ?? 0) / 100)
            }, [v]);
            let re = () => {
                let e = F.current;
                e && (e.currentTime < .3 && K > 0 && ee((K ?? 0) * .01), (te.current || U === `on-mount` || x && U === `on-viewport` && W) && q())
            };
            return l(`video`, {
                onClick: k,
                onMouseEnter: A,
                onMouseLeave: j,
                onMouseDown: N,
                onMouseUp: P,
                src: ne,
                loop: s,
                ref: F,
                onSeeked: e => T ?.(e),
                onPause: e => E ?.(e),
                onPlay: e => D ?.(e),
                onEnded: e => O ?.(e),
                autoPlay: te.current || U === `on-mount` || x && U === `on-viewport` && W,
                preload: te.current ? `auto` : V && !b ? `metadata` : U !== `on-mount` && !G ? `none` : `metadata`,
                poster: i && !r && n === bn ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg` : i && b ? b : void 0,
                onLoadedData: re,
                controls: a,
                muted: V ? !0 : c,
                playsInline: d,
                style: {
                    cursor: k ? `pointer` : `auto`,
                    width: `100%`,
                    height: `100%`,
                    borderRadius: H,
                    display: `block`,
                    objectFit: m,
                    backgroundColor: g,
                    objectPosition: `50% 50%`
                }
            })
        }), pn.displayName = `Video`, Sn = [`cover`, `fill`, `contain`, `scale-down`, `none`], I(pn, {
            srcType: {
                type: D.Enum,
                displaySegmentedControl: !0,
                title: `Source`,
                options: [`URL`, `Upload`]
            },
            srcUrl: {
                type: D.String,
                title: `URL`,
                defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                hidden(e) {
                    return e.srcType === `Upload`
                }
            },
            srcFile: {
                type: D.File,
                title: `File`,
                allowedFileTypes: [`mp4`, `webm`],
                hidden(e) {
                    return e.srcType === `URL`
                }
            },
            playing: {
                type: D.Boolean,
                title: `Playing`,
                enabledTitle: `Yes`,
                disabledTitle: `No`
            },
            ...it,
            posterEnabled: {
                type: D.Boolean,
                title: `Poster`,
                enabledTitle: `Yes`,
                disabledTitle: `No`
            },
            poster: {
                type: D.Image,
                title: `Image`,
                hidden: ({
                    posterEnabled: e
                }) => !e,
                description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`
            },
            backgroundColor: {
                type: D.Color,
                title: `Background`,
                defaultValue: `rgba(0,0,0,0)`
            },
            startTime: {
                title: `Start Time`,
                type: D.Number,
                min: 0,
                max: 100,
                step: .1,
                unit: `%`
            },
            loop: {
                type: D.Boolean,
                title: `Loop`,
                enabledTitle: `Yes`,
                disabledTitle: `No`
            },
            objectFit: {
                type: D.Enum,
                title: `Fit`,
                options: Sn,
                optionTitles: Sn.map(_n)
            },
            controls: {
                type: D.Boolean,
                title: `Controls`,
                enabledTitle: `Show`,
                disabledTitle: `Hide`,
                defaultValue: !1
            },
            muted: {
                type: D.Boolean,
                title: `Muted`,
                enabledTitle: `Yes`,
                disabledTitle: `No`
            },
            volume: {
                type: D.Number,
                max: 100,
                min: 0,
                unit: `%`,
                hidden: ({
                    muted: e
                }) => e,
                defaultValue: 25
            },
            onEnd: {
                type: D.EventHandler
            },
            onSeeked: {
                type: D.EventHandler
            },
            onPause: {
                type: D.EventHandler
            },
            onPlay: {
                type: D.EventHandler
            },
            ...Pe
        })
});

function wn(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn = e(() => {
    a(), U(), x(), o(), Cn(), yt(), Tn = z($), En = H(pn), Dn = [`hEMf1m92A`, `Fxtupva4n`], On = `framer-S46MQ`, kn = {
        Fxtupva4n: `framer-v-dl52bx`,
        hEMf1m92A: `framer-v-jjfbs6`
    }, An = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: `spring`
    }, jn = ({
        value: e,
        children: t
    }) => {
        let n = d(b),
            r = e ?? n.transition,
            i = f(() => ({
                ...n,
                transition: r
            }), [JSON.stringify(r)]);
        return l(b.Provider, {
            value: i,
            children: t
        })
    }, Mn = C.create(_), Nn = {
        "Variant 1": `hEMf1m92A`,
        "Variant 2": `Fxtupva4n`
    }, Pn = ({
        client: e,
        cursor: t,
        file: n,
        height: r,
        id: i,
        tap: a,
        title: o,
        width: s,
        ...c
    }) => ({
        ...c,
        adALtMGad: t ?? c.adALtMGad,
        j3YDxvFwK: a ?? c.j3YDxvFwK,
        PH62DGcwC: n ?? c.PH62DGcwC ?? `https://framerusercontent.com/assets/kdKvBb6UyIpSR2GIP2Bq6hhmuA.mp4`,
        TshoKf3A0: e ?? c.TshoKf3A0 ?? `Client`,
        variant: Nn[c.variant] ?? c.variant ?? `hEMf1m92A`,
        Zk6V4eTO2: o ?? c.Zk6V4eTO2 ?? `Title of the video`
    }), Fn = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), In = n(function (e, t) {
        let n = u(null),
            r = t ?? n,
            a = i(),
            {
                activeLocale: o,
                setLocale: s
            } = Y(),
            c = G(),
            {
                style: d,
                className: f,
                layoutId: p,
                variant: h,
                PH62DGcwC: g,
                j3YDxvFwK: v,
                Zk6V4eTO2: b,
                TshoKf3A0: x,
                adALtMGad: S,
                ...w
            } = Pn(e),
            {
                baseVariant: E,
                classNames: D,
                clearLoadingGesture: O,
                gestureHandlers: k,
                gestureVariant: A,
                isLoading: j,
                setGestureState: M,
                setVariant: F,
                variants: I
            } = X({
                cycleOrder: Dn,
                defaultVariant: `hEMf1m92A`,
                ref: r,
                variant: h,
                variantClassNames: kn
            }),
            R = Fn(e, I),
            {
                activeVariantCallback: z,
                delay: B
            } = W(E),
            V = z(async (...e) => {
                if (M({
                        isPressed: !1
                    }), v) {
                    let t = await v(...e);
                    if (t === !1) return !1
                }
            }),
            H = z(async (...e) => {
                M({
                    isHovered: !0
                }), F(`Fxtupva4n`)
            }),
            U = z(async (...e) => {
                M({
                    isHovered: !1
                }), F(`hEMf1m92A`)
            }),
            K = [],
            q = L(On, ...K);
        return l(y, {
            id: p ?? a,
            children: l(Mn, {
                animate: I,
                initial: !1,
                children: l(jn, {
                    value: An,
                    children: m(C.div, {
                        ...w,
                        ...k,
                        className: L(q, `framer-jjfbs6`, f, D),
                        "data-framer-cursor": S,
                        "data-framer-name": `Variant 1`,
                        "data-highlight": !0,
                        layoutDependency: R,
                        layoutId: `hEMf1m92A`,
                        onMouseEnter: H,
                        onTap: V,
                        ref: r,
                        style: {
                            borderBottomLeftRadius: 51,
                            borderBottomRightRadius: 51,
                            borderTopLeftRadius: 51,
                            borderTopRightRadius: 51,
                            ...d
                        },
                        ...wn({
                            Fxtupva4n: {
                                "data-framer-name": `Variant 2`,
                                onMouseLeave: U
                            }
                        }, E, A),
                        children: [l(C.div, {
                            className: `framer-1ckukh8`,
                            layoutDependency: R,
                            layoutId: `IUjpu_TWF`
                        }), l(T, {
                            children: l(P, {
                                className: `framer-55o8i6-container`,
                                isModuleExternal: !0,
                                layoutDependency: R,
                                layoutId: `iXEcWkG2A-container`,
                                nodeId: `iXEcWkG2A`,
                                rendersWithMotion: !0,
                                scopeId: `GBnAIU7FC`,
                                children: l($, {
                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                    borderRadius: 0,
                                    bottomLeftRadius: 0,
                                    bottomRightRadius: 0,
                                    controls: !1,
                                    height: `100%`,
                                    id: `iXEcWkG2A`,
                                    isMixedBorderRadius: !1,
                                    layoutId: `iXEcWkG2A`,
                                    loop: !0,
                                    muted: !0,
                                    objectFit: `cover`,
                                    playing: !1,
                                    posterEnabled: !1,
                                    srcFile: g,
                                    srcType: `Upload`,
                                    srcUrl: `https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4`,
                                    startTime: 0,
                                    style: {
                                        height: `100%`,
                                        width: `100%`
                                    },
                                    topLeftRadius: 0,
                                    topRightRadius: 0,
                                    volume: 25,
                                    width: `100%`,
                                    ...wn({
                                        Fxtupva4n: {
                                            playing: !0
                                        }
                                    }, E, A)
                                })
                            })
                        }), m(C.div, {
                            className: `framer-ns7l2h`,
                            layoutDependency: R,
                            layoutId: `Dvm9XrzHJ`,
                            children: [l(N, {
                                __fromCanvasComponent: !0,
                                children: l(_, {
                                    children: l(C.p, {
                                        style: {
                                            "--font-selector": `R0Y7U3luZS02MDA=`,
                                            "--framer-font-family": `"Syne", "Syne Placeholder", sans-serif`,
                                            "--framer-font-size": `24px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                        },
                                        children: `Title of the video`
                                    })
                                }),
                                className: `framer-g3a3x6`,
                                fonts: [`GF;Syne-600`],
                                layoutDependency: R,
                                layoutId: `JG6Ea1JHP`,
                                style: {
                                    "--extracted-r6o4lv": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`
                                },
                                text: b,
                                verticalAlignment: `top`,
                                withExternalLayout: !0
                            }), l(N, {
                                __fromCanvasComponent: !0,
                                children: l(_, {
                                    children: l(C.p, {
                                        style: {
                                            "--font-selector": `R0Y7U3luZS1yZWd1bGFy`,
                                            "--framer-font-family": `"Syne", "Syne Placeholder", sans-serif`,
                                            "--framer-font-size": `13px`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                        },
                                        children: `Client`
                                    })
                                }),
                                className: `framer-1pppyua`,
                                fonts: [`GF;Syne-regular`],
                                layoutDependency: R,
                                layoutId: `OZe47UvGv`,
                                style: {
                                    "--extracted-r6o4lv": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`
                                },
                                text: x,
                                verticalAlignment: `top`,
                                withExternalLayout: !0
                            })]
                        })]
                    })
                })
            })
        })
    }), Ln = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-S46MQ.framer-qv4igv, .framer-S46MQ .framer-qv4igv { display: block; }`, `.framer-S46MQ.framer-jjfbs6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 580px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 580px; will-change: var(--framer-will-change-override, transform); }`, `.framer-S46MQ .framer-1ckukh8 { cursor: none; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`, `.framer-S46MQ .framer-55o8i6-container { flex: none; height: 100%; position: relative; width: 100%; }`, `.framer-S46MQ .framer-ns7l2h { align-content: flex-start; align-items: flex-start; bottom: 39px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 34px; overflow: visible; padding: 0px; position: absolute; width: min-content; z-index: 1; }`, `.framer-S46MQ .framer-g3a3x6, .framer-S46MQ .framer-1pppyua { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`, `.framer-S46MQ.framer-v-dl52bx.framer-jjfbs6 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 580px); }`], Rn = Z(In, Ln, `framer-S46MQ`), zn = Rn, Rn.displayName = `Featured Video Card`, Rn.defaultProps = {
        height: 580,
        width: 580
    }, I(Rn, {
        variant: {
            options: [`hEMf1m92A`, `Fxtupva4n`],
            optionTitles: [`Variant 1`, `Variant 2`],
            title: `Variant`,
            type: D.Enum
        },
        PH62DGcwC: En ?.srcFile && {
            ...En.srcFile,
            __defaultAssetReference: `data:framer/asset-reference,kdKvBb6UyIpSR2GIP2Bq6hhmuA.mp4?originalFilename=production_id_4488737+%28360p%29.mp4`,
            description: void 0,
            hidden: void 0,
            title: `File`
        },
        j3YDxvFwK: {
            title: `Tap`,
            type: D.EventHandler
        },
        Zk6V4eTO2: {
            defaultValue: `Title of the video`,
            displayTextArea: !1,
            title: `Title`,
            type: D.String
        },
        TshoKf3A0: {
            defaultValue: `Client`,
            displayTextArea: !1,
            title: `Client`,
            type: D.String
        },
        adALtMGad: {
            title: `Cursor`,
            type: D.CustomCursor
        }
    }), F(Rn, [{
        explicitInter: !0,
        fonts: [{
            family: `Syne`,
            source: `google`,
            style: `normal`,
            url: `https://fonts.gstatic.com/s/syne/v23/8vIS7w4qzmVxsWxjBZRjr0FKM_3mvj6hR47NCV5Z.woff2`,
            weight: `600`
        }, {
            family: `Syne`,
            source: `google`,
            style: `normal`,
            url: `https://fonts.gstatic.com/s/syne/v23/8vIS7w4qzmVxsWxjBZRjr0FKM_04uT6hR47NCV5Z.woff2`,
            weight: `400`
        }]
    }, ...Tn], {
        supportsExplicitInterCodegen: !0
    })
});

function Vn(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr = e(() => {
        a(), U(), x(), o(), Hn = [`aU09eRfyz`, `E4szxQIL6`, `zEK71UNsK`, `fsm2FKhDG`], Un = `framer-3Gslw`, Wn = {
            aU09eRfyz: `framer-v-188lru2`,
            E4szxQIL6: `framer-v-1vsvyzy`,
            fsm2FKhDG: `framer-v-v1ivzz`,
            zEK71UNsK: `framer-v-1oz783t`
        }, Gn = {
            damping: 60,
            delay: 0,
            mass: 1,
            stiffness: 270,
            type: `spring`
        }, Kn = e => typeof e == `object` && e && typeof e.src == `string` ? e : typeof e == `string` ? {
            src: e
        } : void 0, qn = ({
            value: e,
            children: t
        }) => {
            let n = d(b),
                r = e ?? n.transition,
                i = f(() => ({
                    ...n,
                    transition: r
                }), [JSON.stringify(r)]);
            return l(b.Provider, {
                value: i,
                children: t
            })
        }, Jn = C.create(_), Yn = {
            "Desktop Default": `E4szxQIL6`,
            "Desktop Hover": `aU09eRfyz`,
            "Phone Default": `zEK71UNsK`,
            "Phone Tapped": `fsm2FKhDG`
        }, Xn = ({
            description: e,
            height: t,
            id: n,
            image: r,
            title: i,
            width: a,
            ...o
        }) => ({
            ...o,
            GEReXC71q: e ?? o.GEReXC71q ?? `feature films, documentaries, and other long-form video content`,
            HSYB8KLpc: i ?? o.HSYB8KLpc ?? `Film and Video Editing`,
            variant: Yn[o.variant] ?? o.variant ?? `aU09eRfyz`,
            y1DNXPRRS: r ?? o.y1DNXPRRS ?? {
                pixelHeight: 3648,
                pixelWidth: 5398,
                src: `https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=1024`,
                srcSet: `https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=4096 4096w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg 5398w`
            }
        }), Zn = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Qn = n(function (e, t) {
            let n = u(null),
                r = t ?? n,
                a = i(),
                {
                    activeLocale: o,
                    setLocale: s
                } = Y(),
                c = G(),
                {
                    style: d,
                    className: f,
                    layoutId: p,
                    variant: h,
                    HSYB8KLpc: g,
                    GEReXC71q: v,
                    y1DNXPRRS: b,
                    ...x
                } = Xn(e),
                {
                    baseVariant: S,
                    classNames: w,
                    clearLoadingGesture: T,
                    gestureHandlers: E,
                    gestureVariant: D,
                    isLoading: O,
                    setGestureState: A,
                    setVariant: j,
                    variants: M
                } = X({
                    cycleOrder: Hn,
                    defaultVariant: `aU09eRfyz`,
                    ref: r,
                    variant: h,
                    variantClassNames: Wn
                }),
                P = Zn(e, M),
                {
                    activeVariantCallback: F,
                    delay: I
                } = W(S),
                R = F(async (...e) => {
                    A({
                        isHovered: !0
                    }), j(`E4szxQIL6`)
                }),
                z = F(async (...e) => {
                    A({
                        isHovered: !1
                    }), j(`E4szxQIL6`)
                }),
                B = F(async (...e) => {
                    A({
                        isHovered: !0
                    }), j(`aU09eRfyz`)
                }),
                H = F(async (...e) => {
                    A({
                        isPressed: !1
                    }), j(`fsm2FKhDG`)
                }),
                U = F(async (...e) => {
                    A({
                        isPressed: !1
                    }), j(`zEK71UNsK`)
                }),
                K = [],
                q = L(Un, ...K),
                J = () => ![`zEK71UNsK`, `fsm2FKhDG`].includes(S),
                ee = () => ![`E4szxQIL6`, `zEK71UNsK`].includes(S);
            return l(y, {
                id: p ?? a,
                children: l(Jn, {
                    animate: M,
                    initial: !1,
                    children: l(qn, {
                        value: Gn,
                        children: m(C.div, {
                            ...x,
                            ...E,
                            className: L(q, `framer-188lru2`, f, w),
                            "data-border": !0,
                            "data-framer-name": `Desktop Hover`,
                            "data-highlight": !0,
                            layoutDependency: P,
                            layoutId: `aU09eRfyz`,
                            onMouseEnter: R,
                            onMouseLeave: z,
                            ref: r,
                            style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgba(255, 255, 255, 0.3))`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                backdropFilter: `blur(10px)`,
                                background: `radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.1) 2.210024196147939%, rgba(255, 255, 255, 0) 100%)`,
                                borderBottomLeftRadius: 30,
                                borderBottomRightRadius: 30,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30,
                                WebkitBackdropFilter: `blur(10px)`,
                                ...d
                            },
                            variants: {
                                E4szxQIL6: {
                                    "--border-bottom-width": `0px`,
                                    "--border-left-width": `0px`,
                                    "--border-right-width": `0px`,
                                    "--border-top-width": `0px`
                                },
                                fsm2FKhDG: {
                                    "--border-color": `rgba(255, 255, 255, 0)`,
                                    borderBottomLeftRadius: 15,
                                    borderBottomRightRadius: 15,
                                    borderTopLeftRadius: 15,
                                    borderTopRightRadius: 15
                                },
                                zEK71UNsK: {
                                    "--border-color": `rgba(255, 255, 255, 0)`,
                                    borderBottomLeftRadius: 16,
                                    borderBottomRightRadius: 16,
                                    borderTopLeftRadius: 16,
                                    borderTopRightRadius: 16
                                }
                            },
                            ...Vn({
                                E4szxQIL6: {
                                    "data-framer-name": `Desktop Default`,
                                    onMouseEnter: B,
                                    onMouseLeave: void 0
                                },
                                fsm2FKhDG: {
                                    "data-framer-name": `Phone Tapped`,
                                    onMouseEnter: void 0,
                                    onMouseLeave: void 0,
                                    onTap: U
                                },
                                zEK71UNsK: {
                                    "data-framer-name": `Phone Default`,
                                    onMouseEnter: void 0,
                                    onMouseLeave: void 0,
                                    onTap: H
                                }
                            }, S, D),
                            children: [J() && l(C.div, {
                                className: `framer-sd1bec`,
                                "data-framer-name": `Glass Effect`,
                                layoutDependency: P,
                                layoutId: `HP4xOs8LE`,
                                style: {
                                    backdropFilter: `blur(5px)`,
                                    rotate: 9,
                                    WebkitBackdropFilter: `blur(5px)`
                                },
                                children: l(C.div, {
                                    className: `framer-byckkc`,
                                    layoutDependency: P,
                                    layoutId: `tKIJetIyd`,
                                    style: {
                                        backdropFilter: `blur(0px)`,
                                        background: `linear-gradient(114deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)`,
                                        backgroundColor: `rgb(255, 255, 255)`,
                                        opacity: .12,
                                        WebkitBackdropFilter: `blur(0px)`
                                    },
                                    variants: {
                                        E4szxQIL6: {
                                            background: `linear-gradient(114deg, rgb(255, 255, 255) 47.74774774774775%, rgba(255, 255, 255, 0.08) 50.819488890785856%)`,
                                            backgroundColor: `rgba(0, 0, 0, 0)`,
                                            opacity: .17
                                        }
                                    }
                                })
                            }), l(C.div, {
                                className: `framer-1bs60pk`,
                                "data-framer-name": `Title Wrapper`,
                                layoutDependency: P,
                                layoutId: `bODIwvylk`,
                                children: l(N, {
                                    __fromCanvasComponent: !0,
                                    children: l(_, {
                                        children: l(C.h3, {
                                            style: {
                                                "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                                "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                                "--framer-font-size": `26px`,
                                                "--framer-letter-spacing": `-0.05em`,
                                                "--framer-line-height": `1.5em`,
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--extracted-a0htzi, rgb(255, 255, 255))`
                                            },
                                            children: `Film and Video Editing`
                                        })
                                    }),
                                    className: `framer-mrdlx6`,
                                    fonts: [`CUSTOM;SF Compact Rounded Semibold`],
                                    layoutDependency: P,
                                    layoutId: `vXhbT9v7H`,
                                    style: {
                                        "--extracted-a0htzi": `rgb(255, 255, 255)`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                        textShadow: `none`
                                    },
                                    text: g,
                                    variants: {
                                        fsm2FKhDG: {
                                            "--extracted-a0htzi": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                            textShadow: `none`
                                        },
                                        zEK71UNsK: {
                                            "--extracted-a0htzi": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                            textShadow: `0px 1px 10px rgba(0, 0, 0, 0.4)`
                                        }
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                    ...Vn({
                                        fsm2FKhDG: {
                                            children: l(_, {
                                                children: l(C.h3, {
                                                    style: {
                                                        "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                                        "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                                        "--framer-font-size": `26px`,
                                                        "--framer-letter-spacing": `-0.05em`,
                                                        "--framer-line-height": `1.5em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                                    },
                                                    children: `Film and Video Editing`
                                                })
                                            })
                                        },
                                        zEK71UNsK: {
                                            children: l(_, {
                                                children: l(C.h3, {
                                                    style: {
                                                        "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                                        "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                                        "--framer-font-size": `26px`,
                                                        "--framer-letter-spacing": `-0.05em`,
                                                        "--framer-line-height": `1.5em`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                                    },
                                                    children: l(C.span, {
                                                        "data-text-fill": `true`,
                                                        style: {
                                                            backgroundImage: `linear-gradient(93deg, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)) 42.494226327944574%, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)) 100%)`
                                                        },
                                                        children: `Film and Video Editing`
                                                    })
                                                })
                                            })
                                        }
                                    }, S, D)
                                })
                            }), l(N, {
                                __fromCanvasComponent: !0,
                                children: l(_, {
                                    children: l(C.p, {
                                        style: {
                                            "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                            "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                            "--framer-font-size": `20px`,
                                            "--framer-line-height": `1.5em`,
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d9d01f21-7a47-443c-a8bc-56cdb453de6f, rgba(255, 255, 255, 0.8)))`
                                        },
                                        children: `feature films, documentaries, and other long-form video content`
                                    })
                                }),
                                className: `framer-1yxn9zt`,
                                "data-framer-name": `Content`,
                                fonts: [`CUSTOM;SF Compact Rounded Semibold`],
                                layoutDependency: P,
                                layoutId: `LuOuTwJpL`,
                                style: {
                                    "--extracted-r6o4lv": `var(--token-d9d01f21-7a47-443c-a8bc-56cdb453de6f, rgba(255, 255, 255, 0.8))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                    opacity: 1,
                                    textShadow: `none`
                                },
                                text: v,
                                variants: {
                                    E4szxQIL6: {
                                        opacity: 0
                                    },
                                    fsm2FKhDG: {
                                        opacity: 1,
                                        textShadow: `none`
                                    },
                                    zEK71UNsK: {
                                        "--extracted-r6o4lv": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                        opacity: 1,
                                        textShadow: `0px 2px 23px rgba(0, 0, 0, 0.55)`
                                    }
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Vn({
                                    zEK71UNsK: {
                                        children: l(_, {
                                            children: l(C.p, {
                                                style: {
                                                    "--font-selector": `R0Y7SW50ZXItcmVndWxhcg==`,
                                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                    "--framer-font-size": `14px`,
                                                    "--framer-letter-spacing": `-0.04em`,
                                                    "--framer-line-height": `1.5em`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                                },
                                                children: `Learn More →`
                                            })
                                        }),
                                        fonts: [`GF;Inter-regular`],
                                        text: void 0
                                    }
                                }, S, D)
                            }), m(C.div, {
                                className: `framer-1bs28op`,
                                "data-framer-name": `Image Wrapper`,
                                layoutDependency: P,
                                layoutId: `PBqWw_5PZ`,
                                style: {
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 0
                                },
                                variants: {
                                    fsm2FKhDG: {
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    },
                                    zEK71UNsK: {
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20
                                    }
                                },
                                children: [l(k, {
                                    background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3648,
                                        intrinsicWidth: 5398,
                                        loading: V((c ?.y || 0) + ((c ?.height || 376) * .5000000000000002 - (c ?.height || 376) * 1 / 2) + ((c ?.height || 376) * 1 * .4988610478359911 - ((c ?.height || 376) * 1 - 0) * .9977 / 2)),
                                        pixelHeight: 3648,
                                        pixelWidth: 5398,
                                        sizes: `calc(${c?.width||`100vw`} * 0.9983)`,
                                        ...Kn(b)
                                    },
                                    className: `framer-87nsh4`,
                                    "data-framer-name": `Image`,
                                    layoutDependency: P,
                                    layoutId: `cvJT8MVN5`,
                                    style: {
                                        filter: `none`,
                                        WebkitFilter: `none`
                                    },
                                    variants: {
                                        fsm2FKhDG: {
                                            filter: `brightness(1)`,
                                            WebkitFilter: `brightness(1)`
                                        },
                                        zEK71UNsK: {
                                            filter: `brightness(1)`,
                                            WebkitFilter: `brightness(1)`
                                        }
                                    },
                                    ...Vn({
                                        E4szxQIL6: {
                                            background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 3648,
                                                intrinsicWidth: 5398,
                                                loading: V((c ?.y || 0) + ((c ?.height || 376) * .5000000000000002 - (c ?.height || 376) * 1.0027 / 2) + ((c ?.height || 376) * 1.0027 * .4986737400530506 - ((c ?.height || 376) * 1.0027 - 0) * .9973 / 2)),
                                                pixelHeight: 3648,
                                                pixelWidth: 5398,
                                                sizes: `calc(${c?.width||`100vw`} * 1)`,
                                                ...Kn(b)
                                            }
                                        },
                                        fsm2FKhDG: {
                                            background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 3648,
                                                intrinsicWidth: 5398,
                                                loading: V((c ?.y || 0) + ((c ?.height || 200) * .5000000000000002 - (c ?.height || 200) * 1 / 2) + ((c ?.height || 200) * 1 * .49390243902439046 - ((c ?.height || 200) * 1 - 0) * 1.5 / 2)),
                                                pixelHeight: 3648,
                                                pixelWidth: 5398,
                                                sizes: `calc(${c?.width||`100vw`} * 1.5)`,
                                                src: `https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg`,
                                                srcSet: `https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=4096 4096w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg 5398w`
                                            }
                                        },
                                        zEK71UNsK: {
                                            background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 3648,
                                                intrinsicWidth: 5398,
                                                loading: V((c ?.y || 0) + ((c ?.height || 200) * .5000000000000002 - (c ?.height || 200) * 1 / 2) + ((c ?.height || 200) * 1 * .5000000000000002 - ((c ?.height || 200) * 1 - 0) * 1 / 2)),
                                                pixelHeight: 3648,
                                                pixelWidth: 5398,
                                                sizes: c ?.width || `100vw`,
                                                ...Kn(b)
                                            }
                                        }
                                    }, S, D)
                                }), ee() && l(C.div, {
                                    className: `framer-1v16efu`,
                                    "data-framer-name": `Overlay`,
                                    layoutDependency: P,
                                    layoutId: `OpHmm9t7f`,
                                    style: {
                                        backgroundColor: `rgba(0, 0, 0, 0.5)`,
                                        opacity: .79
                                    }
                                })]
                            })]
                        })
                    })
                })
            })
        }), $n = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-3Gslw.framer-19ojxcd, .framer-3Gslw .framer-19ojxcd { display: block; }`, `.framer-3Gslw.framer-188lru2 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; height: 376px; justify-content: space-between; overflow: hidden; padding: 40px; position: relative; width: 513px; will-change: var(--framer-will-change-override, transform); }`, `.framer-3Gslw .framer-sd1bec { align-content: center; align-items: center; bottom: -59px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: -276px; top: -199px; width: 169px; }`, `.framer-3Gslw .framer-byckkc { flex: none; height: 100%; left: calc(50.11389521640094% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`, `.framer-3Gslw .framer-1bs60pk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-3Gslw .framer-mrdlx6 { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`, `.framer-3Gslw .framer-1yxn9zt { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: relative; user-select: none; white-space: pre-wrap; width: 80%; word-break: break-word; word-wrap: break-word; }`, `.framer-3Gslw .framer-1bs28op { flex: none; height: 100%; left: calc(50.097465886939595% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: -1; }`, `.framer-3Gslw .framer-87nsh4 { flex: none; height: 100%; left: calc(50.00000000000002% - 99.83277591973244% / 2); overflow: visible; position: absolute; top: calc(49.88610478359911% - 99.77220956719817% / 2); width: 100%; z-index: -1; }`, `.framer-3Gslw .framer-1v16efu { flex: none; height: 100%; left: calc(50.097465886939595% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`, `.framer-3Gslw.framer-v-1vsvyzy.framer-188lru2 { padding: 12px 40px 40px 20px; }`, `.framer-3Gslw.framer-v-1vsvyzy .framer-sd1bec { bottom: -57px; left: -218px; right: unset; top: -201px; }`, `.framer-3Gslw.framer-v-1vsvyzy .framer-1bs28op { height: 100%; left: calc(50.097465886939595% - 100.19493177387915% / 2); top: calc(50.00000000000002% - 100.2659574468085% / 2); width: 100%; }`, `.framer-3Gslw.framer-v-1vsvyzy .framer-87nsh4 { height: 100%; left: calc(50.00000000000002% - 99.80544747081711% / 2); top: calc(49.86737400530506% - 99.73474801061008% / 2); width: 100%; }`, `.framer-3Gslw.framer-v-1oz783t.framer-188lru2, .framer-3Gslw.framer-v-v1ivzz.framer-188lru2 { cursor: pointer; gap: 70px; height: 200px; justify-content: flex-start; padding: 20px; }`, `.framer-3Gslw.framer-v-1oz783t .framer-1bs28op { left: calc(49.90253411306045% - 100% / 2); overflow: hidden; will-change: var(--framer-will-change-override, transform); }`, `.framer-3Gslw.framer-v-1oz783t .framer-87nsh4 { height: 100%; left: calc(49.90253411306045% - 100% / 2); top: calc(50.00000000000002% - 100% / 2); width: 100%; }`, `.framer-3Gslw.framer-v-v1ivzz .framer-1bs60pk { order: 1; }`, `.framer-3Gslw.framer-v-v1ivzz .framer-1yxn9zt { order: 2; }`, `.framer-3Gslw.framer-v-v1ivzz .framer-1bs28op { left: calc(49.90253411306045% - 100% / 2); order: 3; overflow: hidden; will-change: var(--framer-will-change-override, transform); }`, `.framer-3Gslw.framer-v-v1ivzz .framer-87nsh4 { height: 150%; left: calc(49.90253411306045% - 150% / 2); top: calc(49.390243902439046% - 150% / 2); width: 150%; }`, `.framer-3Gslw[data-border="true"]::after, .framer-3Gslw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`], er = Z(Qn, $n, `framer-3Gslw`), tr = er, er.displayName = `Homepage - Category 4`, er.defaultProps = {
            height: 376,
            width: 513
        }, I(er, {
            variant: {
                options: [`aU09eRfyz`, `E4szxQIL6`, `zEK71UNsK`, `fsm2FKhDG`],
                optionTitles: [`Desktop Hover`, `Desktop Default`, `Phone Default`, `Phone Tapped`],
                title: `Variant`,
                type: D.Enum
            },
            HSYB8KLpc: {
                defaultValue: `Film and Video Editing`,
                displayTextArea: !0,
                title: `Title`,
                type: D.String
            },
            GEReXC71q: {
                defaultValue: `feature films, documentaries, and other long-form video content`,
                displayTextArea: !0,
                title: `Description`,
                type: D.String
            },
            y1DNXPRRS: {
                __defaultAssetReference: `data:framer/asset-reference,KU8reFP90nuP1WlMgSloOnrcY.jpg?originalFilename=photo-1485846234645-a62644f84728%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHwyfHxmaWxtfGVufDB8fHx8MTY5NTQ3NjA1OXww%26ixlib%3Drb-4.0.jpg&preferredSize=auto`,
                title: `Image`,
                type: D.ResponsiveImage
            }
        }), F(er, [{
            explicitInter: !0,
            fonts: [{
                family: `SF Compact Rounded Semibold`,
                source: `custom`,
                url: `https://framerusercontent.com/assets/CRNOcOM8NAYf5f6RmDbFrUUJqY8.otf`
            }, {
                family: `Inter`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZ1rib2Bg-4.woff2`,
                weight: `400`
            }]
        }], {
            supportsExplicitInterCodegen: !0
        })
    }),
    rr, ir, ar, or = e(() => {
        U(), R.loadFonts([`CUSTOM;SF Compact Rounded Light`]), rr = [{
            explicitInter: !0,
            fonts: [{
                family: `SF Compact Rounded Light`,
                source: `custom`,
                url: `https://framerusercontent.com/assets/jh9xsh6xsa10enATUE44GMp8ZCA.otf`
            }]
        }], ir = [`.framer-45aGi .framer-styles-preset-clzfvn:not(.rich-text-wrapper), .framer-45aGi .framer-styles-preset-clzfvn.rich-text-wrapper h1 { --framer-font-family: "SF Compact Rounded Light", "SF Compact Rounded Light Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 120px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1439px) and (min-width: 810px) { .framer-45aGi .framer-styles-preset-clzfvn:not(.rich-text-wrapper), .framer-45aGi .framer-styles-preset-clzfvn.rich-text-wrapper h1 { --framer-font-family: "SF Compact Rounded Light", "SF Compact Rounded Light Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 92px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-45aGi .framer-styles-preset-clzfvn:not(.rich-text-wrapper), .framer-45aGi .framer-styles-preset-clzfvn.rich-text-wrapper h1 { --framer-font-family: "SF Compact Rounded Light", "SF Compact Rounded Light Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 56px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`], ar = `framer-45aGi`
    });

function sr(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr = e(() => {
    a(), U(), x(), o(), or(), cr = [`wFq06cHvo`, `BEXdS3IV0`, `ylJKFKVa1`, `H6JxIiyvg`, `LHnEjNMB9`, `MievHuzYE`, `XgvwdP_LS`, `WuAjhCCm5`, `sE6NeGtpJ`], lr = `framer-6mTlR`, ur = {
        BEXdS3IV0: `framer-v-p9je9q`,
        H6JxIiyvg: `framer-v-4nbbfn`,
        LHnEjNMB9: `framer-v-1nhamga`,
        MievHuzYE: `framer-v-1wvxfhj`,
        sE6NeGtpJ: `framer-v-6a36u8`,
        wFq06cHvo: `framer-v-1uhjuh2`,
        WuAjhCCm5: `framer-v-1rxfsoz`,
        XgvwdP_LS: `framer-v-1vatdra`,
        ylJKFKVa1: `framer-v-167oilm`
    }, dr = {
        damping: 30,
        delay: 0,
        mass: 1,
        stiffness: 80,
        type: `spring`
    }, fr = ({
        value: e,
        children: t
    }) => {
        let n = d(b),
            r = e ?? n.transition,
            i = f(() => ({
                ...n,
                transition: r
            }), [JSON.stringify(r)]);
        return l(b.Provider, {
            value: i,
            children: t
        })
    }, pr = C.create(_), mr = {
        "Desktop 1": `wFq06cHvo`,
        "Desktop 2": `BEXdS3IV0`,
        "Desktop 3": `ylJKFKVa1`,
        "Mobile 1": `XgvwdP_LS`,
        "Mobile 2": `WuAjhCCm5`,
        "Mobile 3": `sE6NeGtpJ`,
        "Tablet 1": `H6JxIiyvg`,
        "Tablet 2": `LHnEjNMB9`,
        "Tablet 3": `MievHuzYE`
    }, hr = ({
        height: e,
        id: t,
        title1: n,
        title2: r,
        title3: i,
        width: a,
        ...o
    }) => ({
        ...o,
        fumxmR8aU: i ?? o.fumxmR8aU ?? `Imagination`,
        Hspd62d8o: r ?? o.Hspd62d8o ?? `Your`,
        qSAYA6m1D: n ?? o.qSAYA6m1D ?? `Release`,
        variant: mr[o.variant] ?? o.variant ?? `wFq06cHvo`
    }), gr = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), _r = n(function (e, t) {
        let n = u(null),
            r = t ?? n,
            a = i(),
            {
                activeLocale: o,
                setLocale: s
            } = Y(),
            c = G(),
            {
                style: d,
                className: f,
                layoutId: p,
                variant: h,
                qSAYA6m1D: g,
                Hspd62d8o: v,
                fumxmR8aU: b,
                ...x
            } = hr(e),
            {
                baseVariant: S,
                classNames: w,
                clearLoadingGesture: T,
                gestureHandlers: E,
                gestureVariant: D,
                isLoading: O,
                setGestureState: k,
                setVariant: A,
                variants: j
            } = X({
                cycleOrder: cr,
                defaultVariant: `wFq06cHvo`,
                ref: r,
                variant: h,
                variantClassNames: ur
            }),
            M = gr(e, j),
            {
                activeVariantCallback: P,
                delay: F
            } = W(S),
            I = P(async (...e) => {
                await F(() => A(`BEXdS3IV0`, !0), 600)
            }),
            R = P(async (...e) => {
                await F(() => A(`ylJKFKVa1`, !0), 1e3)
            }),
            z = P(async (...e) => {
                await F(() => A(`LHnEjNMB9`, !0), 600)
            }),
            B = P(async (...e) => {
                await F(() => A(`MievHuzYE`, !0), 1e3)
            }),
            V = P(async (...e) => {
                await F(() => A(`WuAjhCCm5`, !0), 600)
            }),
            H = P(async (...e) => {
                await F(() => A(`sE6NeGtpJ`, !0), 1e3)
            });
        re(S, {
            BEXdS3IV0: R,
            default: I,
            H6JxIiyvg: z,
            LHnEjNMB9: B,
            MievHuzYE: void 0,
            sE6NeGtpJ: void 0,
            WuAjhCCm5: H,
            XgvwdP_LS: V,
            ylJKFKVa1: void 0
        });
        let U = [ar],
            K = L(lr, ...U);
        return l(y, {
            id: p ?? a,
            children: l(pr, {
                animate: j,
                initial: !1,
                children: l(fr, {
                    value: dr,
                    children: m(C.div, {
                        ...x,
                        ...E,
                        className: L(K, `framer-1uhjuh2`, f, w),
                        "data-framer-name": `Desktop 1`,
                        "data-highlight": !0,
                        layoutDependency: M,
                        layoutId: `wFq06cHvo`,
                        ref: r,
                        style: {
                            ...d
                        },
                        ...sr({
                            BEXdS3IV0: {
                                "data-framer-name": `Desktop 2`
                            },
                            H6JxIiyvg: {
                                "data-framer-name": `Tablet 1`
                            },
                            LHnEjNMB9: {
                                "data-framer-name": `Tablet 2`
                            },
                            MievHuzYE: {
                                "data-framer-name": `Tablet 3`,
                                "data-highlight": void 0
                            },
                            sE6NeGtpJ: {
                                "data-framer-name": `Mobile 3`,
                                "data-highlight": void 0
                            },
                            WuAjhCCm5: {
                                "data-framer-name": `Mobile 2`
                            },
                            XgvwdP_LS: {
                                "data-framer-name": `Mobile 1`
                            },
                            ylJKFKVa1: {
                                "data-framer-name": `Desktop 3`,
                                "data-highlight": void 0
                            }
                        }, S, D),
                        children: [l(N, {
                            __fromCanvasComponent: !0,
                            children: l(_, {
                                children: l(C.h1, {
                                    className: `framer-styles-preset-clzfvn`,
                                    "data-styles-preset": `aQAtgruaA`,
                                    style: {
                                        "--framer-text-alignment": `left`
                                    },
                                    children: l(C.strong, {
                                        children: `Make`
                                    })
                                })
                            }),
                            className: `framer-1x6r9ba`,
                            fonts: [`Inter`, `Inter-Bold`],
                            layoutDependency: M,
                            layoutId: `ofPwcA41p`,
                            style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`
                            },
                            text: g,
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                        }), l(N, {
                            __fromCanvasComponent: !0,
                            children: l(_, {
                                children: l(C.h1, {
                                    className: `framer-styles-preset-clzfvn`,
                                    "data-styles-preset": `aQAtgruaA`,
                                    style: {
                                        "--framer-text-alignment": `left`
                                    },
                                    children: l(C.strong, {
                                        children: `Your`
                                    })
                                })
                            }),
                            className: `framer-1qpv1in`,
                            fonts: [`Inter`, `Inter-Bold`],
                            layoutDependency: M,
                            layoutId: `bySWH23N_`,
                            style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`
                            },
                            text: v,
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                        }), l(N, {
                            __fromCanvasComponent: !0,
                            children: l(_, {
                                children: l(C.h1, {
                                    className: `framer-styles-preset-clzfvn`,
                                    "data-styles-preset": `aQAtgruaA`,
                                    style: {
                                        "--framer-text-alignment": `left`
                                    },
                                    children: l(C.strong, {
                                        children: `Grok Imagine`
                                    })
                                })
                            }),
                            className: `framer-1kz4bln`,
                            fonts: [`Inter`, `Inter-Bold`],
                            layoutDependency: M,
                            layoutId: `PsQmv5fZ_`,
                            style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`
                            },
                            text: b,
                            verticalAlignment: `top`,
                            withExternalLayout: !0
                        })]
                    })
                })
            })
        })
    }), vr = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-6mTlR.framer-90dve4, .framer-6mTlR .framer-90dve4 { display: block; }`, `.framer-6mTlR.framer-1uhjuh2 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 145px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`, `.framer-6mTlR .framer-1x6r9ba, .framer-6mTlR .framer-1qpv1in, .framer-6mTlR .framer-1kz4bln { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, `.framer-6mTlR.framer-v-p9je9q.framer-1uhjuh2 { justify-content: center; }`, `.framer-6mTlR.framer-v-167oilm.framer-1uhjuh2 { justify-content: flex-end; }`, `.framer-6mTlR.framer-v-4nbbfn.framer-1uhjuh2 { height: 110px; }`, `.framer-6mTlR.framer-v-1nhamga.framer-1uhjuh2 { height: 110px; justify-content: center; }`, `.framer-6mTlR.framer-v-1wvxfhj.framer-1uhjuh2 { height: 110px; justify-content: flex-end; }`, `.framer-6mTlR.framer-v-1vatdra.framer-1uhjuh2 { height: 68px; }`, `.framer-6mTlR.framer-v-1rxfsoz.framer-1uhjuh2 { height: 68px; justify-content: center; }`, `.framer-6mTlR.framer-v-6a36u8.framer-1uhjuh2 { height: 68px; justify-content: flex-end; }`, ...ir], yr = Z(_r, vr, `framer-6mTlR`), br = yr, yr.displayName = `Hero title`, yr.defaultProps = {
        height: 145,
        width: 612
    }, I(yr, {
        variant: {
            options: [`wFq06cHvo`, `BEXdS3IV0`, `ylJKFKVa1`, `H6JxIiyvg`, `LHnEjNMB9`, `MievHuzYE`, `XgvwdP_LS`, `WuAjhCCm5`, `sE6NeGtpJ`],
            optionTitles: [`Desktop 1`, `Desktop 2`, `Desktop 3`, `Tablet 1`, `Tablet 2`, `Tablet 3`, `Mobile 1`, `Mobile 2`, `Mobile 3`],
            title: `Variant`,
            type: D.Enum
        },
        qSAYA6m1D: {
            defaultValue: `Release`,
            displayTextArea: !1,
            title: `Title 1`,
            type: D.String
        },
        Hspd62d8o: {
            defaultValue: `Your`,
            displayTextArea: !1,
            title: `Title 2`,
            type: D.String
        },
        fumxmR8aU: {
            defaultValue: `Imagination`,
            displayTextArea: !1,
            title: `Title 3`,
            type: D.String
        }
    }), F(yr, [{
        explicitInter: !0,
        fonts: [{
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
            weight: `700`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
            weight: `700`
        }]
    }, ...B(rr)], {
        supportsExplicitInterCodegen: !0
    })
});

function Sr(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var Cr, wr, Tr, Er, Dr, Or, kr, Ar, jr, Mr, Nr, Pr, Fr, Ir, Lr, Rr = e(() => {
    a(), U(), x(), o(), Cn(), yt(), Cr = z($), wr = H(pn), Tr = [`A3GAH1FEf`, `uJokriDtm`], Er = `framer-ATlua`, Dr = {
        A3GAH1FEf: `framer-v-1rgayia`,
        uJokriDtm: `framer-v-4fbdvf`
    }, Or = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: `spring`
    }, kr = ({
        value: e,
        children: t
    }) => {
        let n = d(b),
            r = e ?? n.transition,
            i = f(() => ({
                ...n,
                transition: r
            }), [JSON.stringify(r)]);
        return l(b.Provider, {
            value: i,
            children: t
        })
    }, Ar = C.create(_), jr = {
        "Variant 1": `A3GAH1FEf`,
        "Variant 2": `uJokriDtm`
    }, Mr = ({
        client: e,
        cursor: t,
        file: n,
        height: r,
        id: i,
        tap: a,
        title: o,
        width: s,
        ...c
    }) => ({
        ...c,
        adALtMGad: t ?? c.adALtMGad,
        j3YDxvFwK: a ?? c.j3YDxvFwK,
        PH62DGcwC: n ?? c.PH62DGcwC ?? `https://framerusercontent.com/assets/kdKvBb6UyIpSR2GIP2Bq6hhmuA.mp4`,
        TshoKf3A0: e ?? c.TshoKf3A0 ?? `Client`,
        variant: jr[c.variant] ?? c.variant ?? `A3GAH1FEf`,
        Zk6V4eTO2: o ?? c.Zk6V4eTO2 ?? `Title of the video`
    }), Nr = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Pr = n(function (e, t) {
        let n = u(null),
            r = t ?? n,
            a = i(),
            {
                activeLocale: o,
                setLocale: s
            } = Y(),
            c = G(),
            {
                style: d,
                className: f,
                layoutId: p,
                variant: h,
                PH62DGcwC: g,
                j3YDxvFwK: v,
                Zk6V4eTO2: b,
                TshoKf3A0: x,
                adALtMGad: S,
                ...w
            } = Mr(e),
            {
                baseVariant: E,
                classNames: D,
                clearLoadingGesture: O,
                gestureHandlers: k,
                gestureVariant: A,
                isLoading: j,
                setGestureState: M,
                setVariant: F,
                variants: I
            } = X({
                cycleOrder: Tr,
                defaultVariant: `A3GAH1FEf`,
                ref: r,
                variant: h,
                variantClassNames: Dr
            }),
            R = Nr(e, I),
            {
                activeVariantCallback: z,
                delay: B
            } = W(E),
            V = z(async (...e) => {
                if (M({
                        isPressed: !1
                    }), v) {
                    let t = await v(...e);
                    if (t === !1) return !1
                }
            }),
            H = z(async (...e) => {
                M({
                    isHovered: !0
                }), F(`uJokriDtm`)
            }),
            U = z(async (...e) => {
                M({
                    isHovered: !1
                }), F(`A3GAH1FEf`)
            }),
            K = [],
            q = L(Er, ...K);
        return l(y, {
            id: p ?? a,
            children: l(Ar, {
                animate: I,
                initial: !1,
                children: l(kr, {
                    value: Or,
                    children: m(C.div, {
                        ...w,
                        ...k,
                        className: L(q, `framer-1rgayia`, f, D),
                        "data-framer-cursor": S,
                        "data-framer-name": `Variant 1`,
                        "data-highlight": !0,
                        layoutDependency: R,
                        layoutId: `A3GAH1FEf`,
                        onMouseEnter: H,
                        onTap: V,
                        ref: r,
                        style: {
                            borderBottomLeftRadius: 51,
                            borderBottomRightRadius: 51,
                            borderTopLeftRadius: 51,
                            borderTopRightRadius: 51,
                            ...d
                        },
                        ...Sr({
                            uJokriDtm: {
                                "data-framer-name": `Variant 2`,
                                onMouseLeave: U
                            }
                        }, E, A),
                        children: [l(C.div, {
                            className: `framer-18f9se1`,
                            layoutDependency: R,
                            layoutId: `iL45mva3L`
                        }), l(T, {
                            children: l(P, {
                                className: `framer-4huyvr-container`,
                                isModuleExternal: !0,
                                layoutDependency: R,
                                layoutId: `ZgBgSa7hy-container`,
                                nodeId: `ZgBgSa7hy`,
                                rendersWithMotion: !0,
                                scopeId: `JpmcyTWId`,
                                children: l($, {
                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                    borderRadius: 0,
                                    bottomLeftRadius: 0,
                                    bottomRightRadius: 0,
                                    controls: !1,
                                    height: `100%`,
                                    id: `ZgBgSa7hy`,
                                    isMixedBorderRadius: !1,
                                    layoutId: `ZgBgSa7hy`,
                                    loop: !0,
                                    muted: !0,
                                    objectFit: `cover`,
                                    playing: !1,
                                    posterEnabled: !1,
                                    srcFile: g,
                                    srcType: `Upload`,
                                    srcUrl: `https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4`,
                                    startTime: 0,
                                    style: {
                                        height: `100%`,
                                        width: `100%`
                                    },
                                    topLeftRadius: 0,
                                    topRightRadius: 0,
                                    volume: 25,
                                    width: `100%`,
                                    ...Sr({
                                        uJokriDtm: {
                                            playing: !0
                                        }
                                    }, E, A)
                                })
                            })
                        }), m(C.div, {
                            className: `framer-1q67eiv`,
                            layoutDependency: R,
                            layoutId: `gGtSzAH1c`,
                            children: [l(N, {
                                __fromCanvasComponent: !0,
                                children: l(_, {
                                    children: l(C.p, {
                                        style: {
                                            "--font-selector": `R0Y7U3luZS02MDA=`,
                                            "--framer-font-family": `"Syne", "Syne Placeholder", sans-serif`,
                                            "--framer-font-size": `24px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                        },
                                        children: `Title of the video`
                                    })
                                }),
                                className: `framer-1x5c36f`,
                                fonts: [`GF;Syne-600`],
                                layoutDependency: R,
                                layoutId: `qaH0uswYW`,
                                style: {
                                    "--extracted-r6o4lv": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`
                                },
                                text: b,
                                verticalAlignment: `top`,
                                withExternalLayout: !0
                            }), l(N, {
                                __fromCanvasComponent: !0,
                                children: l(_, {
                                    children: l(C.p, {
                                        style: {
                                            "--font-selector": `R0Y7U3luZS1yZWd1bGFy`,
                                            "--framer-font-family": `"Syne", "Syne Placeholder", sans-serif`,
                                            "--framer-font-size": `13px`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                        },
                                        children: `Client`
                                    })
                                }),
                                className: `framer-131lfzl`,
                                fonts: [`GF;Syne-regular`],
                                layoutDependency: R,
                                layoutId: `FNNdbpsnZ`,
                                style: {
                                    "--extracted-r6o4lv": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`
                                },
                                text: x,
                                verticalAlignment: `top`,
                                withExternalLayout: !0
                            })]
                        })]
                    })
                })
            })
        })
    }), Fr = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-ATlua.framer-cgu6qd, .framer-ATlua .framer-cgu6qd { display: block; }`, `.framer-ATlua.framer-1rgayia { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 580px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 580px; will-change: var(--framer-will-change-override, transform); }`, `.framer-ATlua .framer-18f9se1 { cursor: none; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`, `.framer-ATlua .framer-4huyvr-container { flex: none; height: 100%; position: relative; width: 100%; }`, `.framer-ATlua .framer-1q67eiv { align-content: flex-start; align-items: flex-start; bottom: 39px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 34px; overflow: visible; padding: 0px; position: absolute; width: min-content; z-index: 1; }`, `.framer-ATlua .framer-1x5c36f, .framer-ATlua .framer-131lfzl { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`, `.framer-ATlua.framer-v-4fbdvf.framer-1rgayia { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 580px); }`], Ir = Z(Pr, Fr, `framer-ATlua`), Lr = Ir, Ir.displayName = `Featured Video Card 2`, Ir.defaultProps = {
        height: 580,
        width: 580
    }, I(Ir, {
        variant: {
            options: [`A3GAH1FEf`, `uJokriDtm`],
            optionTitles: [`Variant 1`, `Variant 2`],
            title: `Variant`,
            type: D.Enum
        },
        PH62DGcwC: wr ?.srcFile && {
            ...wr.srcFile,
            __defaultAssetReference: `data:framer/asset-reference,kdKvBb6UyIpSR2GIP2Bq6hhmuA.mp4?originalFilename=production_id_4488737+%28360p%29.mp4`,
            description: void 0,
            hidden: void 0,
            title: `File`
        },
        j3YDxvFwK: {
            title: `Tap`,
            type: D.EventHandler
        },
        Zk6V4eTO2: {
            defaultValue: `Title of the video`,
            displayTextArea: !1,
            title: `Title`,
            type: D.String
        },
        TshoKf3A0: {
            defaultValue: `Client`,
            displayTextArea: !1,
            title: `Client`,
            type: D.String
        },
        adALtMGad: {
            title: `Cursor`,
            type: D.CustomCursor
        }
    }), F(Ir, [{
        explicitInter: !0,
        fonts: [{
            family: `Syne`,
            source: `google`,
            style: `normal`,
            url: `https://fonts.gstatic.com/s/syne/v23/8vIS7w4qzmVxsWxjBZRjr0FKM_3mvj6hR47NCV5Z.woff2`,
            weight: `600`
        }, {
            family: `Syne`,
            source: `google`,
            style: `normal`,
            url: `https://fonts.gstatic.com/s/syne/v23/8vIS7w4qzmVxsWxjBZRjr0FKM_04uT6hR47NCV5Z.woff2`,
            weight: `400`
        }]
    }, ...Cr], {
        supportsExplicitInterCodegen: !0
    })
});

function zr(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var Br, Vr, Hr, Ur, Wr, Gr, Kr, qr, Jr, Yr, Xr, Zr, Qr, $r, ei, ti = e(() => {
    a(), U(), x(), o(), Cn(), yt(), Br = z($), Vr = H(pn), Hr = [`Vl_grqDPb`, `GrWIh2Kbr`], Ur = `framer-lkNgh`, Wr = {
        GrWIh2Kbr: `framer-v-rbthrk`,
        Vl_grqDPb: `framer-v-1ltrajg`
    }, Gr = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: `spring`
    }, Kr = ({
        value: e,
        children: t
    }) => {
        let n = d(b),
            r = e ?? n.transition,
            i = f(() => ({
                ...n,
                transition: r
            }), [JSON.stringify(r)]);
        return l(b.Provider, {
            value: i,
            children: t
        })
    }, qr = C.create(_), Jr = {
        "Variant 1": `Vl_grqDPb`,
        "Variant 2": `GrWIh2Kbr`
    }, Yr = ({
        client: e,
        cursor: t,
        file: n,
        height: r,
        id: i,
        tap: a,
        title: o,
        width: s,
        ...c
    }) => ({
        ...c,
        adALtMGad: t ?? c.adALtMGad,
        j3YDxvFwK: a ?? c.j3YDxvFwK,
        PH62DGcwC: n ?? c.PH62DGcwC ?? `https://framerusercontent.com/assets/kdKvBb6UyIpSR2GIP2Bq6hhmuA.mp4`,
        TshoKf3A0: e ?? c.TshoKf3A0 ?? `Client`,
        variant: Jr[c.variant] ?? c.variant ?? `Vl_grqDPb`,
        Zk6V4eTO2: o ?? c.Zk6V4eTO2 ?? `Title of the video`
    }), Xr = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Zr = n(function (e, t) {
        let n = u(null),
            r = t ?? n,
            a = i(),
            {
                activeLocale: o,
                setLocale: s
            } = Y(),
            c = G(),
            {
                style: d,
                className: f,
                layoutId: p,
                variant: h,
                PH62DGcwC: g,
                j3YDxvFwK: v,
                Zk6V4eTO2: b,
                TshoKf3A0: x,
                adALtMGad: S,
                ...w
            } = Yr(e),
            {
                baseVariant: E,
                classNames: D,
                clearLoadingGesture: O,
                gestureHandlers: k,
                gestureVariant: A,
                isLoading: j,
                setGestureState: M,
                setVariant: F,
                variants: I
            } = X({
                cycleOrder: Hr,
                defaultVariant: `Vl_grqDPb`,
                ref: r,
                variant: h,
                variantClassNames: Wr
            }),
            R = Xr(e, I),
            {
                activeVariantCallback: z,
                delay: B
            } = W(E),
            V = z(async (...e) => {
                if (M({
                        isPressed: !1
                    }), v) {
                    let t = await v(...e);
                    if (t === !1) return !1
                }
            }),
            H = z(async (...e) => {
                M({
                    isHovered: !0
                }), F(`GrWIh2Kbr`)
            }),
            U = z(async (...e) => {
                M({
                    isHovered: !1
                }), F(`Vl_grqDPb`)
            }),
            K = [],
            q = L(Ur, ...K);
        return l(y, {
            id: p ?? a,
            children: l(qr, {
                animate: I,
                initial: !1,
                children: l(Kr, {
                    value: Gr,
                    children: m(C.div, {
                        ...w,
                        ...k,
                        className: L(q, `framer-1ltrajg`, f, D),
                        "data-framer-cursor": S,
                        "data-framer-name": `Variant 1`,
                        "data-highlight": !0,
                        layoutDependency: R,
                        layoutId: `Vl_grqDPb`,
                        onMouseEnter: H,
                        onTap: V,
                        ref: r,
                        style: {
                            borderBottomLeftRadius: 51,
                            borderBottomRightRadius: 51,
                            borderTopLeftRadius: 51,
                            borderTopRightRadius: 51,
                            ...d
                        },
                        ...zr({
                            GrWIh2Kbr: {
                                "data-framer-name": `Variant 2`,
                                onMouseLeave: U
                            }
                        }, E, A),
                        children: [l(C.div, {
                            className: `framer-ngycp`,
                            layoutDependency: R,
                            layoutId: `y7_sfRy9U`
                        }), l(T, {
                            children: l(P, {
                                className: `framer-1t5pt03-container`,
                                isModuleExternal: !0,
                                layoutDependency: R,
                                layoutId: `YkIryc31W-container`,
                                nodeId: `YkIryc31W`,
                                rendersWithMotion: !0,
                                scopeId: `LrLqorjhH`,
                                children: l($, {
                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                    borderRadius: 0,
                                    bottomLeftRadius: 0,
                                    bottomRightRadius: 0,
                                    controls: !1,
                                    height: `100%`,
                                    id: `YkIryc31W`,
                                    isMixedBorderRadius: !1,
                                    layoutId: `YkIryc31W`,
                                    loop: !0,
                                    muted: !0,
                                    objectFit: `cover`,
                                    playing: !1,
                                    posterEnabled: !1,
                                    srcFile: g,
                                    srcType: `Upload`,
                                    srcUrl: `https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4`,
                                    startTime: 0,
                                    style: {
                                        height: `100%`,
                                        width: `100%`
                                    },
                                    topLeftRadius: 0,
                                    topRightRadius: 0,
                                    volume: 25,
                                    width: `100%`,
                                    ...zr({
                                        GrWIh2Kbr: {
                                            playing: !0
                                        }
                                    }, E, A)
                                })
                            })
                        }), m(C.div, {
                            className: `framer-1l4pygc`,
                            layoutDependency: R,
                            layoutId: `WDoKKWyuS`,
                            children: [l(N, {
                                __fromCanvasComponent: !0,
                                children: l(_, {
                                    children: l(C.p, {
                                        style: {
                                            "--font-selector": `R0Y7U3luZS02MDA=`,
                                            "--framer-font-family": `"Syne", "Syne Placeholder", sans-serif`,
                                            "--framer-font-size": `24px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                        },
                                        children: `Title of the video`
                                    })
                                }),
                                className: `framer-dg31a`,
                                fonts: [`GF;Syne-600`],
                                layoutDependency: R,
                                layoutId: `UtFSc5TV0`,
                                style: {
                                    "--extracted-r6o4lv": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`
                                },
                                text: b,
                                verticalAlignment: `top`,
                                withExternalLayout: !0
                            }), l(N, {
                                __fromCanvasComponent: !0,
                                children: l(_, {
                                    children: l(C.p, {
                                        style: {
                                            "--font-selector": `R0Y7U3luZS1yZWd1bGFy`,
                                            "--framer-font-family": `"Syne", "Syne Placeholder", sans-serif`,
                                            "--framer-font-size": `13px`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                        },
                                        children: `Client`
                                    })
                                }),
                                className: `framer-md6clb`,
                                fonts: [`GF;Syne-regular`],
                                layoutDependency: R,
                                layoutId: `jpWaz_WHd`,
                                style: {
                                    "--extracted-r6o4lv": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`
                                },
                                text: x,
                                verticalAlignment: `top`,
                                withExternalLayout: !0
                            })]
                        })]
                    })
                })
            })
        })
    }), Qr = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-lkNgh.framer-1liueii, .framer-lkNgh .framer-1liueii { display: block; }`, `.framer-lkNgh.framer-1ltrajg { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 580px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 580px; will-change: var(--framer-will-change-override, transform); }`, `.framer-lkNgh .framer-ngycp { cursor: none; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`, `.framer-lkNgh .framer-1t5pt03-container { flex: none; height: 100%; position: relative; width: 100%; }`, `.framer-lkNgh .framer-1l4pygc { align-content: flex-start; align-items: flex-start; bottom: 39px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 34px; overflow: visible; padding: 0px; position: absolute; width: min-content; z-index: 1; }`, `.framer-lkNgh .framer-dg31a, .framer-lkNgh .framer-md6clb { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`, `.framer-lkNgh.framer-v-rbthrk.framer-1ltrajg { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 580px); }`], $r = Z(Zr, Qr, `framer-lkNgh`), ei = $r, $r.displayName = `Featured Video Card 3`, $r.defaultProps = {
        height: 580,
        width: 580
    }, I($r, {
        variant: {
            options: [`Vl_grqDPb`, `GrWIh2Kbr`],
            optionTitles: [`Variant 1`, `Variant 2`],
            title: `Variant`,
            type: D.Enum
        },
        PH62DGcwC: Vr ?.srcFile && {
            ...Vr.srcFile,
            __defaultAssetReference: `data:framer/asset-reference,kdKvBb6UyIpSR2GIP2Bq6hhmuA.mp4?originalFilename=production_id_4488737+%28360p%29.mp4`,
            description: void 0,
            hidden: void 0,
            title: `File`
        },
        j3YDxvFwK: {
            title: `Tap`,
            type: D.EventHandler
        },
        Zk6V4eTO2: {
            defaultValue: `Title of the video`,
            displayTextArea: !1,
            title: `Title`,
            type: D.String
        },
        TshoKf3A0: {
            defaultValue: `Client`,
            displayTextArea: !1,
            title: `Client`,
            type: D.String
        },
        adALtMGad: {
            title: `Cursor`,
            type: D.CustomCursor
        }
    }), F($r, [{
        explicitInter: !0,
        fonts: [{
            family: `Syne`,
            source: `google`,
            style: `normal`,
            url: `https://fonts.gstatic.com/s/syne/v23/8vIS7w4qzmVxsWxjBZRjr0FKM_3mvj6hR47NCV5Z.woff2`,
            weight: `600`
        }, {
            family: `Syne`,
            source: `google`,
            style: `normal`,
            url: `https://fonts.gstatic.com/s/syne/v23/8vIS7w4qzmVxsWxjBZRjr0FKM_04uT6hR47NCV5Z.woff2`,
            weight: `400`
        }]
    }, ...Br], {
        supportsExplicitInterCodegen: !0
    })
});

function ni(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var ri, ii, ai, oi, si, ci, li, ui, di, fi, pi, mi, hi, gi, _i, vi = e(() => {
    a(), U(), x(), o(), Se(), Ee(), ri = z(ce), ii = {
        epeQ0Rz1a: {
            hover: !0
        },
        gsmbPTvlC: {
            hover: !0
        }
    }, ai = [`gsmbPTvlC`, `THjstnVKy`, `epeQ0Rz1a`, `w4LRaJbwb`], oi = `framer-C5aWJ`, si = {
        epeQ0Rz1a: `framer-v-19silbs`,
        gsmbPTvlC: `framer-v-1nbynp0`,
        THjstnVKy: `framer-v-yg2x2n`,
        w4LRaJbwb: `framer-v-1m6jqme`
    }, ci = {
        bounce: .2,
        delay: 0,
        duration: .4,
        type: `spring`
    }, li = ({
        value: e,
        children: t
    }) => {
        let n = d(b),
            r = e ?? n.transition,
            i = f(() => ({
                ...n,
                transition: r
            }), [JSON.stringify(r)]);
        return l(b.Provider, {
            value: i,
            children: t
        })
    }, ui = C.create(_), di = {
        "Primary - Tablet/Mobile": `THjstnVKy`,
        "Secondary - Tablet/Mobile": `w4LRaJbwb`,
        Primary: `gsmbPTvlC`,
        Secondary: `epeQ0Rz1a`
    }, fi = ({
        click: e,
        height: t,
        id: n,
        title: r,
        width: i,
        ...a
    }) => ({
        ...a,
        BXH6idq_Y: e ?? a.BXH6idq_Y,
        k2d02rYDk: r ?? a.k2d02rYDk ?? `Let's talk`,
        variant: di[a.variant] ?? a.variant ?? `gsmbPTvlC`
    }), pi = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), mi = n(function (e, t) {
        let n = u(null),
            r = t ?? n,
            a = i(),
            {
                activeLocale: o,
                setLocale: s
            } = Y(),
            c = G(),
            {
                style: d,
                className: f,
                layoutId: p,
                variant: h,
                k2d02rYDk: g,
                BXH6idq_Y: v,
                ...b
            } = fi(e),
            {
                baseVariant: x,
                classNames: S,
                clearLoadingGesture: w,
                gestureHandlers: E,
                gestureVariant: D,
                isLoading: O,
                setGestureState: k,
                setVariant: j,
                variants: M
            } = X({
                cycleOrder: ai,
                defaultVariant: `gsmbPTvlC`,
                enabledGestures: ii,
                ref: r,
                variant: h,
                variantClassNames: si
            }),
            F = pi(e, M),
            {
                activeVariantCallback: I,
                delay: R
            } = W(x),
            z = I(async (...e) => {
                if (k({
                        isPressed: !1
                    }), v) {
                    let t = await v(...e);
                    if (t === !1) return !1
                }
            }),
            B = [fe],
            V = L(oi, ...B);
        return l(y, {
            id: p ?? a,
            children: l(ui, {
                animate: M,
                initial: !1,
                children: l(li, {
                    value: ci,
                    children: l(A, {
                        href: `https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xComingSoon`,
                        target:"_blank",
                        motionChild: !0,
                        nodeId: `gsmbPTvlC`,
                        openInNewTab: !1,
                        scopeId: `PV4gcR2LN`,
                        smoothScroll: !0,
                        children: m(C.a, {
                            ...b,
                            ...E,
                            className: `${L(V,`framer-1nbynp0`,f,S)} framer-1sn5zzf`,
                            "data-framer-name": `Primary`,
                            "data-highlight": !0,
                            layoutDependency: F,
                            layoutId: `gsmbPTvlC`,
                            onTap: z,
                            ref: r,
                            style: {
                                backgroundColor: `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`,
                                borderBottomLeftRadius: 100,
                                borderBottomRightRadius: 100,
                                borderTopLeftRadius: 100,
                                borderTopRightRadius: 100,
                                ...d
                            },
                            variants: {
                                epeQ0Rz1a: {
                                    backgroundColor: `var(--token-a7497e5f-97a2-40d3-be6b-a05abf36a3d2, rgb(237, 237, 237))`
                                },
                                w4LRaJbwb: {
                                    backgroundColor: `var(--token-a7497e5f-97a2-40d3-be6b-a05abf36a3d2, rgb(237, 237, 237))`
                                }
                            },
                            ...ni({
                                "epeQ0Rz1a-hover": {
                                    "data-framer-name": void 0
                                },
                                "gsmbPTvlC-hover": {
                                    "data-framer-name": void 0
                                },
                                epeQ0Rz1a: {
                                    "data-framer-name": `Secondary`
                                },
                                THjstnVKy: {
                                    "data-framer-name": `Primary - Tablet/Mobile`
                                },
                                w4LRaJbwb: {
                                    "data-framer-name": `Secondary - Tablet/Mobile`
                                }
                            }, x, D),
                            children: [l(C.div, {
                                className: `framer-1i4gaf0`,
                                "data-framer-name": `Icon`,
                                layoutDependency: F,
                                layoutId: `tILPX8VuY`,
                                style: {
                                    opacity: 0
                                },
                                variants: {
                                    "epeQ0Rz1a-hover": {
                                        opacity: 1
                                    },
                                    "gsmbPTvlC-hover": {
                                        opacity: 1
                                    }
                                },
                                children: l(T, {
                                    children: l(P, {
                                        className: `framer-fi16ge-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        layoutDependency: F,
                                        layoutId: `r2oKPE0jm-container`,
                                        nodeId: `r2oKPE0jm`,
                                        rendersWithMotion: !0,
                                        scopeId: `PV4gcR2LN`,
                                        children: l(ce, {
                                            color: `var(--token-09ea5b55-cb41-495a-a653-c8b316e5c96d, rgba(255, 255, 255, 0.5))`,
                                            height: `100%`,
                                            iconSearch: `House`,
                                            iconSelection: `ArrowRight`,
                                            id: `r2oKPE0jm`,
                                            layoutId: `r2oKPE0jm`,
                                            mirrored: !1,
                                            selectByList: !0,
                                            style: {
                                                height: `100%`,
                                                width: `100%`
                                            },
                                            weight: `regular`,
                                            width: `100%`,
                                            ...ni({
                                                epeQ0Rz1a: {
                                                    color: `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`
                                                },
                                                w4LRaJbwb: {
                                                    color: `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`
                                                }
                                            }, x, D)
                                        })
                                    })
                                })
                            }), l(N, {
                                __fromCanvasComponent: !0,
                                children: l(_, {
                                    children: l(C.p, {
                                        className: `framer-styles-preset-kkrvh`,
                                        "data-styles-preset": `bEb99onL_`,
                                        style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, rgb(255, 255, 255)))`
                                        },
                                        children: `Let's talk`
                                    })
                                }),
                                className: `framer-1yfrir2`,
                                fonts: [`Inter`],
                                layoutDependency: F,
                                layoutId: `A5uzESi7S`,
                                style: {
                                    "--extracted-r6o4lv": `var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`
                                },
                                text: g,
                                variants: {
                                    epeQ0Rz1a: {
                                        "--extracted-r6o4lv": `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`
                                    },
                                    w4LRaJbwb: {
                                        "--extracted-r6o4lv": `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`
                                    }
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...ni({
                                    epeQ0Rz1a: {
                                        children: l(_, {
                                            children: l(C.p, {
                                                className: `framer-styles-preset-kkrvh`,
                                                "data-styles-preset": `bEb99onL_`,
                                                style: {
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0)))`
                                                },
                                                children: `Let's talk`
                                            })
                                        })
                                    },
                                    w4LRaJbwb: {
                                        children: l(_, {
                                            children: l(C.p, {
                                                className: `framer-styles-preset-kkrvh`,
                                                "data-styles-preset": `bEb99onL_`,
                                                style: {
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0)))`
                                                },
                                                children: `Let's talk`
                                            })
                                        })
                                    }
                                }, x, D)
                            }), l(C.div, {
                                className: `framer-1006vfy`,
                                "data-framer-name": `Icon`,
                                layoutDependency: F,
                                layoutId: `YMVbp0fqq`,
                                style: {
                                    opacity: 1
                                },
                                variants: {
                                    "epeQ0Rz1a-hover": {
                                        opacity: 0
                                    },
                                    "gsmbPTvlC-hover": {
                                        opacity: 0
                                    }
                                },
                                children: l(T, {
                                    children: l(P, {
                                        className: `framer-17u22pr-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        layoutDependency: F,
                                        layoutId: `AsEu1BG2l-container`,
                                        nodeId: `AsEu1BG2l`,
                                        rendersWithMotion: !0,
                                        scopeId: `PV4gcR2LN`,
                                        children: l(ce, {
                                            color: `var(--token-09ea5b55-cb41-495a-a653-c8b316e5c96d, rgba(255, 255, 255, 0.5))`,
                                            height: `100%`,
                                            iconSearch: `House`,
                                            iconSelection: `ArrowRight`,
                                            id: `AsEu1BG2l`,
                                            layoutId: `AsEu1BG2l`,
                                            mirrored: !1,
                                            selectByList: !0,
                                            style: {
                                                height: `100%`,
                                                width: `100%`
                                            },
                                            weight: `regular`,
                                            width: `100%`,
                                            ...ni({
                                                epeQ0Rz1a: {
                                                    color: `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`
                                                },
                                                w4LRaJbwb: {
                                                    color: `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`
                                                }
                                            }, x, D)
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            })
        })
    }), hi = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-C5aWJ.framer-1sn5zzf, .framer-C5aWJ .framer-1sn5zzf { display: block; }`, `.framer-C5aWJ.framer-1nbynp0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 18px 12px 18px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`, `.framer-C5aWJ .framer-1i4gaf0 { flex: none; height: 14px; overflow: visible; position: relative; width: 1px; }`, `.framer-C5aWJ .framer-fi16ge-container { bottom: 0px; flex: none; left: -10px; position: absolute; top: 0px; width: 14px; }`, `.framer-C5aWJ .framer-1yfrir2 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, `.framer-C5aWJ .framer-1006vfy { flex: none; height: 14px; overflow: visible; position: relative; width: 14px; }`, `.framer-C5aWJ .framer-17u22pr-container { bottom: 0px; flex: none; left: calc(46.66666666666669% - 14px / 2); position: absolute; top: 0px; width: 14px; }`, `.framer-C5aWJ.framer-v-19silbs .framer-fi16ge-container { right: -2px; width: unset; }`, `.framer-C5aWJ.framer-v-1m6jqme .framer-fi16ge-container { left: -20px; }`, `.framer-C5aWJ.framer-v-1nbynp0.hover .framer-1i4gaf0, .framer-C5aWJ.framer-v-19silbs.hover .framer-1i4gaf0 { width: 14px; }`, `.framer-C5aWJ.framer-v-1nbynp0.hover .framer-fi16ge-container { left: unset; right: 0px; }`, `.framer-C5aWJ.framer-v-1nbynp0.hover .framer-1006vfy, .framer-C5aWJ.framer-v-19silbs.hover .framer-1006vfy { width: 1px; }`, `.framer-C5aWJ.framer-v-1nbynp0.hover .framer-17u22pr-container { left: unset; right: -10px; }`, `.framer-C5aWJ.framer-v-19silbs.hover .framer-fi16ge-container { left: unset; right: 0px; width: 14px; }`, `.framer-C5aWJ.framer-v-19silbs.hover .framer-17u22pr-container { left: -2px; right: -10px; width: unset; }`, ...ge], gi = Z(mi, hi, `framer-C5aWJ`), _i = gi, gi.displayName = `Primary`, gi.defaultProps = {
        height: 49.5,
        width: 123
    }, I(gi, {
        variant: {
            options: [`gsmbPTvlC`, `THjstnVKy`, `epeQ0Rz1a`, `w4LRaJbwb`],
            optionTitles: [`Primary`, `Primary - Tablet/Mobile`, `Secondary`, `Secondary - Tablet/Mobile`],
            title: `Variant`,
            type: D.Enum
        },
        k2d02rYDk: {
            defaultValue: `Let's talk`,
            displayTextArea: !1,
            title: `Title`,
            type: D.String
        },
        BXH6idq_Y: {
            title: `Click`,
            type: D.EventHandler
        }
    }), F(gi, [{
        explicitInter: !0,
        fonts: [{
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
            weight: `400`
        }]
    }, ...ri, ...B(be)], {
        supportsExplicitInterCodegen: !0
    })
});

function yi(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii = e(() => {
    a(), U(), x(), o(), Ee(), bi = [`wi4vSzqCu`, `I7ec13zQC`], xi = `framer-aCE2n`, Si = {
        I7ec13zQC: `framer-v-10eypi9`,
        wi4vSzqCu: `framer-v-14q6ltj`
    }, Ci = {
        bounce: .2,
        delay: 0,
        duration: .4,
        type: `spring`
    }, wi = {
        filter: `blur(10px)`,
        opacity: .001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 30
    }, Ti = {
        delay: .05,
        duration: .8,
        ease: [.28, .41, .56, 1],
        type: `tween`
    }, Ei = {
        effect: wi,
        repeat: !1,
        startDelay: .5,
        tokenization: `line`,
        transition: Ti,
        trigger: `onMount`,
        type: `appear`
    }, Di = ({
        value: e,
        children: t
    }) => {
        let n = d(b),
            r = e ?? n.transition,
            i = f(() => ({
                ...n,
                transition: r
            }), [JSON.stringify(r)]);
        return l(b.Provider, {
            value: i,
            children: t
        })
    }, Oi = C.create(_), ki = {
        Current: `wi4vSzqCu`,
        Default: `I7ec13zQC`
    }, Ai = ({
        feature1: e,
        height: t,
        id: n,
        width: r,
        ...i
    }) => ({
        ...i,
        variant: ki[i.variant] ?? i.variant ?? `wi4vSzqCu`,
        whI4nGdpG: e ?? i.whI4nGdpG ?? `Automation`
    }), ji = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Mi = n(function (e, t) {
        let n = u(null),
            r = t ?? n,
            a = i(),
            {
                activeLocale: o,
                setLocale: s
            } = Y(),
            c = G(),
            {
                style: d,
                className: f,
                layoutId: p,
                variant: m,
                whI4nGdpG: h,
                ...g
            } = Ai(e),
            {
                baseVariant: v,
                classNames: b,
                clearLoadingGesture: x,
                gestureHandlers: S,
                gestureVariant: w,
                isLoading: T,
                setGestureState: E,
                setVariant: D,
                variants: O
            } = X({
                cycleOrder: bi,
                defaultVariant: `wi4vSzqCu`,
                ref: r,
                variant: m,
                variantClassNames: Si
            }),
            k = ji(e, O),
            A = [fe],
            j = L(xi, ...A);
        return l(y, {
            id: p ?? a,
            children: l(Oi, {
                animate: O,
                initial: !1,
                children: l(Di, {
                    value: Ci,
                    children: l(C.div, {
                        ...g,
                        ...S,
                        className: L(j, `framer-14q6ltj`, f, b),
                        "data-framer-name": `Current`,
                        layoutDependency: k,
                        layoutId: `wi4vSzqCu`,
                        ref: r,
                        style: {
                            ...d
                        },
                        ...yi({
                            I7ec13zQC: {
                                "data-framer-name": `Default`
                            }
                        }, v, w),
                        children: l(N, {
                            __fromCanvasComponent: !0,
                            children: l(_, {
                                children: l(C.p, {
                                    className: `framer-styles-preset-kkrvh`,
                                    "data-styles-preset": `bEb99onL_`,
                                    style: {
                                        "--framer-text-alignment": `right`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0)))`
                                    },
                                    children: `Automation`
                                })
                            }),
                            className: `framer-1prpobl`,
                            effect: Ei,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `aw0Z27wPm`,
                            style: {
                                "--extracted-r6o4lv": `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`
                            },
                            text: h,
                            variants: {
                                I7ec13zQC: {
                                    "--extracted-r6o4lv": `var(--token-84939536-f364-4366-b20a-541cadebffd9, rgba(0, 0, 0, 0.5))`
                                }
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...yi({
                                I7ec13zQC: {
                                    children: l(_, {
                                        children: l(C.p, {
                                            className: `framer-styles-preset-kkrvh`,
                                            "data-styles-preset": `bEb99onL_`,
                                            style: {
                                                "--framer-text-alignment": `right`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-84939536-f364-4366-b20a-541cadebffd9, rgba(0, 0, 0, 0.5)))`
                                            },
                                            children: `Automation`
                                        })
                                    })
                                }
                            }, v, w)
                        })
                    })
                })
            })
        })
    }), Ni = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-aCE2n.framer-1urqtr6, .framer-aCE2n .framer-1urqtr6 { display: block; }`, `.framer-aCE2n.framer-14q6ltj { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`, `.framer-aCE2n .framer-1prpobl { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, ...ge], Pi = Z(Mi, Ni, `framer-aCE2n`), Fi = Pi, Pi.displayName = `Hero Feature item`, Pi.defaultProps = {
        height: 25.5,
        width: 86.5
    }, I(Pi, {
        variant: {
            options: [`wi4vSzqCu`, `I7ec13zQC`],
            optionTitles: [`Current`, `Default`],
            title: `Variant`,
            type: D.Enum
        },
        whI4nGdpG: {
            defaultValue: `Automation`,
            displayTextArea: !1,
            title: `Feature 1`,
            type: D.String
        }
    }), F(Pi, [{
        explicitInter: !0,
        fonts: [{
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
            weight: `400`
        }, {
            family: `Inter`,
            source: `framer`,
            style: `normal`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
            weight: `400`
        }]
    }, ...B(be)], {
        supportsExplicitInterCodegen: !0
    })
});

function Li(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi, Xi, Zi, Qi = e(() => {
    a(), U(), x(), o(), Ii(), Ri = z(Fi), zi = [`cUSNeQ612`, `azeGWXC1K`, `H9tXOl_FF`, `lGSP1WgZK`, `Zd64zpOzv`, `xjlv0kXgq`, `eBwZDzd0v`, `i3GNJYblT`], Bi = `framer-ZThHk`, Vi = {
        azeGWXC1K: `framer-v-1ozvy8a`,
        cUSNeQ612: `framer-v-2mk139`,
        eBwZDzd0v: `framer-v-aasv5`,
        H9tXOl_FF: `framer-v-cilk0x`,
        i3GNJYblT: `framer-v-3peqyh`,
        lGSP1WgZK: `framer-v-156xqiw`,
        xjlv0kXgq: `framer-v-15bfq3v`,
        Zd64zpOzv: `framer-v-1vvuurd`
    }, Hi = {
        delay: 0,
        duration: .6,
        ease: [.73, .02, .56, 1],
        type: `tween`
    }, Ui = ({
        value: e,
        children: t
    }) => {
        let n = d(b),
            r = e ?? n.transition,
            i = f(() => ({
                ...n,
                transition: r
            }), [JSON.stringify(r)]);
        return l(b.Provider, {
            value: i,
            children: t
        })
    }, Wi = C.create(_), Gi = {
        "Desktop 1": `cUSNeQ612`,
        "Desktop 2": `azeGWXC1K`,
        "Desktop 3": `H9tXOl_FF`,
        "Desktop 4": `lGSP1WgZK`,
        "Mobile 1": `Zd64zpOzv`,
        "Mobile 2": `xjlv0kXgq`,
        "Mobile 3": `eBwZDzd0v`,
        "Mobile 4": `i3GNJYblT`
    }, Ki = ({
        feature1: e,
        feature2: t,
        feature3: n,
        feature4: r,
        height: i,
        id: a,
        width: o,
        ...s
    }) => ({
        ...s,
        ebSsbBBhw: t ?? s.ebSsbBBhw ?? `Explore`,
        variant: Gi[s.variant] ?? s.variant ?? `cUSNeQ612`,
        W2h1BgtXI: e ?? s.W2h1BgtXI ?? `Explore`,
        Zwe5JGCYG: n ?? s.Zwe5JGCYG ?? `Host`,
        zxSr59MeY: r ?? s.zxSr59MeY ?? `Interact`
    }), qi = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Ji = n(function (e, t) {
        let n = u(null),
            r = t ?? n,
            a = i(),
            {
                activeLocale: o,
                setLocale: s
            } = Y(),
            c = G(),
            {
                style: d,
                className: f,
                layoutId: p,
                variant: h,
                W2h1BgtXI: g,
                ebSsbBBhw: _,
                Zwe5JGCYG: v,
                zxSr59MeY: b,
                ...x
            } = Ki(e),
            {
                baseVariant: S,
                classNames: w,
                clearLoadingGesture: E,
                gestureHandlers: D,
                gestureVariant: O,
                isLoading: k,
                setGestureState: A,
                setVariant: j,
                variants: M
            } = X({
                cycleOrder: zi,
                defaultVariant: `cUSNeQ612`,
                ref: r,
                variant: h,
                variantClassNames: Vi
            }),
            N = qi(e, M),
            {
                activeVariantCallback: F,
                delay: I
            } = W(S),
            R = F(async (...e) => {
                await I(() => j(`azeGWXC1K`, !0), 3e3)
            }),
            z = F(async (...e) => {
                await I(() => j(`H9tXOl_FF`, !0), 3e3)
            }),
            B = F(async (...e) => {
                await I(() => j(`lGSP1WgZK`, !0), 3e3)
            }),
            V = F(async (...e) => {
                await I(() => j(`cUSNeQ612`, !0), 3e3)
            }),
            H = F(async (...e) => {
                await I(() => j(`xjlv0kXgq`, !0), 3e3)
            }),
            U = F(async (...e) => {
                await I(() => j(`eBwZDzd0v`, !0), 3e3)
            }),
            K = F(async (...e) => {
                await I(() => j(`i3GNJYblT`, !0), 3e3)
            }),
            q = F(async (...e) => {
                await I(() => j(`Zd64zpOzv`, !0), 3e3)
            });
        re(S, {
            azeGWXC1K: z,
            default: R,
            eBwZDzd0v: K,
            H9tXOl_FF: B,
            i3GNJYblT: q,
            lGSP1WgZK: V,
            xjlv0kXgq: U,
            Zd64zpOzv: H
        });
        let J = [],
            ee = L(Bi, ...J);
        return l(y, {
            id: p ?? a,
            children: l(Wi, {
                animate: M,
                initial: !1,
                children: l(Ui, {
                    value: Hi,
                    children: m(C.div, {
                        ...x,
                        ...D,
                        className: L(ee, `framer-2mk139`, f, w),
                        "data-framer-name": `Desktop 1`,
                        "data-highlight": !0,
                        layoutDependency: N,
                        layoutId: `cUSNeQ612`,
                        ref: r,
                        style: {
                            ...d
                        },
                        ...Li({
                            azeGWXC1K: {
                                "data-framer-name": `Desktop 2`
                            },
                            eBwZDzd0v: {
                                "data-framer-name": `Mobile 3`
                            },
                            H9tXOl_FF: {
                                "data-framer-name": `Desktop 3`
                            },
                            i3GNJYblT: {
                                "data-framer-name": `Mobile 4`
                            },
                            lGSP1WgZK: {
                                "data-framer-name": `Desktop 4`
                            },
                            xjlv0kXgq: {
                                "data-framer-name": `Mobile 2`
                            },
                            Zd64zpOzv: {
                                "data-framer-name": `Mobile 1`
                            }
                        }, S, O),
                        children: [l(T, {
                            height: 25,
                            y: (c ?.y || 0) + 0 + (((c ?.height || 108.5) - 0 - 106) / 2 + 0 + 0),
                            ...Li({
                                eBwZDzd0v: {
                                    y: (c ?.y || 0) + 0 + ((c ?.height || 200) - 0 - 25)
                                },
                                i3GNJYblT: {
                                    y: (c ?.y || 0) + 0 + ((c ?.height || 200) - 0 - 25)
                                },
                                xjlv0kXgq: {
                                    y: (c ?.y || 0) + 0 + ((c ?.height || 200) - 0 - 25)
                                },
                                Zd64zpOzv: {
                                    y: (c ?.y || 0) + 0 + ((c ?.height || 25.5) - 0 - 25)
                                }
                            }, S, O),
                            children: l(P, {
                                className: `framer-8jdk9n-container`,
                                layoutDependency: N,
                                layoutId: `p0Jt6sNg4-container`,
                                nodeId: `p0Jt6sNg4`,
                                rendersWithMotion: !0,
                                scopeId: `SoZJjfpXf`,
                                children: l(Fi, {
                                    height: `100%`,
                                    id: `p0Jt6sNg4`,
                                    layoutId: `p0Jt6sNg4`,
                                    variant: `wi4vSzqCu`,
                                    whI4nGdpG: g,
                                    width: `100%`,
                                    ...Li({
                                        azeGWXC1K: {
                                            variant: `I7ec13zQC`
                                        },
                                        eBwZDzd0v: {
                                            variant: `I7ec13zQC`
                                        },
                                        H9tXOl_FF: {
                                            variant: `I7ec13zQC`
                                        },
                                        i3GNJYblT: {
                                            variant: `I7ec13zQC`
                                        },
                                        lGSP1WgZK: {
                                            variant: `I7ec13zQC`
                                        },
                                        xjlv0kXgq: {
                                            variant: `I7ec13zQC`
                                        }
                                    }, S, O)
                                })
                            })
                        }), l(T, {
                            height: 25,
                            y: (c ?.y || 0) + 0 + (((c ?.height || 108.5) - 0 - 106) / 2 + 25 + 2),
                            ...Li({
                                eBwZDzd0v: {
                                    y: (c ?.y || 0) + 0 + ((c ?.height || 200) - 0 - 25)
                                },
                                i3GNJYblT: {
                                    y: (c ?.y || 0) + 0 + ((c ?.height || 200) - 0 - 25)
                                },
                                xjlv0kXgq: {
                                    y: (c ?.y || 0) + 0 + ((c ?.height || 200) - 0 - 25)
                                },
                                Zd64zpOzv: {
                                    y: (c ?.y || 0) + 0 + ((c ?.height || 25.5) - 0 - 25)
                                }
                            }, S, O),
                            children: l(P, {
                                className: `framer-1tnlzt2-container`,
                                layoutDependency: N,
                                layoutId: `OktqZc6xs-container`,
                                nodeId: `OktqZc6xs`,
                                rendersWithMotion: !0,
                                scopeId: `SoZJjfpXf`,
                                children: l(Fi, {
                                    height: `100%`,
                                    id: `OktqZc6xs`,
                                    layoutId: `OktqZc6xs`,
                                    variant: `I7ec13zQC`,
                                    whI4nGdpG: _,
                                    width: `100%`,
                                    ...Li({
                                        azeGWXC1K: {
                                            variant: `wi4vSzqCu`
                                        },
                                        xjlv0kXgq: {
                                            variant: `wi4vSzqCu`
                                        }
                                    }, S, O)
                                })
                            })
                        }), l(T, {
                            height: 25,
                            y: (c ?.y || 0) + 0 + (((c ?.height || 108.5) - 0 - 106) / 2 + 50 + 4),
                            ...Li({
                                eBwZDzd0v: {
                                    y: (c ?.y || 0) + 0 + ((c ?.height || 200) - 0 - 25)
                                },
                                i3GNJYblT: {
                                    y: (c ?.y || 0) + 0 + ((c ?.height || 200) - 0 - 25)
                                },
                                xjlv0kXgq: {
                                    y: (c ?.y || 0) + 0 + ((c ?.height || 200) - 0 - 25)
                                },
                                Zd64zpOzv: {
                                    y: (c ?.y || 0) + 0 + ((c ?.height || 25.5) - 0 - 25)
                                }
                            }, S, O),
                            children: l(P, {
                                className: `framer-14ms6lb-container`,
                                layoutDependency: N,
                                layoutId: `YfRIlS9gX-container`,
                                nodeId: `YfRIlS9gX`,
                                rendersWithMotion: !0,
                                scopeId: `SoZJjfpXf`,
                                children: l(Fi, {
                                    height: `100%`,
                                    id: `YfRIlS9gX`,
                                    layoutId: `YfRIlS9gX`,
                                    variant: `I7ec13zQC`,
                                    whI4nGdpG: v,
                                    width: `100%`,
                                    ...Li({
                                        eBwZDzd0v: {
                                            variant: `wi4vSzqCu`
                                        },
                                        H9tXOl_FF: {
                                            variant: `wi4vSzqCu`
                                        }
                                    }, S, O)
                                })
                            })
                        }), l(T, {
                            height: 25,
                            y: (c ?.y || 0) + 0 + (((c ?.height || 108.5) - 0 - 106) / 2 + 75 + 6),
                            ...Li({
                                eBwZDzd0v: {
                                    y: (c ?.y || 0) + 0 + ((c ?.height || 200) - 0 - 25)
                                },
                                i3GNJYblT: {
                                    y: (c ?.y || 0) + 0 + ((c ?.height || 200) - 0 - 25)
                                },
                                xjlv0kXgq: {
                                    y: (c ?.y || 0) + 0 + ((c ?.height || 200) - 0 - 25)
                                },
                                Zd64zpOzv: {
                                    y: (c ?.y || 0) + 0 + ((c ?.height || 25.5) - 0 - 25)
                                }
                            }, S, O),
                            children: l(P, {
                                className: `framer-15rw33t-container`,
                                layoutDependency: N,
                                layoutId: `FURe3yRIM-container`,
                                nodeId: `FURe3yRIM`,
                                rendersWithMotion: !0,
                                scopeId: `SoZJjfpXf`,
                                children: l(Fi, {
                                    height: `100%`,
                                    id: `FURe3yRIM`,
                                    layoutId: `FURe3yRIM`,
                                    variant: `I7ec13zQC`,
                                    whI4nGdpG: b,
                                    width: `100%`,
                                    ...Li({
                                        i3GNJYblT: {
                                            variant: `wi4vSzqCu`
                                        },
                                        lGSP1WgZK: {
                                            variant: `wi4vSzqCu`
                                        }
                                    }, S, O)
                                })
                            })
                        })]
                    })
                })
            })
        })
    }), Yi = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-ZThHk.framer-hrdbbi, .framer-ZThHk .framer-hrdbbi { display: block; }`, `.framer-ZThHk.framer-2mk139 { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`, `.framer-ZThHk .framer-8jdk9n-container, .framer-ZThHk .framer-1tnlzt2-container, .framer-ZThHk .framer-14ms6lb-container, .framer-ZThHk .framer-15rw33t-container { flex: none; height: auto; position: relative; width: auto; }`, `.framer-ZThHk.framer-v-1vvuurd.framer-2mk139, .framer-ZThHk.framer-v-15bfq3v.framer-2mk139, .framer-ZThHk.framer-v-aasv5.framer-2mk139, .framer-ZThHk.framer-v-3peqyh.framer-2mk139 { flex-direction: row; gap: 16px; }`], Xi = Z(Ji, Yi, `framer-ZThHk`), Zi = Xi, Xi.displayName = `Hero features`, Xi.defaultProps = {
        height: 108.5,
        width: 57.5
    }, I(Xi, {
        variant: {
            options: [`cUSNeQ612`, `azeGWXC1K`, `H9tXOl_FF`, `lGSP1WgZK`, `Zd64zpOzv`, `xjlv0kXgq`, `eBwZDzd0v`, `i3GNJYblT`],
            optionTitles: [`Desktop 1`, `Desktop 2`, `Desktop 3`, `Desktop 4`, `Mobile 1`, `Mobile 2`, `Mobile 3`, `Mobile 4`],
            title: `Variant`,
            type: D.Enum
        },
        W2h1BgtXI: {
            defaultValue: `Explore`,
            displayTextArea: !1,
            title: `Feature 1`,
            type: D.String
        },
        ebSsbBBhw: {
            defaultValue: `Explore`,
            displayTextArea: !1,
            title: `Feature 2`,
            type: D.String
        },
        Zwe5JGCYG: {
            defaultValue: `Host`,
            displayTextArea: !1,
            title: `Feature 3`,
            type: D.String
        },
        zxSr59MeY: {
            defaultValue: `Interact`,
            displayTextArea: !1,
            title: `Feature 4`,
            type: D.String
        }
    }), F(Xi, [{
        explicitInter: !0,
        fonts: []
    }, ...Ri], {
        supportsExplicitInterCodegen: !0
    })
});

function $i(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var ea, ta, na, ra, ia, aa, oa, sa, ca, la, ua, da, fa, pa, ma = e(() => {
    a(), U(), x(), o(), ea = [`hNQzshAk6`, `UmxCqzYFZ`, `K2iGUegb2`, `Q9QlwiqVu`], ta = `framer-tTHmG`, na = {
        hNQzshAk6: `framer-v-de601n`,
        K2iGUegb2: `framer-v-5c8md1`,
        Q9QlwiqVu: `framer-v-ttkoj2`,
        UmxCqzYFZ: `framer-v-1urj4te`
    }, ra = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 270,
        type: `spring`
    }, ia = e => typeof e == `object` && e && typeof e.src == `string` ? e : typeof e == `string` ? {
        src: e
    } : void 0, aa = ({
        value: e,
        children: t
    }) => {
        let n = d(b),
            r = e ?? n.transition,
            i = f(() => ({
                ...n,
                transition: r
            }), [JSON.stringify(r)]);
        return l(b.Provider, {
            value: i,
            children: t
        })
    }, oa = C.create(_), sa = {
        "Desktop Default": `UmxCqzYFZ`,
        "Desktop Hover": `hNQzshAk6`,
        "Phone Default": `K2iGUegb2`,
        "Phone Tapped": `Q9QlwiqVu`
    }, ca = ({
        description: e,
        height: t,
        id: n,
        image: r,
        title: i,
        width: a,
        ...o
    }) => ({
        ...o,
        GEReXC71q: e ?? o.GEReXC71q ?? `feature films, documentaries, and other long-form video content`,
        HSYB8KLpc: i ?? o.HSYB8KLpc ?? `Film and Video Editing`,
        variant: sa[o.variant] ?? o.variant ?? `hNQzshAk6`,
        y1DNXPRRS: r ?? o.y1DNXPRRS ?? {
            pixelHeight: 3648,
            pixelWidth: 5398,
            src: `https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=1024`,
            srcSet: `https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=4096 4096w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg 5398w`
        }
    }), la = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), ua = n(function (e, t) {
        let n = u(null),
            r = t ?? n,
            a = i(),
            {
                activeLocale: o,
                setLocale: s
            } = Y(),
            c = G(),
            {
                style: d,
                className: f,
                layoutId: p,
                variant: h,
                HSYB8KLpc: g,
                GEReXC71q: v,
                y1DNXPRRS: b,
                ...x
            } = ca(e),
            {
                baseVariant: S,
                classNames: w,
                clearLoadingGesture: T,
                gestureHandlers: E,
                gestureVariant: D,
                isLoading: O,
                setGestureState: A,
                setVariant: j,
                variants: M
            } = X({
                cycleOrder: ea,
                defaultVariant: `hNQzshAk6`,
                ref: r,
                variant: h,
                variantClassNames: na
            }),
            P = la(e, M),
            {
                activeVariantCallback: F,
                delay: I
            } = W(S),
            R = F(async (...e) => {
                A({
                    isHovered: !0
                }), j(`UmxCqzYFZ`)
            }),
            z = F(async (...e) => {
                A({
                    isHovered: !1
                }), j(`UmxCqzYFZ`)
            }),
            B = F(async (...e) => {
                A({
                    isHovered: !0
                }), j(`hNQzshAk6`)
            }),
            H = F(async (...e) => {
                A({
                    isPressed: !1
                }), j(`Q9QlwiqVu`)
            }),
            U = F(async (...e) => {
                A({
                    isPressed: !1
                }), j(`K2iGUegb2`)
            }),
            K = [],
            q = L(ta, ...K),
            J = () => ![`K2iGUegb2`, `Q9QlwiqVu`].includes(S),
            ee = () => S !== `UmxCqzYFZ`;
        return l(y, {
            id: p ?? a,
            children: l(oa, {
                animate: M,
                initial: !1,
                children: l(aa, {
                    value: ra,
                    children: m(C.div, {
                        ...x,
                        ...E,
                        className: L(q, `framer-de601n`, f, w),
                        "data-border": !0,
                        "data-framer-name": `Desktop Hover`,
                        "data-highlight": !0,
                        layoutDependency: P,
                        layoutId: `hNQzshAk6`,
                        onMouseEnter: R,
                        onMouseLeave: z,
                        ref: r,
                        style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgba(255, 255, 255, 0.3))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backdropFilter: `blur(10px)`,
                            borderBottomLeftRadius: 30,
                            borderBottomRightRadius: 30,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            WebkitBackdropFilter: `blur(10px)`,
                            ...d
                        },
                        variants: {
                            K2iGUegb2: {
                                "--border-color": `rgba(255, 255, 255, 0)`,
                                borderBottomLeftRadius: 15,
                                borderBottomRightRadius: 15,
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15
                            },
                            Q9QlwiqVu: {
                                "--border-color": `rgba(255, 255, 255, 0)`,
                                borderBottomLeftRadius: 15,
                                borderBottomRightRadius: 15,
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15
                            },
                            UmxCqzYFZ: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`
                            }
                        },
                        ...$i({
                            K2iGUegb2: {
                                "data-framer-name": `Phone Default`,
                                onMouseEnter: void 0,
                                onMouseLeave: void 0,
                                onTap: H
                            },
                            Q9QlwiqVu: {
                                "data-framer-name": `Phone Tapped`,
                                onMouseEnter: void 0,
                                onMouseLeave: void 0,
                                onTap: U
                            },
                            UmxCqzYFZ: {
                                "data-framer-name": `Desktop Default`,
                                onMouseEnter: B,
                                onMouseLeave: void 0
                            }
                        }, S, D),
                        children: [J() && l(C.div, {
                            className: `framer-1v7jrf0`,
                            "data-framer-name": `Glass Effect`,
                            layoutDependency: P,
                            layoutId: `NqDixAWhc`,
                            style: {
                                backdropFilter: `blur(5px)`,
                                rotate: 9,
                                WebkitBackdropFilter: `blur(5px)`
                            },
                            children: l(C.div, {
                                className: `framer-z70vss`,
                                layoutDependency: P,
                                layoutId: `te0CFpkyN`,
                                style: {
                                    backdropFilter: `blur(0px)`,
                                    background: `linear-gradient(114deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)`,
                                    backgroundColor: `rgb(255, 255, 255)`,
                                    opacity: .12,
                                    WebkitBackdropFilter: `blur(0px)`
                                },
                                variants: {
                                    UmxCqzYFZ: {
                                        background: `linear-gradient(114deg, rgb(255, 255, 255) 47.74774774774775%, rgba(255, 255, 255, 0.08) 50.819488890785856%)`,
                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                        opacity: .17
                                    }
                                }
                            })
                        }), l(C.div, {
                            className: `framer-1owzavv`,
                            "data-framer-name": `Title Wrapper`,
                            layoutDependency: P,
                            layoutId: `bx9KZOOCC`,
                            children: l(N, {
                                __fromCanvasComponent: !0,
                                children: l(_, {
                                    children: l(C.h3, {
                                        style: {
                                            "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                            "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                            "--framer-font-size": `26px`,
                                            "--framer-letter-spacing": `-0.05em`,
                                            "--framer-line-height": `1.5em`,
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-a0htzi, rgb(255, 255, 255))`
                                        },
                                        children: `Film and Video Editing`
                                    })
                                }),
                                className: `framer-18oqbql`,
                                fonts: [`CUSTOM;SF Compact Rounded Semibold`],
                                layoutDependency: P,
                                layoutId: `E64CYcreR`,
                                style: {
                                    "--extracted-a0htzi": `rgb(255, 255, 255)`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                    textShadow: `none`
                                },
                                text: g,
                                variants: {
                                    K2iGUegb2: {
                                        "--extracted-a0htzi": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                        textShadow: `0px 1px 10px rgba(0, 0, 0, 0.4)`
                                    },
                                    Q9QlwiqVu: {
                                        "--extracted-a0htzi": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                        textShadow: `none`
                                    },
                                    UmxCqzYFZ: {
                                        "--extracted-a0htzi": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`
                                    }
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...$i({
                                    K2iGUegb2: {
                                        children: l(_, {
                                            children: l(C.h3, {
                                                style: {
                                                    "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                                    "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                                    "--framer-font-size": `26px`,
                                                    "--framer-letter-spacing": `-0.05em`,
                                                    "--framer-line-height": `1.5em`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                                },
                                                children: l(C.span, {
                                                    "data-text-fill": `true`,
                                                    style: {
                                                        backgroundImage: `linear-gradient(93deg, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)) 42.494226327944574%, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)) 100%)`
                                                    },
                                                    children: `Film and Video Editing`
                                                })
                                            })
                                        })
                                    },
                                    Q9QlwiqVu: {
                                        children: l(_, {
                                            children: l(C.h3, {
                                                style: {
                                                    "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                                    "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                                    "--framer-font-size": `26px`,
                                                    "--framer-letter-spacing": `-0.05em`,
                                                    "--framer-line-height": `1.5em`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                                },
                                                children: `Film and Video Editing`
                                            })
                                        })
                                    },
                                    UmxCqzYFZ: {
                                        children: l(_, {
                                            children: l(C.h3, {
                                                style: {
                                                    "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                                    "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                                    "--framer-font-size": `26px`,
                                                    "--framer-letter-spacing": `-0.05em`,
                                                    "--framer-line-height": `1.5em`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                                },
                                                children: `Creators and Gamers`
                                            })
                                        }),
                                        text: void 0
                                    }
                                }, S, D)
                            })
                        }), l(N, {
                            __fromCanvasComponent: !0,
                            children: l(_, {
                                children: l(C.p, {
                                    style: {
                                        "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                        "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                        "--framer-font-size": `20px`,
                                        "--framer-line-height": `1.5em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))`
                                    },
                                    children: `feature films, documentaries, and other long-form video content`
                                })
                            }),
                            className: `framer-rom53a`,
                            "data-framer-name": `Content`,
                            fonts: [`CUSTOM;SF Compact Rounded Semibold`],
                            layoutDependency: P,
                            layoutId: `lIq43HOiO`,
                            style: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.8)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                opacity: 1,
                                textShadow: `none`
                            },
                            text: v,
                            variants: {
                                K2iGUegb2: {
                                    "--extracted-r6o4lv": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                    opacity: 1,
                                    textShadow: `0px 2px 23px rgba(0, 0, 0, 0.55)`
                                },
                                Q9QlwiqVu: {
                                    opacity: 1,
                                    textShadow: `none`
                                },
                                UmxCqzYFZ: {
                                    opacity: 0
                                }
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...$i({
                                K2iGUegb2: {
                                    children: l(_, {
                                        children: l(C.p, {
                                            style: {
                                                "--font-selector": `R0Y7SW50ZXItcmVndWxhcg==`,
                                                "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                "--framer-font-size": `14px`,
                                                "--framer-letter-spacing": `-0.04em`,
                                                "--framer-line-height": `1.5em`,
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                            },
                                            children: `Learn More →`
                                        })
                                    }),
                                    fonts: [`GF;Inter-regular`],
                                    text: void 0
                                }
                            }, S, D)
                        }), m(C.div, {
                            className: `framer-kjkuur`,
                            "data-framer-name": `Image Wrapper`,
                            layoutDependency: P,
                            layoutId: `MBQvZQjQJ`,
                            style: {
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0
                            },
                            variants: {
                                K2iGUegb2: {
                                    borderBottomLeftRadius: 20,
                                    borderBottomRightRadius: 20,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20
                                },
                                Q9QlwiqVu: {
                                    borderBottomLeftRadius: 20,
                                    borderBottomRightRadius: 20,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20
                                }
                            },
                            children: [l(k, {
                                background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 3648,
                                    intrinsicWidth: 5398,
                                    loading: V((c ?.y || 0) + ((c ?.height || 376) * .5000000000000002 - (c ?.height || 376) * 1 / 2) + ((c ?.height || 376) * 1 * .4988610478359911 - ((c ?.height || 376) * 1 - 0) * .9977 / 2)),
                                    pixelHeight: 3648,
                                    pixelWidth: 5398,
                                    sizes: `calc(${c?.width||`100vw`} * 0.9983)`,
                                    ...ia(b)
                                },
                                className: `framer-1vat0lt`,
                                "data-framer-name": `Image`,
                                layoutDependency: P,
                                layoutId: `vYGGdPMYP`,
                                style: {
                                    filter: `none`,
                                    WebkitFilter: `none`
                                },
                                variants: {
                                    K2iGUegb2: {
                                        filter: `brightness(1)`,
                                        WebkitFilter: `brightness(1)`
                                    },
                                    Q9QlwiqVu: {
                                        filter: `brightness(1)`,
                                        WebkitFilter: `brightness(1)`
                                    }
                                },
                                ...$i({
                                    K2iGUegb2: {
                                        background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 3648,
                                            intrinsicWidth: 5398,
                                            loading: V((c ?.y || 0) + ((c ?.height || 200) * .5000000000000002 - (c ?.height || 200) * 1 / 2) + ((c ?.height || 200) * 1 * .5000000000000002 - ((c ?.height || 200) * 1 - 0) * 1 / 2)),
                                            pixelHeight: 3648,
                                            pixelWidth: 5398,
                                            sizes: c ?.width || `100vw`,
                                            ...ia(b)
                                        }
                                    },
                                    Q9QlwiqVu: {
                                        background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 3648,
                                            intrinsicWidth: 5398,
                                            loading: V((c ?.y || 0) + ((c ?.height || 200) * .5000000000000002 - (c ?.height || 200) * 1 / 2) + ((c ?.height || 200) * 1 * .49390243902439046 - ((c ?.height || 200) * 1 - 0) * 1.5 / 2)),
                                            pixelHeight: 3648,
                                            pixelWidth: 5398,
                                            sizes: `calc(${c?.width||`100vw`} * 1.5)`,
                                            ...ia(b)
                                        }
                                    },
                                    UmxCqzYFZ: {
                                        background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 3648,
                                            intrinsicWidth: 5398,
                                            loading: V((c ?.y || 0) + ((c ?.height || 376) * .5000000000000002 - (c ?.height || 376) * 1.0027 / 2) + ((c ?.height || 376) * 1.0027 * .4986737400530506 - ((c ?.height || 376) * 1.0027 - 0) * .9973 / 2)),
                                            pixelHeight: 3648,
                                            pixelWidth: 5398,
                                            sizes: `calc(${c?.width||`100vw`} * 1)`,
                                            ...ia(b)
                                        }
                                    }
                                }, S, D)
                            }), ee() && l(C.div, {
                                className: `framer-1602rnj`,
                                "data-framer-name": `Overlay`,
                                layoutDependency: P,
                                layoutId: `kKQdn7gBb`,
                                style: {
                                    backgroundColor: `rgba(0, 0, 0, 0.5)`,
                                    opacity: 1
                                },
                                variants: {
                                    K2iGUegb2: {
                                        opacity: 0
                                    },
                                    Q9QlwiqVu: {
                                        opacity: 1
                                    }
                                }
                            })]
                        })]
                    })
                })
            })
        })
    }), da = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-tTHmG.framer-nhctr2, .framer-tTHmG .framer-nhctr2 { display: block; }`, `.framer-tTHmG.framer-de601n { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; height: 376px; justify-content: space-between; overflow: hidden; padding: 40px; position: relative; width: 513px; will-change: var(--framer-will-change-override, transform); }`, `.framer-tTHmG .framer-1v7jrf0 { align-content: center; align-items: center; bottom: -59px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: -276px; top: -199px; width: 169px; }`, `.framer-tTHmG .framer-z70vss { flex: none; height: 100%; left: calc(50.11389521640094% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`, `.framer-tTHmG .framer-1owzavv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-tTHmG .framer-18oqbql { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`, `.framer-tTHmG .framer-rom53a { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-tTHmG .framer-kjkuur { flex: none; height: 100%; left: calc(50.097465886939595% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: -1; }`, `.framer-tTHmG .framer-1vat0lt { flex: none; height: 100%; left: calc(50.00000000000002% - 99.83277591973244% / 2); overflow: visible; position: absolute; top: calc(49.88610478359911% - 99.77220956719817% / 2); width: 100%; z-index: -1; }`, `.framer-tTHmG .framer-1602rnj { flex: none; height: 100%; left: calc(50.097465886939595% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`, `.framer-tTHmG.framer-v-1urj4te.framer-de601n { padding: 12px 40px 40px 20px; }`, `.framer-tTHmG.framer-v-1urj4te .framer-1v7jrf0 { bottom: -57px; left: -218px; right: unset; top: -201px; }`, `.framer-tTHmG.framer-v-1urj4te .framer-kjkuur { height: 100%; left: calc(50.097465886939595% - 100.19493177387915% / 2); top: calc(50.00000000000002% - 100.2659574468085% / 2); width: 100%; }`, `.framer-tTHmG.framer-v-1urj4te .framer-1vat0lt { height: 100%; left: calc(50.00000000000002% - 99.80544747081711% / 2); top: calc(49.86737400530506% - 99.73474801061008% / 2); width: 100%; }`, `.framer-tTHmG.framer-v-5c8md1.framer-de601n, .framer-tTHmG.framer-v-ttkoj2.framer-de601n { cursor: pointer; gap: 70px; height: 200px; justify-content: flex-start; padding: 20px; }`, `.framer-tTHmG.framer-v-5c8md1 .framer-kjkuur { left: calc(49.90253411306045% - 100% / 2); overflow: hidden; will-change: var(--framer-will-change-override, transform); }`, `.framer-tTHmG.framer-v-5c8md1 .framer-1vat0lt { height: 100%; left: calc(49.90253411306045% - 100% / 2); top: calc(50.00000000000002% - 100% / 2); width: 100%; }`, `.framer-tTHmG.framer-v-ttkoj2 .framer-1owzavv { order: 1; }`, `.framer-tTHmG.framer-v-ttkoj2 .framer-rom53a { order: 2; }`, `.framer-tTHmG.framer-v-ttkoj2 .framer-kjkuur { left: calc(49.90253411306045% - 100% / 2); order: 3; overflow: hidden; will-change: var(--framer-will-change-override, transform); }`, `.framer-tTHmG.framer-v-ttkoj2 .framer-1vat0lt { height: 150%; left: calc(49.90253411306045% - 150% / 2); top: calc(49.390243902439046% - 150% / 2); width: 150%; }`, `.framer-tTHmG[data-border="true"]::after, .framer-tTHmG [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`], fa = Z(ua, da, `framer-tTHmG`), pa = fa, fa.displayName = `Homepage - Category`, fa.defaultProps = {
        height: 376,
        width: 513
    }, I(fa, {
        variant: {
            options: [`hNQzshAk6`, `UmxCqzYFZ`, `K2iGUegb2`, `Q9QlwiqVu`],
            optionTitles: [`Desktop Hover`, `Desktop Default`, `Phone Default`, `Phone Tapped`],
            title: `Variant`,
            type: D.Enum
        },
        HSYB8KLpc: {
            defaultValue: `Film and Video Editing`,
            displayTextArea: !0,
            title: `Title`,
            type: D.String
        },
        GEReXC71q: {
            defaultValue: `feature films, documentaries, and other long-form video content`,
            displayTextArea: !0,
            title: `Description`,
            type: D.String
        },
        y1DNXPRRS: {
            __defaultAssetReference: `data:framer/asset-reference,KU8reFP90nuP1WlMgSloOnrcY.jpg?originalFilename=photo-1485846234645-a62644f84728%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHwyfHxmaWxtfGVufDB8fHx8MTY5NTQ3NjA1OXww%26ixlib%3Drb-4.0.jpg&preferredSize=auto`,
            title: `Image`,
            type: D.ResponsiveImage
        }
    }), F(fa, [{
        explicitInter: !0,
        fonts: [{
            family: `SF Compact Rounded Semibold`,
            source: `custom`,
            url: `https://framerusercontent.com/assets/CRNOcOM8NAYf5f6RmDbFrUUJqY8.otf`
        }, {
            family: `Inter`,
            source: `google`,
            style: `normal`,
            url: `https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZ1rib2Bg-4.woff2`,
            weight: `400`
        }]
    }], {
        supportsExplicitInterCodegen: !0
    })
});

function ha(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var ga, _a, va, ya, ba, xa, Sa, Ca, wa, Ta, Ea, Da, Oa, ka = e(() => {
    a(), U(), x(), o(), ga = [`nNDWW0Q0D`, `TjB_9fLr7`], _a = `framer-3KZCs`, va = {
        nNDWW0Q0D: `framer-v-qe23ng`,
        TjB_9fLr7: `framer-v-1eng780`
    }, ya = {
        delay: 0,
        duration: .6,
        ease: [.59, .42, .33, 1.02],
        type: `tween`
    }, ba = ({
        value: e,
        children: t
    }) => {
        let n = d(b),
            r = e ?? n.transition,
            i = f(() => ({
                ...n,
                transition: r
            }), [JSON.stringify(r)]);
        return l(b.Provider, {
            value: i,
            children: t
        })
    }, xa = C.create(_), Sa = {
        "Scroll down": `TjB_9fLr7`,
        "Scroll up": `nNDWW0Q0D`
    }, Ca = ({
        background: e,
        border: t,
        height: n,
        id: r,
        width: i,
        ...a
    }) => ({
        ...a,
        mYmZWnDfm: t ?? a.mYmZWnDfm ?? {
            borderColor: `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`,
            borderStyle: `solid`,
            borderWidth: 1
        },
        variant: Sa[a.variant] ?? a.variant ?? `nNDWW0Q0D`,
        xE7or5QVg: e ?? a.xE7or5QVg ?? `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`
    }), wa = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Ta = n(function (e, t) {
        let n = u(null),
            r = t ?? n,
            a = i(),
            {
                activeLocale: o,
                setLocale: s
            } = Y(),
            c = G(),
            {
                style: d,
                className: f,
                layoutId: p,
                variant: m,
                mYmZWnDfm: h,
                xE7or5QVg: g,
                ..._
            } = Ca(e),
            {
                baseVariant: v,
                classNames: b,
                clearLoadingGesture: x,
                gestureHandlers: S,
                gestureVariant: w,
                isLoading: T,
                setGestureState: E,
                setVariant: D,
                variants: O
            } = X({
                cycleOrder: ga,
                defaultVariant: `nNDWW0Q0D`,
                ref: r,
                variant: m,
                variantClassNames: va
            }),
            k = wa(e, O),
            {
                activeVariantCallback: A,
                delay: j
            } = W(v),
            M = A(async (...e) => {
                await j(() => D(`TjB_9fLr7`), 2e3)
            }),
            N = A(async (...e) => {
                await j(() => D(`nNDWW0Q0D`), 3e3)
            });
        re(v, {
            default: M,
            TjB_9fLr7: N
        });
        let P = [],
            F = L(_a, ...P);
        return l(y, {
            id: p ?? a,
            children: l(xa, {
                animate: O,
                initial: !1,
                children: l(ba, {
                    value: ya,
                    children: l(C.div, {
                        ..._,
                        ...S,
                        className: L(F, `framer-qe23ng`, f, b),
                        "data-border": !0,
                        "data-framer-name": `Scroll up`,
                        "data-highlight": !0,
                        layoutDependency: k,
                        layoutId: `nNDWW0Q0D`,
                        ref: r,
                        style: {
                            "--border-bottom-width": (h.borderBottomWidth ?? h.borderWidth) + `px`,
                            "--border-color": h.borderColor,
                            "--border-left-width": (h.borderLeftWidth ?? h.borderWidth) + `px`,
                            "--border-right-width": (h.borderRightWidth ?? h.borderWidth) + `px`,
                            "--border-style": h.borderStyle,
                            "--border-top-width": (h.borderTopWidth ?? h.borderWidth) + `px`,
                            borderBottomLeftRadius: 100,
                            borderBottomRightRadius: 100,
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                            ...d
                        },
                        ...ha({
                            TjB_9fLr7: {
                                "data-framer-name": `Scroll down`
                            }
                        }, v, w),
                        children: l(C.div, {
                            className: `framer-1mx51vr`,
                            "data-framer-name": `Line`,
                            layoutDependency: k,
                            layoutId: `tIiwLf63d`,
                            style: {
                                backgroundColor: g,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }
                        })
                    })
                })
            })
        })
    }), Ea = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-3KZCs.framer-1qot73h, .framer-3KZCs .framer-1qot73h { display: block; }`, `.framer-3KZCs.framer-qe23ng { height: 32px; overflow: visible; position: relative; width: 20px; }`, `.framer-3KZCs .framer-1mx51vr { flex: none; height: 6px; left: calc(50.00000000000002% - 2px / 2); overflow: hidden; position: absolute; top: 6px; width: 2px; will-change: var(--framer-will-change-override, transform); }`, `.framer-3KZCs.framer-v-1eng780 .framer-1mx51vr { bottom: 6px; height: 5px; top: unset; }`, `.framer-3KZCs[data-border="true"]::after, .framer-3KZCs [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`], Da = Z(Ta, Ea, `framer-3KZCs`), Oa = Da, Da.displayName = `Scroll`, Da.defaultProps = {
        height: 32,
        width: 20
    }, I(Da, {
        variant: {
            options: [`nNDWW0Q0D`, `TjB_9fLr7`],
            optionTitles: [`Scroll up`, `Scroll down`],
            title: `Variant`,
            type: D.Enum
        },
        mYmZWnDfm: {
            defaultValue: {
                borderColor: `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`,
                borderStyle: `solid`,
                borderWidth: 1
            },
            title: `Border`,
            type: D.Border
        },
        xE7or5QVg: {
            defaultValue: `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`,
            title: `Background`,
            type: D.Color
        }
    }), F(Da, [{
        explicitInter: !0,
        fonts: []
    }], {
        supportsExplicitInterCodegen: !0
    })
});

function Aa(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var ja, Ma, Na, Pa, Fa, Ia, La, Ra, za, Ba, Va, Ha, Ua, Wa, Ga = e(() => {
    a(), U(), x(), o(), ja = [`c3hgaf0WY`, `JFcIDzf0L`, `LQT7ma4Cm`, `MIiujSAgP`], Ma = `framer-BWvqH`, Na = {
        c3hgaf0WY: `framer-v-1a9k31j`,
        JFcIDzf0L: `framer-v-j49gjb`,
        LQT7ma4Cm: `framer-v-1cfkk39`,
        MIiujSAgP: `framer-v-1p20sly`
    }, Pa = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 270,
        type: `spring`
    }, Fa = e => typeof e == `object` && e && typeof e.src == `string` ? e : typeof e == `string` ? {
        src: e
    } : void 0, Ia = ({
        value: e,
        children: t
    }) => {
        let n = d(b),
            r = e ?? n.transition,
            i = f(() => ({
                ...n,
                transition: r
            }), [JSON.stringify(r)]);
        return l(b.Provider, {
            value: i,
            children: t
        })
    }, La = C.create(_), Ra = {
        "Desktop Default": `JFcIDzf0L`,
        "Desktop Hover": `c3hgaf0WY`,
        "Phone Default": `LQT7ma4Cm`,
        "Phone Tapped": `MIiujSAgP`
    }, za = ({
        description: e,
        height: t,
        id: n,
        image: r,
        title: i,
        width: a,
        ...o
    }) => ({
        ...o,
        GEReXC71q: e ?? o.GEReXC71q ?? `feature films, documentaries, and other long-form video content`,
        HSYB8KLpc: i ?? o.HSYB8KLpc ?? `Film and Video Editing`,
        variant: Ra[o.variant] ?? o.variant ?? `c3hgaf0WY`,
        y1DNXPRRS: r ?? o.y1DNXPRRS ?? {
            pixelHeight: 3648,
            pixelWidth: 5398,
            src: `https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=1024`,
            srcSet: `https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg?scale-down-to=4096 4096w,https://framerusercontent.com/images/KU8reFP90nuP1WlMgSloOnrcY.jpg 5398w`
        }
    }), Ba = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Va = n(function (e, t) {
        let n = u(null),
            r = t ?? n,
            a = i(),
            {
                activeLocale: o,
                setLocale: s
            } = Y(),
            c = G(),
            {
                style: d,
                className: f,
                layoutId: p,
                variant: h,
                HSYB8KLpc: g,
                GEReXC71q: v,
                y1DNXPRRS: b,
                ...x
            } = za(e),
            {
                baseVariant: S,
                classNames: w,
                clearLoadingGesture: T,
                gestureHandlers: E,
                gestureVariant: D,
                isLoading: O,
                setGestureState: A,
                setVariant: j,
                variants: M
            } = X({
                cycleOrder: ja,
                defaultVariant: `c3hgaf0WY`,
                ref: r,
                variant: h,
                variantClassNames: Na
            }),
            P = Ba(e, M),
            {
                activeVariantCallback: F,
                delay: I
            } = W(S),
            R = F(async (...e) => {
                A({
                    isHovered: !0
                }), j(`JFcIDzf0L`)
            }),
            z = F(async (...e) => {
                A({
                    isHovered: !1
                }), j(`JFcIDzf0L`)
            }),
            B = F(async (...e) => {
                A({
                    isHovered: !0
                }), j(`c3hgaf0WY`)
            }),
            H = F(async (...e) => {
                A({
                    isPressed: !1
                }), j(`MIiujSAgP`)
            }),
            U = F(async (...e) => {
                A({
                    isPressed: !1
                }), j(`LQT7ma4Cm`)
            }),
            K = [],
            q = L(Ma, ...K),
            J = () => ![`LQT7ma4Cm`, `MIiujSAgP`].includes(S),
            ee = () => S !== `JFcIDzf0L`;
        return l(y, {
            id: p ?? a,
            children: l(La, {
                animate: M,
                initial: !1,
                children: l(Ia, {
                    value: Pa,
                    children: m(C.div, {
                        ...x,
                        ...E,
                        className: L(q, `framer-1a9k31j`, f, w),
                        "data-border": !0,
                        "data-framer-name": `Desktop Hover`,
                        "data-highlight": !0,
                        layoutDependency: P,
                        layoutId: `c3hgaf0WY`,
                        onMouseEnter: R,
                        onMouseLeave: z,
                        ref: r,
                        style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgba(255, 255, 255, 0.3))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backdropFilter: `blur(10px)`,
                            background: `radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.1) 2.210024196147939%, rgba(255, 255, 255, 0) 100%)`,
                            borderBottomLeftRadius: 30,
                            borderBottomRightRadius: 30,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            WebkitBackdropFilter: `blur(10px)`,
                            ...d
                        },
                        variants: {
                            JFcIDzf0L: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`
                            },
                            LQT7ma4Cm: {
                                "--border-color": `rgba(255, 255, 255, 0)`,
                                borderBottomLeftRadius: 15,
                                borderBottomRightRadius: 15,
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15
                            },
                            MIiujSAgP: {
                                "--border-color": `rgba(255, 255, 255, 0)`,
                                borderBottomLeftRadius: 15,
                                borderBottomRightRadius: 15,
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15
                            }
                        },
                        ...Aa({
                            JFcIDzf0L: {
                                "data-framer-name": `Desktop Default`,
                                onMouseEnter: B,
                                onMouseLeave: void 0
                            },
                            LQT7ma4Cm: {
                                "data-framer-name": `Phone Default`,
                                onMouseEnter: void 0,
                                onMouseLeave: void 0,
                                onTap: H
                            },
                            MIiujSAgP: {
                                "data-framer-name": `Phone Tapped`,
                                onMouseEnter: void 0,
                                onMouseLeave: void 0,
                                onTap: U
                            }
                        }, S, D),
                        children: [J() && l(C.div, {
                            className: `framer-1ls5nuk`,
                            "data-framer-name": `Glass Effect`,
                            layoutDependency: P,
                            layoutId: `v0lD9rRIz`,
                            style: {
                                backdropFilter: `blur(5px)`,
                                rotate: 9,
                                WebkitBackdropFilter: `blur(5px)`
                            },
                            children: l(C.div, {
                                className: `framer-14y9ua7`,
                                layoutDependency: P,
                                layoutId: `mLoQIQg2b`,
                                style: {
                                    backdropFilter: `blur(0px)`,
                                    background: `linear-gradient(114deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)`,
                                    backgroundColor: `rgb(255, 255, 255)`,
                                    opacity: .12,
                                    WebkitBackdropFilter: `blur(0px)`
                                },
                                variants: {
                                    JFcIDzf0L: {
                                        background: `linear-gradient(114deg, rgb(255, 255, 255) 47.74774774774775%, rgba(255, 255, 255, 0.08) 50.819488890785856%)`,
                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                        opacity: .17
                                    }
                                }
                            })
                        }), l(C.div, {
                            className: `framer-1px8j6`,
                            "data-framer-name": `Title Wrapper`,
                            layoutDependency: P,
                            layoutId: `rdY7ysuGC`,
                            children: l(N, {
                                __fromCanvasComponent: !0,
                                children: l(_, {
                                    children: l(C.h3, {
                                        style: {
                                            "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                            "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                            "--framer-font-size": `26px`,
                                            "--framer-letter-spacing": `-0.05em`,
                                            "--framer-line-height": `1.5em`,
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-a0htzi, rgb(255, 255, 255))`
                                        },
                                        children: `Film and Video Editing`
                                    })
                                }),
                                className: `framer-1xbrgsn`,
                                fonts: [`CUSTOM;SF Compact Rounded Semibold`],
                                layoutDependency: P,
                                layoutId: `Tqn_VKvZZ`,
                                style: {
                                    "--extracted-a0htzi": `rgb(255, 255, 255)`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                    textShadow: `none`
                                },
                                text: g,
                                variants: {
                                    LQT7ma4Cm: {
                                        "--extracted-a0htzi": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                        textShadow: `0px 1px 10px rgba(0, 0, 0, 0.4)`
                                    },
                                    MIiujSAgP: {
                                        "--extracted-a0htzi": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                        textShadow: `none`
                                    }
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Aa({
                                    JFcIDzf0L: {
                                        children: l(_, {
                                            children: l(C.h3, {
                                                style: {
                                                    "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                                    "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                                    "--framer-font-size": `26px`,
                                                    "--framer-letter-spacing": `-0.05em`,
                                                    "--framer-line-height": `1.5em`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--extracted-a0htzi, rgb(255, 255, 255))`
                                                },
                                                children: l(C.span, {
                                                    "data-text-fill": `true`,
                                                    style: {
                                                        backgroundImage: `linear-gradient(93deg, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)) 42.494226327944574%, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)) 100%)`
                                                    },
                                                    children: `Film and Video Editing`
                                                })
                                            })
                                        })
                                    },
                                    LQT7ma4Cm: {
                                        children: l(_, {
                                            children: l(C.h3, {
                                                style: {
                                                    "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                                    "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                                    "--framer-font-size": `26px`,
                                                    "--framer-letter-spacing": `-0.05em`,
                                                    "--framer-line-height": `1.5em`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                                },
                                                children: l(C.span, {
                                                    "data-text-fill": `true`,
                                                    style: {
                                                        backgroundImage: `linear-gradient(93deg, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)) 42.494226327944574%, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)) 100%)`
                                                    },
                                                    children: `Film and Video Editing`
                                                })
                                            })
                                        })
                                    },
                                    MIiujSAgP: {
                                        children: l(_, {
                                            children: l(C.h3, {
                                                style: {
                                                    "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                                    "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                                    "--framer-font-size": `26px`,
                                                    "--framer-letter-spacing": `-0.05em`,
                                                    "--framer-line-height": `1.5em`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--extracted-a0htzi, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                                },
                                                children: `Film and Video Editing`
                                            })
                                        })
                                    }
                                }, S, D)
                            })
                        }), l(N, {
                            __fromCanvasComponent: !0,
                            children: l(_, {
                                children: l(C.p, {
                                    style: {
                                        "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                        "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                        "--framer-font-size": `20px`,
                                        "--framer-line-height": `1.5em`,
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d9d01f21-7a47-443c-a8bc-56cdb453de6f, rgba(255, 255, 255, 0.8)))`
                                    },
                                    children: `feature films, documentaries, and other long-form video content`
                                })
                            }),
                            className: `framer-2f64h1`,
                            "data-framer-name": `Content`,
                            fonts: [`CUSTOM;SF Compact Rounded Semibold`],
                            layoutDependency: P,
                            layoutId: `nOSUFW9tX`,
                            style: {
                                "--extracted-r6o4lv": `var(--token-d9d01f21-7a47-443c-a8bc-56cdb453de6f, rgba(255, 255, 255, 0.8))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                opacity: 1,
                                textShadow: `none`
                            },
                            text: v,
                            variants: {
                                JFcIDzf0L: {
                                    opacity: 0
                                },
                                LQT7ma4Cm: {
                                    "--extracted-r6o4lv": `var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))`,
                                    opacity: 1,
                                    textShadow: `0px 2px 23px rgba(0, 0, 0, 0.55)`
                                },
                                MIiujSAgP: {
                                    opacity: 1,
                                    textShadow: `none`
                                }
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...Aa({
                                LQT7ma4Cm: {
                                    children: l(_, {
                                        children: l(C.p, {
                                            style: {
                                                "--font-selector": `R0Y7SW50ZXItcmVndWxhcg==`,
                                                "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                "--framer-font-size": `14px`,
                                                "--framer-letter-spacing": `-0.04em`,
                                                "--framer-line-height": `1.5em`,
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))`
                                            },
                                            children: `Learn More →`
                                        })
                                    }),
                                    fonts: [`GF;Inter-regular`],
                                    text: void 0
                                }
                            }, S, D)
                        }), m(C.div, {
                            className: `framer-1mpd0aw`,
                            "data-framer-name": `Image Wrapper`,
                            layoutDependency: P,
                            layoutId: `gUnkI92ov`,
                            style: {
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0
                            },
                            variants: {
                                LQT7ma4Cm: {
                                    borderBottomLeftRadius: 20,
                                    borderBottomRightRadius: 20,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20
                                },
                                MIiujSAgP: {
                                    borderBottomLeftRadius: 20,
                                    borderBottomRightRadius: 20,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20
                                }
                            },
                            children: [l(k, {
                                background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 3648,
                                    intrinsicWidth: 5398,
                                    loading: V((c ?.y || 0) + ((c ?.height || 376) * .5000000000000002 - (c ?.height || 376) * 1 / 2) + ((c ?.height || 376) * 1 * .4988610478359911 - ((c ?.height || 376) * 1 - 0) * .9977 / 2)),
                                    pixelHeight: 3648,
                                    pixelWidth: 5398,
                                    sizes: `calc(${c?.width||`100vw`} * 0.9983)`,
                                    ...Fa(b)
                                },
                                className: `framer-177o3gx`,
                                "data-framer-name": `Image`,
                                layoutDependency: P,
                                layoutId: `uEGlKUxKi`,
                                style: {
                                    filter: `none`,
                                    WebkitFilter: `none`
                                },
                                variants: {
                                    LQT7ma4Cm: {
                                        filter: `brightness(1)`,
                                        WebkitFilter: `brightness(1)`
                                    },
                                    MIiujSAgP: {
                                        filter: `brightness(1)`,
                                        WebkitFilter: `brightness(1)`
                                    }
                                },
                                ...Aa({
                                    JFcIDzf0L: {
                                        background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 3648,
                                            intrinsicWidth: 5398,
                                            loading: V((c ?.y || 0) + ((c ?.height || 376) * .5000000000000002 - (c ?.height || 376) * 1.0027 / 2) + ((c ?.height || 376) * 1.0027 * .4986737400530506 - ((c ?.height || 376) * 1.0027 - 0) * .9973 / 2)),
                                            pixelHeight: 3648,
                                            pixelWidth: 5398,
                                            sizes: `calc(${c?.width||`100vw`} * 1)`,
                                            ...Fa(b)
                                        }
                                    },
                                    LQT7ma4Cm: {
                                        background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 3648,
                                            intrinsicWidth: 5398,
                                            loading: V((c ?.y || 0) + ((c ?.height || 200) * .5000000000000002 - (c ?.height || 200) * 1 / 2) + ((c ?.height || 200) * 1 * .5000000000000002 - ((c ?.height || 200) * 1 - 0) * 1 / 2)),
                                            pixelHeight: 3648,
                                            pixelWidth: 5398,
                                            sizes: c ?.width || `100vw`,
                                            ...Fa(b)
                                        }
                                    },
                                    MIiujSAgP: {
                                        background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 3648,
                                            intrinsicWidth: 5398,
                                            loading: V((c ?.y || 0) + ((c ?.height || 200) * .5000000000000002 - (c ?.height || 200) * 1 / 2) + ((c ?.height || 200) * 1 * .49390243902439046 - ((c ?.height || 200) * 1 - 0) * 1.5 / 2)),
                                            pixelHeight: 3648,
                                            pixelWidth: 5398,
                                            sizes: `calc(${c?.width||`100vw`} * 1.5)`,
                                            ...Fa(b)
                                        }
                                    }
                                }, S, D)
                            }), ee() && l(C.div, {
                                className: `framer-7k49i1`,
                                "data-framer-name": `Overlay`,
                                layoutDependency: P,
                                layoutId: `GbjesNyUb`,
                                style: {
                                    backgroundColor: `rgba(0, 0, 0, 0.5)`,
                                    opacity: 1
                                },
                                variants: {
                                    LQT7ma4Cm: {
                                        opacity: 0
                                    },
                                    MIiujSAgP: {
                                        opacity: 1
                                    }
                                }
                            })]
                        })]
                    })
                })
            })
        })
    }), Ha = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-BWvqH.framer-1t4juc3, .framer-BWvqH .framer-1t4juc3 { display: block; }`, `.framer-BWvqH.framer-1a9k31j { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; height: 376px; justify-content: space-between; overflow: hidden; padding: 40px; position: relative; width: 513px; will-change: var(--framer-will-change-override, transform); }`, `.framer-BWvqH .framer-1ls5nuk { align-content: center; align-items: center; bottom: -59px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: -276px; top: -199px; width: 169px; }`, `.framer-BWvqH .framer-14y9ua7 { flex: none; height: 100%; left: calc(50.11389521640094% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`, `.framer-BWvqH .framer-1px8j6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-BWvqH .framer-1xbrgsn { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`, `.framer-BWvqH .framer-2f64h1 { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-BWvqH .framer-1mpd0aw { flex: none; height: 100%; left: calc(50.097465886939595% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: -1; }`, `.framer-BWvqH .framer-177o3gx { flex: none; height: 100%; left: calc(50.00000000000002% - 99.83277591973244% / 2); overflow: visible; position: absolute; top: calc(49.88610478359911% - 99.77220956719817% / 2); width: 100%; z-index: -1; }`, `.framer-BWvqH .framer-7k49i1 { flex: none; height: 100%; left: calc(50.097465886939595% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`, `.framer-BWvqH.framer-v-j49gjb.framer-1a9k31j { padding: 12px 40px 40px 20px; }`, `.framer-BWvqH.framer-v-j49gjb .framer-1ls5nuk { bottom: -57px; left: -218px; right: unset; top: -201px; }`, `.framer-BWvqH.framer-v-j49gjb .framer-1mpd0aw { height: 100%; left: calc(50.097465886939595% - 100.19493177387915% / 2); top: calc(50.00000000000002% - 100.2659574468085% / 2); width: 100%; }`, `.framer-BWvqH.framer-v-j49gjb .framer-177o3gx { height: 100%; left: calc(50.00000000000002% - 99.80544747081711% / 2); top: calc(49.86737400530506% - 99.73474801061008% / 2); width: 100%; }`, `.framer-BWvqH.framer-v-1cfkk39.framer-1a9k31j, .framer-BWvqH.framer-v-1p20sly.framer-1a9k31j { cursor: pointer; gap: 70px; height: 200px; justify-content: flex-start; padding: 20px; }`, `.framer-BWvqH.framer-v-1cfkk39 .framer-1mpd0aw { left: calc(49.90253411306045% - 100% / 2); overflow: hidden; will-change: var(--framer-will-change-override, transform); }`, `.framer-BWvqH.framer-v-1cfkk39 .framer-177o3gx { height: 100%; left: calc(49.90253411306045% - 100% / 2); top: calc(50.00000000000002% - 100% / 2); width: 100%; }`, `.framer-BWvqH.framer-v-1p20sly .framer-1px8j6 { order: 1; }`, `.framer-BWvqH.framer-v-1p20sly .framer-2f64h1 { order: 2; }`, `.framer-BWvqH.framer-v-1p20sly .framer-1mpd0aw { left: calc(49.90253411306045% - 100% / 2); order: 3; overflow: hidden; will-change: var(--framer-will-change-override, transform); }`, `.framer-BWvqH.framer-v-1p20sly .framer-177o3gx { height: 150%; left: calc(49.90253411306045% - 150% / 2); top: calc(49.390243902439046% - 150% / 2); width: 150%; }`, `.framer-BWvqH[data-border="true"]::after, .framer-BWvqH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`], Ua = Z(Va, Ha, `framer-BWvqH`), Wa = Ua, Ua.displayName = `Homepage - Category 2`, Ua.defaultProps = {
        height: 376,
        width: 513
    }, I(Ua, {
        variant: {
            options: [`c3hgaf0WY`, `JFcIDzf0L`, `LQT7ma4Cm`, `MIiujSAgP`],
            optionTitles: [`Desktop Hover`, `Desktop Default`, `Phone Default`, `Phone Tapped`],
            title: `Variant`,
            type: D.Enum
        },
        HSYB8KLpc: {
            defaultValue: `Film and Video Editing`,
            description: ``,
            displayTextArea: !0,
            title: `Title`,
            type: D.String
        },
        GEReXC71q: {
            defaultValue: `feature films, documentaries, and other long-form video content`,
            displayTextArea: !0,
            title: `Description`,
            type: D.String
        },
        y1DNXPRRS: {
            __defaultAssetReference: `data:framer/asset-reference,KU8reFP90nuP1WlMgSloOnrcY.jpg?originalFilename=photo-1485846234645-a62644f84728%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHwyfHxmaWxtfGVufDB8fHx8MTY5NTQ3NjA1OXww%26ixlib%3Drb-4.0.jpg&preferredSize=auto`,
            title: `Image`,
            type: D.ResponsiveImage
        }
    }), F(Ua, [{
        explicitInter: !0,
        fonts: [{
            family: `SF Compact Rounded Semibold`,
            source: `custom`,
            url: `https://framerusercontent.com/assets/CRNOcOM8NAYf5f6RmDbFrUUJqY8.otf`
        }, {
            family: `Inter`,
            source: `google`,
            style: `normal`,
            url: `https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZ1rib2Bg-4.woff2`,
            weight: `400`
        }]
    }], {
        supportsExplicitInterCodegen: !0
    })
});

function Ka(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var qa, Ja, Ya, Xa, Za, Qa, $a, eo, to, no, ro, io, ao, oo, so, co, lo, uo, fo, po, mo, ho = e(() => {
        a(), U(), x(), o(), qa = oe(ae(C.div)), Ja = oe(ae(k)), Ya = [`CBZjcz08x`, `HV86y6Qnk`], Xa = `framer-QQw0T`, Za = {
            CBZjcz08x: `framer-v-1ad52vp`,
            HV86y6Qnk: `framer-v-121wn5j`
        }, Qa = {
            bounce: .2,
            delay: 0,
            duration: .4,
            type: `spring`
        }, $a = {
            damping: 30,
            delay: 0,
            mass: 1,
            stiffness: 60,
            type: `spring`
        }, eo = {
            opacity: 1,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            transition: $a,
            x: 0,
            y: 0
        }, to = {
            opacity: .001,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1.1,
            skewX: 0,
            skewY: 0,
            x: 0,
            y: 0
        }, no = {
            damping: 33,
            delay: .2,
            mass: .1,
            stiffness: 70,
            type: `spring`
        }, ro = {
            opacity: 1,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            transition: no,
            x: 0,
            y: 0
        }, io = {
            opacity: .001,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            x: 0,
            y: 60
        }, ao = ({
            value: e,
            children: t
        }) => {
            let n = d(b),
                r = e ?? n.transition,
                i = f(() => ({
                    ...n,
                    transition: r
                }), [JSON.stringify(r)]);
            return l(b.Provider, {
                value: i,
                children: t
            })
        }, oo = C.create(_), so = {
            Desktop: `CBZjcz08x`,
            Mobile: `HV86y6Qnk`
        }, co = ({
            height: e,
            id: t,
            width: n,
            ...r
        }) => ({
            ...r,
            variant: so[r.variant] ?? r.variant ?? `CBZjcz08x`
        }), lo = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), uo = n(function (e, t) {
            let n = u(null),
                r = t ?? n,
                a = i(),
                {
                    activeLocale: o,
                    setLocale: s
                } = Y(),
                c = G(),
                {
                    style: d,
                    className: f,
                    layoutId: p,
                    variant: h,
                    ...g
                } = co(e),
                {
                    baseVariant: _,
                    classNames: v,
                    clearLoadingGesture: b,
                    gestureHandlers: x,
                    gestureVariant: S,
                    isLoading: w,
                    setGestureState: T,
                    setVariant: E,
                    variants: D
                } = X({
                    cycleOrder: Ya,
                    defaultVariant: `CBZjcz08x`,
                    ref: r,
                    variant: h,
                    variantClassNames: Za
                }),
                O = lo(e, D),
                k = [],
                A = L(Xa, ...k);
            return l(y, {
                id: p ?? a,
                children: l(oo, {
                    animate: D,
                    initial: !1,
                    children: l(ao, {
                        value: Qa,
                        children: m(C.div, {
                            ...g,
                            ...x,
                            className: L(A, `framer-1ad52vp`, f, v),
                            "data-framer-name": `Desktop`,
                            layoutDependency: O,
                            layoutId: `CBZjcz08x`,
                            ref: r,
                            style: {
                                ...d
                            },
                            ...Ka({
                                HV86y6Qnk: {
                                    "data-framer-name": `Mobile`
                                }
                            }, _, S),
                            children: [l(qa, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: eo,
                                className: `framer-8kr2ih`,
                                "data-framer-appear-id": `8kr2ih`,
                                "data-framer-name": `Bg color`,
                                initial: to,
                                layoutDependency: O,
                                layoutId: `SjGEA1O04`,
                                optimized: !0,
                                style: {
                                    backgroundColor: `var(--token-0456e135-ad4a-4595-954f-1784d79b204a, rgb(247, 247, 247))`,
                                    borderBottomLeftRadius: 16,
                                    borderBottomRightRadius: 16,
                                    borderTopLeftRadius: 16,
                                    borderTopRightRadius: 16
                                },
                                variants: {
                                    HV86y6Qnk: {
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: 0,
                                        borderTopLeftRadius: 0,
                                        borderTopRightRadius: 0
                                    }
                                }
                            }), l(Ja, {
                                __framer__adjustPosition: !1,
                                __framer__offset: 0,
                                __framer__parallaxTransformEnabled: !0,
                                __framer__speed: 85,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: ro,
                                background: {
                                    alt: ``,
                                    fit: `fit`,
                                    loading: V((c ?.y || 0) + ((c ?.height || 890) * .5056179775280901 - (c ?.height || 890) * .6135 / 2)),
                                    pixelHeight: 2771,
                                    pixelWidth: 4650,
                                    positionX: `center`,
                                    positionY: `center`,
                                    sizes: `calc(${c?.width||`100vw`} * 0.6132)`,
                                    src: `/images/Kg9zVDhNA16PVEvuA7oFpdSyhls.png`,
                                    srcSet: `/images/Kg9zVDhNA16PVEvuA7oFpdSyhls.png?scale-down-to=512 512w,/images/Kg9zVDhNA16PVEvuA7oFpdSyhls.png?scale-down-to=1024 1024w,/images/Kg9zVDhNA16PVEvuA7oFpdSyhls.png?scale-down-to=2048 2048w,/images/Kg9zVDhNA16PVEvuA7oFpdSyhls.png?scale-down-to=4096 4096w,/images/Kg9zVDhNA16PVEvuA7oFpdSyhls.png 4650w`
                                },
                                className: `framer-1jvbtz`,
                                "data-framer-appear-id": `1jvbtz`,
                                "data-framer-name": `Image`,
                                initial: io,
                                layoutDependency: O,
                                layoutId: `qmZWS6isO`,
                                optimized: !0,
                                style: {
                                    filter: `drop-shadow(0px 24px 27px rgba(0,0,0,0.25))`,
                                    WebkitFilter: `drop-shadow(0px 24px 27px rgba(0,0,0,0.25))`
                                },
                                ...Ka({
                                    HV86y6Qnk: {
                                        background: {
                                            alt: ``,
                                            fit: `fit`,
                                            loading: V((c ?.y || 0) + ((c ?.height || 890) * .45842696629213503 - (c ?.height || 890) * .3697 / 2)),
                                            pixelHeight: 2771,
                                            pixelWidth: 4650,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `calc(${c?.width||`100vw`} * 0.8282)`,
                                            src: `/images/Kg9zVDhNA16PVEvuA7oFpdSyhls.png`,
                                            srcSet: `/images/Kg9zVDhNA16PVEvuA7oFpdSyhls.png?scale-down-to=512 512w,/images/Kg9zVDhNA16PVEvuA7oFpdSyhls.png?scale-down-to=1024 1024w,/images/Kg9zVDhNA16PVEvuA7oFpdSyhls.png?scale-down-to=2048 2048w,/images/Kg9zVDhNA16PVEvuA7oFpdSyhls.png?scale-down-to=4096 4096w,/images/Kg9zVDhNA16PVEvuA7oFpdSyhls.png 4650w`
                                        }
                                    }
                                }, _, S)
                            })]
                        })
                    })
                })
            })
        }), fo = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-QQw0T.framer-1r455lv, .framer-QQw0T .framer-1r455lv { display: block; }`, `.framer-QQw0T.framer-1ad52vp { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 890px; justify-content: center; overflow: hidden; padding: 16px; position: relative; width: 1440px; }`, `.framer-QQw0T .framer-8kr2ih { flex: 1 0 0px; height: 100%; overflow: hidden; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`, `.framer-QQw0T .framer-1jvbtz { flex: none; height: 61%; left: calc(48.95833333333336% - 61.31944444444445% / 2); position: absolute; top: calc(50.561797752809014% - 61.348314606741575% / 2); width: 61%; z-index: 3; }`, `.framer-QQw0T.framer-v-121wn5j.framer-1ad52vp { padding: 0px; width: 390px; }`, `.framer-QQw0T.framer-v-121wn5j .framer-8kr2ih { will-change: unset; }`, `.framer-QQw0T.framer-v-121wn5j .framer-1jvbtz { height: 37%; left: calc(50.00000000000002% - 82.82051282051283% / 2); top: calc(45.842696629213506% - 36.96629213483146% / 2); width: 83%; }`], po = Z(uo, fo, `framer-QQw0T`), mo = po, po.displayName = `BG Image`, po.defaultProps = {
            height: 890,
            width: 1440
        }, I(po, {
            variant: {
                options: [`CBZjcz08x`, `HV86y6Qnk`],
                optionTitles: [`Desktop`, `Mobile`],
                title: `Variant`,
                type: D.Enum
            }
        }), F(po, [{
            explicitInter: !0,
            fonts: []
        }], {
            supportsExplicitInterCodegen: !0
        })
    }),
    go, _o, vo, yo = e(() => {
        U(), R.loadFonts([`CUSTOM;SF Compact Rounded Semibold`]), go = [{
            explicitInter: !0,
            fonts: [{
                family: `SF Compact Rounded Semibold`,
                source: `custom`,
                url: `https://framerusercontent.com/assets/CRNOcOM8NAYf5f6RmDbFrUUJqY8.otf`
            }]
        }], _o = [`.framer-zGokt .framer-styles-preset-1wc6iqr:not(.rich-text-wrapper), .framer-zGokt .framer-styles-preset-1wc6iqr.rich-text-wrapper h3 { --framer-font-family: "SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`], vo = `framer-zGokt`
    }),
    bo, xo, So, Co = e(() => {
        U(), R.loadFonts([`CUSTOM;SF Compact Rounded Semibold`]), bo = [{
            explicitInter: !0,
            fonts: [{
                family: `SF Compact Rounded Semibold`,
                source: `custom`,
                url: `https://framerusercontent.com/assets/CRNOcOM8NAYf5f6RmDbFrUUJqY8.otf`
            }]
        }], xo = [`.framer-HufEd .framer-styles-preset-ox209t:not(.rich-text-wrapper), .framer-HufEd .framer-styles-preset-ox209t.rich-text-wrapper h4 { --framer-font-family: "SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 34px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1439px) and (min-width: 810px) { .framer-HufEd .framer-styles-preset-ox209t:not(.rich-text-wrapper), .framer-HufEd .framer-styles-preset-ox209t.rich-text-wrapper h4 { --framer-font-family: "SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-HufEd .framer-styles-preset-ox209t:not(.rich-text-wrapper), .framer-HufEd .framer-styles-preset-ox209t.rich-text-wrapper h4 { --framer-font-family: "SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`], So = `framer-HufEd`
    }),
    wo, To, Eo, Do = e(() => {
        U(), R.loadFonts([`CUSTOM;SF Compact Rounded Medium`]), wo = [{
            explicitInter: !0,
            fonts: [{
                family: `SF Compact Rounded Medium`,
                source: `custom`,
                url: `https://framerusercontent.com/assets/eiYMQBV7Tm47thEGje5J7Y9Fo.otf`
            }]
        }], To = [`.framer-PJeGm .framer-styles-preset-1obl0:not(.rich-text-wrapper), .framer-PJeGm .framer-styles-preset-1obl0.rich-text-wrapper p { --framer-font-family: "SF Compact Rounded Medium", "SF Compact Rounded Medium Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`], Eo = `framer-PJeGm`
    }),
    Oo, ko, Ao, jo, Mo, No, Po, Fo, Io, Lo, Ro, zo, Bo, Vo, Ho, Uo, Wo, Go, Ko, qo, Jo, Yo, Xo, Zo, Qo, $o, es, ts, ns, rs, os, ss, cs, ls, us, ds, fs, ps, ms, hs, gs, _s, vs, ys, bs, xs, Ss, Cs, ws, Ts, Es, Ds, Os, ks, As, js = e(() => {
        a(), U(), x(), o(), je(), yt(), Se(), jt(), qt(), un(), Bn(), nr(), xr(), Rr(), ti(), vi(), Qi(), ma(), ka(), Ga(), ho(), or(), Ee(), yo(), xe(), Co(), Do(), Ce(), we(), Te(), Oo = z(mo), ko = ae(E), Ao = z(br), jo = z(Zi), Mo = ae(C.div), No = z(_i), Po = oe(E), Fo = z(Oa), Io = ae(N), Lo = z($), Ro = z(ce), zo = z(ke), Bo = z(ei), Vo = z(Lr), Ho = z(zn), Uo = z(pa), Wo = z(Wa), Go = z(ln), Ko = z(tr), qo = ae(k), Jo = z(Kt), Yo = se(Kt), Xo = z(At), Zo = {
            bSBjqqQER: `(min-width: 1900px)`,
            cu5MD3rWM: `(max-width: 809px)`,
            eKXI3XBTh: `(min-width: 810px) and (max-width: 1439px)`,
            WQLkyLRf1: `(min-width: 1440px) and (max-width: 1899px)`
        }, Qo = () => typeof document < `u`, $o = `framer-OJrD8`, es = {
            bSBjqqQER: `framer-v-rzrydg`,
            cu5MD3rWM: `framer-v-1teekcz`,
            eKXI3XBTh: `framer-v-1gly80`,
            WQLkyLRf1: `framer-v-72rtr7`
        }, ts = {
            filter: `blur(10px)`,
            opacity: .001,
            rotate: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            x: 0,
            y: 30
        }, ns = {
            delay: .05,
            duration: .8,
            ease: [.28, .41, .56, 1],
            type: `tween`
        }, rs = {
            effect: ts,
            repeat: !1,
            startDelay: .5,
            tokenization: `line`,
            transition: ns,
            trigger: `onMount`,
            type: `appear`
        }, os = {
            delay: .6,
            duration: .8,
            ease: [.28, .41, .56, 1],
            type: `tween`
        }, ss = {
            opacity: 1,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            transition: os,
            x: 0,
            y: 0
        }, cs = {
            opacity: .001,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            x: 0,
            y: 40
        }, ls = {
            delay: 1,
            duration: .8,
            ease: [.28, .41, .56, 1],
            type: `tween`
        }, us = {
            opacity: 1,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            transition: ls,
            x: 0,
            y: 0
        }, ds = {
            opacity: 0,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            x: 0,
            y: 20
        }, fs = {
            delay: .1,
            duration: .6,
            ease: [.44, .02, .22, 1],
            type: `tween`
        }, ps = {
            opacity: 0,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            transition: fs,
            x: 0,
            y: 20
        }, ms = {
            filter: `blur(10px)`,
            opacity: .001,
            rotate: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            x: 0,
            y: 10
        }, hs = {
            damping: 40,
            delay: .5,
            mass: 2.3,
            stiffness: 160,
            type: `spring`
        }, gs = {
            effect: ms,
            repeat: !1,
            startDelay: 0,
            threshold: 0,
            tokenization: `character`,
            transition: hs,
            trigger: `onInView`,
            type: `appear`
        }, _s = {
            damping: 40,
            delay: .05,
            mass: 2.3,
            stiffness: 160,
            type: `spring`
        }, vs = {
            effect: ms,
            repeat: !1,
            startDelay: 0,
            threshold: 0,
            tokenization: `character`,
            transition: _s,
            trigger: `onInView`,
            type: `appear`
        }, ys = (e, t) => {
            if (!(!e || typeof e != `object`)) return {
                ...e,
                alt: t
            }
        }, bs = {
            effect: ms,
            tokenization: `character`,
            transition: _s,
            trigger: `onInView`,
            type: `appear`
        }, xs = {
            opacity: 1,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: .7,
            skewX: 0,
            skewY: 0,
            x: 0,
            y: 30
        }, Ss = {
            opacity: 1,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: .7,
            skewX: 0,
            skewY: 0,
            transition: fs,
            x: 0,
            y: 30
        }, Cs = ({
            value: e
        }) => {
            let t = ee();
            return t ? null : l(`style`, {
                dangerouslySetInnerHTML: {
                    __html: e
                },
                "data-framer-html-style": ``
            })
        }, ws = {
            1: `bSBjqqQER`,
            Desktop: `WQLkyLRf1`,
            Phone: `cu5MD3rWM`,
            Tablet: `eKXI3XBTh`
        }, Ts = ({
            height: e,
            id: t,
            width: n,
            ...r
        }) => ({
            ...r,
            variant: ws[r.variant] ?? r.variant ?? `WQLkyLRf1`
        }), Es = n(function (e, t) {
            let n = u(null),
                r = t ?? n,
                a = i(),
                {
                    activeLocale: o,
                    setLocale: s
                } = Y(),
                c = G(),
                {
                    style: d,
                    className: p,
                    layoutId: h,
                    variant: g,
                    ...v
                } = Ts(e),
                b = f(() => De(void 0, o), [void 0, o]);
            ne(b);
            let [x, S] = q(g, Zo, !1), w, D = [fe, le, vo, Eo, ar, de, ue, So], A = L($o, ...D), M = ie(`iOopVsPls`), P = u(null), F = () => Qo() ? x !== `cu5MD3rWM` : !0, I = ie(`rE4l_OxNj`), R = u(null);
            return K({}), l(O.Provider, {
                value: {
                    primaryVariantId: `WQLkyLRf1`,
                    variantClassNames: es
                },
                children: m(y, {
                    id: h ?? a,
                    children: [l(Cs, {
                        value: `html body { background: var(--token-84939536-f364-4366-b20a-541cadebffd9, rgba(0, 0, 0, 0.5)); }`
                    }), m(C.div, {
                        ...v,
                        className: L(A, `framer-72rtr7`, p),
                        ref: r,
                        style: {
                            ...d
                        },
                        children: [m(`section`, {
                            className: `framer-17h4dh5`,
                            "data-framer-name": `Hero Section`,
                            children: [l(j, {
                                breakpoint: x,
                                overrides: {
                                    cu5MD3rWM: {
                                        height: 890
                                    }
                                },
                                children: l(T, {
                                    height: 1e3,
                                    width: c ?.width || `100vw`,
                                    y: (c ?.y || 0) + 0 + 0 + 0,
                                    children: l(ko, {
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [{
                                            target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0
                                            }
                                        }, {
                                            target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: .9,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0
                                            }
                                        }],
                                        __framer__transformTrigger: `onScroll`,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-d6i8hw-container`,
                                        nodeId: `ecLPZy5TN`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: l(j, {
                                            breakpoint: x,
                                            overrides: {
                                                cu5MD3rWM: {
                                                    variant: `HV86y6Qnk`
                                                }
                                            },
                                            children: l(mo, {
                                                height: `100%`,
                                                id: `ecLPZy5TN`,
                                                layoutId: `ecLPZy5TN`,
                                                style: {
                                                    height: `100%`,
                                                    width: `100%`
                                                },
                                                variant: `CBZjcz08x`,
                                                width: `100%`
                                            })
                                        })
                                    })
                                })
                            }), l(`div`, {
                                className: `framer-vckulk`,
                                "data-framer-name": `Container`,
                                children: m(`div`, {
                                    className: `framer-vjr7so`,
                                    "data-framer-name": `Wrapper`,
                                    children: [l(j, {
                                        breakpoint: x,
                                        overrides: {
                                            bSBjqqQER: {
                                                height: 130
                                            },
                                            cu5MD3rWM: {
                                                height: 64,
                                                width: `max(${c?.width||`100vw`} - 32px, 1px)`,
                                                y: (c ?.y || 0) + 0 + 0 + 0 + 0 + 32 + 54
                                            },
                                            eKXI3XBTh: {
                                                width: `max(max(${c?.width||`100vw`}, 1px) - 64px, 1px)`
                                            }
                                        },
                                        children: l(T, {
                                            height: 120,
                                            width: `max(max(${c?.width||`100vw`}, 1px) - 124px, 1px)`,
                                            y: (c ?.y || 0) + 0 + 0 + 0 + 32 + 0 + 0,
                                            children: l(E, {
                                                className: `framer-3rij7w-container`,
                                                nodeId: `CuRt7Otpg`,
                                                scopeId: `augiA20Il`,
                                                children: l(j, {
                                                    breakpoint: x,
                                                    overrides: {
                                                        cu5MD3rWM: {
                                                            variant: `XgvwdP_LS`
                                                        },
                                                        eKXI3XBTh: {
                                                            variant: `H6JxIiyvg`
                                                        }
                                                    },
                                                    children: l(br, {
                                                        fumxmR8aU: `Imagination`,
                                                        height: `100%`,
                                                        Hspd62d8o: `Your`,
                                                        id: `CuRt7Otpg`,
                                                        layoutId: `CuRt7Otpg`,
                                                        qSAYA6m1D: `Release`,
                                                        style: {
                                                            height: `100%`,
                                                            width: `100%`
                                                        },
                                                        variant: `wFq06cHvo`,
                                                        width: `100%`
                                                    })
                                                })
                                            })
                                        })
                                    }), l(Mo, {
                                        __framer__adjustPosition: !1,
                                        __framer__offset: 0,
                                        __framer__parallaxTransformEnabled: !0,
                                        __framer__speed: 105,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1u3idm6`,
                                        "data-framer-name": `Center`,
                                        children: l(j, {
                                            breakpoint: x,
                                            overrides: {
                                                bSBjqqQER: {
                                                    y: (c ?.y || 0) + 0 + 0 + 0 + 32 + 0 + 378.5 + 0 + 0
                                                },
                                                cu5MD3rWM: {
                                                    y: (c ?.y || 0) + 0 + 0 + 0 + 0 + 32 + 30 + 0 + 100 + 0
                                                }
                                            },
                                            children: l(T, {
                                                height: 108,
                                                y: (c ?.y || 0) + 0 + 0 + 0 + 32 + 0 + 373.5 + 0 + 0,
                                                children: l(E, {
                                                    className: `framer-b7dwq-container`,
                                                    nodeId: `UTmUZwFtW`,
                                                    scopeId: `augiA20Il`,
                                                    children: l(j, {
                                                        breakpoint: x,
                                                        overrides: {
                                                            cu5MD3rWM: {
                                                                variant: `Zd64zpOzv`
                                                            }
                                                        },
                                                        children: l(Zi, {
                                                            ebSsbBBhw: `Explore`,
                                                            height: `100%`,
                                                            id: `UTmUZwFtW`,
                                                            layoutId: `UTmUZwFtW`,
                                                            variant: `cUSNeQ612`,
                                                            W2h1BgtXI: `Generate`,
                                                            width: `100%`,
                                                            Zwe5JGCYG: `Host`,
                                                            zxSr59MeY: `Interact`
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    }), m(Mo, {
                                        __framer__adjustPosition: !1,
                                        __framer__offset: 0,
                                        __framer__parallaxTransformEnabled: !0,
                                        __framer__speed: 105,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1e2q274`,
                                        "data-framer-name": `Buttom`,
                                        children: [m(`div`, {
                                            className: `framer-1ipk8uc`,
                                            "data-framer-name": `Content`,
                                            children: [l(N, {
                                                __fromCanvasComponent: !0,
                                                children: l(_, {
                                                    children: l(`p`, {
                                                        className: `framer-styles-preset-kkrvh`,
                                                        "data-styles-preset": `bEb99onL_`,
                                                        style: {
                                                            "--framer-text-alignment": `left`
                                                        },
                                                        children: `Elon Musk's next big move in AI. A new visual layer to xAI's Grok - not just understanding the world, but imagining it, creating it, and visualizing it.`
                                                    })
                                                }),
                                                className: `framer-1g7xz7c`,
                                                effect: rs,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0
                                            }), l(j, {
                                                breakpoint: x,
                                                overrides: {
                                                    cu5MD3rWM: {
                                                        y: (c ?.y || 0) + 0 + 0 + 0 + 0 + 32 + 30 + 512.4 + 0 + 0 + 0 + 152
                                                    }
                                                },
                                                children: l(T, {
                                                    height: 49,
                                                    y: (c ?.y || 0) + 0 + 0 + 0 + 32 + 0 + 735 + 0 + 0 + 0 + 152,
                                                    children: l(Po, {
                                                        animate: ss,
                                                        className: `framer-1atuj0k-container`,
                                                        "data-framer-appear-id": `1atuj0k`,
                                                        initial: cs,
                                                        nodeId: `urqPLa7K2`,
                                                        optimized: !0,
                                                        rendersWithMotion: !0,
                                                        scopeId: `augiA20Il`,
                                                        children: l(j, {
                                                            breakpoint: x,
                                                            overrides: {
                                                                cu5MD3rWM: {
                                                                    variant: `THjstnVKy`
                                                                },
                                                                eKXI3XBTh: {
                                                                    variant: `THjstnVKy`
                                                                }
                                                            },
                                                            children: l(_i, {
                                                                height: `100%`,
                                                                id: `urqPLa7K2`,
                                                                k2d02rYDk: `Buy $IMAGINE`,
                                                                layoutId: `urqPLa7K2`,
                                                                variant: `gsmbPTvlC`,
                                                                width: `100%`
                                                            })
                                                        })
                                                    })
                                                })
                                            })]
                                        }), l(j, {
                                            breakpoint: x,
                                            overrides: {
                                                cu5MD3rWM: {
                                                    y: (c ?.y || 0) + 0 + 0 + 0 + 0 + 32 + 30 + 512.4 + 0 + 169
                                                }
                                            },
                                            children: l(T, {
                                                height: 32,
                                                width: `20px`,
                                                y: (c ?.y || 0) + 0 + 0 + 0 + 32 + 0 + 735 + 0 + 169,
                                                children: l(Po, {
                                                    animate: us,
                                                    className: `framer-1l7sjd4-container`,
                                                    "data-framer-appear-id": `1l7sjd4`,
                                                    initial: cs,
                                                    nodeId: `d7FPIpPNJ`,
                                                    optimized: !0,
                                                    rendersWithMotion: !0,
                                                    scopeId: `augiA20Il`,
                                                    children: l(Oa, {
                                                        height: `100%`,
                                                        id: `d7FPIpPNJ`,
                                                        layoutId: `d7FPIpPNJ`,
                                                        mYmZWnDfm: {
                                                            borderColor: `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`,
                                                            borderStyle: `solid`,
                                                            borderWidth: 1
                                                        },
                                                        style: {
                                                            height: `100%`,
                                                            width: `100%`
                                                        },
                                                        variant: `nNDWW0Q0D`,
                                                        width: `100%`,
                                                        xE7or5QVg: `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`
                                                    })
                                                })
                                            })
                                        })]
                                    })]
                                })
                            })]
                        }), l(`section`, {
                            className: `framer-pmyxpx`,
                            "data-framer-name": `Section - Showreel`,
                            id: M,
                            ref: P,
                            children: m(`div`, {
                                className: `framer-194lqnz`,
                                children: [l(j, {
                                    breakpoint: x,
                                    overrides: {
                                        cu5MD3rWM: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                            style: {},
                                            viewBoxScale: .8
                                        }
                                    },
                                    children: l(Io, {
                                        __framer__spring: {
                                            damping: 60,
                                            delay: 0,
                                            duration: .3,
                                            ease: [.44, 0, .56, 1],
                                            mass: 1,
                                            stiffness: 308,
                                            type: `spring`
                                        },
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [{
                                            target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0
                                            }
                                        }, {
                                            ref: P,
                                            target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: .7,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0
                                            }
                                        }],
                                        __framer__transformTrigger: `onScrollTarget`,
                                        __framer__transformViewportThreshold: 1,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        children: l(_, {
                                            children: l(`p`, {
                                                style: {
                                                    "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBCb2xk`,
                                                    "--framer-font-family": `"SF Compact Rounded Bold", "SF Compact Rounded Bold Placeholder", sans-serif`,
                                                    "--framer-font-size": `70px`,
                                                    "--framer-letter-spacing": `-0.05em`,
                                                    "--framer-line-height": `1em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`
                                                },
                                                children: l(`span`, {
                                                    "data-text-fill": `true`,
                                                    style: {
                                                        backgroundImage: `linear-gradient(132deg, rgb(227, 227, 227) 11.6824%, rgba(255, 255, 255, 0) 100%)`
                                                    },
                                                    children: `Grok Imagine`
                                                })
                                            })
                                        }),
                                        className: `framer-9bvh77`,
                                        fonts: [`CUSTOM;SF Compact Rounded Bold`],
                                        style: {
                                            transformPerspective: 1200
                                        },
                                        verticalAlignment: `top`,
                                        viewBox: `0 0 417 80`,
                                        withExternalLayout: !0
                                    })
                                }), l(j, {
                                    breakpoint: x,
                                    overrides: {
                                        cu5MD3rWM: {
                                            __framer__styleTransformEffectEnabled: void 0,
                                            style: {}
                                        }
                                    },
                                    children: l(Mo, {
                                        __framer__spring: {
                                            damping: 39,
                                            delay: 0,
                                            duration: .3,
                                            ease: [.44, 0, .56, 1],
                                            mass: 1,
                                            stiffness: 114,
                                            type: `spring`
                                        },
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [{
                                            target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: .1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0
                                            }
                                        }, {
                                            ref: P,
                                            target: {
                                                opacity: 1,
                                                rotate: 0,
                                                rotateX: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                skewX: 0,
                                                skewY: 0,
                                                x: 0,
                                                y: 0
                                            }
                                        }],
                                        __framer__transformTrigger: `onScrollTarget`,
                                        __framer__transformViewportThreshold: 1,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-tpvi5m`,
                                        "data-framer-name": `Video Container`,
                                        style: {
                                            transformPerspective: 1200
                                        },
                                        children: l(T, {
                                            children: l(E, {
                                                className: `framer-19exss5-container`,
                                                isModuleExternal: !0,
                                                nodeId: `XxPKdbCMx`,
                                                scopeId: `augiA20Il`,
                                                children: l($, {
                                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                                    borderRadius: 0,
                                                    bottomLeftRadius: 0,
                                                    bottomRightRadius: 0,
                                                    controls: !1,
                                                    height: `100%`,
                                                    id: `XxPKdbCMx`,
                                                    isMixedBorderRadius: !1,
                                                    layoutId: `XxPKdbCMx`,
                                                    loop: !0,
                                                    muted: !0,
                                                    objectFit: `cover`,
                                                    playing: !0,
                                                    posterEnabled: !1,
                                                    srcFile: `/assets/MQDrqeKTTBtk6RXhknZ6JCGNgnY.mp4`,
                                                    srcType: `Upload`,
                                                    srcUrl: `https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4`,
                                                    startTime: 0,
                                                    style: {
                                                        height: `100%`,
                                                        width: `100%`
                                                    },
                                                    topLeftRadius: 0,
                                                    topRightRadius: 0,
                                                    volume: 25,
                                                    width: `100%`
                                                })
                                            })
                                        })
                                    })
                                })]
                            })
                        }), l(`section`, {
                            className: `framer-t7ewct`,
                            "data-framer-name": `Benefits Section`,
                            children: m(`div`, {
                                className: `framer-1v9gu1z`,
                                "data-framer-name": `Container`,
                                children: [m(Mo, {
                                    __framer__animate: {
                                        transition: fs
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: ds,
                                    __framer__exit: ps,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-ukfty1`,
                                    "data-framer-name": `Heading`,
                                    children: [l(N, {
                                        __fromCanvasComponent: !0,
                                        children: l(_, {
                                            children: l(`h2`, {
                                                className: `framer-styles-preset-annra9`,
                                                "data-styles-preset": `ZfkYyGwCo`,
                                                style: {
                                                    "--framer-text-alignment": `center`
                                                },
                                                children: `Reimagined by Technology`
                                            })
                                        }),
                                        className: `framer-1vpt5vz`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    }), l(N, {
                                        __fromCanvasComponent: !0,
                                        children: l(_, {
                                            children: l(`p`, {
                                                className: `framer-styles-preset-kkrvh`,
                                                "data-styles-preset": `bEb99onL_`,
                                                style: {
                                                    "--framer-text-alignment": `center`
                                                },
                                                children: `Grok Imagine turns your living space into an intelligent, effortless environment that adapts to your day.`
                                            })
                                        }),
                                        className: `framer-1c4xrx5`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    })]
                                }), m(`div`, {
                                    className: `framer-q4f7bi`,
                                    "data-framer-name": `Wrapper`,
                                    children: [m(`div`, {
                                        className: `framer-tvit2h`,
                                        "data-framer-name": `Grid wrapper`,
                                        children: [m(`div`, {
                                            className: `framer-gmtqd`,
                                            "data-framer-name": `Features`,
                                            children: [l(j, {
                                                breakpoint: x,
                                                overrides: {
                                                    cu5MD3rWM: {
                                                        background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: V((c ?.y || 0) + 0 + 1687.3934 + 80 + 0 + 230 + 0 + 0 + 0 + 0 + 0),
                                                            pixelHeight: 2048,
                                                            pixelWidth: 2048,
                                                            sizes: `max((min(max(${c?.width||`100vw`} - 32px, 1px), 1200px) - 12px) / 2, 50px)`,
                                                            src: `/images/trjyLr5pp6IgZ6wn5V8tqHHZ8Hc.png`,
                                                            srcSet: `/images/trjyLr5pp6IgZ6wn5V8tqHHZ8Hc.png?scale-down-to=512 512w,/images/trjyLr5pp6IgZ6wn5V8tqHHZ8Hc.png?scale-down-to=1024 1024w,/images/trjyLr5pp6IgZ6wn5V8tqHHZ8Hc.png 2048w`
                                                        }
                                                    }
                                                },
                                                children: l(k, {
                                                    background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: V((c ?.y || 0) + 0 + 2523.9085 + 80 + 0 + 230 + 0 + 0 + 0 + 0),
                                                        pixelHeight: 2048,
                                                        pixelWidth: 2048,
                                                        sizes: `max((max((min(max(${c?.width||`100vw`} - 32px, 1px), 1200px) - 24px) * 0.6, 1px) - 24px) / 2, 50px)`,
                                                        src: `/images/1.jfif`,
                                                        },
                                                    className: `framer-v8vq`,
                                                    "data-framer-name": `BG`
                                                })
                                            }), m(`div`, {
                                                className: `framer-1f43cg`,
                                                children: [l(N, {
                                                    __fromCanvasComponent: !0,
                                                    children: l(_, {
                                                        children: l(`h3`, {
                                                            className: `framer-styles-preset-1wc6iqr`,
                                                            "data-styles-preset": `gUnjFa38F`,
                                                            style: {
                                                                "--framer-text-alignment": `center`,
                                                                "--framer-text-color": `rgb(255, 255, 255)`
                                                            },
                                                            children: l(`strong`, {
                                                                children: `Instant World Rendering`
                                                            })
                                                        })
                                                    }),
                                                    className: `framer-1f6z4jl`,
                                                    fonts: [`Inter`, `Inter-Bold`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0
                                                }), l(N, {
                                                    __fromCanvasComponent: !0,
                                                    children: l(_, {
                                                        children: l(`p`, {
                                                            className: `framer-styles-preset-1obl0`,
                                                            "data-styles-preset": `Pzkn_GDaF`,
                                                            style: {
                                                                "--framer-text-alignment": `center`,
                                                                "--framer-text-color": `rgb(255, 255, 255)`
                                                            },
                                                            children: `AI generates full 3D environments from minimal input.`
                                                        })
                                                    }),
                                                    className: `framer-1r0phqy`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0
                                                })]
                                            })]
                                        }), m(`div`, {
                                            className: `framer-u38pzw`,
                                            "data-framer-name": `Stat item`,
                                            children: [l(j, {
                                                breakpoint: x,
                                                overrides: {
                                                    cu5MD3rWM: {
                                                        background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: V((c ?.y || 0) + 0 + 1687.3934 + 80 + 0 + 230 + 0 + 0 + 0 + 0 + 0),
                                                            pixelHeight: 2048,
                                                            pixelWidth: 2048,
                                                            sizes: `max((min(max(${c?.width||`100vw`} - 32px, 1px), 1200px) - 12px) / 2, 50px)`,
                                                            src: `/images/2.jfif`,
                                                            srcSet: `/images/2.jfif?scale-down-to=512 512w,/images/2.jfif?scale-down-to=1024 1024w,/images/2.jfif 2048w`
                                                        }
                                                    }
                                                },
                                                children: l(k, {
                                                    background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: V((c ?.y || 0) + 0 + 2523.9085 + 80 + 0 + 230 + 0 + 0 + 0 + 0),
                                                        pixelHeight: 2048,
                                                        pixelWidth: 2048,
                                                        sizes: `max((max((min(max(${c?.width||`100vw`} - 32px, 1px), 1200px) - 24px) * 0.6, 1px) - 24px) / 2, 50px)`,
                                                        src: `/images/2.jfif`,
                                                        srcSet: `/images/2.jfif?scale-down-to=512 512w,/images/2.jfif?scale-down-to=1024 1024w,/images/2.jfif 2048w`
                                                    },
                                                    className: `framer-1gthy3f`,
                                                    "data-framer-name": `BG`
                                                })
                                            }), m(`div`, {
                                                className: `framer-esxw5w`,
                                                children: [l(N, {
                                                    __fromCanvasComponent: !0,
                                                    children: l(_, {
                                                        children: l(`h3`, {
                                                            className: `framer-styles-preset-1wc6iqr`,
                                                            "data-styles-preset": `gUnjFa38F`,
                                                            style: {
                                                                "--framer-text-alignment": `center`,
                                                                "--framer-text-color": `rgb(255, 255, 255)`
                                                            },
                                                            children: l(`strong`, {
                                                                children: `Meme Worlds`
                                                            })
                                                        })
                                                    }),
                                                    className: `framer-1h9lral`,
                                                    fonts: [`Inter`, `Inter-Bold`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0
                                                }), l(N, {
                                                    __fromCanvasComponent: !0,
                                                    children: l(_, {
                                                        children: l(`p`, {
                                                            className: `framer-styles-preset-1obl0`,
                                                            "data-styles-preset": `Pzkn_GDaF`,
                                                            style: {
                                                                "--framer-text-alignment": `center`,
                                                                "--framer-text-color": `rgb(255, 255, 255)`
                                                            },
                                                            children: `Build meme-driven worlds. Add chaos,inside jokes, and microgames.`
                                                        })
                                                    }),
                                                    className: `framer-ynfi31`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0
                                                })]
                                            })]
                                        }), m(`div`, {
                                            className: `framer-ycmc3`,
                                            "data-framer-name": `Voice feature`,
                                            children: [l(`div`, {
                                                className: `framer-1n701u0`,
                                                "data-framer-name": `BG`
                                            }), m(`div`, {
                                                className: `framer-1baxgrj`,
                                                "data-framer-name": `Content`,
                                                children: [l(N, {
                                                    __fromCanvasComponent: !0,
                                                    children: l(_, {
                                                        children: l(`h1`, {
                                                            className: `framer-styles-preset-clzfvn`,
                                                            "data-styles-preset": `aQAtgruaA`,
                                                            style: {
                                                                "--framer-text-alignment": `center`,
                                                                "--framer-text-color": `rgb(0, 0, 0)`
                                                            },
                                                            children: `3D`
                                                        })
                                                    }),
                                                    className: `framer-10b432y`,
                                                    effect: gs,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0
                                                }), m(`div`, {
                                                    className: `framer-4gqdwr`,
                                                    "data-framer-name": `Text wrapper`,
                                                    children: [l(j, {
                                                        breakpoint: x,
                                                        overrides: {
                                                            cu5MD3rWM: {
                                                                children: l(_, {
                                                                    children: l(`h5`, {
                                                                        style: {
                                                                            "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBMaWdodA==`,
                                                                            "--framer-font-family": `"SF Compact Rounded Light", "SF Compact Rounded Light Placeholder", sans-serif`,
                                                                            "--framer-font-size": `20px`,
                                                                            "--framer-line-height": `1.4em`,
                                                                            "--framer-text-alignment": `left`
                                                                        },
                                                                        children: l(`strong`, {
                                                                            children: `Fictional Universe Explorer`
                                                                        })
                                                                    })
                                                                }),
                                                                fonts: [`CUSTOM;SF Compact Rounded Light`]
                                                            }
                                                        },
                                                        children: l(N, {
                                                            __fromCanvasComponent: !0,
                                                            children: l(_, {
                                                                children: l(`h5`, {
                                                                    className: `framer-styles-preset-66zvrz`,
                                                                    "data-styles-preset": `MdHF6Jcfy`,
                                                                    style: {
                                                                        "--framer-text-alignment": `left`,
                                                                        "--framer-text-color": `rgb(0, 0, 0)`
                                                                    },
                                                                    children: l(`strong`, {
                                                                        children: `Fictional Universe Explorer`
                                                                    })
                                                                })
                                                            }),
                                                            className: `framer-nu4vr6`,
                                                            effect: vs,
                                                            fonts: [`Inter`, `Inter-Bold`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0
                                                        })
                                                    }), l(j, {
                                                        breakpoint: x,
                                                        overrides: {
                                                            cu5MD3rWM: {
                                                                children: l(_, {
                                                                    children: m(`h5`, {
                                                                        style: {
                                                                            "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBMaWdodA==`,
                                                                            "--framer-font-family": `"SF Compact Rounded Light", "SF Compact Rounded Light Placeholder", sans-serif`,
                                                                            "--framer-font-size": `20px`,
                                                                            "--framer-line-height": `1.4em`,
                                                                            "--framer-text-alignment": `left`
                                                                        },
                                                                        children: [`Visit famous places from`, l(`span`, {
                                                                            style: {
                                                                                "--framer-text-color": `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`
                                                                            },
                                                                            children: l(`br`, {})
                                                                        }), `books, movies, and games.`]
                                                                    })
                                                                }),
                                                                fonts: [`CUSTOM;SF Compact Rounded Light`]
                                                            }
                                                        },
                                                        children: l(N, {
                                                            __fromCanvasComponent: !0,
                                                            children: l(_, {
                                                                children: m(`h5`, {
                                                                    className: `framer-styles-preset-66zvrz`,
                                                                    "data-styles-preset": `MdHF6Jcfy`,
                                                                    style: {
                                                                        "--framer-text-alignment": `left`,
                                                                        "--framer-text-color": `rgb(0, 0, 0)`
                                                                    },
                                                                    children: [`Visit famous places from`, l(`br`, {}), `books, movies, and games.`]
                                                                })
                                                            }),
                                                            className: `framer-s3ggse`,
                                                            effect: vs,
                                                            fonts: [`Inter`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })]
                                    }), m(`div`, {
                                        className: `framer-pui888`,
                                        "data-framer-name": `Right wrapper`,
                                        children: [m(`div`, {
                                            className: `framer-14tkfxo`,
                                            "data-framer-name": `Big image`,
                                            children: [l(j, {
                                                breakpoint: x,
                                                overrides: {
                                                    cu5MD3rWM: {
                                                        background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: V((c ?.y || 0) + 0 + 1687.3934 + 80 + 0 + 230 + 0 + 522.5 + 0 + 0 + 0),
                                                            pixelHeight: 2048,
                                                            pixelWidth: 2048,
                                                            sizes: `min(max(${c?.width||`100vw`} - 32px, 1px), 1200px)`,
                                                            src: `/images/n2YL8eMAoUhWHLpeOny7QoGvdZ4.png`,
                                                            srcSet: `/images/n2YL8eMAoUhWHLpeOny7QoGvdZ4.png?scale-down-to=512 512w,/images/n2YL8eMAoUhWHLpeOny7QoGvdZ4.png?scale-down-to=1024 1024w,/images/n2YL8eMAoUhWHLpeOny7QoGvdZ4.png 2048w`
                                                        }
                                                    }
                                                },
                                                children: l(k, {
                                                    background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: V((c ?.y || 0) + 0 + 2523.9085 + 80 + 0 + 230 + 0 + 0 + 0 + 0),
                                                        pixelHeight: 2048,
                                                        pixelWidth: 2048,
                                                        sizes: `max((min(max(${c?.width||`100vw`} - 32px, 1px), 1200px) - 24px) / 2.5, 1px)`,
                                                        src: `/images/3.jfif`,
                                                        
                                                    },
                                                    className: `framer-1v5n4o0`,
                                                    "data-framer-name": `BG`
                                                })
                                            }), m(`div`, {
                                                className: `framer-y6anpj`,
                                                "data-framer-name": `Top`,
                                                children: [m(`div`, {
                                                    className: `framer-1md89rs`,
                                                    "data-framer-name": `Award badge`,
                                                    children: [l(`div`, {
                                                        className: `framer-1ni3po`,
                                                        "data-framer-name": `Icon`,
                                                        children: l(T, {
                                                            children: l(E, {
                                                                className: `framer-vu62m5-container`,
                                                                isAuthoredByUser: !0,
                                                                isModuleExternal: !0,
                                                                nodeId: `GwNLHIhd9`,
                                                                scopeId: `augiA20Il`,
                                                                children: l(ce, {
                                                                    color: `rgb(255, 255, 255)`,
                                                                    height: `100%`,
                                                                    iconSearch: `House`,
                                                                    iconSelection: `Coin`,
                                                                    id: `GwNLHIhd9`,
                                                                    layoutId: `GwNLHIhd9`,
                                                                    mirrored: !1,
                                                                    selectByList: !0,
                                                                    style: {
                                                                        height: `100%`,
                                                                        width: `100%`
                                                                    },
                                                                    weight: `regular`,
                                                                    width: `100%`
                                                                })
                                                            })
                                                        })
                                                    }), l(`div`, {
                                                        className: `framer-1ja9it5`,
                                                        "data-framer-name": `Content`,
                                                        children: l(N, {
                                                            __fromCanvasComponent: !0,
                                                            children: l(_, {
                                                                children: l(`p`, {
                                                                    className: `framer-styles-preset-1def660`,
                                                                    "data-styles-preset": `Z3olXvqFe`,
                                                                    style: {
                                                                        "--framer-text-alignment": `center`,
                                                                        "--framer-text-color": `rgb(255, 255, 255)`
                                                                    },
                                                                    children: `Threshold to host World`
                                                                })
                                                            }),
                                                            className: `framer-1yytfsz`,
                                                            fonts: [`Inter`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0
                                                        })
                                                    })]
                                                }), m(`div`, {
                                                    className: `framer-52gekv`,
                                                    children: [l(N, {
                                                        __fromCanvasComponent: !0,
                                                        children: l(_, {
                                                            children: l(`h2`, {
                                                                className: `framer-styles-preset-annra9`,
                                                                "data-styles-preset": `ZfkYyGwCo`,
                                                                style: {
                                                                    "--framer-text-alignment": `center`,
                                                                    "--framer-text-color": `rgb(255, 255, 255)`
                                                                },
                                                                children: l(`strong`, {
                                                                    children: `Real Place Replication`
                                                                })
                                                            })
                                                        }),
                                                        className: `framer-1cozyau`,
                                                        fonts: [`Inter`, `Inter-Bold`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0
                                                    }), l(N, {
                                                        __fromCanvasComponent: !0,
                                                        children: l(_, {
                                                            children: l(`h5`, {
                                                                style: {
                                                                    "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBNZWRpdW0=`,
                                                                    "--framer-font-family": `"SF Compact Rounded Medium", "SF Compact Rounded Medium Placeholder", sans-serif`,
                                                                    "--framer-font-size": `24px`,
                                                                    "--framer-line-height": `1.4em`,
                                                                    "--framer-text-alignment": `center`,
                                                                    "--framer-text-color": `rgb(255, 255, 255)`
                                                                },
                                                                children: `Recreate real locations with just a few reference photos.`
                                                            })
                                                        }),
                                                        className: `framer-s9utlx`,
                                                        fonts: [`CUSTOM;SF Compact Rounded Medium`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0
                                                    })]
                                                }), l(`div`, {
                                                    className: `framer-hzpz2s`,
                                                    "data-framer-name": `Review`,
                                                    children: l(N, {
                                                        __fromCanvasComponent: !0,
                                                        children: l(_, {
                                                            children: l(`h4`, {
                                                                className: `framer-styles-preset-ox209t`,
                                                                "data-styles-preset": `NUspxve3l`,
                                                                style: {
                                                                    "--framer-text-alignment": `left`,
                                                                    "--framer-text-color": `var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, rgb(255, 255, 255))`
                                                                },
                                                                children: `1%`
                                                            })
                                                        }),
                                                        className: `framer-kvr0fg`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0
                                                    })
                                                })]
                                            })]
                                        }), m(`div`, {
                                            className: `framer-qctifv`,
                                            "data-framer-name": `Clock`,
                                            children: [l(T, {
                                                children: l(E, {
                                                    className: `framer-14hpyqh-container`,
                                                    isAuthoredByUser: !0,
                                                    isModuleExternal: !0,
                                                    nodeId: `SzZwMpXQs`,
                                                    scopeId: `augiA20Il`,
                                                    children: l(ce, {
                                                        color: `var(--token-09ea5b55-cb41-495a-a653-c8b316e5c96d, rgba(255, 255, 255, 0.5))`,
                                                        height: `100%`,
                                                        iconSearch: `House`,
                                                        iconSelection: `Clock`,
                                                        id: `SzZwMpXQs`,
                                                        layoutId: `SzZwMpXQs`,
                                                        mirrored: !1,
                                                        selectByList: !0,
                                                        style: {
                                                            height: `100%`,
                                                            width: `100%`
                                                        },
                                                        weight: `regular`,
                                                        width: `100%`
                                                    })
                                                })
                                            }), l(T, {
                                                children: l(E, {
                                                    className: `framer-1qbe4gf-container`,
                                                    isAuthoredByUser: !0,
                                                    isModuleExternal: !0,
                                                    nodeId: `bAxn6jKzx`,
                                                    scopeId: `augiA20Il`,
                                                    children: l(ke, {
                                                        color: `var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, rgb(255, 255, 255))`,
                                                        font: {
                                                            fontFamily: `"Urbanist", "Urbanist Placeholder", sans-serif`,
                                                            fontSize: `34px`,
                                                            fontStyle: `normal`,
                                                            fontWeight: 500,
                                                            letterSpacing: `0em`,
                                                            lineHeight: `1.4em`,
                                                            textAlign: `center`
                                                        },
                                                        height: `100%`,
                                                        id: `bAxn6jKzx`,
                                                        layoutId: `bAxn6jKzx`,
                                                        monthFormat: `long`,
                                                        outputType: `time`,
                                                        showMinutes: !0,
                                                        showMonth: !0,
                                                        showSeconds: !0,
                                                        showWeekday: !0,
                                                        showYear: !0,
                                                        style: {
                                                            width: `100%`
                                                        },
                                                        tabularFont: !0,
                                                        timeFormat: `12h`,
                                                        width: `100%`
                                                    })
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }), m(`div`, {
                            className: `framer-jd05u`,
                            "data-framer-name": `Sticky`,
                            children: [l(`div`, {
                                className: `framer-1sn6wje`,
                                "data-framer-name": `Heading Wrapper`,
                                children: l(j, {
                                    breakpoint: x,
                                    overrides: {
                                        cu5MD3rWM: {
                                            children: l(_, {
                                                children: l(`h4`, {
                                                    style: {
                                                        "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                                        "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                                        "--framer-font-size": `20px`,
                                                        "--framer-line-height": `1.4em`,
                                                        "--framer-text-alignment": `center`,
                                                        "--framer-text-color": `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`
                                                    },
                                                    children: `Immerese into anything you can imagine`
                                                })
                                            }),
                                            fonts: [`CUSTOM;SF Compact Rounded Semibold`]
                                        }
                                    },
                                    children: l(N, {
                                        __fromCanvasComponent: !0,
                                        children: l(_, {
                                            children: l(`h4`, {
                                                className: `framer-styles-preset-ox209t`,
                                                "data-styles-preset": `NUspxve3l`,
                                                style: {
                                                    "--framer-text-alignment": `center`
                                                },
                                                children: `Immerese into anything you can imagine`
                                            })
                                        }),
                                        className: `framer-16kc5b5`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    })
                                })
                            }), m(`div`, {
                                className: `framer-dcbp7o`,
                                "data-framer-name": `Video Cards Wrapper`,
                                children: [l(j, {
                                    breakpoint: x,
                                    overrides: {
                                        cu5MD3rWM: {
                                            height: 350,
                                            width: `calc(${c?.width||`100vw`} * 0.8)`,
                                            y: (c ?.y || 0) + 0 + 3192.8934 + 0 + 58 + 0 + 0
                                        },
                                        eKXI3XBTh: {
                                            height: 400,
                                            width: `400px`,
                                            y: (c ?.y || 0) + 0 + 3589.9085 + 0 + 299.5505 + 0
                                        }
                                    },
                                    children: l(T, {
                                        height: 425,
                                        width: `425px`,
                                        y: (c ?.y || 0) + 0 + 3589.9085 + 0 + 287.0505 + 0,
                                        children: l(E, {
                                            className: `framer-1kef8ll-container`,
                                            nodeId: `NuNs1zzjD`,
                                            scopeId: `augiA20Il`,
                                            children: l(j, {
                                                breakpoint: x,
                                                overrides: {
                                                    cu5MD3rWM: {
                                                        variant: `GrWIh2Kbr`
                                                    },
                                                    eKXI3XBTh: {
                                                        variant: `GrWIh2Kbr`
                                                    }
                                                },
                                                children: l(ei, {
                                                    height: `100%`,
                                                    id: `NuNs1zzjD`,
                                                    layoutId: `NuNs1zzjD`,
                                                    PH62DGcwC: `/videos/3.mp4`,
                                                    style: {
                                                        height: `100%`,
                                                        width: `100%`
                                                    },
                                                    TshoKf3A0: `Grok Imagine will let you create fun videos in seconds.`,
                                                    variant: `Vl_grqDPb`,
                                                    width: `100%`,
                                                    Zk6V4eTO2: `Grok 4`
                                                })
                                            })
                                        })
                                    })
                                }), l(j, {
                                    breakpoint: x,
                                    overrides: {
                                        cu5MD3rWM: {
                                            height: 350,
                                            width: `calc(${c?.width||`100vw`} * 0.8)`,
                                            y: (c ?.y || 0) + 0 + 3192.8934 + 0 + 58 + 0 + 360
                                        },
                                        eKXI3XBTh: {
                                            height: 400,
                                            width: `400px`,
                                            y: (c ?.y || 0) + 0 + 3589.9085 + 0 + 299.5505 + 0
                                        }
                                    },
                                    children: l(T, {
                                        height: 425,
                                        width: `425px`,
                                        y: (c ?.y || 0) + 0 + 3589.9085 + 0 + 287.0505 + 0,
                                        children: l(E, {
                                            className: `framer-yrr6ed-container`,
                                            nodeId: `fxXO2k7a3`,
                                            scopeId: `augiA20Il`,
                                            children: l(j, {
                                                breakpoint: x,
                                                overrides: {
                                                    cu5MD3rWM: {
                                                        variant: `uJokriDtm`
                                                    },
                                                    eKXI3XBTh: {
                                                        variant: `uJokriDtm`
                                                    }
                                                },
                                                children: l(Lr, {
                                                    height: `100%`,
                                                    id: `fxXO2k7a3`,
                                                    layoutId: `fxXO2k7a3`,
                                                    PH62DGcwC: `/videos/1.mp4`,
                                                    style: {
                                                        height: `100%`,
                                                        width: `100%`
                                                    },
                                                    TshoKf3A0: `Grok Imagine is fun and slightly addictive.`,
                                                    variant: `A3GAH1FEf`,
                                                    width: `100%`,
                                                    Zk6V4eTO2: `ANI`
                                                })
                                            })
                                        })
                                    })
                                }), l(j, {
                                    breakpoint: x,
                                    overrides: {
                                        cu5MD3rWM: {
                                            height: 350,
                                            width: `calc(${c?.width||`100vw`} * 0.8)`,
                                            y: (c ?.y || 0) + 0 + 3192.8934 + 0 + 58 + 0 + 720
                                        },
                                        eKXI3XBTh: {
                                            height: 400,
                                            width: `400px`,
                                            y: (c ?.y || 0) + 0 + 3589.9085 + 0 + 299.5505 + 0
                                        }
                                    },
                                    children: l(T, {
                                        height: 425,
                                        width: `425px`,
                                        y: (c ?.y || 0) + 0 + 3589.9085 + 0 + 287.0505 + 0,
                                        children: l(E, {
                                            className: `framer-1uy3cto-container`,
                                            nodeId: `YaPaW6x0c`,
                                            scopeId: `augiA20Il`,
                                            children: l(j, {
                                                breakpoint: x,
                                                overrides: {
                                                    cu5MD3rWM: {
                                                        variant: `Fxtupva4n`
                                                    },
                                                    eKXI3XBTh: {
                                                        variant: `Fxtupva4n`
                                                    }
                                                },
                                                children: l(zn, {
                                                    height: `100%`,
                                                    id: `YaPaW6x0c`,
                                                    layoutId: `YaPaW6x0c`,
                                                    PH62DGcwC: `/videos/4.mp4`,
                                                    style: {
                                                        height: `100%`,
                                                        width: `100%`
                                                    },
                                                    TshoKf3A0: `Elon Musk’s iconic childhood photo, brought to life by Grok Imagine ✨`,
                                                    variant: `hEMf1m92A`,
                                                    width: `100%`,
                                                    Zk6V4eTO2: `Baby Elon`
                                                })
                                            })
                                        })
                                    })
                                })]
                            })]
                        }), m(`div`, {
                            className: `framer-927wu3`,
                            "data-framer-name": `Container`,
                            children: [l(`div`, {
                                className: `framer-dffs2u`,
                                "data-framer-name": `Heading Wapper`,
                                children: l(j, {
                                    breakpoint: x,
                                    overrides: {
                                        cu5MD3rWM: {
                                            children: l(_, {
                                                children: l(`h2`, {
                                                    className: `framer-styles-preset-4znnbj`,
                                                    "data-styles-preset": `rZemCCbaP`,
                                                    style: {
                                                        "--framer-text-alignment": `center`
                                                    },
                                                    children: `Elon Musk's next big move in AI. A new visual layer to xAI's Grok - not just understanding the world, but imagining it, creating it, and visualizing it.`
                                                })
                                            }),
                                            fonts: [`Inter`]
                                        },
                                        eKXI3XBTh: {
                                            children: l(_, {
                                                children: l(`h2`, {
                                                    className: `framer-styles-preset-4znnbj`,
                                                    "data-styles-preset": `rZemCCbaP`,
                                                    style: {
                                                        "--framer-text-alignment": `center`
                                                    },
                                                    children: `Elon Musk's next big move in AI. A new visual layer to xAI's Grok - not just understanding the world, but imagining it, creating it, and visualizing it.`
                                                })
                                            }),
                                            fonts: [`Inter`]
                                        }
                                    },
                                    children: l(N, {
                                        __fromCanvasComponent: !0,
                                        children: l(_, {
                                            children: l(`h2`, {
                                                style: {
                                                    "--font-selector": `Q1VTVE9NO1NGIENvbXBhY3QgUm91bmRlZCBTZW1pYm9sZA==`,
                                                    "--framer-font-family": `"SF Compact Rounded Semibold", "SF Compact Rounded Semibold Placeholder", sans-serif`,
                                                    "--framer-font-size": `30px`,
                                                    "--framer-letter-spacing": `-0.05em`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-c05263cd-5c00-49da-b346-feb9cc3f812c, rgb(28, 28, 28))`
                                                },
                                                children: `Elon Musk's next big move in AI. A new visual layer to xAI's Grok - not just understanding the world, but imagining it, creating it, and visualizing it.`
                                            })
                                        }),
                                        className: `framer-3qbxdc`,
                                        fonts: [`CUSTOM;SF Compact Rounded Semibold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    })
                                })
                            }), l(`div`, {
                                className: `framer-17po3f4`,
                                "data-framer-name": `Categories`,
                                children: l(`div`, {
                                    className: `framer-1uj0qfs`,
                                    children: m(`div`, {
                                        className: `framer-1wsx268`,
                                        children: [m(`div`, {
                                            className: `framer-8kxc5f`,
                                            children: [l(j, {
                                                breakpoint: x,
                                                overrides: {
                                                    cu5MD3rWM: {
                                                        width: `calc(min(${c?.width||`100vw`}, 1900px) - 40px)`,
                                                        y: (c ?.y || 0) + 0 + 4320.8934 + 50 + 39.2 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0
                                                    },
                                                    eKXI3XBTh: {
                                                        width: `max((min(${c?.width||`100vw`}, 1900px) - 110px) / 2, 1px)`,
                                                        y: (c ?.y || 0) + 0 + 4475.0095 + 40 + 69.2 + 0 + 0 + 0 + 0 + 0 + 0 + 0
                                                    }
                                                },
                                                children: l(T, {
                                                    height: 376,
                                                    width: `max((max(min(${c?.width||`100vw`}, 1900px) - 100px, 1px) - 10px) / 1.5, 1px)`,
                                                    y: (c ?.y || 0) + 0 + 4475.0095 + 40 + 109 + 0 + 0 + 0 + 0 + 0 + 0,
                                                    children: l(E, {
                                                        className: `framer-1ge6i9q-container`,
                                                        nodeId: `pwNdo8vRL`,
                                                        scopeId: `augiA20Il`,
                                                        children: l(j, {
                                                            breakpoint: x,
                                                            overrides: {
                                                                cu5MD3rWM: {
                                                                    variant: `K2iGUegb2`,
                                                                    y1DNXPRRS: ys({
                                                                        src: `https://framerusercontent.com/images/Vm03zjJrHRXrd31ff3TU9VlHFJk.jpg`
                                                                    }, ``)
                                                                }
                                                            },
                                                            children: l(pa, {
                                                                GEReXC71q: `Build and share surreal, fun, or nostalgic experiences.`,
                                                                height: `100%`,
                                                                HSYB8KLpc: `Creators and Gamers`,
                                                                id: `pwNdo8vRL`,
                                                                layoutId: `pwNdo8vRL`,
                                                                style: {
                                                                    width: `100%`
                                                                },
                                                                variant: `UmxCqzYFZ`,
                                                                width: `100%`,
                                                                y1DNXPRRS: ys({
                                                                    pixelHeight: 1632,
                                                                    pixelWidth: 2912,
                                                                    src: `https://framerusercontent.com/images/iTX6r0rMdSXAvNsc04oncqxpH4.png`,
                                                                    srcSet: `https://framerusercontent.com/images/iTX6r0rMdSXAvNsc04oncqxpH4.png?scale-down-to=512 512w,https://framerusercontent.com/images/iTX6r0rMdSXAvNsc04oncqxpH4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/iTX6r0rMdSXAvNsc04oncqxpH4.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/iTX6r0rMdSXAvNsc04oncqxpH4.png 2912w`
                                                                }, `Service`)
                                                            })
                                                        })
                                                    })
                                                })
                                            }), l(j, {
                                                breakpoint: x,
                                                overrides: {
                                                    cu5MD3rWM: {
                                                        width: `calc(min(${c?.width||`100vw`}, 1900px) - 40px)`,
                                                        y: (c ?.y || 0) + 0 + 4320.8934 + 50 + 39.2 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 391
                                                    },
                                                    eKXI3XBTh: {
                                                        width: `max((min(${c?.width||`100vw`}, 1900px) - 110px) / 2, 1px)`,
                                                        y: (c ?.y || 0) + 0 + 4475.0095 + 40 + 69.2 + 0 + 0 + 0 + 0 + 0 + 0 + 0
                                                    }
                                                },
                                                children: l(T, {
                                                    height: 376,
                                                    width: `max((max(min(${c?.width||`100vw`}, 1900px) - 100px, 1px) - 10px) / 3, 1px)`,
                                                    y: (c ?.y || 0) + 0 + 4475.0095 + 40 + 109 + 0 + 0 + 0 + 0 + 0 + 0,
                                                    children: l(E, {
                                                        className: `framer-su1pi8-container`,
                                                        nodeId: `PEBzhWXV2`,
                                                        scopeId: `augiA20Il`,
                                                        children: l(j, {
                                                            breakpoint: x,
                                                            overrides: {
                                                                cu5MD3rWM: {
                                                                    variant: `LQT7ma4Cm`
                                                                }
                                                            },
                                                            children: l(Wa, {
                                                                GEReXC71q: `Host interactive campaigns in themed environments.`,
                                                                height: `100%`,
                                                                HSYB8KLpc: `Brands and Influencers`,
                                                                id: `PEBzhWXV2`,
                                                                layoutId: `PEBzhWXV2`,
                                                                style: {
                                                                    width: `100%`
                                                                },
                                                                variant: `JFcIDzf0L`,
                                                                width: `100%`,
                                                                y1DNXPRRS: ys({
                                                                    pixelHeight: 2048,
                                                                    pixelWidth: 2048,
                                                                    src: `https://framerusercontent.com/images/v3Mks6JalvjLZ2mnr2ej1HTgtbY.png`,
                                                                    srcSet: `https://framerusercontent.com/images/v3Mks6JalvjLZ2mnr2ej1HTgtbY.png?scale-down-to=512 512w,https://framerusercontent.com/images/v3Mks6JalvjLZ2mnr2ej1HTgtbY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/v3Mks6JalvjLZ2mnr2ej1HTgtbY.png 2048w`
                                                                }, `Service`)
                                                            })
                                                        })
                                                    })
                                                })
                                            })]
                                        }), m(`div`, {
                                            className: `framer-2xsy6e`,
                                            children: [l(j, {
                                                breakpoint: x,
                                                overrides: {
                                                    cu5MD3rWM: {
                                                        width: `calc(min(${c?.width||`100vw`}, 1900px) - 40px)`,
                                                        y: (c ?.y || 0) + 0 + 4320.8934 + 50 + 39.2 + 0 + 0 + 0 + 0 + 0 + 782 + 0 + 0
                                                    },
                                                    eKXI3XBTh: {
                                                        width: `max((min(${c?.width||`100vw`}, 1900px) - 110px) / 2, 1px)`,
                                                        y: (c ?.y || 0) + 0 + 4475.0095 + 40 + 69.2 + 0 + 0 + 0 + 0 + 0 + 386 + 0
                                                    }
                                                },
                                                children: l(T, {
                                                    height: 376,
                                                    width: `max((max(min(${c?.width||`100vw`}, 1900px) - 100px, 1px) - 10px) / 3, 1px)`,
                                                    y: (c ?.y || 0) + 0 + 4475.0095 + 40 + 109 + 0 + 0 + 0 + 0 + 386 + 0,
                                                    children: l(E, {
                                                        className: `framer-8twyrz-container`,
                                                        nodeId: `NTBV9Z9c3`,
                                                        scopeId: `augiA20Il`,
                                                        children: l(j, {
                                                            breakpoint: x,
                                                            overrides: {
                                                                cu5MD3rWM: {
                                                                    variant: `svdswXNTA`
                                                                }
                                                            },
                                                            children: l(ln, {
                                                                GEReXC71q: `Turn culture into playable space. Add rarity. Add rules.`,
                                                                height: `100%`,
                                                                HSYB8KLpc: `Collectors and Communities`,
                                                                id: `NTBV9Z9c3`,
                                                                layoutId: `NTBV9Z9c3`,
                                                                style: {
                                                                    width: `100%`
                                                                },
                                                                variant: `mCwIT4qPN`,
                                                                width: `100%`,
                                                                y1DNXPRRS: ys({
                                                                    pixelHeight: 2048,
                                                                    pixelWidth: 2048,
                                                                    src: `https://framerusercontent.com/images/5XYIpLpSr1gdQ12tstX02Dtv8ss.png`,
                                                                    srcSet: `https://framerusercontent.com/images/5XYIpLpSr1gdQ12tstX02Dtv8ss.png?scale-down-to=512 512w,https://framerusercontent.com/images/5XYIpLpSr1gdQ12tstX02Dtv8ss.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/5XYIpLpSr1gdQ12tstX02Dtv8ss.png 2048w`
                                                                }, `Service`)
                                                            })
                                                        })
                                                    })
                                                })
                                            }), F() && l(j, {
                                                breakpoint: x,
                                                overrides: {
                                                    eKXI3XBTh: {
                                                        width: `max((min(${c?.width||`100vw`}, 1900px) - 110px) / 2, 1px)`,
                                                        y: (c ?.y || 0) + 0 + 4475.0095 + 40 + 69.2 + 0 + 0 + 0 + 0 + 0 + 386 + 0
                                                    }
                                                },
                                                children: l(T, {
                                                    height: 376,
                                                    width: `max((max(min(${c?.width||`100vw`}, 1900px) - 100px, 1px) - 10px) / 1.5, 1px)`,
                                                    y: (c ?.y || 0) + 0 + 4475.0095 + 40 + 109 + 0 + 0 + 0 + 0 + 386 + 0,
                                                    children: l(E, {
                                                        className: `framer-1uq78lc-container hidden-1teekcz`,
                                                        nodeId: `xicXK89kE`,
                                                        scopeId: `augiA20Il`,
                                                        children: l(tr, {
                                                            GEReXC71q: `Create immersive learning spaces or historical recreations using just a few images. Teach through experience, not slides.`,
                                                            height: `100%`,
                                                            HSYB8KLpc: `Educators and Worldbuilders`,
                                                            id: `xicXK89kE`,
                                                            layoutId: `xicXK89kE`,
                                                            style: {
                                                                width: `100%`
                                                            },
                                                            variant: `E4szxQIL6`,
                                                            width: `100%`,
                                                            y1DNXPRRS: ys({
                                                                pixelHeight: 1632,
                                                                pixelWidth: 2912,
                                                                src: `https://framerusercontent.com/images/FGBlRAhd4It6u0C7Z0nm2LmPopY.png`,
                                                                srcSet: `https://framerusercontent.com/images/FGBlRAhd4It6u0C7Z0nm2LmPopY.png?scale-down-to=512 512w,https://framerusercontent.com/images/FGBlRAhd4It6u0C7Z0nm2LmPopY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/FGBlRAhd4It6u0C7Z0nm2LmPopY.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/FGBlRAhd4It6u0C7Z0nm2LmPopY.png 2912w`
                                                            }, `Service`)
                                                        })
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                })
                            }), l(`section`, {
                                className: `framer-1mnicin`,
                                "data-framer-name": `Gallery Section`,
                                id: I,
                                ref: R,
                                children: m(`div`, {
                                    className: `framer-1aaepjm`,
                                    "data-framer-name": `Container`,
                                    children: [m(Mo, {
                                        __framer__animate: {
                                            transition: fs
                                        },
                                        __framer__animateOnce: !0,
                                        __framer__enter: ds,
                                        __framer__exit: ps,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: .5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-s488l0`,
                                        "data-framer-name": `Heading`,
                                        children: [l(N, {
                                            __fromCanvasComponent: !0,
                                            children: l(_, {
                                                children: l(`h1`, {
                                                    className: `framer-styles-preset-clzfvn`,
                                                    "data-styles-preset": `aQAtgruaA`,
                                                    style: {
                                                        "--framer-text-alignment": `center`
                                                    },
                                                    children: `Grok Imagine`
                                                })
                                            }),
                                            className: `framer-1xns8zp`,
                                            effect: bs,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        }), l(N, {
                                            __fromCanvasComponent: !0,
                                            children: l(_, {
                                                children: l(`p`, {
                                                    className: `framer-styles-preset-kkrvh`,
                                                    "data-styles-preset": `bEb99onL_`,
                                                    style: {
                                                        "--framer-text-alignment": `center`
                                                    },
                                                    children: `Turn a few images into fully interactive AI worlds you can explore, share, and customize.`
                                                })
                                            }),
                                            className: `framer-19391df`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        })]
                                    }), m(`div`, {
                                        className: `framer-7drcd0`,
                                        "data-framer-name": `Images wrapper`,
                                        children: [l(`div`, {
                                            className: `framer-1lvybw`,
                                            children: l(j, {
                                                breakpoint: x,
                                                overrides: {
                                                    cu5MD3rWM: {
                                                        __framer__animateOnce: !0,
                                                        background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: V((c ?.y || 0) + 0 + 4320.8934 + 50 + 1217.2 + 7 + 0 + 0 + 318 + 0 + 0 + 0),
                                                            pixelHeight: 2048,
                                                            pixelWidth: 2048,
                                                            sizes: `max(min(min(${c?.width||`100vw`}, 1900px) - 72px, 1200px), 1px)`,
                                                            src: `/images/9ABVFIv3bcWoJcXprD7W0KU55Tc.png`,
                                                            srcSet: `/images/9ABVFIv3bcWoJcXprD7W0KU55Tc.png?scale-down-to=512 512w,/images/9ABVFIv3bcWoJcXprD7W0KU55Tc.png?scale-down-to=1024 1024w,/images/9ABVFIv3bcWoJcXprD7W0KU55Tc.png 2048w`
                                                        }
                                                    },
                                                    eKXI3XBTh: {
                                                        background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: V((c ?.y || 0) + 0 + 4475.0095 + 40 + 881.2 + 60 + 0 + 348 + 0 + 0 + 0),
                                                            pixelHeight: 2048,
                                                            pixelWidth: 2048,
                                                            sizes: `400px`,
                                                            src: `/images/9ABVFIv3bcWoJcXprD7W0KU55Tc.png`,
                                                            srcSet: `/images/9ABVFIv3bcWoJcXprD7W0KU55Tc.png?scale-down-to=512 512w,/images/9ABVFIv3bcWoJcXprD7W0KU55Tc.png?scale-down-to=1024 1024w,/images/9ABVFIv3bcWoJcXprD7W0KU55Tc.png 2048w`
                                                        }
                                                    }
                                                },
                                                children: l(qo, {
                                                    __framer__animate: {
                                                        transition: fs
                                                    },
                                                    __framer__animateOnce: !1,
                                                    __framer__enter: xs,
                                                    __framer__exit: Ss,
                                                    __framer__styleAppearEffectEnabled: !0,
                                                    __framer__threshold: 0,
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: V((c ?.y || 0) + 0 + 4475.0095 + 40 + 944 + 0 + 0 + 348 + 0 + 0 + 0),
                                                        pixelHeight: 2048,
                                                        pixelWidth: 2048,
                                                        sizes: `400px`,
                                                        src: `/images/9ABVFIv3bcWoJcXprD7W0KU55Tc.png`,
                                                        srcSet: `/images/9ABVFIv3bcWoJcXprD7W0KU55Tc.png?scale-down-to=512 512w,/images/9ABVFIv3bcWoJcXprD7W0KU55Tc.png?scale-down-to=1024 1024w,/images/9ABVFIv3bcWoJcXprD7W0KU55Tc.png 2048w`
                                                    },
                                                    className: `framer-1g3rjn4`,
                                                    "data-framer-name": `Image 5`
                                                })
                                            })
                                        }), m(`div`, {
                                            className: `framer-jilopk`,
                                            children: [l(j, {
                                                breakpoint: x,
                                                overrides: {
                                                    cu5MD3rWM: {
                                                        __framer__animateOnce: !0,
                                                        background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: V((c ?.y || 0) + 0 + 4320.8934 + 50 + 1217.2 + 7 + 0 + 0 + 318 + 0 + 260 + 0),
                                                            pixelHeight: 2048,
                                                            pixelWidth: 2048,
                                                            sizes: `max((min(min(${c?.width||`100vw`}, 1900px) - 72px, 1200px) - 20px) / 2, 1px)`,
                                                            src: `/images/n2YL8eMAoUhWHLpeOny7QoGvdZ4.png`,
                                                            srcSet: `/images/n2YL8eMAoUhWHLpeOny7QoGvdZ4.png?scale-down-to=512 512w,/images/n2YL8eMAoUhWHLpeOny7QoGvdZ4.png?scale-down-to=1024 1024w,/images/n2YL8eMAoUhWHLpeOny7QoGvdZ4.png 2048w`
                                                        }
                                                    },
                                                    eKXI3XBTh: {
                                                        background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: V((c ?.y || 0) + 0 + 4475.0095 + 40 + 881.2 + 60 + 0 + 348 + 0 + 330 + 78),
                                                            pixelHeight: 2048,
                                                            pixelWidth: 2048,
                                                            sizes: `228px`,
                                                            src: `/images/n2YL8eMAoUhWHLpeOny7QoGvdZ4.png`,
                                                            srcSet: `/images/n2YL8eMAoUhWHLpeOny7QoGvdZ4.png?scale-down-to=512 512w,/images/n2YL8eMAoUhWHLpeOny7QoGvdZ4.png?scale-down-to=1024 1024w,/images/n2YL8eMAoUhWHLpeOny7QoGvdZ4.png 2048w`
                                                        }
                                                    }
                                                },
                                                children: l(qo, {
                                                    __framer__animate: {
                                                        transition: fs
                                                    },
                                                    __framer__animateOnce: !1,
                                                    __framer__enter: xs,
                                                    __framer__exit: Ss,
                                                    __framer__styleAppearEffectEnabled: !0,
                                                    __framer__threshold: 0,
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: V((c ?.y || 0) + 0 + 4475.0095 + 40 + 944 + 0 + 0 + 348 + 0 + 330 + 78),
                                                        pixelHeight: 2048,
                                                        pixelWidth: 2048,
                                                        sizes: `228px`,
                                                        src: `/images/n2YL8eMAoUhWHLpeOny7QoGvdZ4.png`,
                                                        srcSet: `/images/n2YL8eMAoUhWHLpeOny7QoGvdZ4.png?scale-down-to=512 512w,/images/n2YL8eMAoUhWHLpeOny7QoGvdZ4.png?scale-down-to=1024 1024w,/images/n2YL8eMAoUhWHLpeOny7QoGvdZ4.png 2048w`
                                                    },
                                                    className: `framer-1tn6vnj`,
                                                    "data-framer-name": `Image 3`
                                                })
                                            }), l(j, {
                                                breakpoint: x,
                                                overrides: {
                                                    cu5MD3rWM: {
                                                        __framer__animateOnce: !0,
                                                        background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: V((c ?.y || 0) + 0 + 4320.8934 + 50 + 1217.2 + 7 + 0 + 0 + 318 + 0 + 260 + 0),
                                                            pixelHeight: 2048,
                                                            pixelWidth: 2048,
                                                            sizes: `max((min(min(${c?.width||`100vw`}, 1900px) - 72px, 1200px) - 20px) / 2, 1px)`,
                                                            src: `/images/SvCfzq2DqqSkz3mHcn822ehiQz8.png`,
                                                            srcSet: `/images/SvCfzq2DqqSkz3mHcn822ehiQz8.png?scale-down-to=512 512w,/images/SvCfzq2DqqSkz3mHcn822ehiQz8.png?scale-down-to=1024 1024w,/images/SvCfzq2DqqSkz3mHcn822ehiQz8.png 2048w`
                                                        }
                                                    },
                                                    eKXI3XBTh: {
                                                        background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: V((c ?.y || 0) + 0 + 4475.0095 + 40 + 881.2 + 60 + 0 + 348 + 0 + 330 + 0),
                                                            pixelHeight: 2048,
                                                            pixelWidth: 2048,
                                                            sizes: `396px`,
                                                            src: `/images/SvCfzq2DqqSkz3mHcn822ehiQz8.png`,
                                                            srcSet: `/images/SvCfzq2DqqSkz3mHcn822ehiQz8.png?scale-down-to=512 512w,/images/SvCfzq2DqqSkz3mHcn822ehiQz8.png?scale-down-to=1024 1024w,/images/SvCfzq2DqqSkz3mHcn822ehiQz8.png 2048w`
                                                        }
                                                    }
                                                },
                                                children: l(qo, {
                                                    __framer__animate: {
                                                        transition: fs
                                                    },
                                                    __framer__animateOnce: !1,
                                                    __framer__enter: xs,
                                                    __framer__exit: Ss,
                                                    __framer__styleAppearEffectEnabled: !0,
                                                    __framer__threshold: 0,
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: V((c ?.y || 0) + 0 + 4475.0095 + 40 + 944 + 0 + 0 + 348 + 0 + 330 + 0),
                                                        pixelHeight: 2048,
                                                        pixelWidth: 2048,
                                                        sizes: `396px`,
                                                        src: `/images/SvCfzq2DqqSkz3mHcn822ehiQz8.png`,
                                                        srcSet: `/images/SvCfzq2DqqSkz3mHcn822ehiQz8.png?scale-down-to=512 512w,/images/SvCfzq2DqqSkz3mHcn822ehiQz8.png?scale-down-to=1024 1024w,/images/SvCfzq2DqqSkz3mHcn822ehiQz8.png 2048w`
                                                    },
                                                    className: `framer-1ueeeq7`,
                                                    "data-framer-name": `Image 4`
                                                })
                                            })]
                                        }), m(`div`, {
                                            className: `framer-1g4v7c9`,
                                            children: [l(j, {
                                                breakpoint: x,
                                                overrides: {
                                                    cu5MD3rWM: {
                                                        __framer__animateOnce: !0,
                                                        background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: V((c ?.y || 0) + 0 + 4320.8934 + 50 + 1217.2 + 7 + 0 + 0 + 318 + 0 + 420 + 20),
                                                            pixelHeight: 2048,
                                                            pixelWidth: 2048,
                                                            sizes: `max((min(min(${c?.width||`100vw`}, 1900px) - 72px, 1200px) - 20px) / 2, 1px)`,
                                                            src: `/images/trjyLr5pp6IgZ6wn5V8tqHHZ8Hc.png`,
                                                            srcSet: `/images/trjyLr5pp6IgZ6wn5V8tqHHZ8Hc.png?scale-down-to=512 512w,/images/trjyLr5pp6IgZ6wn5V8tqHHZ8Hc.png?scale-down-to=1024 1024w,/images/trjyLr5pp6IgZ6wn5V8tqHHZ8Hc.png 2048w`
                                                        }
                                                    },
                                                    eKXI3XBTh: {
                                                        background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: V((c ?.y || 0) + 0 + 4475.0095 + 40 + 881.2 + 60 + 0 + 348 + 0 + 778 + 70),
                                                            pixelHeight: 2048,
                                                            pixelWidth: 2048,
                                                            sizes: `269px`,
                                                            src: `/images/trjyLr5pp6IgZ6wn5V8tqHHZ8Hc.png`,
                                                            srcSet: `/images/trjyLr5pp6IgZ6wn5V8tqHHZ8Hc.png?scale-down-to=512 512w,/images/trjyLr5pp6IgZ6wn5V8tqHHZ8Hc.png?scale-down-to=1024 1024w,/images/trjyLr5pp6IgZ6wn5V8tqHHZ8Hc.png 2048w`
                                                        }
                                                    }
                                                },
                                                children: l(qo, {
                                                    __framer__animate: {
                                                        transition: fs
                                                    },
                                                    __framer__animateOnce: !1,
                                                    __framer__enter: xs,
                                                    __framer__exit: Ss,
                                                    __framer__styleAppearEffectEnabled: !0,
                                                    __framer__threshold: 0,
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: V((c ?.y || 0) + 0 + 4475.0095 + 40 + 944 + 0 + 0 + 348 + 0 + 778 + 70),
                                                        pixelHeight: 2048,
                                                        pixelWidth: 2048,
                                                        sizes: `269px`,
                                                        src: `/images/trjyLr5pp6IgZ6wn5V8tqHHZ8Hc.png`,
                                                        srcSet: `/images/trjyLr5pp6IgZ6wn5V8tqHHZ8Hc.png?scale-down-to=512 512w,/images/trjyLr5pp6IgZ6wn5V8tqHHZ8Hc.png?scale-down-to=1024 1024w,/images/trjyLr5pp6IgZ6wn5V8tqHHZ8Hc.png 2048w`
                                                    },
                                                    className: `framer-16pqtr5`,
                                                    "data-framer-name": `Image 1`
                                                })
                                            }), l(j, {
                                                breakpoint: x,
                                                overrides: {
                                                    cu5MD3rWM: {
                                                        __framer__animateOnce: !0,
                                                        background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: V((c ?.y || 0) + 0 + 4320.8934 + 50 + 1217.2 + 7 + 0 + 0 + 318 + 0 + 420 + 20),
                                                            pixelHeight: 2048,
                                                            pixelWidth: 2048,
                                                            sizes: `max((min(min(${c?.width||`100vw`}, 1900px) - 72px, 1200px) - 20px) / 2, 1px)`,
                                                            src: `/images/f885UojIRHKUZeDuj1BWOzeoX0.png`,
                                                            srcSet: `/images/f885UojIRHKUZeDuj1BWOzeoX0.png?scale-down-to=512 512w,/images/f885UojIRHKUZeDuj1BWOzeoX0.png?scale-down-to=1024 1024w,/images/f885UojIRHKUZeDuj1BWOzeoX0.png 2048w`
                                                        }
                                                    },
                                                    eKXI3XBTh: {
                                                        background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: V((c ?.y || 0) + 0 + 4475.0095 + 40 + 881.2 + 60 + 0 + 348 + 0 + 778 + 70),
                                                            pixelHeight: 2048,
                                                            pixelWidth: 2048,
                                                            sizes: `373px`,
                                                            src: `/images/f885UojIRHKUZeDuj1BWOzeoX0.png`,
                                                            srcSet: `/images/f885UojIRHKUZeDuj1BWOzeoX0.png?scale-down-to=512 512w,/images/f885UojIRHKUZeDuj1BWOzeoX0.png?scale-down-to=1024 1024w,/images/f885UojIRHKUZeDuj1BWOzeoX0.png 2048w`
                                                        }
                                                    }
                                                },
                                                children: l(qo, {
                                                    __framer__animate: {
                                                        transition: fs
                                                    },
                                                    __framer__animateOnce: !1,
                                                    __framer__enter: xs,
                                                    __framer__exit: Ss,
                                                    __framer__styleAppearEffectEnabled: !0,
                                                    __framer__threshold: 0,
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: V((c ?.y || 0) + 0 + 4475.0095 + 40 + 944 + 0 + 0 + 348 + 0 + 778 + 70),
                                                        pixelHeight: 2048,
                                                        pixelWidth: 2048,
                                                        sizes: `373px`,
                                                        src: `/images/f885UojIRHKUZeDuj1BWOzeoX0.png`,
                                                        srcSet: `/images/f885UojIRHKUZeDuj1BWOzeoX0.png?scale-down-to=512 512w,/images/f885UojIRHKUZeDuj1BWOzeoX0.png?scale-down-to=1024 1024w,/images/f885UojIRHKUZeDuj1BWOzeoX0.png 2048w`
                                                    },
                                                    className: `framer-80pcq7`,
                                                    "data-framer-name": `Image 2`
                                                })
                                            })]
                                        }), l(j, {
                                            breakpoint: x,
                                            overrides: {
                                                cu5MD3rWM: {
                                                    width: `min(min(${c?.width||`100vw`}, 1900px) - 72px, 1200px)`,
                                                    y: (c ?.y || 0) + 0 + 4320.8934 + 50 + 1217.2 + 7 + 0 + 0 + 318 + 0 + 620
                                                },
                                                eKXI3XBTh: {
                                                    y: (c ?.y || 0) + 0 + 4475.0095 + 40 + 881.2 + 60 + 0 + 348 + 0 + 1151
                                                }
                                            },
                                            children: l(T, {
                                                height: 522,
                                                width: `min(max(min(${c?.width||`100vw`}, 1900px) - 132px, 1px), 1200px)`,
                                                y: (c ?.y || 0) + 0 + 4475.0095 + 40 + 944 + 0 + 0 + 348 + 0 + 1151,
                                                children: l(E, {
                                                    className: `framer-1nd4u9z-container`,
                                                    nodeId: `fhNoRC4na`,
                                                    rendersWithMotion: !0,
                                                    scopeId: `augiA20Il`,
                                                    children: l(j, {
                                                        breakpoint: x,
                                                        overrides: {
                                                            eKXI3XBTh: {
                                                                rjk_eQu76: ys({
                                                                    pixelHeight: 499,
                                                                    pixelWidth: 497,
                                                                    src: `/images/main.webp`
                                                                }, ``)
                                                            }
                                                        },
                                                        children: l(Yo, {
                                                            __framer__animateOnce: !0,
                                                            __framer__obscuredVariantId: `KRJpZNjW0`,
                                                            __framer__threshold: .5,
                                                            __framer__variantAppearEffectEnabled: !0,
                                                            __framer__visibleVariantId: `PJhnXyMuc`,
                                                            height: `100%`,
                                                            id: `fhNoRC4na`,
                                                            layoutId: `fhNoRC4na`,
                                                            rjk_eQu76: ys({
                                                                pixelHeight: 498,
                                                                pixelWidth: 1500,
                                                                src: `/images/main.webp`,
                                                                srcSet: `/images/main.webp?scale-down-to=512 512w,/images/main.webp?scale-down-to=1024 1024w,/images/main.webp 1500w`
                                                            }, ``),
                                                            style: {
                                                                width: `100%`
                                                            },
                                                            variant: `KRJpZNjW0`,
                                                            width: `100%`
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })]
                                })
                            }), l(j, {
                                breakpoint: x,
                                overrides: {
                                    cu5MD3rWM: {
                                        y: (c ?.y || 0) + 0 + 4320.8934 + 50 + 2704.2
                                    },
                                    eKXI3XBTh: {
                                        y: (c ?.y || 0) + 0 + 4475.0095 + 40 + 3012.2
                                    }
                                },
                                children: l(T, {
                                    height: 49,
                                    y: (c ?.y || 0) + 0 + 4475.0095 + 40 + 3038,
                                    children: l(Po, {
                                        animate: ss,
                                        className: `framer-q4hs7b-container`,
                                        "data-framer-appear-id": `q4hs7b`,
                                        initial: cs,
                                        nodeId: `uMl9GXH5C`,
                                        optimized: !0,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: l(j, {
                                            breakpoint: x,
                                            overrides: {
                                                cu5MD3rWM: {
                                                    variant: `THjstnVKy`
                                                },
                                                eKXI3XBTh: {
                                                    variant: `THjstnVKy`
                                                }
                                            },
                                            children: l(_i, {
                                                height: `100%`,
                                                id: `uMl9GXH5C`,
                                                k2d02rYDk: `Buy $IMAGINE`,
                                                layoutId: `uMl9GXH5C`,
                                                variant: `gsmbPTvlC`,
                                                width: `100%`
                                            })
                                        })
                                    })
                                })
                            })]
                        }), l(T, {
                            children: l(E, {
                                className: `framer-1ocjmqz-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `pawHpkmp6`,
                                scopeId: `augiA20Il`,
                                children: l(At, {
                                    height: `100%`,
                                    id: `pawHpkmp6`,
                                    intensity: 10,
                                    layoutId: `pawHpkmp6`,
                                    width: `100%`
                                })
                            })
                        })]
                    }), l(`div`, {
                        id: `overlay`
                    })]
                })
            })
        }), Ds = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-OJrD8.framer-lux5qc, .framer-OJrD8 .framer-lux5qc { display: block; }`, `.framer-OJrD8.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-84939536-f364-4366-b20a-541cadebffd9, rgba(0, 0, 0, 0.5)); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1440px; }`, `.framer-OJrD8 .framer-17h4dh5 { align-content: center; align-items: center; background-color: var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, #ffffff); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 42px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`, `.framer-OJrD8 .framer-d6i8hw-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`, `.framer-OJrD8 .framer-vckulk { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: 100%; justify-content: center; overflow: hidden; padding: 32px 62px 32px 62px; position: relative; width: 1px; z-index: 2; }`, `.framer-OJrD8 .framer-vjr7so { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`, `.framer-OJrD8 .framer-3rij7w-container { flex: none; height: 120px; position: relative; width: 100%; }`, `.framer-OJrD8 .framer-1u3idm6 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-OJrD8 .framer-b7dwq-container, .framer-OJrD8 .framer-1ocjmqz-container { flex: none; height: auto; position: relative; width: auto; }`, `.framer-OJrD8 .framer-1e2q274 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-OJrD8 .framer-1ipk8uc { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`, `.framer-OJrD8 .framer-1g7xz7c { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 360px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-OJrD8 .framer-1atuj0k-container, .framer-OJrD8 .framer-q4hs7b-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`, `.framer-OJrD8 .framer-1l7sjd4-container { flex: none; height: 32px; position: relative; width: 20px; will-change: var(--framer-will-change-effect-override, transform); }`, `.framer-OJrD8 .framer-pmyxpx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 152.3908523908524vh; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-OJrD8 .framer-194lqnz { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: visible; padding: 20px; position: sticky; top: 0px; width: 1px; z-index: 1; }`, `.framer-OJrD8 .framer-9bvh77 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 0px; position: absolute; right: 0px; top: 0px; white-space: pre; z-index: 2; }`, `.framer-OJrD8 .framer-tpvi5m { align-content: center; align-items: center; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px; position: sticky; top: 0px; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 4; }`, `.framer-OJrD8 .framer-19exss5-container { flex: none; height: 100%; position: relative; width: 100%; }`, `.framer-OJrD8 .framer-t7ewct { align-content: flex-start; align-items: flex-start; background-color: var(--token-0456e135-ad4a-4595-954f-1784d79b204a, #f7f7f7); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 42px; height: min-content; justify-content: center; overflow: hidden; padding: 80px 16px 120px 16px; position: relative; width: 100%; z-index: 1; }`, `.framer-OJrD8 .framer-1v9gu1z { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 42px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 1px; }`, `.framer-OJrD8 .framer-ukfty1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 800px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-OJrD8 .framer-1vpt5vz, .framer-OJrD8 .framer-1f6z4jl, .framer-OJrD8 .framer-1r0phqy, .framer-OJrD8 .framer-1h9lral, .framer-OJrD8 .framer-ynfi31, .framer-OJrD8 .framer-1cozyau, .framer-OJrD8 .framer-s9utlx { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-OJrD8 .framer-1c4xrx5, .framer-OJrD8 .framer-19391df { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 460px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-OJrD8 .framer-q4f7bi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-OJrD8 .framer-tvit2h { align-self: stretch; display: grid; flex: 1.5 0 0px; gap: 24px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`, `.framer-OJrD8 .framer-gmtqd { align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, #ffffff); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; justify-self: start; overflow: hidden; padding: 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`, `.framer-OJrD8 .framer-v8vq, .framer-OJrD8 .framer-1gthy3f, .framer-OJrD8 .framer-1v5n4o0 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 0; }`, `.framer-OJrD8 .framer-1f43cg, .framer-OJrD8 .framer-esxw5w { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-OJrD8 .framer-u38pzw { align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, #ffffff); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; justify-self: start; overflow: hidden; padding: 16px 24px 24px 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`, `.framer-OJrD8 .framer-ycmc3 { align-content: center; align-items: center; align-self: start; background-color: var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, #ffffff); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: 100%; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`, `.framer-OJrD8 .framer-1n701u0 { background-color: #ededed; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 0; }`, `.framer-OJrD8 .framer-1baxgrj { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 1px; }`, `.framer-OJrD8 .framer-10b432y, .framer-OJrD8 .framer-nu4vr6, .framer-OJrD8 .framer-s3ggse, .framer-OJrD8 .framer-1yytfsz, .framer-OJrD8 .framer-kvr0fg { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, `.framer-OJrD8 .framer-4gqdwr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`, `.framer-OJrD8 .framer-pui888 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`, `.framer-OJrD8 .framer-14tkfxo { align-content: flex-end; align-items: flex-end; background-color: var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, #ffffff); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 560px; justify-content: space-between; overflow: hidden; padding: 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`, `.framer-OJrD8 .framer-y6anpj { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 2; }`, `.framer-OJrD8 .framer-1md89rs { align-content: center; align-items: center; background-color: var(--token-0456e135-ad4a-4595-954f-1784d79b204a, #f7f7f7); border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; bottom: 70px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 6px 24px 6px 6px; position: absolute; transform: translateX(-50%); width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`, `.framer-OJrD8 .framer-1ni3po { align-content: center; align-items: center; background-color: #000000; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 6px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`, `.framer-OJrD8 .framer-vu62m5-container { flex: none; height: 18px; position: relative; width: 18px; }`, `.framer-OJrD8 .framer-1ja9it5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`, `.framer-OJrD8 .framer-52gekv { align-content: center; align-items: center; display: flex; flex: 0.8 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-OJrD8 .framer-hzpz2s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 9px 0px; position: relative; width: 100%; }`, `.framer-OJrD8 .framer-qctifv { align-content: flex-end; align-items: flex-end; background-color: var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, #000000); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 16px 24px 16px 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`, `.framer-OJrD8 .framer-14hpyqh-container { flex: none; height: 24px; left: 13px; position: absolute; top: calc(50.314465408805056% - 24px / 2); width: 24px; z-index: 1; }`, `.framer-OJrD8 .framer-1qbe4gf-container, .framer-OJrD8 .framer-1nd4u9z-container { flex: none; height: auto; position: relative; width: 100%; }`, `.framer-OJrD8 .framer-jd05u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: 88.51010101010101vh; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`, `.framer-OJrD8 .framer-1sn6wje { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1900px; overflow: hidden; padding: 0px 50px 0px 50px; position: relative; width: 100%; z-index: 1; }`, `.framer-OJrD8 .framer-16kc5b5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: 50px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`, `.framer-OJrD8 .framer-dcbp7o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`, `.framer-OJrD8 .framer-1kef8ll-container, .framer-OJrD8 .framer-yrr6ed-container, .framer-OJrD8 .framer-1uy3cto-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 425px); position: relative; width: 425px; }`, `.framer-OJrD8 .framer-927wu3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 73px; height: min-content; justify-content: center; max-width: 1900px; overflow: visible; padding: 40px 50px 50px 50px; position: relative; width: 100%; z-index: 1; }`, `.framer-OJrD8 .framer-dffs2u { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1900px; mix-blend-mode: difference; overflow: hidden; padding: 0px; position: relative; width: 50%; z-index: 6; }`, `.framer-OJrD8 .framer-3qbxdc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 900px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-OJrD8 .framer-17po3f4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-OJrD8 .framer-1uj0qfs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-OJrD8 .framer-1wsx268 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`, `.framer-OJrD8 .framer-8kxc5f, .framer-OJrD8 .framer-2xsy6e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`, `.framer-OJrD8 .framer-1ge6i9q-container, .framer-OJrD8 .framer-1uq78lc-container { flex: 2 0 0px; height: auto; position: relative; width: 1px; }`, `.framer-OJrD8 .framer-su1pi8-container, .framer-OJrD8 .framer-8twyrz-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`, `.framer-OJrD8 .framer-1mnicin { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 42px; height: min-content; justify-content: center; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: 100%; z-index: 1; }`, `.framer-OJrD8 .framer-1aaepjm { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 1px; }`, `.framer-OJrD8 .framer-s488l0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: sticky; top: 160px; width: 100%; z-index: 2; }`, `.framer-OJrD8 .framer-1xns8zp { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`, `.framer-OJrD8 .framer-7drcd0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`, `.framer-OJrD8 .framer-1lvybw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 40px; position: relative; width: 100%; }`, `.framer-OJrD8 .framer-1g3rjn4 { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; flex: none; height: 330px; overflow: hidden; position: relative; width: 400px; will-change: var(--framer-will-change-override, transform); }`, `.framer-OJrD8 .framer-jilopk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 0px 0px 290px; position: relative; width: 100%; }`, `.framer-OJrD8 .framer-1tn6vnj { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; flex: none; height: 292px; overflow: hidden; position: relative; width: 228px; will-change: var(--framer-will-change-override, transform); }`, `.framer-OJrD8 .framer-1ueeeq7 { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; flex: none; height: 448px; overflow: hidden; position: relative; width: 396px; will-change: var(--framer-will-change-override, transform); }`, `.framer-OJrD8 .framer-1g4v7c9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 70px 100px 60px 140px; position: relative; width: 100%; }`, `.framer-OJrD8 .framer-16pqtr5 { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; flex: none; height: 175px; overflow: hidden; position: relative; width: 269px; will-change: var(--framer-will-change-override, transform); }`, `.framer-OJrD8 .framer-80pcq7 { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; flex: none; height: 243px; overflow: hidden; position: relative; width: 373px; will-change: var(--framer-will-change-override, transform); }`, ...ge, ...pe, ..._o, ...To, ...ir, ...he, ...me, ...xo, `@media (min-width: 810px) and (max-width: 1439px) { .framer-OJrD8.framer-72rtr7 { width: 810px; } .framer-OJrD8 .framer-vckulk { padding: 32px; } .framer-OJrD8 .framer-1sn6wje, .framer-OJrD8 .framer-dffs2u { justify-content: flex-start; } .framer-OJrD8 .framer-dcbp7o { overflow: visible; } .framer-OJrD8 .framer-1kef8ll-container, .framer-OJrD8 .framer-yrr6ed-container, .framer-OJrD8 .framer-1uy3cto-container { height: var(--framer-aspect-ratio-supported, 400px); width: 400px; } .framer-OJrD8 .framer-927wu3 { gap: 50px; } .framer-OJrD8 .framer-3qbxdc { max-width: 612px; width: auto; } .framer-OJrD8 .framer-1uj0qfs { flex-direction: column; } .framer-OJrD8 .framer-1wsx268 { flex: none; width: 100%; } .framer-OJrD8 .framer-1ge6i9q-container, .framer-OJrD8 .framer-1uq78lc-container { flex: 1 0 0px; } .framer-OJrD8 .framer-1mnicin { padding: 60px 16px 0px 16px; } .framer-OJrD8 .framer-1lvybw { padding: 0px; } .framer-OJrD8 .framer-jilopk { padding: 0px 0px 0px 24px; } .framer-OJrD8 .framer-1g4v7c9 { padding: 70px 24px 60px 0px; }}`, `@media (max-width: 809px) { .framer-OJrD8.framer-72rtr7 { width: 390px; } .framer-OJrD8 .framer-17h4dh5 { flex-direction: column; height: 89vh; } .framer-OJrD8 .framer-vckulk { height: 1px; padding: 32px 16px 32px 16px; width: 100%; } .framer-OJrD8 .framer-vjr7so { height: 90%; padding: 30px 0px 0px 0px; } .framer-OJrD8 .framer-3rij7w-container { height: 64px; left: 0px; order: 0; position: absolute; right: 0px; top: 54px; width: unset; z-index: 1; } .framer-OJrD8 .framer-1u3idm6 { align-content: flex-start; align-items: flex-start; flex: 0.9 0 0px; height: 1px; order: 1; padding: 100px 0px 0px 0px; } .framer-OJrD8 .framer-1e2q274 { order: 2; } .framer-OJrD8 .framer-pmyxpx { height: 79.739336492891vh; } .framer-OJrD8 .framer-194lqnz { height: 83.88625592417061vh; top: 20px; } .framer-OJrD8 .framer-tpvi5m { height: 60vh; } .framer-OJrD8 .framer-19exss5-container { order: 0; } .framer-OJrD8 .framer-t7ewct { padding: 80px 16px 49px 16px; } .framer-OJrD8 .framer-q4f7bi { flex-direction: column; gap: 12px; } .framer-OJrD8 .framer-tvit2h { align-self: unset; flex: none; gap: 12px; grid-auto-rows: min-content; grid-template-rows: repeat(2, min-content); height: min-content; width: 100%; } .framer-OJrD8 .framer-gmtqd, .framer-OJrD8 .framer-u38pzw { height: 320px; } .framer-OJrD8 .framer-ycmc3 { height: 179px; } .framer-OJrD8 .framer-pui888 { flex: none; gap: 12px; width: 100%; } .framer-OJrD8 .framer-jd05u { gap: 26px; height: min-content; } .framer-OJrD8 .framer-1sn6wje { flex-direction: column; padding: 0px; } .framer-OJrD8 .framer-16kc5b5 { flex: none; height: 32px; width: 100%; } .framer-OJrD8 .framer-dcbp7o { flex-direction: column; width: 80%; } .framer-OJrD8 .framer-1kef8ll-container, .framer-OJrD8 .framer-yrr6ed-container, .framer-OJrD8 .framer-1uy3cto-container { height: var(--framer-aspect-ratio-supported, 312px); width: 100%; } .framer-OJrD8 .framer-927wu3 { gap: 20px; padding: 50px 20px 50px 20px; } .framer-OJrD8 .framer-dffs2u { align-content: center; align-items: center; width: 100%; } .framer-OJrD8 .framer-1uj0qfs, .framer-OJrD8 .framer-8kxc5f, .framer-OJrD8 .framer-2xsy6e { flex-direction: column; gap: 15px; } .framer-OJrD8 .framer-1wsx268 { flex: none; gap: 15px; width: 100%; } .framer-OJrD8 .framer-1ge6i9q-container, .framer-OJrD8 .framer-su1pi8-container, .framer-OJrD8 .framer-8twyrz-container { flex: none; width: 100%; } .framer-OJrD8 .framer-1mnicin { flex-direction: column; padding: 7px 16px 0px 16px; } .framer-OJrD8 .framer-1aaepjm { flex: none; gap: 30px; width: 100%; } .framer-OJrD8 .framer-s488l0 { position: relative; top: unset; } .framer-OJrD8 .framer-1lvybw { padding: 0px 0px 20px 0px; } .framer-OJrD8 .framer-1g3rjn4 { flex: 1 0 0px; height: 240px; width: 1px; } .framer-OJrD8 .framer-jilopk { gap: 20px; justify-content: flex-start; padding: 0px; } .framer-OJrD8 .framer-1tn6vnj, .framer-OJrD8 .framer-16pqtr5 { align-self: stretch; flex: 1 0 0px; height: auto; width: 1px; } .framer-OJrD8 .framer-1ueeeq7, .framer-OJrD8 .framer-80pcq7 { flex: 1 0 0px; height: 160px; width: 1px; } .framer-OJrD8 .framer-1g4v7c9 { gap: 20px; justify-content: flex-start; padding: 20px 0px 20px 0px; }}`, `@media (min-width: 1900px) { .framer-OJrD8.framer-72rtr7 { width: 1900px; } .framer-OJrD8 .framer-3rij7w-container { height: 130px; }}`], Os = Z(Es, Ds, `framer-OJrD8`), ks = Os, Os.displayName = `Home`, Os.defaultProps = {
            height: 7552,
            width: 1440
        }, F(Os, [{
            explicitInter: !0,
            fonts: [{
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`
            }, {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`
            }, {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`
            }, {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`
            }, {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`
            }, {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`
            }, {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`
            }, {
                family: `SF Compact Rounded Bold`,
                source: `custom`,
                url: `https://framerusercontent.com/assets/LPInd8Pbt9JhofnfPTcSevfQkU.woff2`
            }, {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
                weight: `700`
            }, {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
                weight: `700`
            }, {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
                weight: `700`
            }, {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
                weight: `700`
            }, {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
                weight: `700`
            }, {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
                weight: `700`
            }, {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
                weight: `700`
            }, {
                family: `SF Compact Rounded Light`,
                source: `custom`,
                url: `https://framerusercontent.com/assets/jh9xsh6xsa10enATUE44GMp8ZCA.otf`
            }, {
                family: `SF Compact Rounded Medium`,
                source: `custom`,
                url: `https://framerusercontent.com/assets/s7cBURsJDxecLqlTXIXQ6nVz0o.woff2`
            }, {
                family: `Urbanist`,
                source: `fontshare`,
                style: `normal`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/RFRIJEFDDNYP2G3SPLVDDAM6LQXTHLSW/F4KOPAGTNOYCQKYEBAKSIKS536ETV6GN/AEP5JZTJJB3JMLBFSBTZLRSVGYD73SDZ.woff2`,
                weight: `500`
            }, {
                family: `SF Compact Rounded Semibold`,
                source: `custom`,
                url: `https://framerusercontent.com/assets/CRNOcOM8NAYf5f6RmDbFrUUJqY8.otf`
            }]
        }, ...Oo, ...Ao, ...jo, ...No, ...Fo, ...Lo, ...Ro, ...zo, ...Bo, ...Vo, ...Ho, ...Uo, ...Wo, ...Go, ...Ko, ...Jo, ...Xo, ...B(be), ...B(_e), ...B(go), ...B(wo), ...B(rr), ...B(ye), ...B(ve), ...B(bo)], {
            supportsExplicitInterCodegen: !0
        }), As = {
            exports: {
                default: {
                    type: `reactComponent`,
                    name: `FrameraugiA20Il`,
                    slots: [],
                    annotations: {
                        framerDisplayContentsDiv: `false`,
                        framerContractVersion: `1`,
                        framerIntrinsicWidth: `1440`,
                        framerImmutableVariables: `true`,
                        framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"eKXI3XBTh":{"layout":["fixed","auto"]},"cu5MD3rWM":{"layout":["fixed","auto"]},"bSBjqqQER":{"layout":["fixed","auto"]}}}`,
                        framerAcceptsLayoutTemplate: `true`,
                        framerScrollSections: `{"iOopVsPls":{"pattern":":iOopVsPls","name":"showreel"},"rE4l_OxNj":{"pattern":":rE4l_OxNj","name":"gallery"}}`,
                        framerAutoSizeImages: `true`,
                        framerColorSyntax: `true`,
                        framerResponsiveScreen: ``,
                        framerIntrinsicHeight: `7552`,
                        framerComponentViewportWidth: `true`
                    }
                },
                Props: {
                    type: `tsType`,
                    annotations: {
                        framerContractVersion: `1`
                    }
                },
                __FramerMetadata__: {
                    type: `variable`
                }
            }
        }
    });
js();
export {
    As as __FramerMetadata__, ks as
    default
};
//# sourceMappingURL=RUPHXXBZuTDALlCDddGdniNYxkQzPHiUBS-nG5BunbM.CF7GJBhZ.mjs.map