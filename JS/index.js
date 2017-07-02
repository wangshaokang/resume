/**
 * Created by Administrator on 2017/5/5.
 */
!function(){
    function refreshRem(result){
        var winW=document.documentElement.clientWidth;
        var desW=winW/result;
        document.documentElement.style.fontSize=desW*100+'px';
    }
    refreshRem(750);
    window.addEventListener('resize',refreshRem);
}(750);
var mySwiper=new Swiper('.swiper-container',{
    direction:'vertical',//竖屏显示
    loop:true,// 无缝连接
    effect : 'coverflow',
    pagination : '.swiper-pagination',
    paginationType : 'progress',
    onTransitionEnd: function (swiper) {
        // swiper.slides 获取的是一个对象数组 滑块
        var slides = swiper.slides;
        // swiper.activeIndex 当前滑块的索引值
        var curIndex = swiper.activeIndex;
        //所有滑块的长度
        var total = slides.length;
        var targetId = 'page0';
        switch (curIndex) {
            case 0:
                targetId += (total - 2);
                break;
            case total - 1:
                targetId += 1;
                break;
            default:
                targetId += curIndex;
        }
        [].forEach.call(slides, function (item, index) {

            if (curIndex === index) {
                item.id = targetId;
            } else {
                item.id = null;
            }
        })
    }

})

var oMusic = document.getElementById('music');
var audioMusic = document.getElementById('autoMove');
window.setTimeout(function () {
    audioMusic.play();
    oMusic.style.opacity=1;
    audioMusic.addEventListener('canplay', function () {
        oMusic.className='music musicMove';
    }, false);
}, 1000);
oMusic.onclick=function (){
    if (audioMusic.paused){
        audioMusic.play();
        oMusic.style.webkitAnimationPlayState='running';
        oMusic.className = 'music musicMove';
    } else {
        audioMusic.pause();
        oMusic.className = 'music';
        oMusic.style.opacity=1;
        oMusic.style.webkitAnimationPlayState='paused';
    }
};