import {
    __esmMin as e
} from "./rolldown-runtime.DXOHPd_4.mjs";
import {
    B as t,
    Y as n,
    Z as r,
    ae as i,
    d as a,
    init_client as o,
    init_jsx_runtime as s,
    init_npm_react_18_2 as c,
    init_npm_react_dom_18_2 as l,
    init_ssg_sandbox_shims as u,
    p as d,
    pe as f,
    r as p,
    re as m,
    se as h,
    u as g,
    window as _,
    x as v
} from "./react.Dwjas_Sf.mjs";
import {
    LayoutGroup as y,
    MotionConfigContext as b,
    init_framer_motion_5EXT2AMG as x,
    motion as S
} from "./motion.BlEiWAc3.mjs";
import {
    ComponentViewportProvider as C,
    Container as w,
    ControlType as T,
    ErrorPlaceholder as E,
    GeneratedComponentContext as D,
    GracefullyDegradingErrorBoundary as O,
    Image2 as k,
    LibraryFeaturesProvider as A,
    Link as j,
    PageEffectsProvider as M,
    PageRoot as N,
    PropertyOverrides2 as P,
    RenderTarget as ee,
    ResolveLinks as te,
    RichText as ne,
    SmartComponentScopedContainer as F,
    addFonts as I,
    addPropertyControls as L,
    cx as R,
    getFonts as z,
    getFontsFromSharedStyle as re,
    getLoadingLazyAtYPosition as ie,
    getPropertyControls as ae,
    inferInitialRouteFromPath as oe,
    init_framer_RT4SPRVC as B,
    installFlexboxGapWorkaroundIfNeeded as se,
    lazy as ce,
    markHydrationStart as le,
    patchRoutesForABTesting as ue,
    removeHiddenBreakpointLayersV2 as de,
    turnOffReactEventHandling as fe,
    useActiveVariantCallback as pe,
    useComponentViewport as me,
    useCustomCursors as he,
    useHydratedBreakpointVariants as ge,
    useIsOnFramerCanvas as _e,
    useLocaleInfo as V,
    useOnVariantChange as ve,
    useRouter as ye,
    useVariantState as H,
    withCSS as U,
    withFX as be,
    withOptimizedAppearEffect as xe,
    withPerformanceMarks as Se,
    withVariantAppearEffect as Ce,
    yieldToMain as we
} from "./framer.IOnGdwAS.mjs";
import {
    Icon as Te,
    className$2 as Ee,
    className$3 as De,
    css$2 as Oe,
    css$3 as ke,
    fonts$2 as Ae,
    fonts$3 as je,
    init_MdHF6Jcfy as Me,
    init_Phosphor as Ne,
    init_bEb99onL_ as Pe
} from "./shared-lib.DlfjeACi.mjs";

