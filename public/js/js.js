(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Slider = factory());
})(this, (function () {
    'use strict';

    return function createSlide(name, opts) {
        var slide = document.getElementsByClassName(name)[0]
        var container = slide.getElementsByClassName("slide__container")[0]
        var item = container.childNodes
        var next = slide.getElementsByClassName("slide__next")[0]
        var prev = slide.getElementsByClassName("slide__prev")[0]
        var interval;
        for (var i = 0; i < item.length; i++) {
            item[i].setAttribute("aria-label", (i + 1) + " / " + item.length)
        }

        // setup first slide -- opts.first
        var internal
        var currentSlide = item[opts.start]
        var nextSlide
        currentSlide.classList.add("slide__item--active")
        currentSlide.style.zIndex = 3

        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting === true) {
                console.log('Element has just become visible in screen');
                clearTimeout(internal)
                interval = loop()
            } else if (entries[0].isIntersecting === false) {
                console.log('Element has just become invisible in screen');
                clearTimeout(internal)
            } else {
                clearTimeout(internal)
            }

        }, { threshold: [0.6] });
        observer.observe(slide);

        function loop() {
            return setTimeout(function () {
                console.log("running loop");
                nextSlide = currentSlide.nextElementSibling
                if (!nextSlide) {
                    nextSlide = item[0]
                }
                nextSlide.classList.add("slide__item--active")
                nextSlide.style.zIndex = 3
                currentSlide.classList.remove("slide__item--active")
                currentSlide.style.zIndex = 0
                currentSlide = nextSlide
            }, opts.duration)
        }
        function setSlide(currentIndex, nextIndex) {
            addClass(nextIndex)
            setzIndex(nextIndex, 3)
            removeClass(currentIndex)
            setzIndex(currentIndex, 0)
        }
        function removeClass(elm) {
            item[index].classList.remove("slide__item--active")
        }
        function addClass(index) {
            item[index].classList.add("slide__item--active")
        }
        function setzIndex(index, value) {
            item[index].style.zIndex = value
        }
        function removezIndex(index) {
            item[index].style.zIndex = "0"
        }

        next.addEventListener("click", () => {
            clearInterval(interval)
            nextSlide = currentSlide.nextElementSibling
            if (!nextSlide) {
                nextSlide = item[0]
            }
            nextSlide.classList.add("slide__item--active")
            nextSlide.style.zIndex = 3
            currentSlide.classList.remove("slide__item--active")
            currentSlide.style.zIndex = 0
            currentSlide = nextSlide
            interval = loop()
        })
        prev.addEventListener("click", () => {
            clearInterval(interval)
            nextSlide = currentSlide.previousElementSibling
            if (!nextSlide) {
                nextSlide = item[item.length - 1]
            }
            nextSlide.classList.add("slide__item--active")
            nextSlide.style.zIndex = 3
            currentSlide.classList.remove("slide__item--active")
            currentSlide.style.zIndex = 0
            currentSlide = nextSlide
            interval = loop()
        })
        function reset() {
            if (run) {
                clearInterval(run)

            }
        }
    }
}));


window.onload = () => {
    var slider = Slider("slide", {
        slidesPerView: 1,
        auto: true,
        start: 0,
        loop: true,
        duration: 2000,
    })

    const swiper = new Swiper('.swiper', {
        // Optional parameters

        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}