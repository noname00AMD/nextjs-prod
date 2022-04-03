function createSlide(name, opts) {
    var slide = document.getElementsByClassName(name)[0]
    var container = slide.getElementsByClassName("slide__container")[0]
    var slideWidth = slide.offsetWidth
    var slideHeight = slide.offsetHeight
    var item = slide.getElementsByClassName("slide__item")
    var containerWidth = (item.length * 100) / opts.show
    var itemWidth = 100 / opts.show
    var i = 1;
    container.style.width = containerWidth + "%"
    container.style.gridTemplateColumns = " repeat( "+item.length+" , 1fr)"
    container.style.transform = " translateX(-"+ ( 100 / item.length ) * (opts.start - 1)  +"%)"
    if(opts.auto){
        var auto = setInterval(() => {
            i++;
            if(i> item.length){
                i = 1;
            }
            upDateSlide(container , item , i)
        }, opts.duration);
    }


}
function upDateSlide(container , item , i) {
    container.style.transform = " translateX(-"+ ( 100 / item.length ) * (i - 1)  +"%)"
}
window.onload = () => {

    createSlide("slide", {
        show: 2,
        auto: true,
        start : 1 , 
        duration: 1500
    })

}
