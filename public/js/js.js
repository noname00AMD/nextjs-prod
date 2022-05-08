(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.slider = factory());
})(this, (function () {
    'use strict';
    return function createSlide(name, opts) {
        var slide = document.querySelectorAll(name)[0]
        var container = slide.getElementsByClassName("slide__container")[0]
        var pagination = slide.getElementsByClassName("slide__pagination")[0]
        var item = container.childNodes
        var next = slide.getElementsByClassName("slide__next")[0]
        var prev = slide.getElementsByClassName("slide__prev")[0]
        var interval, temp
        for (var i = 0; i < item.length; i++) {
            item[i].setAttribute("aria-label", (i + 1) + " / " + item.length)
        }
        var loop = opts.rtl ? looprtl : loopltr
        //-----------------pagination ------------------------
        // var a = document.createElement("div")
        // a.textContent = "b"
        // pagination.appendChild(a)

        // setup first slide -- opts.first
        var slideToItem = container.getElementsByClassName("slide__item--active")[0]
        var prevItem
        var observer = new IntersectionObserver(function (entries) {
            clearTimeout(interval)
            if (entries[0].isIntersecting === true) {
                interval = loop()
            }
            // if (entries[0].isIntersecting === false) {
        }, { threshold: [0.5] });
        if (opts.autoplay) {
            observer.observe(slide);
        }
        function loopltr() {
            return setTimeout(function () {
                if (prevItem) {
                    temp = slideToItem
                }
                slideToItem = slideToItem.nextElementSibling
                if (!slideToItem) {
                    prevItem = temp
                    slideToItem = item[0]
                } else {
                    prevItem = slideToItem.previousElementSibling
                }
                slideTo(slideToItem, prevItem)
                interval = loop()
            }, opts.duration)
        }
        function looprtl() {
            return setTimeout(function () {
                if (prevItem) {
                    temp = slideToItem
                }
                slideToItem = slideToItem.previousElementSibling
                if (!slideToItem) {
                    prevItem = temp
                    slideToItem = item[item.length - 1]
                }
                else {
                    prevItem = slideToItem.nextElementSibling
                }
                slideTo(slideToItem, prevItem)
                interval = loop()
            }, opts.duration)
        }
        function slideTo(slideToItem, prevItem) {
            slideToItem.classList.add("slide__item--active")
            if (prevItem) {
                prevItem.classList.remove("slide__item--active")
            }
        }
        next.addEventListener("click", () => {
            clearInterval(interval)
            prevItem = slideToItem
            slideToItem = prevItem.nextElementSibling
            if (!slideToItem) {
                slideToItem = item[0]
            }
            slideTo(slideToItem, prevItem)
            interval = loop()
        })
        prev.addEventListener("click", () => {
            clearInterval(interval)
            prevItem = slideToItem
            slideToItem = prevItem.previousElementSibling
            if (!slideToItem) {
                slideToItem = item[item.length - 1]
            }
            slideTo(slideToItem, prevItem)
            interval = loop()
        })




        var x, y
        Array.from(item).forEach(function (el) {
            el.addEventListener("touchstart", function (event) {
                console.log("touch start");
                if(opts.horizontal){
                    y = event.targetTouches[0].clientY
                }else{
                    x = event.targetTouches[0].clientX
                }
            })
        })
        Array.from(item).forEach(function (el) {
            el.addEventListener("touchmove", function (event) {
                console.log("touch move");
            })
        })
        Array.from(item).forEach(function (el) {
            el.addEventListener("touchend", function (event) {
                console.log("touch end");
                var sizeDrag = event.target.clientWidth / 6
                var x1 = event.changedTouches[0].pageX
                var y1 = event.changedTouches[0].pageX
                clearInterval(interval)

                if ((x1 - x) > sizeDrag) {
                    console.log("> size");
                    prevItem = slideToItem
                    slideToItem = prevItem.previousElementSibling
                    if (!slideToItem) {
                        slideToItem = item[item.length - 1]
                    }
                    slideTo(slideToItem, prevItem)
                    interval = loop()
                } else if ((x - x1) > sizeDrag) {
                    // console.log("< size");
                    prevItem = slideToItem
                    slideToItem = prevItem.nextElementSibling
                    if (!slideToItem) {
                        slideToItem = item[0]
                    }
                    slideTo(slideToItem, prevItem)
                    interval = loop()
                }else{
                    if(opts.autoplay ){
                        interval = loop()
                    }
                }
            })
        })
        Array.from(item).forEach(function (el) {
            el.addEventListener("touchcancel", function (event) {
                console.log("touch cancel");
                var sizeDrag = event.target.clientWidth / 6
                var x1 = event.changedTouches[0].pageX
                var y1 = event.changedTouches[0].pageX
                clearInterval(interval)

                if ((x1 - x) > sizeDrag) {
                    console.log("> size");
                    prevItem = slideToItem
                    slideToItem = prevItem.previousElementSibling
                    if (!slideToItem) {
                        slideToItem = item[item.length - 1]
                    }
                    slideTo(slideToItem, prevItem)
                    interval = loop()
                } else if ((x - x1) > sizeDrag) {
                    // console.log("< size");
                    prevItem = slideToItem
                    slideToItem = prevItem.nextElementSibling
                    if (!slideToItem) {
                        slideToItem = item[0]
                    }
                    slideTo(slideToItem, prevItem)
                    interval = loop()
                }else{
                    if(opts.autoplay ){
                        interval = loop()
                    }
                }
            })
        })
        
        
        
        // Array.from(item).forEach(function (el) {
        //     el.addEventListener('pointerdown', (event) => {
        //         // console.log('pointer down');
        //         x = event.clientX
        //         y = event.clientY
        //     });
        // })
        // Array.from(item).forEach(function (el) {
        //     el.addEventListener('pointermove', (event) => {
        //         console.log('Pointer moved');
        //     });
        // })
        // Array.from(item).forEach(function (el) {
        //     el.addEventListener('pointerup', (event) => {

        //     })
        // })
        // Array.from(item).forEach(function (el) {
        //     el.addEventListener('pointerup', (event) => {
        //         console.log('pointer up ');
        //         var sizeDrag = event.target.clientWidth / 6
        //         console.log('sizeDrag: ' + sizeDrag);
        //         var x1 = event.clientX
        //         console.log("x1"+x1);
        //         var y1 = event.clientY
        //         clearInterval(interval)
        //         if ((x1 - x) > sizeDrag) {
        //             console.log("> size");
        //             prevItem = slideToItem
        //             slideToItem = prevItem.previousElementSibling
        //             if (!slideToItem) {
        //                 slideToItem = item[item.length - 1]
        //             }
        //             slideTo(slideToItem, prevItem)
        //             interval = loop()
        //         } else if ((x - x1) > sizeDrag) {
        //             console.log("< size");
        //             prevItem = slideToItem
        //             slideToItem = prevItem.nextElementSibling
        //             if (!slideToItem) {
        //                 slideToItem = item[0]
        //             }
        //             slideTo(slideToItem, prevItem)
        //             interval = loop()
        //         }
        //     });
        // })








        //------------------ when leave tab
        document.addEventListener("visibilitychange", onVisibilityChange)
        function onVisibilityChange() {
            if (document.visibilityState === 'hidden') {
                clearInterval(interval)
            }
            if (document.visibilityState === 'visible' && opts.autoplay === true) {
                if (opts.autoplay) {
                    interval = loop()
                }
            }
        }
    }
}));


window.onload = () => {
    var a = slider(".slide", {
        slidesPerView: 1,
        autoplay: false,
        loop: true,
        duration: 1200,
        rtl: true,
        horizontal: false
    })

    // const swiper = new Swiper('.swiper', {
    //     // Optional parameters

    //     loop: true,
    //     autoplay: true,

    //     // If we need pagination
    //     pagination: {
    //         el: '.swiper-pagination',
    //     },

    //     // Navigation arrows
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },

    //     // And if we need scrollbar
    //     scrollbar: {
    //         el: '.swiper-scrollbar',
    //     },
    // });
}