function Fe(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var Ie, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, W, Xe, Ze = e(() => {
    s(), B(), x(), c(), Ne(), Ie = z(Te), Le = ae(Te), Re = {
        w4QgrJY8C: {
            hover: !0,
            pressed: !0
        }
    }, ze = [`w4QgrJY8C`, `Ps8iPYsCJ`], Be = `framer-yoDUn`, Ve = {
        Ps8iPYsCJ: `framer-v-7hoza5`,
        w4QgrJY8C: `framer-v-8mgqkm`
    }, He = {
        bounce: .2,
        delay: 0,
        duration: .4,
        type: `spring`
    }, Ue = ({
        value: e,
        children: t
    }) => {
        let n = m(b),
            r = e ?? n.transition,
            i = h(() => ({
                ...n,
                transition: r
            }), [JSON.stringify(r)]);
        return d(b.Provider, {
            value: i,
            children: t
        })
    }, We = S.create(v), Ge = {
        "Tablet/Mobile": `Ps8iPYsCJ`,
        Desktop: `w4QgrJY8C`
    }, Ke = ({
        height: e,
        icon: t,
        id: n,
        link: r,
        width: i,
        ...a
    }) => ({
        ...a,
        KTQ59ssyr: r ?? a.KTQ59ssyr,
        squSqLkk3: t ?? a.squSqLkk3 ?? `InstagramLogo`,
        variant: Ge[a.variant] ?? a.variant ?? `w4QgrJY8C`
    }), qe = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Je = n(function (e, t) {
        let n = f(null),
            r = t ?? n,
            a = i(),
            {
                activeLocale: o,
                setLocale: s
            } = V(),
            c = me(),
            {
                style: l,
                className: u,
                layoutId: p,
                variant: m,
                squSqLkk3: h,
                KTQ59ssyr: g,
                ..._
            } = Ke(e),
            {
                baseVariant: v,
                classNames: b,
                clearLoadingGesture: x,
                gestureHandlers: w,
                gestureVariant: T,
                isLoading: E,
                setGestureState: D,
                setVariant: O,
                variants: k
            } = H({
                cycleOrder: ze,
                defaultVariant: `w4QgrJY8C`,
                enabledGestures: Re,
                ref: r,
                variant: m,
                variantClassNames: Ve
            }),
            A = qe(e, k),
            M = [],
            N = R(Be, ...M);
        return d(y, {
            id: p ?? a,
            children: d(We, {
                animate: k,
                initial: !1,
                children: d(Ue, {
                    value: He,
                    children: d(j, {
                        href: g,
                        motionChild: !0,
                        nodeId: `w4QgrJY8C`,
                        openInNewTab: !0,
                        scopeId: `sKCN3T8ri`,
                        children: d(S.a, {
                            ..._,
                            ...w,
                            className: `${R(N,`framer-8mgqkm`,u,b)} framer-m0fxg3`,
                            "data-framer-name": `Desktop`,
                            layoutDependency: A,
                            layoutId: `w4QgrJY8C`,
                            ref: r,
                            style: {
                                ...l
                            },
                            ...Fe({
                                "w4QgrJY8C-hover": {
                                    "data-framer-name": void 0
                                },
                                "w4QgrJY8C-pressed": {
                                    "data-framer-name": void 0
                                },
                                Ps8iPYsCJ: {
                                    "data-framer-name": `Tablet/Mobile`
                                }
                            }, v, T),
                            children: d(C, {
                                children: d(F, {
                                    className: `framer-1avjtoe-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    layoutDependency: A,
                                    layoutId: `aSBpkThhm-container`,
                                    nodeId: `aSBpkThhm`,
                                    rendersWithMotion: !0,
                                    scopeId: `sKCN3T8ri`,
                                    children: d(Te, {
                                        color: `var(--token-09ea5b55-cb41-495a-a653-c8b316e5c96d, rgba(255, 255, 255, 0.5))`,
                                        height: `100%`,
                                        iconSearch: `House`,
                                        iconSelection: h,
                                        id: `aSBpkThhm`,
                                        layoutId: `aSBpkThhm`,
                                        mirrored: !1,
                                        selectByList: !0,
                                        style: {
                                            height: `100%`,
                                            width: `100%`
                                        },
                                        weight: `regular`,
                                        width: `100%`,
                                        ...Fe({
                                            "w4QgrJY8C-hover": {
                                                color: `var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, rgb(255, 255, 255))`
                                            },
                                            "w4QgrJY8C-pressed": {
                                                color: `var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, rgb(255, 255, 255))`
                                            }
                                        }, v, T)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }), Ye = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-yoDUn.framer-m0fxg3, .framer-yoDUn .framer-m0fxg3 { display: block; }`, `.framer-yoDUn.framer-8mgqkm { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`, `.framer-yoDUn .framer-1avjtoe-container { flex: none; height: 24px; position: relative; width: 24px; }`, `.framer-yoDUn.framer-v-7hoza5.framer-8mgqkm { cursor: unset; }`], W = U(Je, Ye, `framer-yoDUn`), Xe = W, W.displayName = `Social icon`, W.defaultProps = {
        height: 24,
        width: 24
    }, L(W, {
        variant: {
            options: [`w4QgrJY8C`, `Ps8iPYsCJ`],
            optionTitles: [`Desktop`, `Tablet/Mobile`],
            title: `Variant`,
            type: T.Enum
        },
        squSqLkk3: Le ?.iconSelection && {
            ...Le.iconSelection,
            defaultValue: `InstagramLogo`,
            description: void 0,
            hidden: void 0,
            title: `Icon`
        },
        KTQ59ssyr: {
            title: `Link`,
            type: T.Link
        }
    }), I(W, [{
        explicitInter: !0,
        fonts: []
    }, ...Ie], {
        supportsExplicitInterCodegen: !0
    })
});

function G(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, ft, pt, mt, K, ht, gt = e(() => {
    s(), B(), x(), c(), Pe(), Me(), Ze(), Qe = be(S.div), $e = z(Xe), et = be(k), tt = [`NB3oLFVwf`, `EGqPWHHV_`, `mG2S4yExh`], nt = `framer-2AUgB`, rt = {
        EGqPWHHV_: `framer-v-13eafpz`,
        mG2S4yExh: `framer-v-1aeeqah`,
        NB3oLFVwf: `framer-v-930wwc`
    }, it = {
        bounce: .2,
        delay: 0,
        duration: .4,
        type: `spring`
    }, at = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 40
    }, ot = {
        damping: 30,
        delay: 0,
        mass: 1,
        stiffness: 60,
        type: `spring`
    }, st = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: ot,
        x: 0,
        y: 40
    }, ct = ({
        value: e,
        children: t
    }) => {
        let n = m(b),
            r = e ?? n.transition,
            i = h(() => ({
                ...n,
                transition: r
            }), [JSON.stringify(r)]);
        return d(b.Provider, {
            value: i,
            children: t
        })
    }, lt = S.create(v), ut = {
        Desktop: `NB3oLFVwf`,
        Mobile: `mG2S4yExh`,
        Tablet: `EGqPWHHV_`
    }, dt = ({
        height: e,
        id: t,
        width: n,
        ...r
    }) => ({
        ...r,
        variant: ut[r.variant] ?? r.variant ?? `NB3oLFVwf`
    }), ft = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), pt = n(function (e, t) {
        let n = f(null),
            r = t ?? n,
            a = i(),
            {
                activeLocale: o,
                setLocale: s
            } = V(),
            c = me(),
            {
                style: l,
                className: u,
                layoutId: p,
                variant: m,
                ...h
            } = dt(e),
            {
                baseVariant: _,
                classNames: b,
                clearLoadingGesture: x,
                gestureHandlers: w,
                gestureVariant: T,
                isLoading: E,
                setGestureState: D,
                setVariant: O,
                variants: k
            } = H({
                cycleOrder: tt,
                defaultVariant: `NB3oLFVwf`,
                ref: r,
                variant: m,
                variantClassNames: rt
            }),
            A = ft(e, k),
            j = [Ee, De],
            M = R(nt, ...j),
            N = () => ![`EGqPWHHV_`, `mG2S4yExh`].includes(_);
        return d(y, {
            id: p ?? a,
            children: d(lt, {
                animate: k,
                initial: !1,
                children: d(ct, {
                    value: it,
                    children: g(S.footer, {
                        ...h,
                        ...w,
                        className: R(M, `framer-930wwc`, u, b),
                        "data-framer-name": `Desktop`,
                        layoutDependency: A,
                        layoutId: `NB3oLFVwf`,
                        ref: r,
                        style: {
                            backgroundColor: `rgb(0, 0, 0)`,
                            ...l
                        },
                        ...G({
                            EGqPWHHV_: {
                                "data-framer-name": `Tablet`
                            },
                            mG2S4yExh: {
                                "data-framer-name": `Mobile`
                            }
                        }, _, T),
                        children: [d(Qe, {
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [{
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: .9,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 60
                                }
                            }, {
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
                            __framer__transformTrigger: `onInView`,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-136mikd`,
                            "data-framer-name": `BG Image`,
                            layoutDependency: A,
                            layoutId: `A0cXibzEG`,
                            children: d(S.div, {
                                className: `framer-1850gdf`,
                                "data-framer-name": `Bg color`,
                                layoutDependency: A,
                                layoutId: `xWi3JuIrx`,
                                style: {
                                    backgroundColor: `var(--token-d77b16bb-1b8f-4385-b88c-a570a9eef29c, rgb(0, 0, 0))`,
                                    borderBottomLeftRadius: 16,
                                    borderBottomRightRadius: 16,
                                    borderTopLeftRadius: 16,
                                    borderTopRightRadius: 16
                                }
                            })
                        }), g(Qe, {
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [{
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: .9,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 170
                                }
                            }, {
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
                            __framer__transformTrigger: `onInView`,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-16h6i9r`,
                            "data-framer-name": `Container`,
                            layoutDependency: A,
                            layoutId: `QAF8iX2YF`,
                            children: [g(S.div, {
                                className: `framer-hp6epd`,
                                "data-framer-name": `Grid`,
                                layoutDependency: A,
                                layoutId: `oWEap76bI`,
                                children: [d(S.div, {
                                    className: `framer-1la1q97`,
                                    "data-framer-name": `Footer column`,
                                    layoutDependency: A,
                                    layoutId: `p4mSmiD_j`,
                                    children: g(S.div, {
                                        className: `framer-3r8gki`,
                                        "data-framer-name": `Tagline`,
                                        layoutDependency: A,
                                        layoutId: `lrkyOZMry`,
                                        children: [d(ne, {
                                            __fromCanvasComponent: !0,
                                            children: d(v, {
                                                children: d(S.h5, {
                                                    className: `framer-styles-preset-66zvrz`,
                                                    "data-styles-preset": `MdHF6Jcfy`,
                                                    style: {
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, rgb(50, 50, 50)))`
                                                    },
                                                    children: `Grok Imagine`
                                                })
                                            }),
                                            className: `framer-13iy7cz`,
                                            fonts: [`Inter`],
                                            layoutDependency: A,
                                            layoutId: `EKvOi89Zi`,
                                            style: {
                                                "--extracted-1lwpl3i": `var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, rgb(255, 255, 255))`,
                                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                "--framer-link-text-decoration": `underline`
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        }), d(ne, {
                                            __fromCanvasComponent: !0,
                                            children: d(v, {
                                                children: d(S.p, {
                                                    className: `framer-styles-preset-kkrvh`,
                                                    "data-styles-preset": `bEb99onL_`,
                                                    style: {
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": ` rgba(255, 0, 0, 1)`
                                                    },
                                                    children: `Grok Imagine, with the symbol "Imagine," is a fictional token created purely for entertainment purposes and has no connection to any existing trademark or brand.`
                                                })
                                            }),
                                            className: `framer-wnf8ov`,
                                            fonts: [`Inter`],
                                            layoutDependency: A,
                                            layoutId: `gtYO7YgyH`,
                                            style: {
                                                "--extracted-r6o4lv": `var(--token-09ea5b55-cb41-495a-a653-c8b316e5c96d, rgba(255, 255, 255, 0.5))`,
                                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                "--framer-link-text-decoration": `underline`
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        }), d(ne, {
                                            __fromCanvasComponent: !0,
                                            children: d(v, {
                                                children: d(S.p, {
                                                    className: `framer-styles-preset-kkrvh`,
                                                    "data-styles-preset": `bEb99onL_`,
                                                    style: {
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-09ea5b55-cb41-495a-a653-c8b316e5c96d, rgba(255, 255, 255, 0.5)))`
                                                    },
                                                    children: `CA: 0xComingSoon`
                                                })
                                            }),
                                            className: `framer-kqgzz5`,
                                            fonts: [`Inter`],
                                            layoutDependency: A,
                                            layoutId: `qj_6V5snI`,
                                            style: {
                                                "--extracted-r6o4lv": `var(--token-09ea5b55-cb41-495a-a653-c8b316e5c96d, rgba(255, 255, 255, 0.5))`,
                                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                "--framer-link-text-decoration": `underline`
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        })]
                                    })
                                }), N() && d(S.div, {
                                    className: `framer-1xd6zy0`,
                                    "data-framer-name": `Footer column`,
                                    layoutDependency: A,
                                    layoutId: `eQ2yruPT3`
                                })]
                            }), d(S.div, {
                                className: `framer-1bspowd`,
                                "data-framer-name": `Contact details`,
                                layoutDependency: A,
                                layoutId: `VTuSuroyt`,
                                children: g(S.div, {
                                    className: `framer-3oo67b`,
                                    "data-framer-name": `Social icons`,
                                    layoutDependency: A,
                                    layoutId: `Q3uVJ6Dfl`,
                                    children: [d(C, {
                                        height: 24,
                                        y: (c ?.y || 0) + (0 + ((c ?.height || 698.5) - 0 - 877.6) / 2) + 80 + 341.6 + 0 + 0 + 0,
                                        ...G({
                                            EGqPWHHV_: {
                                                y: (c ?.y || 0) + (0 + ((c ?.height || 630) - 0 - 877.6) / 2) + 80 + 341.6 + 0 + 0 + 0
                                            },
                                            mG2S4yExh: {
                                                y: (c ?.y || 0) + (0 + ((c ?.height || 200) - 0 - 817.6) / 2) + 60 + 341.6 + 0 + 0 + 0
                                            }
                                        }, _, T),
                                        children: d(F, {
                                            className: `framer-1nuv8d9-container`,
                                            layoutDependency: A,
                                            layoutId: `zthIpSaAr-container`,
                                            nodeId: `zthIpSaAr`,
                                            rendersWithMotion: !0,
                                            scopeId: `Ekkeg6nXd`,
                                            children: d(Xe, {
                                                height: `100%`,
                                                id: `zthIpSaAr`,
                                                KTQ59ssyr: `https://t.me/Imagineon_Eth`,
                                                layoutId: `zthIpSaAr`,
                                                squSqLkk3: `TelegramLogo`,
                                                variant: `w4QgrJY8C`,
                                                width: `100%`,
                                                ...G({
                                                    EGqPWHHV_: {
                                                        variant: `Ps8iPYsCJ`
                                                    },
                                                    mG2S4yExh: {
                                                        variant: `Ps8iPYsCJ`
                                                    }
                                                }, _, T)
                                            })
                                        })
                                    }), d(C, {
                                        height: 24,
                                        y: (c ?.y || 0) + (0 + ((c ?.height || 698.5) - 0 - 877.6) / 2) + 80 + 341.6 + 0 + 0 + 0,
                                        ...G({
                                            EGqPWHHV_: {
                                                y: (c ?.y || 0) + (0 + ((c ?.height || 630) - 0 - 877.6) / 2) + 80 + 341.6 + 0 + 0 + 0
                                            },
                                            mG2S4yExh: {
                                                y: (c ?.y || 0) + (0 + ((c ?.height || 200) - 0 - 817.6) / 2) + 60 + 341.6 + 0 + 0 + 0
                                            }
                                        }, _, T),
                                        children: d(F, {
                                            className: `framer-5sj337-container`,
                                            layoutDependency: A,
                                            layoutId: `lPrsyzSWP-container`,
                                            nodeId: `lPrsyzSWP`,
                                            rendersWithMotion: !0,
                                            scopeId: `Ekkeg6nXd`,
                                            children: d(Xe, {
                                                height: `100%`,
                                                id: `lPrsyzSWP`,
                                                KTQ59ssyr: `https://x.com/ImagineEth_X`,
                                                layoutId: `lPrsyzSWP`,
                                                squSqLkk3: `XLogo`,
                                                variant: `w4QgrJY8C`,
                                                width: `100%`,
                                                ...G({
                                                    EGqPWHHV_: {
                                                        variant: `Ps8iPYsCJ`
                                                    },
                                                    mG2S4yExh: {
                                                        variant: `Ps8iPYsCJ`
                                                    }
                                                }, _, T)
                                            })
                                        })
                                    })]
                                })
                            }), d(et, {
                                __framer__animate: {
                                    transition: ot
                                },
                                __framer__animateOnce: !0,
                                __framer__enter: at,
                                __framer__exit: st,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: .5,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                background: {
                                    alt: ``,
                                    fit: `fit`,
                                    loading: ie((c ?.y || 0) + (0 + ((c ?.height || 698.5) - 0 - 877.6) / 2) + 80 + 397.6),
                                    pixelHeight: 597,
                                    pixelWidth: 2536,
                                    positionX: `center`,
                                    positionY: `center`,
                                    sizes: `calc(min(max(${c?.width||`100vw`}, 1px), 1200px) - 124px)`,
                                    src: `/images/logoname.png`,
                                    srcSet: `/images/logoname.png?scale-down-to=512 512w,/images/logoname.png?scale-down-to=1024 1024w,/images/logoname.png?scale-down-to=2048 2048w,/images/logoname.png 2536w`
                                },
                                className: `framer-1n69wmy`,
                                "data-framer-name": `Logo`,
                                layoutDependency: A,
                                layoutId: `Zdxvuy31L`,
                                ...G({
                                    EGqPWHHV_: {
                                        background: {
                                            alt: ``,
                                            fit: `fit`,
                                            loading: ie((c ?.y || 0) + (0 + ((c ?.height || 630) - 0 - 877.6) / 2) + 80 + 397.6),
                                            pixelHeight: 597,
                                            pixelWidth: 2536,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `calc(min(max(${c?.width||`100vw`}, 1px), 1200px) - 64px)`,
                                            src: `/images/logoname.png`,
                                            srcSet: `/images/logoname.png?scale-down-to=512 512w,/images/logoname.png?scale-down-to=1024 1024w,/images/logoname.png?scale-down-to=2048 2048w,/images/logoname.png 2536w`
                                        }
                                    },
                                    mG2S4yExh: {
                                        background: {
                                            alt: ``,
                                            fit: `fit`,
                                            loading: ie((c ?.y || 0) + (0 + ((c ?.height || 200) - 0 - 817.6) / 2) + 60 + 397.6),
                                            pixelHeight: 597,
                                            pixelWidth: 2536,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `calc(min(max(${c?.width||`100vw`}, 1px), 1200px) - 64px)`,
                                            src: `/images/logoname.png`,
                                            srcSet: `/images/logoname.png?scale-down-to=512 512w,/images/logoname.png?scale-down-to=1024 1024w,/images/logoname.png?scale-down-to=2048 2048w,/images/logoname.png 2536w`
                                        }
                                    }
                                }, _, T),
                                children: d(S.div, {
                                    className: `framer-15qefuj`,
                                    "data-framer-name": `Overlay`,
                                    layoutDependency: A,
                                    layoutId: `WiSQHr4VO`,
                                    style: {
                                        // background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 80.00489353774975%, rgb(0, 0, 0) 100%)`
                                    }
                                })
                            })]
                        })]
                    })
                })
            })
        })
    }), mt = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-2AUgB.framer-17bfnw0, .framer-2AUgB .framer-17bfnw0 { display: block; }`, `.framer-2AUgB.framer-930wwc { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 42px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1440px; }`, `.framer-2AUgB .framer-136mikd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; padding: 16px; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`, `.framer-2AUgB .framer-1850gdf { flex: 1 0 0px; height: 100%; overflow: hidden; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`, `.framer-2AUgB .framer-16h6i9r { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 80px 62px 80px 62px; position: relative; width: 1px; z-index: 2; }`, `.framer-2AUgB .framer-hp6epd { display: grid; flex: none; gap: 62px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(5, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-2AUgB .framer-1la1q97 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; grid-column: span 2; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-2AUgB .framer-3r8gki, .framer-2AUgB .framer-1bspowd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 800px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-2AUgB .framer-13iy7cz { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-2AUgB .framer-wnf8ov, .framer-2AUgB .framer-kqgzz5 { flex: none; height: auto; max-width: 420px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-2AUgB .framer-1xd6zy0 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; justify-self: start; min-height: 24px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-2AUgB .framer-3oo67b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-2AUgB .framer-1nuv8d9-container, .framer-2AUgB .framer-5sj337-container, .framer-2AUgB .framer-1gdvmaj-container { flex: none; height: auto; position: relative; width: auto; }`, `.framer-2AUgB .framer-1n69wmy { aspect-ratio: 3.3625 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 320px); position: relative; width: 100%; }`, `.framer-2AUgB .framer-15qefuj { bottom: 0px; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; width: 100%; }`, `.framer-2AUgB.framer-v-13eafpz.framer-930wwc { width: 910px; }`, `.framer-2AUgB.framer-v-13eafpz .framer-16h6i9r { padding: 80px 32px 80px 32px; }`, `.framer-2AUgB.framer-v-13eafpz .framer-hp6epd { grid-template-columns: repeat(4, minmax(50px, 1fr)); }`, `.framer-2AUgB.framer-v-13eafpz .framer-1n69wmy { height: var(--framer-aspect-ratio-supported, 252px); }`, `.framer-2AUgB.framer-v-1aeeqah.framer-930wwc { width: 390px; }`, `.framer-2AUgB.framer-v-1aeeqah .framer-16h6i9r { padding: 60px 32px 40px 32px; }`, `.framer-2AUgB.framer-v-1aeeqah .framer-hp6epd { gap: 24px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); }`, `.framer-2AUgB.framer-v-1aeeqah .framer-1la1q97 { grid-column: span 1; }`, `.framer-2AUgB.framer-v-1aeeqah .framer-1n69wmy { height: var(--framer-aspect-ratio-supported, 59px); }`, ...Oe, ...ke], K = U(pt, mt, `framer-2AUgB`), ht = K, K.displayName = `Main Footer`, K.defaultProps = {
        height: 698.5,
        width: 1440
    }, L(K, {
        variant: {
            options: [`NB3oLFVwf`, `EGqPWHHV_`, `mG2S4yExh`],
            optionTitles: [`Desktop`, `Tablet`, `Mobile`],
            title: `Variant`,
            type: T.Enum
        }
    }), I(K, [{
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
    }, ...$e, ...re(Ae), ...re(je)], {
        supportsExplicitInterCodegen: !0
    })
});

function _t(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, q, kt, At = e(() => {
    s(), B(), x(), c(), vt = [`TbGMPnpPv`, `NsRKHb7pm`, `E1p2bcptv`], yt = `framer-XhwGO`, bt = {
        E1p2bcptv: `framer-v-1nhgqja`,
        NsRKHb7pm: `framer-v-1h9hvr0`,
        TbGMPnpPv: `framer-v-1w7ri9w`
    }, xt = {
        damping: 30,
        delay: 0,
        mass: 1,
        stiffness: 120,
        type: `spring`
    }, St = ({
        value: e,
        children: t
    }) => {
        let n = m(b),
            r = e ?? n.transition,
            i = h(() => ({
                ...n,
                transition: r
            }), [JSON.stringify(r)]);
        return d(b.Provider, {
            value: i,
            children: t
        })
    }, Ct = S.create(v), wt = {
        Action: `NsRKHb7pm`,
        Default: `TbGMPnpPv`,
        Opened: `E1p2bcptv`
    }, Tt = ({
        height: e,
        id: t,
        width: n,
        ...r
    }) => ({
        ...r,
        variant: wt[r.variant] ?? r.variant ?? `TbGMPnpPv`
    }), Et = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Dt = n(function (e, t) {
        let n = f(null),
            r = t ?? n,
            a = i(),
            {
                activeLocale: o,
                setLocale: s
            } = V(),
            c = me(),
            {
                style: l,
                className: u,
                layoutId: p,
                variant: m,
                ...h
            } = Tt(e),
            {
                baseVariant: _,
                classNames: v,
                clearLoadingGesture: b,
                gestureHandlers: x,
                gestureVariant: C,
                isLoading: w,
                setGestureState: T,
                setVariant: E,
                variants: D
            } = H({
                cycleOrder: vt,
                defaultVariant: `TbGMPnpPv`,
                ref: r,
                variant: m,
                variantClassNames: bt
            }),
            O = Et(e, D),
            {
                activeVariantCallback: k,
                delay: A
            } = pe(_),
            j = k(async (...e) => {
                await A(() => E(`E1p2bcptv`, !0), 600)
            });
        ve(_, {
            NsRKHb7pm: j
        });
        let M = [],
            N = R(yt, ...M);
        return d(y, {
            id: p ?? a,
            children: d(Ct, {
                animate: D,
                initial: !1,
                children: d(St, {
                    value: xt,
                    children: g(S.div, {
                        ...h,
                        ...x,
                        className: R(N, `framer-1w7ri9w`, u, v),
                        "data-framer-name": `Default`,
                        layoutDependency: O,
                        layoutId: `TbGMPnpPv`,
                        ref: r,
                        style: {
                            ...l
                        },
                        ..._t({
                            E1p2bcptv: {
                                "data-framer-name": `Opened`
                            },
                            NsRKHb7pm: {
                                "data-framer-name": `Action`,
                                "data-highlight": !0
                            }
                        }, _, C),
                        children: [d(S.div, {
                            className: `framer-rxndnu`,
                            "data-framer-name": `Line`,
                            layoutDependency: O,
                            layoutId: `zf9B3tSRN`,
                            style: {
                                backgroundColor: `var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, rgb(255, 255, 255))`,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }
                        }), d(S.div, {
                            className: `framer-1vf7yr9`,
                            "data-framer-name": `Line`,
                            layoutDependency: O,
                            layoutId: `Nfnnh063g`,
                            style: {
                                backgroundColor: `var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, rgb(255, 255, 255))`,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }
                        })]
                    })
                })
            })
        })
    }), Ot = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-XhwGO.framer-oyq9u1, .framer-XhwGO .framer-oyq9u1 { display: block; }`, `.framer-XhwGO.framer-1w7ri9w { gap: 10px; height: 16px; overflow: visible; position: relative; width: 16px; }`, `.framer-XhwGO .framer-rxndnu { bottom: 2px; flex: none; height: 4px; left: calc(50.00000000000002% - 4px / 2); overflow: visible; position: absolute; width: 4px; }`, `.framer-XhwGO .framer-1vf7yr9 { flex: none; height: 4px; left: calc(50.00000000000002% - 4px / 2); overflow: visible; position: absolute; top: 2px; width: 4px; }`, `.framer-XhwGO.framer-v-1h9hvr0 .framer-rxndnu { bottom: unset; top: calc(50.00000000000002% - 4px / 2); }`, `.framer-XhwGO.framer-v-1h9hvr0 .framer-1vf7yr9 { top: calc(50.00000000000002% - 4px / 2); }`, `.framer-XhwGO.framer-v-1nhgqja .framer-rxndnu { bottom: unset; left: 2px; top: calc(50.00000000000002% - 4px / 2); }`, `.framer-XhwGO.framer-v-1nhgqja .framer-1vf7yr9 { left: unset; right: 2px; top: calc(50.00000000000002% - 4px / 2); }`], q = U(Dt, Ot, `framer-XhwGO`), kt = q, q.displayName = `Menu icon`, q.defaultProps = {
        height: 16,
        width: 16
    }, L(q, {
        variant: {
            options: [`TbGMPnpPv`, `NsRKHb7pm`, `E1p2bcptv`],
            optionTitles: [`Default`, `Action`, `Opened`],
            title: `Variant`,
            type: T.Enum
        }
    }), I(q, [{
        explicitInter: !0,
        fonts: []
    }], {
        supportsExplicitInterCodegen: !0
    })
});

function jt(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, J, Y, Jt = e(() => {
    s(), B(), x(), c(), Pe(), Mt = xe(be(ne)), Nt = {
        E9LEuebRo: {
            hover: !0
        }
    }, Pt = [`E9LEuebRo`, `aq_V1kxlR`], Ft = `framer-eJhH5`, It = {
        aq_V1kxlR: `framer-v-y58d2s`,
        E9LEuebRo: `framer-v-17donts`
    }, Lt = {
        bounce: .2,
        delay: 0,
        duration: .4,
        type: `spring`
    }, Rt = {
        delay: 0,
        duration: .5,
        ease: [.44, 0, .56, 1],
        type: `tween`
    }, zt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Rt,
        x: 0,
        y: 0
    }, Bt = {
        opacity: .001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10
    }, Vt = ({
        value: e,
        children: t
    }) => {
        let n = m(b),
            r = e ?? n.transition,
            i = h(() => ({
                ...n,
                transition: r
            }), [JSON.stringify(r)]);
        return d(b.Provider, {
            value: i,
            children: t
        })
    }, Ht = S.create(v), Ut = {
        "Tablet/Mobile": `aq_V1kxlR`,
        Desktop: `E9LEuebRo`
    }, Wt = ({
        height: e,
        id: t,
        link: n,
        title: r,
        width: i,
        ...a
    }) => ({
        ...a,
        KLyjjWxxB: r ?? a.KLyjjWxxB ?? `About Us`,
        miRxX7aNw: n ?? a.miRxX7aNw,
        variant: Ut[a.variant] ?? a.variant ?? `E9LEuebRo`
    }), Gt = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Kt = n(function (e, t) {
        let n = f(null),
            r = t ?? n,
            a = i(),
            {
                activeLocale: o,
                setLocale: s
            } = V(),
            c = me(),
            {
                style: l,
                className: u,
                layoutId: p,
                variant: m,
                miRxX7aNw: h,
                KLyjjWxxB: _,
                ...b
            } = Wt(e),
            {
                baseVariant: x,
                classNames: C,
                clearLoadingGesture: w,
                gestureHandlers: T,
                gestureVariant: E,
                isLoading: D,
                setGestureState: O,
                setVariant: k,
                variants: A
            } = H({
                cycleOrder: Pt,
                defaultVariant: `E9LEuebRo`,
                enabledGestures: Nt,
                ref: r,
                variant: m,
                variantClassNames: It
            }),
            M = Gt(e, A),
            N = [De],
            P = R(Ft, ...N);
        return d(y, {
            id: p ?? a,
            children: d(Ht, {
                animate: A,
                initial: !1,
                children: d(Vt, {
                    value: Lt,
                    children: d(j, {
                        href: h,
                        motionChild: !0,
                        nodeId: `E9LEuebRo`,
                        openInNewTab: !1,
                        scopeId: `vhxMv5Xvq`,
                        smoothScroll: !0,
                        children: g(S.a, {
                            ...b,
                            ...T,
                            className: `${R(P,`framer-17donts`,u,C)} framer-1ubtn2o`,
                            "data-framer-name": `Desktop`,
                            layoutDependency: M,
                            layoutId: `E9LEuebRo`,
                            ref: r,
                            style: {
                                borderBottomLeftRadius: 16,
                                borderBottomRightRadius: 16,
                                borderTopLeftRadius: 16,
                                borderTopRightRadius: 16,
                                ...l
                            },
                            ...jt({
                                "E9LEuebRo-hover": {
                                    "data-framer-name": void 0
                                },
                                aq_V1kxlR: {
                                    "data-framer-name": `Tablet/Mobile`
                                }
                            }, x, E),
                            children: [d(S.div, {
                                className: `framer-aj2te4`,
                                "data-framer-name": `BG`,
                                layoutDependency: M,
                                layoutId: `RHFODQDSH`,
                                style: {
                                    backgroundColor: `rgba(255, 255, 255, 0.05)`,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    opacity: 0
                                },
                                variants: {
                                    "E9LEuebRo-hover": {
                                        opacity: 1
                                    }
                                }
                            }), d(Mt, {
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: zt,
                                children: d(v, {
                                    children: d(S.p, {
                                        className: `framer-styles-preset-kkrvh`,
                                        "data-styles-preset": `bEb99onL_`,
                                        style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, rgb(255, 255, 255)))`
                                        },
                                        children: `About Us`
                                    })
                                }),
                                className: `framer-suuqfz`,
                                "data-framer-appear-id": `suuqfz`,
                                fonts: [`Inter`],
                                initial: Bt,
                                layoutDependency: M,
                                layoutId: `NFV3HWgRt`,
                                optimized: !0,
                                style: {
                                    "--extracted-r6o4lv": `var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`
                                },
                                text: _,
                                verticalAlignment: `top`,
                                withExternalLayout: !0
                            })]
                        })
                    })
                })
            })
        })
    }), qt = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-eJhH5.framer-1ubtn2o, .framer-eJhH5 .framer-1ubtn2o { display: block; }`, `.framer-eJhH5.framer-17donts { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 6px 0px 6px 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`, `.framer-eJhH5 .framer-aj2te4 { flex: none; height: 100%; left: calc(50.15290519877678% - 100% / 2); overflow: visible; position: absolute; top: calc(50.66666666666669% - 100% / 2); width: 100%; z-index: 1; }`, `.framer-eJhH5 .framer-suuqfz { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`, `.framer-eJhH5.framer-v-y58d2s.framer-17donts { cursor: unset; }`, `.framer-eJhH5.framer-v-17donts.hover .framer-aj2te4 { left: calc(50.15290519877678% - 110.00000000000001% / 2); width: 110%; }`, ...ke], J = U(Kt, qt, `framer-eJhH5`), Y = J, J.displayName = `Nav item`, J.defaultProps = {
        height: 37.5,
        width: 70
    }, L(J, {
        variant: {
            options: [`E9LEuebRo`, `aq_V1kxlR`],
            optionTitles: [`Desktop`, `Tablet/Mobile`],
            title: `Variant`,
            type: T.Enum
        },
        miRxX7aNw: {
            title: `Link`,
            type: T.Link
        },
        KLyjjWxxB: {
            defaultValue: `About Us`,
            displayTextArea: !1,
            title: `Title`,
            type: T.String
        }
    }), I(J, [{
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
    }, ...re(je)], {
        supportsExplicitInterCodegen: !0
    })
});

function X(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, Z, un, dn = e(() => {
    s(), B(), x(), c(), Pe(), At(), Jt(), Yt = z(kt), Xt = z(Y), Zt = [`Dxap3Pw40`, `BTSjfepO1`, `Q9Oix0C3K`, `p6JFUDvDd`], Qt = `framer-pSDrL`, $t = {
        BTSjfepO1: `framer-v-1eodnhl`,
        Dxap3Pw40: `framer-v-6fnth1`,
        p6JFUDvDd: `framer-v-nvf3jr`,
        Q9Oix0C3K: `framer-v-omrorh`
    }, en = {
        delay: 0,
        duration: .6,
        ease: [.11, .51, .5, 1],
        type: `tween`
    }, tn = {
        bounce: .2,
        delay: 0,
        duration: .4,
        type: `spring`
    }, nn = ({
        value: e,
        children: t
    }) => {
        let n = m(b),
            r = e ?? n.transition,
            i = h(() => ({
                ...n,
                transition: r
            }), [JSON.stringify(r)]);
        return d(b.Provider, {
            value: i,
            children: t
        })
    }, rn = S.create(v), an = {
        "Desktop opened": `Dxap3Pw40`,
        "Mobile / Tablet - opened": `p6JFUDvDd`,
        "Mobile / Tablet": `Q9Oix0C3K`,
        Desktop: `BTSjfepO1`
    }, on = ({
        height: e,
        id: t,
        width: n,
        ...r
    }) => ({
        ...r,
        variant: an[r.variant] ?? r.variant ?? `Dxap3Pw40`
    }), sn = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), cn = n(function (e, t) {
        let n = f(null),
            r = t ?? n,
            a = i(),
            {
                activeLocale: o,
                setLocale: s
            } = V(),
            c = me(),
            {
                style: l,
                className: u,
                layoutId: p,
                variant: m,
                ...h
            } = on(e),
            {
                baseVariant: _,
                classNames: b,
                clearLoadingGesture: x,
                gestureHandlers: w,
                gestureVariant: T,
                isLoading: E,
                setGestureState: D,
                setVariant: O,
                variants: k
            } = H({
                cycleOrder: Zt,
                defaultVariant: `Dxap3Pw40`,
                ref: r,
                variant: m,
                variantClassNames: $t
            }),
            A = sn(e, k),
            {
                activeVariantCallback: j,
                delay: M
            } = pe(_),
            N = j(async (...e) => {
                D({
                    isHovered: !1
                }), O(`BTSjfepO1`)
            }),
            P = j(async (...e) => {
                D({
                    isHovered: !0
                }), O(`Dxap3Pw40`)
            }),
            ee = j(async (...e) => {
                D({
                    isPressed: !1
                }), O(`p6JFUDvDd`)
            }),
            te = j(async (...e) => {
                O(`Q9Oix0C3K`)
            }),
            I = [De],
            L = R(Qt, ...I),
            z = () => ![`BTSjfepO1`, `Q9Oix0C3K`].includes(_);
        return d(y, {
            id: p ?? a,
            children: d(rn, {
                animate: k,
                initial: !1,
                children: d(nn, {
                    value: en,
                    children: d(S.div, {
                        ...h,
                        ...w,
                        className: R(L, `framer-6fnth1`, u, b),
                        "data-framer-name": `Desktop opened`,
                        "data-highlight": !0,
                        layoutDependency: A,
                        layoutId: `Dxap3Pw40`,
                        onMouseLeave: N,
                        ref: r,
                        style: {
                            borderBottomLeftRadius: 16,
                            borderBottomRightRadius: 16,
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 16,
                            ...l
                        },
                        ...X({
                            BTSjfepO1: {
                                "data-framer-name": `Desktop`,
                                onMouseEnter: P
                            },
                            p6JFUDvDd: {
                                "data-framer-name": `Mobile / Tablet - opened`
                            },
                            Q9Oix0C3K: {
                                "data-framer-name": `Mobile / Tablet`,
                                onMouseLeave: void 0,
                                onTap: ee
                            }
                        }, _, T),
                        children: d(nn, {
                            value: tn,
                            children: g(S.div, {
                                className: `framer-vnxbaf`,
                                "data-framer-name": `Wrapper`,
                                layoutDependency: A,
                                layoutId: `dz1Ajjtq2`,
                                style: {
                                    backdropFilter: `blur(10px)`,
                                    backgroundColor: `var(--token-51769662-2c9b-461e-9323-c436a04190fb, rgba(255, 255, 255, 0.8))`,
                                    borderBottomLeftRadius: 16,
                                    borderBottomRightRadius: 16,
                                    borderTopLeftRadius: 16,
                                    borderTopRightRadius: 16,
                                    WebkitBackdropFilter: `blur(10px)`
                                },
                                children: [g(S.div, {
                                    className: `framer-1ib842a`,
                                    "data-framer-name": `Heading`,
                                    layoutDependency: A,
                                    layoutId: `dseKwP_sK`,
                                    ...X({
                                        p6JFUDvDd: {
                                            "data-highlight": !0,
                                            onTap: te
                                        }
                                    }, _, T),
                                    children: [d(ne, {
                                        __fromCanvasComponent: !0,
                                        children: d(v, {
                                            children: d(S.p, {
                                                className: `framer-styles-preset-kkrvh`,
                                                "data-styles-preset": `bEb99onL_`,
                                                style: {
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-09ea5b55-cb41-495a-a653-c8b316e5c96d, rgba(255, 255, 255, 0.5)))`
                                                },
                                                children: `Menu`
                                            })
                                        }),
                                        className: `framer-8gnxv2`,
                                        fonts: [`Inter`],
                                        layoutDependency: A,
                                        layoutId: `DzPcAu5Mw`,
                                        style: {
                                            "--extracted-r6o4lv": `var(--token-09ea5b55-cb41-495a-a653-c8b316e5c96d, rgba(255, 255, 255, 0.5))`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    }), d(C, {
                                        height: 16,
                                        width: `16px`,
                                        y: (c ?.y || 0) + 0 + 8 + 0 + 56,
                                        children: d(F, {
                                            className: `framer-145bey8-container`,
                                            layoutDependency: A,
                                            layoutId: `vr7yDjthU-container`,
                                            nodeId: `vr7yDjthU`,
                                            rendersWithMotion: !0,
                                            scopeId: `sT0yiQbWZ`,
                                            children: d(kt, {
                                                height: `100%`,
                                                id: `vr7yDjthU`,
                                                layoutId: `vr7yDjthU`,
                                                style: {
                                                    height: `100%`,
                                                    width: `100%`
                                                },
                                                variant: `NsRKHb7pm`,
                                                width: `100%`,
                                                ...X({
                                                    BTSjfepO1: {
                                                        variant: `TbGMPnpPv`
                                                    },
                                                    Q9Oix0C3K: {
                                                        variant: `TbGMPnpPv`
                                                    }
                                                }, _, T)
                                            })
                                        })
                                    })]
                                }), z() && g(S.div, {
                                    className: `framer-1trajqq`,
                                    "data-framer-name": `Nav items`,
                                    layoutDependency: A,
                                    layoutId: `GTdN4paTS`,
                                    children: [ d(C, {
                                        height: 37,
                                        width: `calc(max(${c?.width||`100vw`}, 1px) - 32px)`,
                                        y: (c ?.y || 0) + 0 + 8 + 142 + 0 + 41,
                                        children: d(F, {
                                            className: `framer-52o1cb-container`,
                                            layoutDependency: A,
                                            layoutId: `gkqc3Msc9-container`,
                                            nodeId: `gkqc3Msc9`,
                                            rendersWithMotion: !0,
                                            scopeId: `sT0yiQbWZ`,
                                            children: d(Y, {
                                                height: `100%`,
                                                id: `gkqc3Msc9`,
                                                KLyjjWxxB: `X`,
                                                layoutId: `gkqc3Msc9`,
                                                miRxX7aNw: `https://x.com/ImagineEth_X`,
                                                style: {
                                                    width: `100%`
                                                },
                                                variant: `E9LEuebRo`,
                                                width: `100%`,
                                                ...X({
                                                    p6JFUDvDd: {
                                                        variant: `aq_V1kxlR`
                                                    }
                                                }, _, T)
                                            })
                                        })
                                    }), d(C, {
                                        height: 37,
                                        width: `calc(max(${c?.width||`100vw`}, 1px) - 32px)`,
                                        y: (c ?.y || 0) + 0 + 8 + 142 + 0 + 82,
                                        children: d(F, {
                                            className: `framer-w2kpz2-container`,
                                            layoutDependency: A,
                                            layoutId: `waK4m7TBv-container`,
                                            nodeId: `waK4m7TBv`,
                                            rendersWithMotion: !0,
                                            scopeId: `sT0yiQbWZ`,
                                            children: d(Y, {
                                                height: `100%`,
                                                id: `waK4m7TBv`,
                                                KLyjjWxxB: `Telegram`,
                                                layoutId: `waK4m7TBv`,
                                                miRxX7aNw: `https://t.me/Imagineon_Eth`,
                                                style: {
                                                    width: `100%`
                                                },
                                                variant: `E9LEuebRo`,
                                                width: `100%`,
                                                ...X({
                                                    p6JFUDvDd: {
                                                        variant: `aq_V1kxlR`
                                                    }
                                                }, _, T)
                                            })
                                        })
                                    }), d(C, {
                                        height: 37,
                                        width: `calc(max(${c?.width||`100vw`}, 1px) - 32px)`,
                                        y: (c ?.y || 0) + 0 + 8 + 142 + 0 + 123,
                                        children: d(F, {
                                            className: `framer-1tp0hrf-container`,
                                            layoutDependency: A,
                                            layoutId: `bVEV0wP6n-container`,
                                            nodeId: `bVEV0wP6n`,
                                            rendersWithMotion: !0,
                                            scopeId: `sT0yiQbWZ`,
                                            children: d(Y, {
                                                height: `100%`,
                                                id: `bVEV0wP6n`,
                                                KLyjjWxxB: `Buy $IMAGINE`,
                                                layoutId: `bVEV0wP6n`,
                                                miRxX7aNw: `https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xComingSoon`,
                                                style: {
                                                    width: `100%`
                                                },
                                                variant: `E9LEuebRo`,
                                                width: `100%`,
                                                ...X({
                                                    p6JFUDvDd: {
                                                        variant: `aq_V1kxlR`
                                                    }
                                                }, _, T)
                                            })
                                        })
                                    }), d(C, {
                                        height: 37,
                                        width: `calc(max(${c?.width||`100vw`}, 1px) - 32px)`,
                                        y: (c ?.y || 0) + 0 + 8 + 142 + 0 + 164,
                                        children: d(F, {
                                            className: `framer-avtq08-container`,
                                            layoutDependency: A,
                                            layoutId: `wNpxThduB-container`,
                                            nodeId: `wNpxThduB`,
                                            rendersWithMotion: !0,
                                            scopeId: `sT0yiQbWZ`,
                                            children: d(Y, {
                                                height: `100%`,
                                                id: `wNpxThduB`,
                                                KLyjjWxxB: `Dexscreener`,
                                                layoutId: `wNpxThduB`,
                                                miRxX7aNw: `https://dexscreener.com/ethereum/0xComingSoon`,
                                                style: {
                                                    width: `100%`
                                                },
                                                variant: `E9LEuebRo`,
                                                width: `100%`,
                                                ...X({
                                                    p6JFUDvDd: {
                                                        variant: `aq_V1kxlR`
                                                    }
                                                }, _, T)
                                            })
                                        })
                                    }),d(C, {
                                        height: 37,
                                        width: `calc(max(${c?.width||`100vw`}, 1px) - 32px)`,
                                        y: (c ?.y || 0) + 0 + 8 + 142 + 0 + 164,
                                        children: d(F, {
                                            className: `framer-avtq08-container`,
                                            layoutDependency: A,
                                            layoutId: `wNpxThduB-container`,
                                            nodeId: `wNpxThduB`,
                                            rendersWithMotion: !0,
                                            scopeId: `sT0yiQbWZ`,
                                            children: d(Y, {
                                                height: `100%`,
                                                id: `wNpxThduB`,
                                                KLyjjWxxB: `Dextools`,
                                                layoutId: `wNpxThduB`,
                                                miRxX7aNw: `https://www.dextools.io/app/token/grokimagineoneth`,
                                                style: {
                                                    width: `100%`,
                                                },
                                                variant: `E9LEuebRo`,
                                                width: `100%`,
                                                ...X({
                                                    p6JFUDvDd: {
                                                        variant: `aq_V1kxlR`
                                                    }
                                                }, _, T)
                                            })
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                })
            })
        })
    }), ln = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-pSDrL.framer-17zu3t9, .framer-pSDrL .framer-17zu3t9 { display: block; }`, `.framer-pSDrL.framer-6fnth1 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 160px; will-change: var(--framer-will-change-override, transform); }`, `.framer-pSDrL .framer-vnxbaf {color:white; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 16px 8px 16px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`, `.framer-pSDrL .framer-1ib842a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-pSDrL .framer-8gnxv2 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`, `.framer-pSDrL .framer-145bey8-container { flex: none; height: 16px; position: relative; width: 16px; }`, `.framer-pSDrL .framer-1trajqq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-pSDrL .framer-yhlkk-container, .framer-pSDrL .framer-52o1cb-container, .framer-pSDrL .framer-w2kpz2-container, .framer-pSDrL .framer-1tp0hrf-container, .framer-pSDrL .framer-avtq08-container { flex: none; height: auto; position: relative; width: 100%; }`, `.framer-pSDrL.framer-v-omrorh.framer-6fnth1, .framer-pSDrL.framer-v-nvf3jr .framer-1ib842a { cursor: pointer; }`, ...ke], Z = U(cn, ln, `framer-pSDrL`), un = Z, Z.displayName = `Menu`, Z.defaultProps = {
        height: 259.5,
        width: 160
    }, L(Z, {
        variant: {
            options: [`Dxap3Pw40`, `BTSjfepO1`, `Q9Oix0C3K`, `p6JFUDvDd`],
            optionTitles: [`Desktop opened`, `Desktop`, `Mobile / Tablet`, `Mobile / Tablet - opened`],
            title: `Variant`,
            type: T.Enum
        }
    }), I(Z, [{
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
    }, ...Yt, ...Xt, ...re(je)], {
        supportsExplicitInterCodegen: !0
    })
});

function fn(e, ...t) {
    let n = {};
    return t ?.forEach(t => t && Object.assign(n, e[t])), n
}
var pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, Q, wn, Tn = e(() => {
        s(), B(), x(), c(), pn = [`jY_WhcPQI`, `PRa2Z9lWN`, `vZVsWLxov`], mn = `framer-0sVIg`, hn = {
            jY_WhcPQI: `framer-v-m7f4bo`,
            PRa2Z9lWN: `framer-v-1gg4wls`,
            vZVsWLxov: `framer-v-7o1xo2`
        }, gn = {
            bounce: .2,
            delay: 0,
            duration: .4,
            type: `spring`
        }, _n = ({
            value: e,
            children: t
        }) => {
            let n = m(b),
                r = e ?? n.transition,
                i = h(() => ({
                    ...n,
                    transition: r
                }), [JSON.stringify(r)]);
            return d(b.Provider, {
                value: i,
                children: t
            })
        }, vn = S.create(v), yn = {
            Dark: `jY_WhcPQI`,
            Hide: `vZVsWLxov`,
            Light: `PRa2Z9lWN`
        }, bn = ({
            height: e,
            id: t,
            link: n,
            width: r,
            ...i
        }) => ({
            ...i,
            Gny9Yfhzy: n ?? i.Gny9Yfhzy,
            variant: yn[i.variant] ?? i.variant ?? `jY_WhcPQI`
        }), xn = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Sn = n(function (e, t) {
            let n = f(null),
                r = t ?? n,
                a = i(),
                {
                    activeLocale: o,
                    setLocale: s
                } = V(),
                c = me(),
                {
                    style: l,
                    className: u,
                    layoutId: p,
                    variant: m,
                    Gny9Yfhzy: h,
                    ...g
                } = bn(e),
                {
                    baseVariant: _,
                    classNames: v,
                    clearLoadingGesture: b,
                    gestureHandlers: x,
                    gestureVariant: S,
                    isLoading: C,
                    setGestureState: w,
                    setVariant: T,
                    variants: E
                } = H({
                    cycleOrder: pn,
                    defaultVariant: `jY_WhcPQI`,
                    ref: r,
                    variant: m,
                    variantClassNames: hn
                }),
                D = xn(e, E),
                O = [],
                A = R(mn, ...O);
            return d(y, {
                id: p ?? a,
                children: d(vn, {
                    animate: E,
                    initial: !1,
                    children: d(_n, {
                        value: gn,
                        children: d(j, {
                            href: h,
                            motionChild: !0,
                            nodeId: `jY_WhcPQI`,
                            openInNewTab: !1,
                            scopeId: `wu0KryvHX`,
                            smoothScroll: !0,
                            children: d(k, {
                                ...g,
                                ...x,
                                as: `a`,
                                background: {
                                    alt: ``,
                                    fit: `fit`,
                                    loading: ie(c ?.y || 0),
                                    pixelHeight: 61,
                                    pixelWidth: 224,
                                    positionX: `left`,
                                    positionY: `center`,
                                    src: `https://framerusercontent.com/images/oE2kIyGR3p2VZnVHMcWABYdXE.svg`
                                },
                                className: `${R(A,`framer-m7f4bo`,u,v)} framer-1t26xlq`,
                                "data-framer-name": `Dark`,
                                layoutDependency: D,
                                layoutId: `jY_WhcPQI`,
                                ref: r,
                                style: {
                                    opacity: 1,
                                    ...l
                                },
                                variants: {
                                    vZVsWLxov: {
                                        opacity: 0
                                    }
                                },
                                ...fn({
                                    PRa2Z9lWN: {
                                        "data-framer-name": `Light`,
                                        background: {
                                            alt: ``,
                                            fit: `fit`,
                                            loading: ie(c ?.y || 0),
                                            pixelHeight: 61,
                                            pixelWidth: 224,
                                            positionX: `left`,
                                            positionY: `center`,
                                            src: `https://framerusercontent.com/images/uQHIOJSmdDG1wfA2XEJPNZfH5Zo.svg`
                                        }
                                    },
                                    vZVsWLxov: {
                                        "data-framer-name": `Hide`
                                    }
                                }, _, S)
                            })
                        })
                    })
                })
            })
        }), Cn = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-0sVIg.framer-1t26xlq, .framer-0sVIg .framer-1t26xlq { display: block; }`, `.framer-0sVIg.framer-m7f4bo { height: 40px; position: relative; text-decoration: none; width: 120px; }`], Q = U(Sn, Cn, `framer-0sVIg`), wn = Q, Q.displayName = `Logo`, Q.defaultProps = {
            height: 40,
            width: 120
        }, L(Q, {
            variant: {
                options: [`jY_WhcPQI`, `PRa2Z9lWN`, `vZVsWLxov`],
                optionTitles: [`Dark`, `Light`, `Hide`],
                title: `Variant`,
                type: T.Enum
            },
            Gny9Yfhzy: {
                title: `Link`,
                type: T.Link
            }
        }), I(Q, [{
            explicitInter: !0,
            fonts: []
        }], {
            supportsExplicitInterCodegen: !0
        })
    }),
    En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn = e(() => {
        s(), B(), x(), c(), gt(), dn(), Tn(), En = z(wn), Dn = Ce(wn), On = z(un), kn = xe(S.nav), An = z(ht), jn = ae(wn), Mn = {
            lW8YS7iZq: `(min-width: 1440px)`,
            tjhk5UzeU: `(max-width: 809px)`,
            xGZMjN831: `(min-width: 810px) and (max-width: 1439px)`
        }, Nn = `framer-9k3Oz`, Pn = {
            lW8YS7iZq: `framer-v-4e4xff`,
            tjhk5UzeU: `framer-v-1l7dlx4`,
            xGZMjN831: `framer-v-wthtfe`
        }, Fn = (e, t) => `translateX(-50%) ${t}`, In = {
            delay: .6,
            duration: .8,
            ease: [.28, .41, .56, 1],
            type: `tween`
        }, Ln = {
            opacity: 1,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            transition: In,
            x: 0,
            y: 0
        }, Rn = {
            opacity: .001,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            x: 0,
            y: -40
        }, zn = {
            tjhk5UzeU: [`.framer-9k3Oz .framer-h121gk { padding: 0px 16px 0px 16px; }`, `.framer-9k3Oz .framer-1nx1hfj-container { width: 100%; }`],
            xGZMjN831: [`.framer-9k3Oz .framer-h121gk { padding: 0px 32px 0px 62px; }`]
        }, Bn = Object.keys(zn), Vn = {
            tjhk5UzeU: `.framer-1l7dlx4-override`,
            xGZMjN831: `.framer-wthtfe-override`
        }, Hn = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-9k3Oz.framer-jjh6gd, .framer-9k3Oz .framer-jjh6gd { display: block; }`, `.framer-9k3Oz.framer-4e4xff { align-content: center; align-items: center; background-color: var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-9k3Oz .framer-h121gk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px 62px 0px 62px; position: var(--framer-canvas-fixed-position, fixed); top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 9; }`, `.framer-9k3Oz .framer-14huq7l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 62px; height: min-content; justify-content: flex-end; overflow: visible; padding: 32px 0px 0px 0px; position: relative; width: 100%; }`, `.framer-9k3Oz .framer-n0erep { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`, `.framer-9k3Oz .framer-1nx1hfj-container { flex: none; height: 40px; position: relative; width: 120px; }`, `.framer-9k3Oz .framer-1thv1bu-container { flex: none; height: auto; position: relative; width: auto; z-index: 10; }`, `.framer-9k3Oz .framer-1c44rln { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`, `.framer-9k3Oz .framer-111uol0-container { flex: none; height: auto; order: 1002; position: relative; width: 100%; z-index: 1; }`, `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`], Un = {
            lW8YS7iZq: `(min-width: 1440px)`,
            tjhk5UzeU: `(max-width: 809px)`,
            xGZMjN831: `(min-width: 810px) and (max-width: 1439px)`
        }, Wn = ({
            value: e
        }) => {
            let t = _e();
            return t ? null : d(`style`, {
                dangerouslySetInnerHTML: {
                    __html: e
                },
                "data-framer-html-style": ``
            })
        }, Gn = {
            Dark: `jY_WhcPQI`,
            Hide: `vZVsWLxov`,
            Light: `PRa2Z9lWN`
        }, Kn = {
            Desktop: `lW8YS7iZq`,
            Phone: `tjhk5UzeU`,
            Tablet: `xGZMjN831`
        }, qn = ({
            footer: e,
            height: t,
            id: n,
            logoVariant: r,
            navbar: i,
            scrollSection: a,
            showLogo: o,
            width: s,
            ...c
        }) => ({
            ...c,
            E9dNUiF60: a ?? c.E9dNUiF60,
            kVYVHUEmW: o ?? c.kVYVHUEmW ?? !0,
            twH5aLEdN: e ?? c.twH5aLEdN ?? !0,
            variant: Kn[c.variant] ?? c.variant ?? `lW8YS7iZq`,
            X92bYIRKO: Gn[r] ?? r ?? c.X92bYIRKO ?? `jY_WhcPQI`,
            ZSPZc3cJK: i ?? c.ZSPZc3cJK ?? !0
        }), Jn = n(function (e, t) {
            let n = f(null),
                r = t ?? n,
                a = i(),
                {
                    activeLocale: o,
                    setLocale: s
                } = V(),
                {
                    style: c,
                    className: l,
                    layoutId: u,
                    variant: p,
                    ZSPZc3cJK: m,
                    twH5aLEdN: h,
                    kVYVHUEmW: _,
                    X92bYIRKO: v,
                    E9dNUiF60: b,
                    children: x,
                    ...T
                } = qn(e),
                [E, O] = ge(p, Mn, !1),
                k, A = [],
                j = R(Nn, ...A),
                M = ye();
            return he({}), d(D.Provider, {
                value: {
                    isLayoutTemplate: !0,
                    primaryVariantId: `lW8YS7iZq`,
                    variantClassNames: Pn
                },
                children: g(y, {
                    id: u ?? a,
                    children: [d(Wn, {
                        value: `:root body { background: var(--token-c16de519-c910-4bdd-9783-fc435a0c6d62, rgb(255, 255, 255)); }`
                    }), g(S.div, {
                        ...T,
                        className: R(j, `framer-4e4xff`, l),
                        "data-layout-template": !0,
                        ref: r,
                        style: {
                            ...c
                        },
                        children: [m && d(kn, {
                            animate: Ln,
                            className: `framer-h121gk`,
                            "data-framer-appear-id": `h121gk`,
                            "data-framer-layout-hint-center-x": !0,
                            "data-framer-name": `Navbar`,
                            initial: Rn,
                            optimized: !0,
                            transformTemplate: Fn,
                            children: g(`div`, {
                                className: `framer-14huq7l`,
                                "data-framer-name": `Container`,
                                children: [d(`div`, {
                                    className: `framer-n0erep`,
                                    "data-framer-name": `Brand`,
                                    children: _ && d(te, {
                                        links: [{
                                            href: {
                                                webPageId: `augiA20Il`
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                webPageId: `augiA20Il`
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                webPageId: `augiA20Il`
                                            },
                                            implicitPathVariables: void 0
                                        }],
                                        children: e => d(P, {
                                            breakpoint: E,
                                            overrides: {
                                                tjhk5UzeU: {
                                                    width: void 0
                                                }
                                            },
                                            children: d(C, {
                                                height: 40,
                                                width: `120px`,
                                                y: 32,
                                                children: d(w, {
                                                    className: `framer-1nx1hfj-container`,
                                                    nodeId: `es0CbQsiU`,
                                                    rendersWithMotion: !0,
                                                    scopeId: `vm5wdeNZh`,
                                                    children: d(P, {
                                                        breakpoint: E,
                                                        overrides: {
                                                            tjhk5UzeU: {
                                                                Gny9Yfhzy: e[2]
                                                            },
                                                            xGZMjN831: {
                                                                Gny9Yfhzy: e[1]
                                                            }
                                                        },
                                                        children: d(Dn, {
                                                            __framer__animateOnce: !1,
                                                            __framer__targets: [{
                                                                ref: b,
                                                                target: `vZVsWLxov`
                                                            }],
                                                            __framer__threshold: .5,
                                                            __framer__variantAppearEffectEnabled: !0,
                                                            Gny9Yfhzy: e[0],
                                                            height: `100%`,
                                                            id: `es0CbQsiU`,
                                                            layoutId: `es0CbQsiU`,
                                                            style: {
                                                                height: `100%`,
                                                                width: `100%`
                                                            },
                                                            variant: v,
                                                            width: `100%`
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }), d(C, {
                                    height: 218,
                                    y: 32,
                                    children: d(w, {
                                        className: `framer-1thv1bu-container`,
                                        nodeId: `zz0o6yiWb`,
                                        scopeId: `vm5wdeNZh`,
                                        children: d(P, {
                                            breakpoint: E,
                                            overrides: {
                                                tjhk5UzeU: {
                                                    variant: `Q9Oix0C3K`
                                                },
                                                xGZMjN831: {
                                                    variant: `Q9Oix0C3K`
                                                }
                                            },
                                            children: d(un, {
                                                height: `100%`,
                                                id: `zz0o6yiWb`,
                                                layoutId: `zz0o6yiWb`,
                                                variant: `BTSjfepO1`,
                                                width: `100%`
                                            })
                                        })
                                    })
                                })]
                            })
                        }), x, d(`div`, {
                            className: `framer-1c44rln`
                        }), h && d(C, {
                            height: 698,
                            width: `100vw`,
                            y: 1e3,
                            children: d(w, {
                                className: `framer-111uol0-container`,
                                nodeId: `n_QqhPWHl`,
                                scopeId: `vm5wdeNZh`,
                                children: d(P, {
                                    breakpoint: E,
                                    overrides: {
                                        tjhk5UzeU: {
                                            variant: `mG2S4yExh`
                                        },
                                        xGZMjN831: {
                                            variant: `EGqPWHHV_`
                                        }
                                    },
                                    children: d(ht, {
                                        height: `100%`,
                                        id: `n_QqhPWHl`,
                                        layoutId: `n_QqhPWHl`,
                                        style: {
                                            width: `100%`
                                        },
                                        variant: `NB3oLFVwf`,
                                        width: `100%`
                                    })
                                })
                            })
                        })]
                    }), d(`div`, {
                        id: `template-overlay`
                    })]
                })
            })
        }), Yn = e => {
            let t = e === ee.canvas || e === ee.export;
            return t ? [...Hn, ...Bn.flatMap(e => {
                let t = Vn[e];
                return zn[e].map(e => `${t} {${e}}`)
            })] : [...Hn, ...Bn.map(e => {
                let t = Un[e];
                return `@media ${t} { ${zn[e].join(` `)} }`
            })]
        }, Xn = U(Jn, Yn, `framer-9k3Oz`), Zn = Xn, Xn.displayName = `Main`, Xn.defaultProps = {
            height: 1531,
            width: 1440
        }, L(Xn, {
            ZSPZc3cJK: {
                defaultValue: !0,
                title: `Navbar`,
                type: T.Boolean
            },
            twH5aLEdN: {
                defaultValue: !0,
                title: `Footer`,
                type: T.Boolean
            },
            kVYVHUEmW: {
                defaultValue: !0,
                title: `Show Logo`,
                type: T.Boolean
            },
            X92bYIRKO: jn ?.variant && {
                ...jn.variant,
                defaultValue: `jY_WhcPQI`,
                description: void 0,
                hidden: void 0,
                title: `Logo variant`
            },
            E9dNUiF60: {
                title: `Scroll Section`,
                type: T.ScrollSectionRef
            }
        }), I(Xn, [{
            explicitInter: !0,
            fonts: []
        }, ...En, ...On, ...An], {
            supportsExplicitInterCodegen: !0
        })
    });

function $n({
    routeId: e,
    children: n,
    style: r,
    ...i
}) {
    let a = {
            kVYVHUEmW: !1,
            twH5aLEdN: !0,
            X92bYIRKO: `jY_WhcPQI`,
            ZSPZc3cJK: !0
        },
        o = {
            ...a,
            kVYVHUEmW: !0,
            ZSPZc3cJK: !1
        },
        s = {
            augiA20Il: a,
            B3FNg4k_A: o
        },
        c = s[e] ?? {};
    switch (e) {
        case `augiA20Il`:
        case `B3FNg4k_A`:
            return t(Zn, {
                ...c,
                key: `Main`,
                routeId: e,
                style: r
            }, n(!0));
        default:
            return n(!1)
    }
}

function er(e) {
    switch (e) {
        case `augiA20Il`:
        case `B3FNg4k_A`:
            return [{
                hash: `4e4xff`,
                mediaQuery: `(min-width: 1440px)`
            }, {
                hash: `wthtfe`,
                mediaQuery: `(min-width: 810px) and (max-width: 1439px)`
            }, {
                hash: `1l7dlx4`,
                mediaQuery: `(max-width: 809px)`
            }];
        default:
            return
    }
}
async function tr({
    routeId: e,
    pathVariables: n,
    localeId: r
}) {
    let i = $[e].page.preload(),
        a = t(N, {
            isWebsite: !0,
            routeId: e,
            pathVariables: n,
            routes: $,
            collectionUtils: ar,
            framerSiteId: or,
            notFoundPage: ce(() => import(`./aQNWLQxBV4ulgsqjUUWKGOxksNtWlI2WIBjHrFp6a1M.DD5sx3fN.mjs`)),
            isReducedMotion: void 0,
            localeId: r,
            locales: ir,
            preserveQueryParams: void 0,
            siteCanonicalURL: ``,
            LayoutTemplate: $n
        }),
        o = t(A, {
            children: a,
            value: {
                editorBarDisableFrameAncestorsSecurity: !1,
                editorBarExperimentalEmailLinkToCanvas: !1,
                editorBarOnPageEditing: !1,
                editorBarSendEmails: !1,
                motionDivToDiv: !1,
                motionDivToDivBackgroundImage: !0,
                pauseOffscreen: !0,
                replaceNestedLinks: !0,
                synchronousNavigationOnDesktop: !1,
                yieldOnTap: !1
            }
        }),
        s = t(O, {
            children: o
        }),
        c = t(M, {
            children: s,
            value: {
                routes: {}
            }
        });
    return await i, c
}

function nr() {
    sr && _.__framer_events.push(arguments)
}
async function rr(e, t) {
    function n(e, t, n = !0) {
        if (e.caught || _.__framer_hadFatalError) return;
        let r = t ?.componentStack;
        if (n) {
            if (console.warn(`Recoverable error has happened. Please check any custom code or code overrides to fix server/client mismatches:
`, e, r), Math.random() > .01) return
        } else console.error(`Fatal crash has happened. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/:
`, e, r);
        nr(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
            message: String(e),
            componentStack: r,
            stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null
        })
    }
    try {
        let i, o, s, c;
        if (e) {
            let e = JSON.parse(t.dataset.framerHydrateV2);
            i = e.routeId, o = e.localeId, s = e.pathVariables, c = e.breakpoints, i = ue($, i)
        } else {
            ue($, void 0);
            let e = oe($, decodeURIComponent(location.pathname), !0, ir);
            i = e.routeId, o = e.localeId, s = e.pathVariables
        }
        let l = tr({
            routeId: i,
            localeId: o,
            pathVariables: s
        });
        _ !== void 0 && (async () => {
            let e = $[i],
                t = `default`,
                n = ir.find(({
                    id: e
                }) => o ? e === o : e === t).code,
                r = null;
            if (e ?.collectionId && ar) {
                let t = await ar[e.collectionId] ?.(),
                    [i] = Object.values(s);
                t && typeof i == `string` && (r = await t.getRecordIdBySlug(i, n || void 0) ?? null)
            }
            let a = Intl.DateTimeFormat().resolvedOptions(),
                c = a.timeZone,
                l = a.locale;
            await new Promise(e => {
                document.prerendering ? document.addEventListener(`prerenderingchange`, e, {
                    once: !0
                }) : e()
            }), _.__framer_events.push([`published_site_pageview`, {
                framerSiteId: or ?? null,
                routePath: e ?.path || `/`,
                collectionItemId: r,
                framerLocale: n || null,
                webPageId: e ?.abTestingVariantId ?? i,
                abTestId: e ?.abTestId,
                referrer: document.referrer || null,
                url: _.location.href,
                hostname: _.location.hostname || null,
                pathname: _.location.pathname || null,
                hash: _.location.hash || null,
                search: _.location.search || null,
                timezone: c,
                locale: l
            }, `eager`]), await we({
                priority: `background`,
                ensureContinueBeforeUnload: !0,
                continueAfter: `paint`
            }), document.dispatchEvent(new CustomEvent(`framer:pageview`, {
                detail: {
                    framerLocale: n || null
                }
            }))
        })();
        let u = await l;
        if (e) {
            Se(`framer-rewrite-breakpoints`, () => {
                de(c), _.__framer_onRewriteBreakpoints ?.(c)
            });
            let e = r;
            e(() => {
                le(), fe(), a(t, u, {
                    onRecoverableError: n
                })
            })
        } else p(t, {
            onRecoverableError: n
        }).render(u)
    } catch (e) {
        throw n(e, void 0, !1), e
    }
}
var $, ir, ar, or, sr, cr = e(() => {
    if (u(), B(), c(), l(), o(), Qn(), $ = {
            augiA20Il: {
                elements: {
                    iOopVsPls: `showreel`,
                    rE4l_OxNj: `gallery`
                },
                page: ce(() => import(`./RUPHXXBZuTDALlCDddGdniNYxkQzPHiUBS-nG5BunbM.CF7GJBhZ.mjs`)),
                path: `/`
            },
            B3FNg4k_A: {
                elements: {},
                page: ce(() => import(`./aQNWLQxBV4ulgsqjUUWKGOxksNtWlI2WIBjHrFp6a1M.DD5sx3fN.mjs`)),
                path: `/404`
            }
        }, ir = [{
            code: `en`,
            id: `default`,
            name: `English`,
            slug: ``
        }], ar = {}, or = `92ee78a31fecd488f2d54c0e9670f0e5ad9d7566d3620124c59fa6b56da58e9a`, sr = typeof document < `u`, sr) {
        _.__framer_importFromPackage = (e, n) => () => t(E, {
            error: `Package component not supported: "` + n + `" in "` + e + `"`
        }), _.process = {
            ..._.process,
            env: {
                ..._.process ? _.process.env : void 0,
                NODE_ENV: `production`
            }
        }, _.__framer_events = _.__framer_events || [], se();
        let e = document.getElementById(`main`);
        `framerHydrateV2` in e.dataset ? rr(!0, e) : rr(!1, e)
    }
});
cr();
export {
    er as getLayoutTemplateBreakpoints, tr as getPageRoot
};
//# sourceMappingURL=script_main.CmcGVRYw.mjs.map