!(function(t) {
    var e = {};
    function i(n) {
        if (e[n]) return e[n].exports;
        var o = (e[n] = { i: n, l: !1, exports: {} });
        return t[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
    }
    (i.m = t),
        (i.c = e),
        (i.d = function(t, e, n) {
            i.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: n });
        }),
        (i.r = function(t) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (i.t = function(t, e) {
            if ((1 & e && (t = i(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
                (i.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t,
                }),
                2 & e && "string" != typeof t)
            )
                for (var o in t)
                    i.d(
                        n,
                        o,
                        function(e) {
                            return t[e];
                        }.bind(null, o)
                    );
            return n;
        }),
        (i.n = function(t) {
            var e =
                t && t.__esModule
                    ? function() {
                          return t.default;
                      }
                    : function() {
                          return t;
                      };
            return i.d(e, "a", e), e;
        }),
        (i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (i.p = "/dist/"),
        i((i.s = 6));
})([
    function(t, e, i) {
        var n = i(1),
            o = i(2);
        "string" == typeof (o = o.__esModule ? o.default : o) &&
            (o = [[t.i, o, ""]]);
        var a = { insert: "head", singleton: !1 },
            r = (n(o, a), o.locals ? o.locals : {});
        t.exports = r;
    },
    function(t, e, i) {
        "use strict";
        var n,
            o = function() {
                return (
                    void 0 === n &&
                        (n = Boolean(
                            window && document && document.all && !window.atob
                        )),
                    n
                );
            },
            a = (function() {
                var t = {};
                return function(e) {
                    if (void 0 === t[e]) {
                        var i = document.querySelector(e);
                        if (
                            window.HTMLIFrameElement &&
                            i instanceof window.HTMLIFrameElement
                        )
                            try {
                                i = i.contentDocument.head;
                            } catch (t) {
                                i = null;
                            }
                        t[e] = i;
                    }
                    return t[e];
                };
            })(),
            r = [];
        function s(t) {
            for (var e = -1, i = 0; i < r.length; i++)
                if (r[i].identifier === t) {
                    e = i;
                    break;
                }
            return e;
        }
        function d(t, e) {
            for (var i = {}, n = [], o = 0; o < t.length; o++) {
                var a = t[o],
                    d = e.base ? a[0] + e.base : a[0],
                    l = i[d] || 0,
                    c = "".concat(d, " ").concat(l);
                i[d] = l + 1;
                var p = s(c),
                    h = { css: a[1], media: a[2], sourceMap: a[3] };
                -1 !== p
                    ? (r[p].references++, r[p].updater(h))
                    : r.push({
                          identifier: c,
                          updater: m(h, e),
                          references: 1,
                      }),
                    n.push(c);
            }
            return n;
        }
        function l(t) {
            var e = document.createElement("style"),
                n = t.attributes || {};
            if (void 0 === n.nonce) {
                var o = i.nc;
                o && (n.nonce = o);
            }
            if (
                (Object.keys(n).forEach(function(t) {
                    e.setAttribute(t, n[t]);
                }),
                "function" == typeof t.insert)
            )
                t.insert(e);
            else {
                var r = a(t.insert || "head");
                if (!r)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                r.appendChild(e);
            }
            return e;
        }
        var c,
            p =
                ((c = []),
                function(t, e) {
                    return (c[t] = e), c.filter(Boolean).join("\n");
                });
        function h(t, e, i, n) {
            var o = i
                ? ""
                : n.media
                ? "@media ".concat(n.media, " {").concat(n.css, "}")
                : n.css;
            if (t.styleSheet) t.styleSheet.cssText = p(e, o);
            else {
                var a = document.createTextNode(o),
                    r = t.childNodes;
                r[e] && t.removeChild(r[e]),
                    r.length ? t.insertBefore(a, r[e]) : t.appendChild(a);
            }
        }
        function u(t, e, i) {
            var n = i.css,
                o = i.media,
                a = i.sourceMap;
            if (
                (o ? t.setAttribute("media", o) : t.removeAttribute("media"),
                a &&
                    btoa &&
                    (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                        " */"
                    )),
                t.styleSheet)
            )
                t.styleSheet.cssText = n;
            else {
                for (; t.firstChild; ) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n));
            }
        }
        var x = null,
            g = 0;
        function m(t, e) {
            var i, n, o;
            if (e.singleton) {
                var a = g++;
                (i = x || (x = l(e))),
                    (n = h.bind(null, i, a, !1)),
                    (o = h.bind(null, i, a, !0));
            } else
                (i = l(e)),
                    (n = u.bind(null, i, e)),
                    (o = function() {
                        !(function(t) {
                            if (null === t.parentNode) return !1;
                            t.parentNode.removeChild(t);
                        })(i);
                    });
            return (
                n(t),
                function(e) {
                    if (e) {
                        if (
                            e.css === t.css &&
                            e.media === t.media &&
                            e.sourceMap === t.sourceMap
                        )
                            return;
                        n((t = e));
                    } else o();
                }
            );
        }
        t.exports = function(t, e) {
            (e = e || {}).singleton ||
                "boolean" == typeof e.singleton ||
                (e.singleton = o());
            var i = d((t = t || []), e);
            return function(t) {
                if (
                    ((t = t || []),
                    "[object Array]" === Object.prototype.toString.call(t))
                ) {
                    for (var n = 0; n < i.length; n++) {
                        var o = s(i[n]);
                        r[o].references--;
                    }
                    for (var a = d(t, e), l = 0; l < i.length; l++) {
                        var c = s(i[l]);
                        0 === r[c].references &&
                            (r[c].updater(), r.splice(c, 1));
                    }
                    i = a;
                }
            };
        };
    },
    function(t, e, i) {
        (e = i(3)(!1)).push([
            t.i,
            '*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}:focus{outline:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\'\';content:none}table{border-collapse:collapse;border-spacing:0}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none;-moz-appearance:none}input[type=search]{-webkit-appearance:none;-moz-appearance:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}textarea{overflow:auto;vertical-align:top;resize:vertical}audio,canvas,video{display:inline-block;*display:inline;*zoom:1;max-width:100%}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}a:focus{outline:none}a{text-decoration:none}a:active,a:hover{outline:0}img{border:0;-ms-interpolation-mode:bicubic}figure{margin:0}form{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0;white-space:normal;*margin-left:-7px}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle}button,input{line-height:normal}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer;*overflow:visible}button[disabled],html input[disabled]{cursor:default}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;*height:13px;*width:13px}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}html,button,input,select,textarea{color:#222}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}img{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.chromeframe{margin:0.2em 0;background:#ccc;color:#000;padding:0.2em 0}.slider{max-width:100%;min-width:320px;position:relative;margin-top:162px;height:min-content}.slider__list{width:100%;height:100%;overflow:hidden}.slider__item{width:100%;height:100%}.slider__item:not(:first-child){display:none}.slider__image{object-fit:cover;width:100%;height:100%;border:none;box-shadow:none}.slider__console{z-index:1;position:absolute;top:50%;width:100%;margin-top:-28px}.slider__btn{cursor:pointer;position:absolute;width:auto;padding:16px;color:#e9367d;font-weight:bold;font-size:24px;text-decoration:none;transition:0.6s ease}.slider__btn--prev{left:0;border-radius:0 3px 3px 0}.slider__btn--next{right:0;border-radius:3px 0 0 3px}.slider__btn:hover{color:#fff;font-size:28px}.slider-dots{position:absolute;bottom:20px;width:100%;text-align:center}.slider-dots__item{display:inline-block}.slider-dots__btn{cursor:pointer;height:12px;width:12px;margin:0 2px;background-color:#ddd;border-radius:50%;display:inline-block;transition:background-color 0.6s ease}.slider-dots__btn--active{background-color:#aaa}.slider-dots__btn:hover{background-color:#e9367d}.slider__image{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s}@-webkit-keyframes fade{from{opacity:.4}to{opacity:1}}@keyframes fade{from{opacity:.4}to{opacity:1}}.karaoke__loading{height:100px}.karaoke__bounceball{position:relative;display:inline-block;height:57px;width:25px}.karaoke__bounceball:before{position:absolute;content:\'\';display:block;top:0;width:25px;height:25px;border-radius:50%;background-color:#e9367d;transform-origin:50%;animation:bounce 500ms alternate infinite ease}@keyframes bounce{0%{top:30px;height:5px;border-radius:60px 60px 20px 20px;transform:scaleX(2)}35%{height:25px;border-radius:50%;transform:scaleX(1)}100%{top:0}}.karaoke{max-width:1200px;min-width:320px;height:410px;overflow:hidden;margin:0 auto;padding-top:50px;display:flex;flex-wrap:wrap;flex-direction:row}.karaoke__title{width:100%;height:60px;line-height:60px;text-align:center;color:#e9367d;font-family:"Righteous";font-size:26px;text-indent:12%;text-transform:uppercase}.karaoke__songBlock{align-self:flex-start;padding-top:50px;width:12%;display:flex;justify-content:center;align-items:center;background-color:#fff}.karaoke__textBlock{width:85%;font-size:5vw;font-family:"Spartan";text-align:center;margin-top:100px;padding:0 5px}.karaoke__textLine,.karaoke__textLine--current{height:100px;line-height:normal;width:100%;max-width:100%;color:dimgray}.karaoke__textLine--current{color:#e9367d}.karaoke__button,.karaoke__button--play,.karaoke__button--pause{width:80px;max-width:100%;height:80px;border:none;outline:none}.karaoke__button--play{background:url("./src/images/play.svg");background-position:center;background-repeat:no-repeat;background-size:cover}.karaoke__button--pause{background:url("./src/images/pause.svg");background-position:center;background-repeat:no-repeat;background-size:cover}@media (min-width: 1024px){.karaoke__textBlock{font-size:50px}}@media (max-width: 768px){.karaoke__songBlock{width:20%}.karaoke__textBlock{width:80%}}@media (max-width: 425px){.karaoke{padding-top:0;height:430px;flex-wrap:wrap}.karaoke__title{text-indent:0}.karaoke__songBlock{width:100%;z-index:20;padding-top:0}.karaoke__textBlock{width:100%;font-size:25px}.karaoke__button,.karaoke__button--play,.karaoke__button--pause{width:70px;height:70px}}.header{background-color:#000;position:fixed;top:0;width:100%;min-width:320px;z-index:10;border-bottom:8px solid #e9367d}.header__title{margin:14px auto 0 auto;height:80px;font-family:"Nosifer",cursive;text-align:center;font-size:48px;transition:all 0.3s ease-in-out}.header__link{display:inline-block;color:gold}.header__navigation{display:flex;justify-content:space-around;height:60px;padding:10px 0}.header__branding{transition:height 0.3s ease-in-out}.menu__link{display:inline-block;color:#e9367d;display:inline-block;width:39px;height:39px;line-height:39px;background:#272727;border-radius:50px}.menu__link:hover{box-shadow:0px 0px 5px 2px #e9367d}.menu__list{display:flex;font-size:20px;text-align:center;width:300px;justify-content:space-around}.navigation{font-family:"Righteous";font-size:25px}.navigation__link{display:inline-block;color:#fff}.navigation__link:hover{color:gold;text-decoration:underline}.navigation__list{display:flex;height:100%;align-items:center;width:560px;justify-content:space-around}.burger{color:#fff;font-size:25px;display:none;height:60px;text-align:center}.burger__button{margin-top:15px;cursor:pointer}.side-menu{margin-top:-269px;display:flex;width:100%;position:fixed;top:auto;height:auto;z-index:9;background-color:#000;flex-direction:column;transition:all 0.3s ease-in-out;box-shadow:2px 8px 5px 0px rgba(0,0,0,0.75)}.side-menu.shown{transition:all 0.3s ease-in-out;margin-top:0}@media (max-width: 900px){.burger{display:block}.header__navigation{display:none}.menu{height:fit-content;padding:10px 0}.menu__list{margin:0 auto}.navigation__link{margin:5px 0}.navigation__list{flex-direction:column;width:auto}}@media (min-width: 900px){.side-menu.shown{display:none}}.news{background-color:#f5f5f5}.news__container{max-width:1200px;min-width:320px;margin:0 auto 0;padding:10px}.news__title{font-family:"Righteous";font-size:26px;color:#000;text-transform:uppercase}.news__list{display:flex;flex-wrap:wrap;justify-content:space-evenly}.news__item{margin:2%}@media (min-width: 768px){.news__item{width:40%}}.card{background-color:#fff;padding:15px}.card__title{font-family:"Righteous";font-size:30px}.card__image-container{margin:20px auto;display:flex;align-items:center}.card__image{width:100%}.card__text{font-family:"Spartan";font-size:16px;color:#000;line-height:20px}.scrollArea,.scrollArea:nth-child(1),.scrollArea:nth-child(2){width:60px;height:300px;line-height:60px;writing-mode:vertical-lr;transform:rotate(180deg);text-align:center;background-color:gold;color:#000;position:absolute;top:300px;font-size:25px;display:none;font-family:"Righteous";border-radius:20px}.scrollArea:hover{box-shadow:0 0 5px 2px #e9367d}.scrollArea:nth-child(1){left:10px}.scrollArea:nth-child(2){right:10px}.alla{background-color:#f5f5f5}.artistBlock{padding:10px 20px;max-width:1200px;min-width:320px;margin:162px auto 0;background-color:#000;height:calc(100vh-$margin-top)}.artistBlock__title{font-family:"Righteous";color:gold;font-size:26px;margin:20px 0;text-align:center}.about{display:none}.about-s{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center}.about-s__immage{width:40%;border-radius:20px;margin:10px}.about-s__title{color:#e9367d;text-align:center;font-family:"Righteous";font-size:26px;margin:10px auto}.about-s__text,.about-s__text--center{width:50%;color:#fff;border-radius:20px;box-shadow:0px 0px 5px 5px gold;padding:20px;font-family:"Spartan";font-size:16px;line-height:20px}.about-s__text--center{width:100%;margin:20px}@media (max-width: 640px){.about-s{justify-content:center}.about-s__immage{width:80%;margin:20px auto}.about-s__text,.about-s__text--center{width:80%;margin:20px}}@media only screen and (min-width: 1200px){.scrollArea,.scrollArea:nth-child(1),.scrollArea:nth-child(2){display:block}.about-s{display:none}.about{display:flex;justify-content:space-between;align-items:center;padding-bottom:20px}.photo-block{width:50%;max-width:500px;max-height:500px;overflow:hidden;border-radius:20px}.photo-block__wrapper{width:200%;height:100%;display:flex;flex-wrap:nowrap}.photo-block__immage{width:50%;height:100%;transition:margin-left 1s ease}.description{width:50%;display:flex;flex-direction:column;color:#fff;box-sizing:border-box}.description__item{height:100%;overflow:hidden;margin:10px;border:1px solid #fff;border-radius:20px;box-shadow:0px 0px 5px 5px gold}.description__title{color:#e9367d;text-align:center;font-family:"Righteous";font-size:26px;margin:10px auto}.description__top{height:100%;padding:20px;transition:margin-top 1s ease;box-sizing:border-box;transition:display 1s ease;min-height:270px}.description__bottom{height:100%;padding:20px;box-sizing:border-box;display:none;transition:display 1s ease;min-height:270px}.description__article{font-family:"Spartan";font-size:16px;line-height:20px}}.contacts{background-color:#ffd700;padding:10px;border-radius:20px;width:80%;max-width:400px;padding:10px;margin:0 auto}.contacts__list{display:flex;justify-content:space-evenly}.contacts__item{background-color:#000000;width:50px;height:50px;display:flex;justify-content:center;align-items:center;border-radius:50%;cursor:pointer}.contacts__item:hover{box-shadow:0px 0px 10px 4px #e9367d}.ivan{background-color:#f5f5f5;margin-top:162px}.ivan__container{max-width:1200px;min-width:320px;margin:0 auto;background-color:#000;padding:20px}.introduction{display:flex;flex-direction:column;align-items:center;padding:20px}@media (min-width: 768px){.introduction{flex-direction:row;justify-content:space-evenly}}.introduction__information{order:1}@media (min-width: 768px){.introduction__information{width:50%;order:0}}.introduction__image-container{width:50%}@media (min-width: 768px){.introduction__image-container{width:30%}}.introduction__title{font-family:"Righteous";font-size:30px;text-transform:uppercase;margin:20px 0 0;text-align:center;color:gold}.introduction__text{font-family:"Spartan";font-size:16px;line-height:20px;margin-top:20%;background-color:#fff;border-radius:20px;padding:10px}.introduction__name{font-family:"Righteous"}.introduction__image-container{border-radius:20px;overflow:hidden}.introduction__image{width:100%}.career{display:flex;flex-direction:column;align-items:center}@media (min-width: 768px){.career{flex-direction:row;justify-content:space-evenly}}.career__image-container{width:50%;border-radius:20px;overflow:hidden}@media (min-width: 768px){.career__image-container{width:30%}}.career__image{width:100%}@media (min-width: 768px){.career__information{width:50%}}.career__title{font-family:"Righteous";font-size:26px;margin:20px 0 0;color:gold}.career__subtitle{font-family:"Righteous";font-size:30px;margin:20px 0 0;color:#e9367d}.career__paragraph{font-family:"Spartan";font-size:16px;line-height:20px;margin-top:20px;background-color:#fff;border-radius:20px;padding:10px}.social{background-color:gold;padding:20px;border-radius:20px;margin-top:20px}.social__list{display:flex;justify-content:space-evenly}.social__item{background-color:#000;width:50px;height:50px;display:flex;justify-content:center;align-items:center;border-radius:50%;cursor:pointer}.social__item:hover{box-shadow:0px 0px 10px 4px #e9367d}.social__link{font-size:30px;color:#e9367d}.social__link:hover{color:gold}.s-person{background-color:#f5f5f5}.s-person__container{max-width:1200px;margin:0 auto;padding:20px;background-color:#000;margin-top:162px}.s-person__title{font-family:"Righteous";font-size:26px;color:gold;padding:20px;text-align:center}.s-person__article{padding:20px 0}.s-article__container{display:flex;flex-wrap:wrap;justify-content:space-between}.s-article__container--reverse{flex-direction:row-reverse}.s-article__image-container{border:3px solid #e9367d;flex:0 0 40%;align-self:flex-start}@media (max-width: 600px){.s-article__image-container{flex:1 0 100%}}.s-article__image{max-width:100%}.s-article__text-container{flex:0 0 58%}@media (max-width: 600px){.s-article__text-container{flex:1 0 100%;padding:20px 0}}.s-article__title{font-size:30px;font-family:"Righteous";color:#e9367d;padding-bottom:20px}.s-article__text{color:#fff;font-size:16px;font-family:"Spartan";line-height:20px}.s-contact{text-align:center}.s-contact__social-link{margin-right:20px;cursor:pointer;color:#e9367d;font-size:30px;animation-duration:1s;transition:color 0.6s cubic-bezier(1, 0.02, 1, -0.14);animation-name:backRotate}.s-contact__social-link:hover{animation-name:forwardRotate;color:gold}@keyframes forwardRotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes backRotate{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}.aboutus{background-color:#f5f5f5;margin-top:162px}.aboutus__container{max-width:1200px;min-width:320px;background-color:#fff;margin:0 auto;padding:20px}.aboutus__images{display:flex;flex-wrap:wrap;justify-content:center;width:50%;margin:0 auto}.aboutus__image-container{width:45%;margin:1%;border:1px solid #000;border-radius:10px;overflow:hidden}.aboutus__image-container:hover{box-shadow:0 0 10px 2px #000}.aboutus__image{width:100%}.aboutus__title{font-family:"Righteous";font-size:26px;text-align:center;text-transform:uppercase;margin-top:50px}.person{margin-top:50px;text-align:center}@media (min-width: 768px){.person{display:flex;justify-content:space-between;align-items:center}}.person:nth-child(2n+1)>.person__image-container{order:1}.person__image-container{border:1px solid #000;border-radius:10px;overflow:hidden;width:90%;margin:0 auto}.person__image-container:hover{box-shadow:0 0 10px 2px #000}@media (min-width: 768px){.person__image-container{width:30%}}.person__image{width:100%}.person__introduction{margin-top:20px}@media (min-width: 768px){.person__introduction{width:50%;margin-top:0}}.person__text{font-family:"Spartan";font-size:16px;line-height:20px}.person__name{font-family:"Righteous";text-transform:uppercase}.artist-page{background-color:#f5f5f5;margin-top:162px}.artist-page__container{max-width:1200px;margin:0 auto;background-color:#000;padding:20px 56px}.artist-page__title{font-family:"Righteous";font-size:26px;margin-top:20px;color:gold;padding-bottom:5px;border-bottom:1px solid gold}.artist-page__main{display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:14px}.artist-page__image-container{width:40%}.artist-page__image{display:inline-block;width:100%}.artist-page__image--artist-adult{margin-top:65px}.artist-page__information{width:40%}.artist-page__information--lifecareer{width:100%;margin:40px 0}.artist-page__information--personal{margin-top:65px}.artist-page__image-title{font-family:"Spartan";text-align:center;color:#f5f5f5;font-weight:bold;font-size:20px;padding:10px 15px 0 15px}.artist-page__image-container--artist-youth{margin-right:80px}.references{text-align:center;width:75px;margin-top:10px}.references__list{font-size:15px;width:75px;display:flex;justify-content:space-between}.references__link{display:inline-block;color:#f5f5f5;display:inline-block;width:35px;height:35px;line-height:35px;background:#272727;border-radius:50px}.references__link:hover{box-shadow:0px 0px 5px 2px #e9367d}.biography{border:1px solid gold;height:max-content;padding:30px}.biography__header{font-family:"Righteous";font-size:30px;color:#e9367d;margin-bottom:10px}.biography__text{font-family:"Spartan";font-size:16px;color:#f5f5f5}.text{line-height:20px}.text__name{font-weight:bold}@media (max-width: 900px){.artist-page__information{width:100%}.artist-page__image-container{width:100%;margin:30px 0}.artist-page__image-container--artist-youth{margin-right:0px}}.footer{background-color:#000;padding:40px;text-align:center;min-width:320px}@media (min-width: 768px){.footer{display:flex;justify-content:space-evenly;align-items:center}}.footer__title{font-family:"Nosifer",cursive;text-align:center;font-size:48px}.footer__link{color:gold}.footer__description{margin-top:20px}@media (min-width: 768px){.footer__description{width:40%;margin-top:0}}.footer__text{font-family:"Spartan",sans-serif;color:#e9367d;line-height:20px;text-align:center}\n',
            "",
        ]),
            (t.exports = e);
    },
    function(t, e, i) {
        "use strict";
        t.exports = function(t) {
            var e = [];
            return (
                (e.toString = function() {
                    return this.map(function(e) {
                        var i = (function(t, e) {
                            var i = t[1] || "",
                                n = t[3];
                            if (!n) return i;
                            if (e && "function" == typeof btoa) {
                                var o =
                                        ((r = n),
                                        (s = btoa(
                                            unescape(
                                                encodeURIComponent(
                                                    JSON.stringify(r)
                                                )
                                            )
                                        )),
                                        (d = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                                            s
                                        )),
                                        "/*# ".concat(d, " */")),
                                    a = n.sources.map(function(t) {
                                        return "/*# sourceURL="
                                            .concat(n.sourceRoot || "")
                                            .concat(t, " */");
                                    });
                                return [i]
                                    .concat(a)
                                    .concat([o])
                                    .join("\n");
                            }
                            var r, s, d;
                            return [i].join("\n");
                        })(e, t);
                        return e[2]
                            ? "@media ".concat(e[2], " {").concat(i, "}")
                            : i;
                    }).join("");
                }),
                (e.i = function(t, i, n) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    var o = {};
                    if (n)
                        for (var a = 0; a < this.length; a++) {
                            var r = this[a][0];
                            null != r && (o[r] = !0);
                        }
                    for (var s = 0; s < t.length; s++) {
                        var d = [].concat(t[s]);
                        (n && o[d[0]]) ||
                            (i &&
                                (d[2]
                                    ? (d[2] = ""
                                          .concat(i, " and ")
                                          .concat(d[2]))
                                    : (d[2] = i)),
                            e.push(d));
                    }
                }),
                e
            );
        };
    },
    function(t, e) {
        window.addEventListener("scroll", function() {
            let t = document.documentElement.getBoundingClientRect().top,
                e = document.getElementsByClassName("header")[0],
                i = document.getElementsByClassName("header__branding")[0],
                n = document.getElementsByClassName("header__title")[0],
                o = document.getElementsByClassName("side-menu")[0];
            t <= -1 * (400 + e.style.height)
                ? ((i.style.height = "0px"),
                  (n.style.transform = "translateY(-100%)"),
                  (o.style.top = "82px"))
                : ((i.style.height = "80px"),
                  (n.style.transform = "translateY(0%)"),
                  (o.style.top = "162px"));
        });
    },
    function(t, e) {
        let i = document.getElementsByClassName("burger__button")[0],
            n = document.getElementsByClassName("side-menu")[0],
            o = document.getElementsByClassName("navigation__item");
        function a() {
            n.classList.remove("shown");
        }
        i.addEventListener("click", function() {
            n.classList.toggle("shown");
        }),
            Array.prototype.forEach.call(o, function(t) {
                t.addEventListener("click", a);
            });
    },
    function(t, e, i) {
        "use strict";
        i.r(e);
        i(0);
        var n = class {
            constructor(t) {
                (this._container = t), (this._slideIndex = 0), this.init();
            }
            init() {
                this.findNodes(),
                    this.bindAll(),
                    this.addEvents(),
                    this.autoRunSlide();
            }
            findNodes() {
                this._nodes = {
                    slides: this._container.querySelectorAll(".slider__item"),
                    prev: this._container.querySelector(".js-slider-prev"),
                    next: this._container.querySelector(".js-slider-next"),
                    dots: this._container.querySelectorAll(".slider-dots__btn"),
                };
            }
            addEvents() {
                this._container.addEventListener("click", this.stop),
                    this._nodes.prev.addEventListener(
                        "click",
                        this.showPreviousSlide
                    ),
                    this._nodes.next.addEventListener(
                        "click",
                        this.showNextSlide
                    );
                for (let t = 0; t < this._nodes.dots.length; t++)
                    this._nodes.dots[t].addEventListener("click", () => {
                        this.showCurrentSlide(t);
                    });
            }
            bindAll() {
                (this.stop = this.stop.bind(this)),
                    (this.showCurrentSlide = this.showCurrentSlide.bind(this)),
                    (this.showPreviousSlide = this.showPreviousSlide.bind(
                        this
                    )),
                    (this.showNextSlide = this.showNextSlide.bind(this));
            }
            showNextSlide() {
                this.showSlide((this._slideIndex += 1));
            }
            showPreviousSlide() {
                this.showSlide((this._slideIndex -= 1));
            }
            showCurrentSlide(t) {
                (this._slideIndex = t), this.showSlide(t);
            }
            showSlide(t) {
                t > this._nodes.slides.length - 1 && (this._slideIndex = 0),
                    t < 0 && (this._slideIndex = this._nodes.slides.length - 1),
                    this.hideSlides(),
                    this.deActivateDots(),
                    this.activateSlide(),
                    this.activateDot();
            }
            activateSlide() {
                this._nodes.slides[this._slideIndex].style.display = "block";
            }
            activateDot() {
                this._nodes.dots[this._slideIndex].className +=
                    " slider-dots__btn--active";
            }
            deActivateDots() {
                for (let t = 0; t < this._nodes.dots.length; t++)
                    this._nodes.dots[t].className = this._nodes.dots[
                        t
                    ].className.replace(" slider-dots__btn--active", "");
            }
            hideSlides() {
                for (let t = 0; t < this._nodes.slides.length; t++)
                    this._nodes.slides[t].style.display = "none";
            }
            start() {
                this.showSlide(this._slideIndex);
            }
            autoRunSlide() {
                this._timerId = setInterval(() => {
                    this.showSlide(++this._slideIndex);
                }, 3e3);
            }
            stop() {
                clearTimeout(this._timerId);
            }
        };
        var o = class {
            constructor(t) {
                (this.song = t),
                    (this.divSong = document.querySelector("#divSong")),
                    (this.audio = document.getElementsByClassName(
                        "karaoke__audio"
                    )[0]),
                    (this.isPlaying = !1);
            }
            addLyricsInDom() {
                this.song.map((t, e) => {
                    let i = document.createElement("p");
                    (i.innerHTML = t.text),
                        i.classList.add("karaoke__textLine"),
                        this.divSong.appendChild(i);
                });
            }
            scrollText() {
                let t;
                this.audio.ontimeupdate = e => {
                    this.song.forEach((i, n) => {
                        if (
                            e.target.currentTime >= i.start &&
                            e.target.currentTime <= i.end
                        ) {
                            let e = document.querySelector(
                                    ".karaoke__bounceball"
                                ),
                                i = `${-100 * n}px`;
                            (this.divSong.style.marginTop = i),
                                (e.style.display =
                                    "0px" === i ? "none" : "inline-block"),
                                n !== t &&
                                    (this.divSong.children[
                                        n + 1
                                    ].classList.toggle(
                                        "karaoke__textLine--current"
                                    ),
                                    this.divSong.children[n].classList.remove(
                                        "karaoke__textLine--current"
                                    ),
                                    (t = n));
                        }
                    });
                };
            }
            changePlayState() {
                let t = document.querySelector("#playerButton");
                this.isPlaying
                    ? (this.audio.pause(),
                      (this.isPlaying = !1),
                      t.classList.toggle("karaoke__button--pause"))
                    : (this.audio.play(),
                      (this.isPlaying = !0),
                      t.classList.toggle("karaoke__button--pause"));
            }
            playAgain() {
                let t = document.querySelector("#playerButton");
                (this.divSong.style.marginTop = "100px"),
                    (this.isPlaying = !1),
                    t.classList.toggle("karaoke__button--pause");
            }
        };
        i(4), i(5);
        const a = [
            { start: "7.00", end: "9.99", text: "You and me" },
            { start: "10.00", end: "13.0", text: "we used to be together" },
            { start: "13.01", end: "15.89", text: "every day together," },
            { start: "15.90", end: "19.49", text: "always" },
            { start: "19.50", end: "22.4", text: "I really feel " },
            { start: "22.50", end: "23.99", text: "that I'm losin' " },
            { start: "24.00", end: "25.80", text: "my best friend" },
            {
                start: "25.81",
                end: "28.00",
                text: "I can't believe this could be ",
            },
            { start: "28.01", end: "31.79", text: "the end" },
            { start: "31.80", end: "35.29", text: "It looks as though" },
            { start: "35.30", end: "38.49", text: "you're lettin' go" },
            {
                start: "38.50",
                end: "44.69",
                text: "And if it's real, well, I don't want to know",
            },
            { start: "44.70", end: "46.19", text: "Don't speak," },
            {
                start: "46.20",
                end: "49.00",
                text: "I know just what you're sayin'",
            },
            { start: "49.01", end: "52.00", text: "So please stop explainin'" },
            {
                start: "52.01",
                end: "57.40",
                text: "Don't tell me 'cause it hurts",
            },
            { start: "57.41", end: "59.09", text: "Don't speak," },
            {
                start: "59.10",
                end: "62.09",
                text: "I know what you're thinkin'",
            },
            { start: "62.10", end: "64.99", text: "I don't need your reasons" },
            {
                start: "65",
                end: "69.99",
                text: "Don't tell me 'cause it hurts",
            },
            { start: "70", end: "73.29", text: "Our memories, well" },
            { start: "73.30", end: "75.99", text: "they can be inviting" },
            {
                start: "76.00",
                end: "78.90",
                text: "But some are altogether mighty",
            },
            { start: "78.91", end: "82.29", text: "frightening" },
            { start: "82.30", end: "85.50", text: "As we die," },
            { start: "85.51", end: "89", text: "both you and I" },
            {
                start: "89",
                end: "95.29",
                text: "With my head in my hands, I sit and cry",
            },
            { start: "95.3", end: "96.7", text: "Don't speak," },
            {
                start: "96.7",
                end: "100",
                text: "I know just what you're sayin'",
            },
            { start: "100", end: "102.8", text: "So please stop explainin'" },
            {
                start: "102.8",
                end: "104",
                text: "Don't tell me 'cause it hurts, no, no, no",
            },
            { start: "108", end: "109", text: "Don't speak," },
            { start: "109", end: "112.5", text: "I know what you're thinkin'" },
            {
                start: "112.5",
                end: "115",
                text: "And I don't need your reasons",
            },
            {
                start: "115",
                end: "120.7",
                text: "Don't tell me 'cause it hurts",
            },
            { start: "120.7", end: "123.3", text: "It's all ending" },
            { start: "123.3", end: "126.7", text: "We gotta stop pretending" },
            { start: "126.7", end: "158.8", text: "Who we are" },
            { start: "158.8", end: "161.7", text: "You and me" },
            { start: "161.7", end: "164.3", text: "I can see us dyin'" },
            { start: "164.3", end: "167.7", text: "Aren't we?" },
            { start: "167.7", end: "169", text: "Don't speak," },
            {
                start: "169",
                end: "172.3",
                text: "I know just what you're sayin'",
            },
            { start: "172.3", end: "175.4", text: "So please stop explainin'" },
            {
                start: "175.4",
                end: "178.7",
                text: "Don't tell me 'cause it hurts.",
            },
            { start: "178.7", end: "180.5", text: "No, no," },
            { start: "180.5", end: "182", text: "don't speak," },
            { start: "182", end: "185.2", text: "I know what you're thinkin'" },
            {
                start: "185.2",
                end: "188",
                text: "And I don't need your reasons",
            },
            {
                start: "188",
                end: "191.3",
                text: "Don't tell me 'cause it hurts",
            },
            {
                start: "191.3",
                end: "194.6",
                text: "Don't tell me 'cause it hurts",
            },
            {
                start: "194.6",
                end: "197.7",
                text: "I know just what you're sayin'",
            },
            { start: "197.7", end: "200.9", text: "So please stop explainin'" },
            { start: "200.9", end: "202.3", text: "Don't speak," },
            { start: "202.3", end: "204", text: "don't speak" },
            { start: "204", end: "207.3", text: "Don't speak, no" },
            {
                start: "207.3",
                end: "210.4",
                text: "I know what you're thinkin'",
            },
            {
                start: "210.4",
                end: "213.4",
                text: "And I don't need your reasons",
            },
            { start: "213.4", end: "214.8", text: "I know you're good" },
            { start: "214.8", end: "216.3", text: "I know you're good" },
            { start: "216.3", end: "220", text: "I know you're real good, oh" },
            { start: "220", end: "223.3", text: "La, la, la, la" },
            { start: "223.3", end: "226.3", text: "La, la, la, la" },
            { start: "226.3", end: "227.9", text: "Don't," },
            { start: "227.9", end: "229", text: "don't," },
            { start: "229", end: "231.2", text: "ooh, ooh" },
            { start: "231.2", end: "234", text: "Hush, hush, darling" },
            { start: "234", end: "237.4", text: "Hush, hush, darling" },
            { start: "237.4", end: "238", text: "Hush, hush" },
            {
                start: "238",
                end: "243.7",
                text: "Don't tell me 'cause it hurts",
            },
            { start: "243.7", end: "246.8", text: "Hush, hush, darling" },
            { start: "246.8", end: "250", text: "Hush, hush, darling" },
            { start: "250", end: "251", text: "Hush, hush" },
            {
                start: "251",
                end: "256.4",
                text: "Don't tell me 'cause it hurts",
            },
            { start: "256.4", end: "263.55", text: "Hush, hush, darling" },
        ];
        var r = {
            ABOUT_US: "aboutus.html",
            ALLA_PAGE: "allapage.html",
            IVAN_PAGE: "ivanpage.html",
            MAIN: "main.html",
            OLEKSII_PAGE: "oleksiipage.html",
            STAS_PAGE: "staspage.html",
        };
        class s {
            constructor(t, e, i) {
                (this.name = t), (this.htmlName = e), (this.default = i);
            }
        }
        new (class {
            constructor(t) {
                (this.routes = t),
                    (this.rootElem = document.getElementById("root")),
                    window.addEventListener("hashchange", () =>
                        this.hasChanged(this)
                    ),
                    window.location.hash
                        ? this.hasChanged(this)
                        : t
                              .filter(t => t.default)
                              .forEach(t => this.goToRoute(t.htmlName));
            }
            hasChanged(t) {
                t.goToRoute(
                    t.routes.filter(
                        t => "#" + t.name == window.location.hash
                    )[0].htmlName
                );
            }
            async goToRoute(t) {
                const e = "src/html/" + t;
                if (
                    (await fetch(e)
                        .then(t => t.text())
                        .then(t => (this.rootElem.innerHTML = t)),
                    t !== r.ABOUT_US &&
                        (t => {
                            (window.location.hash = t.split(".")[0]),
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth",
                                });
                        })(t),
                    t === r.MAIN)
                ) {
                    (i = document.querySelector(".slider")), new n(i);
                    (t => {
                        let e = new o(t),
                            i = document.querySelector("#playerButton"),
                            n = document.getElementById("audio");
                        e.addLyricsInDom(),
                            (e.audio.onplaying = function() {
                                e.scrollText();
                            }),
                            i.addEventListener("click", function() {
                                e.changePlayState();
                            }),
                            n.addEventListener("ended", function() {
                                e.playAgain();
                            });
                    })(a);
                }
                var i;
                t === r.ALLA_PAGE &&
                    (() => {
                        function t(t) {
                            if (
                                (t.preventDefault(), window.innerWidth >= 1200)
                            ) {
                                var e = "";
                                "down" ===
                                (e =
                                    0 <
                                    ((t = t || window.event).deltaY ||
                                        t.detail ||
                                        t.wheelDelta)
                                        ? "down"
                                        : "up")
                                    ? ((document.querySelector(
                                          ".photo-block__immage"
                                      ).style.marginLeft = "-50%"),
                                      document
                                          .querySelectorAll(".description__top")
                                          .forEach(t => {
                                              t.style.display = "none";
                                          }),
                                      document
                                          .querySelectorAll(
                                              ".description__bottom"
                                          )
                                          .forEach(t => {
                                              t.style.display = "block";
                                          }))
                                    : "up" === e &&
                                      ((document.querySelector(
                                          ".photo-block__immage"
                                      ).style.marginLeft = "0"),
                                      document
                                          .querySelectorAll(".description__top")
                                          .forEach(t => {
                                              t.style.display = "block";
                                          }),
                                      document
                                          .querySelectorAll(
                                              ".description__bottom"
                                          )
                                          .forEach(t => {
                                              t.style.display = "none";
                                          }));
                            }
                        }
                        document.querySelectorAll(".scrollArea").forEach(e => {
                            e.addEventListener("wheel", t);
                        });
                    })();
            }
        })([
            new s("main", "main.html", !0),
            new s("ivanpage", "ivanpage.html"),
            new s("allapage", "allapage.html"),
            new s("staspage", "staspage.html"),
            new s("aboutus", "aboutus.html"),
            new s("oleksiipage", "oleksiipage.html"),
        ]);
    },
]);
