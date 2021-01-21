const body = document.body, scrollWrap = document.getElementsByClassName('smooth-scroll-wrapper')[0],
height = scrollWrap.getBoundingClientRect().height - 1, speed = 0.03;

let offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScoll() {
    offset += (window.pageYOffset - offset) * speed;

    let scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScoll);
}

smoothScoll();